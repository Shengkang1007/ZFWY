var p = $('.p');
var y = $('.y');
var p_p = $('.p-p');
var y_p = $('.y-p');
var s3 = $('.s3');
var s3_2 = $('.s3-2');
touch.on(p, 'tap', function() {
    $(this).css('fontWeight', '600');
    y.css('fontWeight', '500');
    s3_2.removeClass('show');
    s3.addClass('show')
    p_p.css('background', '#ff8a00');
    y_p.css('background', '');
});
touch.on(y, 'tap', function() {
    $(this).css('fontWeight', '600');
    p.css('fontWeight', '500');
    s3.removeClass('show');
    s3_2.addClass('show')
    y_p.css('background', '#ff8a00');
    p_p.css('background', '#ccc');
});
// --------------------------------------
//登录
var go = $('.go')
var DH, MM, YZM;
var s3_DH = $('.s3 input:first');
var s3_MM = $('.s3 input:last');
var s3_2_DH = $('.s3-2 input:first');
var YZMobj = $('.s3-2 input:last');
var yzm_btn = $('.s3-2 button')
touch.on(go, 'tap', function() {
    if (s3.attr('class') == 's3 show') {
        DH = s3_DH.val();
        MM = s3_MM.val();
        if (DH.length == 11) {
            location = './找房无忧首页.html';
        };
    } else {
        DH = s3_2_DH.val();
        YZM = YZMobj.val();
        if (DH.length == 11 && YZM == '123') {
            location = './找房无忧首页.html';
        };
    };
});
touch.on(yzm_btn, 'tap', function() {
    alert('验证码为：123')
})