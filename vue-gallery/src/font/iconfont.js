(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-turn_right" viewBox="0 0 1024 1024">'+""+'<path d="M449.28 168.64l0-74.88 192 110.72-192 111.296 0-83.2C302.72 261.44 192 390.656 192 546.24c0 176.64 143.36 320 320 320s320-143.36 320-320c0-17.92 14.08-32 32-32 17.856 0 32 14.08 32 32 0 2.56 0 4.416-0.64 6.4-3.264 208.704-173.504 377.6-383.36 377.6-211.84 0-384-172.16-384-384C128 355.52 267.52 198.08 449.28 168.64z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-turn_left" viewBox="0 0 1024 1024">'+""+'<path d="M896 546.24c0 211.84-172.16 384-384 384-209.92 0-380.16-168.96-383.36-377.6C128 550.656 128 548.8 128 546.24c0-17.92 14.08-32 32-32S192 528.32 192 546.24c0 176.64 143.36 320 320 320s320-143.36 320-320c0-155.584-110.72-284.8-257.28-313.6l0 83.2-192-111.296 192-110.72 0 74.88C756.48 198.08 896 355.52 896 546.24z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)