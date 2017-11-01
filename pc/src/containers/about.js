import querystring from 'querystring';
import request from 'common/request';
import {ASSETS_PATH} from 'common/utils';

export default ()=> {
    // join
    {
        let container = document.querySelector('.panel-join');
        if(container){
            let collapses = container.querySelectorAll('li');
            for(let i in collapses){
                if(collapses.hasOwnProperty(i)){
                    let collapse = collapses[i];
                    let title = collapse.querySelector('.title');
                    title.onclick = () => {
                        if(!/active/.test(collapse.className)){
                            collapse.className = 'active';
                            removeSiblingsActive.apply(collapse , [i]);
                        }
                    };
                }
            }
            function removeSiblingsActive(index){
                let parent = this.parentNode;
                let siblings = parent.childNodes;
                for(let i = 0;i < siblings.length;i++){
                    if(+index !== i){
                        siblings[i].className = '';
                    }
                }
            }
        }
    }
    // 文章详情
    {
        let container = document.querySelector('.panel-details');
        if(container){
            let param = querystring.parse(location.search.replace(/^\?/, ''));
            let sidebars = document.querySelectorAll('.sidebar li');
            let breadcrumb = document.querySelector('.breadcrumb');
            let {type, id} = param;
            request(`http://credit.xianjincard.com/official-website/article-detail?id=${id}`)
            .then(response => response.json())
            .then(response => {
                let {title, content, created_time: date, next, pre: prev} = response.data;
                content = content.replace(/https?\:/g, '');
                if(response.code === 1){
                    let template = `
                        <div class='title'>${title}</div>
                        <div class='props'><span>${date}</span>
                        <div class='content'>${content}</div>
                        <div class='related'>
                            <p>上一篇：${(prev ? '<a href=' + ASSETS_PATH + '/about/details.html?type=' + type + '&id=' + prev.id + '>' + prev.title +'</a>' : '<span>没有了</span>')}</p>
                            <p>下一篇：${(next ? '<a href=' + ASSETS_PATH + '/about/details.html?type=' + type + '&id=' + next.id + '>' + next.title +'</a>' : '<span>没有了</span>')}</p>
                        </div>
                    `;

                    container.innerHTML = template;
                }
            });
            if(sidebars){
                for(let i = 0;i < sidebars.length;i++){
                    if(type == i + 1){
                        let link = sidebars[i].querySelector('.sidebar-item-link');
                        link.className += ' sidebar-item-link__active';
                    }
                }
            }
            if(breadcrumb){
                let data = {3: '媒体报道', 4: '平台公告'};
                let before = breadcrumb.innerHTML;
                let template = `${before}<li class='breadcrumb-item'>${data[type]}</li><li class='breadcrumb-item active'><a href='${location.href}'>正文</a></li>`;
                breadcrumb.innerHTML = template;
            }
        }
    }
    // 文章列表
    {
        let reported = document.querySelector('#J_about_reported');
        let notice = document.querySelector('#J_about_notice');
        reported && articles.apply(reported, [`mtbd`]);
        notice && articles.apply(notice, [`ptgg`]);
    }
    function articles(type){
        let [page, size] = [1, 8];
        let body = {name: type, page, 'per-page': size};
        let pagination = this.querySelector('.pagination');

        this.type = type;
        this.page = page;
        init.apply(this, [body]);
        pagination.onclick = (event) => {
            event = event || window.event;
            let element = event.target || event.srcElement;
            let parent = element.parentNode;
            if(element.nodeName.toLowerCase() === 'a' && parent.className === 'pagination'){
                let page = element.getAttribute('data-id');
                if(page !== this.page){
                    this.page = body.page = page;
                    init.apply(this, [body]);
                }
            }
        };
    }

    function init(data = {}){
        return getArticleLists(data).then(response => createArticleElement.apply(this, [response]));
    }

    function getArticleLists(data = {}){
        return request(`http://credit.xianjincard.com/official-website/article-list?${querystring.stringify(data)}`)
        .then(response => response.json());
    }

    function createArticleElement(response, type){
        let {data} = response;
        let wrapper = $(this).find('#J_about_list');
        let frag = '';
        wrapper.html('');
        for(let i in data.list){
            let item = data.list[i];
            let {id, image_url: image, title, created_time: date, description} = item;
            image = image.replace(/^https?\:/, '');
            let context = `<li>
                ${image ? '<img src=' + image + ' class="picture"/>' : ''}
                <a class='details' href='${ASSETS_PATH}/about/details.html?type=${(this.type == 'mtbd' ? 3 : 4)}&id=${id}'>
                    <div class='title'>${title}</div>
                    <p class='date'>${date}</p>
                    <p>${description}</p>
                </a>
            </li>`;
            frag += context;
        }
        wrapper.html(frag);
        createPagination.apply(this, [response]);
    }
    function createPagination(response){
        let wrapper = this.querySelector('.pagination');
        let {data} = response;
        let {page_size: size, page_total: total, totalCount: count} = data.page;
        let frag = document.createDocumentFragment();

        wrapper.innerHTML = '';
        for(let i = 0;i < total;i++){
            let current = i + 1;
            let pager = document.createElement('a');
                pager.innerText = current;
                pager.setAttribute('data-id', current);
            this.page == current && (pager.className = 'active');
            frag.appendChild(pager);
        }
        wrapper.appendChild(frag);
    }
}