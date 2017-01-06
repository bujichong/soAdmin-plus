define(function () {
    var back  ={
    edit : function () {
      var random = Math.floor(Math.random()*1000000);

      $('.hk_pop').click(function() {
          var popId = layer.open({
            type: 0,
            content: '<ul id="ul-Tree-'+random+'"></ul>',
            area : ['500px','300px'],
            title :'请单击选择',
            btn:null
          });
          $('#ul-Tree-'+random).tree({
            animate : true,
            lines : true,
            url:'/json/groupTree.js',
            flatData: true,
            onClick : function (node) {
              window.console && console.log(node);
              $('.hk_pop').val(node.text);
              layer.close(popId);
            }
          });
      });



    }
  }
  return back;
});