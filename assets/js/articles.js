fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@guillaumedaavid")
.then((resp) => resp.json())
.then(function(response){
  for (let i = 0; i<response.items.length; i++){
    const articles = document.getElementById('articles');
    const block = document.createElement('div');
    const newA = document.createElement('a');
    const image = document.createElement('img');
    image.classList.add('img_block-articles');
    image.src = response.items[i].thumbnail;
    newA.textContent = response.items[i].title;
    newA.href = response.items[i].link;
    newA.target = "_blank";
    newA.classList.add('link_article')
    block.classList.add('block_articles');
    const newTitle = document.createElement('h3');
    newTitle.appendChild(newA);
    block.appendChild(image);
    block.appendChild(newTitle);
    articles.appendChild(block);
  };
  console.log(response.items)
});
