(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+SqX":function(t,e,l){"use strict";var n={name:"page-title",props:["title"]},i=l("psIG"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h1",{staticClass:"text-h5 text-left py-3"},[l("span",[t._v(t._s(t.title))]),t._t("titleActions"),t._v(" "),t._t("spinner")],2)}),[],!1,null,null,null);e.a=s.exports},Q12t:function(t,e,l){"use strict";var n=l("/9Wh"),i=l.n(n),s=l("+n12"),a={name:"export-data",props:["data","fileName","formatDataService"],methods:{clickDownload:function(t,e){var l=t;switch("function"==typeof this.formatDataService&&(l=this.formatDataService(t)),e){case"csv":return Object(s.e)(this.fileName,l);case"excel":return Object(s.g)(this.fileName,l);case"json":return Object(s.h)(this.fileName,i()(l))}}}},o=l("psIG"),r=Object(o.a)(a,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[l("v-btn",t._g(t._b({staticClass:"mr-2 btn-height-22 white--text",attrs:{"x-small":"",color:"#339999"}},"v-btn",i,!1),n),[t._v("\n      Download"),l("v-icon",{attrs:{"x-small":"",right:""}},[t._v("mdi-download")])],1)]}}])},[t._v(" "),l("v-list",[l("v-list-item",{on:{click:function(e){return t.clickDownload(t.data,"json")}}},[t._v(" JSON ")]),t._v(" "),l("v-list-item",{on:{click:function(e){return t.clickDownload(t.data,"excel")}}},[t._v(" Excel ")]),t._v(" "),l("v-list-item",{on:{click:function(e){return t.clickDownload(t.data,"csv")}}},[t._v(" CSV ")])],1)],1)}),[],!1,null,null,null);e.a=r.exports},RPxB:function(t,e,l){"use strict";l.r(e);var n=l("/9Wh"),i=l.n(n),s=l("VleD"),a=l("Q12t"),o=l("lkCm"),r=l("+SqX"),c={components:{ExportData:a.a,ConfirmDialog:o.a,PageTitle:r.a},data:function(){return{logs:[],selected:[],headers:[{text:"Message",value:"message",width:"50%"},{text:"Description",value:"description"}],dialogDelete:!1,isDeleteAll:!1}},methods:{deleteAll:function(){s.c("logs"),this.logs=[]},deleteSelected:function(){var t=this;this.logs=this.logs.filter((function(e){return!t.selected.includes(e)})),s.d("logs",i()(this.logs))},confirmDelete:function(){this.isDeleteAll?this.deleteAll():this.deleteSelected(),this.dialogDelete=!1}},mounted:function(){var t=JSON.parse(s.b("logs"))||[];this.logs=t}},d=l("psIG"),v=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("page-title",{attrs:{title:"Logging Console"}}),t._v(" "),l("div",{staticClass:"top-bar-tools"},[l("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"error",disabled:0===t.selected.length},on:{click:function(e){t.dialogDelete=!0,t.isDeleteAll=!1}}},[t._v("\n      Delete"),l("v-icon",{attrs:{"x-small":"",right:""}},[t._v("mdi-delete")])],1),t._v(" "),l("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"error"},on:{click:function(e){t.dialogDelete=!0,t.isDeleteAll=!0}}},[t._v("\n      Delete all \n    ")]),t._v(" "),l("export-data",{attrs:{data:t.logs,"file-name":"error-logging"}})],1),t._v(" "),l("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.logs,"item-key":"time","show-select":"","hide-default-footer":"","disable-sort":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),l("confirm-dialog",{attrs:{"is-open":t.dialogDelete,"on-close":function(){return t.dialogDelete=!1},"on-confirm":t.confirmDelete,"dialog-text":"Are you sure?"}})],1)}),[],!1,null,"7a7fd227",null);e.default=v.exports},lkCm:function(t,e,l){"use strict";var n={name:"confirm-dialog",props:["on-close","on-confirm","dialog-text","is-open","loading"]},i=l("psIG"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[l("v-card",[l("v-card-title",[l("v-icon",{attrs:{color:"warning"}},[t._v(" mdi-alert-outline ")]),t._v(" Confirm ")],1),t._v(" "),l("v-card-text",[l("v-container",[l("v-row",[t._v(t._s(t.dialogText))])],1)],1),t._v(" "),l("v-card-actions",[l("v-spacer"),t._v(" "),l("v-btn",{attrs:{text:""},on:{click:t.onClose}},[t._v(" No ")]),t._v(" "),l("v-btn",{attrs:{color:"red darken-1",loading:t.loading,text:""},on:{click:t.onConfirm}},[t._v(" Yes ")])],1)],1)],1)}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=28.2da71ea9ac662284521e.js.map