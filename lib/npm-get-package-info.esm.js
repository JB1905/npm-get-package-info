import{exec as e}from"child_process";import{promisify as n}from"util";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function r(e,n,r,t){return new(r||(r=Promise))((function(o,i){function a(e){try{l(t.next(e))}catch(e){i(e)}}function u(e){try{l(t.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,u)}l((t=t.apply(e,n||[])).next())}))}function t(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var o=n(e),i=["dependencies","deprecated","description","dist","dist-tags","keywords","license","maintainers","name","repository","version","versions"];export default function(e){var n=e.name,a=e.version,u=e.parseOutput,l=void 0===u||u,c=e.info,s=void 0===c?i:c;return r(void 0,void 0,void 0,(function(){var e,r,u,c;return t(this,(function(t){switch(t.label){case 0:if((e=s.filter((function(e){return!i.includes(e)}))).length>0)throw new Error(e.join(", ")+" "+(e.length>1?"are":"is")+" not available as info value"+(e.length>1?"s":""));return[4,o("npm view "+n+(a?"@"+a:"")+" "+s.join(" ")+" -json")];case 1:if(r=t.sent(),u=r.stdout,c=r.stderr)throw new Error(c);if(""===u)throw new Error("Data not found for provided package");return[2,l?JSON.parse(u):u]}}))}))}
//# sourceMappingURL=npm-get-package-info.esm.js.map
