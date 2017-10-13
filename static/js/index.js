/**
 * Created by zhaowei on 2017/7/11.
 */
$(function(){

    /************************ 三联动开始 ************************/
    var $osBox=$('.item_thr');
    //品牌
    var $dlpar=$('.Brand .item_xl_dl');
    //车型
    var $capar=$('.Cars .item_xl_dl');
    //车系
    var $mopar=$('.Models .item_xl_dl');

    spanDown('.item_span','.item_thr_xl');

    /*查找品牌dt的html添加属性data*/
    $dlpar.find('dl dt').each(function(){
        var $dthis=$(this);
        $dthis.attr('data',$dthis.html());
    });

    /*选择A,B, C...瞄点滚动*/
    $('.letter a').each(function(){
        var $yathis=$(this);
        $yathis.attr('data',$yathis.html());
        $yathis.click(function(event){
            event.stopPropagation();
            if($yathis.attr('data')==$('.Brand dl dt').eq($yathis.index()).attr('data')){
                $dlpar.scrollTop(0);
                var postiontop = $dlpar.find("dt[data='" + $(this).html() + "']").position().top;
                $dlpar.animate({scrollTop:(postiontop-43)+ "px"});
            }
        })
    });

    /*品牌*/
    $dlpar.find('dl dd a').click(function(event){
        event.stopPropagation();
        $(this).addClass('active').parents('.item_xl_dl').find('a').removeClass('active');
        $(this).parents('.item_thr').css('width','526px');
        $('.Cars').show();
        $('.Models').hide();
    });

    /*车型*/
    $capar.find('dl dd a').click(function(event){
        event.stopPropagation();
        $(this).parents('.item_thr').css('width','768px');
        $('.Models').show();
    });

    /*车系*/
    $mopar.find('dl dd a').click(function(event){
        event.stopPropagation();
        var $dlcartxt=$dlpar.find('.active').text();
        var $capartxt=$capar.find('.active').text();
        var $mopartxt=$mopar.find('.active').text();
        var item_a=$(this).parents('.item_thr_xl').siblings('.item_span').find('.item_a');
        $(this).addClass('active').parents('.item_xl_dl').find('a').removeClass('active');
        item_a.text($dlcartxt+' '+$capartxt+' '+$mopartxt);
        item_a.addClass('on');
        $osBox.slideUp();
    });

    thrPosition();  //位置

    $(window).resize(function(){
        thrPosition();
    });

    /************************ 三联动结束 ************************/

/*
    /!************************ 城市下拉开始 ************************!/
    spanDown('.item_span','.item_city_xl');
    /!*省*!/
    $('#selectProv').find('dl dd a').click(function(event){
        event.stopPropagation();
        $(this).addClass('active').parents('.item_xl_dl').find('a').removeClass('active');
        $('#selectCity').show();
    });

    /!*市*!/
    $('#selectCity').find('dl dd a').click(function(event){
        event.stopPropagation();
        var $proTxt=$('#selectProv').find('.active').text();
        var $cityTxt=$('#selectCity').find('.active').text();
        var item_a=$(this).parents('.item_city_xl').siblings('.item_span').find('.item_a');
        $(this).addClass('active').parents('.item_xl_dl').find('a').removeClass('active');
        item_a.text($proTxt+' '+$cityTxt);
        item_a.addClass('on');
        $('.item_city_xl').slideUp();
    });

    /!************************ 城市下拉结束 ************************!/*/


    /************************ 多选下拉开始(商业险) ************************/

    $('.zw_risks_btn a').click(function () {
        var arr=[];
        var _lab=$(this).parents('.zw_risks_btn').siblings('.zw_risks_check').find('.active .zw_check_lab');
        $(_lab).each(function () {
            arr.push($(this).text())
        });
        var item_a=$(this).parents('.item_xl').siblings('.item_span').find('.item_a');
        item_a.text(arr.join('，')).addClass('on');
        $(this).parents('.item_xl').slideUp();
    });
    /************************ 多选下拉结束(商业险) ************************/



    /**
     * 审核退回弹出层
     */
    $('.zw_state_back').click(function () {
        $('.tan-wrap').removeClass('hide');
        $('#zblack').removeClass('hide');
    });
    $('.tan_title_close').click(function () {
        $(this).parents('.tan-wrap').addClass('hide');
        $('#zblack').addClass('hide');
    });


    /**
     * 审核信息内部切换
     */
    $('.zw_info_list li').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('.zw_info_sj_up').removeClass('zw_info_sj_up').addClass('zw_info_sj_down');

        }else {
            $(this).addClass('active');
            $(this).find('.zw_info_sj_down').removeClass('zw_info_sj_down').addClass('zw_info_sj_up');
        }
    });

    /**
     * 单选按钮组 radio
     */
    $('.zw_radio_li').click(function () {
        if(!$(this).hasClass('active')){
            $(this).addClass('active').siblings().removeClass('active')
        }
    });

    /**
     * 多选按钮组 checkbox
     */
    $('.zw_check_li').click(function () {
        if(!$(this).hasClass('active')){
            $(this).addClass('active')
        }else {
            $(this).removeClass('active')
        }
    });



    leftHeight();   //左右高度
    // dropDown();     //下拉
    inpOnFocus();   //input获得焦点,更改默认值
    timeOnFocus();  //时间input获得焦点,更改设置


});


/**
 * 左边跟随右边的高度
 * @type {*|jQuery}
 */
function leftHeight() {
    var lh=$('.ltWrap').height();
    var rh=$('.rtWrap').height();
    var wh=$(window).height();
    if(lh<rh){
        $('.ltWrap').height(rh);
        if( rh<wh){
            $('.ltWrap').height(wh)
        }
    }else{
        if( lh<wh){
            $('.ltWrap').height(wh)
        }
    }

}



/**
 * tab切换 style
 * @param tit
 * @param box
 */
function tabStyle(tit,box){
    $(tit).children().click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(box).children().hide().eq($(this).index()).show();
    });
}


/**
 * tab切换 class
 * @param tit
 * @param box
 */
function tab(tit,box){
    $(tit).children().click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var _box=$(box).children();
        if(_box.hasClass('hide')){
            _box.addClass('hide').eq($(this).index()).removeClass('hide');
        }
    });
}


/**
 * 输入框提示语言显示隐藏
 */
function inpOnFocus() {
    var arr=[];
    $('.item_inp').each(function (index) {
        arr.push($(this).val());
        if(!$(this).hasClass('on')){
            $(this).focus(function () {
                if($(this).val()==arr[index]){
                    $(this).val('');
                    $(this).addClass('on');
                }
            }).blur(function () {
                if( $(this).val()==''){
                    $(this).val(arr[index]);
                    $(this).removeClass('on');
                }
            })
        }
    });
}


/**
 * 时间提示语言显示隐藏
 */
function timeOnFocus() {
    var arrTime=[];
    $('.item_time').each(function (index) {
        arrTime.push($(this).val());
        if($(this).val()==arrTime[index]){
            $(this).removeClass('on');
        }
        $(this).click(function () {
            $(this).addClass('on');
        });
    });
}


/**
 * 点击空白处清除显示
 */
$(document).click(function(e){
    var _con = $('.item_span');
    var _con_li=$('.item_xl');
    if(!_con.is(e.target) && _con.has(e.target).length === 0 && !_con_li.is(e.target) && _con_li.has(e.target).length === 0 ){
        $('.item_xl').slideUp();
        $('.item_thr_xl').slideUp();
    }
});


/**
 * 点击span显示下拉框
 * @param span 点击
 * @param xl 下拉框
 */

function spanDown(span,xl) {
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

}



/*
*
 * 下拉框
function dropDown() {
    spanDown('.item_span','.item_xl');
    $('.item_xl_dl dd a').click(function (event) {
        event.stopPropagation();
        var item_a=$(this).parents('.item_xl').siblings('.item_span').children('.item_a');
        $(this).addClass('active').siblings().removeClass('active');
        item_a.text($(this).text());
        item_a.addClass('on');
        $(this).parents('.item_xl').slideUp();
    });
}
*/

/**
 * 三联动位置
 */
function thrPosition() {
    $('.item_thr').parents('.item_li').click(function () {
        if(!$('.item_thr').is(':hidden')){
            var l=$('.item_thr').parents('.item_li').offset().left;
            var w=$('.item_thr').parents('.item_li').width();
            var cw=$('.item_thr').width();
            if(l>600){
                $('.item_thr').offset({ left: l+w-cw-2 });
            }else{
                $('.item_thr').offset({ left: l});
            }
        }
    });
}


/**
 * 审核弹出
 * @param $images
 * @param $buttons
 */
function viewerClick($images,$buttons) {
    $($buttons).on('click', 'a', function () {
        var data = $(this).data();
        if (data.method) {
            $($images).viewer(data.method);
        }
    });
}






