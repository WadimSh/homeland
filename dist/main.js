(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var e=1,n=document.querySelector(".comment__next-button"),r=document.querySelector(".comment__previous-button"),o=document.querySelector(".partners__submit"),i=function(n){var r=document.getElementsByClassName("comment__item");n>r.length&&(e=1),n<1&&(e=r.length);var o,i=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}(r);try{for(i.s();!(o=i.n()).done;)o.value.style.display="none"}catch(t){i.e(t)}finally{i.f()}r[e-1].style.display="flex"};n.addEventListener("click",(function(){i(e+=1)})),r.addEventListener("click",(function(){i(e-=1)})),o.addEventListener("click",(function(){evt.preventDefault()})),i(e)})();