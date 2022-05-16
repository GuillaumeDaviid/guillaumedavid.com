fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@guillaumedaavid")
.then((resp) => resp.json())
.then(function(response){
  console.log(response)
});
