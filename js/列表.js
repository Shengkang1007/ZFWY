
$('.cc').click(function(){
    $('.b_').toggle();
    $(this).css('color','#ff8a00');
    $('.cc1').css('color','#000');
    $('.cc2').css('color','#000');
    $('.cc3').css('color','#000');
    $('.b_1').css('display','none');
    $('.b_2').css('display','none');
    $('.b_3').css('display','none');
   
})
$('.cc1').click(function(){
    $('.b_1').toggle();
    $(this).css('color','#ff8a00');
    $('.cc').css('color','#000');
    $('.cc2').css('color','#000');
    $('.cc3').css('color','#000');
    $('.b_').css('display','none');
    $('.b_2').css('display','none');
    $('.b_3').css('display','none');
    
})
$('.cc2').click(function(){
    $('.b_2').toggle();
    $(this).css('color','#ff8a00');
    $('.cc1').css('color','#000');
    $('.cc').css('color','#000');
    $('.cc3').css('color','#000');
    $('.b_').css('display','none');
    $('.b_1').css('display','none');
    $('.b_3').css('display','none');
})
$('.cc3').click(function(){
    $('.b_3').toggle();
    $(this).css('color','#ff8a00');
    $('.cc1').css('color','#000');
    $('.cc2').css('color','#000');
    $('.cc').css('color','#000');
    $('.b_').css('display','none');
    $('.b_1').css('display','none');
    $('.b_2').css('display','none');
    
})
$('.b_2>li>span').on('click',function(){
    $(this).addClass('cc_');
    $(this).parent().siblings().find('span').removeClass('cc_');
});
