//node r.js -o build-bmap.js
require.config({
    // baseUrl: "/",
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
        "pub":"lib/pub",
        "print":"lib/print",
        "layer.min":"lib/layer/layer.min",
        "template":"lib/template",
        "echarts":"lib/echarts/echarts",
        "echartsMap":"lib/echarts/echarts-map",
        "chinaMap":"lib/echarts/china"
    },
    shim:{
        "jquery.extend":{deps:['jquery']},
        "easyui":{deps:['jquery']},
        "easyui.extend":{deps:['easyui']},
        "bootstrap":{deps:['jquery']},
        "layer.min":{deps:['jquery']},
        'template': {exports: 'template'},
        "chinaMap":{deps:['echarts','echartsMap']},
        "pub":{deps:['jquery.extend','easyui.extend','my97','param','bootstrap','layer.min']},
        "edit":{deps:['pub']}
    }
});