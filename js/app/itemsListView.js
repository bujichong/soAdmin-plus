define(function(){
  var back = {
        init : function () {
            var me = this;
            window.console && console.log('itemsListView js init');
            me.renderItemsList();//渲染数据列表
            me.itemCellH();//js设置单元格高度相同
            me.areaScroll();//头部和左侧随内容区域一起滚动
        },
        itemsData  : itemsData,//暂存渲染列表数据
        renderItemsList : function () {
            var me = this;
            me.renderMonths();//渲染月
            me.renderItemsTitle();//渲染标题
            me.renderItemsCont();//渲染内容项
        },
        renderMonths : function () {
            window.console && console.log('renderMonths');
            var months = itemsData.totalMonths;
            var numDic = ['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九'];
            var $ul = $('<ul class="ul-colHead"></ul>');
            var liHtml = '';
            for (var i = 0; i <months; i++) {
                liHtml += '<li class="li-colMonth"><p class="p-month">第'+numDic[i]+'月</p><ul class="ul-colWeeks"><li class="li-weeks">第一周</li><li class="li-weeks">第二周</li><li class="li-weeks">第三周</li><li class="li-weeks">第四周</li></ul></li>';
            };
            $ul.append(liHtml);
            $('.itemsHeadBox').append($ul);
        },
        renderItemsTitle : function () {
            window.console && console.log('renderItemsTitle');
            var $ul = $('<ul class="ul-itemsSide"></ul>');
            var liHtml = '';
            $.each(itemsData.rows, function (i,v) {
                liHtml += '<li class="li-itemSide'+(i%2==0?' row-odd':'')+'"><span class="s-itemT">'+v.itemTitle+'</span></li>'
            });
            $ul.append(liHtml);
            $('.itemsSideBox').append($ul);
        },
        renderItemsCont : function () {
            var rowsHtml = '';
            $.each(itemsData.rows, function (i,v) {
                // window.console && console.log(v);
                rowsHtml += '<div class="itemsRow">';
                $.each(v.weekItems,function (j,w) {
                    // window.console && console.log(w);
                    rowsHtml += '<div class="colCont">';
                    if (w.length) {
                        $.each(w,function (k,x) {
                            rowsHtml += '<p class="p-col'+(x.delay?' orange':'')+(x.new?' p-newItem':'')+'" rel="'+x.id+'">'+x.item+(x.delay?'<span class="s-delay">延迟</span>':'')+'</p>';
                        });
                    };
                    rowsHtml += '</div>';
                });
                rowsHtml += '</div>';
            });
            $('.itemsListScroll').html(rowsHtml);
        },
        areaScroll: function () {
            var $head = $('.ul-colHead');
            var $side = $('.ul-itemsSide');
            $('.itemsListBox').scroll(function () {
                var _self = $(this);
                var l = _self.scrollLeft();
                var t = _self.scrollTop();
                $head.css('left',-l+'px');
                $side.css('top',-t+'px');
            });
        },
        itemCellH : function () {
            var me = this;
            me._eachSameH();
        },
        _eachSameH : function (objCls) {
            // window.console && console.log($('.itemsRow').length);
            $('.itemsRow').each(function (i,v) {
                var maxH = 0;
                var $rows = $(this).find('.colCont');
                $rows.each(function () {
                    // $(this).find('.p-col:last').addClass('p-col-last');
                    var h = $(this).height();
                    maxH = maxH>h?maxH:h;
                });
                // window.console && console.log(maxH);
                maxH = maxH-1;
                window.console && console.log(maxH);
                $rows.height(maxH);
                $('.li-itemSide').eq(i).height(maxH);
           });
        }

    };
    return back;
});