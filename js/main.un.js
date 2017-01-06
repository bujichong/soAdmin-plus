/**console.log **/
(function(){var method;var noop=function(){};var methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop}}}());

var v=".js?v="+(new Date()).getTime();
require.config({
    paths: {
        "my97":"lib/my97/WdatePicker",
        "jquery": "jquery-1.11.3.min",
        "jquery.extend": "jquery.extend",
        "bootstrap": "bootstrap.min",
        "easyui":"lib/easyui/jquery.easyui.min",
        "easyui.extend":"lib/easyui/jquery.easyui.extend",
        "edit":"lib/easyui/datagrid-cellediting",
        "md5":"lib/md5",
        "param":"lib/param",
        "pub":"lib/pub"+v,
        "print":"lib/print",
        "layer.min":"lib/layer/layer.min",
        "template":"lib/template",
        "echarts":"lib/echarts/echarts",
        "echartsMap":"lib/echarts/echarts-map",
        "chinaMap":"lib/echarts/china"
    },
    shim:{
        "jquery.extend":['jquery'],
        "easyui":['jquery'],
        "easyui.extend":['easyui'],
        "bootstrap":['jquery'],
        "layer.min":['jquery'],
        'template': {exports: 'template'},
        "chinaMap":['echarts','echartsMap'],
        "pub":['jquery.extend','easyui.extend','my97','param','bootstrap','layer.min'],
        "edit":['pub']
    }
});

require(["pub"],function(){
    var crumb=$('body').attr("data-js");
    if(crumb){
        var crumbArr = crumb.split(":");
        var modId = crumbArr[0] , funcId = crumbArr[1]||'init';
        require(['app/'+modId],function(mod){
        // require(['app/'+modId],function(mod){
            if(mod){
                var init=mod[funcId];
                if(init&&$.isFunction(init)){
                    mod[funcId](window);
                }else{
                    window.console && console.log("请在"+modId+".js文件中定义"+funcId+"方法");
                }
            }
        });
    }
});