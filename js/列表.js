/*
 * @Author: your name
 * @Date: 2021-03-09 11:29:58
 * @LastEditTime: 2021-03-11 11:49:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\移动端\找房无忧\ZFWY\js\列表.js
 */

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

$('.b_3 #uls li').click(function(){
    $(this).css('color','red').siblings().css('color','').removeClass('nan')
})
$('.b_3 #uls1 li').click(function(){
    $(this).css('color','red').siblings().css('color','').removeClass('wushi')
 })
 $('.b_3 #uls2 li').click(function(){
    $(this).css('color','red').siblings().css('color','').removeClass('xuequ')
 })

 $('.b_2 #lis').click(function(){
     $('.b_2').css('display','none')
 })

 $('.b_1 li').click(function(){
    $(this).css('color','red').siblings().css('color','').removeClass('buxian')
 })

 $('.b_ #uls3 li').click(function(){
     $(this).css('color','#ff8a00').siblings().css('color','').removeClass('lei')
 })

 $('.b_ #uls4 li').click(function(){
    $(this).css('color','#ff8a00').siblings().css('color','').removeClass('ming')
})