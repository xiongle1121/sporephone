/**swiper轮播**/
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    paginationClickable: false,
    mode: 'vertical',
    onSlideChangeStart:function(){
        if(mySwiper.activeIndex==2){
            $('.bg .btn').css('backgroundImage','url(img/sliding-up@3x.png)').addClass('up');
        }else{
            $('.bg .btn').css('backgroundImage','url(img/sliding-down@3x.png)').removeClass('up');
        }
    }
})
/**按钮点击图片上下移动**/
$('#btn').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('up')){
        mySwiper.swipePrev();
    }else{
        mySwiper.swipeNext();
    }
})
/**二级菜单的显示与隐藏**/
$('.secondMenu').slideUp();
$('#menu p.title').on('click',function(){
    var ul=$(this).siblings('ul');
    if($(this).hasClass('active')){
        ul.slideUp();
        $(this).removeClass('active');
    }else{
        var other=$(this).parent().siblings('li').find('p.title');
        if(other.hasClass('active')){
            other.removeClass('active');
            other.siblings('ul').slideUp();
        }
        ul.slideDown();
        $(this).addClass('active');
    }
})
/*登录注册弹出框与menuPop的显示与隐藏事件*/
$(function() {
    $('#head-nav p').on('click', function () {
        var id = $(this).attr('data-target');
        if (id === 'person') {
            if (!($(this).hasClass('close'))){
                $('#' + id).animate({left: 0});
                $(this).addClass('close');
                $('.bg').one('click', function () {
                    /**点击弹出框的其他地方，弹出框要消失**/
                    $('#' + id).animate({left: '-100%'});
                    $('.person').removeClass('close');
                })
                if ($('.menu').hasClass('close')) {//登录框显示，menu弹出框隐藏
                    var sid = $(this).siblings('p').attr('data-target');
                    $('#' + sid).animate({right: '-100%'});
                    $(this).siblings('p').removeClass('close');
                }
            } else {
                $('#' + id).animate({left: '-100%'});
                $(this).removeClass('close');
            }
        } else {
            if (!($(this).hasClass('close'))) {
                $('#' + id).animate({right: 0});
                $(this).addClass('close');
                $('.bg').one('click', function(){
                    /**点击弹出框的其他地方，弹出框要消失**/
                    $('#' + id).animate({right: '-100%'});
                    $('.menu').removeClass('close');
                })
                if ($('.person').hasClass('close')){//menu弹出框显示，登录框隐藏
                    var sid = $(this).siblings('p').attr('data-target');
                    $('#' + sid).animate({left: '-100%'});
                    $(this).siblings('p').removeClass('close');
                }
            } else {
                $('#' + id).animate({right: '-100%'});
                $(this).removeClass('close');
            }
        }
    })
})