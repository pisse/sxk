// import fetch from 'isomorphic-fetch';

let hostname = location.hostname;
let extensive = /(?:http(?:s)?:\/\/)?(?:www\.)?(.*?)\./;
let domain = (function(){
    let data = {
        credit: `//${hostname}/credit/web/`,
        api: `//${hostname}/frontend/web/`,
        h5: `//${hostname}/h5/mobile/web/`
    };
    let match = hostname.match(extensive);
    if(match){
        match[1] = 'h5';
        if(match[1] === `h5`){
            data = {
                credit: `//credit.xianjincard.com/`,
                api: `//api.xianjincard.com/`,
                h5: `//h5.xianjincard.com/`
            };
        }else if(match[1] === `pre-h5`){
            data = {
                credit: `//pre-credit.xianjincard.com/`,
                api: `//pre-api.xianjincard.com/`,
                h5: `//pre-h5.xianjincard.com/`
            };
        }else if(hostname === `192.168.39.214`){
            data = {
                credit: `//${hostname}/kdkj/credit/web/`,
                api: `//${hostname}/kdkj/frontend/web/`,
                h5: `//${hostname}/kdkj/h5/mobile/web/`
            };
        }else if(hostname === `121.42.12.69`){
            data = {
                credit: `//${hostname}/koudai/kdkj/credit/web/`,
                api: `//${hostname}/koudai/kdkj/frontend/web/`,
                h5: `//${hostname}/koudai/kdkj/mobile/web/`
            };
        }
    }
    return data;
}());

let api = (url) => {
    let name = url.match(extensive);
    let path = domain[name[1]];
    return path ? url.replace(/https?:\/\/(?:[^/]+\.)?([^./]+\.(?:com))(?:$|\/)/, path) : url;
};

export {api};

export default (url, options = {}) => {
    let defaults = {
        url: api(url),
        xhrFields: {
            withCredentials: true
        },
        data: options.body,
        processData: false
        // credentials: `include`
    };
    return $.ajax($.extend(defaults, options)).then((response) => {
        if(!response.json){
            response.json = function(){
                return typeof response === 'string' ? JSON.parse(response) : response;
            }
        }
        return response;
    });
};