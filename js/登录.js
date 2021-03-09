var p = $('.p');
var y = $('.y');
var p_p = $('.p-p');
var y_p = $('.y-p');
var s3 = $('.s3');
var s3_2 = $('.s3-2');
touch.on(p, 'tap', function() {
    $(this).css('fontWeight', '600');
    y.css('fontWeight', '500');
    s3_2.css('display', 'none');
    s3.css('display', 'block');
    p_p.css('background', '#ff8a00');
    y_p.css('background', '');
});
touch.on(y, 'tap', function() {
    $(this).css('fontWeight', '600');
    p.css('fontWeight', '500');
    s3.css('display', 'none');
    s3_2.css('display', 'block');
    y_p.css('background', '#ff8a00');
    p_p.css('background', '#ccc');
});