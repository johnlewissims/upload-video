module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=11)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,o){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},,function(t,e){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,e){t.exports=flarum.core.compat["components/EditPostComposer"]},function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),i=o(4),a=o(5),c=o.n(a),u=o(1),s=o(6),l=o.n(s),p=o(7),d=o.n(p),f=(o(9),o(10),o(2)),h=o.n(f),y=o(3),b=o.n(y),v=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var o=e.prototype;return o.init=function(){this.loading=!1,this.error=!1},o.view=function(){var t;return t=this.loading?d.a.component({className:"Button-icon"}):this.error?b()("fas fa-times red",{className:""}):b()("fas fa-video",{className:""}),m("div",{className:"Button",onclick:this.click.bind(this)},t,m("form",null,m("input",{type:"file",id:"uploadVideo",onchange:this.upload.bind(this)})))},o.click=function(){document.getElementById("uploadVideo").click()},o.upload=function(t){this.loading=!0;var e=new FormData,o=(document.getElementById("uploadVideo").files[0],Math.round(document.getElementById("uploadVideo").files[0].size/1e6));e.append("video",document.getElementById("uploadVideo").files[0]),o>r.a.forum.attribute("upload-video.max-file-size")?(this.loading=!1,this.error=!0,r.a.alerts.show(this.successAlert=new h.a({type:"error",children:"Video must be smaller than 40MB."}))):(this.error=!1,$.ajax({url:r.a.forum.attribute("upload-video.imgur-endpoint"),headers:{Authorization:"Client-ID "+r.a.forum.attribute("upload-video.client-id"),Accept:"application/json","Cache-Control":null,"X-Requested-With":null},type:"POST",data:e,cache:!1,contentType:!1,processData:!1,mimeType:"multipart/form-data",success:this.success.bind(this),error:function(t){this.loading=!1,this.error=!0,r.a.alerts.show(this.successAlert=new h.a({type:"error",children:"An error occcured while uploading to imgur. Please try again later."}))}}))},o.success=function(t){var e=JSON.parse(t);this.loading=!1;var o=e.data.link;this.props.textArea.insertAtCursor(o)},e}(l.a);r.a.initializers.add("ejin/upload-video",(function(){Object(i.extend)(c.a.prototype,"controlItems",(function(t){t.add("ejin-video-upload",m(v,{textArea:this}))}))}))}]);
//# sourceMappingURL=forum.js.map