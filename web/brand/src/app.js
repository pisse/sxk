import 'common/flexible';
import 'sass/app.scss';
import $ from 'jquery';
import Preload from 'common/preload';
import 'fullpage.js';

if(__DEV__){
    module.hot && module.hot.accept();
}

let Uri = (function () {
  var hostname = location.hostname
  var reg = /(?:http(?:s)?:\/\/)?(?:www\.)?(.*?)\./
  var regR = /https?:\/\/(?:[^/]+\.)?([^./]+\.(?:com))(?:$|\/)/
  var m = hostname.match(reg)

  var domain = {
    credit: '//' + location.hostname + '/credit/web/',
    api: '//' + location.hostname + '/frontend/web/',
    h5: '//' + location.hostname + '/h5/mobile/web/',
    h: '//' + location.hostname + '/'
  }

  if (m !== null) {
    if (m[1] === 'h5') {
      domain = {
        credit: location.protocol + '//credit.xianjincard.com/',
        api: location.protocol + '//api.xianjincard.com/',
        h5: location.protocol + '//h5.xianjincard.com/'
      }
    }

    if (m[1] === 'pre-h') {
      domain = {
        credit: location.protocol + '//pre-credit.xianjincard.com/',
        api: location.protocol + '//pre-api.xianjincard.com/',
        h5: location.protocol + '//pre-h5.xianjincard.com/',
        h: location.protocol + '//pre-h.xianjincard.com/'
      }
    }

    if (m[1] === 'test-h') {
      domain = {
        credit: location.protocol + '//test-credit.xianjincard.com/',
        api: location.protocol + '//test-api.xianjincard.com/',
        h5: location.protocol + '//test-h5.xianjincard.com/',
        h: location.protocol + '//test-h.xianjincard.com/'
      }
    }

    if (hostname === '192.168.39.214') {
      domain = {
        credit: location.protocol + '//' + location.hostname + '/kdkj/credit/web/',
        api: location.protocol + '//' + location.hostname + '/kdkj/frontend/web/',
        h5: location.protocol + '//' + location.hostname + '/kdkj/h5/mobile/web/'
      }
    }
  }

  return {
    resolveUrl: function (url) {
      var arr = url.match(reg)
      if (domain[arr[1]]) {
        return url.replace(regR, domain[arr[1]])
      }
    },
    domain: domain
  }
}())

const resolveUrl = (url) => { return Uri.resolveUrl(url) }

// 开始加载静态资源
$(function(){
    let body = $(document.body);
    let elements = body.find('*');
    let images = [];
    setTimeout(() => {
        for(let element of elements){
            let backgroundImage = getBackgroundImage(element);
            if(backgroundImage && /^(https?:\/\/)/.test(backgroundImage)){
                !images[backgroundImage] && images.push(backgroundImage);
            }
        }
        Preload(images).then(() => {
            body.addClass('loaded');
            share('brandpublic');
            setTimeout(init, 1000);
        });
    });
    function share (key){
      const script = document.createElement('script')
      script.src = '//res.wx.qq.com/open/js/jweixin-1.0.0.js';
      script.onload = () => {
        const script = document.createElement('script')
        script.src = resolveUrl('https://credit.xianjincard.com/act/wx-share?key=' + key)
        document.body.appendChild(script);
      }
      document.body.appendChild(script);
    }
});

// 获取元素背景图片
function getBackgroundImage(element){
    let backgroundImage = $(element).css('background-image');
    return /none/.test(backgroundImage) ? false : backgroundImage.replace(/^url\(\"(.*)\"\)$/, '$1');
}

function init(){
    $('.wrapper').fullpage({
        // anchors: [
        //     'welcome',
        //     'second',
        //     'events',
        //     'feature',
        //     'users',
        //     'mode',
        //     'achievement',
        //     'core',
        //     'model',
        //     'future',
        //     'teams1',
        //     // 'teams2',
        //     'honor',
        //     'ending'
        // ],
        css3: true,
        afterRender(e){
            // 禁止滚动
            // disabled();
            let name = location.hash;
            if(/welcome/.test(name) || name === ''){
                let welcome = $('.section.welcome');
                    welcome.removeClass('fp-completely');
                setTimeout(() => {
                    welcome.addClass('fp-completely');
                });
            }
            let autoplay = window.localStorage.getItem('autoplay');
            let handle = $('.background_music_handle');
            let audio = $('#J_background_music')[0];
            if(audio.paused){
                if(autoplay == 1 || autoplay == null){
                    handle[0].className += ' loaded';
                    audio.play();
                    window.localStorage.setItem('autoplay', 1);
                }else if(autoplay == 0){
                    handle[0].className += ' loaded disabled';
                }
                handle.on('click', function(){
                    let disabled = $(this).hasClass('disabled');
                    console.log(disabled)
                    if(disabled){
                        audio.play();
                        $(this).removeClass('disabled');
                        window.localStorage.setItem('autoplay', 1);
                    }else{
                        audio.pause();
                        $(this).addClass('disabled');
                        window.localStorage.setItem('autoplay', 0);
                    }
                });
            }
            let element = $('.section');
                element.each(function(){
                    let arrow = $(`<span class='arrow-handle'/>`);
                    $(this).append(arrow);
                });
            element.on('click', '.arrow-handle', function(){
                $.fn.fullpage.moveSectionDown();
            });

        },
        afterLoad(name, index){
            let element = $('.section').eq(index - 1);
            let loaded = !element.hasClass('loaded');
            if(loaded && element.length){
                setTimeout(() => {
                    element.addClass('loaded');
                });
                if(/welcome/.test(name)){
                    setTimeout(universe.apply(undefined, [element]))
                }

            }
        }
    });
    function disabled(){
        $.fn.fullpage.setAllowScrolling(false);
    }

    function universe(element){
        let scene = element.find('canvas')[0];
        let sceenCtx = scene.getContext('2d');
        let width = scene.width = window.innerWidth;
        let height = scene.height = window.innerHeight;
        let hue = 217;
        let stars = [];
        let count = 0;
        let maxStars = 233;
        let image = new Image();
        let background = window.getComputedStyle(document.body, '::after').backgroundImage.replace(/^url\(\"(.*)\"\)$/, '$1');
            image.src = background;

        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
            canvas.width = 100;
            canvas.height= 100;
        let half = canvas.width / 2;
        let gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
            gradient.addColorStop(.025, '#353379');
            gradient.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
            gradient.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(half, half, half, 0, Math.PI * 2);
            ctx.fill();

        function random(min, max){
            if(arguments.length < 2){
                max = min;
                min = 0;
            }
            if(min > max){
                let hold = max;
                max = min;
                min = hold;
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y){
            let max = Math.max(x, y);
            return Math.round(Math.sqrt(max * max + max * max)) / 2;
        }

        function Star(){
            this.orbitRadius = random(maxOrbit(width, height));
            this.radius = random(60, this.orbitRadius) / 8;
            this.orbitX = width / 2;
            this.orbitY = height / 2;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 50000;
            // this.alpha = random(2, 10) / 10;
            count++;
            stars[count] = this;
        }
        Star.prototype.draw = function(){
            let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(10);
            // if(twinkle === 1 && this.alpha > 0){
            //     this.alpha -= .05;
            // }else{
            //     this.alpha += .05;
            // }
            // sceenCtx.globalAlpha = this.alpha;
            sceenCtx.drawImage(canvas, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed;
        };

        for(let i = 0;i < maxStars;i++){
            new Star();
        }

        function animation(){
            sceenCtx.globalCompositeOperation = 'source-over';
            // sceenCtx.drawImage(image, 0, 0, width, height);
            sceenCtx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
            sceenCtx.fillRect(0, 0, width, height);
            sceenCtx.globalCompositeOperation = 'lighter';
            for(let i = 1;i < stars.length;i++){
                stars[i].draw();
            }
            window.requestAnimationFrame(animation);
        }
        image.onload = animation();
    }
}


