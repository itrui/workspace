const spanDown= function (span,xl) {
  $(span).click(function (event) {
    event.stopPropagation();
    var _this=$(this);
    $(span).siblings(xl).slideUp();
    if(_this.siblings(xl).is(":hidden")){
      _this.siblings(xl).slideDown();
    }else{
      _this.siblings(xl).slideUp();
    }
  });
};

const dropDown= function() {
  this.spanDown('.item_span','.item_xl');
  $('.item_xl_dl dd a').click(function (event) {
    event.stopPropagation();
    var item_a=$(this).parents('.item_xl').siblings('.item_span').children('.item_a');
    $(this).addClass('active').siblings().removeClass('active');
    item_a.text($(this).text());
    item_a.addClass('on');
    $(this).parents('.item_xl').slideUp();
  });
};


export {spanDown, dropDown}


/*
export default{
  install(Vue,options)
  {
    Vue.prototype.spanDown = function (span,xl) {
      $(span).click(function (event) {
        event.stopPropagation();
        var _this=$(this);
        $(span).siblings(xl).slideUp();
        if(_this.siblings(xl).is(":hidden")){
          _this.siblings(xl).slideDown();
        }else{
          _this.siblings(xl).slideUp();
        }
      });
    };


   /!* Vue.prototype.dropDown= function() {
      this.spanDown('.item_span','.item_xl');
      $('.item_xl_dl dd a').click(function (event) {
        event.stopPropagation();
        var item_a=$(this).parents('.item_xl').siblings('.item_span').children('.item_a');
        $(this).addClass('active').siblings().removeClass('active');
        item_a.text($(this).text());
        item_a.addClass('on');
        $(this).parents('.item_xl').slideUp();
      });
    }
*!/
  }
}
*/

