!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var n=()=>'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="/">\n                        My Book\n                    </a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/favorites/">\n                    Mis favoritos\n                </a>\n            </div>\n        </div>\n    ';const r="books.json";var o=async e=>{const t=e?`${r}${e}`:r;try{const e=await fetch(t);return await e.json()}catch(e){console.log("Fetch Error",e)}};var i=()=>'\n    <div class="Error404">\n        <h2>Error 404</h2>\n    </div>\n    ';var s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var l=e=>e.length<=3?"/"===e?e:"/:id":"/"+e;const c={"/":async()=>{const e=await o();let t=JSON.parse(localStorage.getItem("favorites"));t||(t=[]);return`\n    <div class="Characters">\n        ${e.books.map(e=>`\n        <article class="Character-item">\n            <a href="#/">\n                <img src="${e.image}" alt="${e.title}">\n                <h2>${e.title}</h2>\n            </a>\n            <span class="${t.find(t=>t===e.isbn13)?"heart":"heart-empty"}" data-id="${e.isbn13}" data-name="${e.title}"></span>  \n        </article>\n        `).join("")}\n    </div>\n    `},"/favorites":async()=>{let e=await o(),t=JSON.parse(localStorage.getItem("favorites"));e=e.books.filter(e=>t.includes(e.isbn13));return`\n      <div class="">\n          <h2> <span class="heart"></span> Lista de libros favoritos</h2> \n      </div>\n      <div class="container">\n      ${e.map(e=>`\n      <article class="Character-item">\n              <img src="${e.image}" alt="${e.title}">\n              <h2>${e.title}</h2>\n          <span class="${t.find(t=>t===e.isbn13)?"heart":"heart-empty"}" data-id="${e.isbn13}" data-name="${e.title}"></span>  \n      </article>\n      `).join("")}\n      </div>\n      `}};var d=async()=>{const e=document.getElementById("header"),t=document.getElementById("content");e.innerHTML=await n();let a=s(),r=await l(a),o=c[r]?c[r]:i;t.innerHTML=await o();let d=document.getElementsByClassName("heart-empty");for(let e of d)e.addEventListener("click",(function(){let e=[];localStorage.getItem("favorites")&&(e=JSON.parse(localStorage.getItem("favorites"))),alert(`Agregaste ${this.dataset.name} a favoritos`),e.push(this.dataset.id),localStorage.setItem("favorites",JSON.stringify(e)),window.location.reload(!0)}));let f=document.getElementsByClassName("heart");for(let e of f)e.addEventListener("click",(function(){let e=[];localStorage.getItem("favorites")&&(e=JSON.parse(localStorage.getItem("favorites"))),alert(`Borraste ${this.dataset.name} de favoritos`),e=e.filter(e=>e!==this.dataset.id),localStorage.setItem("favorites",JSON.stringify(e)),window.location.reload(!0)}))};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);