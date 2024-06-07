import { createRequire } from 'module'; const require = createRequire(import.meta.url);
import{fileURLToPath as Vt}from"url";import{Buffer as Ft}from"node:buffer";import{version as Dt}from"node:process";import{pipeline as Ut,Readable as Ht}from"node:stream";import{promisify as qt}from"node:util";var Q=e=>({id:e??""});var ee=e=>({id:e??""});import{Buffer as Ve}from"buffer";var q=Symbol("Request flags"),L=Symbol("Request route"),We=typeof Request>"u"?class{}:Request,te,H=class extends(te=We,q,L,te){},re=(e,t)=>{if(!(e==null||e===""))return t?Ve.from(e,"base64"):e};var j=class{#e;#t;constructor(t){this.#e=new Set,this.#t=t}get(t){let r=this.#t[t];return r!==void 0&&this.#e.add(t),r}get evaluations(){return this.#e}},M=e=>e[q]??new j({}),ne=(e,t)=>{let{flags:r={}}=e;t[q]=new j(r)};import{Buffer as ze}from"node:buffer";var se=e=>{if(e===null)return{};try{return JSON.parse(ze.from(e,"base64").toString("utf-8"))}catch{return{}}};var ie="x-nf-client-connection-ip",oe="x-nf-geo",ae="x-nf-account-id",B="x-nf-deploy-id",ce="x-nf-site-id",ue="x-nf-request-flags",z="x-nf-invocation-metadata",he="x-nf-request-id",fe=e=>{let t=new Headers;return Object.entries(e).forEach(([r,n])=>{n!==void 0&&t.set(r.toLowerCase(),n)}),t},le=e=>{let t={};for(let[r,n]of e.entries())r in t?t[r].push(n):t[r]=[n];return t};var pe=e=>e??"";var O=class{constructor(e,t,r,n,i,u){this.type=3,this.name="",this.prefix="",this.value="",this.suffix="",this.modifier=3,this.type=e,this.name=t,this.prefix=r,this.value=n,this.suffix=i,this.modifier=u}hasCustomName(){return this.name!==""&&typeof this.name!="number"}},Je=/[$_\p{ID_Start}]/u,Ke=/[$_\u200C\u200D\p{ID_Continue}]/u,K=".*";function Xe(e,t){return(t?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(e)}function ge(e,t=!1){let r=[],n=0;for(;n<e.length;){let i=e[n],u=function(o){if(!t)throw new TypeError(o);r.push({type:"INVALID_CHAR",index:n,value:e[n++]})};if(i==="*"){r.push({type:"ASTERISK",index:n,value:e[n++]});continue}if(i==="+"||i==="?"){r.push({type:"OTHER_MODIFIER",index:n,value:e[n++]});continue}if(i==="\\"){r.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(i==="{"){r.push({type:"OPEN",index:n,value:e[n++]});continue}if(i==="}"){r.push({type:"CLOSE",index:n,value:e[n++]});continue}if(i===":"){let o="",s=n+1;for(;s<e.length;){let c=e.substr(s,1);if(s===n+1&&Je.test(c)||s!==n+1&&Ke.test(c)){o+=e[s++];continue}break}if(!o){u(`Missing parameter name at ${n}`);continue}r.push({type:"NAME",index:n,value:o}),n=s;continue}if(i==="("){let o=1,s="",c=n+1,a=!1;if(e[c]==="?"){u(`Pattern cannot start with "?" at ${c}`);continue}for(;c<e.length;){if(!Xe(e[c],!1)){u(`Invalid character '${e[c]}' at ${c}.`),a=!0;break}if(e[c]==="\\"){s+=e[c++]+e[c++];continue}if(e[c]===")"){if(o--,o===0){c++;break}}else if(e[c]==="("&&(o++,e[c+1]!=="?")){u(`Capturing groups are not allowed at ${c}`),a=!0;break}s+=e[c++]}if(a)continue;if(o){u(`Unbalanced pattern at ${n}`);continue}if(!s){u(`Missing pattern at ${n}`);continue}r.push({type:"REGEX",index:n,value:s}),n=c;continue}r.push({type:"CHAR",index:n,value:e[n++]})}return r.push({type:"END",index:n,value:""}),r}function xe(e,t={}){let r=ge(e);t.delimiter??(t.delimiter="/#?"),t.prefixes??(t.prefixes="./");let n=`[^${S(t.delimiter)}]+?`,i=[],u=0,o=0,s="",c=new Set,a=h=>{if(o<r.length&&r[o].type===h)return r[o++].value},f=()=>a("OTHER_MODIFIER")??a("ASTERISK"),x=h=>{let l=a(h);if(l!==void 0)return l;let{type:m,index:w}=r[o];throw new TypeError(`Unexpected ${m} at ${w}, expected ${h}`)},g=()=>{let h="",l;for(;l=a("CHAR")??a("ESCAPED_CHAR");)h+=l;return h},I=h=>h,v=t.encodePart||I,P="",y=h=>{P+=h},N=()=>{P.length&&(i.push(new O(3,"","",v(P),"",3)),P="")},T=(h,l,m,w,U)=>{let p=3;switch(U){case"?":p=1;break;case"*":p=0;break;case"+":p=2;break}if(!l&&!m&&p===3){y(h);return}if(N(),!l&&!m){if(!h)return;i.push(new O(3,"","",v(h),"",p));return}let d;m?m==="*"?d=K:d=m:d=n;let E=2;d===n?(E=1,d=""):d===K&&(E=0,d="");let b;if(l?b=l:m&&(b=u++),c.has(b))throw new TypeError(`Duplicate name '${b}'.`);c.add(b),i.push(new O(E,b,v(h),d,v(w),p))};for(;o<r.length;){let h=a("CHAR"),l=a("NAME"),m=a("REGEX");if(!l&&!m&&(m=a("ASTERISK")),l||m){let p=h??"";t.prefixes.indexOf(p)===-1&&(y(p),p=""),N();let d=f();T(p,l,m,"",d);continue}let w=h??a("ESCAPED_CHAR");if(w){y(w);continue}if(a("OPEN")){let p=g(),d=a("NAME"),E=a("REGEX");!d&&!E&&(E=a("ASTERISK"));let b=g();x("CLOSE");let Ge=f();T(p,d,E,b,Ge);continue}N(),x("END")}return i}function S(e){return e.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function me(e){return e&&e.ignoreCase?"ui":"u"}function Ye(e,t,r){return Se(xe(e,r),t,r)}function $(e){switch(e){case 0:return"*";case 1:return"?";case 2:return"+";case 3:return""}}function Se(e,t,r={}){r.delimiter??(r.delimiter="/#?"),r.prefixes??(r.prefixes="./"),r.sensitive??(r.sensitive=!1),r.strict??(r.strict=!1),r.end??(r.end=!0),r.start??(r.start=!0),r.endsWith="";let n=r.start?"^":"";for(let s of e){if(s.type===3){s.modifier===3?n+=S(s.value):n+=`(?:${S(s.value)})${$(s.modifier)}`;continue}t&&t.push(s.name);let c=`[^${S(r.delimiter)}]+?`,a=s.value;if(s.type===1?a=c:s.type===0&&(a=K),!s.prefix.length&&!s.suffix.length){s.modifier===3||s.modifier===1?n+=`(${a})${$(s.modifier)}`:n+=`((?:${a})${$(s.modifier)})`;continue}if(s.modifier===3||s.modifier===1){n+=`(?:${S(s.prefix)}(${a})${S(s.suffix)})`,n+=$(s.modifier);continue}n+=`(?:${S(s.prefix)}`,n+=`((?:${a})(?:`,n+=S(s.suffix),n+=S(s.prefix),n+=`(?:${a}))*)${S(s.suffix)})`,s.modifier===0&&(n+="?")}let i=`[${S(r.endsWith)}]|$`,u=`[${S(r.delimiter)}]`;if(r.end)return r.strict||(n+=`${u}?`),r.endsWith.length?n+=`(?=${i})`:n+="$",new RegExp(n,me(r));r.strict||(n+=`(?:${u}(?=${i}))?`);let o=!1;if(e.length){let s=e[e.length-1];s.type===3&&s.modifier===3&&(o=r.delimiter.indexOf(s)>-1)}return o||(n+=`(?=${u}|${i})`),new RegExp(n,me(r))}var R={delimiter:"",prefixes:"",sensitive:!0,strict:!0},Ze={delimiter:".",prefixes:"",sensitive:!0,strict:!0},Qe={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};function et(e,t){return e.length?e[0]==="/"?!0:!t||e.length<2?!1:(e[0]=="\\"||e[0]=="{")&&e[1]=="/":!1}function ye(e,t){return e.startsWith(t)?e.substring(t.length,e.length):e}function tt(e,t){return e.endsWith(t)?e.substr(0,e.length-t.length):e}function we(e){return!e||e.length<2?!1:e[0]==="["||(e[0]==="\\"||e[0]==="{")&&e[1]==="["}var Ce=["ftp","file","http","https","ws","wss"];function be(e){if(!e)return!0;for(let t of Ce)if(e.test(t))return!0;return!1}function rt(e,t){if(e=ye(e,"#"),t||e==="")return e;let r=new URL("https://example.com");return r.hash=e,r.hash?r.hash.substring(1,r.hash.length):""}function nt(e,t){if(e=ye(e,"?"),t||e==="")return e;let r=new URL("https://example.com");return r.search=e,r.search?r.search.substring(1,r.search.length):""}function st(e,t){return t||e===""?e:we(e)?ve(e):Re(e)}function it(e,t){if(t||e==="")return e;let r=new URL("https://example.com");return r.password=e,r.password}function ot(e,t){if(t||e==="")return e;let r=new URL("https://example.com");return r.username=e,r.username}function at(e,t,r){if(r||e==="")return e;if(t&&!Ce.includes(t))return new URL(`${t}:${e}`).pathname;let n=e[0]=="/";return e=new URL(n?e:"/-"+e,"https://example.com").pathname,n||(e=e.substring(2,e.length)),e}function ct(e,t,r){return ke(t)===e&&(e=""),r||e===""?e:Ee(e)}function ut(e,t){return e=tt(e,":"),t||e===""?e:X(e)}function ke(e){switch(e){case"ws":case"http":return"80";case"wws":case"https":return"443";case"ftp":return"21";default:return""}}function X(e){if(e==="")return e;if(/^[-+.A-Za-z0-9]*$/.test(e))return e.toLowerCase();throw new TypeError(`Invalid protocol '${e}'.`)}function ht(e){if(e==="")return e;let t=new URL("https://example.com");return t.username=e,t.username}function ft(e){if(e==="")return e;let t=new URL("https://example.com");return t.password=e,t.password}function Re(e){if(e==="")return e;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e))throw new TypeError(`Invalid hostname '${e}'`);let t=new URL("https://example.com");return t.hostname=e,t.hostname}function ve(e){if(e==="")return e;if(/[^0-9a-fA-F[\]:]/g.test(e))throw new TypeError(`Invalid IPv6 hostname '${e}'`);return e.toLowerCase()}function Ee(e){if(e===""||/^[0-9]*$/.test(e)&&parseInt(e)<=65535)return e;throw new TypeError(`Invalid port '${e}'.`)}function lt(e){if(e==="")return e;let t=new URL("https://example.com");return t.pathname=e[0]!=="/"?"/-"+e:e,e[0]!=="/"?t.pathname.substring(2,t.pathname.length):t.pathname}function pt(e){return e===""?e:new URL(`data:${e}`).pathname}function mt(e){if(e==="")return e;let t=new URL("https://example.com");return t.search=e,t.search.substring(1,t.search.length)}function dt(e){if(e==="")return e;let t=new URL("https://example.com");return t.hash=e,t.hash.substring(1,t.hash.length)}var gt=class{constructor(e){this.tokenList=[],this.internalResult={},this.tokenIndex=0,this.tokenIncrement=1,this.componentStart=0,this.state=0,this.groupDepth=0,this.hostnameIPv6BracketDepth=0,this.shouldTreatAsStandardURL=!1,this.input=e}get result(){return this.internalResult}parse(){for(this.tokenList=ge(this.input,!0);this.tokenIndex<this.tokenList.length;this.tokenIndex+=this.tokenIncrement){if(this.tokenIncrement=1,this.tokenList[this.tokenIndex].type==="END"){if(this.state===0){this.rewind(),this.isHashPrefix()?this.changeState(9,1):this.isSearchPrefix()?(this.changeState(8,1),this.internalResult.hash=""):(this.changeState(7,0),this.internalResult.search="",this.internalResult.hash="");continue}else if(this.state===2){this.rewindAndSetState(5);continue}this.changeState(10,0);break}if(this.groupDepth>0)if(this.isGroupClose())this.groupDepth-=1;else continue;if(this.isGroupOpen()){this.groupDepth+=1;continue}switch(this.state){case 0:this.isProtocolSuffix()&&(this.internalResult.username="",this.internalResult.password="",this.internalResult.hostname="",this.internalResult.port="",this.internalResult.pathname="",this.internalResult.search="",this.internalResult.hash="",this.rewindAndSetState(1));break;case 1:if(this.isProtocolSuffix()){this.computeShouldTreatAsStandardURL();let e=7,t=1;this.shouldTreatAsStandardURL&&(this.internalResult.pathname="/"),this.nextIsAuthoritySlashes()?(e=2,t=3):this.shouldTreatAsStandardURL&&(e=2),this.changeState(e,t)}break;case 2:this.isIdentityTerminator()?this.rewindAndSetState(3):(this.isPathnameStart()||this.isSearchPrefix()||this.isHashPrefix())&&this.rewindAndSetState(5);break;case 3:this.isPasswordPrefix()?this.changeState(4,1):this.isIdentityTerminator()&&this.changeState(5,1);break;case 4:this.isIdentityTerminator()&&this.changeState(5,1);break;case 5:this.isIPv6Open()?this.hostnameIPv6BracketDepth+=1:this.isIPv6Close()&&(this.hostnameIPv6BracketDepth-=1),this.isPortPrefix()&&!this.hostnameIPv6BracketDepth?this.changeState(6,1):this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 6:this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 7:this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 8:this.isHashPrefix()&&this.changeState(9,1);break;case 9:break;case 10:break}}}changeState(e,t){switch(this.state){case 0:break;case 1:this.internalResult.protocol=this.makeComponentString();break;case 2:break;case 3:this.internalResult.username=this.makeComponentString();break;case 4:this.internalResult.password=this.makeComponentString();break;case 5:this.internalResult.hostname=this.makeComponentString();break;case 6:this.internalResult.port=this.makeComponentString();break;case 7:this.internalResult.pathname=this.makeComponentString();break;case 8:this.internalResult.search=this.makeComponentString();break;case 9:this.internalResult.hash=this.makeComponentString();break;case 10:break}this.changeStateWithoutSettingComponent(e,t)}changeStateWithoutSettingComponent(e,t){this.state=e,this.componentStart=this.tokenIndex+t,this.tokenIndex+=t,this.tokenIncrement=0}rewind(){this.tokenIndex=this.componentStart,this.tokenIncrement=0}rewindAndSetState(e){this.rewind(),this.state=e}safeToken(e){return e<0&&(e=this.tokenList.length-e),e<this.tokenList.length?this.tokenList[e]:this.tokenList[this.tokenList.length-1]}isNonSpecialPatternChar(e,t){let r=this.safeToken(e);return r.value===t&&(r.type==="CHAR"||r.type==="ESCAPED_CHAR"||r.type==="INVALID_CHAR")}isProtocolSuffix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}nextIsAuthoritySlashes(){return this.isNonSpecialPatternChar(this.tokenIndex+1,"/")&&this.isNonSpecialPatternChar(this.tokenIndex+2,"/")}isIdentityTerminator(){return this.isNonSpecialPatternChar(this.tokenIndex,"@")}isPasswordPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPortPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPathnameStart(){return this.isNonSpecialPatternChar(this.tokenIndex,"/")}isSearchPrefix(){if(this.isNonSpecialPatternChar(this.tokenIndex,"?"))return!0;if(this.tokenList[this.tokenIndex].value!=="?")return!1;let e=this.safeToken(this.tokenIndex-1);return e.type!=="NAME"&&e.type!=="REGEX"&&e.type!=="CLOSE"&&e.type!=="ASTERISK"}isHashPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,"#")}isGroupOpen(){return this.tokenList[this.tokenIndex].type=="OPEN"}isGroupClose(){return this.tokenList[this.tokenIndex].type=="CLOSE"}isIPv6Open(){return this.isNonSpecialPatternChar(this.tokenIndex,"[")}isIPv6Close(){return this.isNonSpecialPatternChar(this.tokenIndex,"]")}makeComponentString(){let e=this.tokenList[this.tokenIndex],t=this.safeToken(this.componentStart).index;return this.input.substring(t,e.index)}computeShouldTreatAsStandardURL(){let e={};Object.assign(e,R),e.encodePart=X;let t=Ye(this.makeComponentString(),void 0,e);this.shouldTreatAsStandardURL=be(t)}},J=["protocol","username","password","hostname","port","pathname","search","hash"],k="*";function de(e,t){if(typeof e!="string")throw new TypeError("parameter 1 is not of type 'string'.");let r=new URL(e,t);return{protocol:r.protocol.substring(0,r.protocol.length-1),username:r.username,password:r.password,hostname:r.hostname,port:r.port,pathname:r.pathname,search:r.search!==""?r.search.substring(1,r.search.length):void 0,hash:r.hash!==""?r.hash.substring(1,r.hash.length):void 0}}function C(e,t){return t?_(e):e}function A(e,t,r){let n;if(typeof t.baseURL=="string")try{n=new URL(t.baseURL),e.protocol=C(n.protocol.substring(0,n.protocol.length-1),r),e.username=C(n.username,r),e.password=C(n.password,r),e.hostname=C(n.hostname,r),e.port=C(n.port,r),e.pathname=C(n.pathname,r),e.search=C(n.search.substring(1,n.search.length),r),e.hash=C(n.hash.substring(1,n.hash.length),r)}catch{throw new TypeError(`invalid baseURL '${t.baseURL}'.`)}if(typeof t.protocol=="string"&&(e.protocol=ut(t.protocol,r)),typeof t.username=="string"&&(e.username=ot(t.username,r)),typeof t.password=="string"&&(e.password=it(t.password,r)),typeof t.hostname=="string"&&(e.hostname=st(t.hostname,r)),typeof t.port=="string"&&(e.port=ct(t.port,e.protocol,r)),typeof t.pathname=="string"){if(e.pathname=t.pathname,n&&!et(e.pathname,r)){let i=n.pathname.lastIndexOf("/");i>=0&&(e.pathname=C(n.pathname.substring(0,i+1),r)+e.pathname)}e.pathname=at(e.pathname,e.protocol,r)}return typeof t.search=="string"&&(e.search=nt(t.search,r)),typeof t.hash=="string"&&(e.hash=rt(t.hash,r)),e}function _(e){return e.replace(/([+*?:{}()\\])/g,"\\$1")}function xt(e){return e.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function St(e,t){t.delimiter??(t.delimiter="/#?"),t.prefixes??(t.prefixes="./"),t.sensitive??(t.sensitive=!1),t.strict??(t.strict=!1),t.end??(t.end=!0),t.start??(t.start=!0),t.endsWith="";let r=".*",n=`[^${xt(t.delimiter)}]+?`,i=/[$_\u200C\u200D\p{ID_Continue}]/u,u="";for(let o=0;o<e.length;++o){let s=e[o];if(s.type===3){if(s.modifier===3){u+=_(s.value);continue}u+=`{${_(s.value)}}${$(s.modifier)}`;continue}let c=s.hasCustomName(),a=!!s.suffix.length||!!s.prefix.length&&(s.prefix.length!==1||!t.prefixes.includes(s.prefix)),f=o>0?e[o-1]:null,x=o<e.length-1?e[o+1]:null;if(!a&&c&&s.type===1&&s.modifier===3&&x&&!x.prefix.length&&!x.suffix.length)if(x.type===3){let g=x.value.length>0?x.value[0]:"";a=i.test(g)}else a=!x.hasCustomName();if(!a&&!s.prefix.length&&f&&f.type===3){let g=f.value[f.value.length-1];a=t.prefixes.includes(g)}a&&(u+="{"),u+=_(s.prefix),c&&(u+=`:${s.name}`),s.type===2?u+=`(${s.value})`:s.type===1?c||(u+=`(${n})`):s.type===0&&(!c&&(!f||f.type===3||f.modifier!==3||a||s.prefix!=="")?u+="*":u+=`(${r})`),s.type===1&&c&&s.suffix.length&&i.test(s.suffix[0])&&(u+="\\"),u+=_(s.suffix),a&&(u+="}"),s.modifier!==3&&(u+=$(s.modifier))}return u}var G=class{constructor(e={},t,r){this.regexp={},this.names={},this.component_pattern={},this.parts={};try{let n;if(typeof t=="string"?n=t:r=t,typeof e=="string"){let s=new gt(e);if(s.parse(),e=s.result,n===void 0&&typeof e.protocol!="string")throw new TypeError("A base URL must be provided for a relative constructor string.");e.baseURL=n}else{if(!e||typeof e!="object")throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(n)throw new TypeError("parameter 1 is not of type 'string'.")}typeof r>"u"&&(r={ignoreCase:!1});let i={ignoreCase:r.ignoreCase===!0},u={pathname:k,protocol:k,username:k,password:k,hostname:k,port:k,search:k,hash:k};this.pattern=A(u,e,!0),ke(this.pattern.protocol)===this.pattern.port&&(this.pattern.port="");let o;for(o of J){if(!(o in this.pattern))continue;let s={},c=this.pattern[o];switch(this.names[o]=[],o){case"protocol":Object.assign(s,R),s.encodePart=X;break;case"username":Object.assign(s,R),s.encodePart=ht;break;case"password":Object.assign(s,R),s.encodePart=ft;break;case"hostname":Object.assign(s,Ze),we(c)?s.encodePart=ve:s.encodePart=Re;break;case"port":Object.assign(s,R),s.encodePart=Ee;break;case"pathname":be(this.regexp.protocol)?(Object.assign(s,Qe,i),s.encodePart=lt):(Object.assign(s,R,i),s.encodePart=pt);break;case"search":Object.assign(s,R,i),s.encodePart=mt;break;case"hash":Object.assign(s,R,i),s.encodePart=dt;break}try{this.parts[o]=xe(c,s),this.regexp[o]=Se(this.parts[o],this.names[o],s),this.component_pattern[o]=St(this.parts[o],s)}catch{throw new TypeError(`invalid ${o} pattern '${this.pattern[o]}'.`)}}}catch(n){throw new TypeError(`Failed to construct 'URLPattern': ${n.message}`)}}test(e={},t){let r={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof e!="string"&&t)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof e>"u")return!1;try{typeof e=="object"?r=A(r,e,!1):r=A(r,de(e,t),!1)}catch{return!1}let n;for(n of J)if(!this.regexp[n].exec(r[n]))return!1;return!0}exec(e={},t){let r={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof e!="string"&&t)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof e>"u")return;try{typeof e=="object"?r=A(r,e,!1):r=A(r,de(e,t),!1)}catch{return null}let n={};t?n.inputs=[e,t]:n.inputs=[e];let i;for(i of J){let u=this.regexp[i].exec(r[i]);if(!u)return null;let o={};for(let[s,c]of this.names[i].entries())if(typeof c=="string"||typeof c=="number"){let a=u[s+1];o[c]=a}n[i]={input:r[i]??"",groups:o}}return n}static compareComponent(e,t,r){let n=(s,c)=>{for(let a of["type","modifier","prefix","value","suffix"]){if(s[a]<c[a])return-1;if(s[a]===c[a])continue;return 1}return 0},i=new O(3,"","","","",3),u=new O(0,"","","","",3),o=(s,c)=>{let a=0;for(;a<Math.min(s.length,c.length);++a){let f=n(s[a],c[a]);if(f)return f}return s.length===c.length?0:n(s[a]??i,c[a]??i)};return!t.component_pattern[e]&&!r.component_pattern[e]?0:t.component_pattern[e]&&!r.component_pattern[e]?o(t.parts[e],[u]):!t.component_pattern[e]&&r.component_pattern[e]?o([u],r.parts[e]):o(t.parts[e],r.parts[e])}get protocol(){return this.component_pattern.protocol}get username(){return this.component_pattern.username}get password(){return this.component_pattern.password}get hostname(){return this.component_pattern.hostname}get port(){return this.component_pattern.port}get pathname(){return this.component_pattern.pathname}get search(){return this.component_pattern.search}get hash(){return this.component_pattern.hash}};globalThis.URLPattern||(globalThis.URLPattern=G);var Ie=(e,t)=>{var o;if(e===void 0)return{};let r=t.endsWith("/")?t.slice(0,-1):t,i=(o=new G({pathname:e,baseURL:r}).exec(r))==null?void 0:o.pathname.groups;return i?Object.entries(i).reduce((s,[c,a])=>a===void 0?s:{...s,[c]:a},{}):{}};var Pe=e=>e??"";import{env as yt}from"process";var Le=()=>({region:yt.AWS_REGION});import{env as Y}from"process";var $e=()=>({id:Y.SITE_ID,name:Y.SITE_NAME,url:Y.URL});var wt=e=>{let t=JSON.stringify(e);return new Response(t,{headers:{"content-type":"application/json"}})},Ne=(e,t)=>{let r={};try{r=Ie(e[L],e.url)}catch{console.log(`Could not parse function route ${e[L]}.`)}return{account:Q(e.headers.get(ae)),cookies:t.getPublicInterface(),deploy:ee(e.headers.get(B)),flags:M(e),geo:se(e.headers.get(oe)),ip:pe(e.headers.get(ie)),json:wt,log:console.log,next:()=>{throw new Error("`context.next` is not implemented for serverless functions")},params:r,requestId:Pe(e.headers.get(he)),rewrite:i=>{let u=Ct(i,e.url);return bt(u)},server:Le(),site:$e()}},Ct=(e,t)=>{if(e instanceof URL)return e;if(e.startsWith("/")){let r=new URL(t);return r.pathname=e,r}return new URL(e)},bt=async e=>await fetch(e);import Ae from"node:assert";function Te(e){function t(a,f=2){return a.padStart(f,"0")}let r=t(e.getUTCDate().toString()),n=t(e.getUTCHours().toString()),i=t(e.getUTCMinutes().toString()),u=t(e.getUTCSeconds().toString()),o=e.getUTCFullYear(),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${s[e.getUTCDay()]}, ${r} ${c[e.getUTCMonth()]} ${o} ${n}:${i}:${u} GMT`}var kt=/^(?=[\u0020-\u007E]*$)[^()@<>,;:\\"[\]?={}\s]+$/;function Rt(e){if(!e.name)return"";let t=[];if(vt(e.name),It(e.name,e.value),t.push(`${e.name}=${e.value}`),e.name.startsWith("__Secure")&&(e.secure=!0),e.name.startsWith("__Host")&&(e.path="/",e.secure=!0,delete e.domain),e.secure&&t.push("Secure"),e.httpOnly&&t.push("HttpOnly"),typeof e.maxAge=="number"&&Number.isInteger(e.maxAge)&&(Ae(e.maxAge>=0,"Max-Age must be an integer superior or equal to 0"),t.push(`Max-Age=${e.maxAge}`)),e.domain&&(Pt(e.domain),t.push(`Domain=${e.domain}`)),e.sameSite&&t.push(`SameSite=${e.sameSite}`),e.path&&(Et(e.path),t.push(`Path=${e.path}`)),e.expires){let{expires:r}=e,n=Te(typeof r=="number"?new Date(r):r);t.push(`Expires=${n}`)}return e.unparsed&&t.push(e.unparsed.join("; ")),t.join("; ")}function vt(e){if(e&&!kt.test(e))throw new TypeError(`Invalid cookie name: "${e}".`)}function Et(e){if(e!=null)for(let t=0;t<e.length;t++){let r=e.charAt(t);if(r<" "||r>"~"||r==";")throw new Error(`${e}: Invalid cookie path char '${r}'`)}}function It(e,t){if(!(t==null||e==null))for(let r=0;r<t.length;r++){let n=t.charAt(r);if(n<"!"||n=='"'||n==","||n==";"||n=="\\"||n=="\x7F")throw new Error(`RFC2616 cookie '${e}' cannot contain character '${n}'`);if(n>"\x80")throw new Error(`RFC2616 cookie '${e}' can only have US-ASCII chars as value${n.charCodeAt(0).toString(16)}`)}}function Pt(e){if(e==null)return;let t=e.charAt(0),r=e.charAt(e.length-1);if(t=="-"||r=="."||r=="-")throw new Error(`Invalid first/last char in cookie domain: ${e}`)}function _e(e){let t=e.get("Cookie");if(t!=null){let r={},n=t.split(";");for(let i of n){let[u,...o]=i.split("=");Ae(u!=null);let s=u.trim();r[s]=o.join("=")}return r}return{}}function Z(e,t){let r=Rt(t);r&&e.append("Set-Cookie",r)}function Oe(e,t,r){Z(e,Object.assign({name:t,value:"",expires:new Date(0)},r))}var V=class{constructor(t){this.ops=[],this.request=t}apply(t){this.ops.forEach(r=>{switch(r.type){case"delete":Oe(t.headers,r.options.name,{domain:r.options.domain,path:r.options.path});break;case"set":Z(t.headers,r.cookie);break;default:}})}delete(t){let r={path:"/"},n=typeof t=="string"?{name:t}:t;this.ops.push({options:{...r,...n},type:"delete"})}get(t){return _e(this.request.headers)[t]}getPublicInterface(){return{delete:this.delete.bind(this),get:this.get.bind(this),set:this.set.bind(this)}}set(t,r){let n;if(typeof t=="string"){if(typeof r!="string")throw new TypeError("You must provide the cookie value as a string to 'cookies.set'");n={name:t,value:r}}else n=t;this.ops.push({cookie:n,type:"set"})}};import{Buffer as Fe}from"node:buffer";import De from"node:process";var Lt="NETLIFY_PURGE_API_TOKEN",$t="NETLIFY_BLOBS_CONTEXT",Ue=(e,t,r)=>{var u,o;let{blobs:n}=t,i=(o=(u=r==null?void 0:r.clientContext)==null?void 0:u.custom)==null?void 0:o.purge_api_token;if(typeof n=="string"&&n!=="")try{let s=Fe.from(n,"base64").toString("utf8"),c=JSON.parse(s),a=e.get(ce),f=e.get(B);De.env[$t]=Fe.from(JSON.stringify({edgeURL:c.url,uncachedEdgeURL:c.url_uncached,token:c.token,siteID:a,deployID:f,primaryRegion:c.primary_region})).toString("base64")}catch(s){console.error("An internal error occurred while setting up Netlify Blobs:",s)}typeof i=="string"&&i!==""&&(De.env[Lt]=i)};var W=class e extends Error{constructor(t){super(t),this.name="NetlifyUserError",Object.setPrototypeOf(this,e.prototype)}};import At from"node:http";import _t from"node:https";import{AsyncLocalStorage as Nt}from"node:async_hooks";var F=new Nt;import{env as Tt}from"node:process";var He=(e,t)=>{Tt.NETLIFY_DEV||console.log("__nfSystemLog",{msg:e,fields:t})};var Ot=globalThis.fetch,qe=!1,je=e=>{let t=F.getStore();if(t!=null&&t.cdnLoopHeader){if(e.headersSent){He("Headers already sent, cannot add CDN-Loop header");return}e.setHeader("CDN-Loop",t==null?void 0:t.cdnLoopHeader)}},Me=()=>{if(!qe){qe=!0,globalThis.fetch=function(t,r){let n=new Request(t,r),i=F.getStore();return i!=null&&i.cdnLoopHeader&&n.headers.set("CDN-Loop",i.cdnLoopHeader),Ot(n)};for(let e of[At,_t]){let t=e.request;e.get=function(...n){let i=t(...n);return je(i),i.end(),i},e.request=function(...n){let i=t(...n);return je(i),i}}}};var jt=qt(Ut),Mt=e=>awslambda.streamifyResponse(async(t,r,n)=>{let{body:i,httpMethod:u,isBase64Encoded:o,headers:s,rawUrl:c,route:a}=t,f=fe(s),x=re(i,o),g=new H(c,{body:x,headers:f,method:u});Ue(f,t,n),ne(t,g),a&&(g[L]=a);let I=M(g);I.get("serverless_functions_request_interceptor_v2")===!0&&Me(),I.get("serverless_functions_wait_event_loop")===!0&&(n.callbackWaitsForEmptyEventLoop=!1);let v=new V(g),P=Ne(g,v),y=await F.run({cdnLoopHeader:f.get("cdn-loop")},()=>e.default(g,P)),N={version:Dt},T=Ft.from(JSON.stringify(N)).toString("base64");if(y instanceof Response){v.apply(y);let h=new Headers(y.headers),{body:l,status:m}=y,w=I.evaluations;w.size!==0&&h.set(ue,[...w].join(",")),h.set(z,T);let U={multiValueHeaders:le(h),statusCode:m},p=awslambda.HttpResponseStream.from(r,U);if((I.get("serverless_functions_fix_empty_body")===!0||l===null)&&p.write(""),l===null){p.end();return}let d=Ht.fromWeb(l);await jt(d,p);return}if(y===void 0){let h=awslambda.HttpResponseStream.from(r,{statusCode:204,headers:{[z]:T}});h.write(""),h.end();return}throw new W("Function returned an unsupported value. Accepted types are 'Response' or 'undefined'")});import D from"process";var Bt={delete:e=>{delete D.env[e]},get:e=>D.env[e],has:e=>!!D.env[e],set:(e,t)=>{D.env[e]=t},toObject:()=>Object.entries(D.env).reduce((e,[t,r])=>r===void 0?e:{...e,[t]:r},{})},Be={env:Bt};globalThis.Netlify=Be;var Gt=()=>Be;var Sn=()=>Vt(import.meta.url);export{Mt as getLambdaHandler,Gt as getNetlifyGlobal,Sn as getPath};
