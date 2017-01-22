define(['baidueditor', 'zeroclipboard', 'bdlang'], function(UE, zcl){
    var back = {
        init : function () {
            window.ZeroClipboard = zcl;
            var ue = UE.getEditor('editor');
        }
    }
    return back;
});