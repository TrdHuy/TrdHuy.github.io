(()=>{function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var n=new Map;document.querySelectorAll("iframe").forEach((function(t){n.set(t.id,t),t.onload=function(){var n=t.contentDocument;t.documentContentResizeObserver?(t.documentContentResizeObserver.disconnect(),t.documentContentResizeObserver.observe(n.documentElement)):(t.documentContentResizeObserver=new ResizeObserver((function(n){var r,o=e(n);try{for(o.s();!(r=o.n()).done;){var i=r.value;t.style.height=i.target.scrollHeight+"px","true"===t.getAttribute("observingWidth")&&(t.style.width=i.target.scrollWidth+"px")}}catch(e){o.e(e)}finally{o.f()}})),t.documentContentResizeObserver.observe(n.documentElement))}})),window.loadFormToIFrame=function(e,t){var n=e+"?iframeId="+t.id+"&shouldNotifyWidth=1";t.src=n};var r=function(){for(var e,t={},n=window.location.search.substring(1),r=/([^&=]+)=([^&]*)/g;e=r.exec(n);)t[decodeURIComponent(e[1])]=decodeURIComponent(e[2]);return t}(),o=r.iframeId;r.shouldNotifyWidth;window.frameId=o})();