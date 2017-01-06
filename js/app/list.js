define({
  list : function () {
      window.console && console.log('listTest init');
      $grid.newGrid("#gridBox",{
        // toolbar:'#baseToobar',
        tools:[
          {iconCls:'plus',text:'新增',url:'form.html',popHeight:390,title:'用户信息-新增'}
          ,{iconCls:'pencil',btnCls:'warning',text:'修改',onlyOne:true,popHeight:390,url:'form.html?id={id}',title:'用户信息-修改',notNull:'请选择你要修改的记录!'}
          ,{iconCls:'trash',btnCls:'danger',text:'删除',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！', ajax:true}
        ],
        rownumbers : false,
        fitColumns : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'用户名',field:'userName',sortable:true,width:100}
          ,{title:'姓名',field:'realName',sortable:true,width:100}
          ,{title:'性别',field:'sex',sortable:true,width:60,formatter:function(r){
                return ['','男','女'][r];
              }
            }
          ,{title:'部门',field:'orgName',sortable:true,width:60}
          ,{title:'手机号',field:'mobile',width:100}
          ,{title:'Email',field:'email',width:120}
          ,{title:'QQ',field:'QQ',width:100}
          ,{title:'微信号',field:'weChat',width:120}
          ,{title:'最后登录时间',field:'lastLoginTime',width:140}
          ,{title:'最后登录IP',field:'lastLoginIp',width:100}
          ,{title:'状态',field:'state',width:60,formatter:function(r){
            var stateHtml = ['','<span class="green">正常</span>','<span class="orange">停用</span>'];
                // window.console && console.log(r);
                return stateHtml[r];
              }
            }
          ,{title:'创建日期',field:'createTime',width:120,format:'yyyy-MM-dd hh:mm:ss'}
          ,{title:'最后修改时间',field:'lastModifyTime',width:140}
        ]],
        url:'json/users.js'
        // ,offset : -50
      });


  }
});