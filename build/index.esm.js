import{useRef as e,useCallback as n,useEffect as r,useState as t}from"react";import{jsx as o}from"react/jsx-runtime";function i(e,n,r,t){return new(r||(r=Promise))((function(o,i){function a(e){try{u(t.next(e))}catch(e){i(e)}}function c(e){try{u(t.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}u((t=t.apply(e,n||[])).next())}))}function a(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function c(t){var o=this,c=t.redirectUri,u=t.clientId,l=t.onSuccess,s=t.onError,d=t.scope,f=void 0===d?"r_emailaddress":d,w=t.state,p=void 0===w?"":w,h=t.closePopupMessage,v=void 0===h?"User closed the popup":h,g=t.Browser,m=t.isIOS,I=e(null),y=e(null),b=n((function(e){return i(o,void 0,void 0,(function(){var n;return a(this,(function(r){return m?[2,g.open({url:e})]:(null===(n=I.current)||void 0===n||n.close(),I.current=window.open(e,"_blank",function(e){var n=e.width,r=void 0===n?600:n,t=e.height,o=void 0===t?600:t;return"left="+(screen.width/2-r/2)+",top="+(screen.height/2-o/2)+",width="+r+",height="+o}({width:600,height:600})),[2])}))}))}),[m,g]),k=n((function(){var e;if(m)return g.close();null===(e=I.current)||void 0===e||e.close()}),[m,g]),_=n((function(e){var n=localStorage.getItem("linkedin_oauth2_state");if(e.origin===window.location.origin)if(e.data.errorMessage&&"Linked In"===e.data.from){if(e.data.state!==n)return void k();s&&s(e.data),I.current&&I.current.close()}else if(e.data.code&&"Linked In"===e.data.from){if(e.data.state!==n)return void k();l&&l(e.data.code),k()}}),[s,l,k]);r((function(){return function(){window.removeEventListener("message",_,!1),k(),I.current=null,y.current&&(window.clearInterval(y.current),y.current=null)}}),[k,_]),r((function(){return window.addEventListener("message",_,!1),function(){window.removeEventListener("message",_,!1)}}),[_]);var L=function(){var e="&scope="+encodeURI(f),n=p||function(e){void 0===e&&(e=20);for(var n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=r.length,o=0;o<e;o++)n+=r.charAt(Math.floor(Math.random()*t));return n}();return localStorage.setItem("linkedin_oauth2_state",n),"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+u+"&redirect_uri="+c+e+"&state="+n};return{linkedInLogin:function(){b(L()),y.current&&(window.clearInterval(y.current),y.current=null),y.current=window.setInterval((function(){try{I.current&&I.current.closed&&(window.clearInterval(y.current),y.current=null,s&&s({error:"user_closed_popup",errorMessage:v}))}catch(e){window.clearInterval(y.current),y.current=null}}),1e3)}}}function u(e){return(0,e.children)({linkedInLogin:c({redirectUri:e.redirectUri,clientId:e.clientId,onSuccess:e.onSuccess,onError:e.onError,state:e.state,scope:e.scope,closePopupMessage:e.closePopupMessage}).linkedInLogin})}function l(){var e=t(""),n=e[0],i=e[1];return r((function(){var e=function(e){for(var n=e.substring(1).split("&"),r={},t=0;t<n.length;t++){var o=n[t].split("=");o.length>1&&(r[decodeURIComponent(o[0])]=decodeURIComponent(o[1]))}return r}(window.location.search);if(e.state!==localStorage.getItem("linkedin_oauth2_state"))i("State does not match");else if(e.error){var n=e.error_description||"Login failed. Please try again.";window.opener&&window.opener.postMessage({error:e.error,state:e.state,errorMessage:n,from:"Linked In"},window.location.origin),"user_cancelled_login"===e.error&&window.close()}e.code&&window.opener&&window.opener.postMessage({code:e.code,state:e.state,from:"Linked In"},window.location.origin)}),[]),o("div",{children:n},void 0)}export{u as LinkedIn,l as LinkedInCallback,c as useLinkedIn};
//# sourceMappingURL=index.esm.js.map
