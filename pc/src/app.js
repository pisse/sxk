import 'sass/app.scss';
import 'es5-shim';
import InstantClick from 'instantclick';
import home from 'containers/home';
import product from 'containers/product';
import about from 'containers/about';
import contact from 'containers/contact';
import business from 'containers/business';
import register from 'containers/register';
import reward from 'containers/reward';
import {ASSETS_PATH} from 'common/utils';

$.support.cors = true

function testing(){
    if(['location', '192.168.40.210'].indexOf(location.hostname) <= 0){
        let element = $('a,img');
            element.each(function(){
                let elem = $(this);
                let href = elem.attr('href');
                let src = elem.attr('src');
                if(/^\//.test(href)){
                    elem.attr('href', `${ASSETS_PATH}${href}`);
                }
                if(/^assets\//.test(src)){
                    elem.attr('src', `${ASSETS_PATH}/${src}`);
                }
            });
    }
}
// testing();

// InstantClick.on('change', (loaded) => {
    home();
    product();
    about();
    contact();
    business();
    register();
    reward();
    // if(loaded === false){
    //     if(typeof _hmt !== 'undefined'){
    //         _hmt.push(['_trackPageview', location.pathname + location.search]);
    //     }
    //     if(typeof ga !== 'undefined'){
    //         ga('send', 'pageview', location.pathname + location.search);
    //     }
    // }
    testing();
// });
// InstantClick.init(100);
