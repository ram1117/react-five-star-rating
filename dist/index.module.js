import t from"react";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},e.apply(this,arguments)}var r=function(r){var o=r.starClassName,a=r.starStrokeColor,s=r.starStrokeWidth,l=r.starFillColor,n=r.starStyle,i=r.offSetValue;return t.createElement("svg",{className:void 0===o?"":o,style:e({},void 0===n?{}:n,{margin:"1px"}),viewBox:"0 0 25 25"},t.createElement("defs",null,t.createElement("linearGradient",{id:"gradient"+i},t.createElement("stop",{offset:"0%",stopColor:""+l}),t.createElement("stop",{offset:i+"%",stopColor:""+l}),t.createElement("stop",{offset:i+"%",stopColor:"transparent"}),t.createElement("stop",{offset:"100%",stopColor:"transparent"}))),t.createElement("path",{d:"m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z",fill:"url(#gradient"+i+")",stroke:""+a,strokeWidth:s}))},o=function(e){for(var o=e.rating,a=e.containerClassName,s=void 0===a?"":a,l=e.containerStyle,n=void 0===l?{height:24,width:24}:l,i=e.starClassName,c=void 0===i?"":i,d=e.starStyle,f=void 0===d?{}:d,p=e.starFillColor,m=void 0===p?"gold":p,v=e.starStrokeColor,u=void 0===v?"black":v,h=e.starStrokeWidth,C=void 0===h?.5:h,y=e.concise,S=[],E=void 0!==y&&y?o:5,g=0;g<E;g++)o>0?o<1?(S.push(Math.floor(100*o)),o-=o):(S.push(100),o-=1):S.push(0);return t.createElement("div",{style:{display:"flex",flexDirection:"row"}},S.map(function(e,o){return t.createElement("div",{className:s,style:n,key:""+e+o},t.createElement(r,{starStrokeColor:u,starFillColor:m,starClassName:c,starStyle:f,offSetValue:e,starStrokeWidth:C}))}))};export{o as default};
//# sourceMappingURL=index.module.js.map
