(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[17],{530:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(63));var a=yoastReindexLinksData.data,i=!1,s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=jQuery("#wpseo_count_index_links"),this.progressbarTarget=jQuery("#wpseo_index_links_progressbar").progressbar({value:0}),this.total=parseInt(t,10),this.totalProcessed=0}return o(e,[{key:"update",value:function(e){this.totalProcessed+=e;var t=this.totalProcessed*(100/this.total);this.progressbarTarget.progressbar("value",Math.round(t)),this.element.html(this.totalProcessed)}},{key:"complete",value:function(){this.progressbarTarget.progressbar("value",100)}}]),e}();function u(){return new Promise(function(e){!function e(t,n){jQuery.ajax({type:"GET",url:a.restApi.root+a.restApi.endpoint,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",a.restApi.nonce)},success:function(o){var r=parseInt(o,10);if(0!==r)return t.update(r),void e(t,n);t.complete(),n()}})}(new s(a.amount),e)})}function l(){i=!0,(0,r.default)(a.l10n.calculationCompleted),jQuery("#reindexLinks").html(a.message.indexingCompleted),tb_remove()}function c(){jQuery("#general-tab").click(),!1===i&&jQuery("#openLinkIndexing").click()}jQuery(function(){var e=!1;jQuery(".yoast-js-calculate-index-links--all ").on("click",function(){!1===e&&(function(){(0,r.default)(a.l10n.calculationInProgress);var e=[];e.push(u()),Promise.all(e).then(l)}(),e=!0)}),jQuery("#noticeRunLinkIndex").click(c),-1!==window.location.href.indexOf("&reIndexLinks=1")&&jQuery(c)})},63:function(e,t){var n,o,r="",a=function(e){e=e||"polite";var t=document.createElement("div");t.id="a11y-speak-"+e,t.className="a11y-speak-region";return t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t};!function(e){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)return e();document.addEventListener("DOMContentLoaded",e)}(function(){n=document.getElementById("a11y-speak-polite"),o=document.getElementById("a11y-speak-assertive"),null===n&&(n=a("polite")),null===o&&(o=a("assertive"))});e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),r===e&&(e+=" "),r=e,o&&"assertive"===t?o.textContent=e:n&&(n.textContent=e)}}},[[530,0]]]);