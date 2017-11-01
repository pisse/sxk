import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from 'components/wrapper';
import 'common/flexible';
import 'sass/app.scss';

if(__DEV__){
    module.hot && module.hot.accept();
}

ReactDOM.render(
    <Wrapper/>,
    document.getElementById('app')
);