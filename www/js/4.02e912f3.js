(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"21f3":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-sm-11 col-md-5 q-mt-sm"},[e("q-card",[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify"},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab",{attrs:{name:"Login",label:"Login"}}),e("q-tab",{attrs:{name:"Register",label:"Register"}})],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"Login"}},[e("LoginRegister",{attrs:{tab:a.tab}})],1),e("q-tab-panel",{attrs:{name:"Register"}},[e("LoginRegister",{attrs:{tab:a.tab}})],1)],1)],1)],1)])])},r=[],i={components:{LoginRegister:e("e009").default},data(){return{tab:"Login"}}},l=i,o=e("2877"),n=Object(o["a"])(l,s,r,!1,null,null,null);t["default"]=n.exports},e009:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("form",{on:{submit:function(t){return t.preventDefault(),a.submitForm(t)}}},[e("div",{staticClass:"row q-mb-md"},[e("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:a._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[a._v("\n      "+a._s(a._f("titleCase")(a.tab))+" to access your Todos anywhere!\n    ")])],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"email",staticClass:"col",attrs:{"lazy-rules":"",outlined:"",label:"Email","stack-label":"",rules:[function(t){return a.isValidEmailAddress(t)||"Please enter a valid email address."}]},model:{value:a.formData.email,callback:function(t){a.$set(a.formData,"email",t)},expression:"formData.email"}})],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"password",staticClass:"col",attrs:{"lazy-rules":"",type:"password",outlined:"",label:"Password","stack-label":"",rules:[function(a){return a.length>=6||"Please enter at least 6 characters."}]},model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}})],1),e("div",{staticClass:"row"},[e("q-space"),e("q-btn",{attrs:{color:"primary",label:a.tab,type:"submit"}})],1)])},r=[],i=e("ded3"),l=e.n(i),o=e("2f62"),n={props:["tab"],data(){return{formData:{email:"",password:""}}},methods:l()(l()({},Object(o["b"])("Auth",["registerUser","loginUser"])),{},{isValidEmailAddress(a){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(a).toLowerCase())},submitForm(){this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||("Login"==this.tab?this.loginUser(this.formData):this.registerUser(this.formData))}}),filters:{titleCase(a){return a.charAt(0).toUpperCase()+a.slice(1)}}},c=n,u=e("2877"),m=Object(u["a"])(c,s,r,!1,null,null,null);t["default"]=m.exports}}]);