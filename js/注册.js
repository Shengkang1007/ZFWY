//正则验证

var phone = /^1[3-8]\d{9}$/;
var testP = /(?!^([a-zA-Z]+|\d+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,20}$/;
var DH = $('.DH');
var MM = $('.MM');
var send = $('.send');
var yzmobj = $('.YZM');
var biaoshi = 0;
// ---------------------------
//点击发送验证码
touch.on(send, 'tap', function() {
    alert('手机验证码为：123456');
});

// ---------------------------
//正则验证
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
// ---------------------------
//点击注册
//获取注册信息
var dh, yzm, password;
var go = $('.go')
touch.on(go, 'tap', function() {
    dh = DH.val();
    yzm = yzmobj.val();
    password = MM.val();
    //验证码检查
    if (yzm == 123456) {
        yzmobj.siblings('span').css('display', 'none');
        biaoshi += 1;
    } else {
        yzmobj.siblings('span').css('display', 'block');
    };

    if (biaoshi >= 3) {
        if (confirm('注册成功！点击确定跳转到登录页面。')) {
            location = './登录.html';
        } else {
            biaoshi = 3;
        };
    } else {
        alert('注册失败！请正确填写手机号，验证码和密码。');
        biaoshi = 1;
    };
});