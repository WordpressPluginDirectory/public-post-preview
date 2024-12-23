(()=>{"use strict";var e={20:(e,t,r)=>{var n=r(609),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:u,ref:l,props:a,_owner:o.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},848:(e,t,r)=>{e.exports=r(20)},609:e=>{e.exports=window.React}},t={};const r=window.wp.plugins;var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),s=Math.abs,a=String.fromCharCode,i=Object.assign;function o(e){return e.trim()}function c(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function p(e,t,r){return e.slice(t,r)}function f(e){return e.length}function d(e){return e.length}function h(e,t){return t.push(e),e}var v=1,w=1,m=0,g=0,b=0,y="";function x(e,t,r,n,s,a,i){return{value:e,root:t,parent:r,type:n,props:s,children:a,line:v,column:w,length:i,return:""}}function C(e,t){return i(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function k(){return b=g>0?l(y,--g):0,w--,10===b&&(w=1,v--),b}function _(){return b=g<m?l(y,g++):0,w++,10===b&&(w=1,v++),b}function $(){return l(y,g)}function j(){return g}function P(e,t){return p(y,e,t)}function S(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A(e){return v=w=1,m=f(y=e),g=0,[]}function E(e){return y="",e}function I(e){return o(P(g-1,N(91===e?e+2:40===e?e+1:e)))}function O(e){for(;(b=$())&&b<33;)_();return S(e)>2||S(b)>3?"":" "}function R(e,t){for(;--t&&_()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return P(e,j()+(t<6&&32==$()&&32==_()))}function N(e){for(;_();)switch(b){case e:return g;case 34:case 39:34!==e&&39!==e&&N(b);break;case 40:41===e&&N(e);break;case 92:_()}return g}function L(e,t){for(;_()&&e+b!==57&&(e+b!==84||47!==$()););return"/*"+P(t,g-1)+"*"+a(47===e?e:_())}function U(e){for(;!S($());)_();return P(e,g)}var D="-ms-",M="-moz-",F="-webkit-",T="comm",G="rule",z="decl",B="@keyframes";function q(e,t){for(var r="",n=d(e),s=0;s<n;s++)r+=t(e[s],s,e,t)||"";return r}function H(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case z:return e.return=e.return||e.value;case T:return"";case B:return e.return=e.value+"{"+q(e.children,n)+"}";case G:e.value=e.props.join(",")}return f(r=q(e.children,n))?e.return=e.value+"{"+r+"}":""}function V(e){return E(W("",null,null,null,[""],e=A(e),0,[0],e))}function W(e,t,r,n,s,i,o,p,d){for(var v=0,w=0,m=o,g=0,b=0,y=0,x=1,C=1,P=1,S=0,A="",E=s,N=i,D=n,M=A;C;)switch(y=S,S=_()){case 40:if(108!=y&&58==l(M,m-1)){-1!=u(M+=c(I(S),"&","&\f"),"&\f")&&(P=-1);break}case 34:case 39:case 91:M+=I(S);break;case 9:case 10:case 13:case 32:M+=O(y);break;case 92:M+=R(j()-1,7);continue;case 47:switch($()){case 42:case 47:h(Y(L(_(),j()),t,r),d);break;default:M+="/"}break;case 123*x:p[v++]=f(M)*P;case 125*x:case 59:case 0:switch(S){case 0:case 125:C=0;case 59+w:-1==P&&(M=c(M,/\f/g,"")),b>0&&f(M)-m&&h(b>32?J(M+";",n,r,m-1):J(c(M," ","")+";",n,r,m-2),d);break;case 59:M+=";";default:if(h(D=Z(M,t,r,v,w,s,p,A,E=[],N=[],m),i),123===S)if(0===w)W(M,t,D,D,E,i,m,p,N);else switch(99===g&&110===l(M,3)?100:g){case 100:case 108:case 109:case 115:W(e,D,D,n&&h(Z(e,D,D,0,0,s,p,A,s,E=[],m),N),s,N,m,p,n?E:N);break;default:W(M,D,D,D,[""],N,0,p,N)}}v=w=b=0,x=P=1,A=M="",m=o;break;case 58:m=1+f(M),b=y;default:if(x<1)if(123==S)--x;else if(125==S&&0==x++&&125==k())continue;switch(M+=a(S),S*x){case 38:P=w>0?1:(M+="\f",-1);break;case 44:p[v++]=(f(M)-1)*P,P=1;break;case 64:45===$()&&(M+=I(_())),g=$(),w=m=f(A=M+=U(j())),S++;break;case 45:45===y&&2==f(M)&&(x=0)}}return i}function Z(e,t,r,n,a,i,u,l,f,h,v){for(var w=a-1,m=0===a?i:[""],g=d(m),b=0,y=0,C=0;b<n;++b)for(var k=0,_=p(e,w+1,w=s(y=u[b])),$=e;k<g;++k)($=o(y>0?m[k]+" "+_:c(_,/&\f/g,m[k])))&&(f[C++]=$);return x(e,t,r,0===a?G:l,f,h,v)}function Y(e,t,r){return x(e,t,r,T,a(b),p(e,2,-2),0)}function J(e,t,r,n){return x(e,t,r,z,p(e,0,n),p(e,n+1,-1),n)}var K=function(e,t,r){for(var n=0,s=0;n=s,s=$(),38===n&&12===s&&(t[r]=1),!S(s);)_();return P(e,g)},Q=new WeakMap,X=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(r))&&!n){Q.set(e,!0);for(var s=[],i=function(e,t){return E(function(e,t){var r=-1,n=44;do{switch(S(n)){case 0:38===n&&12===$()&&(t[r]=1),e[r]+=K(g-1,t,r);break;case 2:e[r]+=I(n);break;case 4:if(44===n){e[++r]=58===$()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=_());return e}(A(e),t))}(t,s),o=r.props,c=0,u=0;c<i.length;c++)for(var l=0;l<o.length;l++,u++)e.props[u]=s[c]?i[c].replace(/&\f/g,o[l]):o[l]+" "+i[c]}}},ee=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function te(e,t){switch(function(e,t){return 45^l(e,0)?(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3):0}(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+M+e+D+e+e;case 6828:case 4268:return F+e+D+e+e;case 6165:return F+e+D+"flex-"+e+e;case 5187:return F+e+c(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return F+e+D+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return F+e+D+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+D+c(e,"shrink","negative")+e;case 5292:return F+e+D+c(e,"basis","preferred-size")+e;case 6060:return F+"box-"+c(e,"-grow","")+F+e+D+c(e,"grow","positive")+e;case 4554:return F+c(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(f(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+M+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?te(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,f(e)-3-(~u(e,"!important")&&10))){case 107:return c(e,":",":"+F)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(45===l(e,14)?"inline-":"")+"box$3$1"+F+"$2$3$1"+D+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return F+e+D+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+D+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+D+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+D+e+e}return e}var re=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case z:e.return=te(e.value,e.length);break;case B:return q([C(e,{value:c(e.value,"@","@"+F)})],n);case G:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return q([C(e,{props:[c(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return q([C(e,{props:[c(t,/:(plac\w+)/,":"+F+"input-$1")]}),C(e,{props:[c(t,/:(plac\w+)/,":-moz-$1")]}),C(e,{props:[c(t,/:(plac\w+)/,D+"input-$1")]})],n)}return""}))}}],ne={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function se(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var ae=/[A-Z]|^ms/g,ie=/_EMO_([^_]+?)_([^]*?)_EMO_/g,oe=function(e){return 45===e.charCodeAt(1)},ce=function(e){return null!=e&&"boolean"!=typeof e},ue=se((function(e){return oe(e)?e:e.replace(ae,"-$&").toLowerCase()})),le=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ie,(function(e,t,r){return fe={name:t,styles:r,next:fe},t}))}return 1===ne[e]||oe(e)||"number"!=typeof t||0===t?t:t+"px"};function pe(e,t,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var s=r;if(1===s.anim)return fe={name:s.name,styles:s.styles,next:fe},s.name;var a=r;if(void 0!==a.styles){var i=a.next;if(void 0!==i)for(;void 0!==i;)fe={name:i.name,styles:i.styles,next:fe},i=i.next;return a.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var s=0;s<r.length;s++)n+=pe(e,t,r[s])+";";else for(var a in r){var i=r[a];if("object"!=typeof i){var o=i;null!=t&&void 0!==t[o]?n+=a+"{"+t[o]+"}":ce(o)&&(n+=ue(a)+":"+le(a,o)+";")}else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=pe(e,t,i);switch(a){case"animation":case"animationName":n+=ue(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}else for(var u=0;u<i.length;u++)ce(i[u])&&(n+=ue(a)+":"+le(a,i[u])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=fe,c=r(e);return fe=o,pe(e,t,c)}}var u=r;if(null==t)return u;var l=t[u];return void 0!==l?l:u}var fe,de=/label:\s*([^\s;{]+)\s*(;|$)/g;function he(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,s="";fe=void 0;var a=e[0];null==a||void 0===a.raw?(n=!1,s+=pe(r,t,a)):s+=a[0];for(var i=1;i<e.length;i++)s+=pe(r,t,e[i]),n&&(s+=a[i]);de.lastIndex=0;for(var o,c="";null!==(o=de.exec(s));)c+="-"+o[1];var u=function(e){for(var t,r=0,n=0,s=e.length;s>=4;++n,s-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(s){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(s)+c;return{name:u,styles:s,next:fe}}function ve(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")})),n}function we(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function me(e,t,r){var n=[],s=ve(e,n,r);return n.length<2?r:s+t(n)}var ge=function e(t){for(var r="",n=0;n<t.length;n++){var s=t[n];if(null!=s){var a=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))a=e(s);else for(var i in a="",s)s[i]&&i&&(a&&(a+=" "),a+=i);break;default:a=s}a&&(r&&(r+=" "),r+=a)}}return r},be=function(){var e=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var s,a,i=e.stylisPlugins||re,o={},c=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;c.push(e)}));var u,l,p,f,h=[H,(f=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],v=(l=[X,ee].concat(i,h),p=d(l),function(e,t,r,n){for(var s="",a=0;a<p;a++)s+=l[a](e,t,r,n)||"";return s});a=function(e,t,r,n){u=r,q(V(e?e+"{"+t.styles+"}":t.styles),v),n&&(w.inserted[t.name]=!0)};var w={key:t,sheet:new n({key:t,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return w.sheet.hydrate(c),w}({key:"css"});e.sheet.speedy=function(e){this.isSpeedy=e},e.compat=!0;var t=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var s=he(r,e.registered,void 0);return function(e,t){!function(e,t){var r=e.key+"-"+t.name;void 0===e.registered[r]&&(e.registered[r]=t.styles)}(e,t);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var n=t;do{e.insert(t===n?"."+r:"",n,e.sheet,!0),n=n.next}while(void 0!==n)}}(e,s),e.key+"-"+s.name};return{css:t,cx:function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return me(e.registered,t,ge(n))},injectGlobal:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var s=he(r,e.registered);we(e,s)},keyframes:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var s=he(r,e.registered),a="animation-"+s.name;return we(e,{name:s.name,styles:"@keyframes "+a+"{"+s.styles+"}"}),a},hydrate:function(t){t.forEach((function(t){e.inserted[t]=!0}))},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:ve.bind(null,e.registered),merge:me.bind(null,e.registered,t)}}(),ye=(be.flush,be.hydrate,be.cx,be.merge,be.getRegisteredStyles,be.injectGlobal,be.keyframes,be.css);be.sheet,be.cache;const xe=window.wp.i18n,Ce=window.wp.components,ke=window.wp.element,_e=window.wp.data,$e=window.wp.editPost,je=window.wp.compose,Pe=window.wp.notices,Se=window.wp.editor,Ae=window.wp.primitives;var Ee=function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(848);const Ie=(0,Ee.jsx)(Ae.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,Ee.jsx)(Ae.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M5.625 5.5h9.75c.069 0 .125.056.125.125v9.75a.125.125 0 0 1-.125.125h-9.75a.125.125 0 0 1-.125-.125v-9.75c0-.069.056-.125.125-.125ZM4 5.625C4 4.728 4.728 4 5.625 4h9.75C16.273 4 17 4.728 17 5.625v9.75c0 .898-.727 1.625-1.625 1.625h-9.75A1.625 1.625 0 0 1 4 15.375v-9.75Zm14.5 11.656v-9H20v9C20 18.8 18.77 20 17.251 20H6.25v-1.5h11.001c.69 0 1.249-.528 1.249-1.219Z"})}),Oe=(0,Ee.jsx)(Ae.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,Ee.jsx)(Ae.Path,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"})}),Re=window.wp.coreData,{ajaxurl:Ne,DSPublicPostPreviewData:Le}=window,Ue=ye({name:"1ejri1g",styles:"flex-direction:column;align-items:flex-start"}),De=ye({name:"1tdx4sx",styles:"margin-top:8px;width:100%"}),Me=ye({name:"1jqpy8u",styles:"color:#757575;margin:8px 0 0!important"}),Fe=ye({name:"o0m8oe",styles:"position:relative;display:flex;justify-content:flex-start;align-items:center;.components-base-control{width:100%;}"}),Te=ye({name:"v0mqes",styles:".components-text-control__input{background-color:#fff;padding-right:30px!important;}"}),Ge=ye({name:"8eochf",styles:"label{max-width:100%;}"}),ze=ye({name:"u9ck63",styles:"position:absolute;right:5px"});function Be({text:e}){const{createNotice:t}=(0,_e.useDispatch)(Pe.store),r=(0,je.useCopyToClipboard)(e,(()=>{t("info",(0,xe.__)("Preview link copied to clipboard.","public-post-preview"),{isDismissible:!0,type:"snackbar"})}));return(0,Ee.jsx)(Ce.Button,{icon:Ie,ref:r,label:(0,xe.__)("Copy the preview URL","public-post-preview"),className:ze,size:"small"})}function qe({previewUrl:e}){return"function"==typeof Se.PluginPreviewMenuItem&&e?(0,Ee.jsxs)(Se.PluginPreviewMenuItem,{icon:Oe,href:e,target:"_blank",children:[(0,xe.__)("Open public preview","public-post-preview"),(0,Ee.jsx)(Ce.VisuallyHidden,{as:"span",children:/* translators: accessibility text */ /* translators: accessibility text */
(0,xe.__)("(opens in a new tab)","public-post-preview")})]}):null}class He extends ke.Component{constructor(e){super(e),this.state={previewEnabled:Le.previewEnabled,previewUrl:Le.previewUrl},this.previewUrlInput=(0,ke.createRef)(),this.onChange=this.onChange.bind(this),this.onPreviewUrlInputFocus=this.onPreviewUrlInputFocus.bind(this)}onChange(e){const t=new window.FormData;t.append("checked",e),t.append("post_ID",this.props.postId),this.sendRequest(t).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>e.json())).then((e=>{if(!e.success)throw e;const t=!this.state.previewEnabled;this.setState({previewEnabled:t,previewUrl:e?.data?.preview_url||""}),this.props.createNotice("info",t?(0,xe.__)("Public preview enabled.","public-post-preview"):(0,xe.__)("Public preview disabled.","public-post-preview"),{id:"public-post-preview",isDismissible:!0,type:"snackbar"})})).catch((()=>{this.props.createNotice("error",(0,xe.__)("Error while changing the public preview status.","public-post-preview"),{id:"public-post-preview",isDismissible:!0,type:"snackbar"})}))}onPreviewUrlInputFocus(){this.previewUrlInput.current.focus(),this.previewUrlInput.current.select()}sendRequest(e){return e.append("action","public-post-preview"),e.append("_ajax_nonce",Le.nonce),window.fetch(Ne,{method:"POST",body:e})}render(){const{previewEnabled:e,previewUrl:t}=this.state;return(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)(qe,{previewUrl:e&&t?t:null}),(0,Ee.jsxs)($e.PluginPostStatusInfo,{className:Ue,children:[(0,Ee.jsx)(Ce.CheckboxControl,{label:(0,xe.__)("Enable public preview","public-post-preview"),checked:e,onChange:this.onChange,className:Ge,__nextHasNoMarginBottom:!0}),e&&(0,Ee.jsxs)("div",{className:De,children:[(0,Ee.jsxs)("div",{className:Fe,children:[(0,Ee.jsx)(Ce.TextControl,{ref:this.previewUrlInput,hideLabelFromVision:!0,label:(0,xe.__)("Preview URL","public-post-preview"),value:t,readOnly:!0,onFocus:this.onPreviewUrlInputFocus,className:Te,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,Ee.jsx)(Be,{text:t})]}),(0,Ee.jsx)("p",{className:Me,children:(0,ke.createInterpolateElement)((0,xe.__)("Copy and share <a>the preview URL</a>.","public-post-preview"),{a:(0,Ee.jsx)(Ce.ExternalLink,{href:t})})})]})]})]})}}const Ve=(0,je.compose)([(0,_e.withSelect)((e=>{const{getPostType:t}=e(Re.store),{getCurrentPostId:r,getEditedPostAttribute:n}=e(Se.store),s=t(n("type"));return{postId:r(),status:n("status"),isViewable:s?.viewable||!1}})),(0,je.ifCondition)((({isViewable:e})=>e)),(0,je.ifCondition)((({status:e})=>-1===["auto-draft","publish","private"].indexOf(e))),(0,_e.withDispatch)((e=>({createNotice:e(Pe.store).createNotice})))])(He);(0,r.registerPlugin)("public-post-preview",{render:Ve})})();