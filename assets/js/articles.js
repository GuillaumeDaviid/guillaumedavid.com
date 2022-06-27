let p = 0;

//const articles = document.getElementById('articles');
const list = document.getElementById('list-article');

fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@guillaumedaavid')
  .then((resp) => resp.json())
  .then(function (response) {
    for (let i = 0; i < response.items.length; i++) {
  //  const articles = document.getElementById('articles');
      const list = document.getElementById('list-article');
      const block = document.createElement('div');
      const newA = document.createElement('a');
      const image = document.createElement('img');
  //  const next = document.getElementById('next');
      image.classList.add('img-block-articles');
      image.src = response.items[i].thumbnail;
      image.alt = response.items[i].categories[0];
      newA.textContent = response.items[i].title;
      newA.href = response.items[i].link;
      newA.target = '_blank';
      newA.classList.add('link-article')
      block.classList.add('block_articles');
      block.id = i;
      const newTitle = document.createElement('h3');
      newTitle.appendChild(newA);
      block.appendChild(image);
      block.appendChild(newTitle);
      list.appendChild(block);
    };
    const more = document.createElement('a');
    const container = document.createElement('div');
    container.classList.add('block-more');
    more.href = 'https://medium.com/@guillaumedaavid';
    more.classList.add('more')
    more.target = '_blank';
    more.textContent = "Voir plus d'articles ->";
    container.appendChild(more);
    list.appendChild(container);

  document.getElementById('next').addEventListener('click', function () {
      if (p >- (response.items.length-3) ) {
        p--;
        list.style.transform = "translate(" + p * 25 + "vw)";
        list.style.transition = 'all 0.5s ease';
      }
  })

  document.getElementById('previous').addEventListener('click', function () {
      if (p < 0){
        p++;
        list.style.transform = "translate(" + p * 25 + "vw)";
        list.style.transition = 'all 0.5s ease';
       }
    })
  });
