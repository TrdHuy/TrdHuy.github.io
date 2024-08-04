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
window.frameId = frameId;
function sendSize_resize() {
     const constract = window.TRD_CONSTRACT
     const height = document.documentElement.scrollHeight;
     const width = document.documentElement.scrollWidth;
     constract.sendMessageToParent(constract.EVENT.IFRAME_CONTENT_SIZE_CHANGED, { frameId, height, width });
}
function sendSize_load() {
     const constract = window.TRD_CONSTRACT
     const height = document.documentElement.scrollHeight;
     const width = document.documentElement.scrollWidth;
     constract.sendMessageToParent(constract.EVENT.IFRAME_CONTENT_SIZE_CHANGED, { frameId, height, width });
}
window.addEventListener('load', sendSize_load);
window.addEventListener('resize', sendSize_resize);