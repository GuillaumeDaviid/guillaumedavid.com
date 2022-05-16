let min = 0;
let max = 3;

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
  console.log(response.items[0].categories[0]);
});

document.getElementById('next').addEventListener('click', function(){
  list.style.transform = "translate(-23.5vw)";
  list.style.transition = "all 0.5s ease";
})
