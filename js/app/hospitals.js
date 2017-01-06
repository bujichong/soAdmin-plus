define(function () {
    var back  ={
    init : function () {
      $grid.newGrid("#gridBox",{
        toolbar:[
          {iconCls:'icon-look',text:'查看',onlyOne:true,notNull:'请选择你要查看的记录！',click: function(grid,rowData){
            window.console && console.log(rowData);
            var popHtml = template('popDetails', rowData);
            $.sobox.pop({
              title : '医院详情',
              cls : 'eyePop',
              type : 'content',
              content : popHtml,
              width:450,
              btn:[{'text':'关 闭'}]
            });
          }}
          ,{iconCls:'icon-add',text:'新增',url:'hospitalForm.html',noMax: true,popHeight:310,title:'医院信息-新建'}
          ,{iconCls:'icon-edit',text:'修改',url:'hospitalForm.html?id={id}',onlyOne:true,noMax: true,popHeight:310,title:'医院信息-编辑',notNull:'请选择你要编辑的记录！'}
          ,{iconCls:'icon-del',text:'删除',onlyOne:true,url:'json/true.js?id={id}',rowNullMsg:'请选择你要删除的记录!',ajax:true}
        ],
        fitColumns : false,
        columns:[[
          {title:'医院名称',field:'hosName',width:160}
          ,{title:'省份',field:'province',width:100}
          ,{title:'城市',field:'city',width:100}
          ,{title:'级别',field:'level',width:60}
          ,{title:'联系方式',field:'phone',width:120}
          ,{title:'状态',field:'state',width:60,formatter:function(r){
            var stateHtml = ['','<span>正常</span>','<span class="orange">延迟</span>'];
                // window.console && console.log(r);
                return stateHtml[r];
              }
            }
          ,{title:'筹建负责人',field:'preparer',width:80}
          ,{title:'传真',field:'fax',width:120}
          // ,{title:'地址',field:'address',width:200}
        ]],
        url:'json/hospitals.js'
        // ,offset : -36
      });


    $('#ul-provinceTree').tree({
      animate : true,
      onlyLeafCheck : true,
      lines : true,
      data :[{
        id : 0,
        text: '全国',
        children: [
        {id:1,text: '山东'}
        ,{id:2,text: '湖南'}
        ,{id:22,text: '湖北'}
        ,{id:14,text: '甘肃'}
        ,{id:26,text: '广东'}
        ,{id:13,text: '河北'}
        ,{id:11,text: '安徽'}
        ,{id:8,text: '广西'}
        ,{id:9,text: '福建'}
        ,{id:21,text: '浙江'}
        ,{id:23,text: '吉林'}
        ,{id:15,text: '辽宁'}
        ]
      }],
      onClick : function (node) {
        // window.console && console.log(node);
        var id = node.id;
        $grid.load('#gridBox',{provinceId:id});
      }
    });

    }
  }
  return back;
});