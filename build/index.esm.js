import{useRef as e,useCallback as r,useEffect as n,useMemo as t,useState as o}from"react";import{jsx as i}from"react/jsx-runtime";function a(t){var o=t.redirectUri,i=t.clientId,a=t.onSuccess,c=t.onError,d=t.scope,s=void 0===d?"r_emailaddress":d,u=t.state,l=void 0===u?"":u,w=t.Browser,f=e(null),v=r((function(e){var r=localStorage.getItem("linkedin_oauth2_state");if(e.origin===window.location.origin)if(e.data.errorMessage&&"Linked In"===e.data.from){if(e.data.state!==r)return void w.close();c&&c(e.data),w.close()}else if(e.data.code&&"Linked In"===e.data.from){if(e.data.state!==r)return void w.close();a&&a(e.data.code),w.close()}}),[w,c,a]);n((function(){return function(){window.removeEventListener("message",v,!1),w.close(),f.current&&(window.clearInterval(f.current),f.current=null)}}),[w,v]),n((function(){return window.addEventListener("message",v,!1),function(){window.removeEventListener("message",v,!1)}}),[v]);var g=function(){var e="&scope="+encodeURI(s),r=l||function(e){void 0===e&&(e=20);for(var r="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=n.length,o=0;o<e;o++)r+=n.charAt(Math.floor(Math.random()*t));return r}();return localStorage.setItem("linkedin_oauth2_state",r),"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+i+"&redirect_uri="+o+e+"&state="+r};return{linkedInLogin:function(){w.close(),w.open({url:g()}),f.current&&(window.clearInterval(f.current),f.current=null)}}}function c(t){var o=t.redirectUri,i=t.clientId,a=t.onSuccess,c=t.onError,d=t.scope,s=void 0===d?"r_emailaddress":d,u=t.state,l=void 0===u?"":u,w=t.closePopupMessage,f=void 0===w?"User closed the popup":w,v=e(null),g=e(null),p=r((function(e){var r=localStorage.getItem("linkedin_oauth2_state");if(e.origin===window.location.origin)if(e.data.errorMessage&&"Linked In"===e.data.from){if(e.data.state!==r)return void(v.current&&v.current.close());c&&c(e.data),v.current&&v.current.close()}else if(e.data.code&&"Linked In"===e.data.from){if(e.data.state!==r)return void(v.current&&v.current.close());a&&a(e.data.code),v.current&&v.current.close()}}),[c,a]);n((function(){return function(){window.removeEventListener("message",p,!1),v.current&&(v.current.close(),v.current=null),g.current&&(window.clearInterval(g.current),g.current=null)}}),[p]),n((function(){return window.addEventListener("message",p,!1),function(){window.removeEventListener("message",p,!1)}}),[p]);var h=function(){var e="&scope="+encodeURI(s),r=l||function(e){void 0===e&&(e=20);for(var r="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=n.length,o=0;o<e;o++)r+=n.charAt(Math.floor(Math.random()*t));return r}();return localStorage.setItem("linkedin_oauth2_state",r),"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+i+"&redirect_uri="+o+e+"&state="+r};return{linkedInLogin:function(){var e;null===(e=v.current)||void 0===e||e.close(),v.current=window.open(h(),"_blank",function(e){var r=e.width,n=void 0===r?600:r,t=e.height,o=void 0===t?600:t;return"left="+(screen.width/2-n/2)+",top="+(screen.height/2-o/2)+",width="+n+",height="+o}({width:600,height:600})),g.current&&(window.clearInterval(g.current),g.current=null),g.current=window.setInterval((function(){try{v.current&&v.current.closed&&(window.clearInterval(g.current),g.current=null,c&&c({error:"user_closed_popup",errorMessage:f}))}catch(e){window.clearInterval(g.current),g.current=null}}),1e3)}}}function d(e){var r=!!e.Browser;return{linkedInLogin:t((function(){return r?a(e):c(e)}),[r,e]).linkedInLogin}}function s(e){return(0,e.children)({linkedInLogin:d({redirectUri:e.redirectUri,clientId:e.clientId,onSuccess:e.onSuccess,onError:e.onError,state:e.state,scope:e.scope,closePopupMessage:e.closePopupMessage}).linkedInLogin})}function u(){var e=o(""),r=e[0],t=e[1];return n((function(){var e=function(e){for(var r=e.substring(1).split("&"),n={},t=0;t<r.length;t++){var o=r[t].split("=");o.length>1&&(n[decodeURIComponent(o[0])]=decodeURIComponent(o[1]))}return n}(window.location.search);if(e.state!==localStorage.getItem("linkedin_oauth2_state"))t("State does not match");else if(e.error){var r=e.error_description||"Login failed. Please try again.";window.opener&&window.opener.postMessage({error:e.error,state:e.state,errorMessage:r,from:"Linked In"},window.location.origin),"user_cancelled_login"===e.error&&window.close()}e.code&&window.opener&&window.opener.postMessage({code:e.code,state:e.state,from:"Linked In"},window.location.origin)}),[]),i("div",{children:r},void 0)}export{s as LinkedIn,u as LinkedInCallback,d as useLinkedIn};
//# sourceMappingURL=index.esm.js.map
