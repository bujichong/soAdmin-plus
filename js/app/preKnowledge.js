define(function () {
    var back  ={
    init : function () {
      $grid.newGrid("#gridBox",{
        toolbar:[
          {iconCls:'icon-upload',text:'上传',url:'uploadKnowledge.html',noMax: true,popWidth:400,popHeight:230,title:'知识库-上传'}
          ,'-'
          ,{iconCls:'icon-down',text:'下载',onlyOne:true,notNull:'请选择你要下载的记录！',click: function(grid,rowData){
            window.console && console.log(rowData);
          }}
          ,{iconCls:'icon-del',text:'删除',onlyOne:true,url:'form.html?id={id}',notNull:'请选择你要删除的记录!',ajax:true}
        ],
        columns:[[
          {field:'id',hidden:true}
          ,{title:'知识库文件',field:'fileName',width:160}
          ,{title:'发布人',field:'issuer',width:100}
          ,{title:'发布时间',field:'issueTime',width:60}
        ]],
        url:'json/knowledge.js'
        // ,offset : -36
      });


    $('#ul-provinceTree').tree({
      animate : true,
      onlyLeafCheck : true,
      lines : true,
      data :[{
        id: 0,
        text: '集团',
        children: [
        {id:1,text: '行政'}
        ,{id:2,text: '信息部',
          children: [
          {id:21,text: '类别1'}
          ,{id:22,text: '类别2'}
          ,{id:25,text: '类别3'}
          ]
        }
        ,{id:3,text: '筹建指导',
          children: [
          {id:21,text: '类别1'}
          ,{id:22,text: '类别2'}
          ,{id:25,text: '类别3'}
          ]}
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