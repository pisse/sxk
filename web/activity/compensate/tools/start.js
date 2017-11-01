import fs from 'fs';
import express from 'express';
import morgan from 'morgan';
import webpack from 'webpack';
import config, {GLOBALS} from './webpack.config';
import {paths} from './utils';

const app = express();
const compiler = webpack(config);

// 访问日志中间件
app.use(morgan('dev')); // format types: combined|common|dev|short|tiny
{
    let compiler = webpack(config);
        compiler.plugin('done', () => {
            console.log(`server listened on 3000.`);
        });
        compiler.plugin('compilation', compilation => {
            compilation.plugin('html-webpack-plugin-after-emit', (data, callback) => {
                webpackHotMiddleware.publish({action: 'reload'});
                callback();
            });
        });
    let webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
        hot: true,
        inline: true,
        lazy: false,
        stats: true
    });
    let webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
    app.use(webpackDevMiddleware);
    app.use(webpackHotMiddleware);
}
app.listen(3000, error => {
    error && console.log(error);
});
