$(function(){
    $.ajax({
        url:"http://m.koudaikj.com/operate/check-login",
        data:"",
        dataType:'jsonp',
        success:function(data) {
            if (data.is_login == 0) {
                window.location.href = "http://m.koudaikj.com/operate/login";
            }
        }
    });

    $("button").click(function(){
        var register_start = $("#register-start").val(),
            register_end = $("#register-end").val(),
            loan_start = $("#loan-start").val(),
            loan_end = $("#loan-end").val();
        if(register_start != ""){
            register_start = Date.parse(register_start) / 1000 - 28800;
        }
        if(register_end != ""){
            register_end = Date.parse(register_end) / 1000 - 28800;
        }
        if(loan_start != ""){
            loan_start = Date.parse(loan_start) / 1000 - 28800;
        }
        if(loan_end != ""){
            loan_end = Date.parse(loan_end) / 1000 - 28800;
        }
        var params = {
            register_start:register_start,
            register_end:register_end,
            loan_start:loan_start,
            loan_end:loan_end
        };
        $.ajax({
            url:"http://m.koudaikj.com/operate/channel-record",
            data:params,
            dataType:'jsonp',
            success:function(data) {
                if (data.code == 0) {
                    $(".result").css({"display": "block"});
                    $('#head').siblings().remove();
                    $('#myTemplate').tmpl(data.data).appendTo('#rows');
                    $("#repay").text(data.rebate_money);
                } else if (data.code == 1) {
                    $(".result").css({"display": "block"});
                    $('#head').siblings().remove();
                    $('#repay_amount').html('<span>' + data.data + '</span>');
                    $('#rows').remove();
                }
            }
        });
    });
});
