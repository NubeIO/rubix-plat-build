(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+SqX":function(e,t,i){"use strict";var s={name:"page-title",props:["title"]},a=i("psIG"),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",{staticClass:"text-h5 text-left py-3"},[i("span",[e._v(e._s(e.title))]),e._v(" "),e._t("refreshIcon"),e._v(" "),e._t("titleActions"),e._v(" "),e._t("spinner")],2)}),[],!1,null,null,null);t.a=n.exports},0:function(e,t){},1:function(e,t){},2:function(e,t){},"3aQG":function(e,t,i){"use strict";i.r(t);var s=i("+SqX"),a=i("06Hw"),n=i.n(a),r=i("YYXh"),o=i.n(r),l=i("tZmG"),c=i.n(l),u=i("TcPG"),d=i.n(u),m=i("Kz1y"),f=i.n(m),v=i("7Ipj"),h=i("lkCm"),g=i("A5Vd"),p=i("OBCi"),b=i.n(p),_=i("uzYq"),S=function(e){return"/user-management"+(e?""+e:"")},x=function(e){return S("/users")+(e?"/"+e:"")},y=function(e){return b.a.all(e.map((function(e){return function(e){return _.a.delete(x(e))}(e)})))},C=function(e){return _.a.post(S("/verify-user"),e)},D=function(e){return"/user-sites"+(e?"/"+e:"")},I=function(){return _.a.get(D())},k=function(e,t){return b.a.all(t.map((function(t){return i={user_uuid:e,site_uuid:t},_.a.post(D()+"/mapping",i);var i})))},w=function(e,t){return b.a.all(t.map((function(t){return function(e){return _.a.post(D()+"/remove-mapping",e)}({user_uuid:e,site_uuid:t.site_uuid,user_site_mapping_uuid:t.user_site_mapping_uuid})})))},N={name:"map-user-site-form",props:["sites","user","onClose","handleSubmit"],data:function(){return{valid:!1,isSubmitting:!1,search:"",searchItems:[],formErrorMessage:"",selectedSites:[],headers:[{text:"Site Name",align:"start",color:"primary",sortable:!0,value:"name"},{text:"City",align:"center",sortable:!0,value:"city"},{text:"Country",align:"center",sortable:!0,value:"country"},{text:"Timezone",align:"right",sortable:!0,value:"timezone",default:"-"}]}},computed:{siteItems:function(){var e=this.user.sites.map((function(e){return e.site_uuid}));return this.sites.filter((function(t){return!~e.indexOf(t.uuid)}))}},methods:{onSubmit:function(){var e=this;"function"==typeof this.handleSubmit&&(this.isSubmitting=!0,this.handleSubmit(this.user,this.selectedSites.map((function(e){return e.uuid}))).catch((function(e){})).finally((function(){e.isSubmitting=!1})))},onSearchChange:function(){this.searchItems=this.search.split(",").map((function(e){return e.trim()}))},filterCriteria:function(e,t,i){return null!=e&&this.searchItems&&Array.isArray(this.searchItems)&&this.searchItems.length>0&&this.searchItems.every((function(e){return"string"==typeof e}))&&this.searchItems.some((function(t){return-1!==e.toString().toLowerCase().indexOf(t.toLowerCase())}))}}},F=i("psIG"),U=Object(F.a)(N,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"map-user-site-form"},[i("v-card-title",[i("span",[e._v("Assign Site to "),i("span",{staticClass:"nubeGreen--text"},[e._v(e._s(e.user.username))])])]),e._v(" "),i("v-card-text",{staticClass:"pa-0"},[i("v-container",[e.siteItems.length>0?i("v-text-field",{staticClass:"pa-5",attrs:{"append-icon":"mdi-magnify",label:"Search selected sites","single-line":"","hide-details":""},on:{input:e.onSearchChange},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e(),e._v(" "),e.siteItems.length>0?i("v-data-table",{attrs:{"show-select":"",headers:e.headers,search:e.search,"custom-filter":e.filterCriteria,"item-key":"uuid","items-per-page":10,"hide-default-footer":e.siteItems.length<10,items:e.siteItems},model:{value:e.selectedSites,callback:function(t){e.selectedSites=t},expression:"selectedSites"}}):e._e(),e._v(" "),0===e.siteItems.length?i("v-alert",{staticClass:"mb-0 text-left",attrs:{dense:"",type:"info"}},[e._v("\n        All location sites have been assigned to "+e._s(e.user.username)+"\n      ")]):e._e()],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",loading:e.isSubmitting,color:"nubeGreen",disabled:!e.selectedSites.length},on:{click:e.onSubmit}},[e._v("\n      Assign\n    ")]),e._v(" "),i("v-btn",{staticClass:"mr-1 btn-height-22",attrs:{"x-small":"",text:""},on:{click:e.onClose}},[e._v(" Cancel ")])],1)],1)}),[],!1,null,"07f8e00f",null).exports,E={name:"map-user-site-form",props:["sites","user","onClose","handleSubmit","sites-map"],data:function(){return{valid:!1,isSubmitting:!1,search:"",searchItems:[],formErrorMessage:"",selectedSites:[],selectedItems:[],headers:[{text:"Site Name",align:"start",color:"primary",sortable:!0,value:"name"},{text:"City",align:"center",sortable:!0,value:"city"},{text:"Country",align:"center",sortable:!0,value:"country"},{text:"Timezone",align:"right",sortable:!0,value:"timezone",default:"-"}]}},computed:{userSelectedSites:function(){var e=this;return this.user.sites.map((function(t){return e.sitesMap&&e.sitesMap[t.site_uuid]&&f()({},e.sitesMap[t.site_uuid],{userSiteUUID:t.uuid})||null}))}},methods:{onSubmit:function(){var e=this;"function"==typeof this.handleSubmit&&(this.isSubmitting=!0,this.handleSubmit(this.user,this.selectedItems.map((function(e){return{site_uuid:e.uuid,user_site_mapping_uuid:e.userSiteUUID}}))).catch((function(e){})).finally((function(){e.isSubmitting=!1})))},onSearchChange:function(){this.searchItems=this.search.split(",").map((function(e){return e.trim()}))},filterCriteria:function(e,t,i){return null!=e&&this.searchItems&&Array.isArray(this.searchItems)&&this.searchItems.length>0&&this.searchItems.every((function(e){return"string"==typeof e}))&&this.searchItems.some((function(t){return-1!==e.toString().toLowerCase().indexOf(t.toLowerCase())}))}}},$=Object(F.a)(E,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",[i("v-card-title",[i("span",[e._v("Deassign sites of "),i("span",{staticClass:"red--text light"},[e._v(e._s(e.user.username))])])]),e._v(" "),i("v-card-text",{staticClass:"pa-0"},[i("v-container",[e.userSelectedSites.length>0?i("v-text-field",{staticClass:"pa-5",attrs:{"append-icon":"mdi-magnify",label:"Search selected sites","single-line":"","hide-details":""},on:{input:e.onSearchChange},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e(),e._v(" "),e.userSelectedSites.length>0?i("v-data-table",{attrs:{"show-select":"",headers:e.headers,search:e.search,"custom-filter":e.filterCriteria,"item-key":"uuid","items-per-page":10,"hide-default-footer":e.userSelectedSites.length<10,items:e.userSelectedSites},model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}}):i("v-alert",{staticClass:"mb-0 text-left",attrs:{dense:"",type:"info"}},[e._v("\n        No sites are assigned to "+e._s(e.user.username)+"\n      ")])],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"blue darken-1",loading:e.isSubmitting,disabled:!e.selectedItems.length},on:{click:e.onSubmit}},[e._v("\n      Deassign\n    ")]),e._v(" "),i("v-btn",{staticClass:"mr-1 btn-height-22",attrs:{"x-small":"",text:""},on:{click:e.onClose}},[e._v("Cancel")])],1)],1)}),[],!1,null,null,null).exports,M=i("Ui9F"),O={assignSite:"assignSite",deassignSite:"deassignSite",deleteUsers:"deleteUsers"},z={name:"discover-devices",components:{GridToolbar:v.a,MapUserSiteForm:U,DeassignSiteForm:$,ConfirmDialog:h.a,TooltipIconButton:M.a},data:function(){var e,t;return t={search:"",searchItems:[],userSites:[],isDeletingUsers:!1,userSitesMap:null,selectedItem:{},items:[],dialog:!1,isFetchingUsers:!1,selectedItems:[],isVerifying:!1,filters:{isUnverified:!1},dialogNames:f()({},O)},d()(t,"dialog",(e={},d()(e,O.assignSite,!1),d()(e,O.deassignSite,!1),d()(e,O.deleteUsers,!1),e)),d()(t,"userVerificationState",f()({},g.m)),d()(t,"headers",[{text:"First Name",align:"start",sortable:!0,value:"first_name"},{text:"Last Name",align:"center",value:"last_name",sortable:!0},{text:"Username",align:"center",value:"username",sortable:!0},{text:"Email",align:"center",value:"email",sortable:!0},{text:"Verification Status",align:"center",value:"state",sortable:!0},{text:"Assigned Sites",align:"center",value:"assignedSites",width:"20ch"},{text:"Action",align:"center",value:"actions"}]),d()(t,"tableProps",f()({},g.d)),t},computed:{appliedFilterCount:function(){var e=this;return c()(this.filters).reduce((function(t,i){return e.filters[i]&&t++,t}),0)},dataItems:function(){var e=this;return this.userSitesMap,(this.items||[]).map((function(t){return f()({},t,{isVerifying:!1,userSite:e.getSiteNamesForUser(t),assignedSitesNumber:(t.sites||[]).length})})).filter((function(t){return!(e.filters.isUnverified&&t.state!==g.m.UNVERIFIED)}))}},mounted:function(){this.initialize()},methods:{getSiteNamesForUser:function(e){var t=this,i=e.sites||[];return i.length?this.userSitesMap?this.userSitesMap?i.map((function(e){return t.userSitesMap[e.site_uuid]})).filter((function(e){return e})).map((function(e){return e.name})).join(", "):void 0:"Loading...":"Not assigned"},initialize:function(){var e=this;return o()(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isFetchingUsers=!0,t.next=3,e.fetchUsers();case 3:return t.next=5,e.fetchUserSites();case 5:e.isFetchingUsers=!1;case 6:case"end":return t.stop()}}),t,e)})))()},fetchUserSites:function(){var e=this;return I().then((function(t){e.userSites=t,e.userSitesMap=e.userSites.reduce((function(e,t){return e[t.uuid]=f()({},t),e}),{})}))},toggleDialog:function(e,t){this.dialog[e]=!this.dialog[e],this.dialog[e]?this.selectedItem=t:this.selectedItem=null},closeDialog:function(e){this.dialog[e]=!1,this.selectedItem={}},fetchUsers:function(){var e=this;return _.a.get(x()).then((function(t){e.items=t})).catch((function(e){}))},verifyUsers:function(){var e,t=this,i=this.selectedItems.filter((function(e){return e.state==g.m.UNVERIFIED}));return i.length?(this.isVerifying=!0,(e=i,b.a.all(e.map((function(e){return C(e).catch((function(e){return e}))})))).then((function(){t.$toasted.show("Successfully verified #"+i.length+" number of user(s)."),t.fetchUsers()})).finally((function(){t.selectedItems=[]}))):(this.selectedItems=[],this.$toasted.show("Please select unverified users!",{type:"info"}))},verifyUser:function(e){var t=this;return e.isVerifying=!0,C({username:e.username}).then((function(){t.$toasted.show(e.username+" verified"),t.selectedItems=[],t.fetchUsers()})).catch((function(e){})).finally((function(){e.isVerifying=!1}))},assignSite:function(e,t){var i=this,s=e.uuid;return k(s,t).then((function(){i.$toasted.show("Successfully assigned #"+t.length+" number of sites to user: "+e.username),i.closeDialog(i.dialogNames.assignSite),i.fetchUsers()}))},deassignSite:function(e,t){var i=this,s=e.uuid;return w(s,t).then((function(){i.$toasted.show("Successfully deassigned sites of user: "+e.username),i.closeDialog(i.dialogNames.deassignSite),i.fetchUsers()}))},deleteUsers:function(){var e=this,t=this.selectedItems.map((function(e){return e.uuid}));return this.isDeletingUsers=!0,y(t).then((function(){e.$toasted.show("Successfully deleted # "+t.length+" number of users."),e.closeDialog(e.dialogNames.deleteUsers),e.selectedItems=[],e.fetchUsers()})).catch((function(e){})).finally((function(){e.isDeletingUsers=!1}))},onSearchChange:function(){this.searchItems=this.search.split(",").map((function(e){return e.trim()}))},filterCriteria:function(e,t,i){return null!=e&&this.searchItems&&Array.isArray(this.searchItems)&&this.searchItems.length>0&&this.searchItems.every((function(e){return"string"==typeof e}))&&this.searchItems.some((function(t){return-1!==e.toString().toLowerCase().indexOf(t.toLowerCase())}))}}},A=Object(F.a)(z,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",{staticClass:"mr-6"},[e._v("Users")]),e._v(" "),i("v-btn",{staticClass:"mr-3 btn-height-22 white--text",attrs:{disabled:0==e.selectedItems.length,"x-small":"",color:"nubeGreen"},on:{click:function(){return e.verifyUsers(e.selectedItems)}}},[e._v("\n      Verify User\n      "),i("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" mdi-check ")])],1),e._v(" "),i("v-btn",{staticClass:"mr-3 btn-height-22 white--text",attrs:{disabled:0==e.selectedItems.length,"x-small":"",color:"red darken-1"},on:{click:function(){return e.toggleDialog(e.dialogNames.deleteUsers)}}},[e._v("\n      Delete User(s)\n      "),i("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" mdi-delete ")])],1),e._v(" "),i("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{input:e.onSearchChange},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),i("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[i("v-btn",e._g(e._b({attrs:{icon:"",color:e.appliedFilterCount>0?"blue":""}},"v-btn",a,!1),s),[i("v-icon",[e._v("mdi-filter")])],1)]}}])},[e._v(" "),i("v-list",{attrs:{dense:""}},[i("v-subheader",[e._v("Filters")]),e._v(" "),i("v-list-item",[i("v-list-item-title",[i("v-checkbox",{staticClass:"mt-0",attrs:{"hide-details":"",label:"Unverified Users"},model:{value:e.filters.isUnverified,callback:function(t){e.$set(e.filters,"isUnverified",t)},expression:"filters.isUnverified"}})],1)],1)],1)],1),e._v(" "),i("v-spacer")],1),e._v(" "),i("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":"","item-key":"uuid",search:e.search,headers:e.headers,items:e.dataItems,loading:e.isFetchingUsers,"custom-filter":e.filterCriteria,"footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE},scopedSlots:e._u([{key:"item.actions",fn:function(t){var s=t.item;return[i("div",[i("tooltip-icon-button",{attrs:{btnIcon:"mdi-map-marker-check",btnColor:"nubeGreen",btnTooltip:"Assign site",buttonSize:"medium",onClick:function(){return e.toggleDialog(e.dialogNames.assignSite,s)},loading:s.isVerifying}}),e._v(" "),i("tooltip-icon-button",{attrs:{btnIcon:"mdi-map-marker-remove-variant",btnTooltip:"Deassign site",btnColor:"red darken-1",buttonSize:"medium",onClick:function(){return e.toggleDialog(e.dialogNames.deassignSite,s)},loading:s.isVerifying}})],1)]}},{key:"item.state",fn:function(t){var s=t.item;return[i("span",{staticClass:"font-weight-medium"},["VERIFIED"===s.state?i("v-chip",{attrs:{small:"",dark:"",color:"darken-2 blue"}},[e._v("VERIFIED")]):e._e(),e._v(" "),"UNVERIFIED"===s.state?i("v-chip",{attrs:{small:"",dark:"",color:"darken-1 brown"}},[e._v("UNVERIFIED")]):e._e()],1)]}},{key:"item.assignedSites",fn:function(t){var s=t.item;return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[i("p",e._g(e._b({staticClass:"mb-0 text-ellipses text-center"},"p",n,!1),a),[i("span",[e._v(e._s(s.userSite))])])]}}],null,!0)},[e._v(" "),i("span",[e._v(e._s(s.userSite))])])]}}],null,!0),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}}),e._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.deassignSite],callback:function(t){e.$set(e.dialog,e.dialogNames.deassignSite,t)},expression:"dialog[dialogNames.deassignSite]"}},[e.dialog[e.dialogNames.deassignSite]?i("deassign-site-form",{attrs:{sites:e.userSites,"sites-map":e.userSitesMap,user:e.selectedItem,handleSubmit:e.deassignSite,onClose:function(){return e.closeDialog(e.dialogNames.deassignSite)}}}):e._e()],1),e._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.assignSite],callback:function(t){e.$set(e.dialog,e.dialogNames.assignSite,t)},expression:"dialog[dialogNames.assignSite]"}},[e.dialog[e.dialogNames.assignSite]?i("map-user-site-form",{attrs:{sites:e.userSites,user:e.selectedItem,handleSubmit:e.assignSite,onClose:function(){return e.closeDialog(e.dialogNames.assignSite)}}}):e._e()],1),e._v(" "),i("confirm-dialog"),e._v(" "),i("confirm-dialog",{attrs:{"is-open":e.dialog[e.dialogNames.deleteUsers],"on-close":function(){return e.closeDialog(e.dialogNames.deleteUsers)},"on-confirm":e.deleteUsers,loading:e.isDeletingUsers,"dialog-text":"Are you sure to delete User(s)?"}})],1)}),[],!1,null,"a422ff9a",null).exports,q=i("dJcQ"),T=i.n(q),P={props:["site","isEditForm","onClose","handleSave"],data:function(){return{valid:!1,isSubmitting:!1,formErrorMessage:"",formData:{name:"",address:"",city:"",state:"",zip:"",country:"",lat:"",lon:"",time_zone:""},timezones:[],rules:{required:function(e){return!!e||"Required."}}}},created:function(){this.timezones=T.a.tz.names(),this.isEditForm&&this.site&&(this.formData.name=this.site.name,this.formData.address=this.site.address,this.formData.city=this.site.city,this.formData.state=this.site.state,this.formData.zip=this.site.zip,this.formData.country=this.site.country,this.formData.lat=this.site.lat,this.formData.lon=this.site.lon,this.formData.time_zone=this.site.time_zone)},methods:{onSubmit:function(){var e=this;this.$refs.form.validate()&&"function"==typeof this.handleSave&&(this.isSubmitting=!0,this.handleSave(this.formData,this.isEditForm?this.site.uuid:void 0).catch((function(t){t&&t.message&&(e.formErrorMessage=t.message)})).finally((function(){e.isSubmitting=!1})))}}},K=Object(F.a)(P,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",[i("v-card-title",[e._v("Site Form")]),e._v(" "),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{dense:"",label:"Site Name",required:"",rules:[e.rules.required]},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{dense:"",label:"Street Address",required:"",rules:[e.rules.required]},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{dense:"",label:"City/Town",required:"",rules:[e.rules.required]},model:{value:e.formData.city,callback:function(t){e.$set(e.formData,"city",t)},expression:"formData.city"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{dense:"",label:"State",required:"",rules:[e.rules.required]},model:{value:e.formData.state,callback:function(t){e.$set(e.formData,"state",t)},expression:"formData.state"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{dense:"",label:"Zip/Postcode",required:"",rules:[e.rules.required]},model:{value:e.formData.zip,callback:function(t){e.$set(e.formData,"zip",t)},expression:"formData.zip"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{dense:"",label:"Country",required:"",rules:[e.rules.required]},model:{value:e.formData.country,callback:function(t){e.$set(e.formData,"country",t)},expression:"formData.country"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{dense:"",label:"Latitude",required:"",rules:[e.rules.required]},model:{value:e.formData.lat,callback:function(t){e.$set(e.formData,"lat",t)},expression:"formData.lat"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{dense:"",label:"Longitude",required:"",rules:[e.rules.required]},model:{value:e.formData.lon,callback:function(t){e.$set(e.formData,"lon",t)},expression:"formData.lon"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-autocomplete",{attrs:{dense:"",required:"",label:"Timezone",rules:[e.rules.required],items:e.timezones,clearable:""},model:{value:e.formData.time_zone,callback:function(t){e.$set(e.formData,"time_zone",t)},expression:"formData.time_zone"}})],1)],1)],1),e._v(" "),e.formErrorMessage?i("v-alert",{staticClass:"text-left",attrs:{dense:"",outlined:"",type:"error"}},[e._v("\n        "+e._s(e.formErrorMessage)+"\n      ")]):e._e()],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"blue darken-1",loading:e.isSubmitting,disabled:!e.valid},on:{click:e.onSubmit}},[e._v("Save")]),e._v(" "),i("v-btn",{staticClass:"mr-1 btn-height-22",attrs:{"x-small":"",text:""},on:{click:e.onClose}},[e._v("Cancel")])],1)],1)}),[],!1,null,null,null).exports,j={siteDialog:"siteDialog",removeSite:"remove",editSiteDialog:"editSiteDialog"},R={name:"user-site-grid",components:{GridToolbar:v.a,TooltipIconButton:M.a,ConfirmDialog:h.a,UserSiteForm:K},data:function(){var e,t;return t={search:"",searchItems:[],site:{},siteDialog:!1,isDeletingSite:!1,items:[],dialog:!1,selectedApp:{},dialogNames:f()({},j)},d()(t,"dialog",(e={},d()(e,j.siteDialog,!1),d()(e,j.removeSite,!1),d()(e,j.editSiteDialog,!1),e)),d()(t,"isFetchingSites",!1),d()(t,"selectedItems",[]),d()(t,"headers",[{text:"Site name",align:"start",sortable:!0,value:"name"},{text:"Address",align:"center",value:"address",sortable:!0},{text:"City",align:"center",value:"city",sortable:!0},{text:"State",align:"center",value:"state",sortable:!0},{text:"Zip Code",align:"center",value:"zip",sortable:!0},{text:"Latitude",align:"center",value:"lat",sortable:!0},{text:"Longitude",align:"center",value:"lon",sortable:!0},{text:"Timezone",align:"center",value:"time_zone",sortable:!0},{text:"Action",align:"right",value:"actions"}]),d()(t,"tableProps",f()({},g.d)),t},computed:{dataItems:function(){var e=this;return(this.items||[]).filter((function(t){return e.filters.isUnverified&&"UNVERIFIED"===!t.state})).map((function(e){return f()({},e,{isEditing:!1})}))}},mounted:function(){this.initialize()},methods:{initialize:function(){this.fetchSites()},toggleDialog:function(e,t){this.dialog[e]=!this.dialog[e],this.dialog[e]?this.selectedApp=t:this.selectedApp=null},removeSite:function(){var e,t=this;return this.isDeletingSite=!0,(e=this.selectedApp.uuid,_.a.delete(D(e))).then((function(){t.$toasted.show("Successfully deleted user site address."),t.closeDialog(t.dialogNames.removeSite),t.fetchSites()})).finally((function(){t.isDeletingSite=!1}))},closeDialog:function(e,t){this.dialog[e]=!1,this.selectedApp={}},createSite:function(e){var t,i=this;return(t=e,_.a.post(D(),t)).then((function(){i.$toasted.show("Successfully created user site address."),i.closeDialog(i.dialogNames.siteDialog),i.fetchSites()}))},editSite:function(e,t){var i=this;return function(e,t){return _.a.patch(D(e),t)}(t,e).then((function(){i.$toasted.show("Successfully updated user site address."),i.closeDialog(i.dialogNames.editSiteDialog),i.fetchSites()}))},fetchSites:function(){var e=this;return this.isFetchingSites=!0,I().then((function(t){e.items=t})).catch((function(e){})).finally((function(){e.isFetchingSites=!1}))},onSearchChange:function(){this.searchItems=this.search.split(",").map((function(e){return e.trim()}))},filterCriteria:function(e,t,i){return null!=e&&this.searchItems&&Array.isArray(this.searchItems)&&this.searchItems.length>0&&this.searchItems.every((function(e){return"string"==typeof e}))&&this.searchItems.some((function(t){return-1!==e.toString().toLowerCase().indexOf(t.toLowerCase())}))}}},G=Object(F.a)(R,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",{staticClass:"mr-6"},[e._v("User Sites")]),e._v(" "),i("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"pink"},on:{click:function(t){return e.toggleDialog(e.dialogNames.siteDialog)}}},[e._v("\n      New Site"),i("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" mdi-plus ")])],1),e._v(" "),i("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"mdi-magnify",label:"Search site","single-line":"","hide-details":""},on:{input:e.onSearchChange},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),i("v-spacer")],1),e._v(" "),i("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"uuid","show-select":"",loading:e.isFetchingSites,search:e.search,"custom-filter":e.filterCriteria,headers:e.headers,items:e.items,"footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE},scopedSlots:e._u([{key:"item.actions",fn:function(t){var s=t.item;return[i("tooltip-icon-button",{attrs:{btnColor:"blue darken",btnIcon:"mdi-pencil",btnTooltip:"Edit Site",onClick:function(){return e.toggleDialog(e.dialogNames.editSiteDialog,s)}}}),e._v(" "),i("tooltip-icon-button",{attrs:{btnColor:"error darken",btnIcon:"mdi-delete",btnTooltip:"Delete Site",onClick:function(){return e.toggleDialog(e.dialogNames.removeSite,s)}}})]}}],null,!0),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}}),e._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.siteDialog],callback:function(t){e.$set(e.dialog,e.dialogNames.siteDialog,t)},expression:"dialog[dialogNames.siteDialog]"}},[e.dialog[e.dialogNames.siteDialog]?i("user-site-form",{attrs:{"handle-save":e.createSite,"on-close":function(){return e.closeDialog(e.dialogNames.siteDialog)}}}):e._e()],1),e._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.editSiteDialog],callback:function(t){e.$set(e.dialog,e.dialogNames.editSiteDialog,t)},expression:"dialog[dialogNames.editSiteDialog]"}},[e.dialog[e.dialogNames.editSiteDialog]?i("user-site-form",{attrs:{"on-close":function(){return e.closeDialog(e.dialogNames.editSiteDialog)},site:e.selectedApp,"is-edit-form":!0,"handle-save":e.editSite}}):e._e()],1),e._v(" "),i("confirm-dialog",{attrs:{"is-open":e.dialog[e.dialogNames.removeSite],"on-close":function(){return e.closeDialog(e.dialogNames.removeSite)},"on-confirm":function(){return e.removeSite()},loading:e.isDeletingSite,"dialog-text":"Do you want to delete the User Site?"}})],1)}),[],!1,null,null,null).exports,V={name:"configure-fcm-key",props:["closeDialog"],data:function(){return{fcmKey:"",placeholderKey:"",valid:!1,isFetchingFCMKey:!1,isUpdatingFCMKey:!1,rules:{required:function(e){return!!e||"Required."}}}},mounted:function(){this.intialize()},methods:{intialize:function(){this.fetchFCMKey()},fetchFCMKey:function(){var e=this;return this.isFetchingFCMKey=!0,_.a.get(S("/fcm")).then((function(t){e.placeholderKey=t.key})).catch((function(e){})).finally((function(){e.isFetchingFCMKey=!1}))},updateFCMKey:function(){var e,t=this;if(this.$refs.form.validate())return this.isUpdatingFCMKey=!0,(e=this.fcmKey,_.a.put(S("/fcm"),{key:e})).then((function(){t.fetchFCMKey(),t.$refs.form.reset(),t.closeDialog()})).catch((function(e){e&&e.message&&t.$toasted.show(e.message,{type:"error"})}))}}},J=Object(F.a)(V,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{attrs:{loading:e.isFetchingFCMKey}},[i("v-card-title",[i("span",[e._v("Configure Push Notification")])]),e._v(" "),i("v-card-text",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-row",[i("v-col",{staticClass:"mt-1",attrs:{cols:"12"}},[e.placeholderKey?i("p",{staticClass:"mb-0 text-left"},[i("span",{staticClass:"caption"},[e._v("Previous Key:")]),e._v(" "),i("span",{staticClass:"white--text body-1"},[e._v(e._s(e.placeholderKey))])]):e._e(),e._v(" "),i("v-text-field",{attrs:{disabled:e.isFetchingFCMKey,label:"FCM Key",required:"",rules:[e.rules.required]},model:{value:e.fcmKey,callback:function(t){e.fcmKey=t},expression:"fcmKey"}})],1)],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Cancel ")]),e._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.updateFCMKey()}}},[e._v(" Save ")])],1)],1)}),[],!1,null,null,null).exports,L={name:"user-management",components:{PageTitle:s.a,UserManagementGrid:A,TooltipIconButton:M.a,ConfigureFcmKey:J,UserSiteGrid:G},watch:{"$route.query.tab":function(e){this.tab=this.tabs.indexOf(e)},tab:function(e,t){var i=this.$route.query.tab;if(i!==this.tabs[e]){var s=this.tabs[e];this.$router.push({path:"user-management",query:{tab:s}})}}},data:function(){return{configFCMDialog:!1,tab:0,tabs:["user-sites","app-users"]}},methods:{openFCMDialog:function(){this.configFCMDialog=!0},closeFCMDialog:function(){this.configFCMDialog=!1}}},B=Object(F.a)(L,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("page-title",{attrs:{title:"User Management"},scopedSlots:e._u([{key:"titleActions",fn:function(){return[i("tooltip-icon-button",{attrs:{btnColor:"blue",btnIcon:"mdi-settings",btnTooltip:"Configure user's push notification",onClick:function(){return e.openFCMDialog()}}})]},proxy:!0}])}),e._v(" "),i("v-tabs",{attrs:{right:"",color:e.$vuetify.theme.dark?"":"nubeGreen"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("v-tab",{key:0},[e._v("User Sites ")]),e._v(" "),i("v-tab",{key:1},[e._v("App Users ")])],1),e._v(" "),i("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("v-tab-item",{key:0},[i("user-site-grid")],1),e._v(" "),i("v-tab-item",{key:1},[1==e.tab?i("user-management-grid"):e._e()],1)],1),e._v(" "),i("v-dialog",{attrs:{presistent:"","max-width":"350"},model:{value:e.configFCMDialog,callback:function(t){e.configFCMDialog=t},expression:"configFCMDialog"}},[i("configure-fcm-key",{attrs:{"close-dialog":e.closeFCMDialog}})],1)],1)}),[],!1,null,null,null);t.default=B.exports},"3saC":function(e,t,i){"use strict";var s={props:["on-copy"],methods:{copyToClipboard:function(e){var t=this;this.$copyText(e,this.$refs.copyClipboard).then((function(){t.$toasted.show("Copied to clipboard!",{type:"success"})}),(function(){t.$toasted.show("Cannot copy to clipboard.",{type:"error"})}))}}},a=i("psIG"),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{ref:"copyClipboard"},[i("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"exportColor"},on:{click:function(){return e.onCopy(e.copyToClipboard)}}},[e._v("\n    Export"),i("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-export")])],1)],1)}),[],!1,null,null,null);t.a=n.exports},"7Ipj":function(e,t,i){"use strict";var s=i("Q12t"),a=i("3saC"),n=i("Isj4"),r={name:"import-dialog",props:["receiveDataRows"],data:function(){return{file:null,dialogImportExcel:!1,dialogImportJSON:!1,dataImport:""}},methods:{importFile:function(){var e=new FileReader;e.readAsBinaryString(this.file),e.onload=this.handleFileLoad},handleFileLoad:function(e){var t=e.target.result,i=n.read(t,{type:"binary"}),s=Array.isArray(i.SheetNames)&&i.SheetNames.length>0&&i.SheetNames[0];if(!s)return this.$toasted.show("Invalid Excel File. Please reupload.",{type:"error"});var a=n.utils.sheet_to_row_object_array(i.Sheets[s]);this.receiveDataRows(a),this.dialogImportExcel=!1},closeDialog:function(){this.dialogImportJSON=!1},importJson:function(){try{var e=JSON.parse(this.dataImport);this.receiveDataRows(e),this.dialogImportJSON=!1}catch(e){return this.$toasted.show("Invalid JSON",{type:"error"})}}}},o=i("psIG"),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mr-2 btn-height-22 white--text",attrs:{"x-small":"",color:"primary"}},"v-btn",a,!1),s),[e._v("Import"),i("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-import")])],1)]}}])},[e._v(" "),i("v-list",[i("v-list-item",{on:{click:function(t){e.dialogImportJSON=!0,e.dataImport=""}}},[i("v-list-item-title",[e._v("JSON")])],1),e._v(" "),i("v-list-item",{on:{click:function(t){e.dialogImportExcel=!0,e.file=null}}},[i("v-list-item-title",[e._v("Excel")])],1)],1)],1),e._v(" "),i("v-dialog",{attrs:{width:"500px"},model:{value:e.dialogImportExcel,callback:function(t){e.dialogImportExcel=t},expression:"dialogImportExcel"}},[i("v-card",[i("v-card-title",[e._v("Choose excel file")]),e._v(" "),i("v-card-text",[i("v-file-input",{attrs:{outlined:"",dense:"",label:"File input",accept:".xls,.xlsx"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){e.dialogImportExcel=!1}}},[e._v("Close")]),e._v(" "),i("v-btn",{attrs:{color:"primary darken-1",text:"",disabled:!e.file},on:{click:e.importFile}},[e._v("Import")])],1)],1)],1),e._v(" "),i("v-dialog",{attrs:{width:"500px"},model:{value:e.dialogImportJSON,callback:function(t){e.dialogImportJSON=t},expression:"dialogImportJSON"}},[i("v-card",[i("v-card-title",[e._v("Import via JSON")]),e._v(" "),i("v-card-text",[i("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"import data"},model:{value:e.dataImport,callback:function(t){e.dataImport=t},expression:"dataImport"}})],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Cancel ")]),e._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.dataImport},on:{click:e.importJson}},[e._v("Import")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,c={name:"grid-toolbar",props:["toolbarTitle","onCopy","items","fileName","formatDataService","receiveDataRows","onDelete","isDeleteEnabled","onSearch","hideExportData"],components:{ExportData:s.a,CopyClipboard:a.a,ImportDialog:l}},u=Object(o.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",{staticClass:"mr-6"},[e._v(e._s(e.toolbarTitle))]),e._v(" "),e._t("gridCounter"),e._v(" "),e.onCopy?i("copy-clipboard",{attrs:{"on-copy":e.onCopy}}):e._e(),e._v(" "),e.items&&e.items.length>0&&!e.hideExportData?i("export-data",{attrs:{data:e.items,"file-name":e.fileName,"format-data-service":e.formatDataService}}):e._e(),e._v(" "),e.receiveDataRows?i("import-dialog",{attrs:{receiveDataRows:e.receiveDataRows}}):e._e(),e._v(" "),e.onDelete?i("v-btn",{staticClass:"mr-2 btn-height-22 white--text",attrs:{"x-small":"",color:"error",disabled:!e.isDeleteEnabled},on:{click:e.onDelete}},[e._v("Delete"),i("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" mdi-delete")])],1):e._e(),e._v(" "),e._t("customAction"),e._v(" "),e._t("search")],2)}),[],!1,null,null,null);t.a=u.exports},Q12t:function(e,t,i){"use strict";var s=i("/9Wh"),a=i.n(s),n=i("+n12"),r={name:"export-data",props:["data","fileName","formatDataService"],methods:{clickDownload:function(e,t){var i=e;switch("function"==typeof this.formatDataService&&(i=this.formatDataService(e)),t){case"csv":return Object(n.e)(this.fileName,i);case"excel":return Object(n.g)(this.fileName,i);case"json":return Object(n.h)(this.fileName,a()(i))}}}},o=i("psIG"),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mr-2 btn-height-22 white--text",attrs:{"x-small":"",color:"downloadColor"}},"v-btn",a,!1),s),[e._v("\n      Download"),i("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-download")])],1)]}}])},[e._v(" "),i("v-list",[i("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"json")}}},[e._v(" JSON ")]),e._v(" "),i("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"excel")}}},[e._v(" Excel ")]),e._v(" "),i("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"csv")}}},[e._v(" CSV ")])],1)],1)}),[],!1,null,null,null);t.a=l.exports},Ui9F:function(e,t,i){"use strict";var s={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize","disabled"]},a=i("psIG"),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return["medium"==e.buttonSize?i("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",medium:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),s),[i("v-icon",{attrs:{medium:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1):i("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",small:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),s),[i("v-icon",{attrs:{small:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1)]}}])},[e._v(" "),i("span",{staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:e._s(e.btnTooltip)}})])}),[],!1,null,null,null);t.a=n.exports},lkCm:function(e,t,i){"use strict";var s={name:"confirm-dialog",props:["on-close","on-confirm","dialog-text","is-open","loading"]},a=i("psIG"),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[i("v-card",[i("v-card-title",[i("v-icon",{attrs:{color:"warning"}},[e._v(" mdi-alert-outline ")]),e._v(" Confirm ")],1),e._v(" "),i("v-card-text",[i("v-container",[i("v-row",[e._v(e._s(e.dialogText))])],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:""},on:{click:e.onClose}},[e._v(" No ")]),e._v(" "),i("v-btn",{attrs:{color:"red darken-1",loading:e.loading,text:""},on:{click:e.onConfirm}},[e._v(" Yes ")])],1)],1)],1)}),[],!1,null,null,null);t.a=n.exports}}]);
//# sourceMappingURL=24.b9b762fa4eaff1265e3e.js.map