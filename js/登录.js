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
//验证
var s3_DH = $('.s3 input:first');
var s3_MM = $('.s3 input:last');
var s3_2_DH = $('.s3-2 input:first');
var YZMobj = $('.s3-2 input:last');
var yzm_btn = $('.s3-2 button')
var phone = /^1[3-8]\d{9}$/;
var testP = /(?!^([a-zA-Z]+|\d+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,20}$/;
var biaoshi = 0;

s3_DH.blur(function() {

    if (s3_DH.val().match(phone) == null) {
        s3_DH.siblings('span').css('display', 'block');
    } else {
        s3_DH.siblings('span').css('display', 'none');
        biaoshi += 1;

    };
});
s3_2_DH.blur(function() {

    if (s3_2_DH.val().match(phone) == null) {
        s3_2_DH.siblings('span').css('display', 'block');
    } else {
        s3_2_DH.siblings('span').css('display', 'none');
        biaoshi += 1;

    };
});
s3_MM.blur(function() {
    if (s3_MM.val().match(testP) == null) {
        s3_MM.siblings('span').css('display', 'block');
    } else {
        s3_MM.siblings('span').css('display', 'none');
        biaoshi += 1;

    };
});


// --------------------------------------

//登录
var go = $('.go')
var DH, MM, YZM;

touch.on(go, 'tap', function() {
    if (s3.attr('class') == 's3 show') {
        DH = s3_DH.val();
        MM = s3_MM.val();

        console.log(biaoshi);
        if (biaoshi == 2) {
            location = './找房无忧首页.html';
        };
    } else {
        DH = s3_2_DH.val();
        YZM = YZMobj.val();

        //验证码检查
        if (YZM == 123) {
            YZMobj.siblings('span').css('display', 'none');
            biaoshi += 1;
        } else {
            YZMobj.siblings('span').css('display', 'block');
        };
        console.log(biaoshi);
        if (biaoshi == 2) {
            location = './找房无忧首页.html';
        };
    };
});
touch.on(yzm_btn, 'tap', function() {
    alert('验证码为：123')
})