"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","25893ee94d05c2918869f9857a286482"],["/static/css/main.3d10e34d.css","c246513f92b776b4a9e7ebd6b3c2566f"],["/static/js/main.caa04d1c.js","82bafb7877162c39b84c815f0eb55a49"],["/static/media/books.b73a0b0a.svg","b73a0b0a606ad287467663a83b983104"],["/static/media/laptop.299b8f69.svg","299b8f69da3af7ea4c5837a105af1271"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/pdf.4c982e39.svg","4c982e39e8756062a1f31184001c73ac"],["/static/media/pencil.56d386f6.svg","56d386f6a7276c0b0cda500e47ef8eb1"],["/static/media/slides.a36ff82c.png","a36ff82c04d5623f090076d50accb109"],["/static/media/star-0.84e3bf09.svg","84e3bf097aee76b0606af5df25f59725"],["/static/media/star-1.129b3a91.svg","129b3a91374b8728749df4544476b5a5"],["/static/media/star-2.fd01f798.svg","fd01f79892472fc4f45dd6ecff252b20"],["/static/media/star-3.46a6d0dc.svg","46a6d0dc75ef0aa47a7ddeaca0b99e0b"],["/static/media/star-4.5edc64e3.svg","5edc64e3c00a70566004e68bc5fde71f"],["/static/media/star-5.ba8442f0.svg","ba8442f0c51d9055afdecd52272e1c13"],["/static/media/star-6.44db7069.svg","44db70692ed8410a2b814018d10fc50f"],["/static/media/star-7.962ee5cc.svg","962ee5cc0544aaa5853d5fce7f3c5c1f"],["/static/media/star-8.3403b591.svg","3403b59152a6969abf78f2bdd38ffd03"],["/static/media/star-9.bd1c4e64.svg","bd1c4e6468ed777d22753428b4ae6300"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
