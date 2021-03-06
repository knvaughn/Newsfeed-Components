// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import { data } from '../data';

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

function articleMaker(article) {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const date = document.createElement('p');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const span = document.createElement('span');
  div.classList.add('article');
  h2.textContent = article.title;
  date.classList.add('date');
  date.textContent = article.date;
  p1.textContent = article.firstParagraph;
  p2.textContent = article.secondParagraph;
  p3.textContent = article.thirdParagraph;
  span.classList.add('expandButton');
  span.textContent = '+ Click to Expand';
  div.appendChild(h2);
  div.appendChild(date);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(span);
  span.addEventListener('click', (event) => {
    div.classList.toggle('article-open');
    const isOpen = div.classList.contains('article-open');
    span.textContent = isOpen ? '-- Click to Close' : '+ Click to Expand';
  });
  return div;
};
const articles = document.querySelector('.articles');
data.map((article) => {
  articles.appendChild(articleMaker(article))
});