if(!window.location.origin){
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

export const ASSETS_PATH = (function(){
    let {hostname, origin} = location;
    let paths = {
        '192.168.39.214': 'kdkj/h5/pc/dist',
        '121.42.12.69': 'koudai/kdkj/h5/pc/dist',
        '192.168.40.210': 'h5/pc/dist',
        'pre-h5.xianjincard.com': 'pc'
    };
    return paths[hostname] ? `${origin}/${paths[hostname]}` : `${origin}`;
}());