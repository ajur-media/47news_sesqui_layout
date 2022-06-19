document.addEventListener("DOMContentLoaded", ready);

function ready() {
   let loadMoreButton = document.getElementById("loadMoreArticles-button");
   loadMoreButton.addEventListener("click", loadCardsToNewslist);
   loadMoreButton.addEventListener("click", loadNewsToSidebar);
};

function loadCardsToNewslist() {
   let newslist = document.getElementById('newslist');
   let article = makeArticleDomElement();

   newslist.insertAdjacentElement('beforeend', article);
   newslist.insertAdjacentElement('beforeend', makeArticleDomElement());
   newslist.insertAdjacentElement('beforeend', makeArticleDomElement());
   newslist.insertAdjacentElement('beforeend', makeArticleDomElement());
   newslist.insertAdjacentElement('beforeend', makeArticleDomElement());
   newslist.insertAdjacentElement('beforeend', makeArticleDomElement());
};

function makeArticleDomElement() {
   let articleContent = getArticleContent();

   let article = document.createElement("article");
   article.className ="newslist__item";

   let articleInnerHtml = '<a href="/articles/'+
      articleContent.articleId +
      '/"><img class="newslist__item_image" src="'+
      articleContent.imgLink +
      '" alt=""> <div class="newslist__item_label">'+
      articleContent.label +
      '</div> <div class="newslist__item_content"> <h2 class="newslist__item_title">'+
      articleContent.headline +
      '</h2><div class="news-item__datetime">'+
      articleContent.datetime +
      '<span class="icon-label"><img class="icon-label__image" src="https://47news.ru/frontend/images/icons/ico_photo.png"></span>'
      +
      '</div></div></a>';
   article.innerHTML = articleInnerHtml;
   return article;
}

function getArticleContent() {
   let parameters = {
      articleId: "1234567",
      imgLink: "https://i.47news.ru/photos/2022/03//resize_20220312_bdmwpxkputzfoeoineb3.jpg",
      label: "Власть",
      headline: 'Рыбный текст заголовка новостной статьи, которая будет загружена после нажатия на кнопку "Показать больше"',
      datetime: "01.05.2022"
   };
   return parameters;
};

function loadNewsToSidebar() {
   let sidebar = document.getElementById('sidebar-content');

   sidebar.insertAdjacentHTML('beforeend', makeNewsItemHtml());
   sidebar.insertAdjacentHTML('beforeend', makeNewsItemHtml());
   sidebar.insertAdjacentHTML('beforeend', makeNewsItemHtml());
   sidebar.insertAdjacentHTML('beforeend', makeNewsItemHtml());
   sidebar.insertAdjacentHTML('beforeend', makeNewsItemHtml());
   sidebar.insertAdjacentHTML('beforeend', makeNewsItemHtml());
   
};

function makeNewsItemHtml() {
   let newsItemContent = getNewsItemContent();

   let newsItemInnerHtml = '<a class="news-item" href="/articles/'+
      newsItemContent.articleId +
      '/"><div class="news-item__title">'+
      newsItemContent.headline +
      '</div><div class="news-item__datetime">'+
      newsItemContent.datetime +
      '<span class="icon-label"><img class="icon-label__image" src="https://47news.ru/frontend/images/icons/ico_video.png"></span>'
      +
      '</div></a>';
   return newsItemInnerHtml;
}

function getNewsItemContent() {
   let parameters = {
      articleId: "213640",
      headline: 'Рыбный текст заголовка новости, которая будет загружена в сайдбар по нажатию на "Показать больше"',
      datetime: "22:24"
   };
   return parameters;
};