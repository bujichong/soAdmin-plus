/**--jQuery.json-2.3.js--**/
(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
    var type=typeof o;if(type==='undefined'){return undefined;}
    if(type==='number'||type==='boolean'){return''+o;}
    if(type==='string'){return $.quoteString(o);}
    if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
        if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
            if(day<10){day='0'+day;}
            if(hours<10){hours='0'+hours;}
            if(minutes<10){minutes='0'+minutes;}
            if(seconds<10){seconds='0'+seconds;}
            if(milli<100){milli='0'+milli;}
            if(milli<10){milli='0'+milli;}
            return'"'+year+'-'+month+'-'+day+'T'+
                hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
        if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
            return'['+ret.join(',')+']';}
        var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
            type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
            val=$.toJSON(o[k]);pairs.push(name+':'+val);}
        return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
        c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
    return'"'+string+'"';};})(jQuery);

//jQuery.cookie
jQuery.cookie=function(a,b,c){var d,e,f,g,h,i,j,k,l;if("undefined"==typeof b){if(i=null,document.cookie&&""!=document.cookie)for(j=document.cookie.split(";"),k=0;k<j.length;k++)if(l=jQuery.trim(j[k]),l.substring(0,a.length+1)==a+"="){i=decodeURIComponent(l.substring(a.length+1));break}return i}c=c||{},null===b&&(b="",c.expires=-1),d="",c.expires&&("number"==typeof c.expires||c.expires.toUTCString)&&("number"==typeof c.expires?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*c.expires)):e=c.expires,d="; expires="+e.toUTCString()),f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"",document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")};

//jQuery.color
(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

/* soChange 1.6.2 - simple object change with jQuery */
(function(a){a.fn.extend({soChange:function(b){b=a.extend({thumbObj:null,btnPrev:null,btnNext:null,changeType:"fade",thumbNowClass:"now",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300,callback:function(){}},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{if(b.changeType=="fade"){h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}else{h.eq(e).slideUp(b.slideTime);h.eq(g).slideDown(b.slideTime)}}if(b.callback){b.callback(e,g)}e=g}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse){return false}});if(b.thumbOverEvent){i.hover(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)},function(){clearTimeout(f)})}}if(b.btnNext){a(b.btnNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.btnPrev){a(b.btnPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange){c=setInterval(j,b.changeTime);if(b.overStop){h.hover(function(){clearInterval(c)},function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);

    $.extend({

        /**
         * 地址转换 tree:dept -> /base/treeUrl?_code=dept
         */
        url : function(url) {
            var rst = '';
            if (url.indexOf('/') == -1) {
                var ar = url.split(":");
                rst+=$p[ar[0] + "Url"];
                if(ar[1]) rst+= "?_code=" + ar[1];
            } else {
                rst = url;
            }
            return rst;
        },
        /**
         * 统一的后台ajax请求
         */
        reqUrl : function(url, data, success,maskOpt) {
            var ajaxLoading = null;
            $.ajax({
                url:url,
                type:'post',
                beforeSend:function(jqXHR, settings){
                    maskOpt = $.extend({showMask:false},maskOpt||{});
                    ajaxLoading = $.sobox.loading(maskOpt);
                    //显示"操作中"提示
                },
                complete:function(jqXHR, textStatus){
                    //根据textStatus修改提示
                    //2秒后去掉提示
                },
                data:data,
                dataType:'json',
                success:function (rst) {
                    if(rst&&rst.result){
                        ajaxLoading.close();
                    }
                    success&&success(rst);
                },
                error : function (XMLHttpRequest, textStatus, errorThrown) {
                    ajaxLoading.close();
                    $.sobox.pop({
                        cls : 'so-popError',
                        title : '错误提示',
                        width : 310,
                        showTitle : false,
                        content : '<p class="p-popError">对不起，数据请求失败！</p>请检查网络或联系管理员...',
                        btn :[{text:'确定'}]
                    });
                }
            });
            return ajaxLoading;
        },
        /**
         * 统一的后台ajax请求增强版,增加确认提示技术后台交互提示
         */
        reqUrlEx : function(url, data, sucess, msg,noConfirm) {
            data=data||{};
            var ajaxLoading = null;
            if (noConfirm) {
                ajaxEvent();
            }else {
                $.sobox.confirm("提示",msg||$p.submitTip,function(){
                    ajaxEvent();
                });
            }
            function ajaxEvent() {
                $.ajax({
                    url:url,
                    type:'post',
                    beforeSend:function(jqXHR, settings){
                        ajaxLoading = $.sobox.loading({cls:'so-ajaxLoading',width:158,content : '提交中，请稍候...'});
                        //显示"操作中"提示
                    },
                    complete:function(jqXHR, textStatus){
                        //根据textStatus修改提示
                        //2秒后去掉提示
                    },
                    data:data,
                    dataType:'json',
                    success:function(rst){
                        if(rst){
                            var msg="信息提交成功";
                            if(rst.tip==1){
                                msg=rst.msg;
                            }
                            ajaxLoading.close();
                            if(rst.result){
                                ajaxLoading = $.sobox.loading({cls:'so-ajaxSuccess',width:143,content : msg,stayTime : 1200});
                            }else{
                                $.sobox.pop({
                                    cls : 'so-popError',
                                    title : '错误提示',
                                    width : 310,
                                    showTitle : false,
                                    content : '<p class="p-popError">对不起，提交数据失败！</p>'+msg,
                                    btn :[{text:'确定'}]
                                });
                            }
                            //提示操作成功
                        }
                        if(sucess)sucess(rst);
                    },
                    error : function (XMLHttpRequest, textStatus, errorThrown) {
                        ajaxLoading.close();
                        $.sobox.pop({
                            cls : 'so-popError',
                            title : '错误提示',
                            width : 310,
                            showTitle : false,
                            content : '<p class="p-popError">对不起，提交数据失败！</p>请检查网络或联系管理员...',
                            btn :[{text:'确定'}]
                        });
                    }
                });
            }
        },
        /**
         * 默认值赋值
         * @param o 目标对象
         * @param c 默认值
         * @returns
         */
        applyIf : function(o, c) {
            if (o && c) {
                for ( var p in c) {
                    if (typeof o[p] == "undefined") {
                        o[p] = c[p];
                    }
                }
            }
            return o;
        },
        getFullDate : function (date,type) {// Date,'long/short'
            var that = this;
            if (!(date instanceof Date)) {
                date = new Date(date);
            }
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var hh = date.getHours();// 时
            var mm = date.getMinutes();// 分
             var ss = date.getSeconds();//秒

            month = ('0'+month).slice(-2);
            day = ('0'+day).slice(-2);
            hh = ('0'+hh).slice(-2);
            mm = ('0'+mm).slice(-2);
            ss = ('0'+ss).slice(-2);
            if (type=='short') {
                //return year+'-'+month+'-'+day;
                return month+'-'+day+' '+hh+':'+mm+':'+ss;
            }else {
                return year+'-'+month+'-'+day+' '+hh+':'+mm;
            }
        },
        arrHasVal : function (arr,val) {
            var l = arr.length;
            for (i = 0; i < l; i++) {
                if (arr[i] === val) {
                    return i;
                }
            }
            return -1;
        },
        getLocalTime :function (nS) {// 转时间戳为本地时间
            return new Date(nS*1).toLocaleString().replace(/年|月/g, "-").replace(/日/g," ");
        },
        getTimeLong : function (s) {
            var h = Math.floor(s/3600);
            h = h>9?h:('0'+h);
            var m = Math.floor(s%3600/60);
            m = m>9?m:('0'+m);
            var s = s%3600%60;
            s = s>9?s:('0'+s);
            return h==0?(m+':'+s):(h+':'+m+':'+s);
        },
        fullscreen : function (tofull) {
                if(tofull){
                    var docElm = document.documentElement;
                    if (docElm.requestFullscreen) {
                        window.console && console.log(11);
                        docElm.requestFullscreen();
                    }
                    else if (docElm.mozRequestFullScreen) {
                        window.console && console.log(12);
                        docElm.mozRequestFullScreen();
                    }
                    else if (docElm.webkitRequestFullScreen) {
                        window.console && console.log(13);
                        docElm.webkitRequestFullScreen();
                    }
                }else{
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                    else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    }
                    else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
        },
        winW : $(window).width(),
        winH :$(window).height()
    });


    /**
     * 扩充方法
     */
    $.fn.extend({
        hoverClass:function(b){var a=this;a.each(function(c){a.eq(c).mouseenter(function(){$(this).addClass(b)});a.eq(c).mouseleave(function(){$(this).removeClass(b)})});return a},
        focusChangeStyle : function(b){var a=this;var b=(b==null)?"txt_focus":b;a.focus(function(){$(this).addClass(b)});a.blur(function(){$(this).removeClass(b)});return a},
        tabChange:function (o) {
            o= $.extend({
                thumbObj:null,//导航对象
                thumbNowClass:'now',//导航对象当前的class,默认为now
                eventClass:'eventStat',
                defaultEvent:function(){},
                callback:function () {},
                oneback:function(){}
            }, o || {});
            var _self = $(this);
            var size = _self.size();
            var thumbObj = $(o.thumbObj);
            _self.removeClass(o.eventClass).eq(0).addClass(o.eventClass);
            thumbObj.eq(0).addClass(o.thumbNowClass);
            o.defaultEvent();

            thumbObj.click(function () {
                var indx = thumbObj.index($(this));
                thumbObj.removeClass(o.thumbNowClass);
                $(this).addClass(o.thumbNowClass);
                _self.removeClass(o.eventClass).eq(indx).addClass(o.eventClass);
                return o.callback(indx);
            });
            thumbObj.each(function (i) {
                if (i>0) {
                    $(this).one('click',function () {
                        return o.oneback(i);
                    });
                }
            });
        },
        switchShow:function(cls,scope){
            $(this).click(function(){
                var $scope=scope?$(scope):$("body");
                $scope.find(cls).hide();
                var vl=$(this).val()||$(this).attr("data-value");
                $scope.find(cls+"_"+vl).show();
            });
            return $(this);
        },
        /**
         * 取ID范围内所有值 $('#id').vals(空或true) -->{xx:yy} $('#id').vals(flase)
         * -->xx=yy 赋值 $('#id').vals({xx:yy})
         */
        vals : function(param) {
            if (typeof (param) == 'boolean' || param === undefined) {
                var c = {};// 暂存checkbox,选中的值用逗号隔开
                this.each(function() {
                    if(/input/i.test(this.tagName)){
                        if(this.type=='button'||this.type=='submit'){
                            return;
                        }

                        var key = this.name || this.id;
                        if (/checkbox/i.test(this.type)) {
                            var val = this.checked ? (this.value || 'on') : '';
                            if(val!=''){
                                if (c[key]) {
                                    c[key] = c[key] + "," + val;
                                } else {
                                    c[key] = val;
                                }
                            }
                        } else if (/radio/i.test(this.type)) {
                            if (this.checked){
                                c[key] = $.trim($(this).val());
                            }
                        } else {
                            c[key] = $.trim($(this).val());
                        }
                    } else if (/select/i.test(this.tagName)) {
                        var key = this.name || this.id;
                        c[key] = $.trim($(this).val()) + "";
                    } else if ($(this).has(":input").length) {
                        var sub = $(":input", this).vals();
                        $.extend(c, sub);
                    } else {
                        if(this.type=='button'||this.type=='submit'){
                            return;
                        }
                        var key = this.name || this.id;
                        c[key] = $.trim($(this).val());
                    }
                    //console.timeEnd(xx);
                });
                return param !== false ? c : $.param(c);
            } else if (typeof (param) == 'object') {
                this.each(function() {
                    if (/div|span|table|form|ul|li/i.test(this.tagName)) {
                        $(":input,label,b", this).vals(param);
                    } else {
                        var nm = this.name || this.id;
                        if(nm){
                            var vl    = param[nm],
                              arr  = nm.match(/(\w*)\[(\d*)\]/),
                              obj  = nm.match(/(\w*)\.(\w*)/);
                        if(arr&&arr.length==3){
                            vl=param[arr[1]][arr[2]];
                        }
                        if(obj&&obj.length==3){
                            vl=param[arr[1]][arr[2]];
                        }
                        if (vl !== undefined && vl !== null) {
                            if (/label|b/i.test(this.tagName)) {
                                $(this).text(vl);
                            }else if(/checkbox/i.test(this.type)){
                                if(vl===true) {
                                    $(this).attr("checked","checked");
                                }else{
                                    $(this).removeAttr("checked");
                                }
                            }else if(/radio/i.test(this.type)){
                                if(vl===true){
                                    if($(this).val()==='true'||$(this).val()==='1'){
                                        $(this).attr("checked","checked");
                                    }
                                }else{
                                    if($(this).val()==='false'||$(this).val()==='0'){
                                        $(this).attr("checked","checked");
                                    }
                                }
                            }else  {
                                $(this).val(vl);
                            }
                        }
                        }
                    }
                });
            }
        },
        clear : function(data) {
            $(":input:not(:submit)", this).val("");
            if (data)
                $(this).vals(data);
        }
    });

var $T = {
    getCookie : function (key,co) {
        var co = co||'aso',$co = $.cookie(co);
        if ($co!==null) {
            var coArr = $co.split('||');
            var coLen = coArr.length;
            for (i = 0; i < coLen; i++) {
                var vk = coArr[i].split(':=');
                if (vk[0] === key) {
                    return vk[1];
                }
            }
        }else {
            return null;
        }
    },
    setCookie : function (key,value,co,root) {
        root = root==undefined?true:root;
        var co = co||'aso',$co = $.cookie(co);
        var coVal;
        if ($co!==null) {
            if ($co.indexOf(key)>-1) {
                var coArr = $co.split('||');
                var coLen = coArr.length;
                for (i = 0; i < coLen; i++) {
                    var vk = coArr[i].split(':=');
                    if (vk[0] === key) {
                        coArr[i] = key+':='+value;
                    }
                }
                coVal = coArr.join('||');
            }else {
                coVal = $co+'||'+key+':='+value;
            }
        }else {
            coVal = key+':='+value;
        }
        if (root) {
            $.cookie(co,coVal,{ path: '/'});
        }else {
            $.cookie(co,coVal);
        }
        window.console && console.log('cooke中 '+co+'更新为 " '+$.cookie(co)+' " ');
    }
}



/**--jQuery.validate.js--**/
!function(a){a.extend(a.fn,{validate:function(b){var c,d;return this.length?(c=a.data(this[0],"validator"))?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(d=this.find("input, button"),d.filter(".cancel").click(function(){c.cancelSubmit=!0}),c.settings.submitHandler&&d.filter(":submit").click(function(){c.submitButton=this}),this.submit(function(b){function d(){if(c.settings.submitHandler){if(c.submitButton)var b=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm);return c.settings.submitHandler.call(c,c.currentForm),c.submitButton&&b.remove(),!1}return!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c):(b&&b.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing"),void 0)},valid:function(){var b,c;return a(this[0]).is("form")?this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b&=c.element(this)}),b)},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var e,f,g,h,i,j,d=this[0];if(b)switch(e=a.data(d.form,"validator").settings,f=e.rules,g=a.validator.staticRules(d),b){case"add":a.extend(g,a.validator.normalizeRule(c)),f[d.name]=g,c.messages&&(e.messages[d.name]=a.extend(e.messages[d.name],c.messages));break;case"remove":return c?(h={},a.each(c.split(/\s/),function(a,b){h[b]=g[b],delete g[b]}),h):(delete f[d.name],g)}return i=a.validator.normalizeRules(a.extend({},a.validator.metadataRules(d),a.validator.classRules(d),a.validator.attributeRules(d),a.validator.staticRules(d)),d),i.required&&(j=i.required,delete i.required,i=a.extend({required:j},i)),i}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+b.value)},filled:function(b){return!!a.trim(""+b.value)},unchecked:function(a){return!a.checked}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1==arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!=Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!=Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),c)}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a){(a.name in this.submitted||a==this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function d(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,"");try{c.settings[d]&&c.settings[d].call(c,this[0],b)}catch(e){}}var b,c;this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset(),b=this.groups={},a.each(this.settings.groups,function(c,d){a.each(d.split(/\s/),function(a,d){b[d]=c})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",d).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",d),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){b=this.validationTargetFor(this.clean(b)),this.lastElement=b,this.prepareElement(b),this.currentElements=a(b);var c=this.check(b);return c?delete this.invalid[b.name]:this.invalid[b.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),c},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0;for(c in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0==this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1==a.grep(this.errorList,function(a){return a.element.name==b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){return a(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},check:function(b){var c,d,e,f,g;b=this.validationTargetFor(this.clean(b)),c=a(b).rules(),d=!1;for(e in c){f={method:e,parameters:c[e]};try{if(g=a.validator.methods[e].call(this,b.value.replace(/\r/g,""),b,f.parameters),"dependency-mismatch"==g){d=!0;continue}if(d=!1,"pending"==g)return this.toHide=this.toHide.not(this.errorsFor(b)),void 0;if(!g)return this.formatAndAdd(b,f),!1}catch(h){throw this.settings.debug&&window.console&&console.log("exception occured when checking element "+b.id+", check the '"+f.method+"' method",h),h}}return d?void 0:(this.objectLength(c)&&this.successList.push(b),!0)},customMetaMessage:function(b,c){if(a.metadata){var d=this.settings.meta?a(b).metadata()[this.settings.meta]:a(b).metadata();return d&&d.messages&&d.messages[c]}},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor==String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customMetaMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b.method),d=/\$?\{(\d+)\}/g;"function"==typeof c?c=c.call(this,b.parameters,a):d.test(c)&&(c=jQuery.format(c.replace(d,"{$1}"),b.parameters)),this.errorList.push({message:c,element:a}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)b=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass),this.showLabel(b.element,b.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,c=this.validElements();c[a];a++)this.settings.unhighlight.call(this,c[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.attr("generated")&&d.html("<b>"+c+"</b>")):(d=a("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(b),generated:!0}).addClass(this.settings.errorClass).html("<b>"+c+"</b>"||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,a(b))),this.toShow=this.toShow.add(d)},errorsFor:function(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")==c})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){var c=this.currentForm;return a(document.getElementsByName(b)).map(function(a,d){return d.form==c&&d.name==b&&d||null})},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){return!a.validator.methods.required.call(this,a.trim(b.value),b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0==this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0==this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},dateDE:{dateDE:!0},number:{number:!0},numberDE:{numberDE:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor==String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var e,f,c={},d=a(b);for(e in a.validator.methods)f="required"===e&&"function"==typeof a.fn.prop?d.prop(e):d.attr(e),f?c[e]=f:d[0].getAttribute("type")===e&&(c[e]=!0);return c.maxlength&&/-1|2147483647|524288/.test(c.maxlength)&&delete c.maxlength,c},metadataRules:function(b){if(!a.metadata)return{};var c=a.data(b.form,"validator").settings.meta;return c?a(b).metadata()[c]:a(b).metadata()},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return delete b[d],void 0;if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength","min","max"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){b[this]&&(b[this]=[Number(b[this][0]),Number(b[this][1])])}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b.messages&&delete b.messages,b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!=d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";switch(c.nodeName.toLowerCase()){case"select":var e=a(c).val();return e&&e.length>0;case"input":if(this.checkable(c))return this.getLength(b,c)>0;default:return a.trim(b).length>0}},remote:function(b,c,d){var e,f,g;return this.optional(c)?"dependency-mismatch":(e=this.previousValue(c),this.settings.messages[c.name]||(this.settings.messages[c.name]={}),e.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=e.message,d="string"==typeof d&&{url:d}||d,this.pending[c.name]?"pending":e.old===b?e.valid:(e.old=b,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:g,success:function(d){var g,h,i,j;f.settings.messages[c.name].remote=e.originalMessage,g=d===!0,g?(h=f.formSubmitted,f.prepareElement(c),f.formSubmitted=h,f.successList.push(c),f.showErrors()):(i={},j=d||f.defaultMessage(c,"remote"),i[c.name]=e.message=a.isFunction(j)?j(b):j,f.showErrors(i)),e.valid=g,f.stopRequest(c,g)}},d)),"pending"))},minlength:function(b,c,d){return this.optional(c)||this.getLength(a.trim(b),c)>=d},maxlength:function(b,c,d){return this.optional(c)||this.getLength(a.trim(b),c)<=d},rangelength:function(b,c,d){var e=this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){var c,d,e,f,g;if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return!1;for(c=0,d=0,e=!1,a=a.replace(/\D/g,""),f=a.length-1;f>=0;f--)g=a.charAt(f),d=parseInt(g,10),e&&(d*=2)>9&&(d-=9),c+=d,e=!e;return 0==c%10},accept:function(a,b,c){return c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(b)||a.match(new RegExp(".("+c+")$","i"))},equalTo:function(b,c,d){var e=a(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()});return b==e.val()}}}),a.format=a.validator.format}(jQuery),function(a){var c,b={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,c,d){var e=a.port;"abort"==a.mode&&(b[e]&&b[e].abort(),b[e]=d)}):(c=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"==e?(b[f]&&b[f].abort(),b[f]=c.apply(this,arguments)):c.apply(this,arguments)})}(jQuery),function(a){jQuery.event.special.focusin||jQuery.event.special.focusout||!document.addEventListener||a.each({focus:"focusin",blur:"focusout"},function(b,c){function d(b){return b=a.event.fix(b),b.type=c,a.event.handle.call(this,b)}a.event.special[c]={setup:function(){this.addEventListener(b,d,!0)},teardown:function(){this.removeEventListener(b,d,!0)},handler:function(b){return arguments[0]=a.event.fix(b),arguments[0].type=c,a.event.handle.apply(this,arguments)}}}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})}(jQuery);



/**--jQuery.metadata.js--**/
(function($){$.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(type,name){this.defaults.type=type;this.defaults.name=name},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);if(!settings.single.length)settings.single="metadata";var data=$.data(elem,settings.single);if(data)return data;data="{}";if(settings.type=="class"){var m=settings.cre.exec(elem.className);if(m)data=m[1]}else if(settings.type=="elem"){if(!elem.getElementsByTagName)return undefined;var e=elem.getElementsByTagName(settings.name);if(e.length)data=$.trim(e[0].innerHTML)}else if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);if(attr)data=attr}if(data.indexOf("{")<0)data="{"+data+"}";data=eval("("+data+")");$.data(elem,settings.single,data);return data}}});$.fn.metadata=function(opts){return $.metadata.get(this[0],opts)}})(jQuery);

/**--messages_cn.js--**/
jQuery.extend(jQuery.validator.messages, {
        required: "必填字段",
        remote: "请修正该字段",
        email: "请输入正确格式的电子邮件",
        url: "请输入合法的网址",
        date: "请输入合法的日期",
        dateISO: "请输入合法的日期 (ISO).",
        number: "请输入合法的数字",
        digits: "只能输入整数",
        creditcard: "请输入合法的信用卡号",
        equalTo: "请再次输入相同的值",
        accept: "请输入拥有合法后缀名的字符串",
        maxlength: jQuery.validator.format("输入内容最长 {0}"),
        minlength: jQuery.validator.format("输入内容最短 {0}"),
        rangelength: jQuery.validator.format("输入内容长度必须介于 {0} 和 {1} 之间"),
        range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
        max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
        min: jQuery.validator.format("请输入一个最小为 {0} 的值")
});

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [ o[this.name] ];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    $.each(o,function (k,v) {
        if (v.push) {
            o[k] = v.join(',');
        }
    });
    return o;
}