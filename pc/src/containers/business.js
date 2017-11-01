import {data} from 'common/citylist';
import request from 'common/request';

export default () => {
    let key = `deba6491bcb449fbe9ec183009ef46a1`
    let container = document.querySelector('.business');
    let api = __PROD__ ? '//apimerchant.xianjincard.com/interface/save-apply-info' : '//192.168.39.214:9033/interface/save-apply-info';
    let lock = true;
    if(container){
        $('#province, #city').citylist({
            data    : data,
            id      : 'id',
            children: 'cities',
            name    : 'name',
            metaTag : 'name'
        });
        let form = $('.form');
        let {remark} = form[0];
        form.on('submit', function(){
            let {channel_name, relation_name, relation_phone, province, city, remark} = form[0];
            if(!!!channel_name.value){
                alert('渠道商不能为空');
                channel_name.focus();
                return;
            }else if(!!!relation_name.value){
                alert('姓名不能为空');
                relation_name.focus();
                return;
            }else if(!!!relation_phone.value){
                alert('电话不能为空');
                relation_phone.focus();
                return;
            }
            if(lock){
                lock = false;
                request(api, {
                    dataType: 'jsonp',
                    body: $.param({
                        channel_name: channel_name.value,
                        relation_name: relation_name.value,
                        relation_phone: relation_phone.value,
                        remark: remark.value,
                        channel_area: [province.value, city.value].join(' '),
                        callback: 'callback'
                    })
                });
            }
        });
        $(remark).on('input', function(){
            let size = this.value.length;
            let total = $('.total span');
            if(size <= 140){
                setTimeout(() => {
                    total.text(size);
                });
            }
        })
        window.callback = function(response){
            lock = true;
            if(response.code != 0){
                alert(response.message);
                return;
            }
            form[0].reset();
            alert(response.message);
        };
    }
};