if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const u=e=>s(e,l),t={module:{uri:l},exports:o,require:u};i[l]=Promise.all(n.map((e=>t[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"site-pojo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.7d6ea257.css",revision:null},{url:"/css/chunk-vendors.5989ce8c.css",revision:null},{url:"/img/java.f162d09b.png",revision:null},{url:"/img/kill-monster.ee60f1c4.jpg",revision:null},{url:"/img/knowledge-base.63bc6e49.jpg",revision:null},{url:"/img/reactjs.3b7f4ee1.png",revision:null},{url:"/img/stock-trader.375f4c87.jpg",revision:null},{url:"/img/treinatweet.65fdcb14.jpg",revision:null},{url:"/img/vue-todo-list.5acfe5d0.jpg",revision:null},{url:"/img/vuejs.1be5a567.png",revision:null},{url:"/index.html",revision:"266932113ed921ae2a30bc705de87efb"},{url:"/js/app.99961373.js",revision:null},{url:"/js/chunk-vendors.d070abeb.js",revision:null},{url:"/manifest.json",revision:"02a1152b0045a5ba10ee1ede8b11b7c2"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map