(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2SyR":function(n,t,e){"use strict";var i={name:"icon-button",props:["icon","on-click","title","color","size","disabled","loading"]},u=e("psIG"),r=Object(u.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",["small"==n.size?e("v-btn",{staticClass:"pa-2",attrs:{small:"",text:"",color:n.color,loading:n.loading,disabled:n.disabled},on:{click:n.onClick}},[n.icon?e("v-icon",[n._v(n._s(n.icon))]):n._e(),n._v(" "),n.title?e("span",{staticClass:"text"},[n._v(" "+n._s(n.title))]):n._e()],1):e("v-btn",{staticClass:"pa-2",attrs:{text:"",loading:n.loading,disabled:n.disabled,color:n.color,"x-small":""},on:{click:n.onClick}},[n.icon?e("v-icon",[n._v(n._s(n.icon))]):n._e(),n._v(" "),n.title?e("span",{staticClass:"text"},[n._v(" "+n._s(n.title))]):n._e()],1)],1)}),[],!1,null,null,null);t.a=r.exports},DeKB:function(n,t,e){"use strict";var i=e("Zv/C"),u=e.n(i),r=e("uzYq"),o=e("NWgQ"),s=e.n(o),a=e("PWxN"),l=e.n(a),c=function(){var n=this;this.uri="",this.evaluateUri=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof n.uri?n.uri(t):uri},this.fetch=function(t){var e=n.evaluateUri(),i=null;return t&&t.hasOwnProperty("id")?(i=t.id,t=l()(t,"id")):t&&t.hasOwnProperty("uuid")&&(i=t.uuid,t=l()(t,"uuid")),t&&(e=e+"?"+s.a.stringify(t)),i?n.fetchById(i,t):r.a.get(e)},this.fetchById=function(t,e){var i=n.evaluateUri(t);return e&&(i=i+"?"+s.a.stringify(e)),r.a.get(i)},this.remove=function(){var t=n.evaluateUri();return r.a.delete(t)},this.removeById=function(t){var e=n.evaluateUri(t);return r.a.delete(e)},this.create=function(t){var e=n.evaluateUri();return r.a.post(e,t)},this.patch=function(t,e){var i=n.evaluateUri(t);return r.a.patch(i,e)},this.update=function(t,e){var i=n.evaluateUri(t);return r.a.put(i,e)}};t.a=function n(t){u()(this,n),c.call(this),this.uri=t}},K3Z4:function(n,t,e){"use strict";var i,u,r=e("tZmG"),o=e.n(r),s=e("Kz1y"),a=e.n(s),l=e("Zepl"),c={props:["config","value"],data:function(){return{rules:[]}},computed:{displayName:function(){return this.config&&this.config.displayName||""},_value:{get:function(){return this.value},set:function(n){return n}},disabled:function(){return this.config&&this.config.disabled||!1},defaultValue:function(){return this.config&&this.config.default||null},options:function(){return this.config&&this.config.options||[]}},mounted:function(){this.config&&this.updateFieldRules()},methods:{onInput:function(n){this.$emit("input",n)},updateFieldRules:function(){this.config&&Boolean(this.config.required)&&this.rules.push(l.a.required)}}},f=e("psIG"),d=Object(f.a)(c,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("v-select",{attrs:{dense:"",disabled:n.disabled,rules:n.rules,items:n.options,label:n.displayName},on:{input:function(t){return n.onInput(t)}},model:{value:n._value,callback:function(t){n._value=t},expression:"_value"}})}),[],!1,null,null,null).exports,h={props:["config","value"],data:function(){return{rules:[]}},computed:{displayName:function(){return this.config&&this.config.displayName||""},disabled:function(){return this.config&&this.config.disabled||!1},_value:{get:function(){return this.value},set:function(n){return n}}},mounted:function(){this.config&&this.updateFieldRules()},methods:{onInput:function(n){this.$emit("input",n)},updateFieldRules:function(){this.config}}},p=Object(f.a)(h,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("v-switch",{attrs:{disabled:n.disabled,dense:"",inset:"",color:"blue",rules:n.rules,label:n.displayName},on:{change:function(t){return n.onInput(t)}},model:{value:n._value,callback:function(t){n._value=t},expression:"_value"}})}),[],!1,null,null,null).exports,m=e("TcPG"),g=e.n(m),v="array",_="float",b="string",y="int",x="bool",V=(i={},g()(i,v,v),g()(i,_,_),g()(i,b,b),g()(i,y,y),g()(i,x,x),u={},g()(u,v,null),g()(u,_,0),g()(u,y,0),g()(u,x,!1),g()(u,b,""),u),F={name:"float-field",props:["config","value"],data:function(){return{rules:[]}},computed:{disabled:function(){return this.config&&this.config.disabled||!1},displayName:function(){return this.config&&this.config.displayName||""},_value:{get:function(){return this.value},set:function(n){return n}},step:function(){return.01},defaultValue:function(){return this.config&&this.config.default||null},options:function(){return this.config&&this.config.options||[]},minVal:function(){return this.config&&this.config.min?this.config.min:-1/0},maxVal:function(){return this.config&&this.config.max?this.config.max:1/0}},mounted:function(){this.config&&this.updateFieldRules()},methods:{onInput:function(n){this.$emit("input",+n)},updateFieldRules:function(){this.config&&(this.config.type===_&&this.rules.push(l.a.number),this.config.type===Boolean(this.config.required)&&this.rules.push(l.a.required))}}},C=Object(f.a)(F,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("v-text-field",{attrs:{dense:"",type:"number",min:n.minVal,max:n.maxVal,rules:n.rules,items:n.options,step:n.step,disabled:n.disabled,label:n.displayName,default:n.defaultValue},on:{input:function(t){return n.onInput(t)}},model:{value:n._value,callback:function(t){n._value=t},expression:"_value"}})}),[],!1,null,null,null).exports,w={name:"string-field",props:["config","value"],data:function(){return{rules:[]}},computed:{displayName:function(){return this.config&&this.config.displayName||""},_value:{get:function(){return this.value},set:function(n){return this.value}},disabled:function(){return this.config&&this.config.disabled||!1},defaultValue:function(){return this.config&&this.config.default||null},options:function(){return this.config&&this.config.options||[]},maxCharacters:function(){return this.config&&this.config.max||null}},mounted:function(){this.config&&this.updateFieldRules()},methods:{onInput:function(n){this.$emit("input",n)},updateFieldRules:function(){this.config&&(Boolean(this.config.required)&&this.rules.push(l.a.required),"number"==typeof this.config.max&&this.rules.push(l.a.maxLengthValidator(this.config.max)),"number"==typeof this.config.min&&this.rules.push(l.a.minLengthValidator(this.config.min)))}}},k={name:"integer-field",props:["config","value"],data:function(){return{rules:[]}},computed:{displayName:function(){return this.config&&this.config.displayName||""},disabled:function(){return this.config&&this.config.disabled||!1},_value:{get:function(){return this.value},set:function(n){return n}},defaultValue:function(){return this.config&&this.config.default||null},options:function(){return this.config&&this.config.options||[]},minVal:function(){return this.config&&this.config.min?this.config.min:-1/0},maxVal:function(){return this.config&&this.config.max?this.config.max:1/0}},mounted:function(){this.config&&this.updateFieldRules()},methods:{onInput:function(n){this.$emit("input",+n)},onIntegerKeyDown:function(n){"."===n.key&&n.preventDefault()},updateFieldRules:function(){this.config&&(this.config.type===y&&this.rules.push(l.a.number),this.config.type===Boolean(this.config.required)&&this.rules.push(l.a.required))}}},I={name:"dynamic-form-field",props:["config","value"],components:{Array:d,Boolean:p,StringField:Object(f.a)(w,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("v-text-field",{attrs:{dense:"",rules:n.rules,items:n.options,disabled:n.disabled,label:n.displayName},on:{input:function(t){return n.onInput(t)}},model:{value:n._value,callback:function(t){n._value=t},expression:"_value"}})}),[],!1,null,null,null).exports,IntegerField:Object(f.a)(k,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("v-text-field",{attrs:{dense:"",type:"number",min:n.minVal,max:n.maxVal,rules:n.rules,items:n.options,disabled:n.disabled,step:1,label:n.displayName,default:n.defaultValue},on:{keydown:function(t){return n.onIntegerKeyDown(t)},input:function(t){return n.onInput(t)}},model:{value:n._value,callback:function(t){n._value=t},expression:"_value"}})}),[],!1,null,null,null).exports,FloatField:C},computed:{_value:function(){return this.value},type:function(){return this.config&&this.config.type||null},isArray:function(){return this.type===v},isBoolean:function(){return this.type===x},isString:function(){return this.type===b},isInteger:function(){return this.type===y},isFloat:function(){return this.type===_}},methods:{onInput:function(n){this.$emit("input",n)}}},N=Object(f.a)(I,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",[n.isArray?e("array",{attrs:{value:n._value,config:n.config},on:{input:function(t){return n.onInput(t)}}}):n._e(),n._v(" "),n.isBoolean?e("boolean",{attrs:{value:n._value,config:n.config},on:{input:function(t){return n.onInput(t)}}}):n._e(),n._v(" "),n.isString?e("string-field",{attrs:{value:n._value,config:n.config},on:{input:function(t){return n.onInput(t)}}}):n._e(),n._v(" "),n.isFloat?e("float-field",{attrs:{value:n._value,config:n.config},on:{input:function(t){return n.onInput(t)}}}):n._e(),n._v(" "),n.isInteger?e("integer-field",{attrs:{value:n._value,config:n.config},on:{input:function(t){return n.onInput(t)}}}):n._e()],1)}),[],!1,null,null,null).exports;var S=e("yw9G"),P={name:"dynamic-form",props:["onCancel","onSave","title","initialFormValues","moduleName","isEdit","parentModulePath"],components:{DynamicFormField:N},data:function(){return{isSaving:!1,modulePath:null,isFormConfigured:!1,formValues:{},configs:{},valid:!1,isFetchingSchema:!1,rules:{required:l.a.required}}},mounted:function(){(this.isEdit||this.parentModulePath)&&(this.modulePath=this.initialFormValues.plugin_name,this.onPluginChange(this.modulePath)),this.initialFormValues&&(this.formValues=a()({},this.initialFormValues)),this.updateFormValues()},computed:{isSelectPluginDisabled:function(){return!!this.parentModulePath||this.isEdit},plugins:function(){return this.$store.state.rfPlugins.filter((function(n){return n&&n.has_network&&n.enabled}))},_configs:function(){var n=this;return o()(this.configs||{}).reduce((function(t,e){var i,u;return t[e]=a()({},n.configs[e],{displayName:(i=n.configs[e].display_name,u=e,i||u.split("_").map((function(n){return function(n){return n.split("").map((function(n,t){return t?n.toLowerCase():n.toUpperCase()})).join("")}(n)})).join(" ")),disabled:"plugin_name"==e}),t}),{})}},methods:{cleanUp:function(){this.formValues={},"function"==typeof this.onCancel&&this.onCancel()},onInputChange:function(n,t){this.formValues[n]=t},updateFormValues:function(){var n=this;this._configs&&(this.formValues=o()(this._configs).reduce((function(t,e){var i,u,r;return t[e]=(i=n._configs[e].type,u=n.initialFormValues[e],r=n._configs[e].default,u||(!u&&r?r:V[i])),t}),{}),this.isFormConfigured=!0)},onPluginChange:function(n){var t=this;n&&this.moduleName&&(this.isFetchingSchema=!0,S.e(n,this.moduleName).then((function(n){t.configs=n,t.updateFormValues()})).finally((function(){t.isFetchingSchema=!1})))},onSubmit:function(){var n=this;this.$refs.form.validate()&&(this.isSaving=!0,this.formValues=a()({},this.initialFormValues,this.formValues),"function"==typeof this.onSave&&this.onSave(this.formValues).then((function(){n.$toasted.show("Successfully "+(n.isEdit?"updated":"created")+" "+n.title+"."),n.cleanUp(!0)})).catch((function(){n.$toasted.show("Failed to "+(n.isEdit?"update":"create")+" "+n.title+".",{type:"error"})})).finally((function(){n.isSaving=!1})))}}},$=Object(f.a)(P,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-card",[e("v-card-title",{staticClass:"mb-5"},[e("span",{staticClass:"headline"},[n._v(n._s(n.title))])]),n._v(" "),e("v-card-text",[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:n.valid,callback:function(t){n.valid=t},expression:"valid"}},[n.isFormConfigured?e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{dense:"",cols:"12"}},[e("v-select",{attrs:{dense:"",rules:[n.rules.required],items:n.plugins,"item-text":"name",disabled:n.isSelectPluginDisabled,"item-value":"module_path",label:"Select Plugin",loading:n.isFetchingSchema},on:{change:n.onPluginChange},model:{value:n.modulePath,callback:function(t){n.modulePath=t},expression:"modulePath"}})],1),n._v(" "),n._l(Object.keys(n._configs),(function(t){return e("v-col",{key:t,attrs:{dense:"",cols:"12"}},[e("dynamic-form-field",{attrs:{config:n._configs[t],value:n.formValues[t]},on:{input:function(e){return n.onInputChange(t,e)}}})],1)}))],2):n._e(),n._v(" "),e("v-spacer")],1)],1),n._v(" "),e("v-card-actions",{staticClass:"align-end justify-end"},[n.onCancel?e("v-btn",{attrs:{color:"darken-1",text:""},on:{click:n.onCancel}},[n._v(" Cancel ")]):n._e(),n._v(" "),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:n.isSaving},on:{click:function(t){return n.onSubmit(n.formValues)}}},[n._v(" Save ")])],1)],1)}),[],!1,null,null,null);t.a=$.exports},VNy9:function(n,t,e){"use strict";var i={name:"breadcrumbs",props:["items"]},u=e("psIG"),r=Object(u.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:n.items},scopedSlots:n._u([{key:"item",fn:function(t){var i=t.item;return[e("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:i.link,exact:""}},[n._v(" "+n._s(i.text)+" ")])]}}])})}),[],!1,null,"04244946",null);t.a=r.exports},Zepl:function(n,t,e){"use strict";t.a={maxLengthValidator:function(n){return function(t){return"string"==typeof t&&t.length<=n||"Value should be of "+n+" length."}},minLengthValidator:function(n){return function(t){return"string"==typeof t&&t.length>=n||"Value should be of at least "+n+" length."}},required:function(n){return!!n||"Required"},number:function(n){return!function(n){return isNaN(+n)}(n)||"Value should be a number"},isIpAddress:function(n){return!(!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t=n)&&!/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(t)&&"localhost"!==(""+t).toLowerCase())||"Invalid IP Address";var t},isJsonString:function(n){return function(n){try{JSON.parse(n)}catch(n){return!1}return!0}(n)||"Data should be in a valid JSON format"}}},oCli:function(n,t,e){"use strict";function i(n,t){return n?t+"/"+n:t}t.a={rfPing:function(n){return i(n,"rf-ping")},rfFNCStreams:function(n){return i(n,"rf-fnc")},rfCommands:function(n){return i(n,"/rf-commands")},rfLogin:function(n){return i(n,"/rf-login")},rfSchedules:function(n){return i(n,"/rf-schedules")},rfFlowNetwork:function(n){return i(n,"/rf-flow-network")},rfFlowNetworkClone:function(n){return i(n,"/rf-flow-network-clone")},rfJobs:function(n){return i(n,"/rf-jobs")},rfNetworks:function(n){return i(n,"/rf-networks")},rfPoints:function(n){return i(n,"/rf-points")},rfProducers:function(n){return i(n,"/rf-producers")},rfConsumers:function(n){return i(n,"/rf-consumers")},rfWriters:function(n){return i(n,"/rf-writers")},rfWriterClones:function(n){return i(n,"/rf-writer-clones")},rfStreams:function(n){return i(n,"/rf-streams")},rfStreamsClone:function(n){return i(n,"/rf-streams-clone")},rfDevices:function(n){return i(n,"/rf-devices")},rfWriterActions:function(n){return i(n,"/rf-writer-actions")}}},yw9G:function(n,t,e){"use strict";e.d(t,"c",(function(){return s})),e.d(t,"b",(function(){return a})),e.d(t,"e",(function(){return l})),e.d(t,"d",(function(){return c})),e.d(t,"a",(function(){return f})),e.d(t,"f",(function(){return d}));var i=e("uzYq"),u=e("NWgQ"),r=e.n(u),o="rf-plugins",s=function(n){var t=o;return n&&(t=t+"?"+r.a.stringify(n)),i.a.get(""+t)},a=function(){return s({has_network:!0})},l=function(n,t){return i.a.get(o+"/schema?modulePath="+n+"&moduleName="+t)},c=function(n){return i.a.get(o+"/config/"+n)},f=function(n,t){return i.a.post(o+"/enable/"+n,t)},d=function(n,t){return i.a.post(o+"/config/"+n,t)}}}]);
//# sourceMappingURL=4.f045bdfca0d6158d1388.js.map