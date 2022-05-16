p = 0;

const articles = document.getElementById('articles');
const list = document.getElementById('listArticle');

fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@guillaumedaavid")
.then((resp) => resp.json())
.then(function(response){
  for (let i = 0; i<response.items.length; i++){
    const articles = document.getElementById('articles');
    const list = document.getElementById('listArticle');
    const block = document.createElement('div');
    const newA = document.createElement('a');
    const image = document.createElement('img');
    const next = document.getElementById('next');
    image.classList.add('img_block-articles');
    image.src = response.items[i].thumbnail;
    image.alt = response.items[i].categories[0];
    newA.textContent = response.items[i].title;
    newA.href = response.items[i].link;
    newA.target = "_blank";
    newA.classList.add('link_article')
    block.classList.add('block_articles');
    block.id = i;
    const newTitle = document.createElement('h3');
    newTitle.appendChild(newA);
    block.appendChild(image);
    block.appendChild(newTitle);
    list.appendChild(block);
  };

  document.getElementById('next').addEventListener('click', function(){
    if (p>-(response.items.length-4)){
    p--;
    list.style.transform = "translate("+p*25+"vw)";
    list.style.transition = "all 0.5s ease";
  }
  })

  document.getElementById('previous').addEventListener('click', function(){
    if (p < 0){
    p++;
    list.style.transform = "translate("+p*25+"vw)";
    list.style.transition = "all 0.5s ease";
  }
  })
});
