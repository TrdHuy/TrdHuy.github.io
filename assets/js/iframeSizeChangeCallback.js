function getQueryParams() {
     const params = {};
     const queryString = window.location.search.substring(1);
     const regex = /([^&=]+)=([^&]*)/g;
     let m;
     while (m = regex.exec(queryString)) {
          params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
     }
     return params;
}
const params = getQueryParams();
const frameId = params.iframeId;
const shouldNotifyWidth = params.shouldNotifyWidth == '1';
window.frameId = frameId;
function sendSize_resize() {
     const constract = window.TRD_CONSTRACT
     const height = document.documentElement.scrollHeight;
     const width = document.documentElement.scrollWidth;
     if (shouldNotifyWidth) {
          constract.sendMessageToParent(constract.EVENT.IFRAME_CONTENT_SIZE_CHANGED, { frameId, height, width });
     } else {
          constract.sendMessageToParent(constract.EVENT.IFRAME_CONTENT_SIZE_CHANGED, { frameId, height });
     }
}
function sendSize_load() {
     const constract = window.TRD_CONSTRACT
     const height = document.documentElement.scrollHeight;
     const width = document.documentElement.scrollWidth;
     if (shouldNotifyWidth) {
          constract.sendMessageToParent(constract.EVENT.IFRAME_CONTENT_SIZE_CHANGED, { frameId, height, width });
     } else {
          constract.sendMessageToParent(constract.EVENT.IFRAME_CONTENT_SIZE_CHANGED, { frameId, height });
     }
}
window.addEventListener('load', sendSize_load);
window.addEventListener('resize', sendSize_resize);