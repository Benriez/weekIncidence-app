if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,n,a)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const s={uri:location.origin+c.slice(1)};return Promise.all(n.map(c=>{switch(c){case"exports":return i;case"module":return s;default:return e(c)}})).then(e=>{const c=a(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-71284985"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quasar-weahter-app"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"buymeacoffee.svg",revision:"48696e72940aaf737ba70959c3bc519a"},{url:"css/2.e85b2fd6.css",revision:"8fb5127505cd4eaf037b365533a5a732"},{url:"css/3.cbdc44b5.css",revision:"d6a1a0775715d11fbaab2b9ea2285571"},{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.bbab4e4d.css",revision:"734b1b47b06f57b9e63949a093523381"},{url:"favicon.ico",revision:"2402f0d4a89245a8752aba5e7b114c45"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.0cd122a9.woff",revision:"3e818a94fbf09bb3f988bf070952b382"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.2987c5cc.woff2",revision:"945837e0b4566b601ce571159eb59e07"},{url:"icons/apple-icon-120x120.png",revision:"8cdb2adc1851344349e97af9982439cf"},{url:"icons/apple-icon-152x152.png",revision:"c594f739abab9236bda50b49edb5909c"},{url:"icons/apple-icon-167x167.png",revision:"b1ea87ddfe22e118f1d2f67169ba841c"},{url:"icons/apple-icon-180x180.png",revision:"8f8cedd2149f232bb202a6796e297019"},{url:"icons/apple-launch-1125x2436.png",revision:"269c49927dfe6ed229866dee309673e7"},{url:"icons/apple-launch-1242x2208.png",revision:"227e51e5be6bfd4b094a0ad47cb975b9"},{url:"icons/apple-launch-1242x2688.png",revision:"1a6ba3dd5aa865828e9bf1f2d3bcf211"},{url:"icons/apple-launch-1536x2048.png",revision:"3d9bd6791304a474927ee9bd1d137c4d"},{url:"icons/apple-launch-1668x2224.png",revision:"4ff97803635776a3d934f8d9ee85653e"},{url:"icons/apple-launch-1668x2388.png",revision:"c84327b27064e118c4e8620f4c6a226c"},{url:"icons/apple-launch-2048x2732.png",revision:"5b4a69ad83cff677a404a5ed00265612"},{url:"icons/apple-launch-640x1136.png",revision:"a34595556f5762847352c827cb2e44de"},{url:"icons/apple-launch-750x1334.png",revision:"ae0d8354e1ac6ad3c7e1b17d2b80b119"},{url:"icons/apple-launch-828x1792.png",revision:"82255fdbec66445dcc83958af216ae25"},{url:"icons/favicon-128x128.png",revision:"5000187898d99a6f8b1fec053e5206c8"},{url:"icons/favicon-16x16.png",revision:"6d1da523d6d3cdbb099ef183582fddfe"},{url:"icons/favicon-32x32.png",revision:"17eccd1434424642b940ed911cc93f3a"},{url:"icons/favicon-96x96.png",revision:"185b5bba288a7fb7d5e13018ebc4d8c1"},{url:"icons/icon-128x128.png",revision:"5000187898d99a6f8b1fec053e5206c8"},{url:"icons/icon-192x192.png",revision:"ac893d78eaea3be7ad5b3ec3939b91cc"},{url:"icons/icon-256x256.png",revision:"a7ff9d4c11312494627909059aa3105f"},{url:"icons/icon-384x384.png",revision:"ad26ca50860bf57fe50cab72dfaa48cb"},{url:"icons/icon-512x512.png",revision:"2e083d651c26f27c82c0b7357728b2ec"},{url:"icons/ms-icon-144x144.png",revision:"331a5b87449ced684d6c3b690ea9c2d1"},{url:"icons/safari-pinned-tab.svg",revision:"df1219a24ebdec3bcb728781b6e259de"},{url:"index.html",revision:"62a27a34b06628a1b774d5cb0078d23c"},{url:"js/2.c103b5cd.js",revision:"797561cc8f085a77bedd8beea0272836"},{url:"js/3.be1ac2b0.js",revision:"f97c02f0dd0fd38ec44fc74e7cd520ba"},{url:"js/4.d44a6c67.js",revision:"89d6306135bc17fed09d47abc132fc96"},{url:"js/5.85f87d1f.js",revision:"bb9e038513824fa4301f1786a29c9174"},{url:"js/app.e99b83b5.js",revision:"752ca64e2fc0a79b72c637a29a51dd84"},{url:"js/vendor.f0621039.js",revision:"bc9ef8cf31a723427facc67e210a62ba"},{url:"manifest.json",revision:"c69adc7c3ce251dc659e6f97b0993f82"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
