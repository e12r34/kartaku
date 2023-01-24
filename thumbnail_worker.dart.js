(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.q5(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.mg(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.km(b)
return new s(c,this)}:function(){if(s===null)s=A.km(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.km(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={jP:function jP(){},
np(a){return new A.bC("Field '"+a+"' has been assigned during initialization.")},
hp(a){return new A.bC("Field '"+a+"' has not been initialized.")},
k2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lr(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ck(a,b,c){return a},
f2(a,b,c,d){A.aG(b,"start")
if(c!=null){A.aG(c,"end")
if(b>c)A.D(A.R(b,0,c,"start",null))}return new A.de(a,b,c,d.k("de<0>"))},
l6(a,b,c,d){if(t.U.b(a))return new A.bx(a,b,c.k("@<0>").G(d).k("bx<1,2>"))
return new A.aV(a,b,c.k("@<0>").G(d).k("aV<1,2>"))},
lm(a,b,c){var s="count"
if(t.U.b(a)){A.fG(b,s,t.p)
A.aG(b,s)
return new A.bY(a,b,c.k("bY<0>"))}A.fG(b,s,t.p)
A.aG(b,s)
return new A.aY(a,b,c.k("aY<0>"))},
bB(){return new A.c7("No element")},
kV(){return new A.c7("Too few elements")},
bC:function bC(a){this.a=a},
ap:function ap(a){this.a=a},
jy:function jy(){},
hK:function hK(){},
q:function q(){},
V:function V(){},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bD:function bD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.$ti=c},
bE:function bE(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
Z:function Z(a,b,c){this.a=a
this.b=b
this.$ti=c},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
aP:function aP(a){this.$ti=a},
cv:function cv(a){this.$ti=a},
a4:function a4(){},
bj:function bj(){},
ca:function ca(){},
nd(a){if(typeof a=="number")return B.c.gH(a)
if(t.bA.b(a))return A.d6(a)
return A.kq(a)},
ne(a){return new A.h2(a)},
mh(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
pX(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.ez.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bR(a)
return s},
d6(a){var s,r=$.l9
if(r==null)r=$.l9=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
nz(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.a(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hE(a){return A.ny(a)},
ny(a){var s,r,q,p
if(a instanceof A.t)return A.am(A.a_(a),null)
s=J.cn(a)
if(s===B.aW||s===B.b0||t.bI.b(a)){r=B.a2(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.am(A.a_(a),null)},
l8(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nA(a){var s,r,q,p=A.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aK)(a),++r){q=a[r]
if(!A.jf(q))throw A.d(A.br(q))
if(q<=65535)B.b.v(p,q)
else if(q<=1114111){B.b.v(p,55296+(B.a.i(q-65536,10)&1023))
B.b.v(p,56320+(q&1023))}else throw A.d(A.br(q))}return A.l8(p)},
lg(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.jf(q))throw A.d(A.br(q))
if(q<0)throw A.d(A.br(q))
if(q>65535)return A.nA(a)}return A.l8(a)},
nB(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
G(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.i(s,10)|55296)>>>0,s&1023|56320)}throw A.d(A.R(a,0,1114111,null,null))},
al(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
eQ(a){return a.b?A.al(a).getUTCFullYear()+0:A.al(a).getFullYear()+0},
le(a){return a.b?A.al(a).getUTCMonth()+1:A.al(a).getMonth()+1},
la(a){return a.b?A.al(a).getUTCDate()+0:A.al(a).getDate()+0},
lb(a){return a.b?A.al(a).getUTCHours()+0:A.al(a).getHours()+0},
ld(a){return a.b?A.al(a).getUTCMinutes()+0:A.al(a).getMinutes()+0},
lf(a){return a.b?A.al(a).getUTCSeconds()+0:A.al(a).getSeconds()+0},
lc(a){return a.b?A.al(a).getUTCMilliseconds()+0:A.al(a).getMilliseconds()+0},
J(a){throw A.d(A.br(a))},
a(a,b){if(a==null)J.aM(a)
throw A.d(A.cl(a,b))},
cl(a,b){var s,r="index",q=null
if(!A.jf(b))return new A.aE(!0,b,r,q)
s=A.u(J.aM(a))
if(b<0||b>=s)return A.hf(b,a,r,q,s)
return new A.d9(q,q,!0,b,r,"Value not in range")},
pI(a,b,c){if(a<0||a>c)return A.R(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.R(b,a,c,"end",null)
return new A.aE(!0,b,"end",null)},
br(a){return new A.aE(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.eK()
s=new Error()
s.dartException=a
r=A.q6
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
q6(){return J.bR(this.dartException)},
D(a){throw A.d(a)},
aK(a){throw A.d(A.ba(a))},
aZ(a){var s,r,q,p,o,n
a=A.q3(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hZ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
i_(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lu(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jQ(a,b){var s=b==null,r=s?null:b.method
return new A.ev(a,r,s?null:b.receiver)},
a3(a){var s
if(a==null)return new A.hx(a)
if(a instanceof A.cx){s=a.a
return A.bs(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.bs(a,a.dartException)
return A.pv(a)},
bs(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.i(r,16)&8191)===10)switch(q){case 438:return A.bs(a,A.jQ(A.o(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.o(s)
return A.bs(a,new A.d4(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.mm()
n=$.mn()
m=$.mo()
l=$.mp()
k=$.ms()
j=$.mt()
i=$.mr()
$.mq()
h=$.mv()
g=$.mu()
f=o.aA(s)
if(f!=null)return A.bs(a,A.jQ(A.aH(s),f))
else{f=n.aA(s)
if(f!=null){f.method="call"
return A.bs(a,A.jQ(A.aH(s),f))}else{f=m.aA(s)
if(f==null){f=l.aA(s)
if(f==null){f=k.aA(s)
if(f==null){f=j.aA(s)
if(f==null){f=i.aA(s)
if(f==null){f=l.aA(s)
if(f==null){f=h.aA(s)
if(f==null){f=g.aA(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.aH(s)
return A.bs(a,new A.d4(s,f==null?e:f.method))}}}return A.bs(a,new A.fa(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dd()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.bs(a,new A.aE(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dd()
return a},
ao(a){var s
if(a instanceof A.cx)return a.b
if(a==null)return new A.dC(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.dC(a)},
kq(a){if(a==null||typeof a!="object")return J.co(a)
else return A.d6(a)},
m9(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
pW(a,b,c,d,e,f){t.Y.a(a)
switch(A.u(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.iH("Unsupported number of arguments for wrapped closure"))},
bQ(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pW)
a.$identity=s
return s},
mW(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.f_().constructor.prototype):Object.create(new A.bT(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.kJ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.mS(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.kJ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
mS(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.mO)}throw A.d("Error in functionType of tearoff")},
mT(a,b,c,d){var s=A.kI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kJ(a,b,c,d){var s,r
if(c)return A.mV(a,b,d)
s=b.length
r=A.mT(s,d,a,b)
return r},
mU(a,b,c,d){var s=A.kI,r=A.mP
switch(b?-1:a){case 0:throw A.d(new A.eZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
mV(a,b,c){var s,r
if($.kG==null)$.kG=A.kF("interceptor")
if($.kH==null)$.kH=A.kF("receiver")
s=b.length
r=A.mU(s,c,a,b)
return r},
km(a){return A.mW(a)},
mO(a,b){return A.j9(v.typeUniverse,A.a_(a.a),b)},
kI(a){return a.a},
mP(a){return a.b},
kF(a){var s,r,q,p=new A.bT("receiver","interceptor"),o=J.jO(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.bS("Field name "+a+" not found.",null))},
b5(a){if(a==null)A.px("boolean expression must not be null")
return a},
px(a){throw A.d(new A.fh(a))},
q5(a){throw A.d(new A.dX(a))},
pP(a){return v.getIsolateTag(a)},
eC(a,b,c){var s=new A.ai(a,b,c.k("ai<0>"))
s.c=a.e
return s},
rG(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pZ(a){var s,r,q,p,o,n=A.aH($.ma.$1(a)),m=$.jo[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jv[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.kg($.m5.$2(a,n))
if(q!=null){m=$.jo[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jv[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jx(s)
$.jo[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jv[n]=s
return s}if(p==="-"){o=A.jx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.mc(a,s)
if(p==="*")throw A.d(A.f9(n))
if(v.leafTags[n]===true){o=A.jx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.mc(a,s)},
mc(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kp(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jx(a){return J.kp(a,!1,null,!!a.$iah)},
q0(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jx(s)
else return J.kp(s,c,null,null)},
pT(){if(!0===$.ko)return
$.ko=!0
A.pU()},
pU(){var s,r,q,p,o,n,m,l
$.jo=Object.create(null)
$.jv=Object.create(null)
A.pS()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.me.$1(o)
if(n!=null){m=A.q0(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pS(){var s,r,q,p,o,n,m=B.aN()
m=A.cj(B.aO,A.cj(B.aP,A.cj(B.a3,A.cj(B.a3,A.cj(B.aQ,A.cj(B.aR,A.cj(B.aS(B.a2),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ma=new A.js(p)
$.m5=new A.jt(o)
$.me=new A.ju(n)},
cj(a,b){return a(b)||b},
q3(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cu:function cu(){},
c_:function c_(a,b){this.a=a
this.$ti=b},
h2:function h2(a){this.a=a},
hZ:function hZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d4:function d4(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a){this.a=a},
hx:function hx(a){this.a=a},
cx:function cx(a,b){this.a=a
this.b=b},
dC:function dC(a){this.a=a
this.b=null},
bv:function bv(){},
dT:function dT(){},
dU:function dU(){},
f4:function f4(){},
f_:function f_(){},
bT:function bT(a,b){this.a=a
this.b=b},
eZ:function eZ(a){this.a=a},
fh:function fh(a){this.a=a},
U:function U(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ho:function ho(a){this.a=a},
hn:function hn(a){this.a=a},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aA:function aA(a,b){this.a=a
this.$ti=b},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
c(a){return A.D(A.hp(a))},
mg(a){return A.D(A.np(a))},
as(a){var s=new A.iC(a)
return s.b=s},
iC:function iC(a){this.a=a
this.b=null},
bp(a,b,c){},
cg(a){return a},
nr(a){return new Float32Array(a)},
ns(a,b,c){A.bp(a,b,c)
c=B.a.I(a.byteLength-b,4)
return new Float32Array(a,b,c)},
nt(a){return new Int32Array(a)},
l7(a){return new Int8Array(a)},
nu(a,b,c){var s
A.bp(a,b,c)
s=new Int8Array(a,b)
return s},
nv(a){return new Uint16Array(a)},
nw(a){return new Uint32Array(a)},
jU(a,b,c){A.bp(a,b,c)
c=B.a.I(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hv(a){return new Uint8Array(a)},
I(a,b,c){A.bp(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
b4(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cl(b,a))},
aI(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.pI(a,b,c))
if(b==null)return c
return b},
d1:function d1(){},
O:function O(){},
X:function X(){},
be:function be(){},
ak:function ak(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
d2:function d2(){},
d3:function d3(){},
bF:function bF(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
lk(a,b){var s=b.c
return s==null?b.c=A.kf(a,b.y,!0):s},
lj(a,b){var s=b.c
return s==null?b.c=A.dG(a,"ax",[b.y]):s},
ll(a){var s=a.x
if(s===6||s===7||s===8)return A.ll(a.y)
return s===11||s===12},
nE(a){return a.at},
cm(a){return A.fy(v.typeUniverse,a,!1)},
bq(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bq(a,s,a0,a1)
if(r===s)return b
return A.lP(a,r,!0)
case 7:s=b.y
r=A.bq(a,s,a0,a1)
if(r===s)return b
return A.kf(a,r,!0)
case 8:s=b.y
r=A.bq(a,s,a0,a1)
if(r===s)return b
return A.lO(a,r,!0)
case 9:q=b.z
p=A.dN(a,q,a0,a1)
if(p===q)return b
return A.dG(a,b.y,p)
case 10:o=b.y
n=A.bq(a,o,a0,a1)
m=b.z
l=A.dN(a,m,a0,a1)
if(n===o&&l===m)return b
return A.kd(a,n,l)
case 11:k=b.y
j=A.bq(a,k,a0,a1)
i=b.z
h=A.ps(a,i,a0,a1)
if(j===k&&h===i)return b
return A.lN(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.dN(a,g,a0,a1)
o=b.y
n=A.bq(a,o,a0,a1)
if(f===g&&n===o)return b
return A.ke(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.fH("Attempted to substitute unexpected RTI kind "+c))}},
dN(a,b,c,d){var s,r,q,p,o=b.length,n=A.jb(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bq(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
pt(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.jb(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bq(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ps(a,b,c,d){var s,r=b.a,q=A.dN(a,r,c,d),p=b.b,o=A.dN(a,p,c,d),n=b.c,m=A.pt(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.fm()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
pD(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.pQ(s)
return a.$S()}return null},
mb(a,b){var s
if(A.ll(b))if(a instanceof A.bv){s=A.pD(a)
if(s!=null)return s}return A.a_(a)},
a_(a){var s
if(a instanceof A.t){s=a.$ti
return s!=null?s:A.kj(a)}if(Array.isArray(a))return A.ab(a)
return A.kj(J.cn(a))},
ab(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
w(a){var s=a.$ti
return s!=null?s:A.kj(a)},
kj(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pc(a,s)},
pc(a,b){var s=a instanceof A.bv?a.__proto__.__proto__.constructor:b,r=A.oV(v.typeUniverse,s.name)
b.$ccache=r
return r},
pQ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fy(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pG(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.dE(a)
q=A.fy(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.dE(q):p},
q7(a){return A.pG(A.fy(v.typeUniverse,a,!1))},
pb(a){var s,r,q,p,o=this
if(o===t.K)return A.ch(o,a,A.pg)
if(!A.b6(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.ch(o,a,A.pj)
s=o.x
r=s===6?o.y:o
if(r===t.p)q=A.jf
else if(r===t.gR||r===t.di)q=A.pf
else if(r===t.N)q=A.ph
else q=r===t.v?A.dK:null
if(q!=null)return A.ch(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.pY)){o.r="$i"+p
if(p==="l")return A.ch(o,a,A.pe)
return A.ch(o,a,A.pi)}}else if(s===7)return A.ch(o,a,A.p9)
return A.ch(o,a,A.p7)},
ch(a,b,c){a.b=c
return a.b(b)},
pa(a){var s,r=this,q=A.p6
if(!A.b6(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.p1
else if(r===t.K)q=A.p0
else{s=A.dO(r)
if(s)q=A.p8}r.a=q
return r.a(a)},
jg(a){var s,r=a.x
if(!A.b6(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.jg(a.y)||a===t.P||a===t.u
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p7(a){var s=this
if(a==null)return A.jg(s)
return A.N(v.typeUniverse,A.mb(a,s),null,s,null)},
p9(a){if(a==null)return!0
return this.y.b(a)},
pi(a){var s,r=this
if(a==null)return A.jg(r)
s=r.r
if(a instanceof A.t)return!!a[s]
return!!J.cn(a)[s]},
pe(a){var s,r=this
if(a==null)return A.jg(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.t)return!!a[s]
return!!J.cn(a)[s]},
p6(a){var s,r=this
if(a==null){s=A.dO(r)
if(s)return a}else if(r.b(a))return a
A.lX(a,r)},
p8(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.lX(a,s)},
lX(a,b){throw A.d(A.oL(A.lF(a,A.mb(a,b),A.am(b,null))))},
lF(a,b,c){var s=A.cw(a)
return s+": type '"+A.am(b==null?A.a_(a):b,null)+"' is not a subtype of type '"+c+"'"},
oL(a){return new A.dF("TypeError: "+a)},
a8(a,b){return new A.dF("TypeError: "+A.lF(a,null,b))},
pg(a){return a!=null},
p0(a){if(a!=null)return a
throw A.d(A.a8(a,"Object"))},
pj(a){return!0},
p1(a){return a},
dK(a){return!0===a||!1===a},
lS(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.a8(a,"bool"))},
rx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.a8(a,"bool"))},
rw(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.a8(a,"bool?"))},
oZ(a){if(typeof a=="number")return a
throw A.d(A.a8(a,"double"))},
rz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.a8(a,"double"))},
ry(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.a8(a,"double?"))},
jf(a){return typeof a=="number"&&Math.floor(a)===a},
u(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.a8(a,"int"))},
rA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.a8(a,"int"))},
lT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.a8(a,"int?"))},
pf(a){return typeof a=="number"},
p_(a){if(typeof a=="number")return a
throw A.d(A.a8(a,"num"))},
rC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.a8(a,"num"))},
rB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.a8(a,"num?"))},
ph(a){return typeof a=="string"},
aH(a){if(typeof a=="string")return a
throw A.d(A.a8(a,"String"))},
rD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.a8(a,"String"))},
kg(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.a8(a,"String?"))},
pp(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.am(a[q],b)
return s},
lY(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.b.v(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.a(a5,j)
m=B.h.bo(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.am(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.am(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.am(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.am(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.am(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
am(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.am(a.y,b)
return s}if(l===7){r=a.y
s=A.am(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.am(a.y,b)+">"
if(l===9){p=A.pu(a.y)
o=a.z
return o.length>0?p+("<"+A.pp(o,b)+">"):p}if(l===11)return A.lY(a,b,null)
if(l===12)return A.lY(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
pu(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oW(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oV(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fy(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dH(a,5,"#")
q=A.jb(s)
for(p=0;p<s;++p)q[p]=r
o=A.dG(a,b,q)
n[b]=o
return o}else return m},
oT(a,b){return A.lQ(a.tR,b)},
oS(a,b){return A.lQ(a.eT,b)},
fy(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lM(A.lK(a,null,b,c))
r.set(b,s)
return s},
j9(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lM(A.lK(a,b,c,!0))
q.set(c,r)
return r},
oU(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.kd(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
bo(a,b){b.a=A.pa
b.b=A.pb
return b},
dH(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aB(null,null)
s.x=b
s.at=c
r=A.bo(a,s)
a.eC.set(c,r)
return r},
lP(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.oQ(a,b,r,c)
a.eC.set(r,s)
return s},
oQ(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.b6(b))r=b===t.P||b===t.u||s===7||s===6
else r=!0
if(r)return b}q=new A.aB(null,null)
q.x=6
q.y=b
q.at=c
return A.bo(a,q)},
kf(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.oP(a,b,r,c)
a.eC.set(r,s)
return s},
oP(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.b6(b))if(!(b===t.P||b===t.u))if(s!==7)r=s===8&&A.dO(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.dO(q.y))return q
else return A.lk(a,b)}}p=new A.aB(null,null)
p.x=7
p.y=b
p.at=c
return A.bo(a,p)},
lO(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.oN(a,b,r,c)
a.eC.set(r,s)
return s},
oN(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.b6(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dG(a,"ax",[b])
else if(b===t.P||b===t.u)return t.bG}q=new A.aB(null,null)
q.x=8
q.y=b
q.at=c
return A.bo(a,q)},
oR(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aB(null,null)
s.x=13
s.y=b
s.at=q
r=A.bo(a,s)
a.eC.set(q,r)
return r},
fx(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
oM(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
dG(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fx(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aB(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.bo(a,r)
a.eC.set(p,q)
return q},
kd(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.fx(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aB(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.bo(a,o)
a.eC.set(q,n)
return n},
lN(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fx(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fx(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.oM(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aB(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.bo(a,p)
a.eC.set(r,o)
return o},
ke(a,b,c,d){var s,r=b.at+("<"+A.fx(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.oO(a,b,c,r,d)
a.eC.set(r,s)
return s},
oO(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.jb(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bq(a,b,r,0)
m=A.dN(a,c,r,0)
return A.ke(a,n,m,c!==m)}}l=new A.aB(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.bo(a,l)},
lK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lM(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.oG(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.lL(a,r,h,g,!1)
else if(q===46)r=A.lL(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bm(a.u,a.e,g.pop()))
break
case 94:g.push(A.oR(a.u,g.pop()))
break
case 35:g.push(A.dH(a.u,5,"#"))
break
case 64:g.push(A.dH(a.u,2,"@"))
break
case 126:g.push(A.dH(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.kb(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.dG(p,n,o))
else{m=A.bm(p,a.e,n)
switch(m.x){case 11:g.push(A.ke(p,m,o,a.n))
break
default:g.push(A.kd(p,m,o))
break}}break
case 38:A.oH(a,g)
break
case 42:p=a.u
g.push(A.lP(p,A.bm(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.kf(p,A.bm(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.lO(p,A.bm(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.fm()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.kb(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.lN(p,A.bm(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.kb(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.oJ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bm(a.u,a.e,i)},
oG(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lL(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.oW(s,o.y)[p]
if(n==null)A.D('No "'+p+'" in "'+A.nE(o)+'"')
d.push(A.j9(s,o,n))}else d.push(p)
return m},
oH(a,b){var s=b.pop()
if(0===s){b.push(A.dH(a.u,1,"0&"))
return}if(1===s){b.push(A.dH(a.u,4,"1&"))
return}throw A.d(A.fH("Unexpected extended operation "+A.o(s)))},
bm(a,b,c){if(typeof c=="string")return A.dG(a,c,a.sEA)
else if(typeof c=="number")return A.oI(a,b,c)
else return c},
kb(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bm(a,b,c[s])},
oJ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bm(a,b,c[s])},
oI(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.fH("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.fH("Bad index "+c+" for "+b.q(0)))},
N(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.b6(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.b6(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.N(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.u
if(s){if(p===8)return A.N(a,b,c,d.y,e)
return d===t.P||d===t.u||p===7||p===6}if(d===t.K){if(r===8)return A.N(a,b.y,c,d,e)
if(r===6)return A.N(a,b.y,c,d,e)
return r!==7}if(r===6)return A.N(a,b.y,c,d,e)
if(p===6){s=A.lk(a,d)
return A.N(a,b,c,s,e)}if(r===8){if(!A.N(a,b.y,c,d,e))return!1
return A.N(a,A.lj(a,b),c,d,e)}if(r===7){s=A.N(a,t.P,c,d,e)
return s&&A.N(a,b.y,c,d,e)}if(p===8){if(A.N(a,b,c,d.y,e))return!0
return A.N(a,b,c,A.lj(a,d),e)}if(p===7){s=A.N(a,b,c,t.P,e)
return s||A.N(a,b,c,d.y,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.cj)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.N(a,k,c,j,e)||!A.N(a,j,e,k,c))return!1}return A.lZ(a,b.y,c,d.y,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return A.lZ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.pd(a,b,c,d,e)}return!1},
lZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.N(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.N(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.N(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.N(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.N(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pd(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j9(a,b,r[o])
return A.lR(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.lR(a,n,null,c,m,e)},
lR(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.N(a,r,d,q,f))return!1}return!0},
dO(a){var s,r=a.x
if(!(a===t.P||a===t.u))if(!A.b6(a))if(r!==7)if(!(r===6&&A.dO(a.y)))s=r===8&&A.dO(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pY(a){var s
if(!A.b6(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b6(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
lQ(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
jb(a){return a>0?new Array(a):v.typeUniverse.sEA},
aB:function aB(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
fm:function fm(){this.c=this.b=this.a=null},
dE:function dE(a){this.a=a},
fl:function fl(){},
dF:function dF(a){this.a=a},
ox(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.py()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bQ(new A.iy(q),1)).observe(s,{childList:true})
return new A.ix(q,s,r)}else if(self.setImmediate!=null)return A.pz()
return A.pA()},
oy(a){self.scheduleImmediate(A.bQ(new A.iz(t.M.a(a)),0))},
oz(a){self.setImmediate(A.bQ(new A.iA(t.M.a(a)),0))},
oA(a){t.M.a(a)
A.oK(0,a)},
oK(a,b){var s=new A.j7()
s.fo(a,b)
return s},
m_(a){return new A.fi(new A.M($.C,a.k("M<0>")),a.k("fi<0>"))},
lW(a,b){a.$2(0,null)
b.b=!0
return b.a},
kh(a,b){A.p2(a,b)},
lV(a,b){b.cc(a)},
lU(a,b){b.cU(A.a3(a),A.ao(a))},
p2(a,b){var s,r,q=new A.jd(b),p=new A.je(b)
if(a instanceof A.M)a.e8(q,p,t.z)
else{s=t.z
if(t.c.b(a))a.d0(q,p,s)
else{r=new A.M($.C,t.d)
r.a=8
r.c=a
r.e8(q,p,s)}}},
m4(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.C.ez(new A.jj(s),t.H,t.p,t.z)},
rf(a){return new A.ce(a,1)},
lH(){return B.he},
lI(a){return new A.ce(a,3)},
m0(a,b){return new A.dD(a,b.k("dD<0>"))},
fI(a,b){var s=A.ck(a,"error",t.K)
return new A.cs(s,b==null?A.kD(a):b)},
kD(a){var s
if(t.V.b(a)){s=a.gbU()
if(s!=null)return s}return B.aU},
k8(a,b){var s,r,q
for(s=t.d;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.c7()
b.cq(a)
A.cd(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.dX(q)}},
cd(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.c;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.jh(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.cd(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.jh(i.a,i.b)
return}f=$.C
if(f!==g)$.C=g
else f=null
b=b.c
if((b&15)===8)new A.iS(p,c,m).$0()
else if(n){if((b&1)!==0)new A.iR(p,i).$0()}else if((b&2)!==0)new A.iQ(c,p).$0()
if(f!=null)$.C=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.k("ax<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.c8(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.k8(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.c8(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
pn(a,b){var s
if(t.C.b(a))return b.ez(a,t.z,t.K,t.l)
s=t.x
if(s.b(a))return s.a(a)
throw A.d(A.jF(a,"onError",u.b))},
pm(){var s,r
for(s=$.ci;s!=null;s=$.ci){$.dM=null
r=s.b
$.ci=r
if(r==null)$.dL=null
s.a.$0()}},
pr(){$.kk=!0
try{A.pm()}finally{$.dM=null
$.kk=!1
if($.ci!=null)$.kt().$1(A.m6())}},
m3(a){var s=new A.fj(a),r=$.dL
if(r==null){$.ci=$.dL=s
if(!$.kk)$.kt().$1(A.m6())}else $.dL=r.b=s},
pq(a){var s,r,q,p=$.ci
if(p==null){A.m3(a)
$.dM=$.dL
return}s=new A.fj(a)
r=$.dM
if(r==null){s.b=p
$.ci=$.dM=s}else{q=r.b
s.b=q
$.dM=r.b=s
if(q==null)$.dL=s}},
q4(a){var s,r=null,q=$.C
if(B.m===q){A.bP(r,r,B.m,a)
return}s=!1
if(s){A.bP(r,r,q,t.M.a(a))
return}A.bP(r,r,q,t.M.a(q.ef(a)))},
qV(a,b){A.ck(a,"stream",t.K)
return new A.fs(b.k("fs<0>"))},
jh(a,b){A.pq(new A.ji(a,b))},
m1(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
m2(a,b,c,d,e,f,g){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
po(a,b,c,d,e,f,g,h,i){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
bP(a,b,c,d){t.M.a(d)
if(B.m!==c)d=c.ef(d)
A.m3(d)},
iy:function iy(a){this.a=a},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
j7:function j7(){},
j8:function j8(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=!1
this.$ti=b},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jj:function jj(a){this.a=a},
ce:function ce(a,b){this.a=a
this.b=b},
bn:function bn(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
dD:function dD(a,b){this.a=a
this.$ti=b},
cs:function cs(a,b){this.a=a
this.b=b},
fk:function fk(){},
bN:function bN(a,b){this.a=a
this.$ti=b},
b3:function b3(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
M:function M(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iI:function iI(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
iR:function iR(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
fj:function fj(a){this.a=a
this.b=null},
c8:function c8(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
f0:function f0(){},
f1:function f1(){},
fs:function fs(a){this.$ti=a},
dI:function dI(){},
ji:function ji(a,b){this.a=a
this.b=b},
fq:function fq(){},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
l2(a,b,c,d){var s
if(b==null){if(a==null)return new A.U(c.k("@<0>").G(d).k("U<1,2>"))
s=A.m7()}else{if(a==null)a=A.pE()
s=A.m7()}return A.oE(s,a,b,c,d)},
cZ(a,b,c){return b.k("@<0>").G(c).k("jR<1,2>").a(A.m9(a,new A.U(b.k("@<0>").G(c).k("U<1,2>"))))},
F(a,b){return new A.U(a.k("@<0>").G(b).k("U<1,2>"))},
oE(a,b,c,d,e){var s=c!=null?c:new A.j1(d)
return new A.dr(a,b,s,d.k("@<0>").G(e).k("dr<1,2>"))},
nq(a){return new A.ds(a.k("ds<0>"))},
ka(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oF(a,b,c){var s=new A.bO(a,b,c.k("bO<0>"))
s.c=a.e
return s},
p3(a,b){return J.bt(a,b)},
p4(a){return J.co(a)},
nm(a,b,c){var s,r
if(A.kl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.b.v($.an,a)
try{A.pk(a,s)}finally{if(0>=$.an.length)return A.a($.an,-1)
$.an.pop()}r=A.lq(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jN(a,b,c){var s,r
if(A.kl(a))return b+"..."+c
s=new A.bI(b)
B.b.v($.an,a)
try{r=s
r.a=A.lq(r.a,a,", ")}finally{if(0>=$.an.length)return A.a($.an,-1)
$.an.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kl(a){var s,r
for(s=$.an.length,r=0;r<s;++r)if(a===$.an[r])return!0
return!1},
pk(a,b){var s,r,q,p,o,n,m,l=a.gT(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=A.o(l.gE())
B.b.v(b,s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gE();++j
if(!l.A()){if(j<=4){B.b.v(b,A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE();++j
for(;l.A();p=o,o=n){n=l.gE();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.b.v(b,"...")
return}}q=A.o(p)
r=A.o(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.b.v(b,m)
B.b.v(b,q)
B.b.v(b,r)},
eD(a,b,c){var s=A.l2(null,null,b,c)
a.aJ(0,new A.hr(s,b,c))
return s},
jT(a){var s,r={}
if(A.kl(a))return"{...}"
s=new A.bI("")
try{B.b.v($.an,a)
s.a+="{"
r.a=!0
a.aJ(0,new A.hu(r,s))
s.a+="}"}finally{if(0>=$.an.length)return A.a($.an,-1)
$.an.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dr:function dr(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
j1:function j1(a){this.a=a},
ds:function ds(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fp:function fp(a){this.a=a
this.b=null},
bO:function bO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cV:function cV(){},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(){},
r:function r(){},
d0:function d0(){},
hu:function hu(a,b){this.a=a
this.b=b},
a2:function a2(){},
du:function du(a,b){this.a=a
this.$ti=b},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
da:function da(){},
dB:function dB(){},
dt:function dt(){},
dJ:function dJ(){},
nK(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.nL(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nL(a,b,c,d){var s=a?$.mx():$.mw()
if(s==null)return null
if(0===c&&d===b.length)return A.lw(s,b)
return A.lw(s,b.subarray(c,A.ar(c,d,b.length)))},
lw(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
l1(a,b,c){return new A.cY(a,b)},
p5(a){return a.eE()},
oD(a,b){return new A.fo(a,[],A.m8())},
lJ(a,b,c){var s,r,q=new A.bI("")
if(c==null)s=A.oD(q,b)
else s=new A.iZ(c,0,q,[],A.m8())
s.b9(a)
r=q.a
return r.charCodeAt(0)==0?r:r},
oY(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oX(a,b,c){var s,r,q,p,o=c-b,n=new Uint8Array(o)
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)>>>0!==0)p=255
if(!(r<o))return A.a(n,r)
n[r]=p}return n},
i1:function i1(){},
i0:function i0(){},
fw:function fw(){},
fv:function fv(){},
bW:function bW(){},
aN:function aN(){},
dY:function dY(){},
cY:function cY(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
ew:function ew(){},
ey:function ey(a,b){this.a=a
this.b=b},
j_:function j_(){},
j0:function j0(a,b){this.a=a
this.b=b},
iX:function iX(){},
iY:function iY(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c){this.c=a
this.a=b
this.b=c},
iZ:function iZ(a,b,c,d,e){var _=this
_.f=a
_.a$=b
_.c=c
_.a=d
_.b=e},
ez:function ez(){},
eB:function eB(){},
eA:function eA(a){this.a=a},
fc:function fc(a){this.a=a},
ja:function ja(a){this.a=a
this.b=16
this.c=0},
fz:function fz(){},
pV(a){var s=A.nz(a,null)
if(s!=null)return s
throw A.d(A.jJ(a,null,null))},
mZ(a){if(a instanceof A.bv)return a.q(0)
return"Instance of '"+A.hE(a)+"'"},
n_(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.q(0)
throw a
throw A.d("unreachable")},
W(a,b,c,d){var s,r=c?J.ep(a,d):J.hh(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
l4(a,b){var s,r=A.b([],b.k("p<0>"))
for(s=J.aw(a);s.A();)B.b.v(r,b.a(s.gE()))
return r},
hs(a,b,c){var s
if(b)return A.l3(a,c)
s=J.jO(A.l3(a,c),c)
return s},
l3(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.k("p<0>"))
s=A.b([],b.k("p<0>"))
for(r=J.aw(a);r.A();)B.b.v(s,r.gE())
return s},
jS(a,b,c,d){var s,r=c?J.ep(a,d):J.hh(a,d)
for(s=0;s<a;++s)B.b.h(r,s,b.$1(s))
return r},
hQ(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.ar(b,c,r)
return A.lg(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return A.nB(a,b,A.ar(b,c,a.length))
return A.nH(a,b,c)},
nH(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.d(A.R(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw A.d(A.R(c,b,a.length,o,o))
r=J.aw(a)
for(q=0;q<b;++q)if(!r.A())throw A.d(A.R(b,0,q,o,o))
p=[]
if(s)for(;r.A();)p.push(r.gE())
else for(q=b;q<c;++q){if(!r.A())throw A.d(A.R(c,b,q,o,o))
p.push(r.gE())}return A.lg(p)},
lq(a,b,c){var s=J.aw(b)
if(!s.A())return a
if(c.length===0){do a+=A.o(s.gE())
while(s.A())}else{a+=A.o(s.gE())
for(;s.A();)a=a+c+A.o(s.gE())}return a},
lp(){var s,r
if(A.b5($.mF()))return A.ao(new Error())
try{throw A.d("")}catch(r){s=A.ao(r)
return s}},
mX(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.D(A.bS("DateTime is outside valid range: "+a,null))
A.ck(!0,"isUtc",t.v)
return new A.bw(a,!0)},
kK(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mY(a){var s=Math.abs(a),r=a<0?"-":"+"
if(s>=1e5)return r+s
return r+"0"+s},
kL(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aO(a){if(a>=10)return""+a
return"0"+a},
cw(a){if(typeof a=="number"||A.dK(a)||a==null)return J.bR(a)
if(typeof a=="string")return JSON.stringify(a)
return A.mZ(a)},
fH(a){return new A.cr(a)},
bS(a,b){return new A.aE(!1,null,b,a)},
jF(a,b,c){return new A.aE(!0,a,b,c)},
fG(a,b,c){return a},
R(a,b,c,d,e){return new A.d9(b,c,!0,a,d,"Invalid value")},
ar(a,b,c){if(0>a||a>c)throw A.d(A.R(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.R(b,a,c,"end",null))
return b}return c},
aG(a,b){if(a<0)throw A.d(A.R(a,0,null,b,null))
return a},
hf(a,b,c,d,e){var s=A.u(e==null?J.aM(b):e)
return new A.eb(s,!0,a,c,"Index out of range")},
a7(a){return new A.fb(a)},
f9(a){return new A.f8(a)},
hN(a){return new A.c7(a)},
ba(a){return new A.dW(a)},
jJ(a,b,c){return new A.e4(a,b,c)},
kW(a,b,c){if(a<=0)return new A.aP(c.k("aP<0>"))
return new A.dq(a,b,c.k("dq<0>"))},
nx(a,b){var s,r=B.a.gH(a)
b=B.a.gH(b)
s=$.kx()
return A.lr(A.k2(A.k2(s,r),b))},
y(a){var s,r,q=$.kx()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aK)(a),++r)q=A.k2(q,J.co(a[r]))
return A.lr(q)},
jz(a){A.md(A.o(a))},
bw:function bw(a,b){this.a=a
this.b=b},
iD:function iD(){},
z:function z(){},
cr:function cr(a){this.a=a},
bi:function bi(){},
eK:function eK(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eb:function eb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fb:function fb(a){this.a=a},
f8:function f8(a){this.a=a},
c7:function c7(a){this.a=a},
dW:function dW(a){this.a=a},
eL:function eL(){},
dd:function dd(){},
dX:function dX(a){this.a=a},
iH:function iH(a){this.a=a},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
dq:function dq(a,b,c){this.a=a
this.b=b
this.$ti=c},
H:function H(){},
L:function L(){},
t:function t(){},
ft:function ft(){},
bI:function bI(a){this.a=a},
iF(a,b,c,d,e){var s=A.pw(new A.iG(c),t.W)
if(s!=null&&!0)J.mI(a,b,s,!1)
return new A.dp(a,b,s,!1,e.k("dp<0>"))},
pw(a,b){var s=$.C
if(s===B.m)return a
return s.iK(a,b)},
bu:function bu(){},
bX:function bX(){},
fX:function fX(){},
i:function i(){},
aQ:function aQ(){},
bZ:function bZ(){},
aX:function aX(){},
bd:function bd(){},
bl:function bl(){},
jG:function jG(a){this.$ti=a},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dp:function dp(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iG:function iG(a){this.a=a},
j4:function j4(){},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
iv:function iv(){},
iw:function iw(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b
this.c=!1},
q1(a,b){var s=new A.M($.C,b.k("M<0>")),r=new A.bN(s,b.k("bN<0>"))
a.then(A.bQ(new A.jA(r,b),1),A.bQ(new A.jB(r),1))
return s},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a},
hw:function hw(a){this.a=a},
cp(a){return new A.fF(a,null,null)},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
bA(a,b,c,d){var s,r
if(t.ak.b(a))s=A.I(a.buffer,a.byteOffset,a.byteLength)
else s=t.L.b(a)?a:A.l4(t.R.a(a),t.p)
r=new A.ed(s,d,d,b)
r.e=c==null?s.length:c
return r},
ee:function ee(){},
ed:function ed(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$},
hz(a,b){var s=b==null?32768:b
return new A.hy(a,new Uint8Array(s))},
hA:function hA(){},
hy:function hy(a,b){this.a=0
this.b=a
this.c=b},
jc:function jc(){},
kM(a,b,c,d){var s,r=b*2,q=a.length
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
s=c*2
if(!(s>=0&&s<q))return A.a(a,s)
s=a[s]
if(r>=s)if(r===s){if(!(b>=0&&b<573))return A.a(d,b)
r=d[b]
if(!(c>=0&&c<573))return A.a(d,c)
r=r<=d[c]}else r=!1
else r=!0
return r},
k9(){return new A.iU()},
oB(a,b,c){var s,r,q,p,o,n,m,l=new Uint16Array(16)
for(s=0,r=1;r<=15;++r){s=s+c[r-1]<<1>>>0
if(!(r<16))return A.a(l,r)
l[r]=s}for(q=a.length,p=0;p<=b;++p){o=p*2
n=o+1
if(!(n<q))return A.a(a,n)
m=a[n]
if(m===0)continue
if(!(m>=0&&m<16))return A.a(l,m)
n=l[m]
if(!(m<16))return A.a(l,m)
l[m]=n+1
n=A.oC(n,m)
if(!(o<q))return A.a(a,o)
a[o]=n}},
oC(a,b){var s,r=0
do{s=A.ac(a,1)
r=(r|a&1)<<1>>>0
if(--b,b>0){a=s
continue}else break}while(!0)
return A.ac(r,1)},
lG(a){var s
if(a<256){if(!(a>=0))return A.a(B.G,a)
s=B.G[a]}else{s=256+A.ac(a,7)
if(!(s<512))return A.a(B.G,s)
s=B.G[s]}return s},
kc(a,b,c,d,e){return new A.fr(a,b,c,d,e)},
ac(a,b){if(a>=0)return B.a.a7(a,b)
else return B.a.a7(a,b)+B.a.B(2,(~b>>>0)+65536&65535)},
fU:function fU(a,b,c,d,e,f,g,h){var _=this
_.b=_.a=0
_.c=a
_.d=b
_.e=null
_.x=_.w=_.r=_.f=$
_.y=2
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=$
_.k2=0
_.p4=_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=$
_.R8=c
_.RG=d
_.rx=e
_.ry=f
_.to=g
_.x2=_.x1=$
_.xr=h
_.ai=_.ab=_.aI=_.aV=_.aH=_.a9=_.ar=_.ah=_.y2=_.y1=$},
at:function at(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iU:function iU(){this.c=this.b=this.a=$},
fr:function fr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c1(a){var s=new A.h6()
s.fg(a)
return s},
h6:function h6(){this.a=$
this.b=0
this.c=2147483647},
kT(a){var s=A.c1(B.af),r=A.c1(B.ar)
r=new A.ec(A.bA(a,0,null,0),A.hz(0,null),s,r)
r.b=!0
r.dJ()
return r},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=!1
_.c=b
_.e=_.d=0
_.r=c
_.w=d},
it:function it(){},
is:function is(){},
iu:function iu(){},
q_(){return A.pC(new A.jw(),null)},
jw:function jw(){},
c9:function c9(){this.a=$},
hT:function hT(a){this.a=a},
bb:function bb(a){this.a=a},
by:function by(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
aR:function aR(a){this.a=a},
f(a,b,c){return new A.e_(a,b,c)},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
n0(a,b){var s,r=J.kX(b,t.G)
for(s=0;s<b;++s)r[s]=new A.c6(a.j(),a.j())
return new A.cC(r)},
n1(a,b){var s,r,q,p,o=J.kX(b,t.G)
for(s=0;s<b;++s){r=a.j()
q=$.A()
q[0]=r
r=$.Q()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.j()
if(0>=r.length)return A.a(r,0)
o[s]=new A.c6(p,r[0])}return new A.cF(o)},
a0:function a0(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=a
this.b=b},
T:function T(){},
cz:function cz(a){this.a=a},
cy:function cy(a){this.a=a},
cH:function cH(a){this.a=a},
cB:function cB(a){this.a=a},
cC:function cC(a){this.a=a},
cD:function cD(a){this.a=a},
cG:function cG(a){this.a=a},
cE:function cE(a){this.a=a},
cF:function cF(a){this.a=a},
cI:function cI(a){this.a=a},
cA:function cA(a){this.a=a},
cJ:function cJ(a){this.a=a},
kE(a){var s,r,q=new A.fN()
if(!A.fO(a))A.D(A.h("Not a bitmap file."))
a.d+=2
s=a.j()
r=$.A()
r[0]=s
s=$.Q()
if(0>=s.length)return A.a(s,0)
q.a=s[0]
a.d+=4
r[0]=a.j()
if(0>=s.length)return A.a(s,0)
q.b=s[0]
return q},
fO(a){if(a.c-a.d<2)return!1
return A.j(a,null,0).l()===19778},
mN(a,b){var s,r,q,p,o,n,m,l=b==null?A.kE(a):b,k=a.j(),j=a.j(),i=$.A()
i[0]=j
j=$.Q()
if(0>=j.length)return A.a(j,0)
s=j[0]
i[0]=a.j()
if(0>=j.length)return A.a(j,0)
r=j[0]
q=a.l()
p=a.l()
o=a.j()
n=A.cZ([0,B.P,3,B.O],t.p,t.Q).n(0,o)
if(n==null)A.D(A.h("Bitmap compression "+o+" is not supported yet."))
o=a.j()
i[0]=a.j()
if(0>=j.length)return A.a(j,0)
m=j[0]
i[0]=a.j()
if(0>=j.length)return A.a(j,0)
j=new A.b8(l,r,s,k,q,p,n,o,m,j[0],a.j(),a.j())
j.d8(a,b)
return j},
ct:function ct(a,b){this.a=a
this.b=b},
fN:function fN(){this.b=this.a=$},
b8:function b8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ax=l
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.b=_.a=0},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(){this.a=$
this.b=null},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(){this.a=$
this.b=null},
fS:function fS(){},
fT:function fT(){},
fY:function fY(){},
e0:function e0(){},
cQ:function cQ(a,b){var _=this
_.r=a
_.b=_.a=0
_.c=b},
e1:function e1(){var _=this
_.a=null
_.f=_.e=_.c=_.b=$},
kN(a,b,c,d){var s,r
switch(a){case 1:return new A.ej(b)
case 2:return new A.cS(d==null?1:d,b)
case 3:return new A.cS(d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.eh(c,s,b)
r.fh(b,c,s)
return r
case 5:return new A.ei(c,d==null?16:d,b)
case 6:return new A.cQ(d==null?32:d,b)
case 7:return new A.cQ(d==null?32:d,b)
default:throw A.d(A.h("Invalid compression type: "+a))}},
aS:function aS(){},
eg:function eg(){},
n5(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.d(A.h("Incomplete huffman data"))
return}s=a.d
r=a.j()
q=a.j()
a.d+=4
p=a.j()
if(r<65537)o=q>=65537
else o=!0
if(o)throw A.d(A.h("Invalid huffman table size"))
a.d+=4
n=A.W(65537,0,!1,t.p)
m=J.ag(16384,t.gV)
for(l=0;l<16384;++l)m[l]=new A.e2()
A.n6(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.d(A.h("Error in header for Huffman-encoded data (invalid number of bits)."))
A.n2(n,r,q,m)
A.n4(n,m,a,p,q,d,c)},
n4(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.b([0,0],t.t),h=c.d+B.a.I(d+7,8)
for(s=b.length,r=0;c.d<h;){A.jH(i,c)
for(;q=i[1],q>=14;){p=B.a.a7(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.b.h(i,1,q-p)
r=A.jI(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.d(A.h(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
while(!0){q=i[1]
if(!(q<m&&c.d<h))break
A.jH(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.a7(i[0],q)&B.a.B(1,m)-1)>>>0){B.b.h(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.jI(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.d(A.h(j))}}}k=8-d&7
B.b.h(i,0,B.a.i(i[0],k))
B.b.h(i,1,i[1]-k)
for(;q=i[1],q>0;){p=B.a.D(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.b.h(i,1,q-p)
r=A.jI(o.b,e,i,c,g,r,f)}else throw A.d(A.h(j))}if(r!==f)throw A.d(A.h("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
jI(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.jH(c,d)
B.b.h(c,1,c[1]-8)
s=B.a.a7(c[0],c[1])&255
if(f+s>g)throw A.d(A.h(m))
r=f-1
q=e.length
if(!(r>=0&&r<q))return A.a(e,r)
p=e[r]
for(;o=s-1,s>0;s=o,f=n){n=f+1
if(!(f<q))return A.a(e,f)
e[f]=p}}else{if(f<g){n=f+1
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.d(A.h(m))
f=n}return f},
n2(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.L(o,n)!==0)throw A.d(A.h(i))
if(n>14){p=B.a.a3(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.d(A.h(i))
p=++m.b
l=m.c
if(l!=null){m.sev(A.W(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.b.h(p,k,l[k])}}else m.sev(A.b([0],r))
p=m.c
p.toString
B.b.h(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.D(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.D(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.d(A.h(i))
m.a=n
m.b=b}}}},
n6(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.b([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.d(A.h(n))
r=A.kO(6,k,a)
B.b.h(e,c,r)
if(r===63){if(a.d-l>b)throw A.d(A.h(n))
q=A.kO(8,k,a)+6
if(c+q>s)throw A.d(A.h(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.b.h(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.d(A.h(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.b.h(e,c,0)}--c}}A.n3(e)},
n3(a){var s,r,q,p,o,n=A.W(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.b.h(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.b.h(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.b.h(n,o,r+1)
B.b.h(a,s,(o|r<<6)>>>0)}}},
jH(a,b){B.b.h(a,0,((a[0]<<8|b.u())&-1)>>>0)
B.b.h(a,1,(a[1]+8&-1)>>>0)},
kO(a,b,c){var s,r,q
for(;s=b[1],s<a;){s=b[0]
r=c.a
q=c.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
B.b.h(b,0,((s<<8|r[q])&-1)>>>0)
B.b.h(b,1,(b[1]+8&-1)>>>0)}B.b.h(b,1,s-a)
return(B.a.a7(b[0],b[1])&B.a.B(1,a)-1)>>>0},
e2:function e2(){this.b=this.a=0
this.c=null},
n7(a){var s=A.m(a,!1,null,0)
if(s.j()!==20000630)return!1
if(s.u()!==2)return!1
if((s.am()&4294967289)>>>0!==0)return!1
return!0},
h_:function h_(a){var _=this
_.d=a
_.e=null
_.f=$
_.b=_.a=0},
kU(a,b){var s=new A.cR(new A.e7(A.F(t.dk,t.i)),A.b([],t.g9),A.F(t.N,t.aX),a)
s.fd(a,b,{})
return s},
e3:function e3(){},
h0:function h0(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=$
_.r=_.f=null
_.Q=$
_.as=0
_.at=null
_.ax=$
_.CW=_.ch=_.ay=null
_.cx=d
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=null
_.id=$
_.k1=null},
eh:function eh(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
dA:function dA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
ei:function ei(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
ej:function ej(a){var _=this
_.r=null
_.b=_.a=0
_.c=a},
cS:function cS(a,b){var _=this
_.w=a
_.x=null
_.b=_.a=0
_.c=b},
fZ:function fZ(){this.a=null},
kP(a){var s=new Uint8Array(a*3)
return new A.e5(A.nf(a),a,null,s)},
nf(a){var s
for(s=1;s<=8;++s)if(B.a.B(1,s)>=a)return s
return 0},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cO:function cO(){},
ek:function ek(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.x=$},
e6:function e6(a){var _=this
_.e=null
_.r=a
_.b=_.a=0},
h3:function h3(){var _=this
_.d=_.b=_.a=null
_.f=_.e=$
_.r=null
_.w=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=0},
kS(a){var s,r
if(a.l()!==0)return null
s=a.l()
if(!B.b.aw(A.b([1,2],t.t),s))return null
if(s===2)return null
r=a.l()
return new A.ha(r,A.kW(r,new A.hb(a),t.gx).aN(0))},
h9:function h9(){this.b=this.a=null},
ha:function ha(a,b){var _=this
_.e=a
_.f=b
_.b=_.a=0},
hb:function hb(a){this.a=a},
c2:function c2(a,b){this.d=a
this.e=b},
e9:function e9(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ax=l
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.b=_.a=0},
dV:function dV(a,b,c){this.e=a
this.f=b
this.r=c},
hj:function hj(){this.d=null},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
l0(){var s=t.fk
return new A.hk(new A.aR(A.F(t.N,t.o)),A.W(4,null,!1,t.aS),A.b([],t.f8),A.b([],s),A.b([],s),A.b([],t.eB))},
hk:function hk(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=a
_.w=b
_.x=c
_.y=d
_.z=e
_.Q=f},
hl:function hl(a,b){this.a=a
this.b=b},
cf:function cf(a){this.a=a
this.b=0},
et:function et(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
hm:function hm(){this.r=this.f=$},
eu:function eu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
es:function es(){},
d5:function d5(){},
el:function el(a){this.c=this.b=null
this.y=a},
hD:function hD(){},
em:function em(a,b,c){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.e=_.d=null
_.at=""
_.ay=null
_.ch=a
_.cy=b
_.db=c
_.b=_.a=0},
eP:function eP(){var _=this
_.a=null
_.c=_.b=0
_.d=$
_.e=0},
hB:function hB(){},
hC:function hC(a){var _=this
_.a=null
_.d=a
_.f=_.e=$
_.r=null
_.z=_.y=_.x=_.w=$
_.as=0
_.at=!1
_.ax=null},
eR:function eR(){this.a=null},
eS:function eS(){this.a=null},
aF:function aF(){},
eU:function eU(){this.a=null},
eV:function eV(){this.a=null},
eX:function eX(){this.a=null},
eY:function eY(){this.a=null},
d8:function d8(a){this.b=a},
eW:function eW(){},
hF:function hF(){var _=this
_.w=_.r=_.f=_.e=$},
bH:function bH(a){this.a=a
this.c=$},
lh(a){var s=new A.hH(A.F(t.p,t.fh))
s.fj(a)
return s},
jX(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.c.m(B.c.p((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
hI(a,b){if(b===0)return 0
return B.c.m(B.a.p(B.c.m(255*(1-(1-a/255)/(b/255))),0,255))},
nC(a,b){return B.c.m(B.a.p(a+b-255,0,255))},
hJ(a,b){if(b===255)return 255
return B.c.m(B.c.p(a/255/(1-b/255)*255,0,255))},
jY(a,b){var s=a/255,r=b/255,q=1-r
return B.c.aM(255*(q*r*s+r*(1-q*(1-s))))},
jV(a,b){var s=b/255,r=a/255
if(r<0.5)return B.c.aM(510*s*r)
else return B.c.aM(255*(1-2*(1-s)*(1-r)))},
jZ(a,b){if(b<128)return A.hI(a,2*b)
else return A.hJ(a,2*(b-128))},
jW(a,b){var s
if(b<128)return A.nC(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
li(d1,d2,d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7="data",c8=A.a1(d3,d4,B.k,null,null),c9=c8.aY(),d0=A.F(t.p,t.fW)
for(s=d5.length,r=0;q=d5.length,r<q;d5.length===s||(0,A.aK)(d5),++r){p=d5[r]
d0.h(0,p.a,p)}if(d2===8)o=1
else o=d2===16?2:-1
if(o===-1)throw A.d(A.h("PSD: unsupported bit depth: "+A.o(d2)))
n=d0.n(0,0)
m=d0.n(0,1)
l=d0.n(0,2)
k=d0.n(0,-1)
for(s=c9.length,j=q>=5,i=o===1,h=q===4,g=q>=2,q=q>=4,f=0,e=0,d=0;f<d4;++f)for(c=0;c<d3;++c,d+=o)switch(d1){case 3:b=e+1
a=n.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
a3=b+1
a=m.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=a
a4=a3+1
a=l.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}if(!(a3>=0&&a3<s))return A.a(c9,a3)
c9[a3]=a
a3=a4+1
if(q){a=k.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}}else a=255
if(!(a4>=0&&a4<s))return A.a(c9,a4)
c9[a4]=a
a5=c9[e]
a6=c9[b]
a=e+2
if(!(a<s))return A.a(c9,a)
a7=c9[a]
a0=e+3
if(!(a0<s))return A.a(c9,a0)
a8=c9[a0]
if(a8!==0){c9[e]=B.a.X((a5+a8-255)*255,a8)
c9[b]=B.a.X((a6+a8-255)*255,a8)
c9[a]=B.a.X((a7+a8-255)*255,a8)}e=a3
break
case 9:a=n.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}a0=m.c
a0===$&&A.c(c7)
a1=a0.length
if(i){if(!(d>=0&&d<a1))return A.a(a0,d)
a0=a0[d]}else{if(!(d>=0&&d<a1))return A.a(a0,d)
a2=a0[d]
a9=d+1
if(!(a9<a1))return A.a(a0,a9)
a9=(a2<<8|a0[a9])>>>8
a0=a9}a1=l.c
a1===$&&A.c(c7)
a2=a1.length
if(i){if(!(d>=0&&d<a2))return A.a(a1,d)
a1=a1[d]}else{if(!(d>=0&&d<a2))return A.a(a1,d)
a9=a1[d]
b0=d+1
if(!(b0<a2))return A.a(a1,b0)
b0=(a9<<8|a1[b0])>>>8
a1=b0}if(q){a2=k.c
a2===$&&A.c(c7)
a9=a2.length
if(i){if(!(d>=0&&d<a9))return A.a(a2,d)
a2=a2[d]
b1=a2}else{if(!(d>=0&&d<a9))return A.a(a2,d)
b0=a2[d]
b2=d+1
if(!(b2<a9))return A.a(a2,b2)
b2=(b0<<8|a2[b2])>>>8
b1=b2}}else b1=255
b3=((a*100>>>8)+16)/116
b4=(a0-128)/500+b3
b5=b3-(a1-128)/200
b6=Math.pow(b3,3)
b3=b6>0.008856?b6:(b3-0.13793103448275862)/7.787
b7=Math.pow(b4,3)
b4=b7>0.008856?b7:(b4-0.13793103448275862)/7.787
b8=Math.pow(b5,3)
b5=b8>0.008856?b8:(b5-0.13793103448275862)/7.787
b4=b4*95.047/100
b3=b3*100/100
b5=b5*108.883/100
b9=b4*3.2406+b3*-1.5372+b5*-0.4986
c0=b4*-0.9689+b3*1.8758+b5*0.0415
c1=b4*0.0557+b3*-0.204+b5*1.057
b9=b9>0.0031308?1.055*Math.pow(b9,0.4166666666666667)-0.055:12.92*b9
c0=c0>0.0031308?1.055*Math.pow(c0,0.4166666666666667)-0.055:12.92*c0
c1=c1>0.0031308?1.055*Math.pow(c1,0.4166666666666667)-0.055:12.92*c1
c2=[B.c.m(B.c.p(b9*255,0,255)),B.c.m(B.c.p(c0*255,0,255)),B.c.m(B.c.p(c1*255,0,255))]
b=e+1
a=c2[0]
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
e=b+1
a=c2[1]
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=a
b=e+1
a=c2[2]
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
e=b+1
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=b1
break
case 1:a=n.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
c3=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
c3=(a1<<8|a[a2])>>>8}if(g){a=k.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]
b1=a}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
b1=a2}}else b1=255
b=e+1
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=c3
e=b+1
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=c3
b=e+1
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=c3
e=b+1
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=b1
break
case 4:a=n.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
c4=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
c4=(a1<<8|a[a2])>>>8}a=m.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
c5=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
c5=(a1<<8|a[a2])>>>8}a=l.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
b3=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
b3=(a1<<8|a[a2])>>>8}a=d0.n(0,h?-1:3).c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
c6=a[d]}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
c6=(a1<<8|a[a2])>>>8}if(j){a=k.c
a===$&&A.c(c7)
a0=a.length
if(i){if(!(d>=0&&d<a0))return A.a(a,d)
a=a[d]
b1=a}else{if(!(d>=0&&d<a0))return A.a(a,d)
a1=a[d]
a2=d+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
b1=a2}}else b1=255
a=1-(255-c6)/255
c2=[B.c.aM(255*(1-(255-c4)/255)*a),B.c.aM(255*(1-(255-c5)/255)*a),B.c.aM(255*(1-(255-b3)/255)*a)]
b=e+1
a=c2[0]
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
e=b+1
a=c2[1]
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=a
b=e+1
a=c2[2]
if(!(e>=0&&e<s))return A.a(c9,e)
c9[e]=a
e=b+1
if(!(b>=0&&b<s))return A.a(c9,b)
c9[b]=b1
break
default:throw A.d(A.h("Unhandled color mode: "+A.o(d1)))}return c8},
hH:function hH(a){var _=this
_.e=_.d=null
_.f=$
_.w=_.r=null
_.y=_.x=$
_.z=null
_.Q=a
_.ch=_.ay=_.ax=_.at=$
_.b=_.a=0},
eT:function eT(){},
d7:function d7(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=$
_.cy=c},
nD(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.j()
if(s>=12){if(b.O(4)!=="8BIM")A.D(A.h("Invalid key in layer additional data"))
b.O(4)}if(s>=16)b.j()
return new A.eW()
default:return new A.d8(b)}},
c5:function c5(){},
hG:function hG(){this.a=null},
hS:function hS(){var _=this
_.e=_.d=null
_.b=_.a=0},
hR:function hR(){this.a=null
this.b=$},
hU:function hU(a){this.a=a
this.c=this.b=0},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d},
k3(a,b,c){var s=new A.hW(b,a),r=t.E
s.scW(A.W(b,null,!1,r))
s.scV(A.W(b,null,!1,r))
return s},
hW:function hW(a,b){var _=this
_.a=a
_.c=b
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
f6:function f6(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.w=_.r=_.f=_.e=1
_.x=-1
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.fy=null
_.k1=_.id=_.go=$
_.k3=_.k2=null},
hX:function hX(a){var _=this
_.e=null
_.r=a
_.b=_.a=0},
l5(){return new A.ht(new Uint8Array(4096))},
ht:function ht(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
hV:function hV(){this.a=null
this.c=$},
k4(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.W(8,null,!1,t.eW),n=A.W(4,null,!1,t.dP)
return new A.i2(a,b,new A.i8(),new A.ic(),new A.i4(s,r),new A.ie(q,p),o,n,new Uint8Array(4))},
lA(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
i2:function i2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.w=e
_.x=f
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=g
_.dy=h
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=i
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.ah=$
_.ar=null
_.aH=_.a9=$
_.aV=null
_.aI=$},
ig:function ig(){},
lx(a){var s=new A.dg(a)
s.b=254
s.c=0
s.d=-8
return s},
dg:function dg(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
v(a,b,c){return B.a.V(B.a.i(a+2*b+c+2,2),32)},
o6(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-33,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-32
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-31
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
k=A.v(k,s,r)
q=l+-30
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
s=A.v(s,r,q)
p=l+-29
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
r=A.v(r,q,p)
l+=-28
if(!(l>=0&&l<j))return A.a(m,l)
o=A.b([k,s,r,A.v(q,p,m[l])],t.t)
for(n=0;n<4;++n)a.aW(n*32,4,o)},
nY(a){var s,r,q,p,o=a.a,n=a.d,m=n+-33,l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
s=n+-1
if(!(s>=0&&s<l))return A.a(o,s)
s=o[s]
r=n+31
if(!(r>=0&&r<l))return A.a(o,r)
r=o[r]
q=n+63
if(!(q>=0&&q<l))return A.a(o,q)
q=o[q]
n+=95
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
p=A.j(a,null,0)
o=p.bN()
m=A.v(m,s,r)
if(0>=o.length)return A.a(o,0)
o[0]=16843009*m
p.d+=32
m=p.bN()
s=A.v(s,r,q)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*s
p.d+=32
s=p.bN()
r=A.v(r,q,n)
if(0>=s.length)return A.a(s,0)
s[0]=16843009*r
p.d+=32
r=p.bN()
n=A.v(q,n,n)
if(0>=r.length)return A.a(r,0)
r[0]=16843009*n},
nR(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<4;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}p=B.a.i(p,3)
for(o=0;o<4;++o){s=a.a
r=a.d+o*32
J.aL(s,r,r+4,p)}},
k5(a,b){var s,r,q,p,o,n,m,l=a.a,k=a.d+-33
if(!(k>=0&&k<l.length))return A.a(l,k)
s=255-l[k]
for(r=0,q=0;q<b;++q){l=a.a
k=a.d+(r-1)
if(!(k>=0&&k<l.length))return A.a(l,k)
p=s+l[k]
for(o=0;o<b;++o){l=$.ad()
k=a.a
n=a.d
m=n+(-32+o)
if(!(m>=0&&m<k.length))return A.a(k,m)
m=p+k[m]
l.toString
if(!(m>=0&&m<766))return A.a(l,m)
J.n(k,n+(r+o),l[m])}r+=32}},
o3(a){A.k5(a,4)},
o4(a){A.k5(a,8)},
o2(a){A.k5(a,16)},
o1(a){var s,r,q,p,o,n,m,l=a.a,k=a.d,j=k+-1,i=l.length
if(!(j>=0&&j<i))return A.a(l,j)
j=l[j]
s=k+31
if(!(s>=0&&s<i))return A.a(l,s)
s=l[s]
r=k+63
if(!(r>=0&&r<i))return A.a(l,r)
r=l[r]
q=k+95
if(!(q>=0&&q<i))return A.a(l,q)
q=l[q]
p=k+-33
if(!(p>=0&&p<i))return A.a(l,p)
p=l[p]
o=k+-32
if(!(o>=0&&o<i))return A.a(l,o)
o=l[o]
n=k+-31
if(!(n>=0&&n<i))return A.a(l,n)
n=l[n]
m=k+-30
if(!(m>=0&&m<i))return A.a(l,m)
m=l[m]
k+=-29
if(!(k>=0&&k<i))return A.a(l,k)
k=l[k]
a.h(0,96,A.v(s,r,q))
r=A.v(j,s,r)
a.h(0,97,r)
a.h(0,64,r)
s=A.v(p,j,s)
a.h(0,98,s)
a.h(0,65,s)
a.h(0,32,s)
j=A.v(o,p,j)
a.h(0,99,j)
a.h(0,66,j)
a.h(0,33,j)
a.h(0,0,j)
p=A.v(n,o,p)
a.h(0,67,p)
a.h(0,34,p)
a.h(0,1,p)
o=A.v(m,n,o)
a.h(0,35,o)
a.h(0,2,o)
a.h(0,3,A.v(k,m,n))},
o0(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-30
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-29
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-28
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-27
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-26
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-25
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
a.h(0,0,A.v(k,s,r))
s=A.v(s,r,q)
a.h(0,32,s)
a.h(0,1,s)
r=A.v(r,q,p)
a.h(0,64,r)
a.h(0,33,r)
a.h(0,2,r)
q=A.v(q,p,o)
a.h(0,96,q)
a.h(0,65,q)
a.h(0,34,q)
a.h(0,3,q)
p=A.v(p,o,n)
a.h(0,97,p)
a.h(0,66,p)
a.h(0,35,p)
o=A.v(o,n,l)
a.h(0,98,o)
a.h(0,67,o)
a.h(0,99,A.v(n,l,l))},
o9(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+63
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-33
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-32
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-31
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-30
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-29
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
m=B.a.V(B.a.i(q+p+1,1),32)
a.h(0,65,m)
a.h(0,0,m)
m=B.a.V(B.a.i(p+o+1,1),32)
a.h(0,66,m)
a.h(0,1,m)
m=B.a.V(B.a.i(o+n+1,1),32)
a.h(0,67,m)
a.h(0,2,m)
a.h(0,3,B.a.V(B.a.i(n+l+1,1),32))
a.h(0,96,A.v(r,s,k))
a.h(0,64,A.v(s,k,q))
k=A.v(k,q,p)
a.h(0,97,k)
a.h(0,32,k)
q=A.v(q,p,o)
a.h(0,98,q)
a.h(0,33,q)
p=A.v(p,o,n)
a.h(0,99,p)
a.h(0,34,p)
a.h(0,35,A.v(o,n,l))},
o8(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-30
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-29
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-28
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-27
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-26
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-25
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
a.h(0,0,B.a.V(B.a.i(k+s+1,1),32))
m=B.a.V(B.a.i(s+r+1,1),32)
a.h(0,64,m)
a.h(0,1,m)
m=B.a.V(B.a.i(r+q+1,1),32)
a.h(0,65,m)
a.h(0,2,m)
m=B.a.V(B.a.i(q+p+1,1),32)
a.h(0,66,m)
a.h(0,3,m)
a.h(0,32,A.v(k,s,r))
s=A.v(s,r,q)
a.h(0,96,s)
a.h(0,33,s)
r=A.v(r,q,p)
a.h(0,97,r)
a.h(0,34,r)
q=A.v(q,p,o)
a.h(0,98,q)
a.h(0,35,q)
a.h(0,67,A.v(p,o,n))
a.h(0,99,A.v(o,n,l))},
o_(a){var s,r,q=a.a,p=a.d,o=p+-1,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+31
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
r=p+63
if(!(r>=0&&r<n))return A.a(q,r)
r=q[r]
p+=95
if(!(p>=0&&p<n))return A.a(q,p)
p=q[p]
a.h(0,0,B.a.V(B.a.i(o+s+1,1),32))
q=B.a.V(B.a.i(s+r+1,1),32)
a.h(0,32,q)
a.h(0,2,q)
q=B.a.V(B.a.i(r+p+1,1),32)
a.h(0,64,q)
a.h(0,34,q)
a.h(0,1,A.v(o,s,r))
s=A.v(s,r,p)
a.h(0,33,s)
a.h(0,3,s)
r=A.v(r,p,p)
a.h(0,65,r)
a.h(0,35,r)
a.h(0,99,p)
a.h(0,98,p)
a.h(0,97,p)
a.h(0,96,p)
a.h(0,66,p)
a.h(0,67,p)},
nW(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+63
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+95
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-33
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-32
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-31
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-30
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
m=B.a.V(B.a.i(k+p+1,1),32)
a.h(0,34,m)
a.h(0,0,m)
m=B.a.V(B.a.i(s+k+1,1),32)
a.h(0,66,m)
a.h(0,32,m)
m=B.a.V(B.a.i(r+s+1,1),32)
a.h(0,98,m)
a.h(0,64,m)
a.h(0,96,B.a.V(B.a.i(q+r+1,1),32))
a.h(0,3,A.v(o,n,l))
a.h(0,2,A.v(p,o,n))
o=A.v(k,p,o)
a.h(0,35,o)
a.h(0,1,o)
p=A.v(s,k,p)
a.h(0,67,p)
a.h(0,33,p)
k=A.v(r,s,k)
a.h(0,99,k)
a.h(0,65,k)
a.h(0,97,A.v(q,r,s))},
o5(a){var s
for(s=0;s<16;++s)a.al(s*32,16,a,-32)},
nX(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.aL(q,p,p+16,q[o])
s+=32}},
i5(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.aL(r,q,q+16,a)}},
nN(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=16,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(o-32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.i5(B.a.i(p,5),a)},
nP(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.i5(B.a.i(p,4),a)},
nO(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.i5(B.a.i(p,4),a)},
nQ(a){A.i5(128,a)},
o7(a){var s
for(s=0;s<8;++s)a.al(s*32,8,a,-32)},
nZ(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.aL(q,p,p+8,q[o])
s+=32}},
i6(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.aL(r,q,q+8,a)}},
nS(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.i6(B.a.i(p,4),a)},
nT(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.i6(B.a.i(p,3),a)},
nU(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.i6(B.a.i(p,3),a)},
nV(a){A.i6(128,a)},
bk(a,b,c,d,e){var s=b+c+d*32,r=a.a,q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]+B.a.i(e,3)
if((q&-256)>>>0===0)r=q
else r=q<0?0:255
a.h(0,s,r)},
i7(a,b,c,d,e){A.bk(a,0,0,b,c+d)
A.bk(a,0,1,b,c+e)
A.bk(a,0,2,b,c-e)
A.bk(a,0,3,b,c-d)},
oa(){var s,r,q
if(!$.ly){for(s=-255;s<=255;++s){r=$.fC()
q=255+s
r[q]=s<0?-s:s
$.jC()[q]=B.a.i(r[q],1)}for(s=-1020;s<=1020;++s){r=$.jD()
if(s<-128)q=-128
else q=s>127?127:s
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.fD()
if(s<-16)q=-16
else q=s>15?15:s
r[112+s]=q}for(s=-255;s<=510;++s){r=$.ad()
if(s<0)q=0
else q=s>255?255:s
r[255+s]=q}$.ly=!0}},
i3:function i3(){},
nM(){var s,r=J.ag(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.df(r)},
op(){var s,r,q,p,o=new Uint8Array(3),n=J.ag(4,t.c7)
for(s=t.bD,r=0;r<4;++r){q=J.ag(8,s)
for(p=0;p<8;++p)q[p]=A.nM()
n[r]=q}B.i.aj(o,0,3,255)
return new A.id(o,n)},
i8:function i8(){this.d=$},
ic:function ic(){},
ie:function ie(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
df:function df(a){this.a=a},
id:function id(a,b){this.a=a
this.b=b},
i4:function i4(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
b1:function b1(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
di:function di(){this.b=this.a=0},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
k6(a,b){var s,r=A.b([],t.e5),q=A.b([],t.gk),p=new Uint32Array(2),o=new A.fd(a,p)
p=o.d=A.I(p.buffer,0,null)
s=a.u()
if(0>=p.length)return A.a(p,0)
p[0]=s
s=a.u()
if(1>=p.length)return A.a(p,1)
p[1]=s
s=a.u()
if(2>=p.length)return A.a(p,2)
p[2]=s
s=a.u()
if(3>=p.length)return A.a(p,3)
p[3]=s
s=a.u()
if(4>=p.length)return A.a(p,4)
p[4]=s
s=a.u()
if(5>=p.length)return A.a(p,5)
p[5]=s
s=a.u()
if(6>=p.length)return A.a(p,6)
p[6]=s
s=a.u()
if(7>=p.length)return A.a(p,7)
p[7]=s
return new A.dh(o,b,r,q)},
bL(a,b){return B.a.i(a+B.a.B(1,b)-1,b)},
dh:function dh(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=c
_.ax=d
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
en:function en(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=c
_.ax=d
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
fd:function fd(a,b){var _=this
_.a=0
_.b=a
_.c=b
_.d=$},
i9:function i9(a,b){this.a=a
this.b=b},
ia(a,b,c){var s
if(!(b>=0&&b<a.length))return A.a(a,b)
s=a[b]
a[b]=(((s&4278255360)>>>0)+((c&4278255360)>>>0)&4278255360|(s&16711935)+(c&16711935)&16711935)>>>0},
b2(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
bK(a){if(a<0)return 0
if(a>255)return 255
return a},
ib(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
ob(a,b,c){return 4278190080},
oc(a,b,c){return b},
oh(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return a[c]},
oi(a,b,c){var s=c+1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
oj(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
ok(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.b2(A.b2(b,a[r]),s)},
ol(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return A.b2(b,a[s])},
om(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return A.b2(b,a[c])},
on(a,b,c){var s=c-1,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
if(!(c>=0&&c<r))return A.a(a,c)
return A.b2(s,a[c])},
oo(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.b2(s,a[r])},
od(a,b,c){var s,r,q=c-1,p=a.length
if(!(q>=0&&q<p))return A.a(a,q)
q=a[q]
if(!(c>=0&&c<p))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<p))return A.a(a,r)
r=a[r]
return A.b2(A.b2(b,q),A.b2(s,r))},
oe(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return A.ib(s>>>24,b>>>24,r>>>24)+A.ib(s>>>16&255,b>>>16&255,r>>>16&255)+A.ib(s>>>8&255,b>>>8&255,r>>>8&255)+A.ib(s&255,b&255,r&255)<=0?s:b},
of(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return(A.bK((b>>>24)+(s>>>24)-(r>>>24))<<24|A.bK((b>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.bK((b>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.bK((b&255)+(s&255)-(r&255)))>>>0},
og(a,b,c){var s,r,q,p,o,n=a.length
if(!(c>=0&&c<n))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<n))return A.a(a,r)
r=a[r]
q=A.b2(b,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.bK(s+B.a.I(s-(r>>>24),2))<<24|A.bK(n+B.a.I(n-(r>>>16&255),2))<<16|A.bK(p+B.a.I(p-(r>>>8&255),2))<<8|A.bK(o+B.a.I(o-(r&255),2)))>>>0},
fe:function fe(){var _=this
_.c=_.b=_.a=0
_.d=null
_.e=0},
ih:function ih(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
dl:function dl(){},
eo:function eo(){this.r=1
this.x=this.w=$},
kR(){var s=new Uint8Array(128),r=new Int16Array(128)
s=new A.e8(s,r,new Int16Array(128))
s.cH(0)
return s},
ng(){var s,r=J.ag(5,t.bs)
for(s=0;s<5;++s)r[s]=A.kR()
return new A.c0(r)},
e8:function e8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=_.e=0},
c0:function c0(a){this.a=a},
dm:function dm(a){var _=this
_.e=_.d=!1
_.f=0
_.z=a
_.as=_.Q=0
_.at=null
_.b=_.a=_.ch=_.ay=0},
cT:function cT(a){var _=this
_.e=_.d=!1
_.f=0
_.z=a
_.as=_.Q=0
_.at=null
_.b=_.a=_.ch=_.ay=0},
ii:function ii(){this.b=this.a=null},
e7:function e7(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
kQ(a,b,c){switch(b){case 1:if(c===8)return new Int8Array(a)
else if(c===16)return new Int16Array(a)
else if(c===32)return new Int32Array(a)
break
case 0:if(c===8)return new Uint8Array(a)
else if(c===16)return new Uint16Array(a)
else if(c===32)return new Uint32Array(a)
break
case 3:if(c===16)return new Uint16Array(a)
else if(c===32)return new Float32Array(a)
else if(c===64)return new Float64Array(a)
break}throw A.d(A.f9(null))},
h5(a,b,c,d,e){return new A.cP(a,b,c,d,e,A.kQ(b*c,d,e))},
cP:function cP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pR(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new A.jq(new A.jr()),a=A.a1(a1.gjO(a1),a1.gb6(a1),B.k,null,null),a0=a.aY()
if(!(a1.b!=null||a1.c!=null||a1.d!=null))throw A.d(A.h("Only RGB[A] images are currently supported."))
s=Math.pow(2,B.c.p(a2+2.47393,-20,20))
r=a0.length
q=a1.a
p=0
o=0
while(!0){if(q.a===0)n=0
else{n=q.gaC()
n=n.b.$1(J.dP(n.a)).c}if(!(p<n))break
m=0
while(!0){if(q.a===0)n=0
else{n=q.gaC()
n=n.b.$1(J.dP(n.a)).b}if(!(m<n))break
n=a1.b
if(n!=null)if(n.d===3){n=n.bQ(m,p)
l=n}else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.u(n[k])
l=n}else l=0
if(q.a===1)j=l
else{n=a1.c
if(n!=null){if(n.d===3)n=n.bQ(m,p)
else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.u(n[k])}j=n}else j=0}if(q.a===1)i=l
else{n=a1.d
if(n!=null){if(n.d===3)n=n.bQ(m,p)
else{k=p*n.b+m
n=n.f
if(!(k>=0&&k<n.length))return A.a(n,k)
n=A.u(n[k])}i=n}else i=0}if(l==1/0||l==-1/0||isNaN(l))l=0
if(j==1/0||j==-1/0||isNaN(j))j=0
if(i==1/0||i==-1/0||isNaN(i))i=0
h=b.$2(l,s)
g=b.$2(j,s)
f=b.$2(i,s)
e=Math.max(h,Math.max(g,f))
if(e>255){h=255*(h/e)
g=255*(g/e)
f=255*(f/e)}d=o+1
n=B.c.m(B.c.p(h,0,255))
if(!(o>=0&&o<r))return A.a(a0,o)
a0[o]=n
o=d+1
n=B.c.m(B.c.p(g,0,255))
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=n
d=o+1
n=B.c.m(B.c.p(f,0,255))
if(!(o>=0&&o<r))return A.a(a0,o)
a0[o]=n
n=a1.e
if(n!=null){c=n.bQ(m,p)
if(c==1/0||c==-1/0||isNaN(c))c=1
o=d+1
n=B.c.m(B.c.p(c*255,0,255))
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=n}else{o=d+1
if(!(d>=0&&d<r))return A.a(a0,d)
a0[d]=255}++m}++p}return a},
jr:function jr(){},
jq:function jq(a){this.a=a},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
a1(a,b,c,d,e){var s=new Uint32Array(a*b),r=t.N,q=t.o
return new A.ea(a,b,c,0,0,0,B.aV,B.aM,s,new A.aR(d==null?A.F(r,q):A.eD(d.a,r,q)),e)},
jL(a){var s=B.t.eV(a.x,0),r=t.N,q=A.eD(a.y.a,r,t.o)
s=new A.ea(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,s,new A.aR(q),a.z)
q=a.Q
if(q!=null)s.seB(A.eD(q,r,r))
return s},
h1:function h1(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=null},
he:function he(a,b){this.a=a
this.b=b},
hd:function hd(){},
h(a){return new A.hc(a)},
hc:function hc(a){this.a=a},
m(a,b,c,d){return new A.a5(a,d,c==null?a.length:d+c,d,b)},
j(a,b,c){var s=a.a,r=a.d+c,q=a.b,p=b==null?a.c:r+b
return new A.a5(s,q,p,r,a.e)},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cU:function cU(a,b){this.a=a
this.b=b},
bG(a,b){return new A.eM(a,new Uint8Array(b))},
eM:function eM(a,b){this.a=0
this.b=a
this.c=b},
pC(a,b){var s,r,q,p=t.cJ.a(self),o=new MessageChannel(),n=t.p,m=new A.im(A.F(n,t.eg),new A.ij(new A.jk(o,p),A.F(n,t.w)))
n=o.port1
s=t.fQ
r=s.a(new A.jl(m))
t.Z.a(null)
q=t.e
A.iF(n,"message",r,!1,q)
A.iF(p,"message",s.a(new A.jm(m,o,a)),!1,q)},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a){this.a=a},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(){},
fn:function fn(){this.a=null},
iW:function iW(a){this.a=a},
f7:function f7(){},
hY:function hY(a){this.a=a},
mQ(a){var s,r
if(a==null)return null
s=J.av(a)
r=A.kg(s.n(a,1))
return new A.bU(A.u(s.n(a,0)),r)},
bU:function bU(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.d=null},
k1(){var s=$.a6
if(s==null){s=$.a6=new A.hM(A.b([],t.t))
s.d=$.bg}return s},
lo(a){var s=$.a6
if(s==null)s=null
else{s=s.c
s=s==null?null:s.bw(1000,a)}return s},
hM:function hM(a){var _=this
_.a=2000
_.b=a
_.c=null
_.d=!1
_.f=_.e=null},
aJ(a){var s
A.lo("creating new SquadronError: "+a)
s=new A.dc(a)
s.fl(a,null)
return s},
dc:function dc(a){this.a=a
this.b=null},
k0(a,b){var s,r,q=null
if(a instanceof A.dc)return a
else if(a instanceof A.cc){s=A.lB(a,q)
s.c=null
return A.lB(s,q)}else if(t.gY.b(a)){s=a.a
r=new A.f3(a.x,s,q,q,q)
r.ck(s,q,q,q)
return r}else return A.k7(J.bR(a),q,b,q)},
bf:function bf(){},
nF(a){if(a<1)return"ALL"
if(a<300)return"DEBUG"
if(a<400)return"FINEST"
if(a<500)return"FINER"
if(a<700)return"FINE"
if(a<800)return"CONFIG"
if(a<900)return"INFO"
if(a<1000)return"WARNING"
if(a<1200)return"SEVERE"
if(a<2000)return"SHOUT"
return"OFF"},
dQ:function dQ(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
eN:function eN(a,b){this.b=a
this.a=b},
k7(a,b,c,d){var s=new A.cc(a,c,d,b)
s.ck(a,b,c,d)
return s},
mR(a,b,c,d){var s=b==null?"The task has been cancelled":b,r=new A.bV(s,c,d,a)
r.ck(s,a,c,d)
return r},
lB(a,b){a.d=b
return a},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f3:function f3(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.b=c
_.c=d
_.d=e},
lC(a){var s,r,q,p,o,n,m,l,k,j,i
if(a==null)return null
s=a.n(0,"a")
r=A.u(a.n(0,"b"))
q=A.kg(a.n(0,"f"))
p=a.n(0,"c")
if(p==null)p=B.au
t.j.a(p)
o=A.lT(a.n(0,"g"))
n=A.mQ(t.bE.a(a.n(0,"d")))
m=A.lT(a.n(0,"e"))
l=a.n(0,"h")
l=A.lS(l==null?!0:l)
if(s==null)s=null
else{k=new A.fn()
k.a=t.c4.a(s)
s=k}j=new A.aC(s,n,m,r,p,q,o,l)
i=a.n(0,"i")
if(i!=null)j.x=1000*Date.now()-A.u(i)
return j},
aC:function aC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
il(a){return new A.bM(!1,null,null,t.R.b(a)&&!t.j.b(a)?J.mL(a):a)},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
b9:function b9(a,b,c){var _=this
_.e=a
_.f=0
_.a=b
_.b=null
_.c=c
_.d=null},
hL:function hL(){this.a=0},
ij:function ij(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.d=b
_.e=null
_.f=0},
ik:function ik(a){this.a=a},
im:function im(a,b){this.a=a
this.b=b},
io:function io(){},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
nJ(a){throw A.d(A.a7("Uint64List not supported on the web."))},
nl(a){var s
A.bp(a,0,null)
s=new Int8Array(a,0)
return s},
lv(a,b){var s
A.bp(a,b,null)
s=B.a.I(a.byteLength-b,4)
return new Uint32Array(a,b,s)},
na(a){var s
A.bp(a,0,null)
s=B.a.I(a.byteLength-0,4)
return new Float32Array(a,0,s)},
nc(a){return a.jT(0,0,null)},
md(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
pL(a){var s,r,q,p,o,n,m=a.length
for(s=m,r=1,q=0,p=0;s>0;){o=3800>s?s:3800
s-=o
for(;--o,o>=0;p=n){n=p+1
if(!(p>=0&&p<m))return A.a(a,p)
r+=a[p]&255
q+=r}r=B.a.N(r,65521)
q=B.a.N(q,65521)}return(q<<16|r)>>>0},
au(a,b){var s,r,q,p=J.av(a),o=p.gt(a)
b^=4294967295
for(s=0;o>=8;){r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
s=r+1
q=p.n(a,r)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
s=r+1
q=p.n(a,r)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
s=r+1
q=p.n(a,r)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
s=r+1
q=p.n(a,r)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
o-=8}if(o>0)do{r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.J(q)
b=B.p[(b^q)&255]^b>>>8
if(--o,o>0){s=r
continue}else break}while(!0)
return(b^4294967295)>>>0},
aD(a,b,c,d){return(B.c.m(B.a.p(d,0,255))<<24|B.c.m(B.a.p(c,0,255))<<16|B.c.m(B.a.p(b,0,255))<<8|B.c.m(B.a.p(a,0,255)))>>>0},
n8(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
for(s=1;s<=a5;)s=s<<1>>>0
s=s>>>1
r=s>>>1
q=A.b([0,0],t.t)
for(p=a6.length,o=s,s=r;s>=1;o=s,s=r){n=a7+b1*(b0-o)
m=b1*s
l=b1*o
k=a9*s
j=a9*o
for(i=(a8&s)>>>0!==0,h=a9*(a8-o),g=a7;g<=n;g+=l){f=g+h
for(e=g;e<=f;e+=j){d=e+k
c=e+m
b=c+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.cM(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.cM(a,a6[b],q)
a2=q[0]
a3=q[1]
A.cM(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.cM(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.cN(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.cN(a,a6[b],q)
a2=q[0]
a3=q[1]
A.cN(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.cN(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.cM(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.cN(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}if((b0&s)>>>0!==0){f=g+h
for(e=g;e<=f;e+=j){d=e+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.cM(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.cN(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
cM(a,b,c){var s,r,q,p,o,n=$.a9()
n[0]=a
s=$.ae()
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
n[0]=b
if(0>=r)return A.a(s,0)
p=s[0]
o=q+(p&1)+B.a.i(p,1)
B.b.h(c,0,o)
B.b.h(c,1,o-p)},
cN(a,b,c){var s=a-B.a.i(b,1)&65535
B.b.h(c,1,s)
B.b.h(c,0,b+s-32768&65535)},
pJ(a){var s,r,q,p,o,n,m,l=null
t.L.a(a)
if(A.l0().jN(a))return new A.es()
s=new A.eP()
if(s.bj(a))return s
r=new A.h3()
r.b=A.m(a,!1,l,0)
r.a=new A.e6(A.b([],t.b))
if(r.dD())return r
q=new A.ii()
if(q.bj(a))return q
p=new A.hV()
if(p.e_(A.m(a,!1,l,0))!=null)return p
if(A.lh(a).d===943870035)return new A.hG()
if(A.n7(a))return new A.fZ()
if(A.fO(A.m(a,!1,l,0)))return new A.dR()
o=new A.hR()
if(o.bj(a))return o
n=new A.h9()
m=A.m(a,!1,l,0)
n.a=m
m=A.kS(m)
n.b=m
if(m!=null)return n
return l},
pH(a){var s=A.pJ(a)
if(s==null)return null
return s.ag(a)},
q2(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if($.ki==null){s=$.ki=new Uint8Array(768)
for(r=-256;r<0;++r)s[256+r]=0
for(r=0;r<256;++r)s[256+r]=r
for(r=256;r<512;++r)s[256+r]=255}for(r=0;r<64;++r){s=a5[r]
q=a4[r]
if(!(r<64))return A.a(a7,r)
a7[r]=s*q}for(p=0,r=0;r<8;++r,p+=8){s=1+p
if(!(s<64))return A.a(a7,s)
q=a7[s]
if(q===0){o=2+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=3+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=4+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=5+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=6+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=7+p
if(!(o<64))return A.a(a7,o)
o=a7[o]===0}else o=!1}else o=!1}else o=!1}else o=!1}else o=!1}else o=!1
if(o){if(!(p<64))return A.a(a7,p)
s=B.a.i(5793*a7[p]+512,10)
n=(s&2147483647)-((s&2147483648)>>>0)
if(!(p<64))return A.a(a7,p)
a7[p]=n
s=p+1
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+2
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+3
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+4
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+5
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+6
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+7
if(!(s<64))return A.a(a7,s)
a7[s]=n
continue}if(!(p<64))return A.a(a7,p)
o=B.a.i(5793*a7[p]+128,8)
m=(o&2147483647)-((o&2147483648)>>>0)
o=4+p
if(!(o<64))return A.a(a7,o)
l=B.a.i(5793*a7[o]+128,8)
k=(l&2147483647)-((l&2147483648)>>>0)
l=2+p
if(!(l<64))return A.a(a7,l)
j=a7[l]
i=6+p
if(!(i<64))return A.a(a7,i)
h=a7[i]
g=7+p
if(!(g<64))return A.a(a7,g)
f=a7[g]
e=B.a.i(2896*(q-f)+128,8)
d=(e&2147483647)-((e&2147483648)>>>0)
f=B.a.i(2896*(q+f)+128,8)
c=(f&2147483647)-((f&2147483648)>>>0)
f=3+p
if(!(f<64))return A.a(a7,f)
q=a7[f]<<4
b=(q&2147483647)-((q&2147483648)>>>0)
q=5+p
if(!(q<64))return A.a(a7,q)
e=a7[q]<<4
a=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(m-k+1,1)
n=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(m+k+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(j*3784+h*1567+128,8)
e=(e&2147483647)-((e&2147483648)>>>0)
a0=B.a.i(j*1567-h*3784+128,8)
j=(a0&2147483647)-((a0&2147483648)>>>0)
a0=B.a.i(d-a+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=B.a.i(d+a+1,1)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.i(c+b+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.i(c-b+1,1)
b=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.i(m-e+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
e=B.a.i(m+e+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(n-j+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
a3=B.a.i(n+j+1,1)
k=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.i(d*2276+a1*3406+2048,12)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a1=B.a.i(d*3406-a1*2276+2048,12)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.i(b*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=B.a.i(b*4017-a0*799+2048,12)
b=(a0&2147483647)-((a0&2147483648)>>>0)
if(!(p<64))return A.a(a7,p)
a7[p]=m+n
if(!(g<64))return A.a(a7,g)
a7[g]=m-n
if(!(s<64))return A.a(a7,s)
a7[s]=k+a1
if(!(i<64))return A.a(a7,i)
a7[i]=k-a1
if(!(l<64))return A.a(a7,l)
a7[l]=e+b
if(!(q<64))return A.a(a7,q)
a7[q]=e-b
if(!(f<64))return A.a(a7,f)
a7[f]=a2+d
if(!(o<64))return A.a(a7,o)
a7[o]=a2-d}for(r=0;r<8;++r){s=8+r
q=a7[s]
if(q===0&&a7[16+r]===0&&a7[24+r]===0&&a7[32+r]===0&&a7[40+r]===0&&a7[48+r]===0&&a7[56+r]===0){q=B.a.i(5793*a7[r]+8192,14)
n=(q&2147483647)-((q&2147483648)>>>0)
if(!(r<64))return A.a(a7,r)
a7[r]=n
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=16+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=24+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=32+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=40+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=48+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=56+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
continue}o=B.a.i(5793*a7[r]+2048,12)
m=(o&2147483647)-((o&2147483648)>>>0)
o=32+r
l=B.a.i(5793*a7[o]+2048,12)
k=(l&2147483647)-((l&2147483648)>>>0)
l=16+r
j=a7[l]
i=48+r
h=a7[i]
g=56+r
f=a7[g]
e=B.a.i(2896*(q-f)+2048,12)
d=(e&2147483647)-((e&2147483648)>>>0)
f=B.a.i(2896*(q+f)+2048,12)
c=(f&2147483647)-((f&2147483648)>>>0)
f=24+r
b=a7[f]
q=40+r
a=a7[q]
e=B.a.i(m-k+1,1)
n=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(m+k+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(j*3784+h*1567+2048,12)
e=(e&2147483647)-((e&2147483648)>>>0)
a0=B.a.i(j*1567-h*3784+2048,12)
j=(a0&2147483647)-((a0&2147483648)>>>0)
a0=B.a.i(d-a+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=B.a.i(d+a+1,1)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.i(c+b+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.i(c-b+1,1)
b=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.i(m-e+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
e=B.a.i(m+e+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(n-j+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
a3=B.a.i(n+j+1,1)
k=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.i(d*2276+a1*3406+2048,12)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a1=B.a.i(d*3406-a1*2276+2048,12)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.i(b*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=B.a.i(b*4017-a0*799+2048,12)
b=(a0&2147483647)-((a0&2147483648)>>>0)
if(!(r<64))return A.a(a7,r)
a7[r]=m+n
if(!(g<64))return A.a(a7,g)
a7[g]=m-n
a7[s]=k+a1
a7[i]=k-a1
a7[l]=e+b
a7[q]=e-b
a7[f]=a2+d
a7[o]=a2-d}for(s=$.ki,r=0;r<64;++r){s.toString
q=B.a.i(a7[r]+8,4)
q=384+((q&2147483647)-((q&2147483648)>>>0))
if(!(q>=0&&q<768))return A.a(s,q)
q=s[q]
if(!(r<64))return A.a(a6,r)
a6[r]=q}},
pM(f5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3="ifd0",f4=f5.r
if(f4.n(0,f3).a.a1(274)){s=f4.n(0,f3).gba()
s.toString
r=s}else r=0
s=f5.d
q=s.e
q.toString
s=s.d
s.toString
p=r>=5&&r<=8
if(p)o=s
else o=q
if(p)n=q
else n=s
m=A.a1(o,n,B.A,null,null)
f4=A.eD(f4.a,t.N,t.o)
f4=new A.aR(f4)
m.y=f4
f4.n(0,f3).sba(null)
l=s-1
k=q-1
f4=f5.Q
s=f4.length
switch(s){case 1:if(0>=s)return A.a(f4,0)
j=f4[0]
i=j.e
h=j.f
g=j.r
f4=m.x
s=f4.length
q=r===8
f=r===7
e=r===6
d=r===5
c=r===4
b=r===3
a=r===2
a0=m.a
a1=i.length
a2=0
a3=0
while(!0){a4=f5.d.d
a4.toString
if(!(a3<a4))break
a5=B.a.L(a3,g)
if(!(a5<a1))return A.a(i,a5)
a6=i[a5]
a4=l-a3
a7=a4*a0
a8=a3*a0
a9=0
while(!0){b0=f5.d.e
b0.toString
if(!(a9<b0))break
b1=B.a.L(a9,h)
if(!(b1<a6.length))return A.a(a6,b1)
b2=a6[b1]
b3=(B.c.m(B.a.p(255,0,255))<<24|B.c.m(B.a.p(b2,0,255))<<16|B.c.m(B.a.p(b2,0,255))<<8|B.c.m(B.a.p(b2,0,255)))>>>0
if(a){b0=a8+(k-a9)
if(!(b0>=0&&b0<s))return A.a(f4,b0)
f4[b0]=b3}else if(b){b0=a7+(k-a9)
if(!(b0>=0&&b0<s))return A.a(f4,b0)
f4[b0]=b3}else if(c){b0=a7+a9
if(!(b0>=0&&b0<s))return A.a(f4,b0)
f4[b0]=b3}else if(d){b0=a9*a0+a3
if(!(b0>=0&&b0<s))return A.a(f4,b0)
f4[b0]=b3}else if(e){b0=a9*a0+a4
if(!(b0>=0&&b0<s))return A.a(f4,b0)
f4[b0]=b3}else if(f){b0=(k-a9)*a0+a4
if(!(b0>=0&&b0<s))return A.a(f4,b0)
f4[b0]=b3}else if(q){b0=(k-a9)*a0+a3
if(!(b0>=0&&b0<s))return A.a(f4,b0)
f4[b0]=b3}else{b4=a2+1
if(!(a2>=0&&a2<s))return A.a(f4,a2)
f4[a2]=b3
a2=b4}++a9}++a3}break
case 3:if(0>=s)return A.a(f4,0)
j=f4[0]
if(1>=s)return A.a(f4,1)
b5=f4[1]
if(2>=s)return A.a(f4,2)
b6=f4[2]
b7=j.e
b8=b5.e
b9=b6.e
h=j.f
g=j.r
c0=b5.f
c1=b5.r
c2=b6.f
c3=b6.r
f4=m.x
s=f4.length
q=r===8
f=r===7
e=r===6
d=r===5
c=r===4
b=r===3
a=r===2
a0=m.a
a1=b7.length
a4=b8.length
a7=b9.length
a2=0
a3=0
while(!0){a8=f5.d.d
a8.toString
if(!(a3<a8))break
a5=B.a.L(a3,g)
c4=B.a.L(a3,c1)
c5=B.a.L(a3,c3)
if(!(a5<a1))return A.a(b7,a5)
a6=b7[a5]
if(!(c4<a4))return A.a(b8,c4)
c6=b8[c4]
if(!(c5<a7))return A.a(b9,c5)
c7=b9[c5]
a8=l-a3
b0=a8*a0
c8=a3*a0
a9=0
while(!0){c9=f5.d.e
c9.toString
if(!(a9<c9))break
b1=B.a.L(a9,h)
d0=B.a.L(a9,c0)
d1=B.a.L(a9,c2)
if(!(b1<a6.length))return A.a(a6,b1)
b2=a6[b1]<<8>>>0
if(!(d0<c6.length))return A.a(c6,d0)
d2=c6[d0]-128
if(!(d1<c7.length))return A.a(c7,d1)
d3=c7[d1]-128
c9=B.a.i(b2+359*d3+128,8)
c9=(c9&2147483647)-((c9&2147483648)>>>0)
if(c9<0)d4=0
else d4=c9>255?255:c9
c9=B.a.i(b2-88*d2-183*d3+128,8)
c9=(c9&2147483647)-((c9&2147483648)>>>0)
if(c9<0)d5=0
else d5=c9>255?255:c9
c9=B.a.i(b2+454*d2+128,8)
c9=(c9&2147483647)-((c9&2147483648)>>>0)
if(c9<0)d6=0
else d6=c9>255?255:c9
b3=(B.c.m(B.a.p(255,0,255))<<24|B.c.m(B.a.p(d6,0,255))<<16|B.c.m(B.a.p(d5,0,255))<<8|B.c.m(B.a.p(d4,0,255)))>>>0
if(a){c9=c8+(k-a9)
if(!(c9>=0&&c9<s))return A.a(f4,c9)
f4[c9]=b3}else if(b){c9=b0+(k-a9)
if(!(c9>=0&&c9<s))return A.a(f4,c9)
f4[c9]=b3}else if(c){c9=b0+a9
if(!(c9>=0&&c9<s))return A.a(f4,c9)
f4[c9]=b3}else if(d){c9=a9*a0+a3
if(!(c9>=0&&c9<s))return A.a(f4,c9)
f4[c9]=b3}else if(e){c9=a9*a0+a8
if(!(c9>=0&&c9<s))return A.a(f4,c9)
f4[c9]=b3}else if(f){c9=(k-a9)*a0+a8
if(!(c9>=0&&c9<s))return A.a(f4,c9)
f4[c9]=b3}else if(q){c9=(k-a9)*a0+a3
if(!(c9>=0&&c9<s))return A.a(f4,c9)
f4[c9]=b3}else{b4=a2+1
if(!(a2>=0&&a2<s))return A.a(f4,a2)
f4[a2]=b3
a2=b4}++a9}++a3}break
case 4:q=f5.c
if(q==null)throw A.d(A.h("Unsupported color mode (4 components)"))
d7=q.d!==0&&!0
if(0>=s)return A.a(f4,0)
j=f4[0]
if(1>=s)return A.a(f4,1)
b5=f4[1]
if(2>=s)return A.a(f4,2)
b6=f4[2]
if(3>=s)return A.a(f4,3)
d8=f4[3]
b7=j.e
b8=b5.e
b9=b6.e
d9=d8.e
h=j.f
g=j.r
c0=b5.f
c1=b5.r
c2=b6.f
c3=b6.r
e0=d8.f
e1=d8.r
f4=m.x
s=f4.length
q=r===8
f=r===7
e=r===6
d=r===5
c=r===4
b=r===3
a=r===2
a0=!d7
a1=m.a
a4=b7.length
a7=b8.length
a8=b9.length
b0=d9.length
a2=0
a3=0
while(!0){c8=f5.d.d
c8.toString
if(!(a3<c8))break
a5=B.a.L(a3,g)
c4=B.a.L(a3,c1)
c5=B.a.L(a3,c3)
e2=B.a.L(a3,e1)
if(!(a5<a4))return A.a(b7,a5)
a6=b7[a5]
if(!(c4<a7))return A.a(b8,c4)
c6=b8[c4]
if(!(c5<a8))return A.a(b9,c5)
c7=b9[c5]
if(!(e2<b0))return A.a(d9,e2)
e3=d9[e2]
c8=l-a3
c9=c8*a1
e4=a3*a1
a9=0
while(!0){e5=f5.d.e
e5.toString
if(!(a9<e5))break
b1=B.a.L(a9,h)
d0=B.a.L(a9,c0)
d1=B.a.L(a9,c2)
e6=B.a.L(a9,e0)
if(a0){if(!(b1<a6.length))return A.a(a6,b1)
e7=a6[b1]
if(!(d0<c6.length))return A.a(c6,d0)
e8=c6[d0]
if(!(d1<c7.length))return A.a(c7,d1)
e9=c7[d1]
if(!(e6<e3.length))return A.a(e3,e6)
f0=e3[e6]}else{if(!(b1<a6.length))return A.a(a6,b1)
b2=a6[b1]
if(!(d0<c6.length))return A.a(c6,d0)
d2=c6[d0]
if(!(d1<c7.length))return A.a(c7,d1)
d3=c7[d1]
if(!(e6<e3.length))return A.a(e3,e6)
f0=e3[e6]
e5=d3-128
f1=B.c.m(b2+1.402*e5)
if(f1<0)f1=0
else if(f1>255)f1=255
e7=255-f1
f1=d2-128
e5=B.c.m(b2-0.3441363*f1-0.71413636*e5)
if(e5<0)e5=0
else if(e5>255)e5=255
e8=255-e5
f1=B.c.m(b2+1.772*f1)
if(f1<0)e5=0
else e5=f1>255?255:f1
e9=255-e5}e5=B.a.i(e7*f0,8)
f1=B.a.i(e8*f0,8)
f2=B.a.i(e9*f0,8)
b3=(B.c.m(B.a.p(255,0,255))<<24|B.c.m(B.a.p((f2&2147483647)-((f2&2147483648)>>>0),0,255))<<16|B.c.m(B.a.p((f1&2147483647)-((f1&2147483648)>>>0),0,255))<<8|B.c.m(B.a.p((e5&2147483647)-((e5&2147483648)>>>0),0,255)))>>>0
if(a){e5=e4+(k-a9)
if(!(e5>=0&&e5<s))return A.a(f4,e5)
f4[e5]=b3}else if(b){e5=c9+(k-a9)
if(!(e5>=0&&e5<s))return A.a(f4,e5)
f4[e5]=b3}else if(c){e5=c9+a9
if(!(e5>=0&&e5<s))return A.a(f4,e5)
f4[e5]=b3}else if(d){e5=a9*a1+a3
if(!(e5>=0&&e5<s))return A.a(f4,e5)
f4[e5]=b3}else if(e){e5=a9*a1+c8
if(!(e5>=0&&e5<s))return A.a(f4,e5)
f4[e5]=b3}else if(f){e5=(k-a9)*a1+c8
if(!(e5>=0&&e5<s))return A.a(f4,e5)
f4[e5]=b3}else if(q){e5=(k-a9)*a1+a3
if(!(e5>=0&&e5<s))return A.a(f4,e5)
f4[e5]=b3}else{b4=a2+1
if(!(a2>=0&&a2<s))return A.a(f4,a2)
f4[a2]=b3
a2=b4}++a9}++a3}break
default:throw A.d(A.h("Unsupported color mode"))}return m},
ou(a,b,c,d,e,f){A.or(f,a,b,c,d,e,!0,f)},
ov(a,b,c,d,e,f){A.os(f,a,b,c,d,e,!0,f)},
ot(a,b,c,d,e,f){A.oq(f,a,b,c,d,e,!0,f)},
cb(a,b,c,d,e){var s,r,q,p
for(s=0;s<d;++s){r=a.a
q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=b.a
p=b.d+s
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.n(c.a,c.d+s,q+p)}},
or(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.m(a,!1,q,p),m=A.m(a,!1,q,p),l=A.j(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.cb(A.j(n,q,1),l,A.j(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.cb(n,A.j(l,q,s),m,1,!0)
A.cb(A.j(n,q,1),l,A.j(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
os(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.m(a,!1,q,p),m=A.m(h,!1,q,p),l=A.j(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.cb(A.j(n,q,1),l,A.j(m,q,1),b-1,!0)
n.d+=d
m.d+=d
e=1}else l.d-=d
for(;e<o;){A.cb(n,l,m,b,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
oq(a,b,c,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i=null,h=a1*a0,g=a1+a2,f=A.m(a,!1,i,h),e=A.m(a4,!1,i,h),d=A.j(e,i,0)
if(a1===0){s=f.a
r=f.d
if(!(r>=0&&r<s.length))return A.a(s,r)
e.h(0,0,s[r])
A.cb(A.j(f,i,1),d,A.j(e,i,1),b-1,!0)
d.d+=a0
f.d+=a0
e.d+=a0
a1=1}for(s=-a0;a1<g;){A.cb(f,A.j(d,i,s),e,1,!0)
for(q=1;q<b;++q){r=d.a
p=d.d
o=p+(q-1)
n=r.length
if(!(o>=0&&o<n))return A.a(r,o)
o=r[o]
m=q-a0
l=p+m
if(!(l>=0&&l<n))return A.a(r,l)
l=r[l]
m=p+(m-1)
if(!(m>=0&&m<n))return A.a(r,m)
k=o+l-r[m]
if((k&4294967040)>>>0===0)j=k
else j=k<0?0:255
r=f.a
p=f.d+q
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.n(e.a,e.d+q,p+j)}++a1
d.d+=a0
f.d+=a0
e.d+=a0}},
nh(a){var s,r,q,p
if($.P==null)A.aT()
$.ku()[0]=a
s=$.mC()
if(0>=s.length)return A.a(s,0)
r=s[0]
if(a===0)return r>>>16
q=r>>>23&511
s=$.h4.bx()
if(!(q<s.length))return A.a(s,q)
q=s[q]
if(q!==0){p=r&8388607
return q+(p+4095+(p>>>13&1)>>>13)}return A.ni(r)},
ni(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.a7(o+(B.a.D(1,s-1)-1)+(B.a.a3(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
aT(){var s,r,q,p,o
if($.jK!=null)return
s=new Uint32Array(65536)
$.jK=s
$.P=A.ns(s.buffer,0,null)
s=new Uint16Array(512)
$.h4.b=s
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){$.h4.toString
s[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(s,p)
s[p]=0}else{$.h4.toString
p=q<<10>>>0
s[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(s,o)
s[o]=(p|32768)>>>0}}for(s=$.jK,r=0;r<65536;++r){s.toString
s[r]=A.nj(r)}},
nj(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{for(;(p&1024)===0;){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0},
q8(a){$.kw().h(0,0,a)
return $.mE().n(0,0)},
jn(a){var s,r
if(a==null)return"null"
for(s=32,r="";s>-1;--s)r+=(a&B.a.D(1,s))>>>0===0?"0":"1"
return r.charCodeAt(0)==0?r:r},
pB(a){var s,r="ifd0",q=A.jL(a)
if(!a.y.n(0,r).a.a1(274)||a.y.n(0,r).gba()===1)return q
s=A.eD(a.y.a,t.N,t.o)
s=new A.aR(s)
q.y=s
s.n(0,r).sba(null)
switch(a.y.n(0,r).gba()){case 2:return A.fB(q)
case 3:switch(2){case 2:A.pK(q)
A.fB(q)
break}return q
case 4:return A.fB(A.fA(q,180))
case 5:return A.fB(A.fA(q,90))
case 6:return A.fA(q,90)
case 7:return A.fB(A.fA(q,-90))
case 8:return A.fA(q,-90)}return q},
pF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a=A.pB(a)
if(b<=0)b=B.c.m(c*(a.b/a.a))
if(c<=0)c=B.c.m(b*(a.a/a.b))
s=a.a
if(c===s&&b===a.b)return A.jL(a)
r=A.a1(c,b,a.c,a.y,a.z)
q=a.b/b
p=s/c
o=new Int32Array(c)
for(n=0;n<c;++n){m=B.c.m(n*p)
if(!(n<c))return A.a(o,n)
o[n]=m}for(m=a.x,l=m.length,k=r.x,j=r.a,i=k.length,h=0;h<b;++h)for(g=B.c.m(h*q)*s,f=h*j,n=0;n<c;++n){if(!(n<c))return A.a(o,n)
e=g+o[n]
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+n
if(!(d>=0&&d<i))return A.a(k,d)
k[d]=e}return r},
fA(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=B.a.N(a7,360)
if(B.a.N(a5,90)===0){s=a6.a
r=s-1
q=a6.b
p=q-1
switch(B.a.I(a5,90)){case 1:o=A.a1(q,s,a6.c,a6.y,a6.z)
for(q=o.b,n=o.a,m=a6.x,l=m.length,k=o.x,j=k.length,i=0;i<q;++i)for(h=i*n,g=0;g<n;++g){f=(p-g)*s+i
if(!(f>=0&&f<l))return A.a(m,f)
f=m[f]
e=h+g
if(!(e>=0&&e<j))return A.a(k,e)
k[e]=f}return o
case 2:o=A.a1(s,q,a6.c,a6.y,a6.z)
for(q=o.b,n=o.a,m=a6.x,l=m.length,k=o.x,j=k.length,i=0;i<q;++i)for(h=(p-i)*s,f=i*n,g=0;g<n;++g){e=h+(r-g)
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+g
if(!(d>=0&&d<j))return A.a(k,d)
k[d]=e}return o
case 3:o=A.a1(q,s,a6.c,a6.y,a6.z)
for(q=o.b,n=o.a,m=a6.x,l=m.length,k=o.x,j=k.length,i=0;i<q;++i)for(h=r-i,f=i*n,g=0;g<n;++g){e=g*s+h
if(!(e>=0&&e<l))return A.a(m,e)
e=m[e]
d=f+g
if(!(d>=0&&d<j))return A.a(k,d)
k[d]=e}return o
default:return A.jL(a6)}}c=a5*3.141592653589793/180
b=Math.cos(c)
a=Math.sin(c)
s=a6.a
q=a6.b
a0=0.5*s
a1=0.5*q
n=Math.abs(s*b)+Math.abs(q*a)
a2=0.5*n
q=Math.abs(s*a)+Math.abs(q*b)
a3=0.5*q
o=A.a1(B.c.m(n),B.c.m(q),B.k,a6.y,a6.z)
for(s=o.b,q=o.a,n=o.x,m=n.length,i=0;i<s;++i)for(l=i-a3,k=l*a,l*=b,j=i*q,g=0;g<q;++g){h=g-a2
a4=a6.eM(a0+h*b+k,a1-h*a+l,B.aX)
h=j+g
if(!(h>=0&&h<m))return A.a(n,h)
n[h]=a4}return o},
pK(a){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=a.b,g=B.a.I(h,2)
for(s=a.x,r=s.length,q=h-1,p=0;p<g;++p){o=p*i
n=(q-p)*i
for(m=0;m<i;++m){l=n+m
if(!(l>=0&&l<r))return A.a(s,l)
k=s[l]
j=o+m
if(!(j>=0&&j<r))return A.a(s,j)
s[l]=s[j]
s[j]=k}}return a},
fB(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.b,h=B.a.I(j,2)
for(s=j-1,r=a.x,q=r.length,p=0;p<i;++p){o=p*j
for(n=0;n<h;++n){m=o+(s-n)
if(!(m>=0&&m<q))return A.a(r,m)
l=r[m]
k=o+n
if(!(k>=0&&k<q))return A.a(r,k)
r[m]=r[k]
r[k]=l}}return a},
mf(a){var s,r,q,p,o
try{if(a!=null)a.$0()}catch(r){s=A.a3(r)
q=A.o(a)
p=A.o(s)
o=$.a6
if(o!=null){o=o.c
if(o!=null)o.bw(900,"callback "+q+" failed: "+p)}}}},J={
kp(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jp(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ko==null){A.pT()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.f9("Return interceptor for "+A.o(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iV
if(o==null)o=$.iV=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.pZ(a)
if(p!=null)return p
if(typeof a=="function")return B.b_
s=Object.getPrototypeOf(a)
if(s==null)return B.aL
if(s===Object.prototype)return B.aL
if(typeof q=="function"){o=$.iV
if(o==null)o=$.iV=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a0,enumerable:false,writable:true,configurable:true})
return B.a0}return B.a0},
hh(a,b){if(a<0||a>4294967295)throw A.d(A.R(a,0,4294967295,"length",null))
return J.kY(new Array(a),b)},
ag(a,b){if(a<0||a>4294967295)throw A.d(A.R(a,0,4294967295,"length",null))
return J.kY(new Array(a),b)},
ep(a,b){if(a<0)throw A.d(A.bS("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.k("p<0>"))},
kX(a,b){return A.b(new Array(a),b.k("p<0>"))},
kY(a,b){return J.jO(A.b(a,b.k("p<0>")),b)},
jO(a,b){a.fixed$length=Array
return a},
l_(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nn(a,b){var s,r
for(s=a.length;b<s;){r=B.h.b0(a,b)
if(r!==32&&r!==13&&!J.l_(r))break;++b}return b},
no(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.h.bD(a,s)
if(r!==32&&r!==13&&!J.l_(r))break}return b},
cn(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.er.prototype}if(typeof a=="string")return J.c4.prototype
if(a==null)return J.cX.prototype
if(typeof a=="boolean")return J.eq.prototype
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof A.t)return a
return J.jp(a)},
av(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof A.t)return a
return J.jp(a)},
S(a){if(a==null)return a
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof A.t)return a
return J.jp(a)},
pN(a){if(typeof a=="number")return J.c3.prototype
if(a==null)return a
if(!(a instanceof A.t))return J.bJ.prototype
return a},
kn(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof A.t)return a
return J.jp(a)},
pO(a){if(a==null)return a
if(!(a instanceof A.t))return J.bJ.prototype
return a},
bt(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cn(a).a0(a,b)},
mG(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.pX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.av(a).n(a,b)},
n(a,b,c){return J.S(a).h(a,b,c)},
mH(a,b,c,d){return J.kn(a).iw(a,b,c,d)},
mI(a,b,c,d){return J.kn(a).cQ(a,b,c,d)},
kz(a,b){return J.S(a).aq(a,b)},
kA(a,b){return J.pO(a).j5(a,b)},
mJ(a,b){return J.S(a).b5(a,b)},
aL(a,b,c,d){return J.S(a).aj(a,b,c,d)},
dP(a){return J.S(a).gaz(a)},
co(a){return J.cn(a).gH(a)},
aw(a){return J.S(a).gT(a)},
aM(a){return J.av(a).gt(a)},
mK(a,b,c){return J.S(a).b7(a,b,c)},
kB(a,b,c){return J.kn(a).eP(a,b,c)},
kC(a,b){return J.S(a).aD(a,b)},
fE(a,b,c){return J.S(a).ad(a,b,c)},
jE(a){return J.pN(a).m(a)},
mL(a){return J.S(a).aN(a)},
bR(a){return J.cn(a).q(a)},
mM(a,b){return J.S(a).b8(a,b)},
ef:function ef(){},
eq:function eq(){},
cX:function cX(){},
ay:function ay(){},
bc:function bc(){},
eO:function eO(){},
bJ:function bJ(){},
aU:function aU(){},
p:function p(a){this.$ti=a},
hi:function hi(a){this.$ti=a},
cq:function cq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c3:function c3(){},
cW:function cW(){},
er:function er(){},
c4:function c4(){}},B={}
var w=[A,J,B]
var $={}
A.jP.prototype={}
J.ef.prototype={
a0(a,b){return a===b},
gH(a){return A.d6(a)},
q(a){return"Instance of '"+A.hE(a)+"'"}}
J.eq.prototype={
q(a){return String(a)},
gH(a){return a?519018:218159},
$iE:1}
J.cX.prototype={
a0(a,b){return null==b},
q(a){return"null"},
gH(a){return 0},
$iL:1}
J.ay.prototype={}
J.bc.prototype={
gH(a){return 0},
q(a){return String(a)},
$ikZ:1}
J.eO.prototype={}
J.bJ.prototype={}
J.aU.prototype={
q(a){var s=a[$.mj()]
if(s==null)return this.f4(a)
return"JavaScript function for "+J.bR(s)},
$ibz:1}
J.p.prototype={
v(a,b){A.ab(a).c.a(b)
if(!!a.fixed$length)A.D(A.a7("add"))
a.push(b)},
bl(a,b){var s
if(!!a.fixed$length)A.D(A.a7("remove"))
for(s=0;s<a.length;++s)if(J.bt(a[s],b)){a.splice(s,1)
return!0}return!1},
b8(a,b){var s=A.ab(a)
return new A.Z(a,s.k("E(1)").a(b),s.k("Z<1>"))},
bB(a,b){var s
A.ab(a).k("k<1>").a(b)
if(!!a.fixed$length)A.D(A.a7("addAll"))
for(s=new A.bn(b.a(),b.$ti.k("bn<1>"));s.A();)a.push(s.gE())},
b7(a,b,c){var s=A.ab(a)
return new A.aW(a,s.G(c).k("1(2)").a(b),s.k("@<1>").G(c).k("aW<1,2>"))},
aD(a,b){return A.f2(a,b,null,A.ab(a).c)},
aq(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
ad(a,b,c){if(b<0||b>a.length)throw A.d(A.R(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.d(A.R(c,b,a.length,"end",null))
if(b===c)return A.b([],A.ab(a))
return A.b(a.slice(b,c),A.ab(a))},
gaz(a){if(a.length>0)return a[0]
throw A.d(A.bB())},
gje(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.bB())},
S(a,b,c,d,e){var s,r,q,p,o
A.ab(a).k("k<1>").a(d)
if(!!a.immutable$list)A.D(A.a7("setRange"))
A.ar(b,c,a.length)
s=c-b
if(s===0)return
A.aG(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.kC(d,e).a4(0,!1)
q=0}p=J.av(r)
if(q+s>p.gt(r))throw A.d(A.kV())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.n(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.n(r,q+o)},
aj(a,b,c,d){var s
A.ab(a).k("1?").a(d)
if(!!a.immutable$list)A.D(A.a7("fill range"))
A.ar(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
b5(a,b){var s,r
A.ab(a).k("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.b5(b.$1(a[r])))return!1
if(a.length!==s)throw A.d(A.ba(a))}return!0},
aw(a,b){var s
for(s=0;s<a.length;++s)if(J.bt(a[s],b))return!0
return!1},
gak(a){return a.length===0},
ges(a){return a.length!==0},
q(a){return A.jN(a,"[","]")},
a4(a,b){var s=A.b(a.slice(0),A.ab(a))
return s},
aN(a){return this.a4(a,!0)},
gT(a){return new J.cq(a,a.length,A.ab(a).k("cq<1>"))},
gH(a){return A.d6(a)},
gt(a){return a.length},
st(a,b){if(!!a.fixed$length)A.D(A.a7("set length"))
if(b<0)throw A.d(A.R(b,0,null,"newLength",null))
if(b>a.length)A.ab(a).c.a(null)
a.length=b},
n(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cl(a,b))
return a[b]},
h(a,b,c){A.u(b)
A.ab(a).c.a(c)
if(!!a.immutable$list)A.D(A.a7("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cl(a,b))
a[b]=c},
$iq:1,
$ik:1,
$il:1}
J.hi.prototype={}
J.cq.prototype={
gE(){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.aK(q))
s=r.c
if(s>=p){r.sdq(null)
return!1}r.sdq(q[s]);++r.c
return!0},
sdq(a){this.d=this.$ti.k("1?").a(a)},
$iH:1}
J.c3.prototype={
cT(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.a.gbJ(b)
if(this.gbJ(a)===s)return 0
if(this.gbJ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbJ(a){return a===0?1/a<0:a<0},
m(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.a7(""+a+".toInt()"))},
aU(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.a7(""+a+".ceil()"))},
aM(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.a7(""+a+".round()"))},
p(a,b,c){if(B.a.cT(b,c)>0)throw A.d(A.br(b))
if(this.cT(a,b)<0)return b
if(this.cT(a,c)>0)return c
return a},
bm(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.R(b,2,36,"radix",null))
s=a.toString(b)
if(B.h.bD(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.D(A.a7("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.a(r,1)
s=r[1]
if(3>=q)return A.a(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.h.ao("0",p)},
q(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
N(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
X(a,b){A.p_(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e7(a,b)},
I(a,b){return(a|0)===a?a/b|0:this.e7(a,b)},
e7(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.a7("Result of truncating division is "+A.o(s)+": "+A.o(a)+" ~/ "+b))},
D(a,b){if(b<0)throw A.d(A.br(b))
return b>31?0:a<<b>>>0},
B(a,b){return b>31?0:a<<b>>>0},
a7(a,b){var s
if(b<0)throw A.d(A.br(b))
if(a>0)s=this.L(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
i(a,b){var s
if(a>0)s=this.L(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a3(a,b){if(0>b)throw A.d(A.br(b))
return this.L(a,b)},
L(a,b){return b>31?0:a>>>b},
$iB:1,
$iK:1}
J.cW.prototype={
V(a,b){var s=this.D(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
$ie:1}
J.er.prototype={}
J.c4.prototype={
bD(a,b){if(b<0)throw A.d(A.cl(a,b))
if(b>=a.length)A.D(A.cl(a,b))
return a.charCodeAt(b)},
b0(a,b){if(b>=a.length)throw A.d(A.cl(a,b))
return a.charCodeAt(b)},
bo(a,b){return a+b},
bW(a,b,c){return a.substring(b,A.ar(b,c,a.length))},
jL(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.b0(p,0)===133){s=J.nn(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.bD(p,r)===133?J.no(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ao(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.aT)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
jm(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ao(c,s)+a},
q(a){return a},
gH(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return a.length},
$ix:1}
A.bC.prototype={
q(a){return"LateInitializationError: "+this.a}}
A.ap.prototype={
gt(a){return this.a.length},
n(a,b){return B.h.bD(this.a,b)}}
A.jy.prototype={
$0(){var s=new A.M($.C,t.eq)
s.cm(null)
return s},
$S:29}
A.hK.prototype={}
A.q.prototype={}
A.V.prototype={
gT(a){var s=this
return new A.bD(s,s.gt(s),A.w(s).k("bD<V.E>"))},
gak(a){return this.gt(this)===0},
gaz(a){if(this.gt(this)===0)throw A.d(A.bB())
return this.aq(0,0)},
b5(a,b){var s,r,q=this
A.w(q).k("E(V.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!A.b5(b.$1(q.aq(0,r))))return!1
if(s!==q.gt(q))throw A.d(A.ba(q))}return!0},
b8(a,b){return this.f_(0,A.w(this).k("E(V.E)").a(b))},
b7(a,b,c){var s=A.w(this)
return new A.aW(this,s.G(c).k("1(V.E)").a(b),s.k("@<V.E>").G(c).k("aW<1,2>"))},
aD(a,b){return A.f2(this,b,null,A.w(this).k("V.E"))},
a4(a,b){return A.hs(this,!0,A.w(this).k("V.E"))},
aN(a){return this.a4(a,!0)}}
A.de.prototype={
ghj(){var s=J.aM(this.a),r=this.c
if(r==null||r>s)return s
return r},
giC(){var s=J.aM(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.aM(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.jS()
return s-q},
aq(a,b){var s=this,r=s.giC()+b
if(b<0||r>=s.ghj())throw A.d(A.hf(b,s,"index",null,null))
return J.kz(s.a,r)},
aD(a,b){var s,r,q=this
A.aG(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.aP(q.$ti.k("aP<1>"))
return A.f2(q.a,s,r,q.$ti.c)},
a4(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.av(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.ep(0,n):J.hh(0,n)}r=A.W(s,m.aq(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.b.h(r,q,m.aq(n,o+q))
if(m.gt(n)<l)throw A.d(A.ba(p))}return r},
aN(a){return this.a4(a,!0)}}
A.bD.prototype={
gE(){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=J.av(q),o=p.gt(q)
if(r.b!==o)throw A.d(A.ba(q))
s=r.c
if(s>=o){r.saR(null)
return!1}r.saR(p.aq(q,s));++r.c
return!0},
saR(a){this.d=this.$ti.k("1?").a(a)},
$iH:1}
A.aV.prototype={
gT(a){var s=A.w(this)
return new A.bE(J.aw(this.a),this.b,s.k("@<1>").G(s.z[1]).k("bE<1,2>"))},
gt(a){return J.aM(this.a)},
gaz(a){return this.b.$1(J.dP(this.a))}}
A.bx.prototype={$iq:1}
A.bE.prototype={
A(){var s=this,r=s.b
if(r.A()){s.saR(s.c.$1(r.gE()))
return!0}s.saR(null)
return!1},
gE(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
saR(a){this.a=this.$ti.k("2?").a(a)}}
A.aW.prototype={
gt(a){return J.aM(this.a)},
aq(a,b){return this.b.$1(J.kz(this.a,b))}}
A.Z.prototype={
gT(a){return new A.dn(J.aw(this.a),this.b,this.$ti.k("dn<1>"))},
b7(a,b,c){var s=this.$ti
return new A.aV(this,s.G(c).k("1(2)").a(b),s.k("@<1>").G(c).k("aV<1,2>"))}}
A.dn.prototype={
A(){var s,r
for(s=this.a,r=this.b;s.A();)if(A.b5(r.$1(s.gE())))return!0
return!1},
gE(){return this.a.gE()}}
A.cK.prototype={
gT(a){var s=this.$ti
return new A.cL(J.aw(this.a),this.b,B.a1,s.k("@<1>").G(s.z[1]).k("cL<1,2>"))}}
A.cL.prototype={
gE(){var s=this.d
return s==null?this.$ti.z[1].a(s):s},
A(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.A();){q.saR(null)
if(s.A()){q.sdr(null)
q.sdr(J.aw(r.$1(s.gE())))}else return!1}q.saR(q.c.gE())
return!0},
sdr(a){this.c=this.$ti.k("H<2>?").a(a)},
saR(a){this.d=this.$ti.k("2?").a(a)},
$iH:1}
A.aY.prototype={
aD(a,b){A.fG(b,"count",t.p)
A.aG(b,"count")
return new A.aY(this.a,this.b+b,A.w(this).k("aY<1>"))},
gT(a){return new A.db(J.aw(this.a),this.b,A.w(this).k("db<1>"))}}
A.bY.prototype={
gt(a){var s=J.aM(this.a)-this.b
if(s>=0)return s
return 0},
aD(a,b){A.fG(b,"count",t.p)
A.aG(b,"count")
return new A.bY(this.a,this.b+b,this.$ti)},
$iq:1}
A.db.prototype={
A(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.A()
this.b=0
return s.A()},
gE(){return this.a.gE()}}
A.aP.prototype={
gT(a){return B.a1},
gt(a){return 0},
gaz(a){throw A.d(A.bB())},
b8(a,b){this.$ti.k("E(1)").a(b)
return this},
b7(a,b,c){this.$ti.G(c).k("1(2)").a(b)
return new A.aP(c.k("aP<0>"))},
aD(a,b){A.aG(b,"count")
return this},
a4(a,b){var s=this.$ti.c
return b?J.ep(0,s):J.hh(0,s)},
aN(a){return this.a4(a,!0)}}
A.cv.prototype={
A(){return!1},
gE(){throw A.d(A.bB())},
$iH:1}
A.a4.prototype={}
A.bj.prototype={
h(a,b,c){A.u(b)
A.w(this).k("bj.E").a(c)
throw A.d(A.a7("Cannot modify an unmodifiable list"))},
S(a,b,c,d,e){A.w(this).k("k<bj.E>").a(d)
throw A.d(A.a7("Cannot modify an unmodifiable list"))},
au(a,b,c,d){return this.S(a,b,c,d,0)}}
A.ca.prototype={}
A.cu.prototype={
gak(a){return this.gt(this)===0},
q(a){return A.jT(this)},
$iaj:1}
A.c_.prototype={
bd(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.ne(r)
o=A.l2(A.pl(),q,r,s.z[1])
A.m9(p.a,o)
p.$map=o}return o},
a1(a){return this.bd().a1(a)},
n(a,b){return this.bd().n(0,b)},
aJ(a,b){this.$ti.k("~(1,2)").a(b)
this.bd().aJ(0,b)},
gaK(){var s=this.bd()
return new A.aA(s,A.w(s).k("aA<1>"))},
gaC(){return this.bd().gaC()},
gt(a){return this.bd().a}}
A.h2.prototype={
$1(a){return this.a.b(a)},
$S:42}
A.hZ.prototype={
aA(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.d4.prototype={
q(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.ev.prototype={
q(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.fa.prototype={
q(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hx.prototype={
q(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cx.prototype={}
A.dC.prototype={
q(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibh:1}
A.bv.prototype={
q(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.mh(r==null?"unknown":r)+"'"},
$ibz:1,
gjQ(){return this},
$C:"$1",
$R:1,
$D:null}
A.dT.prototype={$C:"$0",$R:0}
A.dU.prototype={$C:"$2",$R:2}
A.f4.prototype={}
A.f_.prototype={
q(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.mh(s)+"'"}}
A.bT.prototype={
a0(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bT))return!1
return this.$_target===b.$_target&&this.a===b.a},
gH(a){return(A.kq(this.a)^A.d6(this.$_target))>>>0},
q(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hE(this.a)+"'")}}
A.eZ.prototype={
q(a){return"RuntimeError: "+this.a}}
A.fh.prototype={
q(a){return"Assertion failed: "+A.cw(this.a)}}
A.U.prototype={
gt(a){return this.a},
gak(a){return this.a===0},
gaK(){return new A.aA(this,A.w(this).k("aA<1>"))},
gaC(){var s=A.w(this)
return A.l6(new A.aA(this,s.k("aA<1>")),new A.ho(this),s.c,s.z[1])},
a1(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.eo(a)},
eo(a){var s=this.d
if(s==null)return!1
return this.bH(s[this.bG(a)],a)>=0},
bB(a,b){A.w(this).k("aj<1,2>").a(b).aJ(0,new A.hn(this))},
n(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ep(b)},
ep(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bG(a)]
r=this.bH(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.w(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.da(s==null?q.b=q.cJ():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.da(r==null?q.c=q.cJ():r,b,c)}else q.er(b,c)},
er(a,b){var s,r,q,p,o=this,n=A.w(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.cJ()
r=o.bG(a)
q=s[r]
if(q==null)s[r]=[o.cK(a,b)]
else{p=o.bH(q,a)
if(p>=0)q[p].b=b
else q.push(o.cK(a,b))}},
js(a,b){var s,r,q=this,p=A.w(q)
p.c.a(a)
p.k("2()").a(b)
if(q.a1(a)){s=q.n(0,a)
return s==null?p.z[1].a(s):s}r=b.$0()
q.h(0,a,r)
return r},
bl(a,b){if((b&0x3fffffff)===b)return this.ix(this.c,b)
else return this.eq(b)},
eq(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bG(a)
r=n[s]
q=o.bH(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eb(p)
if(r.length===0)delete n[s]
return p.b},
aJ(a,b){var s,r,q=this
A.w(q).k("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ba(q))
s=s.c}},
da(a,b,c){var s,r=A.w(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.cK(b,c)
else s.b=c},
ix(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.eb(s)
delete a[b]
return s.b},
dP(){this.r=this.r+1&1073741823},
cK(a,b){var s=this,r=A.w(s),q=new A.hq(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dP()
return q},
eb(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dP()},
bG(a){return J.co(a)&0x3fffffff},
bH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bt(a[r].a,b))return r
return-1},
q(a){return A.jT(this)},
cJ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijR:1}
A.ho.prototype={
$1(a){var s=this.a,r=A.w(s)
s=s.n(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.w(this.a).k("2(1)")}}
A.hn.prototype={
$2(a,b){var s=this.a,r=A.w(s)
s.h(0,r.c.a(a),r.z[1].a(b))},
$S(){return A.w(this.a).k("~(1,2)")}}
A.hq.prototype={}
A.aA.prototype={
gt(a){return this.a.a},
gak(a){return this.a.a===0},
gT(a){var s=this.a,r=new A.ai(s,s.r,this.$ti.k("ai<1>"))
r.c=s.e
return r}}
A.ai.prototype={
gE(){return this.d},
A(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ba(q))
s=r.c
if(s==null){r.sd9(null)
return!1}else{r.sd9(s.a)
r.c=s.c
return!0}},
sd9(a){this.d=this.$ti.k("1?").a(a)},
$iH:1}
A.js.prototype={
$1(a){return this.a(a)},
$S:12}
A.jt.prototype={
$2(a,b){return this.a(a,b)},
$S:30}
A.ju.prototype={
$1(a){return this.a(A.aH(a))},
$S:44}
A.iC.prototype={
K(){var s=this.b
if(s===this)throw A.d(new A.bC("Local '"+this.a+"' has not been initialized."))
return s},
bx(){var s=this.b
if(s===this)throw A.d(A.hp(this.a))
return s}}
A.d1.prototype={$id1:1}
A.O.prototype={
hC(a,b,c,d){var s=A.R(b,0,c,d,null)
throw A.d(s)},
dl(a,b,c,d){if(b>>>0!==b||b>c)this.hC(a,b,c,d)},
$iO:1,
$iY:1}
A.X.prototype={
gt(a){return a.length},
e5(a,b,c,d,e){var s,r,q=a.length
this.dl(a,b,q,"start")
this.dl(a,c,q,"end")
if(b>c)throw A.d(A.R(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.bS(e,null))
r=d.length
if(r-e<s)throw A.d(A.hN("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iah:1}
A.be.prototype={
n(a,b){A.b4(b,a,a.length)
return a[b]},
h(a,b,c){A.u(b)
A.oZ(c)
A.b4(b,a,a.length)
a[b]=c},
S(a,b,c,d,e){t.bM.a(d)
if(t.d4.b(d)){this.e5(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
au(a,b,c,d){return this.S(a,b,c,d,0)},
$iq:1,
$ik:1,
$il:1}
A.ak.prototype={
h(a,b,c){A.u(b)
A.u(c)
A.b4(b,a,a.length)
a[b]=c},
S(a,b,c,d,e){t.hb.a(d)
if(t.bc.b(d)){this.e5(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
au(a,b,c,d){return this.S(a,b,c,d,0)},
$iq:1,
$ik:1,
$il:1}
A.eE.prototype={
ad(a,b,c){return new Float32Array(a.subarray(b,A.aI(b,c,a.length)))},
$in9:1}
A.eF.prototype={
ad(a,b,c){return new Float64Array(a.subarray(b,A.aI(b,c,a.length)))},
$inb:1}
A.eG.prototype={
n(a,b){A.b4(b,a,a.length)
return a[b]},
ad(a,b,c){return new Int16Array(a.subarray(b,A.aI(b,c,a.length)))},
$ijM:1}
A.eH.prototype={
n(a,b){A.b4(b,a,a.length)
return a[b]},
ad(a,b,c){return new Int32Array(a.subarray(b,A.aI(b,c,a.length)))},
$ihg:1}
A.eI.prototype={
n(a,b){A.b4(b,a,a.length)
return a[b]},
ad(a,b,c){return new Int8Array(a.subarray(b,A.aI(b,c,a.length)))},
$ink:1}
A.eJ.prototype={
n(a,b){A.b4(b,a,a.length)
return a[b]},
ad(a,b,c){return new Uint16Array(a.subarray(b,A.aI(b,c,a.length)))},
$inI:1}
A.d2.prototype={
n(a,b){A.b4(b,a,a.length)
return a[b]},
ad(a,b,c){return new Uint32Array(a.subarray(b,A.aI(b,c,a.length)))},
eV(a,b){return this.ad(a,b,null)},
$ib_:1}
A.d3.prototype={
gt(a){return a.length},
n(a,b){A.b4(b,a,a.length)
return a[b]},
ad(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.aI(b,c,a.length)))}}
A.bF.prototype={
gt(a){return a.length},
n(a,b){A.b4(b,a,a.length)
return a[b]},
ad(a,b,c){return new Uint8Array(a.subarray(b,A.aI(b,c,a.length)))},
$ibF:1,
$ib0:1}
A.dw.prototype={}
A.dx.prototype={}
A.dy.prototype={}
A.dz.prototype={}
A.aB.prototype={
k(a){return A.j9(v.typeUniverse,this,a)},
G(a){return A.oU(v.typeUniverse,this,a)}}
A.fm.prototype={}
A.dE.prototype={
q(a){return A.am(this.a,null)},
$ilt:1}
A.fl.prototype={
q(a){return this.a}}
A.dF.prototype={$ibi:1}
A.iy.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
A.ix.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:45}
A.iz.prototype={
$0(){this.a.$0()},
$S:6}
A.iA.prototype={
$0(){this.a.$0()},
$S:6}
A.j7.prototype={
fo(a,b){if(self.setTimeout!=null)self.setTimeout(A.bQ(new A.j8(this,b),0),a)
else throw A.d(A.a7("`setTimeout()` not found."))}}
A.j8.prototype={
$0(){this.b.$0()},
$S:1}
A.fi.prototype={
cc(a){var s,r=this,q=r.$ti
q.k("1/?").a(a)
if(a==null)q.c.a(a)
if(!r.b)r.a.cm(a)
else{s=r.a
if(q.k("ax<1>").b(a))s.dk(a)
else s.cs(q.c.a(a))}},
cU(a,b){var s=this.a
if(this.b)s.bs(a,b)
else s.dg(a,b)}}
A.jd.prototype={
$1(a){return this.a.$2(0,a)},
$S:3}
A.je.prototype={
$2(a,b){this.a.$2(1,new A.cx(a,t.l.a(b)))},
$S:41}
A.jj.prototype={
$2(a,b){this.a(A.u(a),b)},
$S:38}
A.ce.prototype={
q(a){return"IterationMarker("+this.b+", "+A.o(this.a)+")"}}
A.bn.prototype={
gE(){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gE()},
A(){var s,r,q,p,o,n,m=this
for(s=m.$ti.k("H<1>");!0;){r=m.c
if(r!=null)if(r.A())return!0
else m.sdS(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.ce){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sdf(null)
return!1}if(0>=o.length)return A.a(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.aw(r))
if(n instanceof A.bn){r=m.d
if(r==null)r=m.d=[]
B.b.v(r,m.a)
m.a=n.a
continue}else{m.sdS(n)
continue}}}}else{m.sdf(q)
return!0}}return!1},
sdf(a){this.b=this.$ti.k("1?").a(a)},
sdS(a){this.c=this.$ti.k("H<1>?").a(a)},
$iH:1}
A.dD.prototype={
gT(a){return new A.bn(this.a(),this.$ti.k("bn<1>"))}}
A.cs.prototype={
q(a){return A.o(this.a)},
$iz:1,
gbU(){return this.b}}
A.fk.prototype={
cU(a,b){var s
A.ck(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.hN("Future already completed"))
if(b==null)b=A.kD(a)
s.dg(a,b)},
ej(a){return this.cU(a,null)}}
A.bN.prototype={
cc(a){var s,r=this.$ti
r.k("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.hN("Future already completed"))
s.cm(r.k("1/").a(a))},
iR(){return this.cc(null)}}
A.b3.prototype={
jf(a){if((this.c&15)!==6)return!0
return this.b.b.d_(t.al.a(this.d),a.a,t.v,t.K)},
jc(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.jD(q,m,a.b,o,n,t.l)
else p=l.d_(t.x.a(q),m,o,n)
try{o=r.$ti.k("2/").a(p)
return o}catch(s){if(t.eK.b(A.a3(s))){if((r.c&1)!==0)throw A.d(A.bS("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.bS("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.M.prototype={
d0(a,b,c){var s,r,q,p=this.$ti
p.G(c).k("1/(2)").a(a)
s=$.C
if(s===B.m){if(b!=null&&!t.C.b(b)&&!t.x.b(b))throw A.d(A.jF(b,"onError",u.b))}else{c.k("@<0/>").G(p.c).k("1(2)").a(a)
if(b!=null)b=A.pn(b,s)}r=new A.M(s,c.k("M<0>"))
q=b==null?1:3
this.bX(new A.b3(r,q,a,b,p.k("@<1>").G(c).k("b3<1,2>")))
return r},
jG(a,b){return this.d0(a,null,b)},
e8(a,b,c){var s,r=this.$ti
r.G(c).k("1/(2)").a(a)
s=new A.M($.C,c.k("M<0>"))
this.bX(new A.b3(s,3,a,b,r.k("@<1>").G(c).k("b3<1,2>")))
return s},
iA(a){this.a=this.a&1|16
this.c=a},
cq(a){this.a=a.a&30|this.a&1
this.c=a.c},
bX(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.bX(a)
return}r.cq(s)}A.bP(null,null,r.b,t.M.a(new A.iI(r,a)))}},
dX(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.dX(a)
return}m.cq(n)}l.a=m.c8(a)
A.bP(null,null,m.b,t.M.a(new A.iP(l,m)))}},
c7(){var s=t.F.a(this.c)
this.c=null
return this.c8(s)},
c8(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fO(a){var s,r,q,p=this
p.a^=2
try{a.d0(new A.iL(p),new A.iM(p),t.P)}catch(q){s=A.a3(q)
r=A.ao(q)
A.q4(new A.iN(p,s,r))}},
cs(a){var s,r=this
r.$ti.c.a(a)
s=r.c7()
r.a=8
r.c=a
A.cd(r,s)},
bs(a,b){var s
t.l.a(b)
s=this.c7()
this.iA(A.fI(a,b))
A.cd(this,s)},
cm(a){var s=this.$ti
s.k("1/").a(a)
if(s.k("ax<1>").b(a)){this.dk(a)
return}this.fI(s.c.a(a))},
fI(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bP(null,null,s.b,t.M.a(new A.iK(s,a)))},
dk(a){var s=this,r=s.$ti
r.k("ax<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.bP(null,null,s.b,t.M.a(new A.iO(s,a)))}else A.k8(a,s)
return}s.fO(a)},
dg(a,b){this.a^=2
A.bP(null,null,this.b,t.M.a(new A.iJ(this,a,b)))},
$iax:1}
A.iI.prototype={
$0(){A.cd(this.a,this.b)},
$S:1}
A.iP.prototype={
$0(){A.cd(this.b,this.a.a)},
$S:1}
A.iL.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.cs(p.$ti.c.a(a))}catch(q){s=A.a3(q)
r=A.ao(q)
p.bs(s,r)}},
$S:11}
A.iM.prototype={
$2(a,b){this.a.bs(t.K.a(a),t.l.a(b))},
$S:34}
A.iN.prototype={
$0(){this.a.bs(this.b,this.c)},
$S:1}
A.iK.prototype={
$0(){this.a.cs(this.b)},
$S:1}
A.iO.prototype={
$0(){A.k8(this.b,this.a)},
$S:1}
A.iJ.prototype={
$0(){this.a.bs(this.b,this.c)},
$S:1}
A.iS.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.eA(t.O.a(q.d),t.z)}catch(p){s=A.a3(p)
r=A.ao(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.fI(s,r)
o.b=!0
return}if(l instanceof A.M&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.c.b(l)){n=m.b.a
q=m.a
q.c=l.jG(new A.iT(n),t.z)
q.b=!1}},
$S:1}
A.iT.prototype={
$1(a){return this.a},
$S:31}
A.iR.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.d_(o.k("2/(1)").a(p.d),m,o.k("2/"),n)}catch(l){s=A.a3(l)
r=A.ao(l)
q=this.a
q.c=A.fI(s,r)
q.b=!0}},
$S:1}
A.iQ.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.jf(s)&&p.a.e!=null){p.c=p.a.jc(s)
p.b=!1}}catch(o){r=A.a3(o)
q=A.ao(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fI(r,q)
n.b=!0}},
$S:1}
A.fj.prototype={}
A.c8.prototype={
gt(a){var s,r,q=this,p={},o=new A.M($.C,t.fJ)
p.a=0
s=q.$ti
r=s.k("~(1)?").a(new A.hO(p,q))
t.Z.a(new A.hP(p,o))
A.iF(q.a,q.b,r,!1,s.c)
return o}}
A.hO.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.k("~(1)")}}
A.hP.prototype={
$0(){var s=this.b,r=s.$ti,q=r.k("1/").a(this.a.a),p=s.c7()
r.c.a(q)
s.a=8
s.c=q
A.cd(s,p)},
$S:1}
A.f0.prototype={}
A.f1.prototype={}
A.fs.prototype={}
A.dI.prototype={$ilE:1}
A.ji.prototype={
$0(){var s=this.a,r=this.b
A.ck(s,"error",t.K)
A.ck(r,"stackTrace",t.l)
A.n_(s,r)},
$S:1}
A.fq.prototype={
jE(a){var s,r,q
t.M.a(a)
try{if(B.m===$.C){a.$0()
return}A.m1(null,null,this,a,t.H)}catch(q){s=A.a3(q)
r=A.ao(q)
A.jh(t.K.a(s),t.l.a(r))}},
jF(a,b,c){var s,r,q
c.k("~(0)").a(a)
c.a(b)
try{if(B.m===$.C){a.$1(b)
return}A.m2(null,null,this,a,b,t.H,c)}catch(q){s=A.a3(q)
r=A.ao(q)
A.jh(t.K.a(s),t.l.a(r))}},
ef(a){return new A.j2(this,t.M.a(a))},
iK(a,b){return new A.j3(this,b.k("~(0)").a(a),b)},
eA(a,b){b.k("0()").a(a)
if($.C===B.m)return a.$0()
return A.m1(null,null,this,a,b)},
d_(a,b,c,d){c.k("@<0>").G(d).k("1(2)").a(a)
d.a(b)
if($.C===B.m)return a.$1(b)
return A.m2(null,null,this,a,b,c,d)},
jD(a,b,c,d,e,f){d.k("@<0>").G(e).G(f).k("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.C===B.m)return a.$2(b,c)
return A.po(null,null,this,a,b,c,d,e,f)},
ez(a,b,c,d){return b.k("@<0>").G(c).G(d).k("1(2,3)").a(a)}}
A.j2.prototype={
$0(){return this.a.jE(this.b)},
$S:1}
A.j3.prototype={
$1(a){var s=this.c
return this.a.jF(this.b,s.a(a),s)},
$S(){return this.c.k("~(0)")}}
A.dr.prototype={
n(a,b){if(!A.b5(this.y.$1(b)))return null
return this.f1(b)},
h(a,b,c){var s=this.$ti
this.f3(s.c.a(b),s.z[1].a(c))},
a1(a){if(!A.b5(this.y.$1(a)))return!1
return this.f0(a)},
bl(a,b){if(!A.b5(this.y.$1(b)))return null
return this.f2(b)},
bG(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
bH(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.b5(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.j1.prototype={
$1(a){return this.a.b(a)},
$S:4}
A.ds.prototype={
gT(a){var s=this,r=new A.bO(s,s.r,s.$ti.k("bO<1>"))
r.c=s.e
return r},
gt(a){return this.a},
aw(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.fQ(b)},
fQ(a){var s=this.d
if(s==null)return!1
return this.dz(s[J.co(a)&1073741823],a)>=0},
gaz(a){var s=this.e
if(s==null)throw A.d(A.hN("No elements"))
return this.$ti.c.a(s.a)},
v(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dm(s==null?q.b=A.ka():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dm(r==null?q.c=A.ka():r,b)}else return q.fF(b)},
fF(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.ka()
r=J.co(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.cr(a)]
else{if(p.dz(q,a)>=0)return!1
q.push(p.cr(a))}return!0},
dm(a,b){this.$ti.c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.cr(b)
return!0},
cr(a){var s=this,r=new A.fp(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
dz(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bt(a[r].a,b))return r
return-1}}
A.fp.prototype={}
A.bO.prototype={
gE(){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ba(q))
else if(r==null){s.sbr(null)
return!1}else{s.sbr(s.$ti.k("1?").a(r.a))
s.c=r.b
return!0}},
sbr(a){this.d=this.$ti.k("1?").a(a)},
$iH:1}
A.cV.prototype={}
A.hr.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:17}
A.d_.prototype={$iq:1,$ik:1,$il:1}
A.r.prototype={
gT(a){return new A.bD(a,this.gt(a),A.a_(a).k("bD<r.E>"))},
aq(a,b){return this.n(a,b)},
gak(a){return this.gt(a)===0},
ges(a){return this.gt(a)!==0},
gaz(a){if(this.gt(a)===0)throw A.d(A.bB())
return this.n(a,0)},
b5(a,b){var s,r
A.a_(a).k("E(r.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!A.b5(b.$1(this.n(a,r))))return!1
if(s!==this.gt(a))throw A.d(A.ba(a))}return!0},
b8(a,b){var s=A.a_(a)
return new A.Z(a,s.k("E(r.E)").a(b),s.k("Z<r.E>"))},
b7(a,b,c){var s=A.a_(a)
return new A.aW(a,s.G(c).k("1(r.E)").a(b),s.k("@<r.E>").G(c).k("aW<1,2>"))},
aD(a,b){return A.f2(a,b,null,A.a_(a).k("r.E"))},
a4(a,b){var s,r,q,p,o=this
if(o.gt(a)===0){s=J.ep(0,A.a_(a).k("r.E"))
return s}r=o.n(a,0)
q=A.W(o.gt(a),r,!0,A.a_(a).k("r.E"))
for(p=1;p<o.gt(a);++p)B.b.h(q,p,o.n(a,p))
return q},
aN(a){return this.a4(a,!0)},
ad(a,b,c){var s,r=this.gt(a)
A.ar(b,c,r)
A.ar(b,c,this.gt(a))
s=A.a_(a).k("r.E")
return A.l4(A.f2(a,b,c,s),s)},
aj(a,b,c,d){var s
A.a_(a).k("r.E?").a(d)
A.ar(b,c,this.gt(a))
for(s=b;s<c;++s)this.h(a,s,d)},
S(a,b,c,d,e){var s,r,q,p,o=A.a_(a)
o.k("k<r.E>").a(d)
A.ar(b,c,this.gt(a))
s=c-b
if(s===0)return
A.aG(e,"skipCount")
if(o.k("l<r.E>").b(d)){r=e
q=d}else{q=J.kC(d,e).a4(0,!1)
r=0}o=J.av(q)
if(r+s>o.gt(q))throw A.d(A.kV())
if(r<b)for(p=s-1;p>=0;--p)this.h(a,b+p,o.n(q,r+p))
else for(p=0;p<s;++p)this.h(a,b+p,o.n(q,r+p))},
au(a,b,c,d){return this.S(a,b,c,d,0)},
eP(a,b,c){A.a_(a).k("k<r.E>").a(c)
this.au(a,b,b+c.length,c)},
q(a){return A.jN(a,"[","]")}}
A.d0.prototype={}
A.hu.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.o(a)
r.a=s+": "
r.a+=A.o(b)},
$S:5}
A.a2.prototype={
aJ(a,b){var s,r,q,p=A.w(this)
p.k("~(a2.K,a2.V)").a(b)
for(s=this.gaK(),s=s.gT(s),p=p.k("a2.V");s.A();){r=s.gE()
q=this.n(0,r)
b.$2(r,q==null?p.a(q):q)}},
gt(a){var s=this.gaK()
return s.gt(s)},
gak(a){var s=this.gaK()
return s.gak(s)},
gaC(){var s=A.w(this)
return new A.du(this,s.k("@<a2.K>").G(s.k("a2.V")).k("du<1,2>"))},
q(a){return A.jT(this)},
$iaj:1}
A.du.prototype={
gt(a){var s=this.a
return s.gt(s)},
gaz(a){var s=this.a,r=s.gaK()
r=s.n(0,r.gaz(r))
return r==null?this.$ti.z[1].a(r):r},
gT(a){var s=this.a,r=this.$ti,q=s.gaK()
return new A.dv(q.gT(q),s,r.k("@<1>").G(r.z[1]).k("dv<1,2>"))}}
A.dv.prototype={
A(){var s=this,r=s.a
if(r.A()){s.sbr(s.b.n(0,r.gE()))
return!0}s.sbr(null)
return!1},
gE(){var s=this.c
return s==null?this.$ti.z[1].a(s):s},
sbr(a){this.c=this.$ti.k("2?").a(a)},
$iH:1}
A.da.prototype={
a4(a,b){return A.hs(this,!0,this.$ti.c)},
aN(a){return this.a4(a,!0)},
b7(a,b,c){var s=this.$ti
return new A.bx(this,s.G(c).k("1(2)").a(b),s.k("@<1>").G(c).k("bx<1,2>"))},
q(a){return A.jN(this,"{","}")},
b8(a,b){var s=this.$ti
return new A.Z(this,s.k("E(1)").a(b),s.k("Z<1>"))},
aD(a,b){return A.lm(this,b,this.$ti.c)},
gaz(a){var s,r=A.oF(this,this.r,this.$ti.c)
if(!r.A())throw A.d(A.bB())
s=r.d
return s==null?r.$ti.c.a(s):s}}
A.dB.prototype={$iq:1,$ik:1,$ik_:1}
A.dt.prototype={}
A.dJ.prototype={}
A.i1.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:19}
A.i0.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:19}
A.fw.prototype={
bh(a){var s,r,q=A.ar(0,null,a.length)-0,p=new Uint8Array(q)
for(s=0;s<q;++s){r=B.h.b0(a,s)
if((r&4294967040)!==0)throw A.d(A.jF(a,"string","Contains invalid characters."))
if(!(s<q))return A.a(p,s)
p[s]=r}return p}}
A.fv.prototype={
bh(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.ar(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)!==0){if(!this.a)throw A.d(A.jJ("Invalid value in input: "+p,null,null))
return this.fR(a,0,r)}}return A.hQ(a,0,r)},
fR(a,b,c){var s,r,q,p
t.L.a(a)
for(s=a.length,r=b,q="";r<c;++r){if(!(r<s))return A.a(a,r)
p=a[r]
q+=A.G((p&4294967040)!==0?65533:p)}return q.charCodeAt(0)==0?q:q}}
A.bW.prototype={}
A.aN.prototype={}
A.dY.prototype={}
A.cY.prototype={
q(a){var s=A.cw(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ex.prototype={
q(a){return"Cyclic error in JSON stringify"}}
A.ew.prototype={
en(a,b){var s
t.dA.a(b)
s=this.gj4()
s=A.lJ(a,s.b,s.a)
return s},
gj4(){return B.b1}}
A.ey.prototype={}
A.j_.prototype={
d1(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=B.h.b0(a,q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(B.h.b0(a,n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(B.h.bD(a,o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.h.bW(a,r,q)
r=q+1
o=s.a+=A.G(92)
o+=A.G(117)
s.a=o
o+=A.G(100)
s.a=o
n=p>>>8&15
o+=A.G(n<10?48+n:87+n)
s.a=o
n=p>>>4&15
o+=A.G(n<10?48+n:87+n)
s.a=o
n=p&15
s.a=o+A.G(n<10?48+n:87+n)}}continue}if(p<32){if(q>r)s.a+=B.h.bW(a,r,q)
r=q+1
o=s.a+=A.G(92)
switch(p){case 8:s.a=o+A.G(98)
break
case 9:s.a=o+A.G(116)
break
case 10:s.a=o+A.G(110)
break
case 12:s.a=o+A.G(102)
break
case 13:s.a=o+A.G(114)
break
default:o+=A.G(117)
s.a=o
o+=A.G(48)
s.a=o
o+=A.G(48)
s.a=o
n=p>>>4&15
o+=A.G(n<10?48+n:87+n)
s.a=o
n=p&15
s.a=o+A.G(n<10?48+n:87+n)
break}}else if(p===34||p===92){if(q>r)s.a+=B.h.bW(a,r,q)
r=q+1
o=s.a+=A.G(92)
s.a=o+A.G(p)}}if(r===0)s.a+=a
else if(r<m)s.a+=B.h.bW(a,r,m)},
co(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.ex(a,null))}B.b.v(s,a)},
b9(a){var s,r,q,p,o=this
if(o.eH(a))return
o.co(a)
try{s=o.b.$1(a)
if(!o.eH(s)){q=A.l1(a,null,o.gdV())
throw A.d(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.a3(p)
q=A.l1(a,r,o.gdV())
throw A.d(q)}},
eH(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.q(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.d1(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.co(a)
q.eI(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.co(a)
r=q.eJ(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
eI(a){var s,r,q=this.c
q.a+="["
s=J.av(a)
if(s.ges(a)){this.b9(s.n(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.b9(s.n(a,r))}}q.a+="]"},
eJ(a){var s,r,q,p,o,n,m=this,l={}
if(a.gak(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.W(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aJ(0,new A.j0(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.d1(A.aH(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.b9(r[n])}p.a+="}"
return!0}}
A.j0.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.h(s,r.a++,a)
B.b.h(s,r.a++,b)},
$S:5}
A.iX.prototype={
eI(a){var s,r=this,q=J.av(a),p=q.gak(a),o=r.c,n=o.a
if(p)o.a=n+"[]"
else{o.a=n+"[\n"
r.bP(++r.a$)
r.b9(q.n(a,0))
for(s=1;s<q.gt(a);++s){o.a+=",\n"
r.bP(r.a$)
r.b9(q.n(a,s))}o.a+="\n"
r.bP(--r.a$)
o.a+="]"}},
eJ(a){var s,r,q,p,o,n,m=this,l={}
if(a.gak(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.W(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aJ(0,new A.iY(l,r))
if(!l.b)return!1
p=m.c
p.a+="{\n";++m.a$
for(o="";q<s;q+=2,o=",\n"){p.a+=o
m.bP(m.a$)
p.a+='"'
m.d1(A.aH(r[q]))
p.a+='": '
n=q+1
if(!(n<s))return A.a(r,n)
m.b9(r[n])}p.a+="\n"
m.bP(--m.a$)
p.a+="}"
return!0}}
A.iY.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.h(s,r.a++,a)
B.b.h(s,r.a++,b)},
$S:5}
A.fo.prototype={
gdV(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iZ.prototype={
bP(a){var s,r,q
for(s=this.f,r=this.c,q=0;q<a;++q)r.a+=s}}
A.ez.prototype={
ce(a){var s
t.L.a(a)
s=B.b2.bh(a)
return s}}
A.eB.prototype={}
A.eA.prototype={}
A.fc.prototype={
bh(a){var s,r
t.L.a(a)
s=this.a
r=A.nK(s,a,0,null)
if(r!=null)return r
return new A.ja(s).iU(a,0,null,!0)}}
A.ja.prototype={
iU(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.ar(b,c,a.length)
if(b===s)return""
r=A.oX(a,b,s)
q=n.ct(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.oY(p)
n.b=0
throw A.d(A.jJ(o,a,b+n.c))}return q},
ct(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.I(b+c,2)
r=q.ct(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ct(a,s,c,d)}return q.iZ(a,b,c,d)},
iZ(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.bI(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.a(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.h.b0("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.h.b0(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.G(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.G(j)
break
case 65:g.a+=A.G(j);--f
break
default:p=g.a+=A.G(j)
g.a=p+A.G(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(!(f>=0&&f<e))return A.a(a,f)
s=a[f]}o=f+1
if(!(f>=0&&f<e))return A.a(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(!(o>=0&&o<e))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(!(l<e))return A.a(a,l)
g.a+=A.G(a[l])}else g.a+=A.hQ(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.G(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.fz.prototype={}
A.bw.prototype={
a0(a,b){if(b==null)return!1
return b instanceof A.bw&&this.a===b.a&&this.b===b.b},
gH(a){var s=this.a
return(s^B.a.i(s,30))&1073741823},
jI(){if(this.b)return this
return A.mX(this.a,!0)},
q(a){var s=this,r=A.kK(A.eQ(s)),q=A.aO(A.le(s)),p=A.aO(A.la(s)),o=A.aO(A.lb(s)),n=A.aO(A.ld(s)),m=A.aO(A.lf(s)),l=A.kL(A.lc(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l},
jH(){var s=this,r=A.eQ(s)>=-9999&&A.eQ(s)<=9999?A.kK(A.eQ(s)):A.mY(A.eQ(s)),q=A.aO(A.le(s)),p=A.aO(A.la(s)),o=A.aO(A.lb(s)),n=A.aO(A.ld(s)),m=A.aO(A.lf(s)),l=A.kL(A.lc(s)),k=r+"-"+q
if(s.b)return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+"T"+o+":"+n+":"+m+"."+l}}
A.iD.prototype={}
A.z.prototype={
gbU(){return A.ao(this.$thrownJsError)}}
A.cr.prototype={
q(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cw(s)
return"Assertion failed"}}
A.bi.prototype={}
A.eK.prototype={
q(a){return"Throw of null."}}
A.aE.prototype={
gcz(){return"Invalid argument"+(!this.a?"(s)":"")},
gcw(){return""},
q(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.o(p),n=s.gcz()+q+o
if(!s.a)return n
return n+s.gcw()+": "+A.cw(s.b)}}
A.d9.prototype={
gcz(){return"RangeError"},
gcw(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.eb.prototype={
gcz(){return"RangeError"},
gcw(){if(A.u(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.fb.prototype={
q(a){return"Unsupported operation: "+this.a}}
A.f8.prototype={
q(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.c7.prototype={
q(a){return"Bad state: "+this.a}}
A.dW.prototype={
q(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cw(s)+"."}}
A.eL.prototype={
q(a){return"Out of Memory"},
gbU(){return null},
$iz:1}
A.dd.prototype={
q(a){return"Stack Overflow"},
gbU(){return null},
$iz:1}
A.dX.prototype={
q(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.iH.prototype={
q(a){return"Exception: "+this.a}}
A.e4.prototype={
q(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.c
return q!=null?r+(" (at offset "+A.o(q)+")"):r}}
A.k.prototype={
b7(a,b,c){var s=A.w(this)
return A.l6(this,s.G(c).k("1(k.E)").a(b),s.k("k.E"),c)},
b8(a,b){var s=A.w(this)
return new A.Z(this,s.k("E(k.E)").a(b),s.k("Z<k.E>"))},
b5(a,b){var s
A.w(this).k("E(k.E)").a(b)
for(s=this.gT(this);s.A();)if(!A.b5(b.$1(s.gE())))return!1
return!0},
a4(a,b){return A.hs(this,b,A.w(this).k("k.E"))},
aN(a){return this.a4(a,!0)},
gt(a){var s,r=this.gT(this)
for(s=0;r.A();)++s
return s},
gak(a){return!this.gT(this).A()},
aD(a,b){return A.lm(this,b,A.w(this).k("k.E"))},
gaz(a){var s=this.gT(this)
if(!s.A())throw A.d(A.bB())
return s.gE()},
aq(a,b){var s,r,q
A.aG(b,"index")
for(s=this.gT(this),r=0;s.A();){q=s.gE()
if(b===r)return q;++r}throw A.d(A.hf(b,this,"index",null,r))},
q(a){return A.nm(this,"(",")")}}
A.dq.prototype={
aq(a,b){var s=this.a
if(0>b||b>=s)A.D(A.hf(b,this,"index",null,s))
return this.b.$1(b)},
gt(a){return this.a}}
A.H.prototype={}
A.L.prototype={
gH(a){return A.t.prototype.gH.call(this,this)},
q(a){return"null"}}
A.t.prototype={$it:1,
a0(a,b){return this===b},
gH(a){return A.d6(this)},
q(a){return"Instance of '"+A.hE(this)+"'"},
toString(){return this.q(this)}}
A.ft.prototype={
q(a){return""},
$ibh:1}
A.bI.prototype={
gt(a){return this.a.length},
q(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$inG:1}
A.bu.prototype={$ibu:1}
A.bX.prototype={$ibX:1}
A.fX.prototype={
q(a){return String(a)}}
A.i.prototype={$ii:1}
A.aQ.prototype={
cQ(a,b,c,d){t.A.a(c)
if(c!=null)this.fG(a,b,c,!1)},
fG(a,b,c,d){return a.addEventListener(b,A.bQ(t.A.a(c),1),!1)},
iw(a,b,c,d){return a.removeEventListener(b,A.bQ(t.A.a(c),1),!1)},
$iaQ:1}
A.bZ.prototype={$ibZ:1}
A.aX.prototype={$iaX:1}
A.bd.prototype={
cQ(a,b,c,d){t.A.a(c)
if(b==="message")a.start()
this.eZ(a,b,c,!1)},
ew(a,b,c){t.ha.a(c)
if(c!=null){this.hZ(a,new A.fu([],[]).aO(b),c)
return}a.postMessage(new A.fu([],[]).aO(b))
return},
jo(a,b){return this.ew(a,b,null)},
hZ(a,b,c){return a.postMessage(b,t.ew.a(c))},
$ibd:1}
A.bl.prototype={}
A.jG.prototype={}
A.iE.prototype={}
A.dp.prototype={
cS(){var s,r=this,q=r.b
if(q==null)return $.ky()
s=r.d
if(s!=null)J.mH(q,r.c,t.A.a(s),!1)
r.b=null
r.shM(null)
return $.ky()},
shM(a){this.d=t.A.a(a)}}
A.iG.prototype={
$1(a){return this.a.$1(t.W.a(a))},
$S:28}
A.j4.prototype={
bi(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.v(r,a)
B.b.v(this.b,null)
return q},
aO(a){var s,r,q,p=this,o={}
if(a==null)return a
if(A.dK(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof A.bw)return new Date(a.a)
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=p.bi(a)
r=p.b
if(!(s<r.length))return A.a(r,s)
q=o.a=r[s]
if(q!=null)return q
q={}
o.a=q
B.b.h(r,s,q)
a.aJ(0,new A.j5(o,p))
return o.a}if(t.j.b(a)){s=p.bi(a)
o=p.b
if(!(s<o.length))return A.a(o,s)
q=o[s]
if(q!=null)return q
return p.iV(a,s)}if(t.eH.b(a)){s=p.bi(a)
r=p.b
if(!(s<r.length))return A.a(r,s)
q=o.b=r[s]
if(q!=null)return q
q={}
o.b=q
B.b.h(r,s,q)
p.ja(a,new A.j6(o,p))
return o.b}throw A.d(A.f9("structured clone of other type"))},
iV(a,b){var s,r=J.av(a),q=r.gt(a),p=new Array(q)
B.b.h(this.b,b,p)
for(s=0;s<q;++s)B.b.h(p,s,this.aO(r.n(a,s)))
return p}}
A.j5.prototype={
$2(a,b){this.a.a[a]=this.b.aO(b)},
$S:17}
A.j6.prototype={
$2(a,b){this.a.b[a]=this.b.aO(b)},
$S:24}
A.iv.prototype={
bi(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.v(r,a)
B.b.v(this.b,null)
return q},
aO(a){var s,r,q,p,o,n,m,l,k,j=this,i={}
if(a==null)return a
if(A.dK(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.D(A.bS("DateTime is outside valid range: "+s,null))
A.ck(!0,"isUtc",t.v)
return new A.bw(s,!0)}if(a instanceof RegExp)throw A.d(A.f9("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.q1(a,t.z)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=j.bi(a)
r=j.b
if(!(p<r.length))return A.a(r,p)
o=i.a=r[p]
if(o!=null)return o
n=t.z
o=A.F(n,n)
i.a=o
B.b.h(r,p,o)
j.j9(a,new A.iw(i,j))
return i.a}if(a instanceof Array){m=a
p=j.bi(m)
r=j.b
if(!(p<r.length))return A.a(r,p)
o=r[p]
if(o!=null)return o
n=J.av(m)
l=n.gt(m)
o=j.c?new Array(l):m
B.b.h(r,p,o)
for(r=J.S(o),k=0;k<l;++k)r.h(o,k,j.aO(n.n(m,k)))
return o}return a},
ek(a,b){this.c=!0
return this.aO(a)}}
A.iw.prototype={
$2(a,b){var s=this.a.a,r=this.b.aO(b)
J.n(s,a,r)
return r},
$S:23}
A.fu.prototype={
ja(a,b){var s,r,q,p
t.g2.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
A.fg.prototype={
j9(a,b){var s,r,q,p
t.g2.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.aK)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.jA.prototype={
$1(a){return this.a.cc(this.b.k("0/?").a(a))},
$S:3}
A.jB.prototype={
$1(a){if(a==null)return this.a.ej(new A.hw(a===undefined))
return this.a.ej(a)},
$S:3}
A.hw.prototype={
q(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.fF.prototype={}
A.ee.prototype={}
A.ed.prototype={
gt(a){var s=this.e
s===$&&A.c("_length")
return s-(this.b-this.c)},
gbI(){var s=this.b,r=this.e
r===$&&A.c("_length")
return s>=this.c+r},
u(){var s=this.a,r=this.b++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
U(a){var s,r,q,p=this,o=p.c,n=p.b-o+o
if(a<0){s=p.e
s===$&&A.c("_length")
r=s-(n-o)}else r=a
q=A.bA(p.a,p.d,r,n)
p.b=p.b+q.gt(q)
return q},
j(){var s,r,q,p,o=this,n=o.a,m=o.b,l=o.b=m+1,k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.Y()
s=m&255
m=o.b=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.Y()
r=l&255
l=o.b=m+1
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.Y()
q=m&255
o.b=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.Y()
p=l&255
if(o.d===1)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
P(){var s,r,q,p,o=this,n=o.gt(o),m=o.a
if(t.D.b(m)){s=o.b
r=m.length
if(s+n>r)n=r-s
return A.I(m.buffer,m.byteOffset+s,n)}s=o.b
q=s+n
p=m.length
return new Uint8Array(A.cg(J.fE(m,s,q>p?p:q)))}}
A.hA.prototype={}
A.hy.prototype={
F(a){var s,r,q=this
if(q.a===q.c.length)q.hN()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
ci(a,b){var s,r,q,p,o=this
t.L.a(a)
if(b==null)b=a.length
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.cL(r-p)
B.i.au(q,s,r,a)
o.a+=b},
a6(a){return this.ci(a,null)},
jP(a){var s,r,q,p,o=this,n=a.c
while(!0){s=o.a
r=a.e
r===$&&A.c("_length")
r=s+(r-(a.b-n))
q=o.c
p=q.length
if(!(r>p))break
o.cL(r-p)}B.i.S(q,s,s+a.gt(a),a.a,a.b)
o.a=o.a+a.gt(a)},
ac(a){var s=this
if(s.b===1){s.F(a>>>24&255)
s.F(a>>>16&255)
s.F(a>>>8&255)
s.F(a&255)
return}s.F(a&255)
s.F(a>>>8&255)
s.F(a>>>16&255)
s.F(a>>>24&255)},
d6(a,b){var s=this
if(a<0)a=s.a+a
if(b==null)b=s.a
else if(b<0)b=s.a+b
return A.I(s.c.buffer,a,b-a)},
R(a){return this.d6(a,null)},
cL(a){var s=a!=null?a>32768?a:32768:32768,r=this.c,q=r.length,p=new Uint8Array((q+s)*2)
B.i.au(p,0,q,r)
this.c=p},
hN(){return this.cL(null)},
gt(a){return this.a}}
A.jc.prototype={
bE(a,b){var s,r,q,p,o=a.u(),n=a.u(),m=o&8
B.a.i(o,3)
if(m!==8)throw A.d(A.cp("Only DEFLATE compression supported: "+m))
if(B.a.N((o<<8>>>0)+n,31)!==0)throw A.d(A.cp("Invalid FCHECK"))
if((n>>>5&1)!==0){a.j()
throw A.d(A.cp("FDICT Encoding not currently supported"))}s=A.c1(B.af)
r=A.c1(B.ar)
q=A.hz(0,null)
r=new A.ec(a,q,s,r)
r.b=!0
r.dJ()
p=t.L.a(A.I(q.c.buffer,0,q.a))
a.j()
return p}}
A.fU.prototype={
hb(a){var s,r,q,p,o=this
if(a>4||!1)throw A.d(A.cp("Invalid Deflate Parameter"))
s=o.x
s===$&&A.c("_pending")
if(s!==0)o.c2()
if(o.c.gbI()){s=o.k3
s===$&&A.c("_lookAhead")
if(s===0)s=a!==0&&o.e!==666
else s=!0}else s=!0
if(s){switch($.aq.bx().e){case 0:r=o.he(a)
break
case 1:r=o.hc(a)
break
case 2:r=o.hd(a)
break
default:r=-1
break}s=r===2
if(s||r===3)o.e=666
if(r===0||s)return 0
if(r===1){if(a===1){o.Z(2,3)
o.bg(256,B.K)
o.ee()
s=o.aI
s===$&&A.c("_lastEOBLen")
q=o.ai
q===$&&A.c("_numValidBits")
if(1+s+10-q<9){o.Z(2,3)
o.bg(256,B.K)
o.ee()}o.aI=7}else{o.e9(0,0,!1)
if(a===3){s=o.db
s===$&&A.c("_hashSize")
q=o.cx
p=0
for(;p<s;++p){q===$&&A.c("_head")
if(!(p<q.length))return A.a(q,p)
q[p]=0}}}o.c2()}}if(a!==4)return 0
return 1},
hH(){var s,r,q,p=this,o=p.as
o===$&&A.c("_windowSize")
p.ch=2*o
o=p.cx
o===$&&A.c("_head")
s=p.db
s===$&&A.c("_hashSize");--s
r=o.length
if(!(s>=0&&s<r))return A.a(o,s)
o[s]=0
for(q=0;q<s;++q){if(!(q<r))return A.a(o,q)
o[q]=0}p.k3=p.fx=p.k1=0
p.fy=p.k4=2
p.cy=p.id=0},
dK(){var s,r,q,p,o=this,n="_dynamicLengthTree"
for(s=o.p2,r=0;r<286;++r){s===$&&A.c(n)
q=r*2
if(!(q<1146))return A.a(s,q)
s[q]=0}for(q=o.p3,r=0;r<30;++r){q===$&&A.c("_dynamicDistTree")
p=r*2
if(!(p<122))return A.a(q,p)
q[p]=0}for(q=o.p4,r=0;r<19;++r){q===$&&A.c("_bitLengthTree")
p=r*2
if(!(p<78))return A.a(q,p)
q[p]=0}s===$&&A.c(n)
s[512]=1
o.ah=o.aV=o.a9=o.aH=0},
cM(a,b){var s,r,q,p,o,n=this.to
if(!(b>=0&&b<573))return A.a(n,b)
s=n[b]
r=b<<1>>>0
q=this.xr
while(!0){p=this.x1
p===$&&A.c("_heapLen")
if(!(r<=p))break
if(r<p){p=r+1
if(!(p>=0&&p<573))return A.a(n,p)
p=n[p]
if(!(r>=0&&r<573))return A.a(n,r)
p=A.kM(a,p,n[r],q)}else p=!1
if(p)++r
if(!(r>=0&&r<573))return A.a(n,r)
if(A.kM(a,s,n[r],q))break
p=n[r]
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=p
o=r<<1>>>0
b=r
r=o}if(!(b>=0&&b<573))return A.a(n,b)
n[b]=s},
e3(a,b){var s,r,q,p,o,n,m,l,k,j="_bitLengthTree",i=a.length
if(1>=i)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}p=(b+1)*2+1
if(!(p>=0&&p<i))return A.a(a,p)
a[p]=65535
for(p=this.p4,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<i))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else if(m<q){p===$&&A.c(j)
l=s*2
if(!(l>=0&&l<78))return A.a(p,l)
p[l]=p[l]+m}else if(s!==0){if(s!==n){p===$&&A.c(j)
l=s*2
if(!(l>=0&&l<78))return A.a(p,l)
p[l]=p[l]+1}p===$&&A.c(j)
p[32]=p[32]+1}else if(m<=10){p===$&&A.c(j)
p[34]=p[34]+1}else{p===$&&A.c(j)
p[36]=p[36]+1}if(k===0){r=138
q=3}else if(s===k){r=6
q=3}else{r=7
q=4}n=s
m=0}},
fK(){var s,r,q=this,p=q.p2
p===$&&A.c("_dynamicLengthTree")
s=q.R8.b
s===$&&A.c("maxCode")
q.e3(p,s)
s=q.p3
s===$&&A.c("_dynamicDistTree")
p=q.RG.b
p===$&&A.c("maxCode")
q.e3(s,p)
q.rx.cn(q)
for(p=q.p4,r=18;r>=3;--r){p===$&&A.c("_bitLengthTree")
s=B.N[r]*2+1
if(!(s<78))return A.a(p,s)
if(p[s]!==0)break}p=q.a9
p===$&&A.c("_optimalLen")
q.a9=p+(3*(r+1)+5+5+4)
return r},
iz(a,b,c){var s,r,q,p,o=this
o.Z(a-257,5)
s=b-1
o.Z(s,5)
o.Z(c-4,4)
for(r=0;r<c;++r){q=o.p4
q===$&&A.c("_bitLengthTree")
if(!(r<19))return A.a(B.N,r)
p=B.N[r]*2+1
if(!(p<78))return A.a(q,p)
o.Z(q[p],3)}q=o.p2
q===$&&A.c("_dynamicLengthTree")
o.e4(q,a-1)
q=o.p3
q===$&&A.c("_dynamicDistTree")
o.e4(q,s)},
e4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_bitLengthTree",e=a.length
if(1>=e)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}for(p=t.L,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<e))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else if(m<q){l=s*2
j=l+1
do{i=g.p4
i===$&&A.c(f)
p.a(i)
if(!(l>=0&&l<78))return A.a(i,l)
h=i[l]
if(!(j>=0&&j<78))return A.a(i,j)
g.Z(h&65535,i[j]&65535)}while(--m,m!==0)}else if(s!==0){if(s!==n){l=g.p4
l===$&&A.c(f)
p.a(l)
j=s*2
if(!(j>=0&&j<78))return A.a(l,j)
i=l[j];++j
if(!(j<78))return A.a(l,j)
g.Z(i&65535,l[j]&65535);--m}l=g.p4
l===$&&A.c(f)
p.a(l)
g.Z(l[32]&65535,l[33]&65535)
g.Z(m-3,2)}else{l=g.p4
if(m<=10){l===$&&A.c(f)
p.a(l)
g.Z(l[34]&65535,l[35]&65535)
g.Z(m-3,3)}else{l===$&&A.c(f)
p.a(l)
g.Z(l[36]&65535,l[37]&65535)
g.Z(m-11,7)}}if(k===0){r=138
q=3}else if(s===k){r=6
q=3}else{r=7
q=4}n=s
m=0}},
i5(a,b,c){var s,r,q=this
if(c===0)return
s=q.f
s===$&&A.c("_pendingBuffer")
r=q.x
r===$&&A.c("_pending")
B.i.S(s,r,r+c,a,b)
q.x=q.x+c},
ae(a){var s,r=this.f
r===$&&A.c("_pendingBuffer")
s=this.x
s===$&&A.c("_pending")
this.x=s+1
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a},
bg(a,b){var s,r,q
t.L.a(b)
s=a*2
r=b.length
if(!(s>=0&&s<r))return A.a(b,s)
q=b[s];++s
if(!(s<r))return A.a(b,s)
this.Z(q&65535,b[s]&65535)},
Z(a,b){var s,r=this,q="_bitBuffer",p=r.ai
p===$&&A.c("_numValidBits")
s=r.ab
if(p>16-b){s===$&&A.c(q)
p=r.ab=(s|B.a.D(a,p)&65535)>>>0
r.ae(p)
r.ae(A.ac(p,8))
p=r.ai
r.ab=A.ac(a,16-p)
r.ai=p+(b-16)}else{s===$&&A.c(q)
r.ab=(s|B.a.D(a,p)&65535)>>>0
r.ai=p+b}},
bz(a,b){var s,r,q,p,o,n,m=this,l="_dynamicLengthTree",k="_matches",j="_dynamicDistTree",i=m.f
i===$&&A.c("_pendingBuffer")
s=m.ar
s===$&&A.c("_dbuf")
r=m.ah
r===$&&A.c("_lastLit")
s+=r*2
q=A.ac(a,8)
p=i.length
if(!(s<p))return A.a(i,s)
i[s]=q;++s
if(!(s<p))return A.a(i,s)
i[s]=a
s=m.y1
s===$&&A.c("_lbuf")
s+=r
if(!(s<p))return A.a(i,s)
i[s]=b
m.ah=r+1
if(a===0){i=m.p2
i===$&&A.c(l)
s=b*2
if(!(s>=0&&s<1146))return A.a(i,s)
i[s]=i[s]+1}else{i=m.aV
i===$&&A.c(k)
m.aV=i+1
i=m.p2
i===$&&A.c(l)
if(!(b>=0&&b<256))return A.a(B.X,b)
s=(B.X[b]+256+1)*2
if(!(s<1146))return A.a(i,s)
i[s]=i[s]+1
s=m.p3
s===$&&A.c(j)
i=A.lG(a-1)*2
if(!(i<122))return A.a(s,i)
s[i]=s[i]+1}i=m.ah
if((i&8191)===0){s=m.ok
s===$&&A.c("_level")
s=s>2}else s=!1
if(s){o=i*8
s=m.k1
s===$&&A.c("_strStart")
r=m.fx
r===$&&A.c("_blockStart")
for(q=m.p3,n=0;n<30;++n){q===$&&A.c(j)
p=n*2
if(!(p<122))return A.a(q,p)
o+=q[p]*(5+B.z[n])}o=A.ac(o,3)
q=m.aV
q===$&&A.c(k)
if(q<i/2&&o<(s-r)/2)return!0}s=m.y2
s===$&&A.c("_litBufferSize")
return i===s-1},
dn(a,b){var s,r,q,p,o,n,m,l,k=this,j=t.L
j.a(a)
j.a(b)
j=k.ah
j===$&&A.c("_lastLit")
if(j!==0){s=0
do{j=k.f
j===$&&A.c("_pendingBuffer")
r=k.ar
r===$&&A.c("_dbuf")
r+=s*2
q=j.length
if(!(r<q))return A.a(j,r)
p=j[r];++r
if(!(r<q))return A.a(j,r)
o=p<<8&65280|j[r]&255
r=k.y1
r===$&&A.c("_lbuf")
r+=s
if(!(r<q))return A.a(j,r)
n=j[r]&255;++s
if(o===0)k.bg(n,a)
else{m=B.X[n]
k.bg(m+256+1,a)
if(!(m<29))return A.a(B.Z,m)
l=B.Z[m]
if(l!==0)k.Z(n-B.ec[m],l);--o
m=A.lG(o)
k.bg(m,b)
if(!(m<30))return A.a(B.z,m)
l=B.z[m]
if(l!==0)k.Z(o-B.cD[m],l)}}while(s<k.ah)}k.bg(256,a)
if(513>=a.length)return A.a(a,513)
k.aI=a[513]},
eQ(){var s,r,q,p,o,n="_dynamicLengthTree"
for(s=this.p2,r=0,q=0;r<7;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}for(o=0;r<128;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
o+=s[p];++r}for(;r<256;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}this.y=q>A.ac(o,2)?0:1},
ee(){var s=this,r="_bitBuffer",q=s.ai
q===$&&A.c("_numValidBits")
if(q===16){q=s.ab
q===$&&A.c(r)
s.ae(q)
s.ae(A.ac(q,8))
s.ai=s.ab=0}else if(q>=8){q=s.ab
q===$&&A.c(r)
s.ae(q)
s.ab=A.ac(s.ab,8)
s.ai=s.ai-8}},
dh(){var s=this,r="_bitBuffer",q=s.ai
q===$&&A.c("_numValidBits")
if(q>8){q=s.ab
q===$&&A.c(r)
s.ae(q)
s.ae(A.ac(q,8))}else if(q>0){q=s.ab
q===$&&A.c(r)
s.ae(q)}s.ai=s.ab=0},
aS(a){var s,r,q,p,o,n=this,m=n.fx
m===$&&A.c("_blockStart")
if(m>=0)s=m
else s=-1
r=n.k1
r===$&&A.c("_strStart")
m=r-m
r=n.ok
r===$&&A.c("_level")
if(r>0){if(n.y===2)n.eQ()
n.R8.cn(n)
n.RG.cn(n)
q=n.fK()
r=n.a9
r===$&&A.c("_optimalLen")
p=A.ac(r+3+7,3)
r=n.aH
r===$&&A.c("_staticLen")
o=A.ac(r+3+7,3)
if(o<=p)p=o}else{o=m+5
p=o
q=0}if(m+4<=p&&s!==-1)n.e9(s,m,a)
else if(o===p){n.Z(2+(a?1:0),3)
n.dn(B.K,B.ax)}else{n.Z(4+(a?1:0),3)
m=n.R8.b
m===$&&A.c("maxCode")
s=n.RG.b
s===$&&A.c("maxCode")
n.iz(m+1,s+1,q+1)
s=n.p2
s===$&&A.c("_dynamicLengthTree")
m=n.p3
m===$&&A.c("_dynamicDistTree")
n.dn(s,m)}n.dK()
if(a)n.dh()
n.fx=n.k1
n.c2()},
he(a){var s,r,q,p,o,n=this,m=n.r
m===$&&A.c("_pendingBufferSize")
s=m-5
s=65535>s?s:65535
for(m=a===0;!0;){r=n.k3
r===$&&A.c("_lookAhead")
if(r<=1){n.cB()
r=n.k3
q=r===0
if(q&&m)return 0
if(q)break}q=n.k1
q===$&&A.c("_strStart")
r=n.k1=q+r
n.k3=0
q=n.fx
q===$&&A.c("_blockStart")
p=q+s
if(r>=p){n.k3=r-p
n.k1=p
n.aS(!1)}r=n.k1
q=n.fx
o=n.as
o===$&&A.c("_windowSize")
if(r-q>=o-262)n.aS(!1)}m=a===4
n.aS(m)
return m?3:1},
e9(a,b,c){var s,r=this
r.Z(c?1:0,3)
r.dh()
r.aI=8
r.ae(b)
r.ae(A.ac(b,8))
s=(~b>>>0)+65536&65535
r.ae(s)
r.ae(A.ac(s,8))
s=r.ay
s===$&&A.c("_window")
r.i5(s,a,b)},
cB(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_windowSize",f=h.c
do{s=h.ch
s===$&&A.c("_actualWindowSize")
r=h.k3
r===$&&A.c("_lookAhead")
q=h.k1
q===$&&A.c("_strStart")
p=s-r-q
if(p===0&&q===0&&r===0){s=h.as
s===$&&A.c(g)
p=s}else{s=h.as
s===$&&A.c(g)
if(q>=s+s-262){r=h.ay
r===$&&A.c("_window")
B.i.S(r,0,s,r,s)
s=h.k2
o=h.as
h.k2=s-o
h.k1=h.k1-o
s=h.fx
s===$&&A.c("_blockStart")
h.fx=s-o
s=h.db
s===$&&A.c("_hashSize")
r=h.cx
r===$&&A.c("_head")
q=r.length
n=s
m=n
do{--n
if(!(n>=0&&n<q))return A.a(r,n)
l=r[n]&65535
r[n]=l>=o?l-o:0}while(--m,m!==0)
s=h.CW
s===$&&A.c("_prev")
r=s.length
n=o
m=n
do{--n
if(!(n>=0&&n<r))return A.a(s,n)
l=s[n]&65535
s[n]=l>=o?l-o:0}while(--m,m!==0)
p+=o}}if(f.gbI())return
s=h.ay
s===$&&A.c("_window")
m=h.i8(s,h.k1+h.k3,p)
s=h.k3=h.k3+m
if(s>=3){r=h.ay
q=h.k1
k=r.length
if(q>>>0!==q||q>=k)return A.a(r,q)
j=r[q]&255
h.cy=j
i=h.fr
i===$&&A.c("_hashShift")
i=B.a.D(j,i);++q
if(!(q<k))return A.a(r,q)
q=r[q]
r=h.dy
r===$&&A.c("_hashMask")
h.cy=((i^q&255)&r)>>>0}}while(s<262&&!f.gbI())},
hc(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_insertHash",g="_hashShift",f="_window",e="_strStart",d="_hashMask",c="_windowMask"
for(s=a===0,r=0;!0;){q=i.k3
q===$&&A.c("_lookAhead")
if(q<262){i.cB()
q=i.k3
if(q<262&&s)return 0
if(q===0)break}if(q>=3){q=i.cy
q===$&&A.c(h)
p=i.fr
p===$&&A.c(g)
p=B.a.D(q,p)
q=i.ay
q===$&&A.c(f)
o=i.k1
o===$&&A.c(e)
n=o+2
if(!(n>=0&&n<q.length))return A.a(q,n)
n=q[n]
q=i.dy
q===$&&A.c(d)
q=((p^n&255)&q)>>>0
i.cy=q
n=i.cx
n===$&&A.c("_head")
if(!(q<n.length))return A.a(n,q)
p=n[q]
r=p&65535
m=i.CW
m===$&&A.c("_prev")
l=i.ax
l===$&&A.c(c)
l=(o&l)>>>0
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=p
n[q]=o}if(r!==0){q=i.k1
q===$&&A.c(e)
p=i.as
p===$&&A.c("_windowSize")
p=(q-r&65535)<=p-262
q=p}else q=!1
if(q){q=i.p1
q===$&&A.c("_strategy")
if(q!==2)i.fy=i.dO(r)}q=i.fy
q===$&&A.c("_matchLength")
p=i.k1
if(q>=3){p===$&&A.c(e)
k=i.bz(p-i.k2,q-3)
q=i.k3
p=i.fy
q-=p
i.k3=q
o=$.aq.b
if(o==null?$.aq==null:o===$.aq)A.D(A.hp($.aq.a))
if(p<=o.b&&q>=3){q=i.fy=p-1
do{p=i.k1=i.k1+1
o=i.cy
o===$&&A.c(h)
n=i.fr
n===$&&A.c(g)
n=B.a.D(o,n)
o=i.ay
o===$&&A.c(f)
m=p+2
if(!(m>=0&&m<o.length))return A.a(o,m)
m=o[m]
o=i.dy
o===$&&A.c(d)
o=((n^m&255)&o)>>>0
i.cy=o
m=i.cx
m===$&&A.c("_head")
if(!(o<m.length))return A.a(m,o)
n=m[o]
r=n&65535
l=i.CW
l===$&&A.c("_prev")
j=i.ax
j===$&&A.c(c)
j=(p&j)>>>0
if(!(j>=0&&j<l.length))return A.a(l,j)
l[j]=n
m[o]=p}while(q=i.fy=q-1,q!==0)
i.k1=p+1}else{q=i.k1=i.k1+p
i.fy=0
p=i.ay
p===$&&A.c(f)
o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
n=p[q]&255
i.cy=n
m=i.fr
m===$&&A.c(g)
m=B.a.D(n,m);++q
if(!(q<o))return A.a(p,q)
q=p[q]
p=i.dy
p===$&&A.c(d)
i.cy=((m^q&255)&p)>>>0}}else{q=i.ay
q===$&&A.c(f)
p===$&&A.c(e)
if(!(p>=0&&p<q.length))return A.a(q,p)
k=i.bz(0,q[p]&255)
i.k3=i.k3-1
i.k1=i.k1+1}if(k)i.aS(!1)}s=a===4
i.aS(s)
return s?3:1},
hd(a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_insertHash",f="_hashShift",e="_window",d="_strStart",c="_hashMask",b="_windowMask",a="_matchAvailable"
for(s=a0===0,r=0;!0;){q=h.k3
q===$&&A.c("_lookAhead")
if(q<262){h.cB()
q=h.k3
if(q<262&&s)return 0
if(q===0)break}if(q>=3){q=h.cy
q===$&&A.c(g)
p=h.fr
p===$&&A.c(f)
p=B.a.D(q,p)
q=h.ay
q===$&&A.c(e)
o=h.k1
o===$&&A.c(d)
n=o+2
if(!(n>=0&&n<q.length))return A.a(q,n)
n=q[n]
q=h.dy
q===$&&A.c(c)
q=((p^n&255)&q)>>>0
h.cy=q
n=h.cx
n===$&&A.c("_head")
if(!(q<n.length))return A.a(n,q)
p=n[q]
r=p&65535
m=h.CW
m===$&&A.c("_prev")
l=h.ax
l===$&&A.c(b)
l=(o&l)>>>0
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=p
n[q]=o}q=h.fy
q===$&&A.c("_matchLength")
h.k4=q
h.go=h.k2
h.fy=2
if(r!==0){p=$.aq.b
if(p==null?$.aq==null:p===$.aq)A.D(A.hp($.aq.a))
if(q<p.b){q=h.k1
q===$&&A.c(d)
p=h.as
p===$&&A.c("_windowSize")
p=(q-r&65535)<=p-262
q=p}else q=!1}else q=!1
if(q){q=h.p1
q===$&&A.c("_strategy")
if(q!==2){q=h.dO(r)
h.fy=q}else q=2
if(q<=5)if(h.p1!==1)if(q===3){p=h.k1
p===$&&A.c(d)
p=p-h.k2>4096}else p=!1
else p=!0
else p=!1
if(p){h.fy=2
q=2}}else q=2
p=h.k4
if(p>=3&&q<=p){q=h.k1
q===$&&A.c(d)
k=q+h.k3-3
j=h.bz(q-1-h.go,p-3)
p=h.k3
q=h.k4
h.k3=p-(q-1)
q=h.k4=q-2
do{p=h.k1=h.k1+1
if(p<=k){o=h.cy
o===$&&A.c(g)
n=h.fr
n===$&&A.c(f)
n=B.a.D(o,n)
o=h.ay
o===$&&A.c(e)
m=p+2
if(!(m>=0&&m<o.length))return A.a(o,m)
m=o[m]
o=h.dy
o===$&&A.c(c)
o=((n^m&255)&o)>>>0
h.cy=o
m=h.cx
m===$&&A.c("_head")
if(!(o<m.length))return A.a(m,o)
n=m[o]
r=n&65535
l=h.CW
l===$&&A.c("_prev")
i=h.ax
i===$&&A.c(b)
i=(p&i)>>>0
if(!(i>=0&&i<l.length))return A.a(l,i)
l[i]=n
m[o]=p}}while(q=h.k4=q-1,q!==0)
h.id=0
h.fy=2
h.k1=p+1
if(j)h.aS(!1)}else{q=h.id
q===$&&A.c(a)
if(q!==0){q=h.ay
q===$&&A.c(e)
p=h.k1
p===$&&A.c(d);--p
if(!(p>=0&&p<q.length))return A.a(q,p)
if(h.bz(0,q[p]&255))h.aS(!1)
h.k1=h.k1+1
h.k3=h.k3-1}else{h.id=1
q=h.k1
q===$&&A.c(d)
h.k1=q+1
h.k3=h.k3-1}}}s=h.id
s===$&&A.c(a)
if(s!==0){s=h.ay
s===$&&A.c(e)
q=h.k1
q===$&&A.c(d);--q
if(!(q>=0&&q<s.length))return A.a(s,q)
h.bz(0,s[q]&255)
h.id=0}s=a0===4
h.aS(s)
return s?3:1},
dO(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=$.aq.bx().d,a=c.k1
a===$&&A.c("_strStart")
s=c.k4
s===$&&A.c("_prevLength")
r=c.as
r===$&&A.c("_windowSize")
r-=262
q=a>r?a-r:0
p=$.aq.bx().c
r=c.ax
r===$&&A.c("_windowMask")
o=c.k1+258
n=c.ay
n===$&&A.c("_window")
m=a+s
l=m-1
k=n.length
if(!(l>=0&&l<k))return A.a(n,l)
j=n[l]
if(!(m>=0&&m<k))return A.a(n,m)
i=n[m]
if(c.k4>=$.aq.bx().a)b=b>>>2
n=c.k3
n===$&&A.c("_lookAhead")
if(p>n)p=n
h=o-258
g=s
f=a
do{c$0:{a=c.ay
s=a0+g
n=a.length
if(!(s>=0&&s<n))return A.a(a,s)
if(a[s]===i){--s
if(!(s>=0))return A.a(a,s)
if(a[s]===j){if(!(a0>=0&&a0<n))return A.a(a,a0)
s=a[a0]
if(!(f>=0&&f<n))return A.a(a,f)
if(s===a[f]){e=a0+1
if(!(e<n))return A.a(a,e)
s=a[e]
m=f+1
if(!(m<n))return A.a(a,m)
m=s!==a[m]
s=m}else{e=a0
s=!0}}else{e=a0
s=!0}}else{e=a0
s=!0}if(s)break c$0
f+=2;++e
do{++f
if(!(f>=0&&f<n))return A.a(a,f)
s=a[f];++e
if(!(e>=0&&e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
s=s===a[e]&&f<o}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}while(s)
d=258-(o-f)
if(d>g){c.k2=a0
if(d>=p){g=d
break}a=c.ay
s=h+d
n=s-1
m=a.length
if(!(n>=0&&n<m))return A.a(a,n)
j=a[n]
if(!(s<m))return A.a(a,s)
i=a[s]
g=d}f=h}a=c.CW
a===$&&A.c("_prev")
s=a0&r
if(!(s>=0&&s<a.length))return A.a(a,s)
a0=a[s]&65535
if(a0>q){--b
a=b!==0}else a=!1}while(a)
a=c.k3
if(g<=a)return g
return a},
i8(a,b,c){var s,r,q,p,o=this
if(c===0||o.c.gbI())return 0
s=o.c.U(c)
r=s.gt(s)
if(r===0)return 0
q=s.P()
p=q.length
if(r>p)r=p
B.i.au(a,b,b+r,q)
o.b+=r
o.a=A.au(q,o.a)
return r},
c2(){var s,r=this,q=r.x
q===$&&A.c("_pending")
s=r.f
s===$&&A.c("_pendingBuffer")
r.d.ci(s,q)
s=r.w
s===$&&A.c("_pendingOut")
r.w=s+q
q=r.x-q
r.x=q
if(q===0)r.w=0},
hu(a){switch(a){case 0:return new A.at(0,0,0,0,0)
case 1:return new A.at(4,4,8,4,1)
case 2:return new A.at(4,5,16,8,1)
case 3:return new A.at(4,6,32,32,1)
case 4:return new A.at(4,4,16,16,2)
case 5:return new A.at(8,16,32,32,2)
case 6:return new A.at(8,16,128,128,2)
case 7:return new A.at(8,32,128,256,2)
case 8:return new A.at(32,128,258,1024,2)
case 9:return new A.at(32,258,258,4096,2)}throw A.d(A.cp("Invalid Deflate parameter"))}}
A.at.prototype={}
A.iU.prototype={
hr(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="_optimalLen",a3=a1.a
a3===$&&A.c("dynamicTree")
s=a1.c
s===$&&A.c("staticDesc")
r=s.a
q=s.b
p=s.c
o=s.e
for(s=a4.ry,n=0;n<=15;++n)s[n]=0
m=a4.to
l=a4.x2
l===$&&A.c("_heapMax")
if(!(l>=0&&l<573))return A.a(m,l)
k=m[l]*2+1
j=a3.length
if(!(k>=0&&k<j))return A.a(a3,k)
a3[k]=0
for(i=l+1,l=r!=null,k=q.length,h=0;i<573;++i){g=m[i]
f=g*2
e=f+1
if(!(e>=0&&e<j))return A.a(a3,e)
d=a3[e]*2+1
if(!(d>=0&&d<j))return A.a(a3,d)
n=a3[d]+1
if(n>o){++h
n=o}a3[e]=n
d=a1.b
d===$&&A.c("maxCode")
if(g>d)continue
if(!(n>=0&&n<16))return A.a(s,n)
s[n]=s[n]+1
if(g>=p){d=g-p
if(!(d>=0&&d<k))return A.a(q,d)
c=q[d]}else c=0
if(!(f>=0&&f<j))return A.a(a3,f)
b=a3[f]
f=a4.a9
f===$&&A.c(a2)
a4.a9=f+b*(n+c)
if(l){f=a4.aH
f===$&&A.c("_staticLen")
if(!(e<r.length))return A.a(r,e)
a4.aH=f+b*(r[e]+c)}}if(h===0)return
n=o-1
do{a=n
while(!0){if(!(a>=0&&a<16))return A.a(s,a)
l=s[a]
if(!(l===0))break;--a}s[a]=l-1
l=a+1
if(!(l<16))return A.a(s,l)
s[l]=s[l]+2
if(!(o<16))return A.a(s,o)
s[o]=s[o]-1
h-=2}while(h>0)
for(n=o;n!==0;--n){if(!(n>=0))return A.a(s,n)
g=s[n]
for(;g!==0;){--i
if(!(i>=0&&i<573))return A.a(m,i)
a0=m[i]
l=a1.b
l===$&&A.c("maxCode")
if(a0>l)continue
l=a0*2
k=l+1
if(!(k>=0&&k<j))return A.a(a3,k)
f=a3[k]
if(f!==n){e=a4.a9
e===$&&A.c(a2)
if(!(l>=0&&l<j))return A.a(a3,l)
a4.a9=e+(n-f)*a3[l]
a3[k]=n}--g}}},
cn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
c===$&&A.c("dynamicTree")
s=d.c
s===$&&A.c("staticDesc")
r=s.a
q=s.d
a.x1=0
a.x2=573
for(s=c.length,p=a.to,o=a.xr,n=0,m=-1;n<q;++n){l=n*2
if(!(l<s))return A.a(c,l)
if(c[l]!==0){l=++a.x1
if(!(l>=0&&l<573))return A.a(p,l)
p[l]=n
if(!(n<573))return A.a(o,n)
o[n]=0
m=n}else{++l
if(!(l<s))return A.a(c,l)
c[l]=0}}for(l=r!=null;k=a.x1,k<2;){++k
a.x1=k
if(m<2){++m
j=m}else j=0
if(!(k>=0))return A.a(p,k)
p[k]=j
k=j*2
if(!(k>=0&&k<s))return A.a(c,k)
c[k]=1
o[j]=0
i=a.a9
i===$&&A.c("_optimalLen")
a.a9=i-1
if(l){i=a.aH
i===$&&A.c("_staticLen");++k
if(!(k<r.length))return A.a(r,k)
a.aH=i-r[k]}}d.b=m
for(n=B.a.I(k,2);n>=1;--n)a.cM(c,n)
j=q
do{n=p[1]
l=a.x1--
if(!(l>=0&&l<573))return A.a(p,l)
p[1]=p[l]
a.cM(c,1)
h=p[1]
l=--a.x2
if(!(l>=0&&l<573))return A.a(p,l)
p[l]=n;--l
a.x2=l
if(!(l>=0))return A.a(p,l)
p[l]=h
l=j*2
k=n*2
if(!(k>=0&&k<s))return A.a(c,k)
i=c[k]
g=h*2
if(!(g>=0&&g<s))return A.a(c,g)
f=c[g]
if(!(l<s))return A.a(c,l)
c[l]=i+f
if(!(n>=0&&n<573))return A.a(o,n)
f=o[n]
if(!(h>=0&&h<573))return A.a(o,h)
i=o[h]
l=f>i?f:i
if(!(j<573))return A.a(o,j)
o[j]=l+1;++k;++g
if(!(g<s))return A.a(c,g)
c[g]=j
if(!(k<s))return A.a(c,k)
c[k]=j
e=j+1
p[1]=j
a.cM(c,1)
if(a.x1>=2){j=e
continue}else break}while(!0)
s=--a.x2
o=p[1]
if(!(s>=0&&s<573))return A.a(p,s)
p[s]=o
d.hr(a)
A.oB(c,m,a.ry)}}
A.fr.prototype={}
A.h6.prototype={
fg(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
r=a[s]
q=h.b
if(typeof r!=="number")return r.jR()
if(r>q)h.sjg(r)
if(!(s<a.length))return A.a(a,s)
r=a[s]
q=h.c
if(typeof r!=="number")return r.eO()
if(r<q)h.sjk(r)}p=B.a.D(1,h.b)
h.a=new Uint32Array(p)
for(o=1,n=0,m=2;o<=h.b;){for(r=o<<16,s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
if(J.bt(a[s],o)){for(l=n,k=0,j=0;j<o;++j){k=(k<<1|l&1)>>>0
l=l>>>1}for(q=h.a,i=(r|s)>>>0,j=k;j<p;j+=m){if(!(j>=0&&j<q.length))return A.a(q,j)
q[j]=i}++n}}++o
n=n<<1>>>0
m=m<<1>>>0}},
sjg(a){this.b=A.u(a)},
sjk(a){this.c=A.u(a)}}
A.ec.prototype={
dJ(){var s,r,q,p,o=this
o.e=o.d=0
if(!o.b)return
s=o.a
s===$&&A.c("input")
r=s.c
while(!0){q=s.b
p=s.e
p===$&&A.c("_length")
if(!(q<r+p))break
if(!o.hO())break}},
hO(){var s,r=this,q=r.a
q===$&&A.c("input")
if(q.gbI())return!1
s=r.af(3)
switch(B.a.i(s,1)){case 0:if(r.hY()===-1)return!1
break
case 1:if(r.dt(r.r,r.w)===-1)return!1
break
case 2:if(r.hP()===-1)return!1
break
default:return!1}return(s&1)===0},
af(a){var s,r,q,p,o=this
if(a===0)return 0
for(s=o.a;r=o.e,r<a;){s===$&&A.c("input")
q=s.b
p=s.e
p===$&&A.c("_length")
if(q>=s.c+p)return-1
p=s.a
s.b=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
o.d=(o.d|B.a.D(q,r))>>>0
o.e=r+8}s=o.d
q=B.a.B(1,a)
o.d=B.a.L(s,a)
o.e=r-a
return(s&q-1)>>>0},
cN(a){var s,r,q,p,o,n,m,l=this,k=a.a
k===$&&A.c("table")
s=a.b
for(r=l.a;q=l.e,q<s;){r===$&&A.c("input")
p=r.b
o=r.e
o===$&&A.c("_length")
if(p>=r.c+o)return-1
o=r.a
r.b=p+1
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
l.d=(l.d|B.a.D(p,q))>>>0
l.e=q+8}r=l.d
p=(r&B.a.D(1,s)-1)>>>0
if(!(p<k.length))return A.a(k,p)
n=k[p]
m=n>>>16
l.d=B.a.L(r,m)
l.e=q-m
return n&65535},
hY(){var s,r,q=this
q.e=q.d=0
s=q.af(16)
r=q.af(16)
if(s!==0&&s!==(r^65535)>>>0)return-1
r=q.a
r===$&&A.c("input")
if(s>r.gt(r))return-1
q.c.jP(r.U(s))
return 0},
hP(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.af(5)
if(h===-1)return-1
h+=257
if(h>288)return-1
s=i.af(5)
if(s===-1)return-1;++s
if(s>32)return-1
r=i.af(4)
if(r===-1)return-1
r+=4
if(r>19)return-1
q=new Uint8Array(19)
for(p=0;p<r;++p){o=i.af(3)
if(o===-1)return-1
n=B.N[p]
if(!(n<19))return A.a(q,n)
q[n]=o}m=A.c1(q)
n=h+s
l=new Uint8Array(n)
k=A.I(l.buffer,0,h)
j=A.I(l.buffer,h,s)
if(i.fS(n,m,l)===-1)return-1
return i.dt(A.c1(k),A.c1(j))},
dt(a,b){var s,r,q,p,o,n,m,l=this
for(s=l.c;!0;){r=l.cN(a)
if(r<0||r>285)return-1
if(r===256)break
if(r<256){s.F(r&255)
continue}q=r-257
if(!(q>=0&&q<29))return A.a(B.aC,q)
p=B.aC[q]+l.af(B.dg[q])
o=l.cN(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.aw,o)
n=B.aw[o]+l.af(B.z[o])
for(m=-n;p>n;){s.a6(s.R(m))
p-=n}if(p===n)s.a6(s.R(m))
else s.a6(s.d6(m,p-n))}for(s=l.a;m=l.e,m>=8;){l.e=m-8
s===$&&A.c("input")
if(--s.b<0)s.b=0}return 0},
fS(a,b,c){var s,r,q,p,o,n,m,l=this
t.L.a(c)
for(s=c.length,r=0,q=0;q<a;){p=l.cN(b)
if(p===-1)return-1
switch(p){case 16:o=l.af(2)
if(o===-1)return-1
o+=3
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=r}break
case 17:o=l.af(3)
if(o===-1)return-1
o+=3
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
case 18:o=l.af(7)
if(o===-1)return-1
o+=11
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
default:if(p<0||p>15)return-1
m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=p
q=m
r=p
break}}return 0}}
A.it.prototype={}
A.is.prototype={}
A.iu.prototype={
em(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=t.L
g.a(a)
s=A.hz(1,32768)
s.F(120)
for(r=0;q=(r|0)>>>0,(30720+q)%31!==0;)++r
s.F(q)
p=A.pL(a)
o=A.bA(a,1,null,0)
q=A.k9()
n=A.k9()
m=A.k9()
l=new Uint16Array(16)
k=new Uint32Array(573)
j=new Uint8Array(573)
i=A.hz(0,32768)
l=new A.fU(o,i,q,n,m,l,k,j)
if(b==null||b===-1)b=6
if(typeof b!=="number")return b.eO()
if(b<=9)k=!1
else k=!0
if(k)A.D(A.cp("Invalid Deflate parameter"))
$.aq.b=l.hu(b)
k=new Uint16Array(1146)
l.p2=k
j=new Uint16Array(122)
l.p3=j
h=new Uint16Array(78)
l.p4=h
l.at=15
l.as=32768
l.ax=32767
l.dx=15
l.db=32768
l.dy=32767
l.fr=5
l.ay=new Uint8Array(65536)
l.CW=new Uint16Array(32768)
l.cx=new Uint16Array(32768)
l.y2=16384
l.f=new Uint8Array(65536)
l.r=65536
l.ar=16384
l.y1=49152
l.ok=A.u(b)
l.w=l.x=l.p1=0
l.e=113
l.a=0
q.a=k
k=t.bb
q.c=k.a($.mB())
n.a=j
n.c=k.a($.mA())
m.a=h
m.c=k.a($.mz())
l.ai=l.ab=0
l.aI=8
l.dK()
l.hH()
l.hb(4)
l.c2()
s.a6(g.a(A.I(i.c.buffer,0,i.a)))
s.ac(p)
g=A.I(s.c.buffer,0,s.a)
return g},
j3(a){return this.em(a,null)}}
A.jw.prototype={
$1(a){return new A.c9()},
$S:21}
A.c9.prototype={
gjl(){var s,r=this,q=r.a
if(q===$){s=A.cZ([1,new A.hT(r)],t.p,t.eg)
r.a!==$&&A.mg("operations")
r.sfz(s)
q=s}return q},
sfz(a){this.a=t.dx.a(a)},
$ilD:1}
A.hT.prototype={
$1(a){var s,r,q,p,o,n,m
t.gH.a(a)
s=a.x
r=$.a6
if(r!=null){r=r.c
if(r!=null)r.bw(800,"Received getThumbnailCommand in "+A.o(s)+" \xb5s")}s=a.e
r=J.av(s)
q=t.D.a(r.n(s,0))
p=A.u(r.n(s,1))
o=A.pH(q)
n=p/o.x.length
m=[o.a*n,o.b*n]
q=B.c.aU(m[0])
s=new A.hC(6)
s.iG(A.pF(o,B.c.aU(m[1]),q))
s=s.j8()
s.toString
return new Uint8Array(A.cg(s))},
$S:22}
A.bb.prototype={
n(a,b){var s=this.a
if(!s.a1(b))s.h(0,b,new A.by(new A.U(t.r),new A.bb(A.F(t.N,t.o))))
s=s.n(0,b)
s.toString
return s}}
A.by.prototype={
n(a,b){var s=this.a.n(0,b)
return s},
h(a,b,c){this.a.h(0,b,c)},
gba(){var s=this.a.n(0,274)
return s==null?null:J.jE(s)},
sba(a){this.a.bl(0,274)}}
A.dZ.prototype={}
A.aR.prototype={
bR(a){var s=$.mk()
if(!s.a1(a))return"<unknown>"
return s.n(0,a).a},
q(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(s=g.a,r=A.eC(s,s.r,A.w(s).c),q=t.r,p=t.N,o=t.o,n="";r.A();){m=r.d
n+=m+"\n"
m=s.n(0,m)
m.toString
for(l=m.a,k=new A.ai(l,l.r,l.$ti.k("ai<1>")),k.c=l.e;k.A();){l=k.d
j=m.n(0,l)
n=j==null?n+("\t"+g.bR(l)+"\n"):n+("\t"+g.bR(l)+": "+j.q(0)+"\n")}for(m=m.b.a,l=new A.ai(m,m.r,A.w(m).k("ai<1>")),l.c=m.e;l.A();){k=l.d
n+=k+"\n"
if(!m.a1(k))m.h(0,k,new A.by(new A.U(q),new A.bb(A.F(p,o))))
k=m.n(0,k)
k.toString
for(i=k.a,h=new A.ai(i,i.r,i.$ti.k("ai<1>")),h.c=i.e;h.A();){i=h.d
j=k.n(0,i)
n=j==null?n+("\t"+g.bR(i)+"\n"):n+("\t"+g.bR(i)+": "+j.q(0)+"\n")}}}return n.charCodeAt(0)==0?n:n},
cg(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="Length must be a non-negative integer: ",a5=a6.e
a6.e=!0
s=a6.d
r=a6.l()
if(r===18761){a6.e=!1
if(a6.l()!==10752){a6.e=a5
return!1}}else if(r===19789){a6.e=!0
if(a6.l()!==42){a6.e=a5
return!1}}else return!1
q=a6.j()
for(p=this.a,o=t.dr,n=t.r,m=t.N,l=t.o,k=0;q>0;){a6.d=s+q
j=new A.by(new A.U(n),new A.bb(A.F(m,l)))
i=a6.l()
h=A.b(new Array(i),o)
for(g=0;g<i;++g)h[g]=this.dZ(a6,s)
for(f=h.length,e=0;e<h.length;h.length===f||(0,A.aK)(h),++e){d=h[e]
c=d.b
if(c!=null)j.h(0,d.a,c)}p.h(0,"ifd"+k,j);++k
q=a6.j()}for(p=p.gaC(),f=A.w(p),f=f.k("@<1>").G(f.z[1]),p=new A.bE(J.aw(p.a),p.b,f.k("bE<1,2>")),f=f.z[1];p.A();){c=p.a
if(c==null)c=f.a(c)
for(b=B.aJ.gaK(),b=b.gT(b),a=c.a,a0=c.b.a;b.A();){a1=b.gE()
if(a.a1(a1)){a6.d=s+c.n(0,a1).m(0)
j=new A.by(new A.U(n),new A.bb(A.F(m,l)))
i=a6.l()
h=A.b(new Array(i),o)
for(g=0;g<i;++g)h[g]=this.dZ(a6,s)
for(a2=h.length,e=0;e<h.length;h.length===a2||(0,A.aK)(h),++e){d=h[e]
a3=d.b
if(a3!=null)j.h(0,d.a,a3)}a1=B.aJ.n(0,a1)
a1.toString
a0.h(0,a1,j)}}}a6.e=a5
return!1},
dZ(a,b){var s,r,q,p,o,n=a.l(),m=a.l(),l=a.j(),k=new A.dZ(n,null)
if(m>13)return k
if(!(m<13))return A.a(B.aA,m)
s=B.aA[m]
r=l*B.dP[m]
q=a.d
if((r>4?a.d=a.j()+b:q)+r>a.c)return k
p=a.U(r)
switch(s.a){case 0:break
case 6:k.b=new A.cD(new Int8Array(A.cg(A.nu(p.P().buffer,0,null))))
break
case 1:k.b=new A.cz(new Uint8Array(A.cg(p.P())))
break
case 7:k.b=new A.cJ(new Uint8Array(A.cg(p.P())))
break
case 2:k.b=new A.cy(l===0?p.bk():p.O(l-1))
break
case 3:o=new A.cH(new Uint16Array(l))
o.f9(p,l)
k.b=o
break
case 4:o=new A.cB(new Uint32Array(l))
o.f6(p,l)
k.b=o
break
case 5:k.b=A.n0(p,l)
break
case 10:k.b=A.n1(p,l)
break
case 8:o=new A.cG(new Int16Array(l))
o.f8(p,l)
k.b=o
break
case 9:o=new A.cE(new Int32Array(l))
o.f7(p,l)
k.b=o
break
case 11:o=new A.cI(new Float32Array(l))
o.fa(p,l)
k.b=o
break
case 12:o=new A.cA(new Float64Array(l))
o.f5(p,l)
k.b=o
break}a.d=q+4
return k}}
A.e_.prototype={}
A.a0.prototype={
q(a){return"ExifValueType."+this.b}}
A.c6.prototype={
m(a){var s=this.b
return s===0?0:B.a.X(this.a,s)},
a0(a,b){if(b==null)return!1
return b instanceof A.c6&&this.a===b.a&&this.b===b.b},
gH(a){return A.nx(this.a,this.b)},
q(a){return""+this.a+"/"+this.b}}
A.T.prototype={
m(a){return 0},
q(a){return""},
a0(a,b){var s=this
if(b==null)return!1
return b instanceof A.T&&s.ga5(s)===b.ga5(b)&&s.gt(s)===b.gt(b)&&s.gH(s)===b.gH(b)},
gH(a){return 0}}
A.cz.prototype={
ga5(a){return B.a8},
gt(a){return this.a.length},
a0(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cz){s=this.a
r=b.a
s=s.length===r.length&&A.y(s)===A.y(r)}else s=!1
return s},
gH(a){return A.y(this.a)},
m(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.o(s)
return s}}
A.cy.prototype={
ga5(a){return B.f},
gt(a){return this.a.length},
a0(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cy){s=this.a
r=b.a
s=s.length===r.length&&B.h.gH(s)===B.h.gH(r)}else s=!1
return s},
gH(a){return B.h.gH(this.a)},
q(a){return this.a}}
A.cH.prototype={
f9(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.l()
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
ga5(a){return B.e},
gt(a){return this.a.length},
a0(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cH){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.y(s)===A.y(q)}else s=!1
return s},
gH(a){return A.y(this.a)},
m(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.o(s)
return s}}
A.cB.prototype={
f6(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.j()
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
ga5(a){return B.j},
gt(a){return this.a.length},
a0(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cB){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.y(s)===A.y(q)}else s=!1
return s},
gH(a){return A.y(this.a)},
m(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.o(s)
return s}}
A.cC.prototype={
ga5(a){return B.l},
gt(a){return this.a.length},
m(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return J.jE(s[0])},
a0(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cC){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.y(s)===A.y(q)}else s=!1
return s},
gH(a){return A.y(this.a)},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.o(s[0])}else s=A.o(s)
return s}}
A.cD.prototype={
ga5(a){return B.ac},
gt(a){return this.a.length},
a0(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cD){s=this.a
r=b.a
s=s.length===r.length&&A.y(s)===A.y(r)}else s=!1
return s},
gH(a){return A.y(this.a)},
m(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.o(s)
return s}}
A.cG.prototype={
f8(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.l()
$.a9()[0]=q
q=$.ae()
if(0>=q.length)return A.a(q,0)
q=q[0]
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
ga5(a){return B.ad},
gt(a){return this.a.length},
a0(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cG){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.y(s)===A.y(q)}else s=!1
return s},
gH(a){return A.y(this.a)},
m(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.o(s)
return s}}
A.cE.prototype={
f7(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.j()
$.A()[0]=q
q=$.Q()
if(0>=q.length)return A.a(q,0)
q=q[0]
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
ga5(a){return B.ae},
gt(a){return this.a.length},
a0(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cE){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.y(s)===A.y(q)}else s=!1
return s},
gH(a){return A.y(this.a)},
m(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.o(s)
return s}}
A.cF.prototype={
ga5(a){return B.a9},
gt(a){return this.a.length},
a0(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cF){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.y(s)===A.y(q)}else s=!1
return s},
gH(a){return A.y(this.a)},
m(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return J.jE(s[0])},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.o(s[0])}else s=A.o(s)
return s}}
A.cI.prototype={
fa(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.j()
$.A()[0]=q
q=$.b7()
if(0>=q.length)return A.a(q,0)
q=q[0]
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
ga5(a){return B.aa},
gt(a){return this.a.length},
a0(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cI){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.y(s)===A.y(q)}else s=!1
return s},
gH(a){return A.y(this.a)},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.o(s[0])}else s=A.o(s)
return s}}
A.cA.prototype={
f5(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.j()
$.A()[0]=q
q=$.b7()
if(0>=q.length)return A.a(q,0)
q=q[0]
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
ga5(a){return B.ab},
gt(a){return this.a.length},
a0(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cA){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.y(s)===A.y(q)}else s=!1
return s},
gH(a){return A.y(this.a)},
q(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.o(s[0])}else s=A.o(s)
return s}}
A.cJ.prototype={
ga5(a){return B.Q},
gt(a){return this.a.length},
a0(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cJ){s=this.a
r=b.a
s=s.length===r.length&&A.y(s)===A.y(r)}else s=!1
return s},
gH(a){return A.y(this.a)},
q(a){return"<data>"}}
A.ct.prototype={
q(a){return"BitmapCompression."+this.b}}
A.fN.prototype={
eE(){var s,r=this.b
r===$&&A.c("offset")
s=this.a
s===$&&A.c("fileLength")
return A.cZ(["offset",r,"fileLength",s,"fileType",19778],t.N,t.p)}}
A.b8.prototype={
gcf(){var s=this.r
if(s!==40)s=s===124&&this.cx===0
else s=!0
return s},
gb6(a){return Math.abs(this.e)},
d8(a,b){var s=this
if(B.b.aw(A.b([1,4,8],t.t),s.x))s.jv(a)
if(s.r===124){s.ay=a.j()
s.ch=a.j()
s.CW=a.j()
s.cx=a.j()}},
jv(a){var s=this,r=s.at
if(r===0)r=B.a.B(1,s.x)
s.siP(A.kW(r,new A.fR(s,a,s.r===12?3:4),t.p).aN(0))},
cO(a,b){var s,r,q,p
if(!B.a.gbJ(this.e)){s=a.u()
r=a.u()
q=a.u()
p=b==null?a.u():b
return A.aD(q,r,s,this.gcf()?255:p)}else{q=a.u()
s=a.u()
r=a.u()
p=b==null?a.u():b
return A.aD(q,s,r,this.gcf()?255:p)}},
e1(a){return this.cO(a,null)},
j0(a,b){var s,r,q,p,o,n,m,l=this
t.aR.a(b)
if(l.cy!=null){s=l.x
if(s===1){r=B.h.jm(B.a.bm(a.u(),2),8,"0")
for(s=r.length,q=0;q<8;++q){p=l.cy
p.toString
if(!(q<s))return A.a(r,q)
o=A.pV(r[q])
if(!(o>=0&&o<p.length))return A.a(p,o)
b.$1(p[o])}return}else if(s===4){r=a.u()
n=B.a.i(r,4)
m=r&15
s=l.cy
if(!(n<s.length))return A.a(s,n)
b.$1(s[n])
s=l.cy
if(!(m<s.length))return A.a(s,m)
b.$1(s[m])
return}else if(s===8){r=a.u()
s=l.cy
if(!(r>=0&&r<s.length))return A.a(s,r)
b.$1(s[r])
return}}s=l.y
if(s===B.O&&l.x===32)return b.$1(l.e1(a))
else{p=l.x
if(p===32&&s===B.P)return b.$1(l.e1(a))
else if(p===24)return b.$1(l.cO(a,255))
else throw A.d(A.h("Unsupported bpp ("+p+") or compression ("+s.q(0)+")."))}},
fP(){switch(this.y.a){case 0:return"BI_BITFIELDS"
case 1:return"none"}},
q(a){var s=this
return A.lJ(A.cZ(["headerSize",s.r,"width",s.f,"height",s.gb6(s),"planes",s.w,"bpp",s.x,"file",s.d.eE(),"compression",s.fP(),"imageSize",s.z,"xppm",s.Q,"yppm",s.as,"totalColors",s.at,"importantColors",s.ax,"readBottomUp",!B.a.gbJ(s.e),"v5redMask",A.jn(s.ay),"v5greenMask",A.jn(s.ch),"v5blueMask",A.jn(s.CW),"v5alphaMask",A.jn(s.cx)],t.N,t.K),null," ")},
siP(a){this.cy=t.T.a(a)}}
A.fR.prototype={
$1(a){var s
A.u(a)
s=this.c===3?100:null
return this.a.cO(this.b,s)},
$S:20}
A.dR.prototype={
aE(a){var s,r=null
t.L.a(a)
if(!A.fO(A.m(a,!1,r,0)))return r
s=A.m(a,!1,r,0)
this.a=s
return this.b=A.mN(s,r)},
a2(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a
h===$&&A.c("_input")
s=i.b
r=s.d.b
r===$&&A.c("offset")
h.d=r
r=s.f
q=B.a.i(r*s.x,3)
h=B.a.N(q,4)
if(h!==0)q+=4-h
p=A.a1(r,s.gb6(s),B.k,null,null)
for(o=p.b-1,h=p.a,n=o;n>=0;--n){s=i.b.e
m=!(s===0?1/s<0:s<0)?n:o-n
s=i.a
l=s.R(q)
s.d=s.d+(l.c-l.d)
k={}
for(k.a=0;k.a<h;j={},j.a=k.a,k=j)i.b.j0(l,new A.fQ(k,p,m))}return p},
ag(a){t.L.a(a)
if(!A.fO(A.m(a,!1,null,0)))return null
this.aE(a)
return this.a2(0)}}
A.fQ.prototype={
$1(a){return this.b.eR(this.a.a++,this.c,a)},
$S:10}
A.fV.prototype={}
A.fS.prototype={}
A.fT.prototype={}
A.fY.prototype={}
A.e0.prototype={}
A.cQ.prototype={
bK(){return this.r},
an(a,b,c,d,e){throw A.d(A.h("B44 compression not yet supported."))},
bn(a,b,c){return this.an(a,b,c,null,null)}}
A.e1.prototype={
ga5(a){var s=this.b
s===$&&A.c("type")
return s},
fb(a){var s=this,r=a.bk()
s.a=r
if(r.length===0){s.a=null
return}s.b=a.j()
a.u()
a.d+=3
s.e=a.j()
s.f=a.j()
switch(s.b){case 0:s.c=4
break
case 1:s.c=2
break
case 2:s.c=4
break
default:throw A.d(A.h("EXR Invalid pixel type: "+s.ga5(s)))}}}
A.aS.prototype={
an(a,b,c,d,e){throw A.d(A.h("Unsupported compression type"))},
bn(a,b,c){return this.an(a,b,c,null,null)}}
A.eg.prototype={}
A.e2.prototype={
sev(a){this.c=t.T.a(a)}}
A.h_.prototype={
fc(a){var s,r,q,p,o=this,n=A.m(a,!1,null,0)
if(n.j()!==20000630)throw A.d(A.h("File is not an OpenEXR image file."))
s=o.e=n.u()
if(s!==2)throw A.d(A.h("Cannot read version "+s+" image files."))
s=o.f=n.am()
if((s&4294967289)>>>0!==0)throw A.d(A.h("The file format version number's flag field contains unrecognized flags."))
if((s&16)===0){r=A.kU((s&2)!==0,n)
if(r.f!=null)B.b.v(o.d,r)}else for(s=o.d;!0;){r=A.kU((o.f&2)!==0,n)
if(r.f==null)break
B.b.v(s,r)}s=o.d
q=s.length
if(q===0)throw A.d(A.h("Error reading image header"))
for(p=0;p<s.length;s.length===q||(0,A.aK)(s),++p)s[p].ju(n)
o.ij(n)},
ij(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.d,r=0;r<s.length;++r){q=s[r]
p=q.a
for(o=q.b,n=p.a,m=0;m<o.length;++m){l=o[m]
if(!n.a1(l.a)){k=q.f
k.toString
f.a=k
j=q.r
j.toString
f.b=j
i=l.a
h=l.b
h===$&&A.c("type")
h=h===0?0:3
g=l.c
g===$&&A.c("size")
g=8*g
p.bC(new A.cP(i,k,j,h,g,A.kQ(k*j,h,g)))}}if(q.cx)f.it(r,a)
else f.is(r,a)}},
it(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=b8.d
if(!(c0<b9.length))return A.a(b9,c0)
s=b9[c0]
b9=b8.f
b9===$&&A.c("flags")
r=(b9&16)!==0
q=s.ay
p=s.at
o=A.j(c1,null,0)
b9=s.b
n=s.a.a
m=0
l=0
while(!0){k=s.go
k.toString
if(!(m<k))break
j=0
while(!0){k=s.fy
k.toString
if(!(j<k))break
k=l!==0
i=0
h=0
while(!0){g=s.fx
if(!(m<g.length))return A.a(g,m)
if(!(i<g[m]))break
f=0
while(!0){g=s.fr
if(!(j<g.length))return A.a(g,j)
if(!(f<g[j]))break
if(k)break
if(!(l>=0&&l<p.length))return A.a(p,l)
g=p[l]
if(!(h>=0&&h<g.length))return A.a(g,h)
o.d=g[h]
if(r)if(o.j()!==c0)throw A.d(A.h("Invalid Image Data"))
e=o.j()
d=o.j()
o.j()
o.j()
c=o.R(o.j())
o.d=o.d+(c.c-c.d)
g=s.db
g.toString
b=d*g
a=s.cy
a.toString
q.toString
a0=b8.a
if(typeof a0!=="number")return A.J(a0)
a0=b8.b
if(typeof a0!=="number")return A.J(a0)
a1=q.an(c,e*a,b,a,g)
a2=q.a
a3=q.b
a4=a1.length
a5=b9.length
a6=0
a7=0
while(!0){if(a7<a3){g=b8.b
if(typeof g!=="number")return A.J(g)
g=b<g}else g=!1
if(!g)break
for(a8=0;a8<a5;++a8){if(!(a8<b9.length))return A.a(b9,a8)
a9=b9[a8]
g=n.n(0,a9.a).f.buffer
b0=new Uint8Array(g,0)
if(a6>=a4)break
g=s.cy
g.toString
b1=e*g
for(g=a9.c,a=s.f,a0=s.r,b2=b0.length,b3=0;b3<a2;++b3,++b1){g===$&&A.c("size")
b4=0
for(;b4<g;++b4,a6=b6){a.toString
if(b1<a){a0.toString
b5=b<a0}else b5=!1
b6=a6+1
if(b5){b7=(b*a+b1)*g+b4
if(!(a6>=0&&a6<a4))return A.a(a1,a6)
b5=a1[a6]
if(!(b7>=0&&b7<b2))return A.a(b0,b7)
b0[b7]=b5}}}}++a7;++b}++f;++h}++i}++j;++l}++m}},
is(b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this.d
if(!(b2<b1.length))return A.a(b1,b2)
s=b1[b2]
b1=this.f
b1===$&&A.c("flags")
r=(b1&16)!==0
q=s.ay
b1=s.at
if(0>=b1.length)return A.a(b1,0)
p=b1[0]
o=s.ch
b1=s.b
n=b1.length
m=new Uint32Array(n)
l=A.j(b3,null,0)
for(k=p.length,j=s.a.a,i=q!=null,h=0,g=0;g<k;++g){l.d=p[g]
if(r)if(l.j()!==b2)throw A.d(A.h("Invalid Image Data"))
f=l.j()
e=$.A()
e[0]=f
f=$.Q()
if(0>=f.length)return A.a(f,0)
e[0]=l.j()
if(0>=f.length)return A.a(f,0)
d=l.R(f[0])
l.d=l.d+(d.c-d.d)
c=i?q.bn(d,0,h):d.P()
b=c.length
a=b1.length
o.toString
a0=0
while(!0){if(a0<o){f=this.b
if(typeof f!=="number")return A.J(f)
f=h<f}else f=!1
if(!f)break
f=s.CW
if(!(h>=0&&h<f.length))return A.a(f,h)
a1=f[h]
if(a1>=b)break
for(a2=0;a2<a;++a2){if(!(a2<b1.length))return A.a(b1,a2)
a3=b1[a2]
f=j.n(0,a3.a).f.buffer
a4=new Uint8Array(f,0)
if(a1>=b)break
f=s.f
f.toString
e=a3.c
a5=a4.length
a6=0
for(;a6<f;++a6){e===$&&A.c("size")
a7=0
for(;a7<e;++a7,a1=a9){if(!(a2<n))return A.a(m,a2)
a8=m[a2]
if(!(a2<n))return A.a(m,a2)
m[a2]=a8+1
a9=a1+1
if(!(a1>=0&&a1<b))return A.a(c,a1)
b0=c[a1]
if(!(a8<a5))return A.a(a4,a8)
a4[a8]=b0}}}++a0;++h}}}}
A.e3.prototype={
fd(b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="dataWindow",b0="Unknown LevelMode format."
for(s=a8.c,r=t.t,q=t.L,p=a8.b;!0;){o=b2.bk()
if(o.length===0)break
b2.bk()
n=b2.R(b2.j())
b2.d=b2.d+(n.c-n.d)
s.h(0,o,new A.e0())
switch(o){case"channels":for(;!0;){m=new A.e1()
m.fb(n)
if(m.a==null)break
B.b.v(p,m)}break
case"chromaticities":l=new Float32Array(8)
a8.Q=l
k=n.j()
j=$.A()
j[0]=k
k=$.b7()
if(0>=k.length)return A.a(k,0)
l[0]=k[0]
l=a8.Q
j[0]=n.j()
l[1]=k[0]
l=a8.Q
j[0]=n.j()
l[2]=k[0]
l=a8.Q
j[0]=n.j()
l[3]=k[0]
l=a8.Q
j[0]=n.j()
l[4]=k[0]
l=a8.Q
j[0]=n.j()
l[5]=k[0]
l=a8.Q
j[0]=n.j()
l[6]=k[0]
l=a8.Q
j[0]=n.j()
l[7]=k[0]
break
case"compression":l=n.a
k=n.d++
if(!(k>=0&&k<l.length))return A.a(l,k)
k=l[k]
a8.as=k
if(k>7)throw A.d(A.h("EXR Invalid compression type"))
break
case"dataWindow":l=n.j()
k=$.A()
k[0]=l
l=$.Q()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=n.j()
i=l[0]
k[0]=n.j()
h=l[0]
k[0]=n.j()
a8.sfp(q.a(A.b([j,i,h,l[0]],r)))
l=a8.e
l===$&&A.c(a9)
a8.f=l[2]-l[0]+1
a8.r=l[3]-l[1]+1
break
case"displayWindow":l=n.j()
k=$.A()
k[0]=l
l=$.Q()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=n.j()
i=l[0]
k[0]=n.j()
h=l[0]
k[0]=n.j()
a8.sj2(A.b([j,i,h,l[0]],r))
break
case"lineOrder":break
case"pixelAspectRatio":l=n.j()
$.A()[0]=l
l=$.b7()
if(0>=l.length)return A.a(l,0)
break
case"screenWindowCenter":l=n.j()
k=$.A()
k[0]=l
l=$.b7()
if(0>=l.length)return A.a(l,0)
k[0]=n.j()
break
case"screenWindowWidth":l=n.j()
$.A()[0]=l
l=$.b7()
if(0>=l.length)return A.a(l,0)
break
case"tiles":a8.cy=n.j()
a8.db=n.j()
l=n.a
k=n.d++
if(!(k>=0&&k<l.length))return A.a(l,k)
k=l[k]
a8.dx=k&15
a8.dy=B.a.i(k,4)&15
break
case"type":g=n.bk()
if(g!=="deepscanline")if(g!=="deeptile")throw A.d(A.h("EXR Invalid type: "+g))
break
default:break}}if(a8.cx){s=a8.e
s===$&&A.c(a9)
f=s[0]
e=s[2]
d=s[1]
c=s[3]
switch(a8.dx){case 0:b=1
break
case 1:s=Math.max(e-f+1,c-d+1)
r=a8.dy
A.u(s)
b=(r===0?a8.c1(s):a8.bY(s))+1
break
case 2:a=e-f+1
b=(a8.dy===0?a8.c1(a):a8.bY(a))+1
break
default:A.D(A.h(b0))
b=0}a8.fy=b
s=a8.e
f=s[0]
e=s[2]
d=s[1]
c=s[3]
switch(a8.dx){case 0:b=1
break
case 1:s=Math.max(e-f+1,c-d+1)
r=a8.dy
A.u(s)
b=(r===0?a8.c1(s):a8.bY(s))+1
break
case 2:a0=c-d+1
b=(a8.dy===0?a8.c1(a0):a8.bY(a0))+1
break
default:A.D(A.h(b0))
b=0}a8.go=b
if(a8.dx!==2)a8.go=1
s=a8.fy
s.toString
r=a8.e
a8.shK(a8.dj(s,r[0],r[2],a8.cy,a8.dy))
r=a8.go
r.toString
s=a8.e
a8.shL(a8.dj(r,s[1],s[3],a8.db,a8.dy))
s=a8.fN()
a8.id=s
r=a8.cy
r.toString
r=s*r
a8.k1=r
a8.ay=A.kN(a8.as,a8,r,a8.db)
b3.a=b3.b=0
r=a8.fy
r.toString
s=a8.go
s.toString
a8.sdU(A.jS(r*s,new A.h0(b3,a8),!0,t.bv))}else{s=a8.r
s.toString
r=a8.ax=new Uint32Array(s+1)
for(q=p.length,l=a8.e,k=a8.f,a1=0;a1<q;++a1){a2=p[a1]
j=a2.c
j===$&&A.c("size")
k.toString
i=a2.e
i===$&&A.c("xSampling")
a3=B.a.X(j*k,i)
for(j=a2.f,a4=0;a4<s;++a4){l===$&&A.c(a9)
i=l[1]
j===$&&A.c("ySampling")
if(B.a.N(a4+i,j)===0)r[a4]=r[a4]+a3}}for(a5=0,a4=0;a4<s;++a4)a5=Math.max(a5,r[a4])
s=A.kN(a8.as,a8,a5,null)
a8.ay=s
s=a8.ch=s.bK()
r=a8.ax
q=r.length
p=new Uint32Array(q)
a8.CW=p
for(--q,a6=0,a7=0;a7<=q;++a7){if(B.a.N(a7,s)===0)a6=0
p[a7]=a6
a6+=r[a7]}r=a8.r
r.toString
s=B.a.X(r+s,s)
a8.sdU(A.b([new Uint32Array(s-1)],t.hh))}},
c1(a){var s
for(s=0;a>1;){++s
a=B.a.i(a,1)}return s},
bY(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.i(a,1)}return s+r},
fN(){var s,r,q,p,o
for(s=this.b,r=s.length,q=0,p=0;p<r;++p){o=s[p].c
o===$&&A.c("size")
q+=o}return q},
dj(a,b,c,d,e){var s,r,q,p,o,n,m=J.ag(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.B(1,q)
o=B.a.X(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.X(n+d-1,d)}return m},
sj2(a){t.T.a(a)},
sfp(a){this.e=t.L.a(a)},
sdU(a){this.at=t.gZ.a(a)},
shK(a){this.fr=t.k.a(a)},
shL(a){this.fx=t.k.a(a)}}
A.h0.prototype={
$1(a){var s,r,q,p,o=this.b,n=o.fr,m=this.a,l=m.b
if(!(l<n.length))return A.a(n,l)
n=n[l]
s=o.fx
r=m.a
if(!(r<s.length))return A.a(s,r)
s=s[r]
q=new Uint32Array(n*s)
p=l+1
m.b=p
if(p===o.fy){m.b=0
m.a=r+1}return q},
$S:25}
A.cR.prototype={
ju(a){var s,r,q,p,o,n=this
if(n.cx)for(s=0;s<n.at.length;++s){r=0
while(!0){q=n.at
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
q[r]=a.cY();++r}}else{q=n.at
if(0>=q.length)return A.a(q,0)
p=q[0].length
for(s=0;s<p;++s){q=n.at
if(0>=q.length)return A.a(q,0)
q=q[0]
o=a.cY()
if(!(s<q.length))return A.a(q,s)
q[s]=o}}}}
A.eh.prototype={
fh(a,b,c){var s,r,q,p=this,o=a.b.length,n=J.ag(o,t.eO)
for(s=0;s<o;++s)n[s]=new A.dA()
p.sfq(t.q.a(n))
r=p.w
r.toString
q=B.a.I(r*p.x,2)
p.z=new Uint16Array(q)},
bK(){return this.x},
an(a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="_channelData",a7="size"
if(b1==null)b1=a5.c.f
if(b2==null)b2=a5.c.ch
b1.toString
s=a9+b1-1
b2.toString
r=b0+b2-1
q=a5.c
p=q.f
p.toString
if(s>p)s=p-1
p=q.r
p.toString
if(r>p)r=p-1
a5.a=s-a9+1
a5.b=r-b0+1
o=q.b
n=o.length
for(m=0,l=0;l<n;++l){k=o[l]
q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
j.b=j.a=m
q=k.e
q===$&&A.c("xSampling")
i=B.a.X(a9,q)
h=B.a.X(s,q)
q=i*q<a9?0:1
q=h-i+q
j.c=q
p=k.f
p===$&&A.c("ySampling")
i=B.a.X(b0,p)
h=B.a.X(r,p)
g=i*p<b0?0:1
g=h-i+g
j.d=g
j.e=p
p=k.c
p===$&&A.c(a7)
p=p/2|0
j.f=p
m+=q*g*p}f=a8.l()
e=a8.l()
if(e>=8192)throw A.d(A.h("Error in header for PIZ-compressed data (invalid bitmap size)."))
d=new Uint8Array(8192)
if(f<=e){c=a8.U(e-f+1)
for(q=c.d,b=c.c-q,p=c.a,g=p.length,a=f,l=0;l<b;++l,a=a0){a0=a+1
a1=q+l
if(!(a1>=0&&a1<g))return A.a(p,a1)
a1=p[a1]
if(!(a<8192))return A.a(d,a)
d[a]=a1}}a2=new Uint16Array(65536)
a3=a5.iy(d,a2)
A.n5(a8,a8.j(),a5.z,m)
for(l=0;l<n;++l){q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
a=0
while(!0){q=j.f
q===$&&A.c(a7)
if(!(a<q))break
p=a5.z
p.toString
g=j.a
g===$&&A.c("start")
a1=j.c
a1===$&&A.c("nx")
a4=j.d
a4===$&&A.c("ny")
A.n8(p,g+a,a1,q,a4,a1*q,a3);++a}}q=a5.z
q.toString
a5.fH(a2,q,m)
q=a5.r
if(q==null){q=a5.w
q.toString
q=a5.r=A.bG(!1,q*a5.x+73728)}q.a=0
for(;b0<=r;++b0)for(l=0;l<n;++l){q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
q=j.e
q===$&&A.c("ys")
if(B.a.N(b0,q)!==0)continue
q=j.c
q===$&&A.c("nx")
p=j.f
p===$&&A.c(a7)
a9=q*p
for(;a9>0;--a9){q=a5.r
q.toString
p=a5.z
p.toString
g=j.b
g===$&&A.c("end")
j.b=g+1
if(!(g>=0&&g<p.length))return A.a(p,g)
q.eK(p[g])}}q=a5.r
return A.I(q.c.buffer,0,q.a)},
bn(a,b,c){return this.an(a,b,c,null,null)},
fH(a,b,c){var s,r,q=t.L
q.a(a)
q.a(b)
for(q=b.length,s=0;s<c;++s){if(!(s<q))return A.a(b,s)
r=b[s]
if(!(r>=0&&r<65536))return A.a(a,r)
b[s]=a[r]}},
iy(a,b){var s,r,q,p,o
for(s=0,r=0;r<65536;++r){if(r!==0){q=r>>>3
if(!(q<8192))return A.a(a,q)
q=(a[q]&1<<(r&7))>>>0!==0}else q=!0
if(q){p=s+1
if(!(s<65536))return A.a(b,s)
b[s]=r
s=p}}for(p=s;p<65536;p=o){o=p+1
if(!(p<65536))return A.a(b,p)
b[p]=0}return s-1},
sfq(a){this.y=t.q.a(a)}}
A.dA.prototype={}
A.ei.prototype={
bK(){return this.x},
an(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.x.bE(A.bA(t.L.a(a4.P()),1,null,0),!1),a3=a1.y
if(a3==null){a3=a1.w
a3.toString
a3=a1.y=A.bG(!1,a1.x*a3)}a3.a=0
s=A.b([0,0,0,0],t.t)
r=new Uint32Array(1)
q=A.I(r.buffer,0,null)
if(a7==null)a7=a1.c.f
if(a8==null)a8=a1.c.ch
a7.toString
p=a5+a7-1
a8.toString
o=a6+a8-1
a3=a1.c
n=a3.f
n.toString
if(p>n)p=n-1
n=a3.r
n.toString
if(o>n)o=n-1
a1.a=p-a5+1
a1.b=o-a6+1
a3=a3.b
m=a3.length
for(n=q.length,l=a2.length,k=a6,j=0;k<=o;++k)for(i=0;i<m;++i){if(!(i<a3.length))return A.a(a3,i)
h=a3[i]
g=h.f
g===$&&A.c("ySampling")
if(B.a.N(a6,g)!==0)continue
g=h.e
g===$&&A.c("xSampling")
f=B.a.X(a5,g)
e=B.a.X(p,g)
g=f*g<a5?0:1
d=e-f+g
if(0>=1)return A.a(r,0)
r[0]=0
g=h.b
g===$&&A.c("type")
switch(g){case 0:B.b.h(s,0,j)
B.b.h(s,1,s[0]+d)
B.b.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.b.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.b.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.b.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.F(q[a0])}}break
case 1:B.b.h(s,0,j)
B.b.h(s,1,s[0]+d)
j=s[1]+d
for(c=0;c<d;++c){g=s[0]
B.b.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.b.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
r[0]=r[0]+((g<<8|b)>>>0)
for(a0=0;a0<2;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.F(q[a0])}}break
case 2:B.b.h(s,0,j)
B.b.h(s,1,s[0]+d)
B.b.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.b.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.b.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.b.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.F(q[a0])}}break}}a3=a1.y
return A.I(a3.c.buffer,0,a3.a)},
bn(a,b,c){return this.an(a,b,c,null,null)}}
A.ej.prototype={
bK(){return 1},
an(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.bG(!1,(b-a0.d)*2)
if(a3==null)a3=c.c.f
if(a4==null)a4=c.c.ch
a3.toString
s=a1+a3-1
a4.toString
r=a2+a4-1
q=c.c
p=q.f
p.toString
if(s>p)s=p-1
q=q.r
q.toString
if(r>q)r=q-1
c.a=s-a1+1
c.b=r-a2+1
for(;q=a0.d,q<b;){p=a0.a
a0.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
$.aa()[0]=q
q=$.af()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.F(q[p])}}else for(n=o;m=n-1,n>=0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.F(q[p])}}l=A.I(a.c.buffer,0,a.a)
for(k=l.length,j=1;j<k;++j)l[j]=l[j-1]+l[j]-128
b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.I(k+1,2)
for(i=0,h=0;!0;q=d,i=f){if(h<k){b.toString
g=h+1
f=i+1
if(!(i<k))return A.a(l,i)
p=l[i]
e=b.length
if(!(h<e))return A.a(b,h)
b[h]=p}else break
if(g<k){h=g+1
d=q+1
if(!(q<k))return A.a(l,q)
q=l[q]
if(!(g<e))return A.a(b,g)
b[g]=q}else break}b.toString
return b},
bn(a,b,c){return this.an(a,b,c,null,null)}}
A.cS.prototype={
bK(){return this.w},
an(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.x.bE(A.bA(t.L.a(a.P()),1,null,0),!1)
if(d==null)d=f.c.f
if(a0==null)a0=f.c.ch
d.toString
s=b+d-1
a0.toString
r=c+a0-1
q=f.c
p=q.f
p.toString
if(s>p)s=p-1
q=q.r
q.toString
if(r>q)r=q-1
f.a=s-b+1
f.b=r-c+1
for(o=e.length,n=1;n<o;++n)e[n]=e[n-1]+e[n]-128
q=f.x
if(q==null||q.length!==o)q=f.x=new Uint8Array(o)
p=B.a.I(o+1,2)
for(m=0,l=0;!0;p=g,m=j){if(l<o){q.toString
k=l+1
j=m+1
if(!(m<o))return A.a(e,m)
i=e[m]
h=q.length
if(!(l<h))return A.a(q,l)
q[l]=i}else break
if(k<o){l=k+1
g=p+1
if(!(p<o))return A.a(e,p)
p=e[p]
if(!(k<h))return A.a(q,k)
q[k]=p}else break}q.toString
return q},
bn(a,b,c){return this.an(a,b,c,null,null)}}
A.fZ.prototype={
a2(a){var s=this.a
if(s==null)return null
s=s.d
if(!(a<s.length))return A.a(s,a)
return A.pR(s[a].a,1)},
ag(a){var s
t.L.a(a)
s=new A.h_(A.b([],t.dd))
s.fc(a)
this.a=s
return this.a2(0)}}
A.e5.prototype={
d3(a,b,c,d){var s,r=a*3,q=this.d,p=q.length
if(!(r<p))return A.a(q,r)
q[r]=b
s=r+1
if(!(s<p))return A.a(q,s)
q[s]=c
s=r+2
if(!(s<p))return A.a(q,s)
q[s]=d}}
A.cO.prototype={
fe(a){var s,r,q,p,o,n,m,l,k=this
k.a=a.l()
k.b=a.l()
k.c=a.l()
k.d=a.l()
s=a.u()
k.e=(s&64)!==0
if((s&128)!==0){k.f=A.kP(B.a.B(1,(s&7)+1))
for(r=0;q=k.f,r<q.b;++r){p=a.a
o=a.d
n=a.d=o+1
m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
l=a.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
a.d=l+1
if(!(l>=0&&l<m))return A.a(p,l)
q.d3(r,o,n,p[l])}}k.x=a.d-a.b}}
A.ek.prototype={}
A.e6.prototype={}
A.h3.prototype={
aE(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.b=A.m(t.L.a(a),!1,null,0)
i.a=new A.e6(A.b([],t.b))
if(!i.dD())return null
try{for(;o=i.b,n=o.d,n<o.c;){m=o.a
l=o.d=n+1
k=m.length
if(!(n>=0&&n<k))return A.a(m,n)
s=m[n]
switch(s){case 44:r=i.e6()
if(r==null){o=i.a
return o}B.b.v(i.a.r,r)
break
case 33:o.d=l+1
if(!(l>=0&&l<k))return A.a(m,l)
q=m[l]
if(J.bt(q,255)){o=i.b
n=o.a
m=o.d++
if(!(m>=0&&m<n.length))return A.a(n,m)
if(o.O(n[m])==="NETSCAPE2.0"){n=o.a
m=o.d
l=o.d=m+1
k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(m===3&&l===1)o.l()}else i.c9()}else if(J.bt(q,249)){o=i.b
o.toString
i.ie(o)}else i.c9()
break
case 59:o=i.a
return o
default:break}}}catch(j){p=A.a3(j)
A.jz(p)}return i.a},
ie(a){var s,r,q,p,o,n=this
a.u()
s=a.u()
a.l()
r=a.u()
a.u()
B.a.i(s,2)
q=a.bV(1,0)
p=q.a
q=q.d
if(!(q>=0&&q<p.length))return A.a(p,q)
if(p[q]===44){++a.d
o=n.e6()
if(o==null)return
if((s&1)!==0){q=o.f
if(q==null&&n.a.e!=null){q=n.a.e
q=o.f=new A.e5(q.a,q.b,q.c,new Uint8Array(A.cg(q.d)))}if(q!=null)q.c=r}B.b.v(n.a.r,o)}},
a2(a){var s,r,q,p=this,o=p.b
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
o.toString
s=q.x
s===$&&A.c("_inputPosition")
o.d=s
return p.h4(q)},
ag(a){if(this.aE(t.L.a(a))==null)return null
return this.a2(0)},
e6(){var s,r=this.b
if(r.d>=r.c)return null
s=new A.ek()
s.fe(r);++this.b.d
this.c9()
return s},
h4(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.d==null){h.d=new Uint8Array(256)
h.e=new Uint8Array(4095)
h.f=new Uint8Array(4096)
h.r=new Uint32Array(4096)}s=h.w=h.b.u()
r=B.a.D(1,s)
h.cx=r;++r
h.CW=r
h.ch=r+1;++s
h.ay=s
h.ax=B.a.D(1,s)
h.Q=0
h.at=4098
h.y=h.z=0
h.d[0]=0
s=h.r
s.toString
B.t.aj(s,0,4096,4098)
s=a.c
s===$&&A.c("width")
r=a.d
r===$&&A.c("height")
q=a.a
q===$&&A.c("x")
p=h.a
o=p.a
if(typeof o!=="number")return A.J(o)
if(q+s<=o){q=a.b
q===$&&A.c("y")
o=p.b
if(typeof o!=="number")return A.J(o)
o=q+r>o
q=o}else q=!0
if(q)return null
n=a.f
n=n!=null?n:p.e
h.x=s*r
m=A.a1(s,r,B.k,null,null)
l=new Uint8Array(s)
s=a.e
s===$&&A.c("interlaced")
if(s){s=a.b
s===$&&A.c("y")
for(r=s+r,k=0,j=0;k<4;++k)for(i=s+B.b9[k];i<r;i+=B.bx[k],++j){if(!h.dE(l))return m
h.ec(m,i,n,l)}}else for(i=0;i<r;++i){if(!h.dE(l))return m
h.ec(m,i,n,l)}return m},
ec(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(c!=null)for(s=d.length,r=c.d,q=r.length,p=a.x,o=b*a.a,n=p.length,m=0;m<s;++m){l=d[m]
k=l*3
j=l===c.c?0:255
if(!(k<q))return A.a(r,k)
l=r[k]
i=k+1
if(!(i<q))return A.a(r,i)
i=r[i]
h=k+2
if(!(h<q))return A.a(r,h)
h=r[h]
g=B.c.m(B.a.p(j,0,255))
h=B.c.m(B.a.p(h,0,255))
i=B.c.m(B.a.p(i,0,255))
l=B.c.m(B.a.p(l,0,255))
f=o+m
if(!(f>=0&&f<n))return A.a(p,f)
p[f]=(g<<24|h<<16|i<<8|l)>>>0}},
dD(){var s,r,q,p,o,n,m,l,k,j=this,i=j.b.O(6)
if(i!=="GIF87a"&&i!=="GIF89a")return!1
s=j.a
s.toString
s.a=j.b.l()
s=j.a
s.toString
s.b=j.b.l()
r=j.b.u()
j.a.toString
j.b.u();++j.b.d
if((r&128)!==0){s=j.a
s.toString
s.e=A.kP(B.a.B(1,(r&7)+1))
for(q=0;s=j.a.e,q<s.b;++q){p=j.b
o=p.a
n=p.d
m=p.d=n+1
l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
k=p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
p.d=k+1
if(!(k>=0&&k<l))return A.a(o,k)
s.d3(q,n,m,o[k])}}j.a.toString
return!0},
dE(a){var s=this,r=s.x
r.toString
s.x=r-a.length
if(!s.ha(a))return!1
if(s.x===0)s.c9()
return!0},
c9(){var s,r,q,p=this.b
if(p.d>=p.c)return!0
s=p.u()
while(!0){if(s!==0){p=this.b
p=p.d<p.c}else p=!1
if(!p)break
p=this.b
r=p.d+=s
if(r>=p.c)return!0
q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
s=q[r]}return!0},
ha(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_stack",f="_suffix",e=h.Q
if(e>4095)return!1
s=a.length
if(e!==0){r=0
while(!0){if(!(e!==0&&r<s))break
q=r+1
p=h.e
p===$&&A.c(g)
e=h.Q=e-1
if(!(e>=0))return A.a(p,e)
p=p[e]
if(!(r<s))return A.a(a,r)
a[r]=p
r=q}}else r=0
for(;r<s;){o=h.as=h.h9()
if(o==null)return!1
e=h.CW
if(o===e)return!1
p=h.cx
if(o===p){for(p=h.r,n=0;n<=4095;++n)p[n]=4098
h.ch=e+1
e=h.w+1
h.ay=e
h.ax=B.a.D(1,e)
h.at=4098}else{if(o<p){q=r+1
if(!(r>=0))return A.a(a,r)
a[r]=o
r=q}else{e=h.r
e.toString
if(o>>>0!==o||o>=4096)return A.a(e,o)
if(e[o]===4098){m=h.ch-2
if(o===m){o=h.at
l=h.f
l===$&&A.c(f)
k=h.e
k===$&&A.c(g)
j=h.Q++
p=h.cG(e,o,p)
if(!(j>=0&&j<4095))return A.a(k,j)
k[j]=p
if(!(m>=0&&m<4096))return A.a(l,m)
l[m]=p}else return!1}n=0
while(!0){i=n+1
if(!(n<=4095&&o>h.cx&&o<=4095))break
e=h.e
e===$&&A.c(g)
p=h.Q++
m=h.f
m===$&&A.c(f)
if(!(o>=0&&o<4096))return A.a(m,o)
m=m[o]
if(!(p>=0&&p<4095))return A.a(e,p)
e[p]=m
m=h.r
m.toString
if(!(o<4096))return A.a(m,o)
o=m[o]
n=i}if(i>=4095||o>4095)return!1
e=h.e
e===$&&A.c(g)
p=h.Q++
if(!(p>=0&&p<4095))return A.a(e,p)
e[p]=o
while(!0){e=h.Q
if(!(e!==0&&r<s))break
q=r+1
p=h.e;--e
h.Q=e
if(!(e>=0&&e<4095))return A.a(p,e)
e=p[e]
if(!(r>=0&&r<s))return A.a(a,r)
a[r]=e
r=q}}e=h.at
if(e!==4098){p=h.r
p.toString
m=h.ch-2
if(!(m>=0&&m<4096))return A.a(p,m)
m=p[m]===4098
p=m}else p=!1
if(p){p=h.r
p.toString
m=h.ch-2
if(!(m>=0&&m<4096))return A.a(p,m)
p[m]=e
l=h.as
k=h.f
j=h.cx
if(l===m){k===$&&A.c(f)
k[m]=h.cG(p,e,j)}else{k===$&&A.c(f)
l.toString
k[m]=h.cG(p,l,j)}}e=h.as
e.toString
h.at=e}}return!0},
h9(){var s,r,q,p,o=this
if(o.ay>12)return null
for(;s=o.z,r=o.ay,s<r;){s=o.fJ()
s.toString
r=o.y
q=o.z
o.y=(r|B.a.D(s,q))>>>0
o.z=q+8}q=o.y
if(!(r>=0&&r<13))return A.a(B.ap,r)
p=B.ap[r]
o.y=B.a.L(q,r)
o.z=s-r
s=o.ch
if(s<4097){++s
o.ch=s
s=s>o.ax&&r<12}else s=!1
if(s){o.ax=o.ax<<1>>>0
o.ay=r+1}return q&p},
cG(a,b,c){var s,r,q=0
while(!0){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
fJ(){var s,r,q=this,p=q.d,o=p[0]
if(o===0){p[0]=q.b.u()
p=q.d
o=p[0]
if(o===0)return null
B.i.au(p,1,1+o,q.b.U(o).P())
p=q.d
s=p[1]
p[1]=2
p[0]=p[0]-1}else{r=p[1]
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.h9.prototype={
a2(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.a
if(b3!=null){s=this.b
s=s==null||b4>=s.e}else s=!0
if(s)return b2
s=this.b.f
if(!(b4<s.length))return A.a(s,b4)
r=s[b4]
s=b3.a
b3=b3.b+r.e
q=r.d
p=J.fE(s,b3,b3+q)
o=new A.eP()
if(o.bj(p))return o.ag(p)
n=A.bG(!1,14)
n.eK(19778)
n.ac(q)
n.ac(0)
n.ac(0)
b3=A.m(p,!1,b2,0)
s=A.kE(A.m(A.I(n.c.buffer,0,n.a),!1,b2,0))
q=b3.j()
m=b3.j()
l=$.A()
l[0]=m
m=$.Q()
if(0>=m.length)return A.a(m,0)
k=m[0]
l[0]=b3.j()
j=m[0]
i=b3.l()
h=b3.l()
g=b3.j()
f=A.cZ([0,B.P,3,B.O],t.p,t.Q).n(0,g)
if(f==null)A.D(A.h("Bitmap compression "+g+" is not supported yet."))
g=b3.j()
l[0]=b3.j()
e=m[0]
l[0]=b3.j()
m=m[0]
l=b3.j()
d=new A.e9(s,j,k,q,i,h,f,g,e,m,l,b3.j())
d.d8(b3,s)
if(q!==40&&i!==1)return b2
c=l===0&&h<=8?40+4*B.a.B(1,h):40+4*l
s.b=c
n.a-=4
n.ac(c)
b=A.m(p,!1,b2,0)
a=new A.fV()
a.a=b
a.b=d
a0=a.a2(0)
if(h>=32)return a0
a1=32-B.a.N(k,32)
a2=B.a.I(a1===32?k:k+a1,8)
for(b3=a0.x,s=a0.a,q=b3.length,m=a0.b-1,l=1/j<0,i=j<0,j=j===0,a3=0;a3<B.a.I(A.b8.prototype.gb6.call(d,d),2);++a3){a4=!(j?l:i)?a3:m-a3
a5=b.R(a2)
b.d=b.d+(a5.c-a5.d)
for(h=a4*s,a6=0;a6<k;){g=a5.a
e=a5.d++
if(!(e>=0&&e<g.length))return A.a(g,e)
e=g[e]
a7=7
while(!0){if(!(a7>-1&&a6<k))break
if((e&B.a.D(1,a7))>>>0!==0){g=h+a6
a8=B.c.m(B.a.p(0,0,255))
a9=B.c.m(B.a.p(0,0,255))
b0=B.c.m(B.a.p(0,0,255))
b1=B.c.m(B.a.p(0,0,255))
if(!(g>=0&&g<q))return A.a(b3,g)
b3[g]=(a8<<24|a9<<16|b0<<8|b1)>>>0}++a6;--a7}}}return a0},
ag(a){var s=A.m(t.L.a(a),!1,null,0)
this.a=s
s=A.kS(s)
this.b=s
if(s==null)return null
return this.a2(0)}}
A.ha.prototype={}
A.hb.prototype={
$1(a){var s
A.u(a)
s=this.a
s.u()
s.u()
s.u();++s.d
s.l()
s.l()
return new A.c2(s.j(),s.j())},
$S:26}
A.c2.prototype={}
A.e9.prototype={
gb6(a){return B.a.I(A.b8.prototype.gb6.call(this,this),2)},
gcf(){return this.r===40&&this.x===32?!1:A.b8.prototype.gcf.call(this)}}
A.dV.prototype={}
A.hj.prototype={}
A.az.prototype={
sfs(a){this.r=t.fZ.a(a)}}
A.hk.prototype={
jN(a){var s,r,q,p,o,n,m,l=this,k=A.m(t.L.a(a),!0,null,0)
l.a=k
s=k.bV(2,0)
k=s.a
r=s.d
q=k.length
if(!(r>=0&&r<q))return A.a(k,r)
if(k[r]===255){++r
if(!(r<q))return A.a(k,r)
r=k[r]!==216
k=r}else k=!0
if(k)return!1
if(l.be()!==216)return!1
p=l.be()
o=!1
n=!1
while(!0){if(p!==217){k=l.a
k=k.d<k.c}else k=!1
if(!k)break
m=l.a.l()
if(m<2)break
k=l.a
k.d=k.d+(m-2)
switch(p){case 192:case 193:case 194:o=!0
break
case 218:n=!0
break}p=l.be()}return o&&n},
cg(a){var s,r,q,p,o,n,m,l,k=this
k.a=A.m(t.L.a(a),!0,null,0)
k.i6()
if(k.x.length!==1)throw A.d(A.h("Only single frame JPEGs supported"))
for(s=k.Q,r=0;q=k.d,p=q.z,r<p.length;++r){o=q.y.n(0,p[r])
q=o.a
p=k.d
n=p.f
m=o.b
l=p.r
p=k.fL(p,o)
q=q===1&&n===2?1:0
B.b.v(s,new A.dV(p,q,m===1&&l===2?1:0))}},
i6(){var s,r,q,p,o,n,m,l,k=this
if(k.be()!==216)throw A.d(A.h("Start Of Image marker not found."))
s=k.be()
while(!0){if(s!==217){r=k.a
r===$&&A.c("input")
r=r.d<r.c}else r=!1
if(!r)break
r=k.a
r===$&&A.c("input")
q=r.l()
if(q<2)A.D(A.h("Invalid Block"))
r=k.a
p=r.R(q-2)
r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:k.i7(s,p)
break
case 219:k.ia(p)
break
case 192:case 193:case 194:k.ic(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.d(A.h("Unhandled frame type "+B.a.bm(s,16)))
case 196:k.i9(p)
break
case 221:k.e=p.l()
break
case 218:k.ir(p)
break
case 255:r=k.a
o=r.a
n=r.d
if(!(n>=0&&n<o.length))return A.a(o,n)
if(o[n]!==255)r.d=n-1
break
default:r=k.a
o=r.a
n=r.d
m=n+-3
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
if(o[m]===255){m=n+-2
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
o=m>=192&&m<=254}else o=!1
if(o){r.d=n-3
break}if(s!==0)throw A.d(A.h("Unknown JPEG marker "+B.a.bm(s,16)))
break}s=k.be()}},
be(){var s,r=this,q=r.a
q===$&&A.c("input")
if(q.d>=q.c)return 0
do{do{s=r.a.u()
if(s!==255){q=r.a
q=q.d<q.c}else q=!1}while(q)
q=r.a
if(q.d>=q.c)return s
do{s=r.a.u()
if(s===255){q=r.a
q=q.d<q.c}else q=!1}while(q)
if(s===0){q=r.a
q=q.d<q.c}else q=!1}while(q)
return s},
ib(a){if(a.j()!==1165519206)return
if(a.l()!==0)return
this.r.cg(a)},
i7(a,b){var s,r,q,p,o,n=b
if(a===224){s=n
r=s.a
s=s.d
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===74){s=n
r=s.a
s=s.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===70){s=n
r=s.a
s=s.d+2
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===73){s=n
r=s.a
s=s.d+3
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===70){s=n
r=s.a
s=s.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]===0}else s=!1}else s=!1}else s=!1}else s=!1
if(s){s=this.b=new A.hm()
r=n
q=r.a
r=r.d+5
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+6
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+7
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+8
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+9
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+10
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+11
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+12
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
s.f=q
r=n
p=r.a
r=r.d+13
if(!(r>=0&&r<p.length))return A.a(p,r)
r=p[r]
s.r=r
n.bV(14+3*q*r,14)}}else if(a===225)this.ib(n)
else if(a===238){s=n
r=s.a
s=s.d
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===65){s=n
r=s.a
s=s.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===100){s=n
r=s.a
s=s.d+2
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===111){s=n
r=s.a
s=s.d+3
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===98){s=n
r=s.a
s=s.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===101){s=n
r=s.a
s=s.d+5
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]===0}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
if(s){s=new A.hj()
this.c=s
r=n
q=r.a
r=r.d+6
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+7
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+8
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+9
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+10
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+11
if(!(q>=0&&q<r.length))return A.a(r,q)
s.d=r[q]}}else if(a===254)try{n.jx()}catch(o){A.ao(o)}},
ia(a){var s,r,q,p,o,n,m,l,k,j
for(s=a.c,r=this.w;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
o=B.a.i(q,4)
n=q&15
if(n>=4)throw A.d(A.h("Invalid number of quantization tables"))
if(r[n]==null)B.b.h(r,n,new Int16Array(64))
m=r[n]
for(q=o!==0,l=0;l<64;++l){if(q)k=a.l()
else{p=a.a
j=a.d++
if(!(j>=0&&j<p.length))return A.a(p,j)
k=p[j]}m.toString
p=B.r[l]
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.d(A.h("Bad length for DQT block"))},
ic(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.d!=null)throw A.d(A.h("Duplicate JPG frame data found."))
s=j.d=new A.et(A.F(t.p,t.d2),A.b([],t.t))
s.b=a===194
s.c=b.u()
s=j.d
s.toString
s.d=b.l()
s=j.d
s.toString
s.e=b.l()
r=b.u()
for(s=j.w,q=0;q<r;++q){p=b.a
o=b.d
n=b.d=o+1
m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
l=b.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
k=B.a.i(n,4)
b.d=l+1
if(!(l>=0&&l<m))return A.a(p,l)
l=p[l]
B.b.v(j.d.z,o)
j.d.y.h(0,o,new A.az(k&15,n&15,s,l))}j.d.jq()
B.b.v(j.x,j.d)},
i9(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.c,r=this.z,q=this.y;p=a.d,p<s;){o=a.a
n=p+1
a.d=n
if(!(p>=0&&p<o.length))return A.a(o,p)
m=o[p]
l=new Uint8Array(16)
for(p=n,k=0,j=0;j<16;++j,p=n){n=p+1
a.d=n
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
if(!(j<16))return A.a(l,j)
l[j]=p
k+=l[j]}i=new Uint8Array(k)
for(j=0;j<k;++j,p=n){n=p+1
a.d=n
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
if(!(j<k))return A.a(i,j)
i[j]=p}if((m&16)!==0){m-=16
h=q}else h=r
if(h.length<=m)B.b.st(h,m+1)
B.b.h(h,m,this.fM(l,i))}},
ir(a){var s,r,q,p,o,n,m,l=this,k=a.u()
if(k<1||k>4)throw A.d(A.h("Invalid SOS block"))
s=A.jS(k,new A.hl(l,a),!0,t.d2)
r=a.u()
q=a.u()
p=a.u()
o=B.a.i(p,4)
n=l.a
n===$&&A.c("input")
m=l.d
o=new A.eu(n,m,s,l.e,r,q,o&15,p&15)
n=m.w
n===$&&A.c("mcusPerLine")
o.f=n
o.r=m.b
o.aG()},
fM(a,b){var s,r,q,p,o,n,m,l,k,j,i=A.b([],t.e8),h=16
while(!0){if(!(h>0&&a[h-1]===0))break;--h}B.b.v(i,new A.cf([]))
if(0>=i.length)return A.a(i,0)
s=i[0]
for(r=b.length,q=0,p=0;p<h;){for(o=0;o<a[p];++o){if(0>=i.length)return A.a(i,-1)
s=i.pop()
n=s.a
m=n.length
l=s.b
if(m<=l)B.b.st(n,l+1)
m=s.b
if(!(q>=0&&q<r))return A.a(b,q)
B.b.h(n,m,b[q])
for(;n=s.b,n>0;){if(0>=i.length)return A.a(i,-1)
s=i.pop()}s.b=n+1
B.b.v(i,s)
for(;i.length<=p;s=k){n=[]
k=new A.cf(n)
B.b.v(i,k)
m=s.a
l=m.length
j=s.b
if(l<=j)B.b.st(m,j+1)
B.b.h(m,s.b,n)}++q}++p
if(p<h){n=[]
k=new A.cf(n)
B.b.v(i,k)
m=s.a
l=m.length
j=s.b
if(l<=j)B.b.st(m,j+1)
B.b.h(m,s.b,n)
s=k}}if(0>=i.length)return A.a(i,0)
return i[0].a},
fL(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.e
a2===$&&A.c("blocksPerLine")
s=a4.f
s===$&&A.c("blocksPerColumn")
r=a2<<3>>>0
q=new Int32Array(64)
p=new Uint8Array(64)
o=s*8
n=A.W(o,null,!1,t.aD)
for(m=a4.c,l=a4.d,k=0,j=0;j<s;++j){i=j<<3>>>0
for(h=0;h<8;++h,k=g){g=k+1
B.b.h(n,k,new Uint8Array(r))}for(f=0;f<a2;++f){if(!(l>=0&&l<4))return A.a(m,l)
e=m[l]
e.toString
d=a4.r
d===$&&A.c("blocks")
if(!(j<d.length))return A.a(d,j)
d=d[j]
if(!(f<d.length))return A.a(d,f)
A.q2(e,d[f],p,q)
c=f<<3>>>0
for(b=0,a=0;a<8;++a){e=i+a
if(!(e<o))return A.a(n,e)
a0=n[e]
for(h=0;h<8;++h,b=a1){a0.toString
e=c+h
a1=b+1
if(!(b>=0&&b<64))return A.a(p,b)
d=p[b]
if(!(e<a0.length))return A.a(a0,e)
a0[e]=d}}}}return n}}
A.hl.prototype={
$1(a){var s,r,q,p,o,n=this.b,m=n.u(),l=n.u()
n=this.a
if(!n.d.y.a1(m))throw A.d(A.h("Invalid Component in SOS block"))
s=n.d.y.n(0,m)
s.toString
r=B.a.i(l,4)&15
q=l&15
p=n.z
o=p.length
if(r<o){if(!(r<o))return A.a(p,r)
p=p[r]
p.toString
s.w=p}n=n.y
p=n.length
if(q<p){if(!(q<p))return A.a(n,q)
n=n[q]
n.toString
s.x=n}return s},
$S:27}
A.cf.prototype={}
A.et.prototype={
jq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.y,r=A.w(s).c,q=A.eC(s,s.r,r);q.A();){p=s.n(0,q.d)
a.sjh(Math.max(a.f,p.a))
a.sji(Math.max(a.r,p.b))}q=a.e
q.toString
a.w=B.c.aU(q/8/a.f)
q=a.d
q.toString
a.x=B.c.aU(q/8/a.r)
for(r=A.eC(s,s.r,r),q=t.fZ,o=t.an,n=t.f0;r.A();){m=s.n(0,r.d)
m.toString
l=a.e
l.toString
k=m.a
j=B.c.aU(B.c.aU(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.c.aU(B.c.aU(l/8)*i/a.r)
g=a.w*k
f=a.x*i
e=J.ag(f,n)
for(d=0;d<f;++d){c=J.ag(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.sfs(q.a(e))}},
sjh(a){this.f=A.u(a)},
sji(a){this.r=A.u(a)}}
A.hm.prototype={}
A.eu.prototype={
aG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="blocksPerLine",a2=a0.y,a3=a2.length,a4=a0.r
a4.toString
if(a4)if(a0.Q===0)s=a0.at===0?a0.gh0():a0.gh2()
else s=a0.at===0?a0.gfT():a0.gfV()
else s=a0.gfY()
a4=a3===1
if(a4){if(0>=a3)return A.a(a2,0)
r=a2[0]
q=r.e
q===$&&A.c(a1)
r=r.f
r===$&&A.c("blocksPerColumn")
p=q*r}else{r=a0.f
r===$&&A.c("mcusPerLine")
q=a0.b.x
q===$&&A.c("mcusPerColumn")
p=r*q}r=a0.z
if(r==null||r===0)a0.z=p
for(r=a0.a,q=t.m,o=0;o<p;){for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
a2[n].y=0}a0.CW=0
if(a4){if(0>=a2.length)return A.a(a2,0)
m=a2[0]
l=0
while(!0){k=a0.z
k.toString
if(!(l<k))break
q.a(s)
k=m.e
k===$&&A.c(a1)
j=B.a.X(o,k)
i=B.a.N(o,k)
k=m.r
k===$&&A.c("blocks")
if(!(j>=0&&j<k.length))return A.a(k,j)
k=k[j]
if(!(i>=0&&i<k.length))return A.a(k,i)
s.$2(m,k[i]);++o;++l}}else{l=0
while(!0){k=a0.z
k.toString
if(!(l<k))break
for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
m=a2[n]
h=m.a
g=m.b
for(f=0;f<g;++f)for(e=0;e<h;++e)a0.h5(m,s,o,f,e)}++o;++l}}a0.ch=0
k=r.a
d=r.d
c=k.length
if(!(d>=0&&d<c))return A.a(k,d)
b=k[d]
a=d+1
if(!(a<c))return A.a(k,a)
a=k[a]
if(b===255)if(a>=208&&a<=215)r.d=d+2
else break}},
b3(){var s,r,q=this,p=q.ch
if(p>0){--p
q.ch=p
return B.a.a7(q.ay,p)&1}p=q.a
if(p.d>=p.c)return null
s=p.u()
q.ay=s
if(s===255){r=p.u()
if(r!==0)throw A.d(A.h("unexpected marker: "+B.a.bm((q.ay<<8|r)>>>0,16)))}q.ch=7
return B.a.i(q.ay,7)&1},
bv(a){var s,r,q
for(s=t.j,r=a;q=this.b3(),q!=null;){r=J.mG(s.a(r),q)
if(typeof r=="number")return B.c.m(r)}return null},
cP(a){var s,r
for(s=0;a>0;){r=this.b3()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
by(a){var s
if(a===1)return this.b3()===1?1:-1
a.toString
s=this.cP(a)
s.toString
if(s>=B.a.D(1,a-1))return s
return s+B.a.D(-1,a)+1},
fZ(a,b){var s,r,q,p,o,n,m=this,l=a.w
l===$&&A.c("huffmanTableDC")
s=m.bv(l)
r=s===0?0:m.by(s)
l=a.y
l===$&&A.c("pred")
l+=r
a.y=l
b[0]=l
for(q=1;q<64;){l=a.x
l===$&&A.c("huffmanTableAC")
l=m.bv(l)
l.toString
p=l&15
o=B.a.i(l,4)
if(p===0){if(o<15)break
q+=16
continue}q+=o
p=m.by(p)
if(!(q>=0&&q<80))return A.a(B.r,q)
n=B.r[q]
if(!(n<64))return A.a(b,n)
b[n]=p;++q}},
h1(a,b){var s,r,q=a.w
q===$&&A.c("huffmanTableDC")
s=this.bv(q)
r=s===0?0:B.a.B(this.by(s),this.ax)
q=a.y
q===$&&A.c("pred")
q+=r
a.y=q
b[0]=q},
h3(a,b){var s,r
t.L.a(b)
s=b[0]
r=this.b3()
r.toString
b[0]=(s|B.a.B(r,this.ax))>>>0},
fU(a,b){var s,r,q,p,o,n,m,l=this,k=l.CW
if(k>0){l.CW=k-1
return}s=l.Q
r=l.as
for(k=l.ax;s<=r;){q=a.x
q===$&&A.c("huffmanTableAC")
q=l.bv(q)
q.toString
p=q&15
o=B.a.i(q,4)
if(p===0){if(o<15){k=l.cP(o)
k.toString
l.CW=k+B.a.B(1,o)-1
break}s+=16
continue}s+=o
if(!(s>=0&&s<80))return A.a(B.r,s)
n=B.r[s]
q=l.by(p)
m=B.a.B(1,k)
if(!(n<64))return A.a(b,n)
b[n]=q*m;++s}},
fW(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.L.a(b)
s=j.Q
r=j.as
for(q=j.ax,p=0;s<=r;){if(!(s>=0&&s<80))return A.a(B.r,s)
o=B.r[s]
n=j.cx
switch(n){case 0:n=a.x
n===$&&A.c("huffmanTableAC")
m=j.bv(n)
if(m==null)throw A.d(A.h("Invalid progressive encoding"))
l=m&15
p=B.a.i(m,4)
if(l===0)if(p<15){n=j.cP(p)
n.toString
j.CW=n+B.a.B(1,p)
j.cx=4}else{j.cx=1
p=16}else{if(l!==1)throw A.d(A.h("invalid ACn encoding"))
j.cy=j.by(l)
j.cx=p!==0?2:3}continue
case 1:case 2:if(!(o<64))return A.a(b,o)
k=b[o]
if(k!==0){n=j.b3()
n.toString
n=B.a.B(n,q)
if(!(o<64))return A.a(b,o)
b[o]=k+n}else{--p
if(p===0)j.cx=n===2?3:0}break
case 3:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.b3()
k.toString
k=B.a.B(k,q)
if(!(o<64))return A.a(b,o)
b[o]=n+k}else{n=j.cy
n===$&&A.c("successiveACNextValue")
n=B.a.B(n,q)
if(!(o<64))return A.a(b,o)
b[o]=n
j.cx=0}break
case 4:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.b3()
k.toString
k=B.a.B(k,q)
if(!(o<64))return A.a(b,o)
b[o]=n+k}break}++s}if(j.cx===4)if(--j.CW===0)j.cx=0},
h5(a,b,c,d,e){var s,r,q,p,o
t.m.a(b)
s=this.f
s===$&&A.c("mcusPerLine")
r=B.a.X(c,s)*a.b+d
q=B.a.N(c,s)*a.a+e
s=a.r
s===$&&A.c("blocks")
p=s.length
if(r>=p)return
if(!(r>=0))return A.a(s,r)
s=s[r]
o=s.length
if(q>=o)return
if(!(q>=0))return A.a(s,q)
b.$2(a,s[q])}}
A.es.prototype={
ag(a){var s
t.L.a(a)
s=A.l0()
s.cg(a)
if(s.x.length!==1)throw A.d(A.h("only single frame JPEGs supported"))
return A.pM(s)}}
A.d5.prototype={}
A.el.prototype={}
A.hD.prototype={
sjn(a){this.x=t.k.a(a)},
sjK(a){this.y=t.T.a(a)},
siN(a){this.z=t.k.a(a)}}
A.em.prototype={}
A.eP.prototype={
bj(a){var s,r,q,p,o,n=A.m(t.L.a(a),!0,null,0).U(8)
for(s=n.a,r=n.d,q=s.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
if(s[o]!==B.ag[p])return!1}return!0},
aE(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=t.L,b0=A.m(a9.a(b1),!0,a8,0)
a7.d=b0
s=b0.U(8)
for(b0=s.a,r=s.d,q=b0.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(b0,o)
if(b0[o]!==B.ag[p])return a8}for(b0=t.t,r=t.N,q=t.dm;!0;){o=a7.d
n=o.d-o.b
m=o.j()
l=a7.d.O(4)
switch(l){case"tEXt":if(a7.a==null)a7.a=new A.em(A.F(r,r),A.b([],q),A.b([],b0))
o=a7.d
k=o.R(m)
o.d=o.d+(k.c-k.d)
j=k.P()
for(i=j.length,p=0;p<i;++p)if(j[p]===0){h=B.a5.ce(new Uint8Array(j.subarray(0,A.aI(0,p,i))))
o=p+1
g=B.a5.ce(new Uint8Array(j.subarray(o,A.aI(o,a8,i))))
a7.a.ch.h(0,h,g)
break}a7.d.d+=4
break
case"IHDR":o=a7.d
k=o.R(m)
o.d=o.d+(k.c-k.d)
f=A.j(k,a8,0)
e=f.P()
o=new A.em(A.F(r,r),A.b([],q),A.b([],b0))
a7.a=o
o.a=f.j()
o=a7.a
o.toString
o.b=f.j()
o=a7.a
o.toString
d=f.a
c=f.d
b=f.d=c+1
a=d.length
if(!(c>=0&&c<a))return A.a(d,c)
o.d=d[c]
c=f.d=b+1
if(!(b>=0&&b<a))return A.a(d,b)
o.e=d[b]
b=f.d=c+1
if(!(c>=0&&c<a))return A.a(d,c)
c=f.d=b+1
if(!(b>=0&&b<a))return A.a(d,b)
o.r=d[b]
f.d=c+1
if(!(c>=0&&c<a))return A.a(d,c)
o.w=d[c]
if(!B.b.aw(A.b([0,2,3,4,6],b0),a7.a.e))return a8
o=a7.a
if(o.r!==0)return a8
switch(o.e){case 0:if(!B.b.aw(A.b([1,2,4,8,16],b0),a7.a.d))return a8
break
case 2:if(!B.b.aw(A.b([8,16],b0),a7.a.d))return a8
break
case 3:if(!B.b.aw(A.b([1,2,4,8],b0),a7.a.d))return a8
break
case 4:if(!B.b.aw(A.b([8,16],b0),a7.a.d))return a8
break
case 6:if(!B.b.aw(A.b([8,16],b0),a7.a.d))return a8
break}if(a7.d.j()!==A.au(a9.a(e),A.au(new A.ap(l),0)))throw A.d(A.h("Invalid "+l+" checksum"))
break
case"PLTE":o=a7.a
o.toString
d=a7.d
k=d.R(m)
d.d=d.d+(k.c-k.d)
o.sjn(k.P())
if(a7.d.j()!==A.au(a9.a(a9.a(a7.a.x)),A.au(new A.ap(l),0)))throw A.d(A.h("Invalid "+l+" checksum"))
break
case"tRNS":o=a7.a
o.toString
d=a7.d
k=d.R(m)
d.d=d.d+(k.c-k.d)
o.sjK(k.P())
a0=a7.d.j()
o=a7.a.y
o.toString
if(a0!==A.au(a9.a(o),A.au(new A.ap(l),0)))throw A.d(A.h("Invalid "+l+" checksum"))
break
case"IEND":a7.d.d+=4
break
case"gAMA":if(m!==4)throw A.d(A.h("Invalid gAMA chunk"))
a1=a7.d.j()
a7.d.d+=4
if(a1!==1e5)a7.a.Q=a1/1e5
break
case"IDAT":B.b.v(a7.a.db,n)
o=a7.d
d=o.d+=m
o.d=d+4
break
case"acTL":a7.a.toString
a7.d.j()
a7.a.toString
a7.d.j()
a7.d.d+=4
break
case"fcTL":a2=new A.el(A.b([],b0))
B.b.v(a7.a.cy,a2)
a7.d.j()
a2.b=a7.d.j()
a2.c=a7.d.j()
a7.d.j()
a7.d.j()
a7.d.l()
a7.d.l()
o=a7.d
d=o.a
c=o.d
b=o.d=c+1
a=d.length
if(!(c>=0&&c<a))return A.a(d,c)
c=b+1
o.d=c
if(!(b>=0&&b<a))return A.a(d,b)
o.d=c+4
break
case"fdAT":a7.d.j()
B.b.v(B.b.gje(a7.a.cy).y,n)
o=a7.d
d=o.d+=m-4
o.d=d+4
break
case"bKGD":o=a7.a
d=o.e
if(d===3){d=a7.d
c=d.a
d=d.d++
if(!(d>=0&&d<c.length))return A.a(c,d);--m
a3=c[d]*3
o=o.x
d=o.length
if(!(a3>=0&&a3<d))return A.a(o,a3)
a4=o[a3]
c=a3+1
if(!(c<d))return A.a(o,c)
a5=o[c]
c=a3+2
if(!(c<d))return A.a(o,c)
a6=o[c]
B.c.m(B.a.p(255,0,255))
B.c.m(B.a.p(a6,0,255))
B.c.m(B.a.p(a5,0,255))
B.c.m(B.a.p(a4,0,255))}else if(d===0||d===4){a7.d.l()
m-=2}else if(d===2||d===6){a7.d.l()
a7.d.l()
a7.d.l()
m-=24}if(m>0)a7.d.d+=m
a7.d.d+=4
break
case"iCCP":o=a7.a
o.toString
o.at=a7.d.bk()
o=a7.a
o.toString
d=a7.d
c=d.a
b=d.d++
if(!(b>=0&&b<c.length))return A.a(c,b)
k=d.R(m-(o.at.length+2))
d.d=d.d+(k.c-k.d)
d=a7.a
d.toString
d.ay=k.P()
a7.d.d+=4
break
default:o=a7.d
d=o.d+=m
o.d=d+4
break}if(l==="IEND")break
o=a7.d
if(o.d>=o.c)return a8}return a7.a},
a2(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null)return a7
s=null
p=a8.a
o=a8.b
a8=a8.cy
n=a8.length
if(n===0||a9===0){m=A.b([],t.a)
for(l=a6.a.db.length,a8=t.L,k=0,j=0;j<l;++j){n=a6.d
n===$&&A.c("_input")
i=a6.a.db
if(!(j<i.length))return A.a(i,j)
n.d=i[j]
h=n.j()
g=a6.d.O(4)
n=a6.d
f=n.R(h)
n.d=n.d+(f.c-f.d)
e=f.P()
k+=e.length
B.b.v(m,e)
if(a6.d.j()!==A.au(a8.a(e),A.au(new A.ap(g),0)))throw A.d(A.h("Invalid "+g+" checksum"))}s=new Uint8Array(k)
for(a8=m.length,d=0,c=0;c<m.length;m.length===a8||(0,A.aK)(m),++c){e=m[c]
J.kB(s,d,e)
d+=e.length}}else{if(a9>=n)throw A.d(A.h("Invalid Frame Number: "+a9))
if(!(a9<n))return A.a(a8,a9)
b=a8[a9]
p=b.b
o=b.c
m=A.b([],t.a)
for(a8=b.y,k=0,j=0;j<a8.length;++j){n=a6.d
n===$&&A.c("_input")
n.d=a8[j]
h=n.j()
a6.d.O(4)
n=a6.d
n.d+=4
f=n.R(h-4)
n.d=n.d+(f.c-f.d)
e=f.P()
k+=e.length
B.b.v(m,e)}s=new Uint8Array(k)
for(a8=m.length,d=0,c=0;c<m.length;m.length===a8||(0,A.aK)(m),++c){e=m[c]
J.kB(s,d,e)
d+=e.length}}a8=a6.a
n=a8.e
a=n===4||n===6||a8.y!=null?B.k:B.A
p.toString
o.toString
a0=A.a1(p,o,a,a7,a7)
r=null
try{r=B.x.bE(A.bA(t.L.a(s),1,a7,0),!1)}catch(a1){q=A.a3(a1)
A.jz(q)
return a7}a2=A.m(r,!0,a7,0)
a6.c=a6.b=0
a8=a6.a
if(a8.z==null){a8.siN(A.jS(256,new A.hB(),!1,t.p))
a8=a6.a
n=a8.x
if(n!=null&&a8.Q!=null)for(i=n.length,a8=a8.z,j=0;j<i;++j){a8.toString
a3=n[j]
if(!(a3<256))return A.a(a8,a3)
n[j]=a8[a3]}}a8=a6.a
a4=a8.a
a5=a8.b
a8.a=p
a8.b=o
a6.e=0
if(a8.w!==0){a8=B.a.i(p+7,3)
n=B.a.i(o+7,3)
a6.b2(a2,a0,0,0,8,8,a8,n)
a8=p+3
a6.b2(a2,a0,4,0,8,8,B.a.i(a8,3),n)
n=o+3
a6.b2(a2,a0,0,4,4,8,B.a.i(a8,2),B.a.i(n,3))
a8=p+1
a6.b2(a2,a0,2,0,4,4,B.a.i(a8,2),B.a.i(n,2))
n=o+1
a6.b2(a2,a0,0,2,2,4,B.a.i(a8,1),B.a.i(n,2))
a6.b2(a2,a0,1,0,2,2,B.a.i(p,1),B.a.i(n,1))
a6.b2(a2,a0,0,1,1,2,p,B.a.i(o,1))}else a6.i0(a2,a0)
a8=a6.a
a8.a=a4
a8.b=a5
n=a8.ay
if(n!=null)a0.z=new A.h8(a8.at,B.R,n)
a8=a8.ch
if(a8.a!==0)a0.iJ(a8)
return a0},
ag(a){if(this.aE(t.L.a(a))==null)return null
return this.a2(0)},
b2(b1,b2,b3,b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=a8.a,b0=a9.e
if(b0===4)s=2
else if(b0===2)s=3
else{b0=b0===6?4:1
s=b0}a9=a9.d
a9.toString
r=s*a9
q=B.a.i(r+7,3)
p=B.a.i(r*b7+7,3)
o=A.W(p,0,!1,t.p)
n=A.b([o,o],t.S)
m=A.b([0,0,0,0],t.t)
for(a9=b2.x,b0=b2.a,l=a9.length,k=b5>1,j=b2.b,i=b5-b3,h=i<=1,g=b4,f=0,e=0;f<b8;++f,g+=b6,++a8.e){d=b1.a
c=b1.d++
if(!(c>=0&&c<d.length))return A.a(d,c)
c=d[c]
b=b1.R(p)
b1.d=b1.d+(b.c-b.d)
B.b.h(n,e,b.P())
if(!(e>=0&&e<2))return A.a(n,e)
a=n[e]
e=1-e
a8.ea(c,q,a,n[e])
a8.c=a8.b=0
d=a.length
a0=new A.a5(a,0,d,0,!0)
for(d=g*b0,a1=b3,a2=0;a2<b7;++a2,a1+=b5){a8.e0(a0,m)
a3=a8.dA(m)
c=d+a1
if(!(c>=0&&c<l))return A.a(a9,c)
a9[c]=a3
if(!h||k)for(a4=0;a4<b5;++a4)for(a5=0;a5<i;++a5){c=a1+a5
a6=g+a5
if(c<b0)a7=a6<j
else a7=!1
if(a7){c=a6*b0+c
if(!(c>=0&&c<l))return A.a(a9,c)
a9[c]=a3}}}}},
i0(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a,a2=a1.e
if(a2===4)s=2
else if(a2===2)s=3
else{a2=a2===6?4:1
s=a2}a2=a1.d
a2.toString
r=s*a2
q=a1.a
p=a1.b
o=B.a.i(q*r+7,3)
n=B.a.i(r+7,3)
m=A.W(o,0,!1,t.p)
l=A.b([m,m],t.S)
k=A.b([0,0,0,0],t.t)
for(a1=a4.x,a2=a1.length,j=0,i=0,h=0;j<p;++j,h=d){g=a3.a
f=a3.d++
if(!(f>=0&&f<g.length))return A.a(g,f)
f=g[f]
e=a3.R(o)
a3.d=a3.d+(e.c-e.d)
B.b.h(l,h,e.P())
if(!(h>=0&&h<2))return A.a(l,h)
d=1-h
a0.ea(f,n,l[h],l[d])
a0.c=a0.b=0
f=l[h]
g=f.length
c=new A.a5(f,0,g,0,!0)
for(b=0;b<q;++b,i=a){a0.e0(c,k)
a=i+1
g=a0.dA(k)
if(!(i>=0&&i<a2))return A.a(a1,i)
a1[i]=g}}},
ea(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.L
f.a(c)
f.a(d)
s=c.length
switch(a){case 0:break
case 1:for(f=J.S(c),r=b;r<s;++r){q=c.length
if(!(r<q))return A.a(c,r)
p=c[r]
o=r-b
if(!(o>=0&&o<q))return A.a(c,o)
o=c[o]
if(typeof p!=="number")return p.bo()
if(typeof o!=="number")return A.J(o)
f.h(c,r,p+o&255)}break
case 2:for(f=J.S(c),r=0;r<s;++r){if(!(r<c.length))return A.a(c,r)
q=c[r]
if(!(r<d.length))return A.a(d,r)
p=d[r]
if(typeof q!=="number")return q.bo()
if(typeof p!=="number")return A.J(p)
f.h(c,r,q+p&255)}break
case 3:for(f=J.S(c),r=0;r<s;++r){if(r<b)n=0
else{q=r-b
if(!(q>=0&&q<c.length))return A.a(c,q)
n=c[q]}if(!(r<d.length))return A.a(d,r)
m=d[r]
if(!(r<c.length))return A.a(c,r)
q=c[r]
p=B.a.i(n+m,1)
if(typeof q!=="number")return q.bo()
f.h(c,r,q+p&255)}break
case 4:for(f=J.S(c),r=0;r<s;++r){q=r<b
if(q)n=0
else{p=r-b
if(!(p>=0&&p<c.length))return A.a(c,p)
n=c[p]}p=d.length
if(!(r<p))return A.a(d,r)
m=d[r]
if(q)l=0
else{q=r-b
if(!(q>=0&&q<p))return A.a(d,q)
l=d[q]}k=n+m-l
j=Math.abs(k-n)
i=Math.abs(k-m)
h=Math.abs(k-l)
if(j<=i&&j<=h)g=n
else g=i<=h?m:l
if(!(r<c.length))return A.a(c,r)
q=c[r]
if(typeof q!=="number")return q.bo()
f.h(c,r,q+g&255)}break
default:throw A.d(A.h("Invalid filter value: "+a))}},
ap(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.u()
if(b===16)return a.l()
for(s=a.c;r=n.c,r<b;){q=a.d
if(q>=s)throw A.d(A.h("Invalid PNG data."))
p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
n.b=B.a.D(p[q],r)
n.c=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.a3(n.b,s)
n.c=s
return(r&o)>>>0},
e0(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.e
switch(r){case 0:s=s.d
s.toString
B.b.h(b,0,q.ap(a,s))
return
case 2:s=s.d
s.toString
B.b.h(b,0,q.ap(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.ap(a,s))
s=q.a.d
s.toString
B.b.h(b,2,q.ap(a,s))
return
case 3:s=s.d
s.toString
B.b.h(b,0,q.ap(a,s))
return
case 4:s=s.d
s.toString
B.b.h(b,0,q.ap(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.ap(a,s))
return
case 6:s=s.d
s.toString
B.b.h(b,0,q.ap(a,s))
s=q.a.d
s.toString
B.b.h(b,1,q.ap(a,s))
s=q.a.d
s.toString
B.b.h(b,2,q.ap(a,s))
s=q.a.d
s.toString
B.b.h(b,3,q.ap(a,s))
return}throw A.d(A.h("Invalid color type: "+A.o(r)+"."))},
dA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.L.a(a)
s=g.a
r=s.e
switch(r){case 0:q=A.as("g")
s=g.a
switch(s.d){case 1:q.b=a[0]===0?0:255
break
case 2:q.b=a[0]*85
break
case 4:q.b=a[0]<<4>>>0
break
case 8:q.b=a[0]
break
case 16:q.b=B.a.i(a[0],8)
break}s=s.z
s.toString
q.b=B.b.n(s,q.K())
s=g.a.y
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
p=s[0]
if(1>=r)return A.a(s,1)
s=s[1]
if(a[0]===((p&255)<<24|s&255)>>>0)return A.aD(q.K(),q.K(),q.K(),0)}return A.aD(q.K(),q.K(),q.K(),255)
case 2:o=A.as("r")
q=A.as("g")
n=A.as("b")
s=g.a
switch(s.d){case 1:o.b=a[0]===0?0:255
q.b=a[1]===0?0:255
n.b=a[2]===0?0:255
break
case 2:o.b=a[0]*85
q.b=a[1]*85
n.b=a[2]*85
break
case 4:o.b=a[0]<<4>>>0
q.b=a[1]<<4>>>0
n.b=a[2]<<4>>>0
break
case 8:o.b=a[0]
q.b=a[1]
n.b=a[2]
break
case 16:o.b=B.a.i(a[0],8)
q.b=B.a.i(a[1],8)
n.b=B.a.i(a[2],8)
break}s=s.z
s.toString
o.b=B.b.n(s,o.K())
s=g.a.z
s.toString
q.b=B.b.n(s,q.K())
s=g.a.z
s.toString
n.b=B.b.n(s,n.K())
s=g.a.y
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
p=s[0]
if(1>=r)return A.a(s,1)
m=s[1]
if(2>=r)return A.a(s,2)
l=s[2]
if(3>=r)return A.a(s,3)
k=s[3]
if(4>=r)return A.a(s,4)
j=s[4]
if(5>=r)return A.a(s,5)
s=s[5]
if(a[0]===((p&255)<<8|m&255)&&a[1]===((l&255)<<8|k&255)&&a[2]===((j&255)<<8|s&255))return A.aD(o.K(),q.K(),n.K(),0)}return A.aD(o.K(),q.K(),n.K(),255)
case 3:r=a[0]
i=r*3
p=s.y
if(p!=null&&r<p.length){if(!(r>=0&&r<p.length))return A.a(p,r)
h=p[r]}else h=255
s=s.x
r=s.length
if(i>=r)return A.aD(255,255,255,h)
if(!(i>=0))return A.a(s,i)
o=s[i]
p=i+1
if(!(p<r))return A.a(s,p)
q=s[p]
p=i+2
if(!(p<r))return A.a(s,p)
return A.aD(o,q,s[p],h)
case 4:q=A.as("g")
h=A.as("a")
s=g.a
switch(s.d){case 1:q.b=a[0]===0?0:255
h.b=a[1]===0?0:255
break
case 2:q.b=a[0]*85
h.b=a[1]*85
break
case 4:q.b=a[0]<<4>>>0
h.b=a[1]<<4>>>0
break
case 8:q.b=a[0]
h.b=a[1]
break
case 16:q.b=B.a.i(a[0],8)
h.b=B.a.i(a[1],8)
break}s=s.z
s.toString
q.b=B.b.n(s,q.K())
return A.aD(q.K(),q.K(),q.K(),h.K())
case 6:o=A.as("r")
q=A.as("g")
n=A.as("b")
h=A.as("a")
s=g.a
switch(s.d){case 1:o.b=a[0]===0?0:255
q.b=a[1]===0?0:255
n.b=a[2]===0?0:255
h.b=a[3]===0?0:255
break
case 2:o.b=a[0]*85
q.b=a[1]*85
n.b=a[2]*85
h.b=a[3]*85
break
case 4:o.b=a[0]<<4>>>0
q.b=a[1]<<4>>>0
n.b=a[2]<<4>>>0
h.b=a[3]<<4>>>0
break
case 8:o.b=a[0]
q.b=a[1]
n.b=a[2]
h.b=a[3]
break
case 16:o.b=B.a.i(a[0],8)
q.b=B.a.i(a[1],8)
n.b=B.a.i(a[2],8)
h.b=B.a.i(a[3],8)
break}s=s.z
s.toString
o.b=B.b.n(s,o.K())
s=g.a.z
s.toString
q.b=B.b.n(s,q.K())
s=g.a.z
s.toString
n.b=B.b.n(s,n.K())
return A.aD(o.K(),q.K(),n.K(),h.K())}throw A.d(A.h("Invalid color type: "+A.o(r)+"."))}}
A.hB.prototype={
$1(a){return a},
$S:20}
A.hC.prototype={
iG(a){var s,r,q,p,o,n,m,l,k,j=this
j.f=j.e=a.d
j.r=a.f
j.w=a.r
j.x=a.w
if(j.ax==null){s=A.bG(!0,8192)
j.ax=s
j.a=a.c
r=a.a
j.y=r
q=a.b
j.z=q
s.a6(A.b([137,80,78,71,13,10,26,10],t.t))
p=A.bG(!0,8192)
p.ac(r)
p.ac(q)
p.F(8)
p.F(j.a===B.A?2:6)
p.F(0)
p.F(0)
p.F(0)
s=j.ax
s.toString
j.bA(s,"IHDR",A.I(p.c.buffer,0,p.a))
j.iF(j.ax,a.z)}s=a.b
r=a.c===B.k?4:3
o=new Uint8Array(a.a*s*r+s)
j.hn(0,a,o)
n=B.a7.em(o,j.d)
s=a.Q
if(s!=null)for(s=A.eC(s,s.r,A.w(s).c),r=t.L;s.A();){q=s.d
m=a.Q.n(0,q)
m.toString
A.aH(m)
p=new A.eM(!0,new Uint8Array(8192))
p.a6(B.a6.bh(q))
p.F(0)
p.a6(B.a6.bh(m))
q=j.ax
q.toString
m=p.c.buffer
l=p.a
m=new Uint8Array(m,0,l)
r.a(m)
q.ac(m.length)
q.a6(new A.ap("tEXt"))
q.a6(m)
q.ac(A.au(m,A.au(new A.ap("tEXt"),0)))}if(j.as<=1){s=j.ax
s.toString
j.bA(s,"IDAT",n)}else{k=A.bG(!0,8192)
k.ac(j.as)
k.a6(n)
s=j.ax
s.toString
j.bA(s,"fdAT",A.I(k.c.buffer,0,k.a));++j.as}},
j8(){var s,r=this,q=r.ax
if(q==null)return null
r.bA(q,"IEND",A.b([],t.t))
r.as=0
q=r.ax
s=A.I(q.c.buffer,0,q.a)
r.ax=null
return s},
iF(a,b){var s,r
if(b==null)return
s=A.bG(!0,8192)
s.a6(new A.ap(b.a))
s.F(0)
s.F(0)
s.a6(b.iS())
r=this.ax
r.toString
this.bA(r,"iCCP",A.I(s.c.buffer,0,s.a))},
bA(a,b,c){t.L.a(c)
a.ac(c.length)
a.a6(new A.ap(b))
a.a6(c)
a.ac(A.au(c,A.au(new A.ap(b),0)))},
hn(a,b,c){var s,r,q
t.L.a(c)
for(s=b.b,r=0,q=0;q<s;++q)switch(4){case 4:r=this.ho(b,r,q,c)
break}},
c4(a,b,c){var s=a+b-c,r=s>a?s-a:a-s,q=s>b?s-b:b-s,p=s>c?s-c:c-s
if(r<=q&&r<=p)return a
else if(q<=p)return b
return c},
ho(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
t.L.a(b5)
s=b3+1
r=b5.length
if(!(b3<r))return A.a(b5,b3)
b5[b3]=4
for(q=b2.a,p=b2.c===B.k,o=b2.x,n=b4*q,m=o.length,l=(b4-1)*q,k=b4===0,j=!k,b3=s,i=0;i<q;++i){h=i===0
if(h)g=0
else{f=n+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
g=o[f]&255}if(h)e=0
else{f=n+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
e=o[f]>>>8&255}if(h)d=0
else{f=n+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
d=o[f]>>>16&255}if(k)c=0
else{f=l+i
if(!(f>=0&&f<m))return A.a(o,f)
c=o[f]&255}if(k)b=0
else{f=l+i
if(!(f>=0&&f<m))return A.a(o,f)
b=o[f]>>>8&255}if(k)a=0
else{f=l+i
if(!(f>=0&&f<m))return A.a(o,f)
a=o[f]>>>16&255}if(!j||h)a0=0
else{f=l+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
a0=o[f]&255}if(!j||h)a1=0
else{f=l+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
a1=o[f]>>>8&255}if(!j||h)a2=0
else{f=l+(i-1)
if(!(f>=0&&f<m))return A.a(o,f)
a2=o[f]>>>16&255}f=n+i
if(!(f>=0&&f<m))return A.a(o,f)
a3=o[f]
a4=b1.c4(g,c,a0)
a5=b1.c4(e,b,a1)
a6=b1.c4(d,a,a2)
s=b3+1
if(!(b3<r))return A.a(b5,b3)
b5[b3]=(a3&255)-a4&255
b3=s+1
if(!(s<r))return A.a(b5,s)
b5[s]=(a3>>>8&255)-a5&255
s=b3+1
if(!(b3<r))return A.a(b5,b3)
b5[b3]=(a3>>>16&255)-a6&255
if(p){if(h)a7=0
else{a3=n+(i-1)
if(!(a3>=0&&a3<m))return A.a(o,a3)
a7=o[a3]>>>24&255}if(k)a8=0
else{a3=l+i
if(!(a3>=0&&a3<m))return A.a(o,a3)
a8=o[a3]>>>24&255}if(!j||h)a9=0
else{h=l+(i-1)
if(!(h>=0&&h<m))return A.a(o,h)
a9=o[h]>>>24&255}h=o[f]
b0=b1.c4(a7,a8,a9)
b3=s+1
if(!(s<r))return A.a(b5,s)
b5[s]=(h>>>24&255)-b0&255}else b3=s}return b3}}
A.eR.prototype={
sjd(a){t.T.a(a)},
seS(a){t.T.a(a)},
sjz(a){t.T.a(a)},
sjA(a){t.T.a(a)}}
A.eS.prototype={
saF(a){t.T.a(a)},
saL(a){t.T.a(a)}}
A.aF.prototype={}
A.eU.prototype={
saF(a){t.T.a(a)},
saL(a){t.T.a(a)}}
A.eV.prototype={
saF(a){t.T.a(a)},
saL(a){t.T.a(a)}}
A.eX.prototype={
saF(a){t.T.a(a)},
saL(a){t.T.a(a)}}
A.eY.prototype={
saF(a){t.T.a(a)},
saL(a){t.T.a(a)}}
A.d8.prototype={}
A.eW.prototype={}
A.hF.prototype={
fi(a){var s,r,q,p,o=this
a.l()
a.l()
a.l()
a.l()
s=B.a.I(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.w=new Uint16Array(s)
for(r=0;r<s;++r){q=o.e
p=a.l()
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.f
q=a.l()
if(!(r<p.length))return A.a(p,r)
p[r]=q
q=o.r
p=a.l()
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.w
q=a.l()
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.bH.prototype={
ey(a,b,c,d,e,f,g){if(e==null)e=a.l()
switch(e){case 0:d.toString
this.iq(a,b,c,d)
break
case 1:if(f==null)f=this.im(a,c)
d.toString
this.ip(a,b,c,d,f,g)
break
default:throw A.d(A.h("Unsupported compression: "+e))}},
jw(a,b,c,d){return this.ey(a,b,c,d,null,null,0)},
im(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.l()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
iq(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.i.aj(s,0,r,255)
return}this.c=a.U(r).P()},
ip(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=b*c
if(d===16)l*=2
s=new Uint8Array(l)
this.c=s
r=f*c
q=e.length
if(r>=q){B.i.aj(s,0,l,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.R(e[r])
a.d=a.d+(m.c-m.d)
this.h6(m,this.c,p)
p+=b}},
h6(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
o=a.d=q+1
n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
q=p[q]
$.aa()[0]=q
q=$.af()
if(0>=q.length)return A.a(q,0)
m=q[0]
if(m<0){m=1-m
a.d=o+1
if(!(o>=0&&o<n))return A.a(p,o)
q=p[o]
for(l=0;l<m;++l,c=k){k=c+1
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}else{++m
for(q=o,l=0;l<m;++l,q=o,c=k){k=c+1
o=q+1
a.d=o
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}}}}
A.hH.prototype={
fj(a){var s,r,q=this
q.at=A.m(a,!0,null,0)
q.i3()
if(q.d!==943870035)return
s=q.at.j()
q.at.U(s)
s=q.at.j()
q.ax=q.at.U(s)
s=q.at.j()
q.ay=q.at.U(s)
r=q.at
q.ch=r.U(r.c-r.d)},
aG(){var s,r=this
if(r.d===943870035){s=r.at
s===$&&A.c("_input")
s=s==null}else s=!0
if(s)return!1
r.ik()
r.il()
r.io()
r.ch=r.ay=r.ax=r.at=null
return!0},
j_(){if(!this.aG())return null
return this.jC()},
jC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.z
if(b4!=null)return b4
b4=A.a1(b3.a,b3.b,B.k,null,null)
b3.z=b4
b4=b4.x
B.t.aj(b4,0,b4.length,0)
s=b3.z.aY()
b4=s.length
r=0
while(!0){q=b3.x
q===$&&A.c("layers")
if(!(r<q.length))break
c$0:{p=q[r]
q=p.y
q===$&&A.c("flags")
if((q&2)!==0)break c$0
q=p.w
q===$&&A.c("opacity")
o=q/255
n=p.r
q=p.cx
q===$&&A.c("layerImage")
m=q.aY()
q=p.a
q.toString
l=m.length
k=q
j=0
i=0
while(!0){q=p.f
q===$&&A.c("height")
if(!(j<q))break
q=p.a
q.toString
h=b3.a
if(typeof h!=="number")return A.J(h)
g=p.b
g.toString
f=(q+j)*h*4+g*4
q=k>=0
e=g
d=0
while(!0){h=p.e
h===$&&A.c("width")
if(!(d<h))break
c=i+1
if(!(i>=0&&i<l))return A.a(m,i)
b=m[i]
i=c+1
if(!(c>=0&&c<l))return A.a(m,c)
a=m[c]
c=i+1
if(!(i>=0&&i<l))return A.a(m,i)
a0=m[i]
i=c+1
if(!(c>=0&&c<l))return A.a(m,c)
a1=m[c]
if(e>=0){h=b3.a
if(typeof h!=="number")return A.J(h)
if(e<h)if(q){h=b3.b
if(typeof h!=="number")return A.J(h)
h=k<h}else h=!1
else h=!1}else h=!1
if(h){if(!(f>=0&&f<b4))return A.a(s,f)
a2=s[f]
h=f+1
if(!(h<b4))return A.a(s,h)
a3=s[h]
g=f+2
if(!(g<b4))return A.a(s,g)
a4=s[g]
g=f+3
if(!(g<b4))return A.a(s,g)
a5=s[g]
a6=a1/255*o
switch(n){case 1885434739:a7=a5
a8=a4
a9=a3
b0=a2
break
case 1852797549:a7=a1
a8=a0
a9=a
b0=b
break
case 1684632435:a7=a1
a8=a0
a9=a
b0=b
break
case 1684107883:b0=Math.min(a2,b)
a9=Math.min(a3,a)
a8=Math.min(a4,a0)
a7=a1
break
case 1836411936:b0=a2*b>>>8
a9=a3*a>>>8
a8=a4*a0>>>8
a7=a1
break
case 1768188278:b0=A.hI(a2,b)
a9=A.hI(a3,a)
a8=A.hI(a4,a0)
a7=a1
break
case 1818391150:b0=B.c.m(B.a.p(a2+b-255,0,255))
a9=B.c.m(B.a.p(a3+a-255,0,255))
a8=B.c.m(B.a.p(a4+a0-255,0,255))
a7=a1
break
case 1684751212:a7=a1
a8=a0
a9=a
b0=b
break
case 1818850405:b0=Math.max(a2,b)
a9=Math.max(a3,a)
a8=Math.max(a4,a0)
a7=a1
break
case 1935897198:b0=B.c.m(B.a.p(255-(255-b)*(255-a2),0,255))
a9=B.c.m(B.a.p(255-(255-a)*(255-a3),0,255))
a8=B.c.m(B.a.p(255-(255-a0)*(255-a4),0,255))
a7=a1
break
case 1684633120:b0=A.hJ(a2,b)
a9=A.hJ(a3,a)
a8=A.hJ(a4,a0)
a7=a1
break
case 1818518631:b0=b+a2>255?255:a2+b
a9=a+a3>255?255:a3+a
a8=a0+a4>255?255:a4+a0
a7=a1
break
case 1818706796:a7=a1
a8=a0
a9=a
b0=b
break
case 1870030194:b0=A.jX(a2,b,a5,a1)
a9=A.jX(a3,a,a5,a1)
a8=A.jX(a4,a0,a5,a1)
a7=a1
break
case 1934387572:b0=A.jY(a2,b)
a9=A.jY(a3,a)
a8=A.jY(a4,a0)
a7=a1
break
case 1749838196:b0=A.jV(a2,b)
a9=A.jV(a3,a)
a8=A.jV(a4,a0)
a7=a1
break
case 1984719220:b0=A.jZ(a2,b)
a9=A.jZ(a3,a)
a8=A.jZ(a4,a0)
a7=a1
break
case 1816947060:b0=A.jW(a2,b)
a9=A.jW(a3,a)
a8=A.jW(a4,a0)
a7=a1
break
case 1884055924:b0=b<128?Math.min(a2,2*b):Math.max(a2,2*(b-128))
a9=a<128?Math.min(a3,2*a):Math.max(a3,2*(a-128))
a8=a0<128?Math.min(a4,2*a0):Math.max(a4,2*(a0-128))
a7=a1
break
case 1749903736:b0=b<255-a2?0:255
a9=a<255-a3?0:255
a8=a0<255-a4?0:255
a7=a1
break
case 1684629094:b0=Math.abs(b-a2)
a9=Math.abs(a-a3)
a8=Math.abs(a0-a4)
a7=a1
break
case 1936553316:b0=B.c.aM(b+a2-2*b*a2/255)
a9=B.c.aM(a+a3-2*a*a3/255)
a8=B.c.aM(a0+a4-2*a0*a4/255)
a7=a1
break
case 1718842722:a7=a1
a8=a0
a9=a
b0=b
break
case 1717856630:a7=a1
a8=a0
a9=a
b0=b
break
case 1752524064:a7=a1
a8=a0
a9=a
b0=b
break
case 1935766560:a7=a1
a8=a0
a9=a
b0=b
break
case 1668246642:a7=a1
a8=a0
a9=a
b0=b
break
case 1819634976:a7=a1
a8=a0
a9=a
b0=b
break
default:a7=a1
a8=a0
a9=a
b0=b}g=1-a6
b0=B.c.m(a2*g+b0*a6)
a9=B.c.m(a3*g+a9*a6)
a8=B.c.m(a4*g+a8*a6)
a7=B.c.m(a5*g+a7*a6)
s[f]=b0
b1=h+1
s[h]=a9
b2=b1+1
if(!(b1<b4))return A.a(s,b1)
s[b1]=a8
if(!(b2<b4))return A.a(s,b2)
s[b2]=a7}f+=4;++d;++e}++j;++k}}++r}b4=b3.z
b4.toString
return b4},
i3(){var s,r,q,p,o,n=this,m=n.at
m===$&&A.c("_input")
n.d=m.j()
m=n.at.l()
n.e=m
if(m!==1){n.d=0
return}s=n.at.U(6)
for(m=s.a,r=s.d,q=m.length,p=0;p<6;++p){o=r+p
if(!(o>=0&&o<q))return A.a(m,o)
if(m[o]!==0){n.d=0
return}}n.f=n.at.l()
n.b=n.at.j()
n.a=n.at.j()
n.r=n.at.l()
n.w=n.at.l()},
ik(){var s,r,q,p,o,n,m,l=this,k=l.ax
k===$&&A.c("_imageResourceData")
k.d=k.b
for(k=l.Q;s=l.ax,s.d<s.c;){r=s.j()
q=l.ax.l()
s=l.ax
p=s.a
o=s.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
o=p[o]
s.O(o)
if((o&1)===0)++l.ax.d
n=l.ax.j()
s=l.ax
m=s.R(n)
s.d=s.d+(m.c-m.d)
if((n&1)===1)++l.ax.d
if(r===943868237)k.h(0,q,new A.eT())}},
il(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.ay
h===$&&A.c("_layerAndMaskData")
h.d=h.b
s=h.j()
if((s&1)!==0)++s
r=i.ay.U(s)
h=t.cE
i.sfu(t.dl.a(A.b([],h)))
if(s>0){q=r.l()
$.a9()[0]=q
q=$.ae()
if(0>=q.length)return A.a(q,0)
p=q[0]
if(p<0)p=-p
for(q=t.N,o=t.hf,n=t.af,m=0;m<p;++m){l=new A.d7(A.F(q,o),A.b([],h),A.b([],n))
l.fk(r)
k=i.x
k===$&&A.c("layers")
B.b.v(k,l)}}m=0
while(!0){h=i.x
h===$&&A.c("layers")
if(!(m<h.length))break
h[m].jt(r,i);++m}s=i.ay.j()
j=i.ay.U(s)
if(s>0){j.l()
j.l()
j.l()
j.l()
j.l()
j.l()
j.u()}},
io(){var s,r,q,p,o,n,m,l,k=this,j="channels",i="mergeImageChannels",h=k.ch
h===$&&A.c("_imageData")
h.d=h.b
s=h.l()
if(s===1){h=k.b
r=k.f
r===$&&A.c(j)
if(typeof h!=="number")return h.ao()
q=h*r
p=new Uint16Array(q)
for(o=0;o<q;++o)p[o]=k.ch.l()}else p=null
k.sfv(t.I.a(A.b([],t.h0)))
o=0
while(!0){h=k.f
h===$&&A.c(j)
if(!(o<h))break
h=k.y
h===$&&A.c(i)
r=k.ch
r.toString
n=o===3?-1:o
n=new A.bH(n)
n.ey(r,k.a,k.b,k.r,s,p,o)
B.b.v(h,n);++o}h=k.w
r=k.r
n=k.a
m=k.b
l=k.y
l===$&&A.c(i)
k.z=A.li(h,r,n,m,l)},
sfu(a){this.x=t.dl.a(a)},
sfv(a){this.y=t.I.a(a)}}
A.eT.prototype={}
A.d7.prototype={
fk(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a7.j(),a6=$.A()
a6[0]=a5
a5=$.Q()
if(0>=a5.length)return A.a(a5,0)
a4.a=a5[0]
a6[0]=a7.j()
a4.b=a5[0]
a6[0]=a7.j()
a4.c=a5[0]
a6[0]=a7.j()
a5=a5[0]
a4.d=a5
a6=a4.b
a6.toString
a4.e=a5-a6
a6=a4.c
a5=a4.a
a5.toString
a4.f=a6-a5
a4.sfw(t.I.a(A.b([],t.h0)))
s=a7.l()
for(r=0;r<s;++r){a5=a7.l()
$.a9()[0]=a5
a5=$.ae()
if(0>=a5.length)return A.a(a5,0)
q=a5[0]
a7.j()
a5=a4.as
a5===$&&A.c("channels")
B.b.v(a5,new A.bH(q))}p=a7.j()
if(p!==943868237)throw A.d(A.h("Invalid PSD layer signature: "+B.a.bm(p,16)))
a4.r=a7.j()
a4.w=a7.u()
a7.u()
a4.y=a7.u()
if(a7.u()!==0)throw A.d(A.h("Invalid PSD layer data"))
o=a7.j()
n=a7.U(o)
if(o>0){o=n.j()
if(o>0){m=n.U(o)
a5=m.d
m.j()
m.j()
m.j()
m.j()
m.u()
m.u()
if(m.c-a5===20)m.d+=2
else{m.u()
m.u()
m.j()
m.j()
m.j()
m.j()}}o=n.j()
if(o>0)new A.hF().fi(n.U(o))
o=n.u()
n.O(o)
l=4-B.a.N(o,4)-1
if(l>0)n.d+=l
for(a5=n.c,a6=a4.ay,k=a4.cy,j=t.t,i=t.g0;n.d<a5;){p=n.j()
if(p!==943868237)throw A.d(A.h("PSD invalid signature for layer additional data: "+B.a.bm(p,16)))
h=n.O(4)
o=n.j()
g=n.R(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a6.h(0,h,A.nD(h,g))
if(h==="lrFX"){e=A.j(i.a(a6.n(0,"lrFX")).b,null,0)
e.l()
d=e.l()
for(c=0;c<d;++c){e.O(4)
b=e.O(4)
a=e.j()
if(b==="dsdw"){a0=new A.eS()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.j()
a0.saF(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.O(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saL(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="isdw"){a0=new A.eV()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.j()
a0.saF(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.O(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saL(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="oglw"){a0=new A.eX()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
a0.saF(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.O(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2)a0.saL(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="iglw"){a0=new A.eU()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
a0.saF(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.O(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2){e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.saL(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}}else if(b==="bevl"){a0=new A.eR()
B.b.v(k,a0)
a0.a=e.j()
e.j()
e.j()
e.j()
e.O(8)
e.O(8)
a0.sjd(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
a0.seS(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a2=e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a2=e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2){a0.sjz(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
a0.sjA(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}}else if(b==="sofi"){a0=new A.eY()
B.b.v(k,a0)
a0.a=e.j()
e.O(4)
a0.saF(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a0.saL(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else e.d+=a}}}}},
jt(a,b){var s,r,q,p,o,n=this,m=0
while(!0){s=n.as
s===$&&A.c("channels")
if(!(m<s.length))break
s=s[m]
r=n.e
r===$&&A.c("width")
q=n.f
q===$&&A.c("height")
s.jw(a,r,q,b.r);++m}r=b.w
q=b.r
p=n.e
p===$&&A.c("width")
o=n.f
o===$&&A.c("height")
n.cx=A.li(r,q,p,o,s)},
sfw(a){this.as=t.I.a(a)}}
A.c5.prototype={}
A.hG.prototype={
ag(a){this.a=A.lh(t.L.a(a))
return this.a2(0)},
a2(a){var s=this.a
if(s==null)return null
return s.j_()}}
A.hS.prototype={}
A.hR.prototype={
bj(a){var s=A.m(t.L.a(a),!0,null,0).U(18),r=s.a,q=s.d,p=q+2,o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==2)return!1
q+=16
if(!(q>=0&&q<o))return A.a(r,q)
q=r[q]
if(q!==24&&q!==32)return!1
return!0},
aE(a){var s,r,q,p,o,n,m,l,k=this
t.L.a(a)
k.a=new A.hS()
s=A.m(a,!0,null,0)
k.b=s
r=s.U(18)
s=r.a
q=r.d
p=q+2
o=s.length
if(!(p>=0&&p<o))return A.a(s,p)
if(s[p]!==2)return null
p=q+16
if(!(p>=0&&p<o))return A.a(s,p)
p=s[p]
if(p!==24&&p!==32)return null
n=k.a
n.toString
m=q+12
if(!(m>=0&&m<o))return A.a(s,m)
m=s[m]
l=q+13
if(!(l>=0&&l<o))return A.a(s,l)
n.a=m&255|(s[l]&255)<<8
l=q+14
if(!(l>=0&&l<o))return A.a(s,l)
l=s[l]
q+=15
if(!(q>=0&&q<o))return A.a(s,q)
n.b=l&255|(s[q]&255)<<8
n.d=k.b.d
n.e=p
return n},
a2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
if(d==null)return null
s=e.b
s===$&&A.c("input")
r=d.d
r.toString
s.d=r
q=A.a1(d.a,d.b,B.A,null,null)
for(p=q.b-1,d=q.a,s=q.x,r=s.length;p>=0;--p)for(o=p*d,n=0;n<d;++n){m=e.b
l=m.a
k=m.d
j=m.d=k+1
i=l.length
if(!(k>=0&&k<i))return A.a(l,k)
k=l[k]
h=m.d=j+1
if(!(j>=0&&j<i))return A.a(l,j)
j=l[j]
g=m.d=h+1
if(!(h>=0&&h<i))return A.a(l,h)
h=l[h]
if(e.a.e===32){m.d=g+1
if(!(g>=0&&g<i))return A.a(l,g)
f=l[g]}else f=255
m=B.c.m(B.a.p(f,0,255))
k=B.c.m(B.a.p(k,0,255))
j=B.c.m(B.a.p(j,0,255))
h=B.c.m(B.a.p(h,0,255))
l=o+n
if(!(l>=0&&l<r))return A.a(s,l)
s[l]=(m<<24|k<<16|j<<8|h)>>>0}return q},
ag(a){if(this.aE(t.L.a(a))==null)return null
return this.a2(0)}}
A.hU.prototype={
M(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.u()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.D(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.o,q)
r=p+(o&B.o[q])
a-=q
n.c=8
q=s.a
o=s.d++
if(!(o>=0&&o<q.length))return A.a(q,o)
n.b=q[o]}if(a>0){if(q===0){n.c=8
n.b=s.u()}s=B.a.D(r,a)
q=n.b
p=n.c-a
q=B.a.a7(q,p)
if(!(a<9))return A.a(B.o,a)
r=s+(q&B.o[a])
n.c=p}return r}}
A.f5.prototype={
q(a){var s=this,r=s.a
if(B.aI.a1(r))return A.o(B.aI.n(0,r))+": "+s.b+" "+s.c
return"<"+r+">: "+s.b+" "+s.c},
jy(){var s=this.d
s.toString
this.e.d=s
return this.av()},
cZ(){var s,r,q=this,p=q.d
p.toString
q.e.d=p
s=A.b([],t.t)
for(p=q.c,r=0;r<p;++r)B.b.v(s,q.av())
return s},
av(){var s,r,q,p=this
switch(p.b){case 1:case 2:return p.e.u()
case 3:return p.e.l()
case 4:return p.e.j()
case 5:s=p.e
r=s.j()
q=s.j()
if(q===0)return 0
return B.a.X(r,q)
case 6:throw A.d(A.h("Unhandled value type: SBYTE"))
case 7:return p.e.u()
case 8:throw A.d(A.h("Unhandled value type: SSHORT"))
case 9:throw A.d(A.h("Unhandled value type: SLONG"))
case 10:throw A.d(A.h("Unhandled value type: SRATIONAL"))
case 11:throw A.d(A.h("Unhandled value type: FLOAT"))
case 12:throw A.d(A.h("Unhandled value type: DOUBLE"))}return 0}}
A.hW.prototype={
iX(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.I(p.a+7,8)
for(r=0,q=0;q<d;++q){p.cv(a,r,c)
r+=s}},
cv(a,b,c){var s,r,q,p,o,n,m,l=this
l.d=0
for(s=l.a,r=!0;c<s;){for(;r;){q=l.aT(10)
if(!(q<1024))return A.a(B.J,q)
p=B.J[q]
o=B.a.i(p,1)&15
if(o===12){q=(q<<2&12|l.a8(2))>>>0
if(!(q<16))return A.a(B.q,q)
p=B.q[q]
n=B.a.i(p,1)
c+=B.a.i(p,4)&4095
l.a_(4-(n&7))}else if(o===0)throw A.d(A.h("TIFFFaxDecoder0"))
else if(o===15)throw A.d(A.h("TIFFFaxDecoder1"))
else{c+=B.a.i(p,5)&2047
l.a_(10-o)
if((p&1)===0){B.b.h(l.f,l.d++,c)
r=!1}}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}for(;!r;){q=l.a8(4)
if(!(q<16))return A.a(B.D,q)
p=B.D[q]
m=p>>>5&2047
if(m===100){q=l.aT(9)
if(!(q<512))return A.a(B.M,q)
p=B.M[q]
o=B.a.i(p,1)&15
m=B.a.i(p,5)&2047
if(o===12){l.a_(5)
q=l.a8(4)
if(!(q<16))return A.a(B.q,q)
p=B.q[q]
n=B.a.i(p,1)
m=B.a.i(p,4)&4095
l.aa(a,b,c,m)
c+=m
l.a_(4-(n&7))}else if(o===15)throw A.d(A.h("TIFFFaxDecoder2"))
else{l.aa(a,b,c,m)
c+=m
l.a_(9-o)
if((p&1)===0){B.b.h(l.f,l.d++,c)
r=!0}}}else{if(m===200){q=l.a8(2)
if(!(q<4))return A.a(B.C,q)
p=B.C[q]
m=p>>>5&2047
l.aa(a,b,c,m)
c+=m
l.a_(2-(p>>>1&15))
B.b.h(l.f,l.d++,c)}else{l.aa(a,b,c,m)
c+=m
l.a_(4-(p>>>1&15))
B.b.h(l.f,l.d++,c)}r=!0}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}}B.b.h(l.f,l.d++,c)},
iY(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.I(s+7,8)
q=A.W(2,null,!1,t.E)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.dY()!==1)throw A.d(A.h("TIFFFaxDecoder3"))
a0.cv(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.dY()===0){n=a0.e
a0.scW(a0.f)
a0.scV(n)
a0.y=0
m=a3
l=-1
k=!0
j=0
while(!0){m.toString
if(!(m<s))break
a0.dF(l,k,q)
i=q[0]
h=q[1]
g=a0.a8(7)
if(!(g<128))return A.a(B.E,g)
g=B.E[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.aa(a1,p,m,h-m)}a0.a_(7-e)
m=h
l=m}else if(f===1){a0.a_(7-e)
d=j+1
c=d+1
if(k){m+=a0.c_()
B.b.h(a0.f,j,m)
b=a0.bZ()
a0.aa(a1,p,m,b)
m+=b
B.b.h(a0.f,d,m)}else{b=a0.bZ()
a0.aa(a1,p,m,b)
m+=b
B.b.h(a0.f,j,m)
m+=a0.c_()
B.b.h(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.b.h(a0.f,j,a)
k=!k
if(k)a0.aa(a1,p,m,a-m)
a0.a_(7-e)}else throw A.d(A.h("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.b.h(a0.f,j,m)
a0.d=j+1}else a0.cv(a1,p,a3)
p+=r}},
j1(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.r=a5
a3.z=4
a3.x=a3.w=0
s=a3.a
r=B.a.I(s+7,8)
q=A.W(2,null,!1,t.E)
p=a3.f
a3.d=0
a3.d=1
B.b.h(p,0,s)
B.b.h(p,a3.d++,s)
for(o=0,n=0;n<a7;++n){m=a3.e
a3.scW(a3.f)
a3.scV(m)
a3.y=0
l=a6
k=-1
j=!0
i=0
while(!0){l.toString
if(!(l<s))break
a3.dF(k,j,q)
h=q[0]
g=q[1]
f=a3.a8(7)
if(!(f<128))return A.a(B.E,f)
f=B.E[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a3.aa(a4,o,l,g-l)}a3.a_(7-d)
l=g
k=l}else if(e===1){a3.a_(7-d)
c=i+1
b=c+1
if(j){l+=a3.c_()
B.b.h(m,i,l)
a=a3.bZ()
a3.aa(a4,o,l,a)
l+=a
B.b.h(m,c,l)}else{a=a3.bZ()
a3.aa(a4,o,l,a)
l+=a
B.b.h(m,i,l)
l+=a3.c_()
B.b.h(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.b.h(m,i,a0)
j=!j
if(j)a3.aa(a4,o,l,a0-l)
a3.a_(7-d)
l=a0
i=c
k=l}else if(e===11){if(a3.a8(3)!==7)throw A.d(A.h("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;){for(;a3.a8(1)!==1;)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.b.h(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
if(a3.a8(1)===0){if(!j){c=i+1
B.b.h(m,i,l)
i=c}j=!0}else{if(j){c=i+1
B.b.h(m,i,l)
i=c}j=!1}a2=!0}if(a1===5){if(!j){c=i+1
B.b.h(m,i,l)
i=c}l+=a1
j=!0}else{l+=a1
c=i+1
B.b.h(m,i,l)
a3.aa(a4,o,l,1);++l
i=c
j=!1}}}else throw A.d(A.h("TIFFFaxDecoder5 "+e))}B.b.h(m,i,l)
a3.d=i+1
o+=r}},
c_(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.aT(10)
if(!(q<1024))return A.a(B.J,q)
p=B.J[q]
o=B.a.i(p,1)&15
if(o===12){q=(q<<2&12|m.a8(2))>>>0
if(!(q<16))return A.a(B.q,q)
p=B.q[q]
n=B.a.i(p,1)
s+=B.a.i(p,4)&4095
m.a_(4-(n&7))}else if(o===0)throw A.d(A.h("TIFFFaxDecoder0"))
else if(o===15)throw A.d(A.h("TIFFFaxDecoder1"))
else{s+=B.a.i(p,5)&2047
m.a_(10-o)
if((p&1)===0)r=!1}}return s},
bZ(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.a8(4)
if(!(q<16))return A.a(B.D,q)
p=B.D[q]
o=p>>>5&2047
if(o===100){q=l.aT(9)
if(!(q<512))return A.a(B.M,q)
p=B.M[q]
n=B.a.i(p,1)&15
m=B.a.i(p,5)
if(n===12){l.a_(5)
q=l.a8(4)
if(!(q<16))return A.a(B.q,q)
p=B.q[q]
m=B.a.i(p,1)
s+=B.a.i(p,4)&4095
l.a_(4-(m&7))}else if(n===15)throw A.d(A.h("TIFFFaxDecoder2"))
else{s+=m&2047
l.a_(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.a8(2)
if(!(q<4))return A.a(B.C,q)
p=B.C[q]
s+=p>>>5&2047
l.a_(2-(p>>>1&15))}else{s+=o
l.a_(4-(p>>>1&15))}r=!0}}return s},
dY(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.aT(12)!==1)throw A.d(A.h("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.aT(s)!==0)throw A.d(A.h(p))
if(s<4)if(q.aT(8)!==0)throw A.d(A.h(p))
for(;r=q.aT(8),r!==1;)if(r!==0)throw A.d(A.h(p))}if(q.at===0)return 1
else return q.a8(1)},
dF(a,b,c){var s,r,q,p,o,n,m=this
t.cP.a(c)
s=m.e
r=m.d
q=m.y
p=q>0?q-1:0
p=b?(p&4294967294)>>>0:(p|1)>>>0
for(q=s.length,o=p;o<r;o+=2){if(!(o<q))return A.a(s,o)
n=s[o]
n.toString
a.toString
if(n>a){m.y=o
B.b.h(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.b.h(c,1,s[n])}},
aa(a,b,c,d){var s,r,q,p,o,n=8*b+A.u(c),m=n+d,l=B.a.i(n,3),k=n&7
if(k>0){s=B.a.D(1,7-k)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
p=r[q]
while(!0){if(!(s>0&&n<m))break
p=(p|s)>>>0
s=s>>>1;++n}a.h(0,l,p)}l=B.a.i(n,3)
for(r=m-7;n<r;l=o){o=l+1
J.n(a.a,a.d+l,255)
n+=8}for(;n<m;){l=B.a.i(n,3)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
J.n(r,q,(r[q]|B.a.D(1,7-(n&7)))>>>0);++n}},
aT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.r
c===$&&A.c("data")
s=c.d
r=c.c-s-1
q=d.x
p=d.c
if(p===1){q.toString
c=c.a
p=s+q
o=c.length
if(!(p>=0&&p<o))return A.a(c,p)
n=c[p]
if(q===r){m=0
l=0}else{p=q+1
k=s+p
if(p===r){if(!(k>=0&&k<o))return A.a(c,k)
m=c[k]
l=0}else{if(!(k>=0&&k<o))return A.a(c,k)
m=c[k]
s+=q+2
if(!(s>=0&&s<o))return A.a(c,s)
l=c[s]}}}else if(p===2){q.toString
c=c.a
p=s+q
o=c.length
if(!(p>=0&&p<o))return A.a(c,p)
n=B.v[c[p]&255]
if(q===r){m=0
l=0}else{p=q+1
k=s+p
if(p===r){if(!(k>=0&&k<o))return A.a(c,k)
m=B.v[c[k]&255]
l=0}else{if(!(k>=0&&k<o))return A.a(c,k)
m=B.v[c[k]&255]
s+=q+2
if(!(s>=0&&s<o))return A.a(c,s)
l=B.v[c[s]&255]}}}else throw A.d(A.h("TIFFFaxDecoder7"))
c=d.w
c.toString
j=8-c
i=a-j
if(i>8){h=i-8
g=8}else{g=i
h=0}q.toString
c=d.x=q+1
if(!(j>=0&&j<9))return A.a(B.o,j)
f=B.a.D(n&B.o[j],i)
if(!(g>=0))return A.a(B.w,g)
e=B.a.a3(m&B.w[g],8-g)
if(h!==0){e=B.a.D(e,h)
if(!(h<9))return A.a(B.w,h)
e|=B.a.a3(l&B.w[h],8-h)
d.x=c+1
d.w=h}else if(g===8){d.w=0
d.x=c+1}else d.w=g
return(f|e)>>>0},
a8(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r
g===$&&A.c("data")
s=g.d
r=g.c-s-1
q=h.x
p=h.c
if(p===1){q.toString
g=g.a
p=s+q
o=g.length
if(!(p>=0&&p<o))return A.a(g,p)
n=g[p]
if(q===r)m=0
else{s+=q+1
if(!(s>=0&&s<o))return A.a(g,s)
m=g[s]}}else if(p===2){q.toString
g=g.a
p=s+q
o=g.length
if(!(p>=0&&p<o))return A.a(g,p)
n=B.v[g[p]&255]
if(q===r)m=0
else{s+=q+1
if(!(s>=0&&s<o))return A.a(g,s)
m=B.v[g[s]&255]}}else throw A.d(A.h("TIFFFaxDecoder7"))
g=h.w
g.toString
l=8-g
k=a-l
j=l-a
if(j>=0){if(!(l>=0&&l<9))return A.a(B.o,l)
i=B.a.a3(n&B.o[l],j)
g+=a
h.w=g
if(g===8){h.w=0
q.toString
h.x=q+1}}else{if(!(l>=0&&l<9))return A.a(B.o,l)
i=B.a.D(n&B.o[l],-j)
if(!(k>=0&&k<9))return A.a(B.w,k)
i=(i|B.a.a3(m&B.w[k],8-k))>>>0
q.toString
h.x=q+1
h.w=k}return i},
a_(a){var s,r=this,q=r.w
q.toString
s=q-a
if(s<0){q=r.x
q.toString
r.x=q-1
r.w=8+s}else r.w=s},
scW(a){this.e=t.k.a(a)},
scV(a){this.f=t.k.a(a)}}
A.f6.prototype={
fm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.j(a,null,0),e=a.l()
for(s=g.a,r=0;r<e;++r){q=a.l()
p=a.l()
o=a.j()
n=new A.f5(q,p,o,f)
if(p<13&&p>0){if(!(p<14))return A.a(B.aG,p)
m=B.aG[p]}else m=0
if(o*m>4)n.d=a.j()
else{m=a.d
n.d=m
a.d=m+4}s.h(0,q,n)
if(q===256){m=n.d
m.toString
f.d=m
g.b=n.av()}else if(q===257){m=n.d
m.toString
f.d=m
g.c=n.av()}else if(q===262){m=n.d
m.toString
f.d=m
g.d=n.av()}else if(q===259){m=n.d
m.toString
f.d=m
g.e=n.av()}else if(q===258){m=n.d
m.toString
f.d=m
g.f=n.av()}else if(q===277){m=n.d
m.toString
f.d=m
g.r=n.av()}else if(q===317){m=n.d
m.toString
f.d=m
g.z=n.av()}else if(q===339){m=n.d
m.toString
f.d=m
g.w=n.av()}else if(q===320){g.siO(n.cZ())
g.go=0
m=g.fy.length/3|0
g.id=m
g.k1=m*2}}if(g.b===0||g.c===0)return
m=g.fy
if(m!=null&&g.f===8)for(l=m.length,r=0;r<l;++r){m=g.fy
if(!(r<m.length))return A.a(m,r)
B.b.h(m,r,B.a.i(m[r],8))}if(g.d===0)g.y=!0
if(s.a1(324)){g.ax=g.bf(322)
g.ay=g.bf(323)
g.seD(g.c6(324))
g.seC(g.c6(325))}else{g.ax=g.c5(322,g.b)
if(!s.a1(278))g.ay=g.c5(323,g.c)
else{k=g.bf(278)
if(k===-1)g.ay=g.c
else g.ay=k}g.seD(g.c6(273))
g.seC(g.c6(279))}m=g.b
j=g.ax
g.cx=B.a.X(m+j-1,j)
j=g.c
m=g.ay
g.cy=B.a.X(j+m-1,m)
g.dx=g.c5(266,1)
g.dy=g.bf(292)
g.fr=g.bf(293)
g.bf(338)
switch(g.d){case 0:case 1:s=g.f
if(s===1&&g.r===1)g.x=0
else if(s===4&&g.r===1)g.x=1
else if(B.a.N(s,8)===0){s=g.r
if(s===1)g.x=2
else if(s===2)g.x=3
else g.x=8}break
case 2:if(B.a.N(g.f,8)===0){s=g.r
if(s===3)g.x=5
else if(s===4)g.x=6
else g.x=8}break
case 3:if(g.r===1){s=g.f
s=s===4||s===8||s===16}else s=!1
if(s)g.x=4
break
case 4:if(g.f===1&&g.r===1)g.x=0
break
case 6:if(g.e===7&&g.f===8&&g.r===3)g.x=5
else{if(s.a1(530)){i=s.n(0,530).cZ()
s=i.length
if(0>=s)return A.a(i,0)
m=g.Q=i[0]
if(1>=s)return A.a(i,1)
s=g.as=i[1]
h=m
m=s
s=h}else{g.as=g.Q=2
s=2
m=2}if(s*m===1)g.x=8
else if(g.f===8&&g.r===3)g.x=7}break
default:if(B.a.N(g.f,8)===0)g.x=8
break}},
ce(a){var s,r,q,p,o=this
o.k2=A.a1(o.b,o.c,B.k,null,null)
s=0
r=0
while(!0){q=o.cy
q===$&&A.c("tilesY")
if(!(s<q))break
p=0
while(!0){q=o.cx
q===$&&A.c("tilesX")
if(!(p<q))break
o.h7(a,p,s);++p;++r}++s}q=o.k2
q.toString
return q},
h7(c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="colorMapRed",b9="colorMapGreen",c0="colorMapBlue"
if(b6.x===0){b6.h_(c1,c2,c3)
return}o=b6.cx
o===$&&A.c("tilesX")
n=c3*o+c2
o=b6.ch
if(!(n>=0&&n<o.length))return A.a(o,n)
c1.d=o[n]
o=b6.ax
m=c2*o
l=b6.ay
k=c3*l
j=b6.CW
if(!(n<j.length))return A.a(j,n)
s=j[n]
i=o*l*b6.r
o=b6.f
l=o===16
if(l)i*=2
else if(o===32)i*=4
r=null
if(o===8||l||o===32||o===64){o=b6.e
if(o===1)r=c1
else if(o===5){r=A.m(new Uint8Array(i),!1,b7,0)
q=A.l5()
try{q.el(A.j(c1,s,0),r.a)}catch(h){p=A.a3(h)
A.jz(p)}if(b6.z===2)for(g=0;g<b6.ay;++g){f=b6.r
o=b6.ax
e=f*(g*o+1)
for(d=o*f;f<d;++f){o=r
l=o.a
o=o.d+e
if(!(o>=0&&o<l.length))return A.a(l,o)
j=l[o]
c=r
b=b6.r
a=c.a
b=c.d+(e-b)
if(!(b>=0&&b<a.length))return A.a(a,b)
J.n(l,o,j+a[b]);++e}}}else if(o===32773){r=A.m(new Uint8Array(i),!1,b7,0)
b6.du(c1,i,r.a)}else if(o===32946){o=A.kT(c1.bM(0,0,s)).c
r=A.m(t.L.a(A.I(o.c.buffer,0,o.a)),!1,b7,0)}else if(o===8)r=A.m(B.x.bE(A.bA(t.L.a(c1.bM(0,0,s)),1,b7,0),!1),!1,b7,0)
else if(o===6){if(b6.k2==null)b6.k2=A.a1(b6.b,b6.c,B.k,b7,b7)
a0=new A.es().ag(c1.bM(0,0,s))
o=b6.k2
o.toString
b6.hF(a0,o,m,k,b6.ax,b6.ay)
if(b6.k3!=null){o=b6.k2
o.toString
l=new A.e7(A.F(t.dk,t.i))
l.ff(o,16,3)
b6.k3=l}return}else throw A.d(A.h("Unsupported Compression Type: "+o))
a1=k
a2=0
while(!0){if(!(a2<b6.ay&&a1<b6.c))break
a3=m
a4=0
while(!0){if(!(a4<b6.ax&&a3<b6.b))break
o=b6.r
if(o===1){o=b6.w
if(o===3){o=b6.f
if(o===32){o=r.j()
$.A()[0]=o
o=$.b7()
if(0>=o.length)return A.a(o,0)
a5=o[0]}else if(o===64)a5=r.cX()
else if(o===16){o=r.l()
if($.P==null)A.aT()
l=$.P
if(!(o<l.length))return A.a(l,o)
a5=l[o]}else a5=0
o=b6.k3
if(o!=null)o.aZ(a3,a1,a5)
if(b6.k2!=null){a6=B.c.m(B.c.p(a5*255,0,255))
if(b6.d===3&&b6.fy!=null){o=b6.fy
o.toString
l=b6.go
l===$&&A.c(b8)
l+=a6
j=o.length
if(!(l>=0&&l<j))return A.a(o,l)
l=o[l]
c=b6.id
c===$&&A.c(b9)
c+=a6
if(!(c>=0&&c<j))return A.a(o,c)
c=o[c]
b=b6.k1
b===$&&A.c(c0)
b+=a6
if(!(b>=0&&b<j))return A.a(o,b)
b=o[b]
a7=(B.c.m(B.a.p(255,0,255))<<24|B.c.m(B.a.p(b,0,255))<<16|B.c.m(B.a.p(c,0,255))<<8|B.c.m(B.a.p(l,0,255)))>>>0}else a7=(B.c.m(B.a.p(255,0,255))<<24|B.c.m(B.a.p(a6,0,255))<<16|B.c.m(B.a.p(a6,0,255))<<8|B.c.m(B.a.p(a6,0,255)))>>>0
o=b6.k2
l=o.x
o=a1*o.a+a3
if(!(o>=0&&o<l.length))return A.a(l,o)
l[o]=a7}}else{l=b6.f
if(l===8)if(o===2){o=r
l=o.a
o=o.d++
if(!(o>=0&&o<l.length))return A.a(l,o)
o=l[o]
$.aa()[0]=o
o=$.af()
if(0>=o.length)return A.a(o,0)
a6=o[0]}else{o=r
l=o.a
o=o.d++
if(!(o>=0&&o<l.length))return A.a(l,o)
a6=l[o]}else if(l===16)if(o===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
a6=o[0]}else a6=r.l()
else if(l===32)if(o===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
a6=o[0]}else a6=r.j()
else a6=0
o=b6.k3
if(o!=null)o.aZ(a3,a1,a6)
if(b6.k2!=null){o=b6.f
if(o===16)a6=B.a.i(a6,8)
else if(o===32)a6=B.a.i(a6,24)
o=b6.d
if(o===0)a6=255-a6
if(o===3&&b6.fy!=null){o=b6.fy
o.toString
l=b6.go
l===$&&A.c(b8)
l+=a6
j=o.length
if(!(l>=0&&l<j))return A.a(o,l)
l=o[l]
c=b6.id
c===$&&A.c(b9)
c+=a6
if(!(c>=0&&c<j))return A.a(o,c)
c=o[c]
b=b6.k1
b===$&&A.c(c0)
b+=a6
if(!(b>=0&&b<j))return A.a(o,b)
b=o[b]
a7=(B.c.m(B.a.p(255,0,255))<<24|B.c.m(B.a.p(b,0,255))<<16|B.c.m(B.a.p(c,0,255))<<8|B.c.m(B.a.p(l,0,255)))>>>0}else a7=(B.c.m(B.a.p(255,0,255))<<24|B.c.m(B.a.p(a6,0,255))<<16|B.c.m(B.a.p(a6,0,255))<<8|B.c.m(B.a.p(a6,0,255)))>>>0
o=b6.k2
l=o.x
o=a1*o.a+a3
if(!(o>=0&&o<l.length))return A.a(l,o)
l[o]=a7}}}else if(o===2){o=b6.f
if(o===8){o=b6.w===2
if(o){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.aa()[0]=l
l=$.af()
if(0>=l.length)return A.a(l,0)
a6=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
a6=j[l]}if(o){o=r
l=o.a
o=o.d++
if(!(o>=0&&o<l.length))return A.a(l,o)
o=l[o]
$.aa()[0]=o
o=$.af()
if(0>=o.length)return A.a(o,0)
a8=o[0]}else{o=r
l=o.a
o=o.d++
if(!(o>=0&&o<l.length))return A.a(l,o)
a8=l[o]}}else if(o===16){if(b6.w===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
a6=o[0]}else a6=r.l()
if(b6.w===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
a8=o[0]}else a8=r.l()}else if(o===32){if(b6.w===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
a6=o[0]}else a6=r.j()
if(b6.w===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
a8=o[0]}else a8=r.j()}else{a6=0
a8=0}o=b6.k3
if(o!=null){o.aZ(a3,a1,a6)
b6.k3.bq(a3,a1,a8)}if(b6.k2!=null){o=b6.f
l=o===16
if(l)a6=B.a.i(a6,8)
else if(o===32)a6=B.a.i(a6,24)
if(l)a8=B.a.i(a8,8)
else if(o===32)a8=B.a.i(a8,24)
o=B.c.m(B.a.p(a8,0,255))
l=B.c.m(B.a.p(a6,0,255))
j=B.c.m(B.a.p(a6,0,255))
c=B.c.m(B.a.p(a6,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(o<<24|l<<16|j<<8|c)>>>0}}else if(o===3){o=b6.w
if(o===3){o=b6.f
if(o===32){o=r.j()
l=$.A()
l[0]=o
o=$.b7()
if(0>=o.length)return A.a(o,0)
a9=o[0]
l[0]=r.j()
b0=o[0]
l[0]=r.j()
b1=o[0]}else if(o===64){a9=r.cX()
b0=0
b1=0}else if(o===16){o=r.l()
if($.P==null)A.aT()
l=$.P
if(!(o<l.length))return A.a(l,o)
a9=l[o]
o=r.l()
if($.P==null)A.aT()
l=$.P
if(!(o<l.length))return A.a(l,o)
b0=l[o]
o=r.l()
if($.P==null)A.aT()
l=$.P
if(!(o<l.length))return A.a(l,o)
b1=l[o]}else{a9=0
b0=0
b1=0}o=b6.k3
if(o!=null){o.aZ(a3,a1,a9)
b6.k3.bq(a3,a1,b0)
b6.k3.bS(a3,a1,b1)}if(b6.k2!=null){b2=B.c.m(B.c.p(a9*255,0,255))
b3=B.c.m(B.c.p(b0*255,0,255))
b4=B.c.m(B.c.p(b1*255,0,255))
o=B.c.m(B.a.p(255,0,255))
l=B.c.m(B.a.p(b4,0,255))
j=B.c.m(B.a.p(b3,0,255))
c=B.c.m(B.a.p(b2,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(o<<24|l<<16|j<<8|c)>>>0}}else{l=b6.f
if(l===8){o=o===2
if(o){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.aa()[0]=l
l=$.af()
if(0>=l.length)return A.a(l,0)
a9=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
a9=j[l]}if(o){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.aa()[0]=l
l=$.af()
if(0>=l.length)return A.a(l,0)
b0=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
b0=j[l]}if(o){o=r
l=o.a
o=o.d++
if(!(o>=0&&o<l.length))return A.a(l,o)
o=l[o]
$.aa()[0]=o
o=$.af()
if(0>=o.length)return A.a(o,0)
b1=o[0]}else{o=r
l=o.a
o=o.d++
if(!(o>=0&&o<l.length))return A.a(l,o)
b1=l[o]}}else if(l===16){if(o===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
a9=o[0]}else a9=r.l()
if(b6.w===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
b0=o[0]}else b0=r.l()
if(b6.w===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
b1=o[0]}else b1=r.l()}else if(l===32){if(o===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
a9=o[0]}else a9=r.j()
if(b6.w===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
b0=o[0]}else b0=r.j()
if(b6.w===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
b1=o[0]}else b1=r.j()}else{a9=0
b0=0
b1=0}o=b6.k3
if(o!=null){o.aZ(a3,a1,a9)
b6.k3.bq(a3,a1,b0)
b6.k3.bS(a3,a1,b1)}if(b6.k2!=null){o=b6.f
l=o===16
if(l)a9=B.a.i(a9,8)
else if(o===32)a9=B.a.i(a9,24)
if(l)b0=B.a.i(b0,8)
else if(o===32)b0=B.a.i(b0,24)
if(l)b1=B.a.i(b1,8)
else if(o===32)b1=B.a.i(b1,24)
o=B.c.m(B.a.p(255,0,255))
l=B.c.m(B.a.p(b1,0,255))
j=B.c.m(B.a.p(b0,0,255))
c=B.c.m(B.a.p(a9,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(o<<24|l<<16|j<<8|c)>>>0}}}else if(o>=4){o=b6.w
if(o===3){o=b6.f
if(o===32){o=r.j()
l=$.A()
l[0]=o
o=$.b7()
if(0>=o.length)return A.a(o,0)
a9=o[0]
l[0]=r.j()
b0=o[0]
l[0]=r.j()
b1=o[0]
l[0]=r.j()
b5=o[0]}else if(o===64){a9=r.cX()
b0=0
b1=0
b5=0}else if(o===16){o=r.l()
if($.P==null)A.aT()
l=$.P
if(!(o<l.length))return A.a(l,o)
a9=l[o]
o=r.l()
if($.P==null)A.aT()
l=$.P
if(!(o<l.length))return A.a(l,o)
b0=l[o]
o=r.l()
if($.P==null)A.aT()
l=$.P
if(!(o<l.length))return A.a(l,o)
b1=l[o]
o=r.l()
if($.P==null)A.aT()
l=$.P
if(!(o<l.length))return A.a(l,o)
b5=l[o]}else{a9=0
b0=0
b1=0
b5=0}o=b6.k3
if(o!=null){o.aZ(a3,a1,a9)
b6.k3.bq(a3,a1,b0)
b6.k3.bS(a3,a1,b1)
b6.k3.d2(a3,a1,b5)}if(b6.k2!=null){b2=B.c.m(B.c.p(a9*255,0,255))
b3=B.c.m(B.c.p(b0*255,0,255))
b4=B.c.m(B.c.p(b1*255,0,255))
o=B.c.m(B.a.p(B.c.m(B.c.p(b5*255,0,255)),0,255))
l=B.c.m(B.a.p(b4,0,255))
j=B.c.m(B.a.p(b3,0,255))
c=B.c.m(B.a.p(b2,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(o<<24|l<<16|j<<8|c)>>>0}}else{l=b6.f
if(l===8){o=o===2
if(o){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.aa()[0]=l
l=$.af()
if(0>=l.length)return A.a(l,0)
a9=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
a9=j[l]}if(o){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.aa()[0]=l
l=$.af()
if(0>=l.length)return A.a(l,0)
b0=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
b0=j[l]}if(o){l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]
$.aa()[0]=l
l=$.af()
if(0>=l.length)return A.a(l,0)
b1=l[0]}else{l=r
j=l.a
l=l.d++
if(!(l>=0&&l<j.length))return A.a(j,l)
b1=j[l]}if(o){o=r
l=o.a
o=o.d++
if(!(o>=0&&o<l.length))return A.a(l,o)
o=l[o]
$.aa()[0]=o
o=$.af()
if(0>=o.length)return A.a(o,0)
b5=o[0]}else{o=r
l=o.a
o=o.d++
if(!(o>=0&&o<l.length))return A.a(l,o)
b5=l[o]}}else if(l===16){if(o===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
a9=o[0]}else a9=r.l()
if(b6.w===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
b0=o[0]}else b0=r.l()
if(b6.w===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
b1=o[0]}else b1=r.l()
if(b6.w===2){o=r.l()
$.a9()[0]=o
o=$.ae()
if(0>=o.length)return A.a(o,0)
b5=o[0]}else b5=r.l()}else if(l===32){if(o===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
a9=o[0]}else a9=r.j()
if(b6.w===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
b0=o[0]}else b0=r.j()
if(b6.w===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
b1=o[0]}else b1=r.j()
if(b6.w===2){o=r.j()
$.A()[0]=o
o=$.Q()
if(0>=o.length)return A.a(o,0)
b5=o[0]}else b5=r.j()}else{a9=0
b0=0
b1=0
b5=0}o=b6.k3
if(o!=null){o.aZ(a3,a1,a9)
b6.k3.bq(a3,a1,b0)
b6.k3.bS(a3,a1,b1)
b6.k3.d2(a3,a1,b5)}if(b6.k2!=null){o=b6.f
l=o===16
if(l)a9=B.a.i(a9,8)
else if(o===32)a9=B.a.i(a9,24)
if(l)b0=B.a.i(b0,8)
else if(o===32)b0=B.a.i(b0,24)
if(l)b1=B.a.i(b1,8)
else if(o===32)b1=B.a.i(b1,24)
if(l)b5=B.a.i(b5,8)
else if(o===32)b5=B.a.i(b5,24)
o=B.c.m(B.a.p(b5,0,255))
l=B.c.m(B.a.p(b1,0,255))
j=B.c.m(B.a.p(b0,0,255))
c=B.c.m(B.a.p(a9,0,255))
b=b6.k2
a=b.x
b=a1*b.a+a3
if(!(b>=0&&b<a.length))return A.a(a,b)
a[b]=(o<<24|l<<16|j<<8|c)>>>0}}}++a4;++a3}++a2;++a1}}else throw A.d(A.h("Unsupported bitsPerSample: "+o))},
hF(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.x,r=a.a,q=s.length,p=b.x,o=b.a,n=p.length,m=0;m<f;++m)for(l=m*r,k=(m+d)*o,j=0;j<e;++j){i=l+j
if(!(i>=0&&i<q))return A.a(s,i)
i=s[i]
h=k+(j+c)
if(!(h>=0&&h<n))return A.a(p,h)
p[h]=i}},
h_(b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=4278190080,a8=4294967295,a9=a5.cx
a9===$&&A.c("tilesX")
r=b2*a9+b1
a9=a5.ch
if(!(r>=0&&r<a9.length))return A.a(a9,r)
b0.d=a9[r]
a9=a5.ax
q=b1*a9
p=a5.ay
o=b2*p
n=a5.CW
if(!(r<n.length))return A.a(n,r)
m=n[r]
s=null
n=a5.e
if(n===32773){l=B.a.N(a9,8)===0?B.a.I(a9,8)*p:(B.a.I(a9,8)+1)*p
s=A.m(new Uint8Array(a9*p),!1,a6,0)
a5.du(b0,l,s.a)}else if(n===5){s=A.m(new Uint8Array(a9*p),!1,a6,0)
A.l5().el(A.j(b0,m,0),s.a)
if(a5.z===2)for(k=0;k<a5.c;++k){j=a5.r
i=j*(k*a5.b+1)
for(;a9=a5.b,p=a5.r,j<a9*p;++j){a9=s
n=a9.a
a9=a9.d+i
if(!(a9>=0&&a9<n.length))return A.a(n,a9)
h=n[a9]
g=s
f=g.a
p=g.d+(i-p)
if(!(p>=0&&p<f.length))return A.a(f,p)
J.n(n,a9,h+f[p]);++i}}}else if(n===2){s=A.m(new Uint8Array(a9*p),!1,a6,0)
try{A.k3(a5.dx,a9,p).iX(s,b0,0,a5.ay)}catch(e){}}else if(n===3){s=A.m(new Uint8Array(a9*p),!1,a6,0)
try{A.k3(a5.dx,a9,p).iY(s,b0,0,a5.ay,a5.dy)}catch(e){}}else if(n===4){s=A.m(new Uint8Array(a9*p),!1,a6,0)
try{A.k3(a5.dx,a9,p).j1(s,b0,0,a5.ay,a5.fr)}catch(e){}}else if(n===8)s=A.m(B.x.bE(A.bA(t.L.a(b0.bM(0,0,m)),1,a6,0),!1),!1,a6,0)
else if(n===32946){a9=A.kT(b0.bM(0,0,m)).c
s=A.m(t.L.a(A.I(a9.c.buffer,0,a9.a)),!1,a6,0)}else if(n===1)s=b0
else throw A.d(A.h("Unsupported Compression Type: "+n))
d=new A.hU(s)
a9=a5.y
c=a9?a7:a8
b=a9?a8:a7
a=a5.k2
for(a9=a.x,p=a.a,n=a9.length,h=a.b,a0=o,a1=0;a1<a5.ay;++a1,++a0){for(g=a0*p,f=a0<h,a2=q,a3=0;a3<a5.ax;++a3,++a2){if(!f||a2>=p)break
a4=g+a2
if(d.M(1)===0){if(!(a4>=0&&a4<n))return A.a(a9,a4)
a9[a4]=b}else{if(!(a4>=0&&a4<n))return A.a(a9,a4)
a9[a4]=c}}d.c=0}},
du(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
t.L.a(c)
for(s=J.S(c),r=0,q=0;q<b;){p=r+1
o=a.a
n=a.d
m=n+r
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
$.aa()[0]=m
m=$.af()
if(0>=m.length)return A.a(m,0)
k=m[0]
if(k>=0&&k<=127)for(o=k+1,r=p,j=0;j<o;++j,q=i,r=p){i=q+1
p=r+1
n=a.a
m=a.d+r
if(!(m>=0&&m<n.length))return A.a(n,m)
s.h(c,q,n[m])}else{m=k<=-1&&k>=-127
r=p+1
if(m){n+=p
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
for(o=-k+1,j=0;j<o;++j,q=i){i=q+1
s.h(c,q,n)}}}}},
c5(a,b){var s=this.a
if(!s.a1(a))return b
return s.n(0,a).jy()},
bf(a){return this.c5(a,0)},
c6(a){var s=this.a
if(!s.a1(a))return null
return s.n(0,a).cZ()},
seD(a){this.ch=t.T.a(a)},
seC(a){this.CW=t.T.a(a)},
siO(a){this.fy=t.T.a(a)}}
A.hX.prototype={}
A.ht.prototype={
el(a,b){var s,r,q,p,o,n,m,l,k=this,j="_out",i="_bufferLength"
t.L.a(b)
k.sft(b)
s=b.length
k.w=0
r=t.D.a(a.a)
k.e=r
q=k.f=r.length
k.b=a.d
if(0>=q)return A.a(r,0)
if(r[0]===0){if(1>=q)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.d(A.h("Invalid LZW Data"))
k.dL()
k.d=k.c=0
p=k.cE()
r=k.x
o=0
while(!0){if(!(p!==257&&k.w<s))break
if(p===256){k.dL()
p=k.cE()
k.as=0
if(p===257)break
q=k.r
q===$&&A.c(j)
J.n(q,k.w++,p)
o=p}else{q=k.Q
q.toString
if(p<q){k.dG(p)
q=k.as
q===$&&A.c(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.c(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.n(q,m,r[n])}q=k.as-1
if(!(q>=0&&q<4096))return A.a(r,q)
k.dc(o,r[q])}else{k.dG(o)
q=k.as
q===$&&A.c(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.c(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.n(q,m,r[n])}q=k.r
q===$&&A.c(j)
m=k.w++
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.n(q,m,r[l])
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.dc(o,r[l])}o=p}p=k.cE()}},
dc(a,b){var s,r=this,q=r.y
q===$&&A.c("_table")
s=r.Q
s.toString
if(!(s<4096))return A.a(q,s)
q[s]=b
q=r.z
q===$&&A.c("_prefix")
q[s]=a
s=r.Q=s+1
if(s===511)r.a=10
else if(s===1023)r.a=11
else if(s===2047)r.a=12},
dG(a){var s,r,q,p,o,n,m,l=this
l.as=0
s=l.x
l.as=1
r=l.y
r===$&&A.c("_table")
if(!(a<4096))return A.a(r,a)
s[0]=r[a]
q=l.z
q===$&&A.c("_prefix")
p=q[a]
for(o=1;p!==4098;o=n){n=o+1
l.as=n
if(!(p>=0&&p<4096))return A.a(r,p)
m=r[p]
if(!(o<4096))return A.a(s,o)
s[o]=m
p=q[p]}},
cE(){var s,r,q,p,o=this,n=o.b,m=o.f
m===$&&A.c("_dataLength")
if(n>=m)return 257
for(;s=o.d,r=o.a,s<r;n=p){if(n>=m)return 257
r=o.c
q=o.e
q===$&&A.c("_data")
p=n+1
o.b=p
if(!(n>=0&&n<q.length))return A.a(q,n)
o.c=(r<<8>>>0)+q[n]>>>0
o.d=s+8}n=s-r
o.d=n
n=B.a.a3(o.c,n)
r-=9
if(!(r>=0&&r<4))return A.a(B.aj,r)
return n&B.aj[r]},
dL(){var s,r,q=this
q.y=new Uint8Array(4096)
s=new Uint32Array(4096)
q.z=s
B.t.aj(s,0,4096,4098)
for(s=q.y,r=0;r<256;++r)s[r]=r
q.a=9
q.Q=258},
sft(a){this.r=t.L.a(a)}}
A.hV.prototype={
ag(a){var s,r,q=this
t.L.a(a)
s=A.m(a,!1,null,0)
q.c=s
s=q.a=q.e_(s)
if(s==null)return null
s=s.r
if(0>=s.length)return A.a(s,0)
r=s[0].ce(q.c)
s=new A.aR(A.F(t.N,t.o))
s.cg(A.m(a,!1,null,0))
r.y=s
return r},
e_(a){var s,r,q,p,o,n,m,l,k,j=null,i=A.b([],t.aU),h=new A.hX(i),g=a.l()
if(g!==18761&&g!==19789)return j
if(g===19789)a.e=!0
else a.e=!1
q=a.l()
h.e=q
if(q!==42)return j
p=a.j()
s=A.j(a,j,0)
s.d=p
for(q=t.p,o=t.cV;p!==0;){r=null
try{n=new A.f6(A.F(q,o))
n.fm(s)
r=n
m=r
if(!(m.b!==0&&m.c!==0))break}catch(l){break}B.b.v(i,r)
m=i.length
if(m===1){if(0>=m)return A.a(i,0)
k=i[0]
h.a=k.b
if(0>=m)return A.a(i,0)
h.b=k.c}p=s.j()
if(p!==0)s.d=p}return i.length!==0?h:j}}
A.i2.prototype={
bF(){var s,r=this.a,q=r.am()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.am()!==2752925)return!1
s=this.b
s.a=r.l()
s.b=r.l()
return!0},
aG(){var s,r=this,q=null
if(!r.hv())return q
s=r.b
r.d=A.a1(s.a,s.b,B.k,q,q)
r.hB()
if(!r.hR())return q
return r.d},
hv(){var s,r,q,p,o=this
if(!o.bF())return!1
o.fr=A.op()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.b.h(s,r,new A.ff(q,p,new Int32Array(2)))}s=o.b
q=s.a
if(typeof q!=="number")return q.a7()
B.a.i(q,8)
s=s.b
if(typeof s!=="number")return s.a7()
B.a.i(s,8)
o.y=o.Q=0
o.z=q
o.as=s
o.at=B.a.i(q+15,4)
o.ax=B.a.i(s+15,4)
o.k1=0
s=o.a
q=o.f
p=q.d
p===$&&A.c("partitionLength")
p=A.lx(s.R(p))
o.c=p
s.d+=q.d
p.C(1)
o.c.C(1)
o.hX(o.x,o.fr)
o.hQ()
if(!o.hT(s))return!1
o.hV()
o.c.C(1)
o.hU()
return!0},
hX(a,b){var s,r,q,p=this,o=p.c
o===$&&A.c("br")
o=o.C(1)!==0
a.a=o
if(o){a.b=p.c.C(1)!==0
if(p.c.C(1)!==0){a.c=p.c.C(1)!==0
for(o=a.d,s=0;s<4;++s){if(p.c.C(1)!==0){r=p.c
q=r.C(7)
r=r.C(1)===1?-q:q}else r=0
o[s]=r}for(o=a.e,s=0;s<4;++s){if(p.c.C(1)!==0){r=p.c
q=r.C(6)
r=r.C(1)===1?-q:q}else r=0
o[s]=r}}if(a.b)for(s=0;s<3;++s){o=b.a
o[s]=p.c.C(1)!==0?p.c.C(8):255}}else a.b=!1
return!0},
hQ(){var s,r,q,p=this,o=p.w,n=p.c
n===$&&A.c("br")
o.a=n.C(1)!==0
o.b=p.c.C(6)
o.c=p.c.C(3)
n=p.c.C(1)!==0
o.d=n
if(n)if(p.c.C(1)!==0){for(n=o.e,s=0;s<4;++s)if(p.c.C(1)!==0){r=p.c
q=r.C(6)
n[s]=r.C(1)===1?-q:q}for(n=o.f,s=0;s<4;++s)if(p.c.C(1)!==0){r=p.c
q=r.C(6)
n[s]=r.C(1)===1?-q:q}}if(o.b===0)n=0
else n=o.a?1:2
p.ar=n
return!0},
hT(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.c-a.d,g=this.c
g===$&&A.c("br")
g=B.a.B(1,g.C(2))
this.cy=g
s=g-1
r=s*3
if(h<r)return!1
for(g=this.db,q=0,p=0;p<s;++p,r=i){o=a.bV(3,q)
n=o.a
m=o.d
l=n.length
if(!(m>=0&&m<l))return A.a(n,m)
k=n[m]
j=m+1
if(!(j<l))return A.a(n,j)
j=n[j]
m+=2
if(!(m<l))return A.a(n,m)
i=r+((k|j<<8|n[m]<<16)>>>0)
if(i>h)i=h
n=new A.dg(a.b_(i-r,r))
n.b=254
n.c=0
n.d=-8
B.b.h(g,p,n)
q+=3}B.b.h(g,s,A.lx(a.b_(h-r,a.d-a.b+r)))
return r<h},
hV(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.c("br")
s=e.C(7)
r=f.c.C(1)!==0?f.c.bp(4):0
q=f.c.C(1)!==0?f.c.bp(4):0
p=f.c.C(1)!==0?f.c.bp(4):0
o=f.c.C(1)!==0?f.c.bp(4):0
n=f.c.C(1)!==0?f.c.bp(4):0
m=f.x
for(e=f.dy,l=m.d,k=0;k<4;++k){if(m.a){j=l[k]
if(!m.c)j+=s}else{if(k>0){i=e[0]
if(!(k>=0&&k<4))return A.a(e,k)
e[k]=i
continue}j=s}h=e[k]
i=h.a
g=j+r
if(g<0)g=0
else if(g>127)g=127
i[0]=B.U[g]
if(j<0)g=0
else g=j>127?127:j
i[1]=B.V[g]
g=h.b
i=j+q
if(i<0)i=0
else if(i>127)i=127
g[0]=B.U[i]*2
i=j+p
if(i<0)i=0
else if(i>127)i=127
g[1]=B.V[i]*101581>>>16
if(g[1]<8)g[1]=8
i=h.c
g=j+o
if(g<0)g=0
else if(g>117)g=117
i[0]=B.U[g]
g=j+n
if(g<0)g=0
else if(g>127)g=127
i[1]=B.V[g]}},
hU(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.c("br")
n=o.J(B.c8[s][r][q][p])!==0?m.c.C(8):B.cp[s][r][q][p]
o=l.b
if(!(s<o.length))return A.a(o,s)
o=o[s]
if(!(r<o.length))return A.a(o,r)
o=o[r].a
if(!(q<o.length))return A.a(o,q)
o[q][p]=n}o=m.c
o===$&&A.c("br")
o=o.C(1)!==0
m.fx=o
if(o)m.fy=m.c.C(8)},
i_(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ar
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.a9
m===$&&A.c("_fStrengths")
if(!(o<m.length))return A.a(m,o)
k=m[o][l]
m=s.d
m===$&&A.c("useLfDelta")
if(m){n.toString
j=n+f[0]
if(l!==0)j+=r[0]}else j=n
j.toString
if(j<0)j=0
else if(j>63)j=63
if(j>0){m=s.c
m===$&&A.c("sharpness")
if(m>0){i=m>4?B.a.i(j,2):B.a.i(j,1)
h=9-m
if(i>h)i=h}else i=j
if(i<1)i=1
k.b=i
k.a=2*j+i
if(j>=40)m=2
else m=j>=15?1:0
k.d=m}else k.a=0
k.c=l!==0}}}},
hB(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.b,e=f.at
if(e!=null)h.aV=e
s=J.ag(4,t.e6)
for(e=t.ao,r=0;r<4;++r)s[r]=A.b([new A.b1(),new A.b1()],e)
h.sfB(t.gS.a(s))
e=h.at
e.toString
s=J.ag(e,t.dE)
for(q=0;q<e;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.dk(p,o,new Uint8Array(8))}h.sfE(t.cC.a(s))
h.ok=new Uint8Array(832)
e=h.at
e.toString
h.go=new Uint8Array(4*e)
p=h.p4=16*e
o=h.R8=8*e
n=h.ar
n.toString
if(!(n<3))return A.a(B.B,n)
m=B.B[n]
l=m*p
k=(m/2|0)*o
h.p1=A.m(new Uint8Array(16*p+l),!1,g,l)
p=8*o+k
h.p2=A.m(new Uint8Array(p),!1,g,k)
h.p3=A.m(new Uint8Array(p),!1,g,k)
f=f.a
h.RG=A.m(new Uint8Array(f),!1,g,0)
j=B.a.i(f+1,1)
h.rx=A.m(new Uint8Array(j),!1,g,0)
h.ry=A.m(new Uint8Array(j),!1,g,0)
if(n===2)h.ch=h.ay=0
else{f=h.y
f===$&&A.c("_cropLeft")
f=B.a.I(f-m,16)
h.ay=f
p=h.Q
p.toString
p=B.a.I(p-m,16)
h.ch=p
if(f<0)h.ay=0
if(p<0)h.ch=0}f=h.as
f.toString
f=B.a.I(f+15+m,16)
h.cx=f
p=h.z
p===$&&A.c("_cropRight")
p=B.a.I(p+15+m,16)
h.CW=p
if(p>e)h.CW=e
p=h.ax
p.toString
if(f>p)h.cx=p
i=e+1
s=J.ag(i,t.ai)
for(q=0;q<i;++q)s[q]=new A.di()
h.sfD(t.eQ.a(s))
f=h.at
f.toString
s=J.ag(f,t.gT)
for(q=0;q<f;++q){e=new Int16Array(384)
s[q]=new A.dj(e,new Uint8Array(16))}h.sfC(t.db.a(s))
f=h.at
f.toString
h.sfA(t.ge.a(A.W(f,g,!1,t.aj)))
h.i_()
A.oa()
h.e=new A.i3()
return!0},
hR(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="isIntra4x4"
e.y2=0
s=e.id
r=e.x
q=e.db
p=0
while(!0){o=e.cx
o.toString
if(!(p<o))break
o=e.cy
o===$&&A.c("_numPartitions")
o=(p&o-1)>>>0
if(!(o>=0&&o<8))return A.a(q,o)
n=q[o]
while(!0){p=e.y1
o=e.at
o.toString
if(!(p<o))break
o=e.k3
o===$&&A.c("_mbInfo")
m=o.length
if(0>=m)return A.a(o,0)
l=o[0]
k=1+p
if(!(k<m))return A.a(o,k)
j=o[k]
k=e.ah
k===$&&A.c("_mbData")
if(!(p<k.length))return A.a(k,p)
i=k[p]
if(r.b){p=e.c
p===$&&A.c("br")
p=p.J(e.fr.a[0])
o=e.c
m=e.fr
e.k1=p===0?o.J(m.a[1]):2+o.J(m.a[2])}p=e.fx
p===$&&A.c("_useSkipProba")
if(p){p=e.c
p===$&&A.c("br")
o=e.fy
o===$&&A.c("_skipP")
h=p.J(o)!==0}else h=!1
e.hS()
if(!h)h=e.hW(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.c(d)
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.ar
p.toString
if(p>0){p=e.k4
p===$&&A.c("_fInfo")
o=e.y1
m=e.a9
m===$&&A.c("_fStrengths")
k=e.k1
k===$&&A.c("_segment")
if(!(k<m.length))return A.a(m,k)
k=m[k]
m=i.b
m===$&&A.c(d)
B.b.h(p,o,k[m?1:0])
p=e.k4
o=e.y1
if(!(o<p.length))return A.a(p,o)
g=p[o]
g.c=g.c||!h}++e.y1}p=e.k3
p===$&&A.c("_mbInfo")
if(0>=p.length)return A.a(p,0)
l=p[0]
l.b=l.a=0
B.i.aj(s,0,4,0)
e.y1=0
e.iv()
p=e.ar
p.toString
if(p>0){p=e.y2
o=e.ch
o===$&&A.c("_tlMbY")
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}else f=!1}else f=!1
if(!e.hq(f))return!1
p=++e.y2}return!0},
iv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="_dsp",a6=a3.y2,a7=a3.ok
a7===$&&A.c("_yuvBlock")
s=A.m(a7,!1,a4,40)
r=A.m(a7,!1,a4,584)
q=A.m(a7,!1,a4,600)
a7=a6>0
p=0
while(!0){o=a3.at
o.toString
if(!(p<o))break
o=a3.ah
o===$&&A.c("_mbData")
if(!(p<o.length))return A.a(o,p)
n=o[p]
if(p>0){for(m=-1;m<16;++m){o=m*32
s.al(o-4,4,s,o+12)}for(m=-1;m<8;++m){o=m*32
l=o-4
o+=4
r.al(l,4,r,o)
q.al(l,4,q,o)}}else{for(m=0;m<16;++m)J.n(s.a,s.d+(m*32-1),129)
for(m=0;m<8;++m){o=m*32-1
J.n(r.a,r.d+o,129)
J.n(q.a,q.d+o,129)}if(a7){J.n(q.a,q.d+-33,129)
J.n(r.a,r.d+-33,129)
J.n(s.a,s.d+-33,129)}}o=a3.k2
o===$&&A.c("_yuvT")
if(!(p<o.length))return A.a(o,p)
k=o[p]
j=n.a
i=n.e
if(a7){s.aW(-32,16,k.a)
r.aW(-32,8,k.b)
q.aW(-32,8,k.c)}else if(p===0){o=s.a
l=s.d+-33
J.aL(o,l,l+21,127)
l=r.a
o=r.d+-33
J.aL(l,o,o+9,127)
o=q.a
l=q.d+-33
J.aL(o,l,l+9,127)}o=n.b
o===$&&A.c("isIntra4x4")
if(o){h=A.j(s,a4,-16)
g=h.bN()
if(a7){o=a3.at
o.toString
if(p>=o-1){o=k.a[15]
l=h.a
f=h.d
J.aL(l,f,f+4,o)}else{o=a3.k2
l=p+1
if(!(l<o.length))return A.a(o,l)
h.aW(0,4,o[l].a)}}o=g.length
if(0>=o)return A.a(g,0)
e=g[0]
if(96>=o)return A.a(g,96)
g[96]=e
g[64]=e
g[32]=e
for(o=n.c,d=0;d<16;++d,i=i<<2>>>0){c=A.j(s,a4,B.as[d])
l=o[d]
if(!(l<10))return A.a(B.aE,l)
B.aE[l].$1(c)
i.toString
l=d*16
a3.dv(i,new A.a5(j,l,384,l,!1),c)}}else{o=A.lA(p,a6,n.c[0])
o.toString
if(!(o<7))return A.a(B.al,o)
B.al[o].$1(s)
if(i!==0)for(d=0;d<16;++d,i=i<<2>>>0){c=A.j(s,a4,B.as[d])
i.toString
o=d*16
a3.dv(i,new A.a5(j,o,384,o,!1),c)}}o=n.f
o===$&&A.c("nonZeroUV")
l=A.lA(p,a6,n.d)
l.toString
if(!(l<7))return A.a(B.S,l)
B.S[l].$1(r)
B.S[l].$1(q)
b=new A.a5(j,256,384,256,!1)
if((o&255)!==0){l=a3.e
if((o&170)!==0){l===$&&A.c(a5)
l.aB(b,r)
l.aB(A.j(b,a4,16),A.j(r,a4,4))
f=A.j(b,a4,32)
a=A.j(r,a4,128)
l.aB(f,a)
l.aB(A.j(f,a4,16),A.j(a,a4,4))}else{l===$&&A.c(a5)
l.eG(b,r)}}a0=new A.a5(j,320,384,320,!1)
o=o>>>8
if((o&255)!==0){l=a3.e
if((o&170)!==0){l===$&&A.c(a5)
l.aB(a0,q)
l.aB(A.j(a0,a4,16),A.j(q,a4,4))
o=A.j(a0,a4,32)
f=A.j(q,a4,128)
l.aB(o,f)
l.aB(A.j(o,a4,16),A.j(f,a4,4))}else{l===$&&A.c(a5)
l.eG(a0,q)}}o=a3.ax
o.toString
if(a6<o-1){B.i.S(k.a,0,16,s.P(),480)
B.i.S(k.b,0,8,r.P(),224)
B.i.S(k.c,0,8,q.P(),224)}a1=p*16
a2=p*8
for(m=0;m<16;++m){o=a3.p4
o.toString
l=a3.p1
l===$&&A.c("_cacheY")
l.al(a1+m*o,16,s,m*32)}for(m=0;m<8;++m){o=a3.R8
o.toString
l=a3.p2
l===$&&A.c("_cacheU")
f=m*32
l.al(a2+m*o,8,r,f)
o=a3.R8
o.toString
l=a3.p3
l===$&&A.c("_cacheV")
l.al(a2+m*o,8,q,f)}++p}},
dv(a,b,c){var s,r,q,p,o,n,m,l,k="_dsp"
switch(a>>>30){case 3:s=this.e
s===$&&A.c(k)
s.jJ(b,c,!1)
break
case 2:this.e===$&&A.c(k)
s=b.a
r=b.d
q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
p=s[r]+4
r+=4
if(!(r<q))return A.a(s,r)
o=B.a.V(B.a.i(s[r]*35468,16),32)
r=b.a
s=b.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
n=B.a.V(B.a.i(r[s]*85627,16),32)
s=b.a
r=b.d+1
if(!(r>=0&&r<s.length))return A.a(s,r)
m=B.a.V(B.a.i(s[r]*35468,16),32)
r=b.a
s=b.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
l=B.a.V(B.a.i(r[s]*85627,16),32)
A.i7(c,0,p+n,l,m)
A.i7(c,1,p+o,l,m)
A.i7(c,2,p-o,l,m)
A.i7(c,3,p-n,l,m)
break
case 1:s=this.e
s===$&&A.c(k)
s.bO(b,c)
break
default:break}},
hg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="_dsp",e=h.p4,d=h.k4
d===$&&A.c("_fInfo")
if(!(a>=0&&a<d.length))return A.a(d,a)
d=d[a]
d.toString
s=h.p1
s===$&&A.c("_cacheY")
r=A.j(s,g,a*16)
q=d.b
p=d.a
if(p===0)return
if(h.ar===1){if(a>0){s=h.e
s===$&&A.c(f)
e.toString
s.d4(r,e,p+4)}if(d.c){s=h.e
s===$&&A.c(f)
e.toString
s.eT(r,e,p)}if(b>0){s=h.e
s===$&&A.c(f)
e.toString
s.d5(r,e,p+4)}if(d.c){d=h.e
d===$&&A.c(f)
e.toString
d.eU(r,e,p)}}else{o=h.R8
s=h.p2
s===$&&A.c("_cacheU")
n=a*8
m=A.j(s,g,n)
s=h.p3
s===$&&A.c("_cacheV")
l=A.j(s,g,n)
k=d.d
if(a>0){s=h.e
s===$&&A.c(f)
e.toString
n=p+4
s.bc(r,1,e,16,n,q,k)
s=h.e
o.toString
s.bc(m,1,o,8,n,q,k)
s.bc(l,1,o,8,n,q,k)}if(d.c){s=h.e
s===$&&A.c(f)
e.toString
s.jb(r,e,p,q,k)
s=h.e
o.toString
j=A.j(m,g,4)
i=A.j(l,g,4)
s.bb(j,1,o,8,p,q,k)
s.bb(i,1,o,8,p,q,k)}if(b>0){s=h.e
s===$&&A.c(f)
e.toString
n=p+4
s.bc(r,e,1,16,n,q,k)
s=h.e
o.toString
s.bc(m,o,1,8,n,q,k)
s.bc(l,o,1,8,n,q,k)}if(d.c){d=h.e
d===$&&A.c(f)
e.toString
d.jM(r,e,p,q,k)
d=h.e
o.toString
s=4*o
j=A.j(m,g,s)
i=A.j(l,g,s)
d.bb(j,o,1,8,p,q,k)
d.bb(i,o,1,8,p,q,k)}}},
hp(){var s,r=this,q=r.ay
q===$&&A.c("_tlMbX")
s=q
while(!0){q=r.CW
q.toString
if(!(s<q))break
r.hg(s,r.y2);++s}},
hq(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.ar
a0.toString
if(!(a0<3))return A.a(B.B,a0)
s=B.B[a0]
a0=b.p4
a0.toString
r=s*a0
a0=b.R8
a0.toString
q=(s/2|0)*a0
a0=b.p1
a0===$&&A.c("_cacheY")
p=-r
o=A.j(a0,a,p)
a0=b.p2
a0===$&&A.c("_cacheU")
n=-q
m=A.j(a0,a,n)
a0=b.p3
a0===$&&A.c("_cacheV")
l=A.j(a0,a,n)
k=b.y2
a0=b.cx
a0.toString
j=k*16
i=(k+1)*16
if(a1)b.hp()
if(k!==0){j-=s
b.to=A.j(o,a,0)
b.x1=A.j(m,a,0)
b.x2=A.j(l,a,0)}else{b.to=A.j(b.p1,a,0)
b.x1=A.j(b.p2,a,0)
b.x2=A.j(b.p3,a,0)}a0=k<a0-1
if(a0)i-=s
h=b.as
h.toString
if(i>h)i=h
b.xr=null
if(b.aV!=null&&j<i){h=b.xr=b.h8(j,i-j)
if(h==null)return!1}else h=a
g=b.Q
g.toString
if(j<g){f=g-j
e=b.to
e===$&&A.c("_y")
d=e.d
c=b.p4
c.toString
e.d=d+c*f
c=b.x1
c===$&&A.c("_u")
d=c.d
e=b.R8
e.toString
e*=B.a.i(f,1)
c.d=d+e
d=b.x2
d===$&&A.c("_v")
d.d+=e
if(h!=null){e=h.d
d=b.b.a
if(typeof d!=="number")return d.ao()
h.d=e+d*f}j=g}if(j<i){e=b.to
e===$&&A.c("_y")
d=e.d
c=b.y
c===$&&A.c("_cropLeft")
e.d=d+c
d=b.x1
d===$&&A.c("_u")
e=c>>>1
d.d=d.d+e
d=b.x2
d===$&&A.c("_v")
d.d+=e
if(h!=null)h.d+=c
h=b.z
h===$&&A.c("_cropRight")
b.i4(j-g,h-c,i-j)}if(a0){a0=b.p1
h=b.p4
h.toString
a0.al(p,r,o,16*h)
h=b.p2
p=b.R8
p.toString
h.al(n,q,m,8*p)
p=b.p3
h=b.R8
h.toString
p.al(n,q,l,8*h)}return!0},
i4(a,b,c){if(b<=0||c<=0)return!1
this.hi(a,b,c)
this.hh(a,b,c)
return!0},
cp(a){var s
if((a&-4194304)>>>0===0)s=B.a.i(a,14)
else s=a<0?0:255
return s},
cb(a,b,c,d){var s=19077*a
d.h(0,0,this.cp(s+26149*c+-3644112))
d.h(0,1,this.cp(s-6419*b-13320*c+2229552))
d.h(0,2,this.cp(s+33050*b+-4527440))},
ca(a6,a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.ig(),a2=b4-1,a3=B.a.i(a2,1),a4=a8.a,a5=a8.d
if(!(a5>=0&&a5<a4.length))return A.a(a4,a5)
a5=a4[a5]
a4=a9.a
s=a9.d
if(!(s>=0&&s<a4.length))return A.a(a4,s)
r=a1.$2(a5,a4[s])
s=b0.a
a4=b0.d
if(!(a4>=0&&a4<s.length))return A.a(s,a4)
a4=s[a4]
s=b1.a
a5=b1.d
if(!(a5>=0&&a5<s.length))return A.a(s,a5)
q=a1.$2(a4,s[a5])
p=B.a.i(3*r+q+131074,2)
a5=a6.a
s=a6.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
a.cb(a5[s],p&255,p>>>16,b2)
b2.h(0,3,255)
a4=a7!=null
if(a4){p=B.a.i(3*q+r+131074,2)
a5=a7.a
s=a7.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
b3.toString
a.cb(s,p&255,p>>>16,b3)
b3.h(0,3,255)}for(o=1;o<=a3;++o,q=l,r=m){a5=a8.a
s=a8.d+o
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
a5=a9.a
n=a9.d+o
if(!(n>=0&&n<a5.length))return A.a(a5,n)
m=a1.$2(s,a5[n])
n=b0.a
a5=b0.d+o
if(!(a5>=0&&a5<n.length))return A.a(n,a5)
a5=n[a5]
n=b1.a
s=b1.d+o
if(!(s>=0&&s<n.length))return A.a(n,s)
l=a1.$2(a5,n[s])
k=r+m+q+l+524296
j=B.a.i(k+2*(m+q),3)
i=B.a.i(k+2*(r+l),3)
p=B.a.i(j+r,1)
h=B.a.i(i+m,1)
s=2*o
n=s-1
a5=a6.a
g=a6.d+n
if(!(g>=0&&g<a5.length))return A.a(a5,g)
g=a5[g]
a5=p&255
f=p>>>16
e=n*4
d=A.j(b2,a0,e)
g=19077*g
c=g+26149*f+-3644112
if((c&-4194304)>>>0===0)b=B.a.i(c,14)
else b=c<0?0:255
J.n(d.a,d.d,b)
f=g-6419*a5-13320*f+2229552
if((f&-4194304)>>>0===0)b=B.a.i(f,14)
else b=f<0?0:255
J.n(d.a,d.d+1,b)
a5=g+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.i(a5,14)
else b=a5<0?0:255
J.n(d.a,d.d+2,b)
J.n(d.a,d.d+3,255)
a5=s-0
g=a6.a
f=a6.d+a5
if(!(f>=0&&f<g.length))return A.a(g,f)
f=g[f]
g=h&255
d=h>>>16
a5=A.j(b2,a0,a5*4)
f=19077*f
c=f+26149*d+-3644112
if((c&-4194304)>>>0===0)b=B.a.i(c,14)
else b=c<0?0:255
J.n(a5.a,a5.d,b)
d=f-6419*g-13320*d+2229552
if((d&-4194304)>>>0===0)b=B.a.i(d,14)
else b=d<0?0:255
J.n(a5.a,a5.d+1,b)
g=f+33050*g+-4527440
if((g&-4194304)>>>0===0)b=B.a.i(g,14)
else b=g<0?0:255
J.n(a5.a,a5.d+2,b)
J.n(a5.a,a5.d+3,255)
if(a4){p=B.a.i(i+q,1)
h=B.a.i(j+l,1)
a5=a7.a
n=a7.d+n
if(!(n>=0&&n<a5.length))return A.a(a5,n)
n=a5[n]
a5=p&255
g=p>>>16
b3.toString
e=A.j(b3,a0,e)
n=19077*n
f=n+26149*g+-3644112
if((f&-4194304)>>>0===0)b=B.a.i(f,14)
else b=f<0?0:255
J.n(e.a,e.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.i(g,14)
else b=g<0?0:255
J.n(e.a,e.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.i(a5,14)
else b=a5<0?0:255
J.n(e.a,e.d+2,b)
J.n(e.a,e.d+3,255)
a5=a7.a
n=a7.d+s
if(!(n>=0&&n<a5.length))return A.a(a5,n)
n=a5[n]
a5=h&255
g=h>>>16
s=A.j(b3,a0,s*4)
n=19077*n
f=n+26149*g+-3644112
if((f&-4194304)>>>0===0)b=B.a.i(f,14)
else b=f<0?0:255
J.n(s.a,s.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.i(g,14)
else b=g<0?0:255
J.n(s.a,s.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.i(a5,14)
else b=a5<0?0:255
J.n(s.a,s.d+2,b)
J.n(s.a,s.d+3,255)}}if((b4&1)===0){p=B.a.i(3*r+q+131074,2)
a5=a6.a
s=a6.d+a2
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
a5=a2*4
n=A.j(b2,a0,a5)
a.cb(s,p&255,p>>>16,n)
n.h(0,3,255)
if(a4){p=B.a.i(3*q+r+131074,2)
a4=a7.a
a2=a7.d+a2
if(!(a2>=0&&a2<a4.length))return A.a(a4,a2)
a2=a4[a2]
b3.toString
a5=A.j(b3,a0,a5)
a.cb(a2,p&255,p>>>16,a5)
a5.h(0,3,255)}}},
hh(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=j.xr
if(i==null)return
s=j.b
r=s.a
if(typeof r!=="number")return r.ao()
q=r*4
p=A.j(i,null,0)
if(a===0){o=c-1
n=a}else{n=a-1
p.d-=r
o=c}m=A.m(j.d.aY(),!1,null,n*q+3)
i=j.Q
i.toString
r=j.as
if(i+a+c===r){r.toString
o=r-i-n}for(l=0;l<o;++l){for(k=0;k<b;++k){i=p.a
r=p.d+k
if(!(r>=0&&r<i.length))return A.a(i,r)
r=i[r]
J.n(m.a,m.d+4*k,r&255)}i=p.d
r=s.a
if(typeof r!=="number")return A.J(r)
p.d=i+r
m.d+=q}},
hi(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d.aY(),c=f.b.a
if(typeof c!=="number")return A.J(c)
s=A.m(d,!1,e,a*c*4)
d=f.to
d===$&&A.c("_y")
r=A.j(d,e,0)
d=f.x1
d===$&&A.c("_u")
q=A.j(d,e,0)
d=f.x2
d===$&&A.c("_v")
p=A.j(d,e,0)
o=a+a0
n=B.a.i(b+1,1)
m=c*4
c=f.rx
c===$&&A.c("_tmpU")
l=A.j(c,e,0)
c=f.ry
c===$&&A.c("_tmpV")
k=A.j(c,e,0)
if(a===0){f.ca(r,e,q,p,q,p,s,e,b)
j=a0}else{d=f.RG
d===$&&A.c("_tmpY")
f.ca(d,r,l,k,q,p,A.j(s,e,-m),s,b)
j=a0+1}l.scR(0,q.a)
k.scR(0,p.a)
for(d=2*m,c=-m,i=a;i+=2,i<o;){l.d=q.d
k.d=p.d
h=q.d
g=f.R8
g.toString
q.d=h+g
p.d+=g
s.d+=d
g=r.d
h=f.p4
h.toString
r.d=g+2*h
f.ca(A.j(r,e,-h),r,l,k,q,p,A.j(s,e,c),s,b)}d=r.d
c=f.p4
c.toString
r.d=d+c
d=f.Q
d.toString
c=f.as
c.toString
if(d+o<c){d=f.RG
d===$&&A.c("_tmpY")
d.aW(0,b,r)
f.rx.aW(0,n,q)
f.ry.aW(0,n,p);--j}else if((o&1)===0)f.ca(r,e,q,p,q,p,A.j(s,e,m),e,b)
return j},
h8(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="_alphaPlane",f=i.b,e=f.a,d=f.b
if(a<0||b<=0||a+b>d)return h
if(a===0){f=e*d
i.aI=new Uint8Array(f)
s=i.aV
r=new A.ih(s,e,d)
q=s.u()
r.d=q&3
r.e=B.a.i(q,2)&3
r.f=B.a.i(q,4)&3
r.r=B.a.i(q,6)&3
if(r.geu()){p=r.d
if(p===0){if(s.c-s.d<f)r.r=1}else if(p===1){o=new A.dm(A.b([],t.J))
o.a=e
o.b=d
f=A.b([],t.e5)
p=A.b([],t.gk)
n=new Uint32Array(2)
m=new A.fd(s,n)
n=m.d=A.I(n.buffer,0,h)
l=s.u()
k=n.length
if(0>=k)return A.a(n,0)
n[0]=l
l=s.u()
if(1>=k)return A.a(n,1)
n[1]=l
l=s.u()
if(2>=k)return A.a(n,2)
n[2]=l
l=s.u()
if(3>=k)return A.a(n,3)
n[3]=l
l=s.u()
if(4>=k)return A.a(n,4)
n[4]=l
l=s.u()
if(5>=k)return A.a(n,5)
n[5]=l
l=s.u()
if(6>=k)return A.a(n,6)
n[6]=l
s=s.u()
if(7>=k)return A.a(n,7)
n[7]=s
p=r.x=new A.en(m,o,f,p)
p.db=e
p.bt(e,d,!0)
f=r.x
s=f.ax
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
f=s[0].a===3&&f.hD()}else f=!1
if(f){r.y=!0
f=r.x
s=f.c
p=s.a
s=s.b
if(typeof p!=="number")return p.ao()
if(typeof s!=="number")return A.J(s)
j=p*s
f.cx=0
s=B.a.N(j,4)
s=new Uint8Array(j+(4-s))
f.CW=s
f.ch=A.jU(s.buffer,0,h)}else{r.y=!1
r.x.dd()}}else r.r=1}i.aH=r}f=i.aH
f===$&&A.c("_alpha")
if(!f.w){s=i.aI
s===$&&A.c(g)
if(!f.iW(a,b,s))return h}f=i.aI
f===$&&A.c(g)
return A.m(f,!1,h,a*e)},
hW(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a4.fr.b,a6=a4.dy,a7=a4.k1
a7===$&&A.c("_segment")
if(!(a7<4))return A.a(a6,a7)
s=a6[a7]
a7=a4.ah
a7===$&&A.c("_mbData")
a6=a4.y1
if(!(a6<a7.length))return A.a(a7,a6)
r=a7[a6]
q=A.m(r.a,!1,null,0)
a6=a4.k3
a6===$&&A.c("_mbInfo")
if(0>=a6.length)return A.a(a6,0)
p=a6[0]
q.jj(0,q.c-q.d,0)
a6=r.b
a6===$&&A.c("isIntra4x4")
if(!a6){o=A.m(new Int16Array(16),!1,null,0)
a6=a8.b
a7=p.b
if(1>=a5.length)return A.a(a5,1)
n=a4.cD(a9,a5[1],a6+a7,s.b,0,o)
a8.b=p.b=n>0?1:0
if(n>1)a4.iE(o,q)
else{a6=o.a
a7=o.d
if(!(a7>=0&&a7<a6.length))return A.a(a6,a7)
m=B.a.i(a6[a7]+3,3)
for(l=0;l<256;l+=16)J.n(q.a,q.d+l,m)}k=a5[0]
j=1}else{if(3>=a5.length)return A.a(a5,3)
k=a5[3]
j=0}i=a8.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c,d=b){n=a4.cD(a9,k,e+(i&1),s.a,j,q)
e=n>j?1:0
i=i>>>1|e<<7
a6=q.a
a7=q.d
if(!(a7>=0&&a7<a6.length))return A.a(a6,a7)
a6=a6[a7]!==0?1:0
if(n>3)a6=3
else if(n>1)a6=2
b=d<<2|a6
q.d=a7+16}i=i>>>4
h=h>>>1|e<<7
g=(g<<8|d)>>>0}a=h>>>4
for(a6=a5.length,a0=i,a1=0,a2=0;a2<4;a2+=2){a7=4+a2
i=B.a.L(a8.a,a7)
h=B.a.L(p.a,a7)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c,d=b){if(2>=a6)return A.a(a5,2)
n=a4.cD(a9,a5[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a7=q.a
a3=q.d
if(!(a3>=0&&a3<a7.length))return A.a(a7,a3)
a7=a7[a3]!==0?1:0
if(n>3)a7=3
else if(n>1)a7=2
b=(d<<2|a7)>>>0
q.d=a3+16}i=i>>>2
h=h>>>1|e<<5}a1=(a1|B.a.B(d,4*a2))>>>0
a0=(a0|B.a.B(i<<4>>>0,a2))>>>0
a=(a|B.a.B(h&240,a2))>>>0}a8.a=a0
p.a=a
r.e=g
r.f=a1
if((a1&43690)===0)s.toString
return(g|a1)>>>0===0},
iE(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
for(s=a.a,r=a.d,q=s.length,p=0;p<4;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
o=s[o]
n=12+p
m=r+n
if(!(m>=0&&m<q))return A.a(s,m)
m=s[m]
l=o+m
k=4+p
j=r+k
if(!(j>=0&&j<q))return A.a(s,j)
j=s[j]
i=8+p
h=r+i
if(!(h>=0&&h<q))return A.a(s,h)
h=s[h]
g=j+h
f=j-h
e=o-m
if(!(p<16))return A.a(b,p)
b[p]=l+g
if(!(i<16))return A.a(b,i)
b[i]=l-g
b[k]=e+f
if(!(n<16))return A.a(b,n)
b[n]=e-f}for(d=0,p=0;p<4;++p){s=p*4
if(!(s<16))return A.a(b,s)
c=b[s]+3
r=3+s
if(!(r<16))return A.a(b,r)
r=b[r]
l=c+r
q=1+s
if(!(q<16))return A.a(b,q)
q=b[q]
s=2+s
if(!(s<16))return A.a(b,s)
s=b[s]
g=q+s
f=q-s
e=c-r
r=B.a.i(l+g,3)
J.n(a0.a,a0.d+d,r)
r=B.a.i(e+f,3)
J.n(a0.a,a0.d+(d+16),r)
r=B.a.i(l-g,3)
J.n(a0.a,a0.d+(d+32),r)
r=B.a.i(e-f,3)
J.n(a0.a,a0.d+(d+48),r)
d+=64}},
hw(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.J(b[3])===0)s=a.J(b[4])===0?2:3+a.J(b[5])
else if(a.J(b[6])===0)s=a.J(b[7])===0?5+a.J(159):7+2*a.J(165)+a.J(145)
else{r=a.J(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.J(b[q])
if(!(p<4))return A.a(B.aD,p)
o=B.aD[p]
for(n=o.length,s=0,m=0;m<n;++m)s+=s+a.J(o[m])
s+=3+B.a.B(8,p)}return s},
cD(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
t.c7.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.J(q[0])===0)return e
for(;a.J(q[1])===0;){++e
if(!(e>=0&&e<17))return A.a(B.H,e)
r=B.H[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.H,p)
r=B.H[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.J(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.hw(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.at,e)
r=B.at[e]
m=a.b
m===$&&A.c("_range")
l=a.di(B.a.i(m,1))
m=a.b
if(m>>>0!==m||m>=128)return A.a(B.F,m)
k=B.F[m]
a.b=B.aF[m]
m=a.d
m===$&&A.c("_bits")
a.d=m-k
m=l!==0?-n:n
j=d[e>0?1:0]
J.n(f.a,f.d+r,m*j)}return 16},
hS(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.ah
d===$&&A.c("_mbData")
if(!(h<d.length))return A.a(d,h)
s=d[h]
h=i.c
h===$&&A.c("br")
h=h.J(145)===0
s.b=h
if(!h){if(i.c.J(156)!==0)r=i.c.J(128)!==0?1:3
else r=i.c.J(163)!==0?2:0
s.c[0]=r
f.toString
B.i.aj(f,g,g+4,r)
B.i.aj(e,0,4,r)}else{q=s.c
for(p=0,o=0;o<4;++o,p=j){r=e[o]
for(n=0;n<4;++n){h=g+n
if(!(h<f.length))return A.a(f,h)
d=f[h]
if(!(d<10))return A.a(B.ak,d)
d=B.ak[d]
if(!(r>=0&&r<10))return A.a(d,r)
m=d[r]
l=i.c.J(m[0])
if(!(l<18))return A.a(B.L,l)
k=B.L[l]
for(;k>0;){d=i.c
if(!(k<9))return A.a(m,k)
d=2*k+d.J(m[k])
if(!(d>=0&&d<18))return A.a(B.L,d)
k=B.L[d]}r=-k
f[h]=r}j=p+4
f.toString
B.i.S(q,p,j,f,g)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.J(142)===0)h=0
else if(i.c.J(114)===0)h=2
else h=i.c.J(183)!==0?1:3
s.d=h},
sfE(a){this.k2=t.cC.a(a)},
sfD(a){this.k3=t.eQ.a(a)},
sfA(a){this.k4=t.ge.a(a)},
sfC(a){this.ah=t.db.a(a)},
sfB(a){this.a9=t.gS.a(a)}}
A.ig.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:46}
A.dg.prototype={
C(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.D(this.J(128),r))>>>0
return s},
bp(a){var s=this.C(a)
return this.C(1)===1?-s:s},
J(a){var s,r=this,q=r.b
q===$&&A.c("_range")
s=r.di(B.a.i(q*a,8))
if(r.b<=126)r.iB()
return s},
di(a){var s,r,q,p,o,n=this,m="_value",l=n.d
l===$&&A.c("_bits")
if(l<0){s=n.a
r=s.c
q=s.d
if(r-q>=1){p=s.u()
l=n.c
l===$&&A.c(m)
n.c=(p|l<<8)>>>0
l=n.d+8
n.d=l
o=l}else{if(q<r){l=s.u()
s=n.c
s===$&&A.c(m)
n.c=(l|s<<8)>>>0
s=n.d+8
n.d=s
l=s}else if(!n.e){s=n.c
s===$&&A.c(m)
n.c=s<<8>>>0
l+=8
n.d=l
n.e=!0}o=l}}else o=l
l=n.c
l===$&&A.c(m)
if(B.a.a7(l,o)>a){s=n.b
s===$&&A.c("_range")
r=a+1
n.b=s-r
n.c=l-B.a.D(r,o)
return 1}else{n.b=a
return 0}},
iB(){var s,r=this,q=r.b
q===$&&A.c("_range")
if(!(q>=0&&q<128))return A.a(B.F,q)
s=B.F[q]
r.b=B.aF[q]
q=r.d
q===$&&A.c("_bits")
r.d=q-s}}
A.i3.prototype={
d5(a,b,c){var s,r=A.j(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.dQ(r,b,c))this.c0(r,b)}},
d4(a,b,c){var s,r=A.j(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.dQ(r,1,c))this.c0(r,1)}},
eU(a,b,c){var s,r,q=A.j(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.d5(q,b,c)}},
eT(a,b,c){var s,r=A.j(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.d4(r,b,c)}},
jM(a,b,c,d,e){var s,r,q=A.j(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.bb(q,b,1,16,c,d,e)}},
jb(a,b,c,d,e){var s,r=A.j(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.bb(r,1,b,16,c,d,e)}},
bc(a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.j(a1,null,0)
for(s=-3*a2,r=-2*a2,q=-a2,p=2*a2;o=a4-1,a4>0;a4=o){if(this.dR(a0,a2,a5,a6))if(this.dI(a0,a2,a7))this.c0(a0,a2)
else{n=a0.a
m=a0.d
l=m+s
k=n.length
if(!(l>=0&&l<k))return A.a(n,l)
j=n[l]
i=m+r
if(!(i>=0&&i<k))return A.a(n,i)
i=n[i]
h=m+q
if(!(h>=0&&h<k))return A.a(n,h)
h=n[h]
if(!(m>=0&&m<k))return A.a(n,m)
g=n[m]
f=m+a2
if(!(f<k))return A.a(n,f)
f=n[f]
m+=p
if(!(m<k))return A.a(n,m)
m=n[m]
k=$.jD()
e=1020+i-f
k.toString
if(!(e>=0&&e<2041))return A.a(k,e)
e=1020+3*(g-h)+k[e]
if(!(e>=0&&e<2041))return A.a(k,e)
d=k[e]
e=B.a.i(27*d+63,7)
c=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(18*d+63,7)
b=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.i(9*d+63,7)
a=(e&2147483647)-((e&2147483648)>>>0)
e=$.ad()
j=255+j+a
e.toString
if(!(j>=0&&j<766))return A.a(e,j)
J.n(n,l,e[j])
j=$.ad()
i=255+i+b
j.toString
if(!(i>=0&&i<766))return A.a(j,i)
i=j[i]
J.n(a0.a,a0.d+r,i)
i=$.ad()
h=255+h+c
i.toString
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.n(a0.a,a0.d+q,h)
h=$.ad()
g=255+g-c
h.toString
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.n(a0.a,a0.d,g)
g=$.ad()
f=255+f-b
g.toString
if(!(f>=0&&f<766))return A.a(g,f)
f=g[f]
J.n(a0.a,a0.d+a2,f)
f=$.ad()
m=255+m-a
f.toString
if(!(m>=0&&m<766))return A.a(f,m)
m=f[m]
J.n(a0.a,a0.d+p,m)}a0.d+=a3}},
bb(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.j(a,null,0)
for(s=-2*b,r=-b;q=a0-1,a0>0;a0=q){if(this.dR(d,b,a1,a2))if(this.dI(d,b,a3))this.c0(d,b)
else{p=d.a
o=d.d
n=o+s
m=p.length
if(!(n>=0&&n<m))return A.a(p,n)
l=p[n]
k=o+r
if(!(k>=0&&k<m))return A.a(p,k)
k=p[k]
if(!(o>=0&&o<m))return A.a(p,o)
j=p[o]
o+=b
if(!(o<m))return A.a(p,o)
o=p[o]
i=3*(j-k)
m=$.fD()
h=B.a.i(i+4,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
m.toString
if(!(h>=0&&h<225))return A.a(m,h)
g=m[h]
h=B.a.i(i+3,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
if(!(h>=0&&h<225))return A.a(m,h)
f=m[h]
h=B.a.i(g+1,1)
e=(h&2147483647)-((h&2147483648)>>>0)
h=$.ad()
l=255+l+e
h.toString
if(!(l>=0&&l<766))return A.a(h,l)
J.n(p,n,h[l])
l=$.ad()
k=255+k+f
l.toString
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.n(d.a,d.d+r,k)
k=$.ad()
j=255+j-g
k.toString
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.n(d.a,d.d,j)
j=$.ad()
o=255+o-e
j.toString
if(!(o>=0&&o<766))return A.a(j,o)
o=j[o]
J.n(d.a,d.d+b,o)}d.d+=c}},
c0(a,b){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-2*b,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=-b
r=l+s
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
if(!(l>=0&&l<j))return A.a(m,l)
q=m[l]
l+=b
if(!(l<j))return A.a(m,l)
l=m[l]
m=$.jD()
l=1020+k-l
m.toString
if(!(l>=0&&l<2041))return A.a(m,l)
p=3*(q-r)+m[l]
l=$.fD()
m=112+B.a.V(B.a.i(p+4,3),32)
l.toString
if(!(m>=0&&m<225))return A.a(l,m)
o=l[m]
m=$.fD()
l=112+B.a.V(B.a.i(p+3,3),32)
m.toString
if(!(l>=0&&l<225))return A.a(m,l)
n=m[l]
l=$.ad()
r=255+r+n
l.toString
if(!(r>=0&&r<766))return A.a(l,r)
a.h(0,s,l[r])
r=$.ad()
q=255+q-o
r.toString
if(!(q>=0&&q<766))return A.a(r,q)
a.h(0,0,r[q])},
dI(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+-b
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
if(!(p>=0&&p<n))return A.a(q,p)
r=q[p]
p+=b
if(!(p<n))return A.a(q,p)
p=q[p]
q=$.fC()
s=255+o-s
q.toString
if(!(s>=0&&s<511))return A.a(q,s)
if(q[s]<=c){p=255+p-r
if(!(p>=0&&p<511))return A.a(q,p)
p=q[p]>c
q=p}else q=!0
return q},
dQ(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+-b
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
if(!(p>=0&&p<n))return A.a(q,p)
r=q[p]
p+=b
if(!(p<n))return A.a(q,p)
p=q[p]
q=$.fC()
r=255+s-r
q.toString
if(!(r>=0&&r<511))return A.a(q,r)
r=q[r]
q=$.jC()
p=255+o-p
q.toString
if(!(p>=0&&p<511))return A.a(q,p)
return 2*r+q[p]<=c},
dR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.d,h=i+-4*b,g=j.length
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
s=i+-3*b
if(!(s>=0&&s<g))return A.a(j,s)
s=j[s]
r=i+-2*b
if(!(r>=0&&r<g))return A.a(j,r)
r=j[r]
q=i+-b
if(!(q>=0&&q<g))return A.a(j,q)
q=j[q]
if(!(i>=0&&i<g))return A.a(j,i)
p=j[i]
o=i+b
if(!(o<g))return A.a(j,o)
o=j[o]
n=i+2*b
if(!(n<g))return A.a(j,n)
n=j[n]
i+=3*b
if(!(i<g))return A.a(j,i)
i=j[i]
j=$.fC()
g=255+q-p
j.toString
if(!(g>=0&&g<511))return A.a(j,g)
g=j[g]
m=$.jC()
l=255+r
k=l-o
m.toString
if(!(k>=0&&k<511))return A.a(m,k)
if(2*g+m[k]>c)return!1
h=255+h-s
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){h=255+s-r
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){h=l-q
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){i=255+i-n
if(!(i>=0&&i<511))return A.a(j,i)
if(j[i]<=d){i=255+n-o
if(!(i>=0&&i<511))return A.a(j,i)
if(j[i]<=d){i=255+o-p
if(!(i>=0&&i<511))return A.a(j,i)
i=j[i]<=d
j=i}else j=!1}else j=!1}else j=!1}else j=!1}else j=!1
return j},
aB(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
for(s=a.a,r=a.d,q=s.length,p=0,o=0,n=0;n<4;++n){m=r+p
if(!(m>=0&&m<q))return A.a(s,m)
m=s[m]
l=r+(p+8)
if(!(l>=0&&l<q))return A.a(s,l)
l=s[l]
k=m+l
j=m-l
l=r+(p+4)
if(!(l>=0&&l<q))return A.a(s,l)
l=s[l]
m=B.a.i(l*35468,16)
i=r+(p+12)
if(!(i>=0&&i<q))return A.a(s,i)
i=s[i]
h=B.a.i(i*85627,16)
g=(m&2147483647)-((m&2147483648)>>>0)-((h&2147483647)-((h&2147483648)>>>0))
l=B.a.i(l*85627,16)
i=B.a.i(i*35468,16)
f=(l&2147483647)-((l&2147483648)>>>0)+((i&2147483647)-((i&2147483648)>>>0))
e=o+1
if(!(o<16))return A.a(b,o)
b[o]=k+f
o=e+1
if(!(e<16))return A.a(b,e)
b[e]=j+g
e=o+1
if(!(o<16))return A.a(b,o)
b[o]=j-g
o=e+1
if(!(e<16))return A.a(b,e)
b[e]=k-f;++p}for(d=0,o=0,n=0;n<4;++n){if(!(o<16))return A.a(b,o)
c=b[o]+4
s=o+8
if(!(s<16))return A.a(b,s)
s=b[s]
k=c+s
j=c-s
s=o+4
if(!(s<16))return A.a(b,s)
s=b[s]
r=B.a.i(s*35468,16)
q=o+12
if(!(q<16))return A.a(b,q)
q=b[q]
m=B.a.i(q*85627,16)
g=(r&2147483647)-((r&2147483648)>>>0)-((m&2147483647)-((m&2147483648)>>>0))
s=B.a.i(s*85627,16)
q=B.a.i(q*35468,16)
f=(s&2147483647)-((s&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.bk(a0,d,0,0,k+f)
A.bk(a0,d,1,0,j+g)
A.bk(a0,d,2,0,j-g)
A.bk(a0,d,3,0,k-f);++o
d+=32}},
jJ(a,b,c){this.aB(a,b)
if(c)this.aB(A.j(a,null,16),A.j(b,null,4))},
bO(a,b){var s,r,q,p=a.a,o=a.d
if(!(o>=0&&o<p.length))return A.a(p,o)
s=p[o]+4
for(r=0;r<4;++r)for(q=0;q<4;++q)A.bk(b,0,q,r,s)},
eG(a,b){var s=this,r=null,q=a.a,p=a.d
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bO(a,b)
q=a.a
p=a.d+16
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bO(A.j(a,r,16),A.j(b,r,4))
q=a.a
p=a.d+32
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bO(A.j(a,r,32),A.j(b,r,128))
q=a.a
p=a.d+48
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.bO(A.j(a,r,48),A.j(b,r,132))}}
A.i8.prototype={}
A.ic.prototype={}
A.ie.prototype={}
A.df.prototype={}
A.id.prototype={}
A.i4.prototype={}
A.b1.prototype={}
A.di.prototype={}
A.ff.prototype={}
A.dj.prototype={}
A.dk.prototype={}
A.dh.prototype={
bF(){var s,r=this.b
if(r.M(8)!==47)return!1
s=this.c
s.f=2
s.a=r.M(14)+1
s.b=r.M(14)+1
s.d=r.M(1)!==0
if(r.M(3)!==0)return!1
return!0},
aG(){var s,r,q,p=this,o=null
p.e=0
if(!p.bF())return o
s=p.c
p.bt(s.a,s.b,!0)
p.dd()
p.d=A.a1(s.a,s.b,B.k,o,o)
r=p.ch
r.toString
q=s.a
s=s.b
if(!p.cu(r,q,s,s,p.gi1()))return o
return p.d},
dd(){var s,r=this,q=r.c,p=q.a
q=q.b
if(typeof p!=="number")return p.ao()
if(typeof q!=="number")return A.J(q)
q=p*q+p
s=new Uint32Array(q+p*16)
r.ch=s
r.CW=A.I(s.buffer,0,null)
r.cx=q
return!0},
iu(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.M(2)
q=l.ay
p=B.a.B(1,r)
if((q&p)>>>0!==0)return!1
l.ay=(q|p)>>>0
o=new A.fe()
B.b.v(l.ax,o)
o.a=r
o.b=a[0]
o.c=a[1]
switch(r){case 0:case 1:s=o.e=s.M(3)+2
o.d=l.bt(A.bL(o.b,s),A.bL(o.c,s),!1)
break
case 3:n=s.M(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.b.h(a,0,A.bL(o.b,m))
o.e=m
o.d=l.bt(n,1,!1)
l.hl(n,o)
break
case 2:break
default:throw A.d(A.h("Invalid WebP transform type: "+r))}return!0},
bt(a,b,c){var s,r,q,p,o,n,m,l,k=this
A.u(a)
A.u(b)
if(c){for(s=k.b,r=t.t,q=b,p=a;s.M(1)!==0;){o=A.b([p,q],r)
if(!k.iu(o))throw A.d(A.h("Invalid Transform"))
p=o[0]
q=o[1]}c=!0}else{q=b
p=a}s=k.b
if(s.M(1)!==0){n=s.M(4)
if(!(n>=1&&n<=11))throw A.d(A.h("Invalid Color Cache"))}else n=0
if(!k.ii(p,q,n,c))throw A.d(A.h("Invalid Huffman Codes"))
if(n>0){s=B.a.B(1,n)
k.r=s
k.w=new A.i9(new Uint32Array(s),32-n)}else k.r=0
s=k.c
s.a=p
s.b=q
m=k.y
k.z=A.bL(p,m)
k.x=m===0?4294967295:B.a.B(1,m)-1
if(c){k.e=0
return null}l=new Uint32Array(p*q)
if(!k.cu(l,p,q,q,null))throw A.d(A.h("Failed to decode image data."))
k.e=0
return l},
cu(b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
A.u(b1)
A.u(b2)
A.u(b3)
t.bJ.a(b4)
s=a9.e
r=B.a.X(s,b1)
q=B.a.N(s,b1)
p=a9.dC(q,r)
o=a9.e
n=b1*b2
m=b1*b3
s=a9.r
l=280+s
k=s>0?a9.w:null
j=a9.x
s=b0.length
i=a9.b
h=b4!=null
g=o
while(!0){f=i.b
e=f.c
if(!(!(f.d>=e&&i.a>=64)&&o<m))break
if((q&j)>>>0===0){d=a9.bu(a9.Q,a9.z,a9.y,q,r)
f=a9.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(i.a>=32)i.b4()
f=p.a
e=f.length
if(0>=e)return A.a(f,0)
c=f[0].aX(i)
if(c<256){if(1>=e)return A.a(f,1)
b=f[1].aX(i)
if(i.a>=32)i.b4()
if(2>=e)return A.a(f,2)
a=f[2].aX(i)
if(3>=e)return A.a(f,3)
f=B.c.m(B.a.p(f[3].aX(i),0,255))
e=B.c.m(B.a.p(b,0,255))
a0=B.c.m(B.a.p(c,0,255))
a1=B.c.m(B.a.p(a,0,255))
if(!(o>=0&&o<s))return A.a(b0,o)
b0[o]=(f<<24|e<<16|a0<<8|a1)>>>0;++o;++q
if(q>=b1){++r
if(B.a.N(r,16)===0&&h)b4.$1(r)
if(k!=null)for(f=k.b,e=k.a,a0=e.length;g<o;){if(!(g>=0))return A.a(b0,g)
a1=b0[g]
a2=B.a.a3(a1*506832829>>>0,f)
if(!(a2<a0))return A.a(e,a2)
e[a2]=a1;++g}q=0}}else if(c<280){a3=a9.c3(c-256)
if(4>=e)return A.a(f,4)
a4=f[4].aX(i)
if(i.a>=32)i.b4()
a5=a9.dW(b1,a9.c3(a4))
if(o<a5||n-o<a3)return!1
else{a6=o-a5
for(a7=0;a7<a3;++a7){f=o+a7
e=a6+a7
if(!(e>=0&&e<s))return A.a(b0,e)
e=b0[e]
if(!(f>=0&&f<s))return A.a(b0,f)
b0[f]=e}o+=a3}q+=a3
for(;q>=b1;){q-=b1;++r
if(B.a.N(r,16)===0&&h)b4.$1(r)}if(o<m){if((q&j)>>>0!==0){d=a9.bu(a9.Q,a9.z,a9.y,q,r)
f=a9.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(k!=null)for(f=k.b,e=k.a,a0=e.length;g<o;){if(!(g>=0&&g<s))return A.a(b0,g)
a1=b0[g]
a2=B.a.a3(a1*506832829>>>0,f)
if(!(a2<a0))return A.a(e,a2)
e[a2]=a1;++g}}}else if(c<l){a2=c-280
for(;g<o;){k.toString
if(!(g>=0&&g<s))return A.a(b0,g)
f=b0[g]
a8=B.a.a3(f*506832829>>>0,k.b)
e=k.a
if(!(a8<e.length))return A.a(e,a8)
e[a8]=f;++g}f=k.a
e=f.length
if(!(a2<e))return A.a(f,a2)
a0=f[a2]
if(!(o>=0&&o<s))return A.a(b0,o)
b0[o]=a0;++o;++q
if(q>=b1){++r
if(B.a.N(r,16)===0&&h)b4.$1(r)
for(a0=k.b;g<o;){if(!(g>=0))return A.a(b0,g)
a1=b0[g]
a2=B.a.a3(a1*506832829>>>0,a0)
if(!(a2<e))return A.a(f,a2)
f[a2]=a1;++g}q=0}}else return!1}if(h)b4.$1(r)
if(f.d>=e&&i.a>=64&&o<n)return!1
a9.e=o
return!0},
hD(){var s,r,q,p,o,n
if(this.r>0)return!1
for(s=this.as,r=this.at,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p].a
n=o.length
if(1>=n)return A.a(o,1)
if(o[1].f>1)return!1
if(2>=n)return A.a(o,2)
if(o[2].f>1)return!1
if(3>=n)return A.a(o,3)
if(o[3].f>1)return!1}return!0},
hm(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.f,g=a-h
if(g<=0)return
s=i.c
r=s.a
if(typeof r!=="number")return r.ao()
i.de(g,r*h)
q=s.a
p=q*g
o=q*i.f
s=i.ch
s.toString
h=i.cx
h.toString
n=A.m(s,!1,null,h)
for(h=i.cy,s=n.a,r=n.d,m=s.length,l=0;l<p;++l){h.toString
k=o+l
j=r+l
if(!(j>=0&&j<m))return A.a(s,j)
j=B.a.i(s[j],8)
if(!(k>=0&&k<h.length))return A.a(h,k)
h[k]=j&255}i.f=a},
fX(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=this,h="_pixels8",g=i.e,f=B.a.X(g,a1),e=B.a.N(g,a1),d=i.dC(e,f),c=i.e,b=a1*a2,a=a1*a3,a0=i.x
g=i.b
while(!0){s=g.b
if(!(!(s.d>=s.c&&g.a>=64)&&c<a))break
if((e&a0)>>>0===0){r=i.bu(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}if(g.a>=32)g.b4()
s=d.a
q=s.length
if(0>=q)return A.a(s,0)
p=s[0].aX(g)
if(p<256){s=i.CW
s===$&&A.c(h)
if(!(c>=0&&c<s.length))return A.a(s,c)
s[c]=p;++c;++e
if(e>=a1){++f
if(B.a.N(f,16)===0)i.cA(f)
e=0}}else if(p<280){o=i.c3(p-256)
if(4>=q)return A.a(s,4)
n=s[4].aX(g)
if(g.a>=32)g.b4()
m=i.dW(a1,i.c3(n))
if(c>=m&&b-c>=o)for(s=i.CW,l=0;l<o;++l){s===$&&A.c(h)
q=c+l
k=q-m
j=s.length
if(!(k>=0&&k<j))return A.a(s,k)
k=s[k]
if(!(q>=0&&q<j))return A.a(s,q)
s[q]=k}else{i.e=c
return!0}c+=o
e+=o
for(;e>=a1;){e-=a1;++f
if(B.a.N(f,16)===0)i.cA(f)}if(c<a&&(e&a0)>>>0!==0){r=i.bu(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}}else return!1}i.cA(f)
i.e=c
return!0},
cA(a){var s,r,q,p=this,o=p.f,n=a-o,m=p.CW
m===$&&A.c("_pixels8")
s=p.c.a
if(typeof s!=="number")return s.ao()
r=A.m(m,!1,null,s*o)
if(n>0){m=p.cy
m.toString
s=p.db
s.toString
q=A.m(m,!1,null,s*o)
s=p.ax
if(0>=s.length)return A.a(s,0)
s[0].iM(o,o+n,r,q)}p.f=a},
i2(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.c,g=h.a,f=i.f
if(typeof g!=="number")return g.ao()
s=a-f
if(s<=0)return
i.de(s,g*f)
g=i.cx
g.toString
r=i.f
q=g
p=0
for(;p<s;++p,++r){o=0
while(!0){g=h.a
if(typeof g!=="number")return A.J(g)
if(!(o<g))break
g=i.ch
if(!(q>=0&&q<g.length))return A.a(g,q)
n=g[q]
g=i.d
g.toString
f=B.c.m(B.a.p(n>>>24&255,0,255))
m=B.c.m(B.a.p(n&255,0,255))
l=B.c.m(B.a.p(n>>>8&255,0,255))
k=B.c.m(B.a.p(n>>>16&255,0,255))
j=g.x
g=r*g.a+o
if(!(g>=0&&g<j.length))return A.a(j,g)
j[g]=(f<<24|m<<16|l<<8|k)>>>0;++o;++q}}i.f=a},
de(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.ax,d=e.length,c=f.c.a
if(typeof c!=="number")return c.ao()
s=f.f
r=s+a
q=f.cx
q.toString
p=f.ch
p.toString
B.t.S(p,q,q+c*a,p,b)
for(c=r-s,p=c-1,o=b;n=d-1,d>0;o=q,d=n){if(!(n>=0&&n<e.length))return A.a(e,n)
m=e[n]
l=f.ch
l.toString
k=m.b
switch(m.a){case 2:m.iH(l,q,q+c*k)
break
case 0:m.jp(s,r,l,q)
if(r!==m.c){j=q-k
B.t.S(l,j,j+k,l,q+p*k)}break
case 1:m.iQ(s,r,l,q)
break
case 3:if(o===q&&m.e>0){i=m.e
h=c*B.a.i(k+B.a.B(1,i)-1,i)
g=q+c*k-h
B.t.S(l,g,g+h,l,q)
m.ei(s,r,l,g,l,q)}else m.ei(s,r,l,o,l,q)
break}}},
ii(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d&&e.b.M(1)!==0){s=e.b.M(3)+2
r=A.bL(a,s)
q=A.bL(b,s)
p=r*q
o=e.bt(r,q,!1)
e.y=s
for(n=1,m=0;m<p;++m){if(!(m<o.length))return A.a(o,m)
l=o[m]>>>8&65535
o[m]=l
if(l>=n)n=l+1}}else{o=null
n=1}k=J.ag(n,t.ct)
for(j=0;j<n;++j)k[j]=A.ng()
for(i=c>0,m=0;m<n;++m)for(h=0;h<5;++h){g=B.eP[h]
if(h===0&&i)g+=B.a.B(1,c)
if(!(m<n))return A.a(k,m)
f=k[m].a
if(!(h<f.length))return A.a(f,h)
if(!e.ig(g,f[h]))return!1}e.Q=o
e.as=n
e.shz(k)
return!0},
ig(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.b
if(i.M(1)!==0){s=t.t
r=A.b([0,0],s)
q=A.b([0,0],s)
p=A.b([0,0],s)
o=i.M(1)+1
B.b.h(r,0,i.M(i.M(1)===0?1:8))
B.b.h(q,0,0)
s=o-1
B.b.h(p,0,s)
if(o===2){B.b.h(r,1,i.M(8))
B.b.h(q,1,1)
B.b.h(p,1,s)}n=b.iL(p,q,r,a,o)}else{m=new Int32Array(19)
l=i.M(4)+4
if(l>19)return!1
p=new Int32Array(a)
for(k=0;k<l;++k){s=B.en[k]
j=i.M(3)
if(!(s<19))return A.a(m,s)
m[s]=j}n=this.ih(m,a,p)
if(n)n=b.eh(p,a)}return n},
ih(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(c)
s=A.kR()
if(!s.eh(a,19))return!1
e=this.b
if(e.M(1)!==0){r=2+e.M(2+2*e.M(3))
if(r>b)return!1}else r=b
for(q=c.length,p=0,o=8;p<b;r=n){n=r-1
if(r===0)break
if(e.a>=32)e.b4()
m=s.aX(e)
if(m<16){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=m
if(m!==0)o=m
p=l}else{k=m-16
if(!(k<3))return A.a(B.ah,k)
j=B.ah[k]
i=B.bq[k]
h=e.M(j)+i
if(p+h>b)return!1
else{g=m===16?o:0
for(;f=h-1,h>0;h=f,p=l){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=g}}}}return!0},
c3(a){var s
if(a<4)return a+1
s=B.a.i(a-2,1)
return B.a.B(2+(a&1),s)+this.b.M(s)+1},
dW(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.am,s)
r=B.am[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
hl(a,b){var s,r,q,p,o,n=B.a.B(1,B.a.L(8,b.e)),m=new Uint32Array(n),l=A.I(b.d.buffer,0,null),k=A.I(m.buffer,0,null),j=b.d
if(0>=j.length)return A.a(j,0)
j=j[0]
if(0>=n)return A.a(m,0)
m[0]=j
s=4*a
for(j=l.length,r=k.length,q=4;q<s;++q){if(!(q<j))return A.a(l,q)
p=l[q]
o=q-4
if(!(o<r))return A.a(k,o)
o=k[o]
if(!(q<r))return A.a(k,q)
k[q]=p+o&255}for(s=4*n;q<s;++q){if(!(q<r))return A.a(k,q)
k[q]=0}b.d=m
return!0},
bu(a,b,c,d,e){var s
if(c===0)return 0
a.toString
s=b*B.a.i(e,c)+B.a.i(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
dC(a,b){var s=this,r=s.bu(s.Q,s.z,s.y,a,b),q=s.at
if(!(r<q.length))return A.a(q,r)
return q[r]},
shz(a){this.at=t.d1.a(a)}}
A.en.prototype={
j7(a){return this.hm(a)}}
A.fd.prototype={
ex(){var s,r,q,p=this.a
if(p<32){s=this.c
r=B.a.a3(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.y,p)
q=r+((s&B.y[p])>>>0)*(B.y[32-p]+1)}else{s=this.c
q=p===32?s[1]:B.a.a3(s[1],p-32)}return q},
M(a){var s,r=this,q=r.b
if(!(q.d>=q.c&&r.a>=64)&&a<25){q=r.ex()
if(!(a<33))return A.a(B.y,a)
s=B.y[a]
r.a+=a
r.b4()
return(q&s)>>>0}else throw A.d(A.h("Not enough data in input."))},
b4(){var s,r,q,p,o=this,n=o.b,m=o.c,l=n.c
while(!0){s=o.a
if(!(s>=8&&n.d<l))break
r=n.a
q=n.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=m[0]
p=m[1]
m[0]=(r>>>8)+(p&255)*16777216
m[1]=p>>>8
m[1]=(m[1]|q*16777216)>>>0
o.a=s-8}}}
A.i9.prototype={}
A.fe.prototype={
iM(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.L(8,m),k=this.b,j=this.d
if(l<8){s=B.a.B(1,m)-1
r=B.a.B(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
p=m[n]
c.d=n+1}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.n(d.a,d.d,m>>>8&255);++d.d
p=B.a.i(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
m=m[n]
c.d=n+1
if(m>>>0!==m||m>=j.length)return A.a(j,m)
m=j[m]
J.n(d.a,d.d,m>>>8&255);++d.d}},
ei(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.L(8,j),h=this.b,g=this.d
if(i<8){s=B.a.B(1,j)-1
r=B.a.B(1,i)-1
for(j=e.length,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<j))return A.a(e,f)
e[f]=k
o=B.a.L(o,i)}}else for(j=c.length,q=e.length,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<q))return A.a(e,f)
e[f]=k}},
iQ(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this.b,a1=this.e,a2=B.a.B(1,a1)-1,a3=A.bL(a0,a1),a4=B.a.i(a5,a1)*a3
for(a1=a7.length,s=a5;s<a6;){r=new Uint8Array(3)
for(q=a4,p=0;p<a0;++p){if((p&a2)>>>0===0){o=this.d
n=q+1
if(!(q<o.length))return A.a(o,q)
o=o[q]
r[0]=o&255
r[1]=o>>>8&255
r[2]=o>>>16&255
q=n}o=a8+p
if(!(o>=0&&o<a1))return A.a(a7,o)
m=a7[o]
l=m>>>8&255
k=r[0]
j=$.aa()
j[0]=k
k=$.af()
i=k.length
if(0>=i)return A.a(k,0)
h=k[0]
j[0]=l
if(0>=i)return A.a(k,0)
g=k[0]
f=$.kv()
f[0]=h*g
e=$.mD()
d=e.length
if(0>=d)return A.a(e,0)
c=(m>>>16&255)+(e[0]>>>5)>>>0&255
j[0]=r[1]
if(0>=i)return A.a(k,0)
h=k[0]
j[0]=l
if(0>=i)return A.a(k,0)
f[0]=h*k[0]
if(0>=d)return A.a(e,0)
b=e[0]
j[0]=r[2]
if(0>=i)return A.a(k,0)
h=k[0]
j[0]=c
if(0>=i)return A.a(k,0)
f[0]=h*k[0]
if(0>=d)return A.a(e,0)
a=e[0]
a7[o]=(m&4278255360|c<<16|((m&255)+(b>>>5)>>>0)+(a>>>5)>>>0&255)>>>0}a8+=a0;++s
if((s&a2)>>>0===0)a4+=a3}},
jp(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b
if(a===0){s=d-1
r=c.length
if(!(s>=0&&s<r))return A.a(c,s)
A.ia(c,d,4278190080)
for(q=1;q<g;++q){s=d+q
p=s-1
if(!(p>=0&&p<r))return A.a(c,p)
A.ia(c,s,c[p])}d+=g;++a}s=h.e
o=B.a.B(1,s)-1
n=A.bL(g,s)
m=B.a.i(a,s)*n
for(s=c.length,l=a;l<b;){r=d-1
if(!(r>=0&&r<s))return A.a(c,r)
r=d-g
if(!(r>=0&&r<s))return A.a(c,r)
A.ia(c,d,c[r])
r=h.d
k=m+1
if(!(m<r.length))return A.a(r,m)
j=$.lz[r[m]>>>8&15]
for(q=1;q<g;++q){if((q&o)>>>0===0){r=h.d
i=k+1
if(!(k<r.length))return A.a(r,k)
j=$.lz[r[k]>>>8&15]
k=i}r=d+q
p=r-1
if(!(p>=0&&p<s))return A.a(c,p)
A.ia(c,r,j.$3(c,c[p],r-g))}d+=g;++l
if((l&o)>>>0===0)m+=n}},
iH(a,b,c){var s,r,q,p
for(s=a.length;b<c;b=p){if(!(b>=0&&b<s))return A.a(a,b)
r=a[b]
q=r>>>8&255
p=b+1
a[b]=(r&4278255360|(r&16711935)+(q<<16|q)&16711935)>>>0}}}
A.ih.prototype={
geu(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
iW(a,b,c){var s,r,q,p,o,n,m,l=this
if(!l.geu())return!1
s=l.e
if(!(s<4))return A.a(B.an,s)
r=B.an[s]
if(l.d===0){s=l.b
q=a*s
p=l.a
B.i.S(c,q,b*s,p.a,p.d-p.b+q)}else{s=a+b
p=l.x
p===$&&A.c("_vp8l")
p.cy=c
o=p.c
if(l.y){n=o.a
o=o.b
s=p.fX(A.u(n),A.u(o),s)}else{n=p.ch
n.toString
m=o.a
o=o.b
p=p.cu(n,A.u(m),A.u(o),s,t.aR.a(p.gj6()))
s=p}if(!s)return!1}if(r!=null){s=l.b
r.$6(s,l.c,s,a,b,c)}if(l.f===1)if(!l.hf(c,l.b,l.c,a,b))return!1
if(a+b===l.c)l.w=!0
return!0},
hf(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.dl.prototype={
fn(a,b){a.u()
this.r=0
this.w=a.d-a.b
this.x=b-16}}
A.eo.prototype={}
A.e8.prototype={
cH(a){var s,r,q=this
if(a===0)return!1
s=(a<<1>>>0)-1
q.e=s
s=s<<1>>>0
r=q.d=new Int32Array(s)
if(1>=s)return A.a(r,1)
r[1]=-1
q.f=1
B.i.aj(q.a,0,128,255)
return!0},
eh(a,b){var s,r,q,p,o,n,m=this
t.L.a(a)
for(s=a.length,r=0,q=0,p=0;p<b;++p){if(!(p<s))return A.a(a,p)
if(a[p]>0){++r
q=p}}if(!m.cH(r))return!1
if(r===1){if(q<0||q>=b)return!1
return m.cl(q,0,0)}o=new Int32Array(b)
if(!m.hA(a,b,o))return!1
for(p=0;p<b;++p){if(!(p<s))return A.a(a,p)
n=a[p]
if(n>0)if(!m.cl(p,o[p],n))return!1}return m.f===m.e},
iL(a,b,c,d,e){var s,r,q=this,p=t.L
p.a(a)
p.a(b)
p.a(c)
if(!q.cH(e))return!1
for(s=0;s<e;++s){if(!(s<2))return A.a(b,s)
p=b[s]
if(p!==-1){r=c[s]
if(r>=d)return q.f===q.e
if(!q.cl(r,p,a[s]))return q.f===q.e}}return q.f===q.e},
aX(a){var s,r,q,p=this,o=a.ex(),n=a.a,m=o&127,l=p.a[m]
if(l<=7){a.a=n+l
return p.b[m]}s=p.c[m]
n+=7
o=o>>>7
do{r=p.d
r===$&&A.c("tree")
q=(s<<1>>>0)+1
if(!(q<r.length))return A.a(r,q)
s=s+r[q]+(o&1)
o=o>>>1;++n}while(p.dT(s))
a.a=n
r=p.d
q=s<<1>>>0
if(!(q<r.length))return A.a(r,q)
return r[q]},
cl(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(c<=7){s=g.e2(b,c)
for(r=B.a.D(1,7-c),q=g.b,p=g.a,o=0;o<r;++o){n=(s|B.a.D(o,c))>>>0
if(!(n<128))return A.a(q,n)
q[n]=a
p[n]=c}}else s=g.e2(B.a.a7(b,c-7),7)
for(r=g.c,m=7,l=0;k=c-1,c>0;c=k){q=g.e
if(l>=q)return!1
p=g.d
p===$&&A.c("tree")
j=(l<<1>>>0)+1
i=p.length
if(!(j<i))return A.a(p,j)
h=p[j]
if(h<0){h=g.f
if(h===q)return!1
p[j]=h-l
g.f=h+2
q=(h<<1>>>0)+1
if(!(q<i))return A.a(p,q)
p[q]=-1
h=(h+1<<1>>>0)+1
if(!(h<i))return A.a(p,h)
p[h]=-1}else if(h===0)return!1
l+=p[j]+(B.a.a7(b,k)&1);--m
if(m===0){if(!(s<128))return A.a(r,s)
r[s]=l}}if(g.hI(l))g.hJ(l,0)
else if(g.dT(l))return!1
r=g.d
r===$&&A.c("tree")
q=l<<1>>>0
if(!(q<r.length))return A.a(r,q)
r[q]=a
return!0},
e2(a,b){var s=B.Y[a&15],r=B.a.i(a,4)
if(!(r<16))return A.a(B.Y,r)
return B.a.a3((s<<4|B.Y[r])>>>0,8-b)},
hJ(a,b){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
r[s]=b},
dT(a){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]!==0},
hI(a){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]<0},
hA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.L
i.a(a)
i.a(c)
s=new Int32Array(16)
r=new Int32Array(16)
for(i=a.length,q=0,p=0;q<b;++q){if(!(q<i))return A.a(a,q)
o=a[q]
if(o>p)p=o}if(p>15)return!1
for(q=0;q<b;++q){if(!(q<i))return A.a(a,q)
n=a[q]
if(!(n>=0&&n<16))return A.a(s,n)
m=s[n]
if(!(n<16))return A.a(s,n)
s[n]=m+1}if(0>=16)return A.a(s,0)
s[0]=0
if(0>=16)return A.a(r,0)
r[0]=-1
for(l=1,k=0;l<=p;++l){k=k+s[l-1]<<1>>>0
if(!(l<16))return A.a(r,l)
r[l]=k}for(n=c.length,q=0;q<b;++q){if(!(q<i))return A.a(a,q)
m=a[q]
if(m>0){if(!(m<16))return A.a(r,m)
j=r[m]
if(!(m<16))return A.a(r,m)
r[m]=j+1
if(!(q<n))return A.a(c,q)
c[q]=j}else{if(!(q<n))return A.a(c,q)
c[q]=-1}}return!0}}
A.c0.prototype={}
A.dm.prototype={}
A.cT.prototype={}
A.ii.prototype={
bj(a){var s=A.m(t.L.a(a),!1,null,0)
this.b=s
if(!this.dB(s))return!1
return!0},
aE(a){var s,r=this,q=null,p=A.m(t.L.a(a),!1,q,0)
r.b=p
if(!r.dB(p))return q
p=new A.cT(A.b([],t.J))
r.a=p
s=r.b
s.toString
if(!r.ed(s,p))return q
p=r.a
switch(p.f){case 3:p.as=p.z.length
return p
case 2:s=r.b
s.toString
s.d=p.ay
if(!A.k6(s,p).bF())return q
p=r.a
p.as=p.z.length
return p
case 1:s=r.b
s.toString
s.d=p.ay
if(!A.k4(s,p).bF())return q
p=r.a
p.as=p.z.length
return p}return q},
a2(a){var s,r,q,p,o=this,n=o.b
if(n==null||o.a==null)return null
s=o.a
if(s.e){s=s.z
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
n.toString
s=q.x
s===$&&A.c("_frameSize")
r=q.w
r===$&&A.c("_framePosition")
return o.ds(n.b_(s,r),a)}r=s.f
if(r===2){n.toString
p=n.b_(s.ch,s.ay)
n=o.a
n.toString
return A.k6(p,n).aG()}else if(r===1){n.toString
p=n.b_(s.ch,s.ay)
n=o.a
n.toString
return A.k4(p,n).aG()}return null},
ag(a){var s
this.aE(t.L.a(a))
s=this.a
s.Q=0
s.as=1
return this.a2(0)},
ds(a,b){var s,r,q,p=null,o=A.b([],t.J),n=new A.cT(o)
if(!this.ed(a,n))return p
if(n.f===0)return p
s=this.a
n.Q=s.Q
n.as=s.as
if(n.e){s=o.length
if(b>=s||!1)return p
if(!(b<s))return A.a(o,b)
r=o[b]
o=r.x
o===$&&A.c("_frameSize")
s=r.w
s===$&&A.c("_framePosition")
return this.ds(a.b_(o,s),b)}else{q=a.b_(n.ch,n.ay)
o=n.f
if(o===2)return A.k6(q,n).aG()
else if(o===1)return A.k4(q,n).aG()}return p},
dB(a){if(a.O(4)!=="RIFF")return!1
a.j()
if(a.O(4)!=="WEBP")return!1
return!0},
ed(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=a.c,f=!1
while(!0){if(!(a.d<g&&!f))break
s=a.O(4)
r=a.j()
q=r+1>>>1<<1>>>0
p=a.d
o=p-h
switch(s){case"VP8X":if(!this.hy(a,b))return!1
break
case"VP8 ":b.ay=o
b.ch=r
b.f=1
f=!0
break
case"VP8L":b.ay=o
b.ch=r
b.f=2
f=!0
break
case"ALPH":n=a.a
m=a.e
l=n.length
n=new A.a5(n,0,l,0,m)
b.at=n
n.d=p
a.d+=q
break
case"ANIM":b.f=3
k=a.j()
a.l()
B.c.m(B.a.p(k&255,0,255))
B.c.m(B.a.p(k>>>24&255,0,255))
B.c.m(B.a.p(k>>>16&255,0,255))
B.c.m(B.a.p(k>>>8&255,0,255))
break
case"ANMF":if(!this.ht(a,b,r))return!1
break
case"ICCP":b.toString
j=a.R(r)
a.d=a.d+(j.c-j.d)
j.P()
break
case"EXIF":b.toString
a.O(r)
break
case"XMP ":b.toString
a.O(r)
break
default:A.md("UNKNOWN WEBP TAG: "+s)
a.d+=q
break}p=a.d
i=q-(p-h-o)
if(i>0)a.d=p+i}if(!b.d)b.d=b.at!=null
return b.f!==0},
hy(a,b){var s,r,q,p,o=a.u()
if((o&192)!==0)return!1
s=B.a.i(o,4)
r=B.a.i(o,1)
if((o&1)!==0)return!1
if(a.am()!==0)return!1
q=a.am()
p=a.am()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
ht(a,b,c){var s
a.am()
a.am()
a.am()
a.am()
a.am()
s=new A.eo()
s.fn(a,c)
if(s.r!==0)return!1
B.b.v(b.z,s)
return!0}}
A.e7.prototype={
ff(a,b,c){var s,r,q,p,o,n,m,l=this,k=a.a,j=a.b
l.bC(A.h5("R",k,j,c,b))
l.bC(A.h5("G",k,j,c,b))
l.bC(A.h5("B",k,j,c,b))
if(a.c===B.k)l.bC(A.h5("A",k,j,c,b))
s=a.aY()
for(r=s.length,q=0,p=0;q<j;++q)for(o=0;o<k;++o){n=l.b
n.toString
m=p+1
if(!(p>=0&&p<r))return A.a(s,p)
n.aQ(o,q,s[p]/255)
n=l.c
n.toString
p=m+1
if(!(m>=0&&m<r))return A.a(s,m)
n.aQ(o,q,s[m]/255)
n=l.d
n.toString
m=p+1
if(!(p>=0&&p<r))return A.a(s,p)
n.aQ(o,q,s[p]/255)
n=l.e
if(n!=null){p=m+1
if(!(m>=0&&m<r))return A.a(s,m)
n.aQ(o,q,s[m]/255)}else p=m}},
gjO(a){var s=this.a
if(s.a===0)s=0
else{s=s.gaC()
s=s.b.$1(J.dP(s.a)).b}return s},
gb6(a){var s=this.a
if(s.a===0)s=0
else{s=s.gaC()
s=s.b.$1(J.dP(s.a)).c}return s},
aZ(a,b,c){var s=this.b
if(s!=null)if(s.d===3)s.aQ(a,b,c)
else s.bT(a,b,A.u(c))},
bq(a,b,c){var s=this.c
if(s!=null)if(this.b.d===3)s.aQ(a,b,c)
else s.bT(a,b,A.u(c))},
bS(a,b,c){var s
if(this.c!=null){s=this.d
if(s.d===3)s.aQ(a,b,c)
else s.bT(a,b,A.u(c))}},
d2(a,b,c){var s=this.e
if(s!=null)if(s.d===3)s.aQ(a,b,c)
else s.bT(a,b,A.u(c))},
bC(a){var s=this,r=a.a
s.a.h(0,r,a)
switch(r){case"R":s.b=a
break
case"G":s.c=a
break
case"B":s.d=a
break
case"A":s.e=a
break
case"Z":break}}}
A.cP.prototype={
bQ(a,b){var s,r,q,p=this,o=b*p.b+a,n=p.d,m=n===1
if(m||n===0){n=p.f
if(!(o>=0&&o<n.length))return A.a(n,o)
n=A.u(n[o])
s=p.e
if(s===8)r=255
else r=s===16?65535:4294967295
return n/(m?r-1:r)}n=n===3&&p.e===16
m=p.f
s=m.length
if(n){if(!(o>=0&&o<s))return A.a(m,o)
n=A.u(m[o])
if($.P==null)A.aT()
m=$.P
if(!(n>=0&&n<m.length))return A.a(m,n)
q=m[n]}else{if(!(o>=0&&o<s))return A.a(m,o)
q=m[o]}return q},
aQ(a,b,c){var s,r,q,p=this
if(p.d!==3)return
s=b*p.b+a
r=p.f
q=J.S(r)
if(p.e===16)q.h(r,s,A.nh(c))
else q.h(r,s,c)},
bT(a,b,c){J.n(this.f,b*this.b+a,c)}}
A.jr.prototype={
$2(a,b){return Math.log(a*b+1)/b},
$S:16}
A.jq.prototype={
$2(a,b){var s,r=Math.max(0,a*b)
if(r>1){s=this.a.$2(r-1,0.184874)
if(typeof s!=="number")return A.J(s)
r=1+s}return Math.pow(r,0.4545)*84.66},
$S:16}
A.h7.prototype={
q(a){return"ICCPCompression."+this.b}}
A.h8.prototype={
iS(){var s,r=this
if(r.b===B.R)return r.c
s=t.D.a(B.a7.j3(r.c))
r.c=s
r.b=B.R
return s}}
A.h1.prototype={
q(a){return"Format."+this.b}}
A.dS.prototype={
q(a){return"Channels."+this.b}}
A.fP.prototype={
q(a){return"BlendMode."+this.b}}
A.fW.prototype={
q(a){return"DisposeMode."+this.b}}
A.ea.prototype={
aY(){var s=A.I(this.x.buffer,0,null)
switch(2){case 2:return s}},
gt(a){return this.x.length},
eg(a,b){return a>=0&&a<this.a&&b>=0&&b<this.b},
W(a,b){var s,r
if(this.eg(a,b)){s=this.x
r=b*this.a+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
eM(a,b,c){if(c===B.aZ)return this.eL(a,b)
else if(c===B.aY)return this.eN(a,b)
return this.W(B.c.m(a),B.c.m(b))},
eN(a,b){var s,r,q,p,o,n,m,l,k=this,j=B.c.m(a),i=j-(a>=0?0:1),h=i+1
j=B.c.m(b)
s=j-(b>=0?0:1)
r=s+1
j=new A.he(a-i,b-s)
q=k.W(i,s)
p=r>=k.b
o=p?q:k.W(i,r)
n=h>=k.a
m=n?q:k.W(h,s)
l=n||p?q:k.W(h,r)
return A.aD(j.$4(q&255,m&255,o&255,l&255),j.$4(q>>>8&255,m>>>8&255,o>>>8&255,l>>>8&255),j.$4(q>>>16&255,m>>>16&255,o>>>16&255,l>>>16&255),j.$4(q>>>24&255,m>>>24&255,o>>>24&255,l>>>24&255))},
eL(d5,d6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=B.c.m(d5),d1=d0-(d5>=0?0:1),d2=d1-1,d3=d1+1,d4=d1+2
d0=B.c.m(d6)
s=d0-(d6>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d5-d1
n=d6-s
d0=new A.hd()
m=c9.W(d1,s)
l=d2<0
k=!l
j=!k||r<0?m:c9.W(d2,r)
i=l?m:c9.W(d1,r)
h=r<0
g=h||d3>=c9.a?m:c9.W(d3,r)
f=c9.a
e=d4>=f
d=!e
c=!d||h?m:c9.W(d4,r)
b=d0.$5(o,j&255,i&255,g&255,c&255)
a=d0.$5(o,j>>>8&255,i>>>8&255,g>>>8&255,c>>>8&255)
a0=d0.$5(o,j>>>16&255,i>>>16&255,g>>>16&255,c>>>16&255)
a1=d0.$5(o,j>>>24&255,i>>>24&255,g>>>24&255,c>>>24&255)
a2=l?m:c9.W(d2,s)
l=d3>=f
a3=l?m:c9.W(d3,s)
a4=e?m:c9.W(d4,s)
a5=d0.$5(o,a2&255,m&255,a3&255,a4&255)
a6=d0.$5(o,a2>>>8&255,m>>>8&255,a3>>>8&255,a4>>>8&255)
a7=d0.$5(o,a2>>>16&255,m>>>16&255,a3>>>16&255,a4>>>16&255)
a8=d0.$5(o,a2>>>24&255,m>>>24&255,a3>>>24&255,a4>>>24&255)
a9=!k||q>=c9.b?m:c9.W(d2,q)
h=c9.b
f=q>=h
b0=f?m:c9.W(d1,q)
l=!l
b1=!l||f?m:c9.W(d3,q)
b2=!d||f?m:c9.W(d4,q)
b3=d0.$5(o,a9&255,b0&255,b1&255,b2&255)
b4=d0.$5(o,a9>>>8&255,b0>>>8&255,b1>>>8&255,b2>>>8&255)
b5=d0.$5(o,a9>>>16&255,b0>>>16&255,b1>>>16&255,b2>>>16&255)
b6=d0.$5(o,a9>>>24&255,b0>>>24&255,b1>>>24&255,b2>>>24&255)
b7=!k||p>=h?m:c9.W(d2,p)
k=p>=h
b8=k?m:c9.W(d1,p)
b9=!l||k?m:c9.W(d3,p)
c0=!d||k?m:c9.W(d4,p)
c1=d0.$5(o,b7&255,b8&255,b9&255,c0&255)
c2=d0.$5(o,b7>>>8&255,b8>>>8&255,b9>>>8&255,c0>>>8&255)
c3=d0.$5(o,b7>>>16&255,b8>>>16&255,b9>>>16&255,c0>>>16&255)
c4=d0.$5(o,b7>>>24&255,b8>>>24&255,b9>>>24&255,c0>>>24&255)
c5=d0.$5(n,b,a5,b3,c1)
c6=d0.$5(n,a,a6,b4,c2)
c7=d0.$5(n,a0,a7,b5,c3)
c8=d0.$5(n,a1,a8,b6,c4)
return A.aD(B.c.m(c5),B.c.m(c6),B.c.m(c7),B.c.m(c8))},
eR(a,b,c){var s,r
if(this.eg(a,b)){s=this.x
r=b*this.a+a
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
iJ(a){var s,r,q,p
t.ck.a(a)
if(this.Q==null){s=t.N
this.seB(A.F(s,s))}for(s=A.eC(a,a.r,A.w(a).c);s.A();){r=s.d
q=this.Q
q.toString
p=a.n(0,r)
p.toString
q.h(0,r,p)}},
seB(a){this.Q=t.cZ.a(a)}}
A.he.prototype={
$4(a,b,c,d){var s=this.b
return B.c.m(a+this.a*(b-a+s*(a+d-c-b))+s*(c-a))},
$S:32}
A.hd.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:33}
A.hc.prototype={
q(a){return"ImageException: "+this.a}}
A.a5.prototype={
gt(a){return this.c-this.d},
h(a,b,c){J.n(this.a,this.d+b,c)
return c},
al(a,b,c,d){var s=this.a,r=J.S(s),q=this.d+a
if(c instanceof A.a5)r.S(s,q,q+b,c.a,c.d+d)
else r.S(s,q,q+b,t.L.a(c),d)},
aW(a,b,c){return this.al(a,b,c,0)},
jj(a,b,c){var s=this.a,r=this.d+a
J.aL(s,r,r+b,c)},
cj(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.m(s.a,s.e,a,r+b)},
R(a){return this.cj(a,0,null)},
b_(a,b){return this.cj(a,0,b)},
bV(a,b){return this.cj(a,b,null)},
u(){var s=this.a,r=this.d++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
U(a){var s=this.R(a)
this.d=this.d+(s.c-s.d)
return s},
O(a){var s,r,q,p,o=this
if(a==null){s=A.b([],t.t)
for(r=o.c;q=o.d,q<r;){p=o.a
o.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
if(q===0)return A.hQ(s,0,null)
B.b.v(s,q)}throw A.d(A.h(u.c))}return A.hQ(o.U(a).P(),0,null)},
bk(){return this.O(null)},
jx(){var s,r,q,p=this,o=A.b([],t.t)
for(s=p.c;r=p.d,r<s;){q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
if(r===0){t.L.a(o)
return B.hd.bh(o)}B.b.v(o,r)}throw A.d(A.h(u.c))},
l(){var s,r,q=this,p=q.a,o=q.d,n=q.d=o+1,m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
if(typeof o!=="number")return o.Y()
s=o&255
q.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
if(typeof n!=="number")return n.Y()
r=n&255
if(q.e)return s<<8|r
return r<<8|s},
am(){var s,r,q,p=this,o=p.a,n=p.d,m=p.d=n+1,l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
if(typeof n!=="number")return n.Y()
s=n&255
n=p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
if(typeof m!=="number")return m.Y()
r=m&255
p.d=n+1
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
if(typeof n!=="number")return n.Y()
q=n&255
if(p.e)return q|r<<8|s<<16
return s|r<<8|q<<16},
j(){var s,r,q,p,o=this,n=o.a,m=o.d,l=o.d=m+1,k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.Y()
s=m&255
m=o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.Y()
r=l&255
l=o.d=m+1
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.Y()
q=m&255
o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.Y()
p=l&255
if(o.e)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
cX(){return A.q8(this.cY())},
cY(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.d,h=k.d=i+1,g=j.length
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.Y()
s=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.Y()
r=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.Y()
q=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.Y()
p=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.Y()
o=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.Y()
n=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.Y()
m=i&255
k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.Y()
l=h&255
if(k.e)return(B.a.B(s,56)|B.a.B(r,48)|B.a.B(q,40)|B.a.B(p,32)|o<<24|n<<16|m<<8|l)>>>0
return(B.a.B(l,56)|B.a.B(m,48)|B.a.B(n,40)|B.a.B(o,32)|p<<24|q<<16|r<<8|s)>>>0},
bM(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.eF(b,c)
s=r.b+b+b
return J.fE(q,s,c<=0?r.c:s+c)},
eF(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return A.I(p.buffer,p.byteOffset+r.d+a,q)
s=r.d+a
s=J.fE(p,s,s+q)
return new Uint8Array(A.cg(s))},
P(){return this.eF(0,null)},
bN(){var s=this.a
if(t.D.b(s))return A.jU(s.buffer,s.byteOffset+this.d,null)
return A.jU(this.P().buffer,0,null)},
scR(a,b){this.a=t.L.a(b)}}
A.cU.prototype={
q(a){return"Interpolation."+this.b}}
A.eM.prototype={
F(a){var s,r,q=this
if(q.a===q.c.length)q.hk()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
ci(a,b){var s,r,q,p,o=this
t.L.a(a)
b=J.aM(a)
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.dw(r-p)
B.i.au(q,s,r,a)
o.a+=b},
a6(a){return this.ci(a,null)},
eK(a){var s=this
if(s.b){s.F(B.a.i(a,8)&255)
s.F(a&255)
return}s.F(a&255)
s.F(B.a.i(a,8)&255)},
ac(a){var s=this
if(s.b){s.F(B.a.i(a,24)&255)
s.F(B.a.i(a,16)&255)
s.F(B.a.i(a,8)&255)
s.F(a&255)
return}s.F(a&255)
s.F(B.a.i(a,8)&255)
s.F(B.a.i(a,16)&255)
s.F(B.a.i(a,24)&255)},
dw(a){var s,r,q,p
if(a!=null)s=a
else{r=this.c.length
s=r===0?8192:r*2}r=this.c
q=r.length
p=new Uint8Array(q+s)
B.i.au(p,0,q,r)
this.c=p},
hk(){return this.dw(null)},
gt(a){return this.a}}
A.jk.prototype={
$0(){var s=$.a6
if(s!=null){s=s.c
if(s!=null)s.bw(700,"terminating Web worker")}s=this.a
s.port1.close()
s.port2.close()
this.b.close()},
$S:1}
A.jl.prototype={
$1(a){return this.a.bL(t.f.a(new A.fg([],[]).ek(t.e.a(a).data,!0)))},
$S:15}
A.jm.prototype={
$1(a){return this.a.cd(t.fF.a(new A.fg([],[]).ek(t.e.a(a).data,!0)),this.b.port2,this.c)},
$S:15}
A.iB.prototype={
b1(a,b){var s,r,q,p,o=t.ds.a(a).aP()
try{if(b){q=$.ml().cC(o,A.nq(t.K))
s=A.hs(q,!0,q.$ti.k("k.E"))
q=this.a
q.toString
B.aK.ew(q,o,s)}else{q=this.a
q.toString
B.aK.jo(q,o)}}catch(p){r=A.a3(p)
A.lo("failed to post response "+A.o(o)+": error "+A.o(r))
throw p}}}
A.fn.prototype={
j5(a,b){var s,r=null,q=new A.iW(b),p=$.a6,o=p==null,n=o?r:p.c
if(n!=null)n.bw(1,q)
else if(o?$.bg:p.d){s=q.$0()
A.jz("[DEBUG] "+A.o(s))}q=A.k0(b,r)
this.b1(new A.bM(!1,q,r,r),!1)},
$iow:1}
A.iW.prototype={
$0(){return"replying with error: "+this.a.q(0)},
$S:35}
A.f7.prototype={
hE(a){return a==null||typeof a=="string"||typeof a=="number"||A.dK(a)},
cI(a){if(a==null||typeof a=="string"||typeof a=="number"||A.dK(a))return!0
if(t.dy.b(a)||t.bj.b(a)||t.fx.b(a))return!0
if(t.j.b(a)&&J.mJ(a,this.gdN()))return!0
if(t.f.b(a)&&a.gaK().b5(0,this.gdM())&&a.gaC().b5(0,this.gdN()))return!0
return!1},
cF(a,b){return this.hx(a,t.bC.a(b))},
hx(a,b){var s=this
return A.m0(function(){var r=a,q=b
var p=0,o=1,n,m,l,k,j
return function $async$cF(c,d){if(c===1){n=d
p=o}while(true)switch(p){case 0:m=J.mM(r,new A.hY(s)),m=m.gT(m),l=t.K
case 2:if(!m.A()){p=3
break}k=m.gE()
p=!q.aw(0,k)?4:5
break
case 4:j=k==null
q.v(0,j?l.a(k):k)
p=6
return j?l.a(k):k
case 6:case 5:p=2
break
case 3:return A.lH()
case 1:return A.lI(n)}}},t.K)},
cC(a,b){return this.hs(a,t.bC.a(b))},
hs(a,b){var s=this
return A.m0(function(){var r=a,q=b
var p=0,o=2,n,m,l,k,j,i
return function $async$cC(c,d){if(c===1){n=d
p=o}while(true)switch(p){case 0:if(s.cI(r)){p=1
break}if(!r.gaK().b5(0,s.gdM()))throw A.d(A.aJ("Keys must be strings, numbers or booleans."))
m=A.b([],t.e3)
B.b.bB(m,s.cF(r.gaC(),q))
l=t.R,k=t.f
case 3:if(!(j=m.length,j!==0)){p=4
break}if(0>=j){A.a(m,-1)
p=1
break}i=m.pop()
p=k.b(i)?5:7
break
case 5:B.b.bB(m,s.cC(i,q))
p=6
break
case 7:p=l.b(i)?8:10
break
case 8:B.b.bB(m,s.cF(i,q))
p=9
break
case 10:p=11
return i
case 11:case 9:case 6:p=3
break
case 4:case 1:return A.lH()
case 2:return A.lI(n)}}},t.K)}}
A.hY.prototype={
$1(a){return!this.a.cI(a)},
$S:4}
A.bU.prototype={
cS(){var s,r,q,p,o=this
if(o.b==null){s=A.mR(null,o.c,null,null)
o.b=s}s=o.d
if(s==null)s=B.au
r=s.length
q=t.Z
p=0
for(;p<s.length;s.length===r||(0,A.aK)(s),++p)A.mf(q.a(s[p]))},
iI(a){var s
t.M.a(a)
if(this.b!=null)A.mf(a)
else{s=this.d
if(s==null){s=A.b([],t.bT)
this.shG(s)}B.b.v(s,a)}},
jB(a){var s
t.M.a(a)
s=this.d
return s==null?null:B.b.bl(s,a)},
shG(a){this.d=t.eX.a(a)}}
A.hM.prototype={}
A.dc.prototype={
fl(a,b){var s
if(this.b==null)try{this.b=A.lp()}catch(s){}},
aP(){var s=this.b
s=s==null?null:s.q(0)
return["$",this.a,s]},
q(a){return B.a4.en(this.aP(),null)},
$ibf:1}
A.bf.prototype={
q(a){return B.a4.en(this.aP(),null)}}
A.dQ.prototype={
bw(a,b){var s,r,q,p,o,n,m,l=null
if(a<this.a)if(a===1){s=$.a6
s=s==null?$.bg:s.d}else s=!1
else s=!0
if(s){if(t.Y.b(b))b=b.$0()
s=new A.bw(Date.now(),!1).jI().jH()
r=A.nF(a)
q=$.a6
q=q==null?l:q.e
if(t.R.b(b)){p=J.mK(b,new A.fJ(),t.N)
o=A.w(p)
n=o.k("cK<k.E,x>")
m=new A.Z(new A.cK(p,o.k("k<x>(k.E)").a(new A.fK()),n),n.k("E(k.E)").a(new A.fL()),n.k("Z<k.E>"))}else{m=b==null?l:new A.Z(A.b(J.bR(b).split("\n"),t.s),t.bB.a(new A.fM()),t.cc)
if(m==null)m=B.di}for(p=J.aw(m),q="["+s+"] ["+r+"] ["+A.o(q)+"] ",r=this.b;p.A();){s=q+p.gE()
r.b1(new A.bM(!1,l,s,l),!1)}}},
$iln:1}
A.fJ.prototype={
$1(a){var s=a==null?null:J.bR(a)
return s==null?"":s},
$S:36}
A.fK.prototype={
$1(a){return A.b(A.aH(a).split("\n"),t.s)},
$S:37}
A.fL.prototype={
$1(a){return A.aH(a).length!==0},
$S:14}
A.fM.prototype={
$1(a){return A.aH(a).length!==0},
$S:14}
A.eN.prototype={}
A.cc.prototype={
ck(a,b,c,d){var s
if(this.b==null)try{this.b=A.lp()}catch(s){}},
aP(){var s=this,r=s.b
r=r==null?null:r.q(0)
return["$W",s.a,r,s.c,s.d]}}
A.bV.prototype={
aP(){var s=this,r=s.b
r=r==null?null:r.q(0)
return["$C",s.a,r,s.c,s.d]}}
A.f3.prototype={
aP(){var s,r,q,p=this,o=p.b
o=o==null?null:o.q(0)
s=p.c
r=p.d
q=p.x.gjU()
return["$T",p.a,o,s,r,q]},
$ils:1}
A.aC.prototype={}
A.bM.prototype={
aP(){var s,r,q=this,p=q.b
if(p!=null){s=A.F(t.N,t.z)
s.h(0,"b",p.aP())
p=$.a6
if(p==null?$.bg:p.d)s.h(0,"d",1000*Date.now())
return s}else{p=q.d
if(p!=null){s=A.F(t.N,t.z)
s.h(0,"e",p)
p=$.a6
if(p==null?$.bg:p.d)s.h(0,"d",1000*Date.now())
return s}else if(q.a){p=A.F(t.N,t.z)
p.h(0,"c",!0)
s=$.a6
if(s==null?$.bg:s.d)p.h(0,"d",1000*Date.now())
return p}else{p=q.e
s=t.N
r=t.z
if(p==null){p=A.F(s,r)
s=$.a6
if(s==null?$.bg:s.d)p.h(0,"d",1000*Date.now())
return p}else{s=A.F(s,r)
s.h(0,"a",p)
p=$.a6
if(p==null?$.bg:p.d)s.h(0,"d",1000*Date.now())
return s}}}}}
A.b9.prototype={}
A.hL.prototype={}
A.ij.prototype={
dH(a){return a==null?$.mi():this.d.js(a.a,new A.ik(a))},
siD(a){this.e=t.ec.a(a)}}
A.ik.prototype={
$0(){var s=this.a.a,r=new A.b9(!0,++$.ks().a,null)
r.a=s
return r},
$S:39}
A.im.prototype={
cd(a,b,c){return this.iT(a,b,t.he.a(c))},
iT(a2,a3,a4){var s=0,r=A.m_(t.z),q=1,p,o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cd=A.m4(function(a5,a6){if(a5===1){p=a6
s=q}while(true)switch(s){case 0:b=A.lC(a2)
a=b
a0=a==null?null:a.a
if(b==null)throw A.d(A.aJ("connection request expected"))
else if(a0==null)throw A.d(A.aJ("missing client for connection request"))
q=3
if(b.d!==-1){a=A.aJ("connection request expected")
throw A.d(a)}else{a=o.a
if(a.a!==0){a=A.aJ("already connected")
throw A.d(a)}}i=b.f
i.toString
h=A.k1()
if(h.e==null){g=B.h.jL(i)
if(g.length!==0)h.e=g}i=a0
h=A.k1()
if(h.f==null){h.f=i
f=$.a6
e=f==null
if(e)d=null
else{d=f.c
d=d==null?null:d.a}if(d==null)f=e?null:f.a
else f=d
h.c=new A.eN(i,f==null?2000:f)}i=b.r
i.toString
h=A.k1()
f=h.c
if(f!=null)f.a=i
h.a=i
i=b.x!=null
f=$.a6
if(f==null)$.bg=i
else f.d=i
n=null
m=a4.$1(b)
s=t.c.b(m)?6:8
break
case 6:s=9
return A.kh(m,$async$cd)
case 9:n=a6
s=7
break
case 8:n=m
case 7:l=n.gjl()
i=l
f=A.a_(i).k("aA<1>")
f=new A.Z(new A.aA(i,f),f.k("E(k.E)").a(new A.io()),f.k("Z<k.E>"))
if(!f.gak(f)){a=A.aJ("invalid command identifier in service operations map; command ids must be > 0")
throw A.d(a)}a.bB(0,l)
a0.b1(A.il(a3),!0)
q=1
s=5
break
case 3:q=2
a1=p
k=A.a3(a1)
j=A.ao(a1)
J.kA(a0,A.k0(k,j))
s=5
break
case 2:s=1
break
case 5:return A.lV(null,r)
case 1:return A.lU(p,r)}})
return A.lW($async$cd,r)},
bL(a){return this.jr(a)},
jr(b0){var s=0,r=A.m_(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$bL=A.m4(function(b1,b2){if(b1===1){o=b2
s=p}while(true)switch(s){case 0:a6=A.lC(b0)
a7=a6
a8=a7==null?null:a7.a
if(a6==null)throw A.d(A.aJ("invalid message"))
else if(a6.d===-4){a7=m.b
if(a7.c===0)a7.a.$0()
else a7.b=!0
q=null
s=1
break}else if(a6.d===-3){a7=a6.b
a7.toString
a7=m.b.dH(a7)
if(a7.e)a7.eX()
q=null
s=1
break}else if(a6.d===-2){a7=a6.c
a7.toString
b=m.b.e
if(b==null)a7=null
else{a7=b.n(0,a7)
a7=a7==null?null:a7.$0()}q=a7
s=1
break}else if(a8==null)throw A.d(A.aJ("missing client for request: "+A.o(a6)))
a7=m.b
b=t.gH.a(a6);++a7.c
a=a7.dH(b.b)
if(a.e){++a.f
a0=b.b
if(a0==null||a0.a!==a.a)A.D(A.aJ("cancellation token mismatch"))
b.b=a}else if(b.b!=null)A.D(A.aJ("Token reference mismatch"))
l=a
p=4
if(a6.d===-1){b=A.aJ("unexpected connection request: "+b0.q(0))
throw A.d(b)}else{b=m.a
if(b.a===0){b=A.k7("worker service is not ready",null,null,null)
throw A.d(b)}}k=b.n(0,a6.d)
if(k==null){b=A.k7("unknown command: "+a6.d,null,null,null)
throw A.d(b)}j=k.$1(a6)
s=t.c.b(j)?7:8
break
case 7:s=9
return A.kh(j,$async$bL)
case 9:j=b2
case 8:i=a6.w
if(j instanceof A.c8){t.fN.a(j)
b=!0}else b=!1
s=b?10:12
break
case 10:h=A.as("subscription")
g=new A.bN(new A.M($.C,t.d),t.fz)
f=new A.ir(a8,h,g)
b=t.w.a(l)
a0=t.M
a1=a0.a(f)
a2=++a7.f
a3=a7.e
if(a3==null){a0=A.F(t.p,a0)
a7.siD(a0)}else a0=a3
a0.h(0,a2,a1)
if(b.e)b.eW(a1)
e=a2
a8.b1(A.il(A.u(e)),!1)
b=h
a0=j
a1=A.a_(a0)
a2=a1.k("~(1)?").a(new A.ip(a8,i))
t.Z.a(f)
a1=A.iF(a0.a,a0.b,a2,!1,a1.c)
a0=b.b
if(a0==null?b!=null:a0!==b)A.D(new A.bC("Local '"+b.a+"' has already been initialized."))
b.b=a1
b=g.a
a4=t.O.a(new A.iq(m,l,e))
a0=b.$ti
j=new A.M($.C,a0)
b.bX(new A.b3(j,8,a4,null,a0.k("@<1>").G(a0.c).k("b3<1,2>")))
s=13
return A.kh(j,$async$bL)
case 13:s=11
break
case 12:b=j
a0=A.lS(i)
a8.b1(A.il(b),a0)
case 11:n.push(6)
s=5
break
case 4:p=3
a9=o
d=A.a3(a9)
c=A.ao(a9)
J.kA(a8,A.k0(d,c))
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
b=t.w.a(l)
if(b.e)--b.f
if(b.f===0&&b.b==null)a7.d.bl(0,b.a)
b=--a7.c
if(a7.b&&b===0)a7.a.$0()
s=n.pop()
break
case 6:case 1:return A.lV(q,r)
case 2:return A.lU(o,r)}})
return A.lW($async$bL,r)}}
A.io.prototype={
$1(a){return A.u(a)<=0},
$S:40}
A.ir.prototype={
$0(){this.a.b1($.my(),!1)
this.b.K().cS()
this.c.iR()},
$S:1}
A.ip.prototype={
$1(a){return this.a.b1(A.il(a),this.b)},
$S:3}
A.iq.prototype={
$0(){var s=this.a.b,r=this.b,q=this.c,p=s.e,o=p==null?null:p.n(0,q)
if(o!=null){t.M.a(o)
if(r.e)r.eY(o)
s=s.e
if(s!=null)s.bl(0,q)}},
$S:6};(function aliases(){var s=J.bc.prototype
s.f4=s.q
s=A.U.prototype
s.f0=s.eo
s.f1=s.ep
s.f3=s.er
s.f2=s.eq
s=A.r.prototype
s.d7=s.S
s=A.k.prototype
s.f_=s.b8
s=A.aQ.prototype
s.eZ=s.cQ
s=A.bU.prototype
s.eX=s.cS
s.eW=s.iI
s.eY=s.jB})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_1u,n=hunkHelpers.installStaticTearOff
s(A,"pl","nd",13)
s(A,"py","oy",7)
s(A,"pz","oz",7)
s(A,"pA","oA",7)
r(A,"m6","pr",1)
q(A,"m7","p3",43)
s(A,"pE","p4",13)
s(A,"m8","p5",12)
var m
p(m=A.eu.prototype,"gfY","fZ",9)
p(m,"gh0","h1",9)
p(m,"gh2","h3",18)
p(m,"gfT","fU",9)
p(m,"gfV","fW",18)
s(A,"qt","o6",0)
s(A,"qk","nY",0)
s(A,"qd","nR",0)
s(A,"qq","o3",0)
s(A,"qr","o4",0)
s(A,"qp","o2",0)
s(A,"qo","o1",0)
s(A,"qn","o0",0)
s(A,"qw","o9",0)
s(A,"qv","o8",0)
s(A,"qm","o_",0)
s(A,"qi","nW",0)
s(A,"qs","o5",0)
s(A,"qj","nX",0)
s(A,"q9","nN",0)
s(A,"qb","nP",0)
s(A,"qa","nO",0)
s(A,"qc","nQ",0)
s(A,"qu","o7",0)
s(A,"ql","nZ",0)
s(A,"qe","nS",0)
s(A,"qf","nT",0)
s(A,"qg","nU",0)
s(A,"qh","nV",0)
o(A.dh.prototype,"gi1","i2",10)
o(A.en.prototype,"gj6","j7",10)
n(A,"kr",3,null,["$3"],["ob"],2,0)
n(A,"qx",3,null,["$3"],["oc"],2,0)
n(A,"qC",3,null,["$3"],["oh"],2,0)
n(A,"qD",3,null,["$3"],["oi"],2,0)
n(A,"qE",3,null,["$3"],["oj"],2,0)
n(A,"qF",3,null,["$3"],["ok"],2,0)
n(A,"qG",3,null,["$3"],["ol"],2,0)
n(A,"qH",3,null,["$3"],["om"],2,0)
n(A,"qI",3,null,["$3"],["on"],2,0)
n(A,"qJ",3,null,["$3"],["oo"],2,0)
n(A,"qy",3,null,["$3"],["od"],2,0)
n(A,"qz",3,null,["$3"],["oe"],2,0)
n(A,"qA",3,null,["$3"],["of"],2,0)
n(A,"qB",3,null,["$3"],["og"],2,0)
o(m=A.f7.prototype,"gdM","hE",4)
o(m,"gdN","cI",4)
n(A,"qL",6,null,["$6"],["ou"],8,0)
n(A,"qM",6,null,["$6"],["ov"],8,0)
n(A,"qK",6,null,["$6"],["ot"],8,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.t,null)
q(A.t,[A.jP,J.ef,J.cq,A.z,A.dt,A.bv,A.hK,A.k,A.bD,A.H,A.cL,A.cv,A.a4,A.bj,A.cu,A.hZ,A.hx,A.cx,A.dC,A.a2,A.hq,A.ai,A.iC,A.aB,A.fm,A.dE,A.j7,A.fi,A.ce,A.bn,A.cs,A.fk,A.b3,A.M,A.fj,A.c8,A.f0,A.f1,A.fs,A.dI,A.dJ,A.fp,A.bO,A.r,A.dv,A.da,A.bW,A.j_,A.iX,A.ja,A.bw,A.iD,A.eL,A.dd,A.iH,A.e4,A.L,A.ft,A.bI,A.jG,A.j4,A.iv,A.hw,A.ee,A.hA,A.it,A.fU,A.at,A.iU,A.fr,A.h6,A.ec,A.is,A.iu,A.c9,A.bb,A.by,A.dZ,A.e_,A.c6,A.T,A.fN,A.fS,A.fT,A.fY,A.e0,A.aS,A.e1,A.e2,A.e3,A.dA,A.e5,A.cO,A.c2,A.dV,A.hj,A.az,A.hk,A.cf,A.et,A.hm,A.eu,A.d5,A.aF,A.c5,A.hF,A.bH,A.eT,A.d7,A.hU,A.f5,A.hW,A.f6,A.ht,A.i2,A.dg,A.i3,A.i8,A.ic,A.ie,A.df,A.id,A.i4,A.b1,A.di,A.ff,A.dj,A.dk,A.dh,A.fd,A.i9,A.fe,A.ih,A.dl,A.e8,A.c0,A.e7,A.cP,A.h8,A.ea,A.hc,A.a5,A.eM,A.iB,A.f7,A.bU,A.hM,A.dc,A.bf,A.dQ,A.aC,A.bM,A.hL,A.ij,A.im])
q(J.ef,[J.eq,J.cX,J.ay,J.p,J.c3,J.c4,A.d1,A.O])
q(J.ay,[J.bc,A.bu,A.aQ,A.fX,A.i])
q(J.bc,[J.eO,J.bJ,J.aU])
r(J.hi,J.p)
q(J.c3,[J.cW,J.er])
q(A.z,[A.bC,A.bi,A.ev,A.fa,A.eZ,A.cr,A.fl,A.cY,A.eK,A.aE,A.fb,A.f8,A.c7,A.dW,A.dX])
r(A.d_,A.dt)
r(A.ca,A.d_)
r(A.ap,A.ca)
q(A.bv,[A.dT,A.h2,A.dU,A.f4,A.ho,A.js,A.ju,A.iy,A.ix,A.jd,A.iL,A.iT,A.hO,A.j3,A.j1,A.iG,A.jA,A.jB,A.jw,A.hT,A.fR,A.fQ,A.h0,A.hb,A.hl,A.hB,A.he,A.hd,A.jl,A.jm,A.hY,A.fJ,A.fK,A.fL,A.fM,A.io,A.ip])
q(A.dT,[A.jy,A.iz,A.iA,A.j8,A.iI,A.iP,A.iN,A.iK,A.iO,A.iJ,A.iS,A.iR,A.iQ,A.hP,A.ji,A.j2,A.i1,A.i0,A.jk,A.iW,A.ik,A.ir,A.iq])
q(A.k,[A.q,A.aV,A.Z,A.cK,A.aY,A.cV])
q(A.q,[A.V,A.aP,A.aA,A.du])
q(A.V,[A.de,A.aW,A.dq])
r(A.bx,A.aV)
q(A.H,[A.bE,A.dn,A.db])
r(A.bY,A.aY)
r(A.c_,A.cu)
r(A.d4,A.bi)
q(A.f4,[A.f_,A.bT])
r(A.fh,A.cr)
r(A.d0,A.a2)
r(A.U,A.d0)
q(A.dU,[A.hn,A.jt,A.je,A.jj,A.iM,A.hr,A.hu,A.j0,A.iY,A.j5,A.j6,A.iw,A.ig,A.jr,A.jq])
r(A.X,A.O)
q(A.X,[A.dw,A.dy])
r(A.dx,A.dw)
r(A.be,A.dx)
r(A.dz,A.dy)
r(A.ak,A.dz)
q(A.be,[A.eE,A.eF])
q(A.ak,[A.eG,A.eH,A.eI,A.eJ,A.d2,A.d3,A.bF])
r(A.dF,A.fl)
r(A.dD,A.cV)
r(A.bN,A.fk)
r(A.fq,A.dI)
r(A.dr,A.U)
r(A.dB,A.dJ)
r(A.ds,A.dB)
r(A.aN,A.f1)
q(A.aN,[A.fw,A.fv,A.ey,A.fc])
q(A.bW,[A.dY,A.ew])
r(A.ex,A.cY)
r(A.fo,A.j_)
r(A.fz,A.fo)
r(A.iZ,A.fz)
r(A.ez,A.dY)
r(A.eB,A.fw)
r(A.eA,A.fv)
q(A.aE,[A.d9,A.eb])
q(A.aQ,[A.bl,A.bd])
r(A.bX,A.bl)
r(A.bZ,A.bu)
r(A.aX,A.i)
r(A.iE,A.c8)
r(A.dp,A.f0)
r(A.fu,A.j4)
r(A.fg,A.iv)
r(A.fF,A.e4)
r(A.ed,A.ee)
r(A.hy,A.hA)
r(A.jc,A.it)
r(A.aR,A.bb)
q(A.iD,[A.a0,A.ct,A.h7,A.h1,A.dS,A.fP,A.fW,A.cU])
q(A.T,[A.cz,A.cy,A.cH,A.cB,A.cC,A.cD,A.cG,A.cE,A.cF,A.cI,A.cA,A.cJ])
q(A.fS,[A.b8,A.h_,A.e6,A.ha,A.hD,A.hH,A.hS,A.hX,A.dm])
q(A.fT,[A.dR,A.fZ,A.h3,A.h9,A.es,A.eP,A.hG,A.hR,A.hV,A.ii])
r(A.fV,A.dR)
r(A.eg,A.aS)
q(A.eg,[A.cQ,A.eh,A.ei,A.ej,A.cS])
r(A.cR,A.e3)
r(A.ek,A.cO)
r(A.e9,A.b8)
r(A.el,A.d5)
r(A.em,A.hD)
r(A.hC,A.fY)
q(A.aF,[A.eR,A.eS,A.eU,A.eV,A.eX,A.eY])
q(A.c5,[A.d8,A.eW])
r(A.en,A.dh)
r(A.eo,A.dl)
r(A.cT,A.dm)
r(A.fn,A.iB)
r(A.eN,A.dQ)
r(A.cc,A.bf)
r(A.bV,A.cc)
r(A.f3,A.bV)
r(A.b9,A.bU)
s(A.ca,A.bj)
s(A.dw,A.r)
s(A.dx,A.a4)
s(A.dy,A.r)
s(A.dz,A.a4)
s(A.dt,A.r)
s(A.dJ,A.da)
s(A.fz,A.iX)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",B:"double",K:"num",x:"String",E:"bool",L:"Null",l:"List"},mangledNames:{},types:["~(a5)","~()","e(b_,e,e)","~(@)","E(@)","~(t?,t?)","L()","~(~())","~(e,e,e,e,e,b0)","~(az,l<@>)","~(e)","L(@)","@(@)","e(t?)","E(x)","~(aX)","K(K,K)","~(@,@)","~(az,l<e>)","@()","e(e)","c9(aC)","b0/(aC)","@(@,@)","L(@,@)","b_(e)","c2(e)","az(e)","~(i)","ax<L>()","@(@,x)","M<@>(@)","e(e,e,e,e)","K(K,K,K,K,K)","L(t,bh)","x()","x(@)","l<x>(x)","~(e,@)","b9()","E(e)","L(@,bh)","E(t?)","E(t?,t?)","@(x)","L(~())","e(e,e)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.oT(v.typeUniverse,JSON.parse('{"eO":"bc","bJ":"bc","aU":"bc","qN":"i","qR":"i","qU":"bl","qS":"O","eq":{"E":[]},"cX":{"L":[]},"bc":{"kZ":[]},"p":{"l":["1"],"q":["1"],"k":["1"]},"hi":{"p":["1"],"l":["1"],"q":["1"],"k":["1"]},"cq":{"H":["1"]},"c3":{"B":[],"K":[]},"cW":{"B":[],"e":[],"K":[]},"er":{"B":[],"K":[]},"c4":{"x":[]},"bC":{"z":[]},"ap":{"r":["e"],"bj":["e"],"l":["e"],"q":["e"],"k":["e"],"r.E":"e","bj.E":"e"},"q":{"k":["1"]},"V":{"q":["1"],"k":["1"]},"de":{"V":["1"],"q":["1"],"k":["1"],"k.E":"1","V.E":"1"},"bD":{"H":["1"]},"aV":{"k":["2"],"k.E":"2"},"bx":{"aV":["1","2"],"q":["2"],"k":["2"],"k.E":"2"},"bE":{"H":["2"]},"aW":{"V":["2"],"q":["2"],"k":["2"],"k.E":"2","V.E":"2"},"Z":{"k":["1"],"k.E":"1"},"dn":{"H":["1"]},"cK":{"k":["2"],"k.E":"2"},"cL":{"H":["2"]},"aY":{"k":["1"],"k.E":"1"},"bY":{"aY":["1"],"q":["1"],"k":["1"],"k.E":"1"},"db":{"H":["1"]},"aP":{"q":["1"],"k":["1"],"k.E":"1"},"cv":{"H":["1"]},"ca":{"r":["1"],"bj":["1"],"l":["1"],"q":["1"],"k":["1"]},"cu":{"aj":["1","2"]},"c_":{"cu":["1","2"],"aj":["1","2"]},"d4":{"bi":[],"z":[]},"ev":{"z":[]},"fa":{"z":[]},"dC":{"bh":[]},"bv":{"bz":[]},"dT":{"bz":[]},"dU":{"bz":[]},"f4":{"bz":[]},"f_":{"bz":[]},"bT":{"bz":[]},"eZ":{"z":[]},"fh":{"z":[]},"U":{"a2":["1","2"],"jR":["1","2"],"aj":["1","2"],"a2.K":"1","a2.V":"2"},"aA":{"q":["1"],"k":["1"],"k.E":"1"},"ai":{"H":["1"]},"O":{"Y":[]},"X":{"ah":["1"],"O":[],"Y":[]},"be":{"X":["B"],"r":["B"],"ah":["B"],"l":["B"],"O":[],"q":["B"],"Y":[],"k":["B"],"a4":["B"]},"ak":{"X":["e"],"r":["e"],"ah":["e"],"l":["e"],"O":[],"q":["e"],"Y":[],"k":["e"],"a4":["e"]},"eE":{"be":[],"X":["B"],"r":["B"],"n9":[],"ah":["B"],"l":["B"],"O":[],"q":["B"],"Y":[],"k":["B"],"a4":["B"],"r.E":"B"},"eF":{"be":[],"X":["B"],"r":["B"],"nb":[],"ah":["B"],"l":["B"],"O":[],"q":["B"],"Y":[],"k":["B"],"a4":["B"],"r.E":"B"},"eG":{"ak":[],"X":["e"],"r":["e"],"jM":[],"ah":["e"],"l":["e"],"O":[],"q":["e"],"Y":[],"k":["e"],"a4":["e"],"r.E":"e"},"eH":{"ak":[],"X":["e"],"r":["e"],"hg":[],"ah":["e"],"l":["e"],"O":[],"q":["e"],"Y":[],"k":["e"],"a4":["e"],"r.E":"e"},"eI":{"ak":[],"X":["e"],"r":["e"],"nk":[],"ah":["e"],"l":["e"],"O":[],"q":["e"],"Y":[],"k":["e"],"a4":["e"],"r.E":"e"},"eJ":{"ak":[],"X":["e"],"r":["e"],"nI":[],"ah":["e"],"l":["e"],"O":[],"q":["e"],"Y":[],"k":["e"],"a4":["e"],"r.E":"e"},"d2":{"ak":[],"X":["e"],"r":["e"],"b_":[],"ah":["e"],"l":["e"],"O":[],"q":["e"],"Y":[],"k":["e"],"a4":["e"],"r.E":"e"},"d3":{"ak":[],"X":["e"],"r":["e"],"ah":["e"],"l":["e"],"O":[],"q":["e"],"Y":[],"k":["e"],"a4":["e"],"r.E":"e"},"bF":{"ak":[],"X":["e"],"r":["e"],"b0":[],"ah":["e"],"l":["e"],"O":[],"q":["e"],"Y":[],"k":["e"],"a4":["e"],"r.E":"e"},"dE":{"lt":[]},"fl":{"z":[]},"dF":{"bi":[],"z":[]},"M":{"ax":["1"]},"bn":{"H":["1"]},"dD":{"k":["1"],"k.E":"1"},"cs":{"z":[]},"bN":{"fk":["1"]},"dI":{"lE":[]},"fq":{"dI":[],"lE":[]},"dr":{"U":["1","2"],"a2":["1","2"],"jR":["1","2"],"aj":["1","2"],"a2.K":"1","a2.V":"2"},"ds":{"da":["1"],"k_":["1"],"q":["1"],"k":["1"]},"bO":{"H":["1"]},"cV":{"k":["1"]},"d_":{"r":["1"],"l":["1"],"q":["1"],"k":["1"]},"d0":{"a2":["1","2"],"aj":["1","2"]},"a2":{"aj":["1","2"]},"du":{"q":["2"],"k":["2"],"k.E":"2"},"dv":{"H":["2"]},"dB":{"da":["1"],"k_":["1"],"q":["1"],"k":["1"]},"fw":{"aN":["x","l<e>"]},"fv":{"aN":["l<e>","x"]},"dY":{"bW":["x","l<e>"]},"cY":{"z":[]},"ex":{"z":[]},"ew":{"bW":["t?","x"]},"ey":{"aN":["t?","x"]},"ez":{"bW":["x","l<e>"]},"eB":{"aN":["x","l<e>"]},"eA":{"aN":["l<e>","x"]},"fc":{"aN":["l<e>","x"]},"B":{"K":[]},"e":{"K":[]},"l":{"q":["1"],"k":["1"]},"cr":{"z":[]},"bi":{"z":[]},"eK":{"z":[]},"aE":{"z":[]},"d9":{"z":[]},"eb":{"z":[]},"fb":{"z":[]},"f8":{"z":[]},"c7":{"z":[]},"dW":{"z":[]},"eL":{"z":[]},"dd":{"z":[]},"dX":{"z":[]},"dq":{"V":["1"],"q":["1"],"k":["1"],"k.E":"1","V.E":"1"},"ft":{"bh":[]},"bI":{"nG":[]},"aX":{"i":[]},"bX":{"aQ":[]},"bZ":{"bu":[]},"bd":{"aQ":[]},"bl":{"aQ":[]},"iE":{"c8":["1"]},"dp":{"f0":["1"]},"ed":{"ee":[]},"c9":{"lD":[]},"aR":{"bb":[]},"cz":{"T":[]},"cy":{"T":[]},"cH":{"T":[]},"cB":{"T":[]},"cC":{"T":[]},"cD":{"T":[]},"cG":{"T":[]},"cE":{"T":[]},"cF":{"T":[]},"cI":{"T":[]},"cA":{"T":[]},"cJ":{"T":[]},"cQ":{"aS":[]},"eg":{"aS":[]},"cR":{"e3":[]},"eh":{"aS":[]},"ei":{"aS":[]},"ej":{"aS":[]},"cS":{"aS":[]},"ek":{"cO":[]},"e9":{"b8":[]},"el":{"d5":[]},"eR":{"aF":[]},"eS":{"aF":[]},"eU":{"aF":[]},"eV":{"aF":[]},"eX":{"aF":[]},"eY":{"aF":[]},"d8":{"c5":[]},"eW":{"c5":[]},"eo":{"dl":[]},"cT":{"dm":[]},"fn":{"ow":[]},"dc":{"bf":[]},"dQ":{"ln":[]},"eN":{"ln":[]},"cc":{"bf":[]},"bV":{"bf":[]},"f3":{"bV":[],"bf":[],"ls":[]},"b9":{"bU":[]},"b0":{"l":["e"],"q":["e"],"k":["e"],"Y":[]},"jM":{"l":["e"],"q":["e"],"k":["e"],"Y":[]},"hg":{"l":["e"],"q":["e"],"k":["e"],"Y":[]},"b_":{"l":["e"],"q":["e"],"k":["e"],"Y":[]}}'))
A.oS(v.typeUniverse,JSON.parse('{"q":1,"ca":1,"X":1,"f1":2,"cV":1,"d_":1,"d0":2,"dB":1,"dt":1,"dJ":1}'))
var u={c:"EOF reached without finding string terminator",b:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cm
return{n:s("cs"),Q:s("ct"),fK:s("bu"),w:s("b9"),cJ:s("bX"),U:s("q<@>"),V:s("z"),W:s("i"),o:s("by"),aX:s("e0"),gV:s("e2"),c8:s("bZ"),Y:s("bz"),he:s("lD/(aC)"),c:s("ax<@>"),h:s("c_<e,x>"),ct:s("c0"),i:s("cP"),bs:s("e8"),gx:s("c2"),an:s("hg"),bM:s("k<B>"),R:s("k<@>"),hb:s("k<e>"),eB:s("p<dV>"),dr:s("p<dZ>"),g9:s("p<e1>"),b:s("p<cO>"),e5:s("p<c0>"),dd:s("p<cR>"),dB:s("p<l<l<l<e>>>>"),y:s("p<l<l<e>>>"),S:s("p<l<e>>"),e3:s("p<t>"),dm:s("p<d5>"),h0:s("p<bH>"),af:s("p<aF>"),cE:s("p<d7>"),s:s("p<x>"),aU:s("p<f6>"),a:s("p<b0>"),ao:s("p<b1>"),gk:s("p<fe>"),J:s("p<dl>"),e8:s("p<cf>"),gn:s("p<@>"),t:s("p<e>"),f8:s("p<et?>"),fk:s("p<l<@>?>"),hh:s("p<b_?>"),bT:s("p<~()>"),B:s("p<~(a5)>"),u:s("cX"),eH:s("kZ"),cj:s("aU"),ez:s("ah<@>"),d2:s("az"),r:s("U<e,T>"),d1:s("l<c0>"),f0:s("l<hg>"),fZ:s("l<l<l<e>>>"),gS:s("l<l<b1>>"),ew:s("l<t>"),I:s("l<bH>"),dl:s("l<d7>"),dy:s("l<x>"),c7:s("l<df>"),e6:s("l<b1>"),eQ:s("l<di>"),db:s("l<dj>"),cC:s("l<dk>"),fx:s("l<E>"),j:s("l<@>"),L:s("l<e>"),ge:s("l<b1?>"),q:s("l<dA?>"),cP:s("l<e?>"),bj:s("l<K>"),ck:s("aj<x,x>"),f:s("aj<@,@>"),dx:s("aj<e,@(aC)>"),e:s("aX"),bK:s("bd"),bZ:s("d1"),d4:s("be"),bc:s("ak"),dD:s("O"),bm:s("bF"),P:s("L"),K:s("t"),fW:s("bH"),fh:s("eT"),g0:s("d8"),hf:s("c5"),G:s("c6"),bC:s("k_<t>"),l:s("bh"),fN:s("c8<@>"),N:s("x"),cV:s("f5"),gY:s("ls"),bA:s("lt"),eK:s("bi"),ak:s("Y"),bv:s("b_"),D:s("b0"),bI:s("bJ"),bD:s("df"),ai:s("di"),gT:s("dj"),dE:s("dk"),cc:s("Z<x>"),gH:s("aC"),ds:s("bM"),fz:s("bN<@>"),eq:s("M<L>"),d:s("M<@>"),fJ:s("M<e>"),eO:s("dA"),bb:s("fr"),v:s("E"),al:s("E(t)"),bB:s("E(x)"),gR:s("B"),z:s("@"),O:s("@()"),x:s("@(t)"),C:s("@(t,bh)"),eg:s("@(aC)"),g2:s("@(@,@)"),p:s("e"),aw:s("0&*"),_:s("t*"),bG:s("ax<L>?"),aS:s("jM?"),ha:s("l<t>?"),bE:s("l<@>?"),T:s("l<e>?"),gZ:s("l<b_?>?"),k:s("l<e?>?"),eX:s("l<~()>?"),cZ:s("aj<x,x>?"),fF:s("aj<@,@>?"),ec:s("aj<e,~()>?"),c4:s("bd?"),X:s("t?"),dk:s("x?"),aD:s("b0?"),eW:s("dg?"),aj:s("b1?"),dP:s("ff?"),F:s("b3<@,@>?"),g:s("fp?"),A:s("@(i)?"),E:s("e?"),dA:s("t?(@)?"),Z:s("~()?"),fQ:s("~(aX)?"),bJ:s("~(e)?"),di:s("K"),H:s("~"),M:s("~()"),m:s("~(az,l<e>)"),aR:s("~(e)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aW=J.ef.prototype
B.b=J.p.prototype
B.a=J.cW.prototype
B.c=J.c3.prototype
B.h=J.c4.prototype
B.b_=J.aU.prototype
B.b0=J.ay.prototype
B.aK=A.bd.prototype
B.t=A.d2.prototype
B.i=A.bF.prototype
B.aL=J.eO.prototype
B.a0=J.bJ.prototype
B.O=new A.ct(0,"BI_BITFIELDS")
B.P=new A.ct(1,"NONE")
B.aM=new A.fP(1,"over")
B.a1=new A.cv(A.cm("cv<0&>"))
B.a2=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aN=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.aS=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.aO=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aP=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.aR=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.aQ=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.a3=function(hooks) { return hooks; }

B.a4=new A.ew()
B.a5=new A.ez()
B.a6=new A.eB()
B.aT=new A.eL()
B.hf=new A.hK()
B.hg=new A.is()
B.a7=new A.iu()
B.m=new A.fq()
B.aU=new A.ft()
B.x=new A.jc()
B.A=new A.dS(0,"rgb")
B.k=new A.dS(1,"rgba")
B.aV=new A.fW(1,"clear")
B.d=new A.a0(0,"None")
B.a8=new A.a0(1,"Byte")
B.a9=new A.a0(10,"SRational")
B.aa=new A.a0(11,"Single")
B.ab=new A.a0(12,"Double")
B.f=new A.a0(2,"Ascii")
B.e=new A.a0(3,"Short")
B.j=new A.a0(4,"Long")
B.l=new A.a0(5,"Rational")
B.ac=new A.a0(6,"SByte")
B.Q=new A.a0(7,"Undefined")
B.ad=new A.a0(8,"SShort")
B.ae=new A.a0(9,"SLong")
B.hh=new A.h1(2,"rgba")
B.R=new A.h7(1,"deflate")
B.aX=new A.cU(0,"nearest")
B.aY=new A.cU(1,"linear")
B.aZ=new A.cU(2,"cubic")
B.b1=new A.ey(null,null)
B.b2=new A.eA(!1)
B.S=A.b(s([A.qe(),A.qr(),A.qu(),A.ql(),A.qg(),A.qf(),A.qh()]),t.B)
B.B=A.b(s([0,2,8]),t.t)
B.b9=A.b(s([0,4,2,1]),t.t)
B.C=A.b(s([292,260,226,226]),t.t)
B.af=A.b(s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),t.t)
B.ag=A.b(s([137,80,78,71,13,10,26,10]),t.t)
B.ah=A.b(s([2,3,7]),t.t)
B.bq=A.b(s([3,3,11]),t.t)
B.aj=A.b(s([511,1023,2047,4095]),t.t)
B.ct=A.b(s([231,120,48,89,115,113,120,152,112]),t.t)
B.eR=A.b(s([152,179,64,126,170,118,46,70,95]),t.t)
B.eS=A.b(s([175,69,143,80,85,82,72,155,103]),t.t)
B.eT=A.b(s([56,58,10,171,218,189,17,13,152]),t.t)
B.f3=A.b(s([114,26,17,163,44,195,21,10,173]),t.t)
B.fe=A.b(s([121,24,80,195,26,62,44,64,85]),t.t)
B.fp=A.b(s([144,71,10,38,171,213,144,34,26]),t.t)
B.fA=A.b(s([170,46,55,19,136,160,33,206,71]),t.t)
B.fL=A.b(s([63,20,8,114,114,208,12,9,226]),t.t)
B.fW=A.b(s([81,40,11,96,182,84,29,16,36]),t.t)
B.ei=A.b(s([B.ct,B.eR,B.eS,B.eT,B.f3,B.fe,B.fp,B.fA,B.fL,B.fW]),t.S)
B.h6=A.b(s([134,183,89,137,98,101,106,165,148]),t.t)
B.h8=A.b(s([72,187,100,130,157,111,32,75,80]),t.t)
B.eU=A.b(s([66,102,167,99,74,62,40,234,128]),t.t)
B.dC=A.b(s([41,53,9,178,241,141,26,8,107]),t.t)
B.eV=A.b(s([74,43,26,146,73,166,49,23,157]),t.t)
B.eW=A.b(s([65,38,105,160,51,52,31,115,128]),t.t)
B.d5=A.b(s([104,79,12,27,217,255,87,17,7]),t.t)
B.eX=A.b(s([87,68,71,44,114,51,15,186,23]),t.t)
B.eY=A.b(s([47,41,14,110,182,183,21,17,194]),t.t)
B.eZ=A.b(s([66,45,25,102,197,189,23,18,22]),t.t)
B.c7=A.b(s([B.h6,B.h8,B.eU,B.dC,B.eV,B.eW,B.d5,B.eX,B.eY,B.eZ]),t.S)
B.f_=A.b(s([88,88,147,150,42,46,45,196,205]),t.t)
B.f0=A.b(s([43,97,183,117,85,38,35,179,61]),t.t)
B.f1=A.b(s([39,53,200,87,26,21,43,232,171]),t.t)
B.f2=A.b(s([56,34,51,104,114,102,29,93,77]),t.t)
B.f4=A.b(s([39,28,85,171,58,165,90,98,64]),t.t)
B.f5=A.b(s([34,22,116,206,23,34,43,166,73]),t.t)
B.f6=A.b(s([107,54,32,26,51,1,81,43,31]),t.t)
B.f7=A.b(s([68,25,106,22,64,171,36,225,114]),t.t)
B.f8=A.b(s([34,19,21,102,132,188,16,76,124]),t.t)
B.f9=A.b(s([62,18,78,95,85,57,50,48,51]),t.t)
B.bH=A.b(s([B.f_,B.f0,B.f1,B.f2,B.f4,B.f5,B.f6,B.f7,B.f8,B.f9]),t.S)
B.fa=A.b(s([193,101,35,159,215,111,89,46,111]),t.t)
B.fb=A.b(s([60,148,31,172,219,228,21,18,111]),t.t)
B.d6=A.b(s([112,113,77,85,179,255,38,120,114]),t.t)
B.dD=A.b(s([40,42,1,196,245,209,10,25,109]),t.t)
B.fc=A.b(s([88,43,29,140,166,213,37,43,154]),t.t)
B.fd=A.b(s([61,63,30,155,67,45,68,1,209]),t.t)
B.ff=A.b(s([100,80,8,43,154,1,51,26,71]),t.t)
B.dE=A.b(s([142,78,78,16,255,128,34,197,171]),t.t)
B.fg=A.b(s([41,40,5,102,211,183,4,1,221]),t.t)
B.fh=A.b(s([51,50,17,168,209,192,23,25,82]),t.t)
B.c5=A.b(s([B.fa,B.fb,B.d6,B.dD,B.fc,B.fd,B.ff,B.dE,B.fg,B.fh]),t.S)
B.dF=A.b(s([138,31,36,171,27,166,38,44,229]),t.t)
B.fi=A.b(s([67,87,58,169,82,115,26,59,179]),t.t)
B.fj=A.b(s([63,59,90,180,59,166,93,73,154]),t.t)
B.fk=A.b(s([40,40,21,116,143,209,34,39,175]),t.t)
B.fl=A.b(s([47,15,16,183,34,223,49,45,183]),t.t)
B.fm=A.b(s([46,17,33,183,6,98,15,32,183]),t.t)
B.fn=A.b(s([57,46,22,24,128,1,54,17,37]),t.t)
B.fo=A.b(s([65,32,73,115,28,128,23,128,205]),t.t)
B.fq=A.b(s([40,3,9,115,51,192,18,6,223]),t.t)
B.fr=A.b(s([87,37,9,115,59,77,64,21,47]),t.t)
B.ew=A.b(s([B.dF,B.fi,B.fj,B.fk,B.fl,B.fm,B.fn,B.fo,B.fq,B.fr]),t.S)
B.fs=A.b(s([104,55,44,218,9,54,53,130,226]),t.t)
B.ft=A.b(s([64,90,70,205,40,41,23,26,57]),t.t)
B.fu=A.b(s([54,57,112,184,5,41,38,166,213]),t.t)
B.fv=A.b(s([30,34,26,133,152,116,10,32,134]),t.t)
B.dG=A.b(s([39,19,53,221,26,114,32,73,255]),t.t)
B.fw=A.b(s([31,9,65,234,2,15,1,118,73]),t.t)
B.d7=A.b(s([75,32,12,51,192,255,160,43,51]),t.t)
B.fx=A.b(s([88,31,35,67,102,85,55,186,85]),t.t)
B.fy=A.b(s([56,21,23,111,59,205,45,37,192]),t.t)
B.fz=A.b(s([55,38,70,124,73,102,1,34,98]),t.t)
B.b3=A.b(s([B.fs,B.ft,B.fu,B.fv,B.dG,B.fw,B.d7,B.fx,B.fy,B.fz]),t.S)
B.fB=A.b(s([125,98,42,88,104,85,117,175,82]),t.t)
B.fC=A.b(s([95,84,53,89,128,100,113,101,45]),t.t)
B.fD=A.b(s([75,79,123,47,51,128,81,171,1]),t.t)
B.fE=A.b(s([57,17,5,71,102,57,53,41,49]),t.t)
B.fF=A.b(s([38,33,13,121,57,73,26,1,85]),t.t)
B.fG=A.b(s([41,10,67,138,77,110,90,47,114]),t.t)
B.d8=A.b(s([115,21,2,10,102,255,166,23,6]),t.t)
B.fH=A.b(s([101,29,16,10,85,128,101,196,26]),t.t)
B.fI=A.b(s([57,18,10,102,102,213,34,20,43]),t.t)
B.fJ=A.b(s([117,20,15,36,163,128,68,1,26]),t.t)
B.cI=A.b(s([B.fB,B.fC,B.fD,B.fE,B.fF,B.fG,B.d8,B.fH,B.fI,B.fJ]),t.S)
B.dp=A.b(s([102,61,71,37,34,53,31,243,192]),t.t)
B.fK=A.b(s([69,60,71,38,73,119,28,222,37]),t.t)
B.dq=A.b(s([68,45,128,34,1,47,11,245,171]),t.t)
B.fM=A.b(s([62,17,19,70,146,85,55,62,70]),t.t)
B.fN=A.b(s([37,43,37,154,100,163,85,160,1]),t.t)
B.fO=A.b(s([63,9,92,136,28,64,32,201,85]),t.t)
B.d9=A.b(s([75,15,9,9,64,255,184,119,16]),t.t)
B.da=A.b(s([86,6,28,5,64,255,25,248,1]),t.t)
B.db=A.b(s([56,8,17,132,137,255,55,116,128]),t.t)
B.fP=A.b(s([58,15,20,82,135,57,26,121,40]),t.t)
B.bu=A.b(s([B.dp,B.fK,B.dq,B.fM,B.fN,B.fO,B.d9,B.da,B.db,B.fP]),t.S)
B.fQ=A.b(s([164,50,31,137,154,133,25,35,218]),t.t)
B.fR=A.b(s([51,103,44,131,131,123,31,6,158]),t.t)
B.fS=A.b(s([86,40,64,135,148,224,45,183,128]),t.t)
B.fT=A.b(s([22,26,17,131,240,154,14,1,209]),t.t)
B.fU=A.b(s([45,16,21,91,64,222,7,1,197]),t.t)
B.fV=A.b(s([56,21,39,155,60,138,23,102,213]),t.t)
B.dc=A.b(s([83,12,13,54,192,255,68,47,28]),t.t)
B.fX=A.b(s([85,26,85,85,128,128,32,146,171]),t.t)
B.fY=A.b(s([18,11,7,63,144,171,4,4,246]),t.t)
B.fZ=A.b(s([35,27,10,146,174,171,12,26,128]),t.t)
B.cJ=A.b(s([B.fQ,B.fR,B.fS,B.fT,B.fU,B.fV,B.dc,B.fX,B.fY,B.fZ]),t.S)
B.h_=A.b(s([190,80,35,99,180,80,126,54,45]),t.t)
B.h0=A.b(s([85,126,47,87,176,51,41,20,32]),t.t)
B.h1=A.b(s([101,75,128,139,118,146,116,128,85]),t.t)
B.h2=A.b(s([56,41,15,176,236,85,37,9,62]),t.t)
B.dd=A.b(s([71,30,17,119,118,255,17,18,138]),t.t)
B.h3=A.b(s([101,38,60,138,55,70,43,26,142]),t.t)
B.de=A.b(s([146,36,19,30,171,255,97,27,20]),t.t)
B.h4=A.b(s([138,45,61,62,219,1,81,188,64]),t.t)
B.h5=A.b(s([32,41,20,117,151,142,20,21,163]),t.t)
B.h7=A.b(s([112,19,12,61,195,128,48,4,24]),t.t)
B.cn=A.b(s([B.h_,B.h0,B.h1,B.h2,B.dd,B.h3,B.de,B.h4,B.h5,B.h7]),t.S)
B.ak=A.b(s([B.ei,B.c7,B.bH,B.c5,B.ew,B.b3,B.cI,B.bu,B.cJ,B.cn]),t.y)
B.D=A.b(s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),t.t)
B.bx=A.b(s([8,8,4,2]),t.t)
B.al=A.b(s([A.q9(),A.qp(),A.qs(),A.qj(),A.qb(),A.qa(),A.qc()]),t.B)
B.U=A.b(s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),t.t)
B.F=A.b(s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),t.t)
B.E=A.b(s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),t.t)
B.am=A.b(s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),t.t)
B.r=A.b(s([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),t.t)
B.V=A.b(s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),t.t)
B.G=A.b(s([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),t.t)
B.p=A.b(s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),t.t)
B.y=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),t.t)
B.H=A.b(s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),t.t)
B.an=A.b(s([null,A.qL(),A.qM(),A.qK()]),A.cm("p<~(e,e,e,e,e,b0)?>"))
B.q=A.b(s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),t.t)
B.n=A.b(s([255,255,255,255,255,255,255,255,255,255,255]),t.t)
B.u=A.b(s([B.n,B.n,B.n]),t.S)
B.dU=A.b(s([176,246,255,255,255,255,255,255,255,255,255]),t.t)
B.cu=A.b(s([223,241,252,255,255,255,255,255,255,255,255]),t.t)
B.e3=A.b(s([249,253,253,255,255,255,255,255,255,255,255]),t.t)
B.bO=A.b(s([B.dU,B.cu,B.e3]),t.S)
B.dQ=A.b(s([255,244,252,255,255,255,255,255,255,255,255]),t.t)
B.ef=A.b(s([234,254,254,255,255,255,255,255,255,255,255]),t.t)
B.aB=A.b(s([253,255,255,255,255,255,255,255,255,255,255]),t.t)
B.dj=A.b(s([B.dQ,B.ef,B.aB]),t.S)
B.dR=A.b(s([255,246,254,255,255,255,255,255,255,255,255]),t.t)
B.ey=A.b(s([239,253,254,255,255,255,255,255,255,255,255]),t.t)
B.aq=A.b(s([254,255,254,255,255,255,255,255,255,255,255]),t.t)
B.ci=A.b(s([B.dR,B.ey,B.aq]),t.S)
B.ay=A.b(s([255,248,254,255,255,255,255,255,255,255,255]),t.t)
B.ez=A.b(s([251,255,254,255,255,255,255,255,255,255,255]),t.t)
B.h9=A.b(s([B.ay,B.ez,B.n]),t.S)
B.a_=A.b(s([255,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dS=A.b(s([251,254,254,255,255,255,255,255,255,255,255]),t.t)
B.bC=A.b(s([B.a_,B.dS,B.aq]),t.S)
B.dh=A.b(s([255,254,253,255,254,255,255,255,255,255,255]),t.t)
B.ev=A.b(s([250,255,254,255,254,255,255,255,255,255,255]),t.t)
B.I=A.b(s([254,255,255,255,255,255,255,255,255,255,255]),t.t)
B.br=A.b(s([B.dh,B.ev,B.I]),t.S)
B.eu=A.b(s([B.u,B.bO,B.dj,B.ci,B.h9,B.bC,B.br,B.u]),t.y)
B.cb=A.b(s([217,255,255,255,255,255,255,255,255,255,255]),t.t)
B.dN=A.b(s([225,252,241,253,255,255,254,255,255,255,255]),t.t)
B.et=A.b(s([234,250,241,250,253,255,253,254,255,255,255]),t.t)
B.bP=A.b(s([B.cb,B.dN,B.et]),t.S)
B.W=A.b(s([255,254,255,255,255,255,255,255,255,255,255]),t.t)
B.eg=A.b(s([223,254,254,255,255,255,255,255,255,255,255]),t.t)
B.b4=A.b(s([238,253,254,254,255,255,255,255,255,255,255]),t.t)
B.cs=A.b(s([B.W,B.eg,B.b4]),t.S)
B.bQ=A.b(s([249,254,255,255,255,255,255,255,255,255,255]),t.t)
B.ex=A.b(s([B.ay,B.bQ,B.n]),t.S)
B.e4=A.b(s([255,253,255,255,255,255,255,255,255,255,255]),t.t)
B.bR=A.b(s([247,254,255,255,255,255,255,255,255,255,255]),t.t)
B.bW=A.b(s([B.e4,B.bR,B.n]),t.S)
B.cc=A.b(s([252,255,255,255,255,255,255,255,255,255,255]),t.t)
B.e8=A.b(s([B.a_,B.cc,B.n]),t.S)
B.az=A.b(s([255,254,254,255,255,255,255,255,255,255,255]),t.t)
B.e_=A.b(s([B.az,B.aB,B.n]),t.S)
B.bS=A.b(s([255,254,253,255,255,255,255,255,255,255,255]),t.t)
B.ao=A.b(s([250,255,255,255,255,255,255,255,255,255,255]),t.t)
B.be=A.b(s([B.bS,B.ao,B.I]),t.S)
B.bG=A.b(s([B.bP,B.cs,B.ex,B.bW,B.e8,B.e_,B.be,B.u]),t.y)
B.cv=A.b(s([186,251,250,255,255,255,255,255,255,255,255]),t.t)
B.b5=A.b(s([234,251,244,254,255,255,255,255,255,255,255]),t.t)
B.c4=A.b(s([251,251,243,253,254,255,254,255,255,255,255]),t.t)
B.es=A.b(s([B.cv,B.b5,B.c4]),t.S)
B.cw=A.b(s([236,253,254,255,255,255,255,255,255,255,255]),t.t)
B.bz=A.b(s([251,253,253,254,254,255,255,255,255,255,255]),t.t)
B.df=A.b(s([B.a_,B.cw,B.bz]),t.S)
B.eh=A.b(s([254,254,254,255,255,255,255,255,255,255,255]),t.t)
B.dk=A.b(s([B.az,B.eh,B.n]),t.S)
B.dV=A.b(s([254,254,255,255,255,255,255,255,255,255,255]),t.t)
B.cl=A.b(s([B.W,B.dV,B.I]),t.S)
B.aH=A.b(s([B.n,B.I,B.n]),t.S)
B.cm=A.b(s([B.es,B.df,B.dk,B.cl,B.aH,B.u,B.u,B.u]),t.y)
B.cd=A.b(s([248,255,255,255,255,255,255,255,255,255,255]),t.t)
B.bB=A.b(s([250,254,252,254,255,255,255,255,255,255,255]),t.t)
B.dW=A.b(s([248,254,249,253,255,255,255,255,255,255,255]),t.t)
B.dn=A.b(s([B.cd,B.bB,B.dW]),t.S)
B.e5=A.b(s([255,253,253,255,255,255,255,255,255,255,255]),t.t)
B.ce=A.b(s([246,253,253,255,255,255,255,255,255,255,255]),t.t)
B.b6=A.b(s([252,254,251,254,254,255,255,255,255,255,255]),t.t)
B.b7=A.b(s([B.e5,B.ce,B.b6]),t.S)
B.dT=A.b(s([255,254,252,255,255,255,255,255,255,255,255]),t.t)
B.dX=A.b(s([248,254,253,255,255,255,255,255,255,255,255]),t.t)
B.dO=A.b(s([253,255,254,254,255,255,255,255,255,255,255]),t.t)
B.bE=A.b(s([B.dT,B.dX,B.dO]),t.S)
B.eA=A.b(s([255,251,254,255,255,255,255,255,255,255,255]),t.t)
B.eB=A.b(s([245,251,254,255,255,255,255,255,255,255,255]),t.t)
B.eC=A.b(s([253,253,254,255,255,255,255,255,255,255,255]),t.t)
B.ej=A.b(s([B.eA,B.eB,B.eC]),t.S)
B.e6=A.b(s([255,251,253,255,255,255,255,255,255,255,255]),t.t)
B.cx=A.b(s([252,253,254,255,255,255,255,255,255,255,255]),t.t)
B.el=A.b(s([B.e6,B.cx,B.W]),t.S)
B.bT=A.b(s([255,252,255,255,255,255,255,255,255,255,255]),t.t)
B.eD=A.b(s([249,255,254,255,255,255,255,255,255,255,255]),t.t)
B.eE=A.b(s([255,255,254,255,255,255,255,255,255,255,255]),t.t)
B.bs=A.b(s([B.bT,B.eD,B.eE]),t.S)
B.e7=A.b(s([255,255,253,255,255,255,255,255,255,255,255]),t.t)
B.ha=A.b(s([B.e7,B.ao,B.n]),t.S)
B.bv=A.b(s([B.dn,B.b7,B.bE,B.ej,B.el,B.bs,B.ha,B.aH]),t.y)
B.c8=A.b(s([B.eu,B.bG,B.cm,B.bv]),t.dB)
B.X=A.b(s([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),t.t)
B.ap=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),t.t)
B.T=A.b(s([128,128,128,128,128,128,128,128,128,128,128]),t.t)
B.av=A.b(s([B.T,B.T,B.T]),t.S)
B.cT=A.b(s([253,136,254,255,228,219,128,128,128,128,128]),t.t)
B.cK=A.b(s([189,129,242,255,227,213,255,219,128,128,128]),t.t)
B.eN=A.b(s([106,126,227,252,214,209,255,255,128,128,128]),t.t)
B.eM=A.b(s([B.cT,B.cK,B.eN]),t.S)
B.bY=A.b(s([1,98,248,255,236,226,255,255,128,128,128]),t.t)
B.cZ=A.b(s([181,133,238,254,221,234,255,154,128,128,128]),t.t)
B.cL=A.b(s([78,134,202,247,198,180,255,219,128,128,128]),t.t)
B.dt=A.b(s([B.bY,B.cZ,B.cL]),t.S)
B.c9=A.b(s([1,185,249,255,243,255,128,128,128,128,128]),t.t)
B.du=A.b(s([184,150,247,255,236,224,128,128,128,128,128]),t.t)
B.bJ=A.b(s([77,110,216,255,236,230,128,128,128,128,128]),t.t)
B.cB=A.b(s([B.c9,B.du,B.bJ]),t.S)
B.ca=A.b(s([1,101,251,255,241,255,128,128,128,128,128]),t.t)
B.eF=A.b(s([170,139,241,252,236,209,255,255,128,128,128]),t.t)
B.cF=A.b(s([37,116,196,243,228,255,255,255,128,128,128]),t.t)
B.bU=A.b(s([B.ca,B.eF,B.cF]),t.S)
B.bd=A.b(s([1,204,254,255,245,255,128,128,128,128,128]),t.t)
B.bK=A.b(s([207,160,250,255,238,128,128,128,128,128,128]),t.t)
B.dv=A.b(s([102,103,231,255,211,171,128,128,128,128,128]),t.t)
B.bt=A.b(s([B.bd,B.bK,B.dv]),t.S)
B.eo=A.b(s([1,152,252,255,240,255,128,128,128,128,128]),t.t)
B.dw=A.b(s([177,135,243,255,234,225,128,128,128,128,128]),t.t)
B.bL=A.b(s([80,129,211,255,194,224,128,128,128,128,128]),t.t)
B.bw=A.b(s([B.eo,B.dw,B.bL]),t.S)
B.ai=A.b(s([1,1,255,128,128,128,128,128,128,128,128]),t.t)
B.bh=A.b(s([246,1,255,128,128,128,128,128,128,128,128]),t.t)
B.ba=A.b(s([255,128,128,128,128,128,128,128,128,128,128]),t.t)
B.cr=A.b(s([B.ai,B.bh,B.ba]),t.S)
B.bf=A.b(s([B.av,B.eM,B.dt,B.cB,B.bU,B.bt,B.bw,B.cr]),t.y)
B.bi=A.b(s([198,35,237,223,193,187,162,160,145,155,62]),t.t)
B.bg=A.b(s([131,45,198,221,172,176,220,157,252,221,1]),t.t)
B.dy=A.b(s([68,47,146,208,149,167,221,162,255,223,128]),t.t)
B.bD=A.b(s([B.bi,B.bg,B.dy]),t.S)
B.e9=A.b(s([1,149,241,255,221,224,255,255,128,128,128]),t.t)
B.cM=A.b(s([184,141,234,253,222,220,255,199,128,128,128]),t.t)
B.dH=A.b(s([81,99,181,242,176,190,249,202,255,255,128]),t.t)
B.bV=A.b(s([B.e9,B.cM,B.dH]),t.S)
B.e0=A.b(s([1,129,232,253,214,197,242,196,255,255,128]),t.t)
B.d_=A.b(s([99,121,210,250,201,198,255,202,128,128,128]),t.t)
B.dI=A.b(s([23,91,163,242,170,187,247,210,255,255,128]),t.t)
B.hb=A.b(s([B.e0,B.d_,B.dI]),t.S)
B.ep=A.b(s([1,200,246,255,234,255,128,128,128,128,128]),t.t)
B.cG=A.b(s([109,178,241,255,231,245,255,255,128,128,128]),t.t)
B.bZ=A.b(s([44,130,201,253,205,192,255,255,128,128,128]),t.t)
B.ck=A.b(s([B.ep,B.cG,B.bZ]),t.S)
B.dY=A.b(s([1,132,239,251,219,209,255,165,128,128,128]),t.t)
B.c_=A.b(s([94,136,225,251,218,190,255,255,128,128,128]),t.t)
B.cN=A.b(s([22,100,174,245,186,161,255,199,128,128,128]),t.t)
B.ds=A.b(s([B.dY,B.c_,B.cN]),t.S)
B.eI=A.b(s([1,182,249,255,232,235,128,128,128,128,128]),t.t)
B.dx=A.b(s([124,143,241,255,227,234,128,128,128,128,128]),t.t)
B.cO=A.b(s([35,77,181,251,193,211,255,205,128,128,128]),t.t)
B.ee=A.b(s([B.eI,B.dx,B.cO]),t.S)
B.cA=A.b(s([1,157,247,255,236,231,255,255,128,128,128]),t.t)
B.ea=A.b(s([121,141,235,255,225,227,255,255,128,128,128]),t.t)
B.cP=A.b(s([45,99,188,251,195,217,255,224,128,128,128]),t.t)
B.bA=A.b(s([B.cA,B.ea,B.cP]),t.S)
B.eJ=A.b(s([1,1,251,255,213,255,128,128,128,128,128]),t.t)
B.cU=A.b(s([203,1,248,255,255,128,128,128,128,128,128]),t.t)
B.eq=A.b(s([137,1,177,255,224,255,128,128,128,128,128]),t.t)
B.cy=A.b(s([B.eJ,B.cU,B.eq]),t.S)
B.bX=A.b(s([B.bD,B.bV,B.hb,B.ck,B.ds,B.ee,B.bA,B.cy]),t.y)
B.e2=A.b(s([253,9,248,251,207,208,255,192,128,128,128]),t.t)
B.dl=A.b(s([175,13,224,243,193,185,249,198,255,255,128]),t.t)
B.dz=A.b(s([73,17,171,221,161,179,236,167,255,234,128]),t.t)
B.b8=A.b(s([B.e2,B.dl,B.dz]),t.S)
B.eb=A.b(s([1,95,247,253,212,183,255,255,128,128,128]),t.t)
B.ed=A.b(s([239,90,244,250,211,209,255,255,128,128,128]),t.t)
B.eO=A.b(s([155,77,195,248,188,195,255,255,128,128,128]),t.t)
B.co=A.b(s([B.eb,B.ed,B.eO]),t.S)
B.dZ=A.b(s([1,24,239,251,218,219,255,205,128,128,128]),t.t)
B.bM=A.b(s([201,51,219,255,196,186,128,128,128,128,128]),t.t)
B.cQ=A.b(s([69,46,190,239,201,218,255,228,128,128,128]),t.t)
B.dm=A.b(s([B.dZ,B.bM,B.cQ]),t.S)
B.by=A.b(s([1,191,251,255,255,128,128,128,128,128,128]),t.t)
B.eK=A.b(s([223,165,249,255,213,255,128,128,128,128,128]),t.t)
B.cV=A.b(s([141,124,248,255,255,128,128,128,128,128,128]),t.t)
B.bI=A.b(s([B.by,B.eK,B.cV]),t.S)
B.cW=A.b(s([1,16,248,255,255,128,128,128,128,128,128]),t.t)
B.er=A.b(s([190,36,230,255,236,255,128,128,128,128,128]),t.t)
B.bj=A.b(s([149,1,255,128,128,128,128,128,128,128,128]),t.t)
B.cC=A.b(s([B.cW,B.er,B.bj]),t.S)
B.bk=A.b(s([1,226,255,128,128,128,128,128,128,128,128]),t.t)
B.c6=A.b(s([247,192,255,128,128,128,128,128,128,128,128]),t.t)
B.bl=A.b(s([240,128,255,128,128,128,128,128,128,128,128]),t.t)
B.eG=A.b(s([B.bk,B.c6,B.bl]),t.S)
B.cX=A.b(s([1,134,252,255,255,128,128,128,128,128,128]),t.t)
B.cY=A.b(s([213,62,250,255,255,128,128,128,128,128,128]),t.t)
B.bm=A.b(s([55,93,255,128,128,128,128,128,128,128,128]),t.t)
B.cg=A.b(s([B.cX,B.cY,B.bm]),t.S)
B.cf=A.b(s([B.b8,B.co,B.dm,B.bI,B.cC,B.eG,B.cg,B.av]),t.y)
B.cH=A.b(s([202,24,213,235,186,191,220,160,240,175,255]),t.t)
B.dA=A.b(s([126,38,182,232,169,184,228,174,255,187,128]),t.t)
B.dB=A.b(s([61,46,138,219,151,178,240,170,255,216,128]),t.t)
B.eH=A.b(s([B.cH,B.dA,B.dB]),t.S)
B.dJ=A.b(s([1,112,230,250,199,191,247,159,255,255,128]),t.t)
B.d0=A.b(s([166,109,228,252,211,215,255,174,128,128,128]),t.t)
B.dK=A.b(s([39,77,162,232,172,180,245,178,255,255,128]),t.t)
B.cz=A.b(s([B.dJ,B.d0,B.dK]),t.S)
B.dL=A.b(s([1,52,220,246,198,199,249,220,255,255,128]),t.t)
B.e1=A.b(s([124,74,191,243,183,193,250,221,255,255,128]),t.t)
B.dM=A.b(s([24,71,130,219,154,170,243,182,255,255,128]),t.t)
B.dr=A.b(s([B.dL,B.e1,B.dM]),t.S)
B.cR=A.b(s([1,182,225,249,219,240,255,224,128,128,128]),t.t)
B.d1=A.b(s([149,150,226,252,216,205,255,171,128,128,128]),t.t)
B.cE=A.b(s([28,108,170,242,183,194,254,223,255,255,128]),t.t)
B.ch=A.b(s([B.cR,B.d1,B.cE]),t.S)
B.d2=A.b(s([1,81,230,252,204,203,255,192,128,128,128]),t.t)
B.c0=A.b(s([123,102,209,247,188,196,255,233,128,128,128]),t.t)
B.cS=A.b(s([20,95,153,243,164,173,255,203,128,128,128]),t.t)
B.bF=A.b(s([B.d2,B.c0,B.cS]),t.S)
B.bN=A.b(s([1,222,248,255,216,213,128,128,128,128,128]),t.t)
B.c3=A.b(s([168,175,246,252,235,205,255,255,128,128,128]),t.t)
B.c1=A.b(s([47,116,215,255,211,212,255,255,128,128,128]),t.t)
B.cq=A.b(s([B.bN,B.c3,B.c1]),t.S)
B.c2=A.b(s([1,121,236,253,212,214,255,255,128,128,128]),t.t)
B.d3=A.b(s([141,84,213,252,201,202,255,219,128,128,128]),t.t)
B.d4=A.b(s([42,80,160,240,162,185,255,205,128,128,128]),t.t)
B.eL=A.b(s([B.c2,B.d3,B.d4]),t.S)
B.bn=A.b(s([244,1,255,128,128,128,128,128,128,128,128]),t.t)
B.bo=A.b(s([238,1,255,128,128,128,128,128,128,128,128]),t.t)
B.cj=A.b(s([B.ai,B.bn,B.bo]),t.S)
B.ek=A.b(s([B.eH,B.cz,B.dr,B.ch,B.bF,B.cq,B.eL,B.cj]),t.y)
B.cp=A.b(s([B.bf,B.bX,B.cf,B.ek]),t.dB)
B.J=A.b(s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),t.t)
B.v=A.b(s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),t.t)
B.z=A.b(s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),t.t)
B.cD=A.b(s([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),t.t)
B.ar=A.b(s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),t.t)
B.K=A.b(s([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),t.t)
B.L=A.b(s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),t.t)
B.at=A.b(s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),t.t)
B.as=A.b(s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),t.t)
B.Y=A.b(s([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),t.t)
B.dg=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),t.t)
B.di=A.b(s([]),t.s)
B.au=A.b(s([]),t.gn)
B.aw=A.b(s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),t.t)
B.ax=A.b(s([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),t.t)
B.o=A.b(s([0,1,3,7,15,31,63,127,255]),t.t)
B.w=A.b(s([0,128,192,224,240,248,252,254,255]),t.t)
B.dP=A.b(s([0,1,1,2,4,8,1,1,2,4,8,4,8]),t.t)
B.aA=A.b(s([B.d,B.a8,B.f,B.e,B.j,B.l,B.ac,B.Q,B.ad,B.ae,B.a9,B.aa,B.ab]),A.cm("p<a0>"))
B.M=A.b(s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),t.t)
B.Z=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),t.t)
B.ec=A.b(s([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),t.t)
B.aC=A.b(s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),t.t)
B.bb=A.b(s([173,148,140]),t.t)
B.bc=A.b(s([176,155,140,135]),t.t)
B.eQ=A.b(s([180,157,141,134,130]),t.t)
B.bp=A.b(s([254,254,243,230,196,177,153,140,133,130,129]),t.t)
B.aD=A.b(s([B.bb,B.bc,B.eQ,B.bp]),t.S)
B.aE=A.b(s([A.qd(),A.qq(),A.qt(),A.qk(),A.qo(),A.qw(),A.qn(),A.qv(),A.qi(),A.qm()]),t.B)
B.em=A.b(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),t.t)
B.N=A.b(s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t.t)
B.en=A.b(s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),t.t)
B.aF=A.b(s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),t.t)
B.eP=A.b(s([280,256,256,256,40]),t.t)
B.aG=A.b(s([0,1,1,2,4,8,1,1,2,4,8,4,8,0]),t.t)
B.aI=new A.c_([315,"artist",258,"bitsPerSample",265,"cellLength",264,"cellWidth",320,"colorMap",259,"compression",306,"dateTime",34665,"exifIFD",338,"extraSamples",266,"fillOrder",289,"freeByteCounts",288,"freeOffsets",291,"grayResponseCurve",290,"grayResponseUnit",316,"hostComputer",34675,"iccProfile",270,"imageDescription",257,"imageLength",256,"imageWidth",33723,"iptc",271,"make",281,"maxSampleValue",280,"minSampleValue",272,"model",254,"newSubfileType",274,"orientation",262,"photometricInterpretation",34377,"photoshop",284,"planarConfiguration",317,"predictor",296,"resolutionUnit",278,"rowsPerStrip",277,"samplesPerPixel",305,"software",279,"stripByteCounts",273,"stropOffsets",255,"subfileType",292,"t4Options",293,"t6Options",263,"thresholding",322,"tileWidth",323,"tileLength",324,"tileOffsets",325,"tileByteCounts",700,"xmp",282,"xResolution",283,"yResolution",529,"yCbCrCoefficients",530,"yCbCrSubsampling",531,"yCbCrPositioning",339,"sampleFormat"],t.h)
B.aJ=new A.c_([34665,"exif",40965,"interop",34853,"gps"],t.h)
B.hc=A.q7("t")
B.hd=new A.fc(!0)
B.he=new A.ce(null,2)})();(function staticFields(){$.iV=null
$.l9=null
$.kH=null
$.kG=null
$.ma=null
$.m5=null
$.me=null
$.jo=null
$.jv=null
$.ko=null
$.ci=null
$.dL=null
$.dM=null
$.kk=!1
$.C=B.m
$.an=A.b([],t.e3)
$.aq=A.as("_config")
$.ki=null
$.ly=!1
$.lz=A.b([A.kr(),A.qx(),A.qC(),A.qD(),A.qE(),A.qF(),A.qG(),A.qH(),A.qI(),A.qJ(),A.qy(),A.qz(),A.qA(),A.qB(),A.kr(),A.kr()],A.cm("p<e(b_,e,e)>"))
$.jK=null
$.P=null
$.h4=A.as("_eLut")
$.a6=null
$.bg=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qP","mj",()=>A.pP("_$dart_dartClosure"))
s($,"rH","ky",()=>B.m.eA(new A.jy(),A.cm("ax<L>")))
s($,"qX","mm",()=>A.aZ(A.i_({
toString:function(){return"$receiver$"}})))
s($,"qY","mn",()=>A.aZ(A.i_({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"qZ","mo",()=>A.aZ(A.i_(null)))
s($,"r_","mp",()=>A.aZ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"r2","ms",()=>A.aZ(A.i_(void 0)))
s($,"r3","mt",()=>A.aZ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"r1","mr",()=>A.aZ(A.lu(null)))
s($,"r0","mq",()=>A.aZ(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"r5","mv",()=>A.aZ(A.lu(void 0)))
s($,"r4","mu",()=>A.aZ(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"re","kt",()=>A.ox())
s($,"r6","mw",()=>new A.i1().$0())
s($,"r7","mx",()=>new A.i0().$0())
r($,"rE","mF",()=>new Error().stack!=void 0)
s($,"rF","kx",()=>A.kq(B.hc))
s($,"ri","mB",()=>A.kc(B.K,B.Z,257,286,15))
s($,"rh","mA",()=>A.kc(B.ax,B.z,0,30,15))
s($,"rg","mz",()=>A.kc(null,B.em,0,19,7))
s($,"qQ","mk",()=>{var q="ISOSpeed"
return A.cZ([11,A.f("ProcessingSoftware",B.f,1),254,A.f("SubfileType",B.j,1),255,A.f("OldSubfileType",B.j,1),256,A.f("ImageWidth",B.j,1),257,A.f("ImageLength",B.j,1),258,A.f("BitsPerSample",B.e,1),259,A.f("Compression",B.e,1),262,A.f("PhotometricInterpretation",B.e,1),263,A.f("Thresholding",B.e,1),264,A.f("CellWidth",B.e,1),265,A.f("CellLength",B.e,1),266,A.f("FillOrder",B.e,1),269,A.f("DocumentName",B.f,1),270,A.f("ImageDescription",B.f,1),271,A.f("Make",B.f,1),272,A.f("Model",B.f,1),273,A.f("StripOffsets",B.j,1),274,A.f("Orientation",B.e,1),277,A.f("SamplesPerPixel",B.e,1),278,A.f("RowsPerStrip",B.j,1),279,A.f("StripByteCounts",B.j,1),280,A.f("MinSampleValue",B.e,1),281,A.f("MaxSampleValue",B.e,1),282,A.f("XResolution",B.l,1),283,A.f("YResolution",B.l,1),284,A.f("PlanarConfiguration",B.e,1),285,A.f("PageName",B.f,1),286,A.f("XPosition",B.l,1),287,A.f("YPosition",B.l,1),290,A.f("GrayResponseUnit",B.e,1),291,A.f("GrayResponseCurve",B.d,1),292,A.f("T4Options",B.d,1),293,A.f("T6Options",B.d,1),296,A.f("ResolutionUnit",B.e,1),297,A.f("PageNumber",B.e,2),300,A.f("ColorResponseUnit",B.d,1),301,A.f("TransferFunction",B.e,768),305,A.f("Software",B.f,1),306,A.f("DateTime",B.f,1),315,A.f("Artist",B.f,1),316,A.f("HostComputer",B.f,1),317,A.f("Predictor",B.e,1),318,A.f("WhitePoint",B.l,2),319,A.f("PrimaryChromaticities",B.l,6),320,A.f("ColorMap",B.d,1),321,A.f("HalftoneHints",B.e,2),322,A.f("TileWidth",B.j,1),323,A.f("TileLength",B.j,1),324,A.f("TileOffsets",B.d,1),325,A.f("TileByteCounts",B.d,1),326,A.f("BadFaxLines",B.d,1),327,A.f("CleanFaxData",B.d,1),328,A.f("ConsecutiveBadFaxLines",B.d,1),332,A.f("InkSet",B.d,1),333,A.f("InkNames",B.d,1),334,A.f("NumberofInks",B.d,1),336,A.f("DotRange",B.d,1),337,A.f("TargetPrinter",B.f,1),338,A.f("ExtraSamples",B.d,1),339,A.f("SampleFormat",B.d,1),340,A.f("SMinSampleValue",B.d,1),341,A.f("SMaxSampleValue",B.d,1),342,A.f("TransferRange",B.d,1),343,A.f("ClipPath",B.d,1),512,A.f("JPEGProc",B.d,1),513,A.f("JPEGInterchangeFormat",B.d,1),514,A.f("JPEGInterchangeFormatLength",B.d,1),529,A.f("YCbCrCoefficients",B.l,3),530,A.f("YCbCrSubSampling",B.e,1),531,A.f("YCbCrPositioning",B.e,1),532,A.f("ReferenceBlackWhite",B.l,6),700,A.f("ApplicationNotes",B.e,1),18246,A.f("Rating",B.e,1),33421,A.f("CFARepeatPatternDim",B.d,1),33422,A.f("CFAPattern",B.d,1),33423,A.f("BatteryLevel",B.d,1),33432,A.f("Copyright",B.f,1),33434,A.f("ExposureTime",B.l,1),33437,A.f("FNumber",B.l,1),33723,A.f("IPTC-NAA",B.j,1),34665,A.f("ExifOffset",B.d,1),34675,A.f("InterColorProfile",B.d,1),34850,A.f("ExposureProgram",B.e,1),34852,A.f("SpectralSensitivity",B.f,1),34853,A.f("GPSOffset",B.d,1),34855,A.f(q,B.j,1),34856,A.f("OECF",B.d,1),34864,A.f("SensitivityType",B.e,1),34866,A.f("RecommendedExposureIndex",B.j,1),34867,A.f(q,B.j,1),36864,A.f("ExifVersion",B.Q,1),36867,A.f("DateTimeOriginal",B.f,1),36868,A.f("DateTimeDigitized",B.f,1),36880,A.f("OffsetTime",B.f,1),36881,A.f("OffsetTimeOriginal",B.f,1),36882,A.f("OffsetTimeDigitized",B.f,1),37121,A.f("ComponentsConfiguration",B.d,1),37122,A.f("CompressedBitsPerPixel",B.d,1),37377,A.f("ShutterSpeedValue",B.d,1),37378,A.f("ApertureValue",B.d,1),37379,A.f("BrightnessValue",B.d,1),37380,A.f("ExposureBiasValue",B.d,1),37381,A.f("MaxApertureValue",B.d,1),37382,A.f("SubjectDistance",B.d,1),37383,A.f("MeteringMode",B.d,1),37384,A.f("LightSource",B.d,1),37385,A.f("Flash",B.d,1),37386,A.f("FocalLength",B.d,1),37396,A.f("SubjectArea",B.d,1),37500,A.f("MakerNote",B.d,1),37510,A.f("UserComment",B.d,1),37520,A.f("SubSecTime",B.d,1),37521,A.f("SubSecTimeOriginal",B.d,1),37522,A.f("SubSecTimeDigitized",B.d,1),40091,A.f("XPTitle",B.d,1),40092,A.f("XPComment",B.d,1),40093,A.f("XPAuthor",B.d,1),40094,A.f("XPKeywords",B.d,1),40095,A.f("XPSubject",B.d,1),40960,A.f("FlashPixVersion",B.d,1),40961,A.f("ColorSpace",B.e,1),40962,A.f("ExifImageWidth",B.e,1),40963,A.f("ExifImageLength",B.e,1),40964,A.f("RelatedSoundFile",B.d,1),40965,A.f("InteroperabilityOffset",B.d,1),41483,A.f("FlashEnergy",B.d,1),41484,A.f("SpatialFrequencyResponse",B.d,1),41486,A.f("FocalPlaneXResolution",B.d,1),41487,A.f("FocalPlaneYResolution",B.d,1),41488,A.f("FocalPlaneResolutionUnit",B.d,1),41492,A.f("SubjectLocation",B.d,1),41493,A.f("ExposureIndex",B.d,1),41495,A.f("SensingMethod",B.d,1),41728,A.f("FileSource",B.d,1),41729,A.f("SceneType",B.d,1),41730,A.f("CVAPattern",B.d,1),41985,A.f("CustomRendered",B.d,1),41986,A.f("ExposureMode",B.d,1),41987,A.f("WhiteBalance",B.d,1),41988,A.f("DigitalZoomRatio",B.d,1),41989,A.f("FocalLengthIn35mmFilm",B.d,1),41990,A.f("SceneCaptureType",B.d,1),41991,A.f("GainControl",B.d,1),41992,A.f("Contrast",B.d,1),41993,A.f("Saturation",B.d,1),41994,A.f("Sharpness",B.d,1),41995,A.f("DeviceSettingDescription",B.d,1),41996,A.f("SubjectDistanceRange",B.d,1),42016,A.f("ImageUniqueID",B.d,1),42032,A.f("CameraOwnerName",B.f,1),42033,A.f("BodySerialNumber",B.f,1),42034,A.f("LensSpecification",B.d,1),42035,A.f("LensMake",B.f,1),42036,A.f("LensModel",B.f,1),42037,A.f("LensSerialNumber",B.f,1),42240,A.f("Gamma",B.l,1),50341,A.f("PrintIM",B.d,1),59932,A.f("Padding",B.d,1),59933,A.f("OffsetSchema",B.d,1),65e3,A.f("OwnerName",B.f,1),65001,A.f("SerialNumber",B.f,1)],t.p,A.cm("e_"))})
r($,"r8","fC",()=>A.hv(511))
r($,"r9","jC",()=>A.hv(511))
r($,"rb","jD",()=>A.l7(2041))
r($,"rc","fD",()=>A.l7(225))
r($,"ra","ad",()=>A.hv(766))
s($,"ru","aa",()=>A.hv(1))
s($,"rv","af",()=>A.nl($.aa().buffer))
s($,"rn","a9",()=>A.nv(1))
s($,"ro","ae",()=>{var q,p=$.a9().buffer
A.bp(p,0,null)
q=B.a.I(p.byteLength-0,2)
return new Int16Array(p,0,q)})
s($,"rp","A",()=>A.nw(1))
s($,"rr","Q",()=>{var q,p=$.A().buffer
A.bp(p,0,null)
q=B.a.I(p.byteLength-0,4)
return new Int32Array(p,0,q)})
s($,"rq","b7",()=>A.na($.A().buffer))
s($,"rl","kv",()=>A.nt(1))
s($,"rm","mD",()=>A.lv($.kv().buffer,0))
s($,"rj","ku",()=>A.nr(1))
s($,"rk","mC",()=>A.lv($.ku().buffer,0))
s($,"rs","kw",()=>A.nJ(1))
s($,"rt","mE",()=>{var q=$.kw()
return A.nc(q.gcR(q))})
s($,"qW","ml",()=>new A.f7())
s($,"rd","my",()=>new A.bM(!0,null,null,null))
s($,"qO","mi",()=>{var q=new A.b9(!1,++$.ks().a,null)
q.f=1
q.a=0
return q})
s($,"qT","ks",()=>new A.hL())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ay,MediaError:J.ay,MessageChannel:J.ay,NavigatorUserMediaError:J.ay,OverconstrainedError:J.ay,PositionError:J.ay,GeolocationPositionError:J.ay,ArrayBuffer:A.d1,DataView:A.O,ArrayBufferView:A.O,Float32Array:A.eE,Float64Array:A.eF,Int16Array:A.eG,Int32Array:A.eH,Int8Array:A.eI,Uint16Array:A.eJ,Uint32Array:A.d2,Uint8ClampedArray:A.d3,CanvasPixelArray:A.d3,Uint8Array:A.bF,Blob:A.bu,DedicatedWorkerGlobalScope:A.bX,DOMException:A.fX,AbortPaymentEvent:A.i,AnimationEvent:A.i,AnimationPlaybackEvent:A.i,ApplicationCacheErrorEvent:A.i,BackgroundFetchClickEvent:A.i,BackgroundFetchEvent:A.i,BackgroundFetchFailEvent:A.i,BackgroundFetchedEvent:A.i,BeforeInstallPromptEvent:A.i,BeforeUnloadEvent:A.i,BlobEvent:A.i,CanMakePaymentEvent:A.i,ClipboardEvent:A.i,CloseEvent:A.i,CompositionEvent:A.i,CustomEvent:A.i,DeviceMotionEvent:A.i,DeviceOrientationEvent:A.i,ErrorEvent:A.i,ExtendableEvent:A.i,ExtendableMessageEvent:A.i,FetchEvent:A.i,FocusEvent:A.i,FontFaceSetLoadEvent:A.i,ForeignFetchEvent:A.i,GamepadEvent:A.i,HashChangeEvent:A.i,InstallEvent:A.i,KeyboardEvent:A.i,MediaEncryptedEvent:A.i,MediaKeyMessageEvent:A.i,MediaQueryListEvent:A.i,MediaStreamEvent:A.i,MediaStreamTrackEvent:A.i,MIDIConnectionEvent:A.i,MIDIMessageEvent:A.i,MouseEvent:A.i,DragEvent:A.i,MutationEvent:A.i,NotificationEvent:A.i,PageTransitionEvent:A.i,PaymentRequestEvent:A.i,PaymentRequestUpdateEvent:A.i,PointerEvent:A.i,PopStateEvent:A.i,PresentationConnectionAvailableEvent:A.i,PresentationConnectionCloseEvent:A.i,ProgressEvent:A.i,PromiseRejectionEvent:A.i,PushEvent:A.i,RTCDataChannelEvent:A.i,RTCDTMFToneChangeEvent:A.i,RTCPeerConnectionIceEvent:A.i,RTCTrackEvent:A.i,SecurityPolicyViolationEvent:A.i,SensorErrorEvent:A.i,SpeechRecognitionError:A.i,SpeechRecognitionEvent:A.i,SpeechSynthesisEvent:A.i,StorageEvent:A.i,SyncEvent:A.i,TextEvent:A.i,TouchEvent:A.i,TrackEvent:A.i,TransitionEvent:A.i,WebKitTransitionEvent:A.i,UIEvent:A.i,VRDeviceEvent:A.i,VRDisplayEvent:A.i,VRSessionEvent:A.i,WheelEvent:A.i,MojoInterfaceRequestEvent:A.i,ResourceProgressEvent:A.i,USBConnectionEvent:A.i,IDBVersionChangeEvent:A.i,AudioProcessingEvent:A.i,OfflineAudioCompletionEvent:A.i,WebGLContextEvent:A.i,Event:A.i,InputEvent:A.i,SubmitEvent:A.i,EventTarget:A.aQ,File:A.bZ,MessageEvent:A.aX,MessagePort:A.bd,ServiceWorkerGlobalScope:A.bl,SharedWorkerGlobalScope:A.bl,WorkerGlobalScope:A.bl})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,MessageChannel:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,Blob:false,DedicatedWorkerGlobalScope:true,DOMException:true,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,File:true,MessageEvent:true,MessagePort:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:false})
A.X.$nativeSuperclassTag="ArrayBufferView"
A.dw.$nativeSuperclassTag="ArrayBufferView"
A.dx.$nativeSuperclassTag="ArrayBufferView"
A.be.$nativeSuperclassTag="ArrayBufferView"
A.dy.$nativeSuperclassTag="ArrayBufferView"
A.dz.$nativeSuperclassTag="ArrayBufferView"
A.ak.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.q_
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=thumbnail_worker.dart.js.map
