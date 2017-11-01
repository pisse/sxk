import express from 'express';
import browsersync from 'browser-sync';
import webpack from 'webpack';
import config, {ENV, DEBUG, HOST, PORT} from './config';
import {logger, paths} from './utils';

async function start(){
    await new Promise(resolve => {
        const app = express();
        const compiler = webpack(config);
        const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
            publicPath: config.output.publicPath,
            stats: config.stats
        });
        const webpackHotMiddleware = require('webpack-hot-middleware')(compiler, {
            reload: true
        });
        
        // callback on plugins
        compiler.plugin('done', () => {
        });
        compiler.plugin('compilation', compilation => {
            compilation.plugin('html-webpack-plugin-after-emit', (data, callback) => {
                webpackHotMiddleware.publish({action: 'reload'});
                callback();
            });
        });
        app.use(webpackDevMiddleware);
        app.use(webpackHotMiddleware);
        app.listen(PORT, HOST, error => {
            logger(`express ${ENV} server listening on ${HOST}:${PORT}`);
        });
    });
}

export default start;