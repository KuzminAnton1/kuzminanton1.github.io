!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=(e,t)=>{const n=document.querySelectorAll(e);n.forEach(e=>{e.addEventListener("mouseover",()=>{e.querySelector("div").style.transform=`translate(${t}%)`})}),n.forEach(e=>{e.addEventListener("mouseout",()=>{e.querySelector("div").style.transform="translate(0%)"})})};var l=(e,t,n,o,l,r)=>{const c=document.querySelectorAll(e),s=document.querySelector(t),d=document.querySelector(n),i=document.querySelector(o);let a,u=[0,1,2];function y(e){c.forEach(e=>{e.style.display="none",e.classList.remove(l),e.classList.remove(r)}),e.forEach(e=>{c[e].style.display="block"})}function m(e){const t=e[2];c[t].classList.add(l)}function v(){a=setInterval(()=>{L(1),m(u)},3e3)}function f(){clearInterval(a)}function L(e){let t=[u[1],u[2]],n=[...t,t[1]+e];n[2]>8&&(n=[0,1,2]),u=[...n],y(n)}y(u),v(),d.addEventListener("click",()=>{L(1),m(u),f()}),s.addEventListener("click",()=>{!function(e){let t=[u[0],u[1]],n=[t[0]+e,...t];n[0]<0&&(n=[6,7,8]),u=[...n],y(n)}(-1),function(e){const t=e[0];c[t].classList.add(r)}(u),f()}),i.addEventListener("mouseout",()=>{v()}),i.addEventListener("mouseover",()=>{f()})};var r=(e,t,n,o)=>{const l=document.querySelectorAll(e),r=document.querySelector(t),c=document.querySelector(n);let s=0;function d(e){e<0&&(s=l.length-1),e>l.length-1&&(s=0),l.forEach(e=>{e.style.display="none"}),l[s].style.display="block",l[s].classList.add(o)}function i(e){d(s+=e)}d(s),r.addEventListener("click",()=>{i(-1)}),c.addEventListener("click",()=>{i(1)})};var c=(e,t,n,o,l,r)=>{const c=document.querySelector(e),s=document.querySelectorAll(t),d=document.querySelectorAll(n);let i=0;function a(e){s.forEach(e=>{e.classList.remove(o)}),d.forEach(e=>{e.style.display="none",e.classList.remove(l)}),s[e].classList.add(o),d[e].style.display=function(){let e;return document.documentElement.clientWidth>992&&(e="flex"),document.documentElement.clientWidth<992&&(e="grid"),e}(),d[e].classList.add(l)}a(i),window.addEventListener("resize",()=>{a(i)}),c.addEventListener("click",e=>{e.target&&e.target.classList.contains(t.slice(1))&&s.forEach((e,t)=>{e.addEventListener("click",()=>{i=t,a(i),document.querySelectorAll(r).forEach(e=>{e.click()})})})})};var s=(e,t,n,o,l)=>{const r=document.querySelectorAll(e),c=document.querySelectorAll(t),s=document.querySelectorAll(n),d=document.querySelectorAll(o);d.forEach(e=>{e.style.display="none"}),r.forEach((e,t)=>{e.addEventListener("click",()=>{d[t].style.display="block",d[t].classList.add(l),s[t].classList.remove(l),s[t].style.display="none"})}),c.forEach((e,t)=>{e.addEventListener("click",()=>{d[t].style.display="none",d[t].classList.remove(l),s[t].style.display="block",s[t].classList.add(l)})})};var d=(e,t)=>{const n=document.querySelector(e),o=document.querySelector(t);n.addEventListener("click",e=>{e.preventDefault(),o.classList.toggle("hide-toggle-menu"),o.classList.contains("hide-toggle-menu")?document.querySelector(".link").querySelector("svg").style.transform="none":document.querySelector(".link").querySelector("svg").style.transform="rotate(180deg)"}),document.addEventListener("click",e=>{e.target!=o&&"LI"!=e.target.nodeName&&e.target!=n&&(o.classList.remove("hide-toggle-menu"),document.querySelector(".link").querySelector("svg").style.transform="rotate(180deg)")})};var i=(e,t,n,o,l,r)=>{const c=document.querySelector(e),s=document.querySelector(t),d=document.querySelector(n),i=document.querySelector(o);function a(e,t,n){e.classList.remove(r),e.style.display="none",t.classList.remove(l),t.style.display="none",n.style.display="block"}s.addEventListener("click",()=>{var e,t,n;t=c,n=s,(e=i).classList.add(r),e.style.display="block",t.classList.add(l),t.style.display="block",n.style.display="none",document.body.style.overflow="hidden"}),d.addEventListener("click",()=>{a(i,c,s),document.body.style.overflow=""}),document.body.addEventListener("click",e=>{e.target.classList.contains(o.slice(1))&&(a(i,c,s),document.body.style.overflow="")})};var a=(e,t,n,o)=>{const l=document.querySelector(e),r=document.querySelector(t);window.addEventListener("resize",()=>{document.documentElement.clientWidth<=768&&r.classList.add(o),document.documentElement.clientWidth>768&&r.classList.remove(o)}),l.addEventListener("click",()=>{r.classList.toggle(o),r.classList.add(n)})};var u=e=>{const t=document.querySelector(e);t.style.display="none",window.addEventListener("scroll",()=>{document.documentElement.scrollTop>1500&&(t.style.display="block"),document.documentElement.scrollTop<1500&&(t.style.display="none"),window.innerHeight+window.scrollY>=document.body.offsetHeight&&(t.style.display="none")}),t.addEventListener("click",()=>{window.scrollTo(0,0)})};window.addEventListener("DOMContentLoaded",()=>{o(".btn-wrap",40),o(".tab_btn",60),o(".form_btn",70),l(".slider-racing__wrap__item",".prev",".next",".slider-racing__wrap","anim-race-next","anim-race-prev"),r(".details__slider__item",".details__slider_prev",".details__slider_next","anim"),c(".service__tabs-content_tabs",".tabs_item",".service__tabs-content_item","active","active-content",".tab-detail_btn"),s(".tab_btn",".tab-detail_btn",".tab",".tab-detail","active-cart"),d(".toggle-link",".toggle-menu"),i(".main__menu",".logo",".menu-close",".burger-menu","active-menu","active-fone"),a(".footer_menu",".footer_toggle_menu","active-footer-menu","hide_menu"),u(".arrow")})}]);