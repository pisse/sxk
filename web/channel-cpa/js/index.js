
$(document).ready(function() {

        $.ajax({
            url:"http://m.koudaikj.com/channel-cpa/check-login",
            data:"",
            dataType:'jsonp',
            success:function(data) {
                if (data.is_login == 0) {
                    window.location.href = "http://m.koudaikj.com/channel-cpa/login";
                }
            }
        });

});

