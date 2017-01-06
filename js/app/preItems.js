define(function () {
    var back  ={
    manager : function () {
      var me = this;
      $grid.newGrid("#gridBox",{
        toolbar:[
          {iconCls:'icon-edit',text:'编辑状态',url:'preManagerItemForm.html?id={id}',onlyOne:true,noMax: true,popHeight:130,popWidth:420,title:'筹建事项-编辑状态',notNull:'请选择你要编辑的记录！'}
          // ,{iconCls:'icon-del',text:'删除',onlyOne:true,url:'json/true.js?id={id}',rowNullMsg:'请选择你要删除的记录!',ajax:true}
        ],
        // fitColumns : false,
        columns:[[
          {title:'id',field:'id',hidden:true}
          ,{title:'工作类别',field:'deptName',width:80,formatter:function(r){
                return '<strong style="color:#027EB7;">'+r+'</strong>';
              }}
          ,{title:'筹建工作事项',field:'item',width:320,align:'left'}
          ,{title:'状态',field:'state',width:60,formatter:function(r){
            var stateHtml = ['','<span>正常</span>','<span class="orange">延迟</span>'];
                // window.console && console.log(r);
                return stateHtml[r];
              }
            }
          ,{title:'创建人',field:'creater',width:80}
          ,{title:'创建时间',field:'createTime',width:140}
          // ,{title:'地址',field:'address',width:200}
        ]]
        ,url:'json/preHosItems.js'
        ,onLoadSuccess : function (data) {
          // window.console && console.log(data);
          $util.gridMergeCols('#gridBox',data,'deptId','deptName');//合并同部门标题行
        }
        ,offset : -40
      });
      me.tabClick('.ul-tab-title-a');
      me.tabClick('.ul-tab-title-b');
    },
    tabClick : function (tabbox) {
      var $tabbox = $(tabbox);
      var $tab = $tabbox.find('.tab-title');
      $tab.click(function () {
        var ix = $tab.index(this);
        $tabbox.find('.tab-now').removeClass('tab-now');
        $(this).addClass('tab-now');
      });
    }
  }
  return back;
});