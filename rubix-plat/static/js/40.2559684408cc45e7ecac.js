(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{CvQj:function(t,e,n){"use strict";n.r(e);var r=n("Kz1y"),i=n.n(r),o=n("oGAK"),s={network:o.a.rfNetworks,devices:function(t){return o.a.rfDevices.replace(":networkId",t)},points:function(t,e){return o.a.rfPoints.replace(":networkId",t).replace(":deviceId",e)}},c=n("Ui9F"),u=n("wffz"),a={data:function(){return{isFetchingData:!1,currentUrl:"",search:"",networks:[],routeLinks:[]}},components:{TooltipIconButton:c.a},mounted:function(){this.fetchNetworkDevices()},watch:{"$route.path":{handler:function(t){this.currentUrl=t},deep:!0,immediate:!0}},methods:{fetchNetworkDevices:function(){var t=this;this.isFetchingData=!0,u.a.fetch({with_devices:!0}).then((function(e){t.networks=e,t.constructRouteLinks()})).finally((function(){t.isFetchingData=!1}))},routeLink:function(t,e,n){return{id:t,name:n+" "+e}},networkDevicesLink:function(t){return s.devices(t)},devicePointsLink:function(t,e){return s.points(t,e)},constructRouteLinks:function(){this.routeLinks=[{id:1,name:"All Networks",type:"network",link:s.network,children:this.getTreeViewData(this.networks),count:this.networks.length}]},getTreeViewData:function(t){var e=this;return t.map((function(t){return i()({},e.routeLink(t.uuid,t.name,"Network:"),{link:e.networkDevicesLink(t.uuid),type:"devices",count:t.devices&&t.devices.length,children:t.devices&&t.devices.map((function(n){return i()({},e.routeLink(n.uuid,n.name,"Device:"),{type:"points",link:e.devicePointsLink(t.uuid,n.uuid)})}))})}))}}},l=n("psIG"),f={name:"rf-network-page",components:{RfNetworkNavigation:Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full-height navigation-wrapper"},[n("v-row",{attrs:{dense:"",align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-text-field",{staticClass:"mb-1",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"",loading:t.isFetchingData,"hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-col",{attrs:{cols:"2"}},[n("tooltip-icon-button",{attrs:{btnColor:"default",btnIcon:"mdi-sync",btnTooltip:"Refresh Tree",buttonSize:"medium",onClick:function(){return t.fetchNetworkDevices()}}})],1)],1),t._v(" "),t.routeLinks.length>0?n("v-treeview",{staticClass:"text-left network-nav",attrs:{items:t.routeLinks,search:t.search,dense:"","open-all":"",hoverable:""},scopedSlots:t._u([{key:"label",fn:function(e){var r=e.item;return[n("div",{staticClass:"navigation-item-wrapper"},[n("router-link",{staticClass:"text-style",attrs:{to:r.link,"active-class":t.currentUrl==r.link?"active-item":""}},[t._v("\n          "+t._s(r.name)+"\n        ")]),t._v(" "),r.count?n("span",[t._v(t._s(r.count))]):t._e()],1)]}}],null,!1,481752972)}):t._e()],1)}),[],!1,null,null,null).exports}},v=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{xs:"12",md:"4",lg:"3",sm:"4",xl:"2"}},[n("rf-network-navigation")],1),t._v(" "),n("v-col",{attrs:{xs:"12",md:"8",lg:"9",sm:"8",xl:"10"}},[n("router-view")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports},DeKB:function(t,e,n){"use strict";var r=n("Zv/C"),i=n.n(r),o=n("uzYq"),s=n("NWgQ"),c=n.n(s),u=n("PWxN"),a=n.n(u),l=function(){var t=this;this.uri="",this.evaluateUri=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof t.uri?t.uri(e):uri},this.fetch=function(e){var n=t.evaluateUri(),r=null;return e&&e.hasOwnProperty("id")?(r=e.id,e=a()(e,"id")):e&&e.hasOwnProperty("uuid")&&(r=e.uuid,e=a()(e,"uuid")),e&&(n=n+"?"+c.a.stringify(e)),r?t.fetchById(r,e):o.a.get(n)},this.fetchById=function(e,n){var r=t.evaluateUri(e);return n&&(r=r+"?"+c.a.stringify(n)),o.a.get(r)},this.remove=function(){var e=t.evaluateUri();return o.a.delete(e)},this.removeById=function(e){var n=t.evaluateUri(e);return o.a.delete(n)},this.create=function(e){var n=t.evaluateUri();return o.a.post(n,e)},this.patch=function(e,n){var r=t.evaluateUri(e);return o.a.patch(r,n)},this.update=function(e,n){var r=t.evaluateUri(e);return o.a.put(r,n)}};e.a=function t(e){i()(this,t),l.call(this),this.uri=e}},Ui9F:function(t,e,n){"use strict";var r={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize","disabled"]},i=n("psIG"),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return["medium"==t.buttonSize?n("v-btn",t._g(t._b({attrs:{disabled:t.disabled,icon:"",medium:"",color:t.btnColor},on:{click:t.onClick}},"v-btn",i,!1),r),[n("v-icon",{attrs:{medium:"",dark:""}},[t._v(" "+t._s(t.btnIcon)+" ")])],1):n("v-btn",t._g(t._b({attrs:{disabled:t.disabled,icon:"",small:"",color:t.btnColor},on:{click:t.onClick}},"v-btn",i,!1),r),[n("v-icon",{attrs:{small:"",dark:""}},[t._v(" "+t._s(t.btnIcon)+" ")])],1)]}}])},[t._v(" "),n("span",{staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.btnTooltip)}})])}),[],!1,null,null,null);e.a=o.exports},oCli:function(t,e,n){"use strict";function r(t,e){return t?e+"/"+t:e}e.a={rfFNCStreams:function(t){return r(t,"rf-fnc")},rfCommands:function(t){return r(t,"/rf-commands")},rfLogin:function(t){return r(t,"/rf-login")},rfSchedules:function(t){return r(t,"/rf-schedules")},rfFlowNetwork:function(t){return r(t,"/rf-flow-network")},rfFlowNetworkClone:function(t){return r(t,"/rf-flow-network-clone")},rfJobs:function(t){return r(t,"/rf-jobs")},rfNetworks:function(t){return r(t,"/rf-networks")},rfPoints:function(t){return r(t,"/rf-points")},rfProducers:function(t){return r(t,"/rf-producers")},rfConsumers:function(t){return r(t,"/rf-consumers")},rfWriters:function(t){return r(t,"/rf-writers")},rfWriterClones:function(t){return r(t,"/rf-writer-clones")},rfStreams:function(t){return r(t,"/rf-streams")},rfStreamsClone:function(t){return r(t,"/rf-streams-clone")},rfDevices:function(t){return r(t,"/rf-devices")},rfWriterActions:function(t){return r(t,"/rf-writer-actions")}}},wffz:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("DeKB"),i=n("oCli"),o=new r.a(i.a.rfNetworks)}}]);
//# sourceMappingURL=40.2559684408cc45e7ecac.js.map