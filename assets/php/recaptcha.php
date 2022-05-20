<!doctype html>
<?php
$email_expediteur = 'guillaumedaavidpro@gmail.com';
$nom_expediteur = 'Contact guillaumedavid.com';

// destinataire est votre adresse mail (cela peut être la même que cl'expéditeur ci-dessus). Pour envoyer à plusieurs destinataires à la fois, séparez-les par un point-virgule
$destinataire = 'guillaumedaavidpro@gmail.com';

// copie ? (envoie une copie au visiteur)
$copie = 'oui'; // 'oui' ou 'non'

// Messages de confirmation du mail
$message_envoye = "Votre message nous est bien parvenu !";
$message_non_envoye = "L'envoi du mail a échoué, veuillez réessayer SVP.";

// Messages d'erreur du formulaire
$message_erreur_formulaire = "Vous devez d'abord <a href=\"contact.html\">envoyer le formulaire</a>.";
$message_formulaire_invalide = "Vérifiez que tous les champs soient bien remplis et que l'email soit sans erreur.";


$objet = "Contact";

ini_set("SMTP","smtp.gmail.com");
ini_set("sendmail_from","guillaumedaavidpro@gmail.com>");
/*
	********************************************************************************************
	FIN DE LA CONFIGURATION
	********************************************************************************************
*/

function checkToken($token, $secret_key){
	$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret_key&response=$token";

	$curl = curl_init($url);

	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	$verif = curl_exec($curl);

	if(empty($verif)){
		return false;
	}
	else{
		$json = json_decode($verif);
		return $json->success;
	}



}
$secret_key = '6LfYwUEcAAAAADolWcj_XgEn9a9jDxDcoYHuS4xZ';

if (checkToken($_POST['g-recaptcha-response'], $secret_key)){

// on teste si le formulaire a été soumis
if (isset($_POST['envoi']))
{
	// formulaire non envoyé
	echo '<p>'.$message_erreur_formulaire.'</p>'."\n";
}
else
{
	/*
	 * cette fonction sert à nettoyer et enregistrer un texte
	 */
	function Rec($text)
	{
		$text = htmlspecialchars(trim($text), ENT_QUOTES);
		if (1 === get_magic_quotes_gpc())
		{
			$text = stripslashes($text);
		}

		$text = nl2br($text);
		return $text;
	};

	/*
	 * Cette fonction sert à vérifier la syntaxe d'un email
	 */
	function IsEmail($email)
	{
		$value = preg_match('#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#', $email);
		return (($value === 0) || ($value === false)) ? false : true;
	}

	// formulaire envoyé, on récupère tous les champs.
	$nom     = (isset($_POST['user_name']))     ? Rec($_POST['user_name'])     : '';
	$email   = (isset($_POST['user_mail']))   ? Rec($_POST['user_mail'])   : '';
	/*$objet   = (isset($_POST['objet']))   ? Rec($_POST['objet'])   : ''; */
	$message = (isset($_POST['user_message'])) ? Rec($_POST['user_message']) : '';
	$objet = "Contact guillaumedavid.com";

	// On va vérifier les variables et l'email ...
	$email = (IsEmail($email)) ? $email : ''; // soit l'email est vide si erroné, soit il vaut l'email entré

	if (($nom != '') && ($email != '') && ($message != ''))
	{
		// les 4 variables sont remplies, on génère puis envoie le mail
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'From:'.$email.' <'.$email_expediteur.'>' . "\r\n" .
				'Reply-To:'.$email. "\r\n" .
				'Content-Type: text/plain; charset="utf-8"; DelSp="Yes"; format=flowed '."\r\n" .
				'Content-Disposition: inline'. "\r\n" .
				'Content-Transfer-Encoding: 7bit'." \r\n" .
				'X-Mailer:PHP/'.phpversion();

		// envoyer une copie au visiteur ?
		if ($copie == 'oui')
		{
			$cible = $destinataire.';'.$email;
		}
		else
		{
			$cible = $destinataire;
		};

		// Remplacement de certains caractères spéciaux
		$caracteres_speciaux     = array('&#039;', '&#8217;', '&quot;', '<br>', '<br />', '&lt;', '&gt;', '&amp;', '…',   '&rsquo;', '&lsquo;');
		$caracteres_remplacement = array("'",      "'",        '"',      '',    '',       '<',    '>',    '&',     '...', '>>',      '<<'     );

		$objet = html_entity_decode($objet);
		$objet = str_replace($caracteres_speciaux, $caracteres_remplacement, $objet);

		$message = html_entity_decode($message);
		$message = str_replace($caracteres_speciaux, $caracteres_remplacement, $message);

		// Envoi du mail
		$cible = str_replace(',', ';', $cible); // antibug : j'ai vu plein de forums où ce script était mis, les gens ne font pas attention à ce détail parfois
		$num_emails = 0;
		$tmp = explode(';', $cible);
		foreach($tmp as $email_destinataire)
		{
			if (mail($email_destinataire, $objet, $message, $headers))
				$num_emails++;
		}

		if ((($copie == 'oui') && ($num_emails == 2)) || (($copie == 'non') && ($num_emails == 1)))
		{
			echo '<p>'.$message_envoye.'</p>';
			header("Refresh: 1;URL=../../index.html");
		}
		else
		{
			echo '<p>'.$message_non_envoye.'</p>';
			header("Refresh: 5;URL=../../index.html");
		};
	}
	else
	{
		// une des 3 variables (ou plus) est vide ...
		echo '<p>'.$message_formulaire_invalide.' <a href="../../index.html">Retour au formulaire</a></p>'."\n";
		header("Refresh: 5;URL=../../index.html");
	};
}; // fin du if (!isset($_POST['envoi']))
};

?>
