$(function(){
  var popobj = [];
  $(".popup-modal").each(function(index){
    $(this).hide(); //隐藏模态框
    popobj[index] = {};
    popobj[index].modal = this; //模态框对象
    $(this).find(".popup-close").attr("modal-id",index); //模态框id
  });
  $(".popup-close").bind("click",function(){ //关闭当前模态框
    $(popobj[$(this).attr("modal-id")].modal).hide();
  });
  $(".popup-open").bind("click",function(){ //打开对应模态框
    $($(this).attr("modal-for")).show();
  });
});
