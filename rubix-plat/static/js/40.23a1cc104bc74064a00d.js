(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"n/Zs":function(t,e,n){"use strict";n.d(e,"e",(function(){return s})),n.d(e,"i",(function(){return u})),n.d(e,"h",(function(){return a})),n.d(e,"d",(function(){return _})),n.d(e,"g",(function(){return p})),n.d(e,"f",(function(){return d})),n.d(e,"m",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return v})),n.d(e,"l",(function(){return f})),n.d(e,"j",(function(){return w})),n.d(e,"n",(function(){return g})),n.d(e,"k",(function(){return m})),n.d(e,"c",(function(){return k}));var r=n("uzYq"),i=n("NWgQ"),o=n.n(i),s="modbus-server",u=function(t){return r.a.post(s+"/poll-point",t)},a=function(t){var e=s+"/network";return t&&(e=e+"?"+o.a.stringify(t)),r.a.get(s+"/network?"+o.a.stringify(t))},_=function(t){return r.a.delete(s+"/network/"+t)},p=function(t,e){var n=s+"/network/"+t;return e&&(n=n+"?"+o.a.stringify(e)),r.a.get(n)},d=function(t,e){var n=s+"/device/"+t;return e&&(n=n+"?"+o.a.stringify(e)),r.a.get(n)},c=function(t,e){return r.a.put(s+"/network/"+t,e)},l=function(t){return r.a.post(s+"/network",t)},v=function(t){return r.a.post(s+"/device",t)},f=function(t,e){return r.a.put(s+"/device/"+t,e)},w=function(t){return r.a.delete(s+"/device/"+t)},g=function(t,e){return r.a.put(s+"/point/"+t,e)},m=function(t){return r.a.delete(s+"/point/"+t)},k=function(t){return r.a.post(s+"/point",t)}},rSMQ:function(t,e,n){"use strict";n.r(e);var r,i=n("TcPG"),o=n.n(i),s=n("tZmG"),u=n.n(s),a=(n("uzYq"),n("n/Zs")),_={UO1:101,UO2:102},p={RAW:0,"0-10VDC (AO)":1,"0-12VDC (DO)":2},d={UI1:201,UI2:202,UI3:203,UI4:204,UI5:205,UI6:206},c={RAW:0,"0-10VDC (AI)":1,"10k (resistance)":2,"10k (type 2 temp)":3,"20k (na on IO-10)":4,"4-20MA (na on IO-10)":5,"Pulse Count (na on IO-10)":6,"Digital Input":7},l=(r={name:"io-10-config",data:function(){return{network_rtu_port:"/dev/ttyRS485-1",device_address:1,network_rtu_speed:[9600,19200,38400,57600,115200,128e3],network_rtu_ports:["/dev/ttyRS485-1","/dev/ttyRS485-2","/dev/ttyXBEE-1 ","/dev/ttyXBEE-2","/dev/ttyUSB0","/dev/ttyUSB1","/dev/ttyUSB2","/dev/ttyUSB3","/dev/ttyUSB4"],headers:[{text:"Name",value:"name",align:"start"},{text:"Point Register",value:"point_register"},{text:"Point Write Value",value:"point_write_value"},{text:"Actions",value:"actions"}],UOs:[{name:"UO-1-Config (register 101)",point_register:"UO1",point_write_value:"RAW"},{name:"UO-2-Config (register 102)",point_register:"UO2",point_write_value:"RAW"}],UIs:[{name:"UI-1-Config (register 201)",point_register:"UI1",point_write_value:"RAW"},{name:"UI-2-Config (register 202)",point_register:"UI2",point_write_value:"RAW"},{name:"UI-3-Config (register 203)",point_register:"UI3",point_write_value:"RAW"},{name:"UI-4-Config (register 204)",point_register:"UI4",point_write_value:"RAW"},{name:"UI-5-Config (register 205)",point_register:"UI5",point_write_value:"RAW"},{name:"UI-6-Config (register 206)",point_register:"UI6",point_write_value:"RAW"}],UOPointValues:u()(p),UIPointValues:u()(c)}},mounted:function(){},watch:{}},o()(r,"mounted",(function(){})),o()(r,"methods",{SetConfigUO:function(t,e){var n=this,r={network_type:"RTU",network_rtu_port:this.network_rtu_port,network_rtu_speed:this.network_rtu_speed,device_address:Number(this.device_address),point_register:_[t.point_register],point_register_length:1,point_function_code:"WRITE_REGISTERS",point_data_type:"INT16",point_priority_array_write:{_16:p[t.point_write_value]}};a.i(r).then((function(t){var e=n.uoType(t.value_original);n.$toasted.show("Update Success:"+e)}))},SetConfigUI:function(t,e){var n=this,r={network_type:"RTU",network_rtu_port:this.network_rtu_port,network_rtu_speed:this.network_rtu_speed,device_address:Number(this.device_address),point_register:d[t.point_register],point_register_length:1,point_function_code:"WRITE_REGISTER",point_data_type:"INT16",point_priority_array_write:{_16:c[t.point_write_value]}};a.i(r).then((function(t){var e=n.uiType(t.value_original);n.$toasted.show("Update Success:"+e)}))},getConfigUO:function(t,e){var n=this,r={network_type:"RTU",network_rtu_port:this.network_rtu_port,network_rtu_speed:this.network_rtu_speed,device_address:Number(this.device_address),point_register:"UO"==e?_[t.point_register]:d[t.point_register],point_register_length:1,point_function_code:"READ_HOLDING_REGISTERS",point_data_type:"INT16"};a.i(r).then((function(t){var e=n.uoType(t.value_original);n.$toasted.show("Update Success:"+e)}))},getConfigUI:function(t,e){var n=this,r={network_type:"RTU",network_rtu_port:this.network_rtu_port,network_rtu_speed:this.network_rtu_speed,device_address:Number(this.device_address),point_register:"UO"==e?_[t.point_register]:d[t.point_register],point_register_length:1,point_function_code:"READ_HOLDING_REGISTERS",point_data_type:"INT16"};a.i(r).then((function(t){var e=n.uiType(t.value_original);n.$toasted.show("Update Success:"+e)}))},uoType:function(t){return 0==t?"Output Type: RAW":1==t?"Output Type: 0-10VDC (AO)":2==t?"Output Type: 0-12VDC (DO)":void 0},uiType:function(t){return 0==t?"Output Type: RAW":1==t?"Output Type: 0-10VDC (AO)":2==t?"Output Type: 10k (resistance)":3==t?"Output Type: 10k (type 2 temp)":4==t?"Output Type: 20k (na on IO-10)":5==t?"Output Type: 4-20MA (na on IO-10)":6==t?"Output Type: Pulse Count (na on IO-10)":7==t?"Digital Input":void 0}}),o()(r,"computed",{setting:function(){return this.$store.state.setting}}),r),v=n("psIG"),f=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"4",sm:"4",md:"4"}},[n("v-select",{attrs:{items:t.network_rtu_ports,label:"Serial Port"},model:{value:t.network_rtu_port,callback:function(e){t.network_rtu_port=e},expression:"network_rtu_port"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4",sm:"4",md:"4"}},[n("v-text-field",{attrs:{label:"Device Address",type:"number"},model:{value:t.device_address,callback:function(e){t.device_address=e},expression:"device_address"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4",sm:"4",md:"4"}},[n("v-select",{attrs:{items:t.network_rtu_speed,label:"network baud rate"},model:{value:t.network_rtu_speed,callback:function(e){t.network_rtu_speed=e},expression:"network_rtu_speed"}})],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.UOs,"disable-sort":""},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[t._v("Universal Output")])],1)]},proxy:!0},{key:"item.point_write_value",fn:function(e){var r=e.item;return[n("v-select",{staticStyle:{width:"150px"},attrs:{items:t.UOPointValues},model:{value:r.point_write_value,callback:function(e){t.$set(r,"point_write_value",e)},expression:"item.point_write_value"}})]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{small:"",color:"primary",disabled:!t.network_rtu_port||!t.device_address,text:""},on:{click:function(e){return t.SetConfigUO(r,"UO")}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-send ")]),t._v(" "),n("span",[t._v(" SET")])],1),t._v(" \n      "),n("v-btn",{attrs:{small:"",color:"primary",disabled:!t.network_rtu_port||!t.device_address,text:""},on:{click:function(e){return t.getConfigUO(r,"UO")}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-send")]),t._v(" "),n("span",[t._v(" GET")])],1),t._v(" \n    ")]}}])}),t._v(" "),n("br"),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.UIs,"disable-sort":""},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[t._v("Universal Input")])],1)]},proxy:!0},{key:"item.point_write_value",fn:function(e){var r=e.item;return[n("v-select",{staticStyle:{width:"150px"},attrs:{items:t.UIPointValues},model:{value:r.point_write_value,callback:function(e){t.$set(r,"point_write_value",e)},expression:"item.point_write_value"}})]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{small:"",color:"primary",disabled:!t.network_rtu_port||!t.device_address,text:""},on:{click:function(e){return t.SetConfigUI(r,"UI")}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-send")]),t._v(" "),n("span",[t._v(" SET")])],1),t._v(" \n      "),n("v-btn",{attrs:{small:"",color:"primary",disabled:!t.network_rtu_port||!t.device_address,text:""},on:{click:function(e){return t.getConfigUI(r,"UI")}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-send")]),t._v(" "),n("span",[t._v(" GET")])],1),t._v(" \n    ")]}}])})],1)}),[],!1,null,null,null);e.default=f.exports}}]);
//# sourceMappingURL=40.23a1cc104bc74064a00d.js.map