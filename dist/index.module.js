function t(){return t=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},t.apply(this,arguments)}var o=function(o){var r=o.starClassName,s=o.starStrokeColor,a=o.starStrokeWidth,e=o.starFillColor,l=o.starStyle,i=o.offSetValue;return h("svg",{className:void 0===r?"":r,style:t({},void 0===l?{}:l,{margin:"1px"}),viewBox:"0 0 25 25"},h("defs",null,h("linearGradient",{id:"gradient"+i},h("stop",{offset:"0%",stopColor:""+e}),h("stop",{offset:i+"%",stopColor:""+e}),h("stop",{offset:i+"%",stopColor:"transparent"}),h("stop",{offset:"100%",stopColor:"transparent"}))),h("path",{d:"m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z",fill:"url(#gradient"+i+")",stroke:""+s,strokeWidth:a}))},r=function(t){for(var r=t.rating,s=t.containerClassName,a=void 0===s?"":s,e=t.containerStyle,l=void 0===e?{height:24,width:24}:e,i=t.starClassName,n=void 0===i?"":i,d=t.starStyle,f=void 0===d?{}:d,p=t.starFillColor,c=void 0===p?"gold":p,v=t.starStrokeColor,u=void 0===v?"black":v,C=t.starStrokeWidth,y=void 0===C?.5:C,S=t.concise,g=[],k=void 0!==S&&S?r:5,m=0;m<k;m++)r>0?r<1?(g.push(Math.floor(100*r)),r-=r):(g.push(100),r-=1):g.push(0);return h("div",{style:{display:"flex",flexDirection:"row"}},g.map(function(t,r){return h("div",{className:a,style:l,key:""+t+r},h(o,{starStrokeColor:u,starFillColor:c,starClassName:n,starStyle:f,offSetValue:t,starStrokeWidth:y}))}))};export{r as default};
//# sourceMappingURL=index.module.js.map
