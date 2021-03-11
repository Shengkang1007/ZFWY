//发送验证码
var yzm_btn = $('.s3-2 button')

touch.on(yzm_btn, 'tap', function() {
    alert('验证码为：123')
});
// ----------------------------------------
var submit = $('.s4 button');
var DH = $('.s3-2 input:first');
var reMM = $('.s3-2 input:last');
var YZM = $('.yzm');
var MM = $('.MM');
// ----------------------------------------
//验证
var phone = /^1[3-8]\d{9}$/;
var testP = /(?!^([a-zA-Z]+|\d+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,20}$/;
var biaoshi = 0;


DH.blur(function() {

    if (DH.val().match(phone) == null) {
        DH.siblings('span').css('display', 'block');
    } else {
        DH.siblings('span').css('display', 'none');
        biaoshi += 1;

    };
});
MM.blur(function() {
    if (MM.val().match(testP) == null) {
        MM.siblings('span').css('display', 'block');
    } else {
        MM.siblings('span').css('display', 'none');
        biaoshi += 1;

    };
});



// ----------------------------------------

//提交
var dh, mm, yzm, remm;
touch.on(submit, 'tap', function() {

    dh = DH.val();
    yzm = YZM.val();
    mm = MM.val();
    remm = reMM.val();
    //验证码检查
    if (yzm == 123) {
        YZM.siblings('span').css('display', 'none');
        biaoshi += 1;
    } else {
        YZM.siblings('span').css('display', 'block');
    };
    console.log('3' + biaoshi);

    //重复密码验证
    if (remm == mm) {
        reMM.siblings('span').css('display', 'none');
        biaoshi += 1;
    } else {
        reMM.siblings('span').css('display', 'block');
    };
    console.log('4' + biaoshi);

    if (biaoshi >= 4) {
        console.log('tj');
        biaoshi = 0;
        location = './登录.html';
    } else {
        biaoshi -= 1;
    };

});