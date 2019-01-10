


(function(factory) {
        // var root = typeof self == 'object' && self.self === self && self ||
        // typeof global == 'object' && global.global === global && global ||this||global;

        // root.$=factory()
        // console.log(Object.prototype.toString.call(self)=="[object Window]")
        // console.log(self.self === self)
        //浏览器环境
        // console.log(Object.prototype.toString.call(global))
        try {
            if(Object.prototype.toString.call(self)=="[object Window]"){
                window.$=factory()
           
            } 
        } catch (error) {
            
        }
        
        
})(function() {
 
    // dom操作相关
    var d_selector = require("./core/dom/d_selector") //选择器
    var d_event = require("./core/dom/d_event") //dom事件监听
    var d_html = require("./core/dom/d_html") //dom文本操作
    var d_css = require("./core/dom/d_css") //dom文本操作
    var d_effect = require("./core/dom/d_effect")
    var d_phoneEvent = require("./core/dom/d_phoneEvent") //dom移动端投产事件
    var d_each = require("./core/dom/d_each") //dom遍历相关事件
    var d_ajax = require("./core/dom/d_ajax") //ajax的使用
    var d_plugin = require("./core/dom/d_plugin") //dom相关插件

    // //methodsExtents
    var arrayMethods = require("./core/methodsExtends/array")
    var stringMethods = require("./core/methodsExtends/string")
    var objectMethods = require("./core/methodsExtends/object")
    var pluginMethods = require("./core/methodsExtends/plugin")

    // //bom
    var bomMethods = require("./core/bom/bom")

    // //other
    var otherMethods = require("./core/other")


    function heiGo(elStr) {
        this.el = heiGo.prototype.init(document, elStr)
            // console.log(this.el)
    }
    //实例方法
    heiGo.prototype = Object.assign(d_selector, d_event, d_phoneEvent, d_html, d_effect, d_css, d_each, d_plugin)

    function $(str) {
        return new heiGo(str)
    }
    //静态方法挂载
    Object.assign($, d_ajax,pluginMethods, arrayMethods, objectMethods, stringMethods, bomMethods, otherMethods, stringMethods)
   
    return $
})
