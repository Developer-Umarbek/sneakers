const $ = function (selector) {
   return document.querySelector(selector);
}

const $a = function (selector) {
   return document.querySelectorAll(selector);
}


// elements

const create = function (tagName, className, content) {
   const newElement = document.createElement(tagName);

   if (className) {
      newElement.classList.add(className);
   }
   if (content) {
      newElement.innerHTML = `${content}`;
   }

   return newElement;

}