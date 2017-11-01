import querystring from 'querystring';
import request, {api} from 'common/request';

export default ()=> {
    let container = document.querySelector('.register');
    if(container){
        let form = container.querySelector('#J_register');
        let verifyBtn = $(container).find('#J_verify');
        let tips = container.querySelector('.tips');
        let lock = true;
        let codeBtn = $(container).find('#J_code');

        codeBtn.css({'backgroundImage': `url(${api('http://credit.xianjincard.com/credit-user/captcha')})`});
        let codeLock = true;
        codeBtn.on('click', function(){
            if(codeLock){
                codeLock = false;
                request(`http://credit.xianjincard.com/credit-user/captcha?refresh=true`)
                .then(response => response.json())
                .then(response => {
                    if(response.url){
                        let url = api(`http://credit.xianjincard.com${response.url.replace(/\/credit\/web/, '')}`);
                        codeBtn.css({'backgroundImage': `url('${url}')`});

                    }
                    codeLock = true;
                });
            }
        });

        $('.modal-code').find('button[type=submit]').on('click', function(){
            let tips = $('.modal-code .tips');
            let codeElement = $('.modal-code .form-control');
            let {phone} = form;
            if(codeElement.val() === ''){
                codeElement.focus();
                tips.html('请输入验证码');
                return;
            }else if(codeElement.val().length < 4){
                codeElement.focus();
                tips.html('验证码长度错误');
                return;
            }
            if(lock){
                lock = !lock;
                request(`http://credit.xianjincard.com/credit-user/register-get-code`, {
                    method: 'POST',
                    body: $.param({
                        phone: form.phone.value,
                        code: codeElement.val()
                    })
                })
                .then(response => response.json())
                .then(response => {
                    let {code, message} = response;
                    tips.html('');
                    if(code == 0){
                        sendVerify.apply(verifyBtn[0], []);
                        $('.modal-overlay').removeClass('active');
                        $('.modal-code').removeClass('active');
                    }else if(code == 1000){
                        exist();
                        tips.html('');
                        phone.value = '';
                        lock = !lock;
                    }else{
                        tips.html(message);
                        codeElement.val('').focus();
                        codeBtn.trigger('click');
                        lock = !lock;
                    }
                });
            }
        });


        verifyBtn.on('click', function(event){
            event.preventDefault();
                let {phone} = form;
                if(phone.value === ''){
                    tips.innerHTML = `手机号码不能为空`
                    phone.focus();
                    return;
                }else if(phone.value.length !== 11){
                    tips.innerHTML = `手机号码格式错误`;
                    phone.focus();
                    return;
                }
                $('.modal-overlay').addClass('active');
                $('.modal-code').addClass('active').find('.form-control').focus();
                codeBtn.trigger('click');
                $('.modal-code .tips').html('');
                $('.modal-code .form-control').val('');
        });

        let verifyTimer;
        function sendVerify(){
            let count = 60;
            this.className += ' disabled';
            this.innerText = `${count}秒重新获取`;
            verifyTimer = setInterval(() => {
                if(count <= 1){
                    this.innerText = `重新获取`;
                    this.className = (this.className).replace(/disabled/, '');
                    clearInterval(verifyTimer);
                    lock = !lock;
                    return;
                }
                this.innerText = `${--count}秒重新获取`;
            }, 1000);
        }
        $(form).on('submit', function(event){
            event.preventDefault();
            let {phone, password, verify, password_confirm, agreement} = form;
            if(phone.value === ''){
                tips.innerHTML = `手机号码不能为空`
                phone.focus();
                return;
            }else if(phone.value.length !== 11){
                tips.innerHTML = `手机号码格式错误`;
                phone.focus();
                return;
            }else if(verify.value === ``){
                tips.innerHTML = `手机验证码不能为空`;
                verify.focus();
                return;
            }else if(password.value === ''){
                tips.innerHTML = `登录密码不能为空`;
                password.focus();
                return;
            }else if(password.value.length < 6){
                tips.innerHTML = `登录密码长度错误`;
                password.focus();
                return;
            }else if(password_confirm.value === ''){
                tips.innerHTML = `确认密码不能为空`;
                password_confirm.focus();
                return;
            }else if(password.value !== password_confirm.value){
                tips.innerHTML = `登录密码与确认密码不一致`;
                password_confirm.focus();
                return;
            }else if(!agreement.checked){
                tips.innerHTML = `请阅读并且同意现金卡注册协议`;
                return;
            }
            register.apply(this, [{
                phone: phone.value,
                password: password.value,
                code: verify.value,
                appMarket: 'pc-website'
            }]);
            return false;
        });
        function register(data){
            // let form = new FormData();
            // for(let i in data){
            //     form.append(i, data[i]);
            // }
            let form = {};
            for(let i in data){
                form[i] = data[i];
            }
            return request(`http://credit.xianjincard.com/credit-user/register`, {
                method: 'POST',
                body: $.param(form)
            })
            .then(response => response.json())
            .then(response => {
                let {code, message} = response;
                tips.innerHTML = '';
                if(code == 0){
                    container.className += ' success';
                }else if(code == 1000){
                    exist();
                    tips.innerHTML = '';
                }else{
                    tips.innerHTML = message;
                }
            });
        }
        let active = false;
        let overlay = document.querySelector('.modal-overlay');
        let download = document.querySelector('#J_modal_download');
        let agreement = document.querySelector('#J_modal_agreement');
        let close = document.querySelectorAll('.modal-close');
        let agreementLink = $('#J_agreement');
        function exist(){
            if(!active && overlay && download){
                overlay.className += ' active';
                download.className += ' active';
                active = true;
            }
        }
        for(let i = 0;i < close.length;i++){
            close[i].onclick = (event) => {
                event = event || window.event;
                let element = event.target || event.srcElement;
                let id = element.getAttribute('data-close');
                let parent = document.querySelector(id);
                if(parent){
                    overlay.className = overlay.className.replace(/active/, '');
                    parent.className = parent.className.replace(/active/, '');
                    active = false;
                }
            };
        }
        if(agreementLink.length){
            agreementLink.on('click', function(event){
                event.preventDefault();
                overlay.className += ' active';
                agreement.className += ' active';
            });
        }
    }
};