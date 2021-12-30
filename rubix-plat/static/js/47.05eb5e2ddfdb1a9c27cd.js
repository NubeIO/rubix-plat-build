(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+SqX":function(e,t,s){"use strict";var l={name:"page-title",props:["title"]},n=s("psIG"),i=Object(n.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",{staticClass:"text-h5 text-left py-3"},[s("span",[e._v(e._s(e.title))]),e._t("titleActions"),e._v(" "),e._t("spinner")],2)}),[],!1,null,null,null);t.a=i.exports},OKta:function(e,t,s){"use strict";var l={name:"rbx-button",props:["title","after-icon","color","click","is-small","class-name","disabled","block","loading"]},n=s("psIG"),i=Object(n.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-btn",{staticClass:"mr-1 btn-height-22 white--text",class:e.className,attrs:{loading:e.loading,"x-small":e.isSmall,disabled:e.disabled,color:e.color,block:e.block},on:{click:e.click}},[e._v("\n  "+e._s(e.title)+"\n  "),e.afterIcon?s("v-icon",{attrs:{"x-small":e.isSmall,right:""}},[e._v(e._s(e.afterIcon))]):e._e()],1)}),[],!1,null,null,null);t.a=i.exports},QZPb:function(e,t,s){"use strict";s.r(t);var l=s("Kz1y"),n=s.n(l),i={name:"schedule-list",props:["schedules","removeSchedule"],components:{ConfirmDialog:s("lkCm").a},data:function(){return{search:"",selectedItem:null,isOpen:!1}},computed:{scheduleList:function(){var e=this;return this.schedules.filter((function(t){return t&&t.name.toLowerCase().indexOf(e.search.toLowerCase())>-1}))}},methods:{openDeleteDialog:function(e){this.selectedItem=e,this.isOpen=!0},onRemoveSchedule:function(){this.removeSchedule(this.selectedItem),this.onCloseDeleteDialog()},onCloseDeleteDialog:function(){this.selectedItem=null,this.isOpen=!1}}},c=s("psIG"),o=Object(c.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-divider"),e._v(" "),s("v-text-field",{staticClass:"pb-5",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),s("v-spacer"),e._v(" "),s("v-list",{staticClass:"schedule-list"},e._l(e.scheduleList,(function(t){return s("v-list-item",{key:t.name},[s("v-list-item-content",{staticClass:"text-left"},[s("v-list-item-title",{staticClass:"text-left",domProps:{textContent:e._s(t.name)}}),e._v(" "),s("v-list-item-subtitle",{staticClass:"text-left",domProps:{textContent:e._s(t.updated_on)}})],1),e._v(" "),s("v-list-item-action",[s("v-btn",{attrs:{loading:t.isDeleting,icon:""},on:{click:function(s){return e.openDeleteDialog(t)}}},[s("v-icon",{attrs:{color:"red lighten-1"}},[e._v("mdi-delete")])],1)],1)],1)})),1),e._v(" "),s("confirm-dialog",{attrs:{"is-open":e.isOpen,"on-close":e.onCloseDeleteDialog,"on-confirm":e.onRemoveSchedule,"dialog-text":"Are you sure to delete the schedule?"}})],1)}),[],!1,null,null,null).exports,a=s("OKta"),r=s("+SqX"),u=s("uzYq"),d="/schedules",h={name:"schedule-page",components:{PageTitle:r.a,ScheduleList:o,RbxButton:a.a},data:function(){return{isFetchingData:!1,schedules:[],form:{valid:!1,isCreatingSchedule:!1,scheduleErrorMessages:[]},rules:{required:function(e){return!!e||"Required."}}}},mounted:function(){this.fetchSchedules()},methods:{fetchSchedules:function(e){var t=this;this.isFetchingData=!0,u.a.get(d).then((function(s){t.schedules=s.map((function(e){return n()({},e,{isDeleting:!1})})),"function"==typeof e&&e()})).catch((function(e){t.$toasted.show("Error occured while fetching schedules",{type:"error"})})).finally((function(){t.isFetchingData=!1}))},createSchedule:function(e){var t=this;this.$refs.form.validate()&&(this.form.isCreatingSchedule=!0,function(e){return u.a.post(d,e,{restrictToast:!0})}({name:this.form.scheduleName}).then((function(e){t.$toasted.show("Successfully created schedule"),t.fetchSchedules(),t.$refs.form.reset()})).catch((function(e){e&&e.message&&(t.form.scheduleErrorMessages=e.message)})).finally((function(){t.form.isCreatingSchedule=!1})))},removeSchedule:function(e){var t,s=this;e.isDeleting=!0,(t=e.name,u.a.delete(d+"/name/"+t)).then((function(){s.fetchSchedules((function(){s.$toasted.show("Successfully deleted schedule")}))})).catch((function(t){e.isDeleting=!1}))}}},f=Object(c.a)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"schedulePageElem"},[s("page-title",{attrs:{title:"Schedules"}}),e._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12",sm:"12",md:"10",lg:"6"}},[s("v-card",{attrs:{loading:e.isFetchingData}},[s("v-card-text",[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.form.valid,callback:function(t){e.$set(e.form,"valid",t)},expression:"form.valid"}},[s("v-row",[s("v-col",{attrs:{cols:"8"}},[s("v-text-field",{attrs:{label:"Schedule Name",rules:[e.rules.required],"error-messages":e.form.scheduleErrorMessages,required:""},model:{value:e.form.scheduleName,callback:function(t){e.$set(e.form,"scheduleName",t)},expression:"form.scheduleName"}})],1),e._v(" "),s("v-col",{staticClass:"schedule-page-add-btn",attrs:{cols:"4"}},[s("rbx-button",{attrs:{block:!0,loading:e.form.isCreatingSchedule,color:"pink",click:e.createSchedule,title:"Add Schedule"}})],1)],1)],1),e._v(" "),e.schedules.length>0?s("schedule-list",{attrs:{schedules:e.schedules,"remove-schedule":e.removeSchedule}}):e._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=f.exports},lkCm:function(e,t,s){"use strict";var l={name:"confirm-dialog",props:["on-close","on-confirm","dialog-text","is-open","loading"]},n=s("psIG"),i=Object(n.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[s("v-card",[s("v-card-title",[s("v-icon",{attrs:{color:"warning"}},[e._v(" mdi-alert-outline ")]),e._v(" Confirm ")],1),e._v(" "),s("v-card-text",[s("v-container",[s("v-row",[e._v(e._s(e.dialogText))])],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:""},on:{click:e.onClose}},[e._v(" No ")]),e._v(" "),s("v-btn",{attrs:{color:"red darken-1",loading:e.loading,text:""},on:{click:e.onConfirm}},[e._v(" Yes ")])],1)],1)],1)}),[],!1,null,null,null);t.a=i.exports}}]);
//# sourceMappingURL=47.05eb5e2ddfdb1a9c27cd.js.map