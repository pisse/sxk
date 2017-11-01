import request from 'common/request';
import querystring from 'querystring';
import Swiper from 'swiper';
import initMap from 'common/map';
import {ASSETS_PATH} from 'common/utils';
import rangeSlider from 'rangeslider-pure';
import 'rangeslider-pure/dist/rangeslider.css';
window.$ = $;

export default () => {
    let container = document.querySelector('.home');
    if(container){
        let swiper;
        let wrapper = $('#J_home_banner .swiper-wrapper');
        if(!swiper){
            request(`http://credit.xianjincard.com/official-website/banner-list?type=1`)
            .then(response => response.json())
            .then(response => {
                if(response.code === 1){
                    let {banner_list: data} = response.data;
                    for(let i in data){
                        if(data[i].link === '') return;
                        data[i].link = data[i].link.replace(/^https?\:/, '');
                        let slide = `<div class='swiper-slide'><a href='${data[i].url ? data[i].url : "javascript:;"}' style='background-image: url(${data[i].link});' class='picture'/></div>`;
                        wrapper.append(slide);

                    }
                    swiper = new Swiper(`#J_home_banner`, {
                        autoplay: 5000,
                        loop: true,
                        preventClicks: true,
                        resizeReInit: true,
                        pagination : '.swiper-pagination',
                        paginationClickable: true
                    });
                }
            });
        }
        function hasTranslate() {
            if (!window.getComputedStyle) {
                return false;
            }
            var el = document.createElement('p'), 
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };
            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);
            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = "translate(0,0)";
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }
            document.body.removeChild(el);
            return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
        }
        let timer;
        let range = $(`[data-rangeslider]`);
            rangeSlider.create(range[0], {
                polyfill: true,
                onInit(){
                    let range = $(this.range);
                    let tips = $('<div class="rangeSlider__tips"/>').appendTo(range);
                    this.$tips = tips;
                    if(!hasTranslate()){
                        let handle = $(this.handle);
                            handle.css({
                                left: this.position
                            });
                    }
                },
                onSlide(position, value){
                    let tips = this.$tips;
                        tips.text(position);
                        tips.addClass('active');
                        tips.css({left: this.position - (tips.width() / 2) + 10});
                    if(!hasTranslate()){
                        let handle = $(this.handle);
                            handle.css({
                                left: this.position
                            });
                    }
                },
                onSlideEnd(position, value){
                    let tips = this.$tips;
                    timer && clearTimeout(timer);
                    timer = setTimeout(() => {
                        tips.removeClass('active');
                    }, 1000);
                }
            });
        let map = document.querySelector('#J_map');
        if(map){
            setTimeout(() => {
                initMap.apply(map)
            });
        }
        initNews.apply(container);
    }

    function initNews(){
        let news = $('.news');
        let tabs = news.find('.tab-link');
        let content = news.find('.content');
        if(tabs.length === content.length){
            tabs.on('mouseenter', function(){
                let element = $(this);
                let index = element.index();
                element
                .addClass('active')
                .siblings('.tab-link')
                .removeClass('active');
                content.eq(index)
                .addClass('active')
                .siblings('.content')
                .removeClass('active');
            });

            let type = {reported: {name: 'mtbd', id: 3}, notice: {name: 'ptgg', id: 4}};

            for(let i in type){
                let data = {};
                let [page, size] = [1, 4];
                let body = {name: type[i].name, page, 'per-page': size, top: 1};
                type[i].name = i;
                data.type = type[i];
                data.page = page;
                init.apply(data, [body]);
            }

            function init(data = {}){
                return getArticleLists(data).then(response => createArticleElement.apply(this, [response]));
            }
            function getArticleLists(data = {}){
                return request(`http://credit.xianjincard.com/official-website/article-list?${querystring.stringify(data)}`)
                .then(response => response.json());
            }
            function createArticleElement(response){
                let {data} = response;
                let wrapper = $(news).find(`#J_news_${this.type.name}`);
                let more = $(`<div class='more'><a href='${ASSETS_PATH}/about/${this.type.name}.html'>查看更多</a></div>`)
                let frag = '';

                if(wrapper.length){
                    wrapper.html('');
                    for(let i in data.list){
                        let item = data.list[i];
                        let {id, image_url: image, title, created_time: date, description} = item;
                        image = image.replace(/^https?\:/, '')
                        let li = `<li>
                            ${image ? '<a href="' + ASSETS_PATH + '/about/details.html?type='+ this.type.id +'&id=' + id + '" class="picture"><img src="' + image + '"/></a>' : ''}
                            <a class='details' href='${ASSETS_PATH}/about/details.html?type=${this.type.id}&id=${id}'>
                                <div class='title'>${title}</div>
                                <div class='date'>${date}</div>
                                <p>${description}</p>
                            </a>
                        </li>`;
                        frag += li;
                    }
                    wrapper.append(frag);
                    !wrapper.siblings('.more').length && wrapper.after(more);
                }
                
            }
        }
    }
};