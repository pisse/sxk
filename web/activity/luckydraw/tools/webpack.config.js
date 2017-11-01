import chalk from 'chalk';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import extractTextPlugin from 'extract-text-webpack-plugin';
import {paths} from './utils';

export const ENV = process.env.NODE_ENV || `development`;
export const DEBUG = process.env.NODE_ENV === `development`;
export const HOST = process.env.HOST || `localhost`;
export const AUTOPREFIXER = ['last 2 versions'];
export const HASHTYPE = DEBUG ? 'hash:8' : 'chunkhash:8';
export const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify(ENV)
    },
    'NODE_ENV': ENV,
    '__DEV__'      : ENV === `development`,
    '__PROD__'      : ENV === `production`,
    '__TEST__'     : ENV === `test`,
    '__BASENAME__' : JSON.stringify(process.env.BASENAME || ``),
    '__VERSION__' : JSON.stringify(process.env.npm_package_version),
};

let css = JSON.stringify({
    minimize: !DEBUG,
    sourceMap: DEBUG,
    discardComments: {
        removeAll: !DEBUG
    }
});
let autoprefixer = require('autoprefixer')({
    add: true,
    remove: true,
    browsers: AUTOPREFIXER
});
let pxtorem = require('postcss-pxtorem')({
    rootValue: 75,
    propWhiteList: []
});

let config = {
    debug: DEBUG,
    cache: DEBUG,
    devtool: DEBUG ? '#eval-source-map' : false,
    context: paths.src(),
    entry: {
        app: `${paths.src('app')}`,
        // vconsole: `vconsole`
    },
    output: {
        path: paths.dist(),
        publicPath: DEBUG ? `http://${HOST}:3000/` : '',
        filename: `js/[name].js`,
        chunkFilename: `js/[name].[id].js`,
        // sourcePrefix: ``
    },
    resolve: {
        root: paths.src(),
        alias: {
            'common': 'common',
            'components': 'components',
            'containers': 'containers',
            'assets': 'assets',
            'sass': 'assets/sass'
        },
        extensions: ['', '.web.js', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules']
    },
    resolveLoader: {
        root: paths('node_modules')
    },
    module: {
        // preLoaders: [{
        //     test: /\.jsx?$/,
        //     loader: 'eslint',
        //     include: paths.src(),
        //     exclude: /node_modules/
        // }],
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: paths.src(),
            exclude: /node_modules/,
            query: {
                cacheDirectory: DEBUG,
                // babelrc: true,
                // presets: ['react', 'es2015', 'stage-0'],
                // plugins: [
                //     'transform-runtime'
                // ]
            }
        },{
            test: /\.vue$/,
            loader: 'vue'
        },{
            test: /\.css$/,
            loaders: [
                `style`,
                `css?${css}`,
                `postcss?pack=default`
            ]
        },{
            test: /\.scss$/,
            loaders: [
                `style`,
                `css?${css}`,
                `postcss?pack=sass`,
                `sass`
            ]
        },{
            test: /\.pug$/,
            loaders: ['pug']
        },{
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
            loader: 'file',
            query: {
                name: DEBUG ? '[path][name].[ext]' : '[path][name].[ext]',
                limit: 8192
            }
        },{
            test: /\.(eot|ttf|wav|mp3)$/,
            loader: 'file',
            query: {
                name: DEBUG ? '[path][name].[ext]?[hash:8]' : '[path][name].[hash:8].[ext]',
            }
        }]
    },
    plugins: [
        // 环境变量
        new webpack.DefinePlugin(GLOBALS),
        // 编译进度
        new webpack.ProgressPlugin((percentage, message) => {
            let stream = process.stderr;
                if(stream.isTTY && percentage < 0.71){
                    stream.cursorTo(0);
                    stream.write(`\uD83D\uDCE6  ${chalk.magenta(message)}`);
                    stream.clearLine(1);
                }else if(percentage === 1){
                    console.log(chalk.green(`\nwebpack: bundle build is now finished.`));
                }
        }),
        new htmlWebpackPlugin({
            template: `${paths.src('assets', 'index.pug')}`,
            filename: `index.html`,
            inject: true,
            // favicon: paths.src('assets', 'favicon.png'),
            hash: true,
            cache: true,
            minify: DEBUG ? {
                removeComments: true,
                collapseWhitspace: true
            } : null
        }),
        ...DEBUG ? [
            // 异常不终止进程
            new webpack.NoErrorsPlugin(),
            // 模块热加载
            new webpack.HotModuleReplacementPlugin(),
        ] : [
            // 去除重复
            new webpack.optimize.DedupePlugin(),
            // 模块排序
            new webpack.optimize.OccurrenceOrderPlugin(true),
            // 合并模块
            new webpack.optimize.AggressiveMergingPlugin(),
            // 资源压缩
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    unused: true,
                    dead_code: true,
                    warnings: false
                },
                output: {
                    comments: false
                }
            }),
            // 外链样式表
            new extractTextPlugin(`assets/css/[name].css`, {
                disable: false,
                allChunks: true
            })
        ]
    ],
    postcss: (webpack) => {
        return {
            default: [
                require('postcss-import')({
                    addDependencyTo: webpack
                }),
                autoprefixer,
                pxtorem
            ],
            sass: [
                autoprefixer,
                pxtorem
            ]
        }
    }
};

if(DEBUG){
    for(let name in config.entry){
        config.entry[name] = ['webpack-hot-middleware/client?reload=true'].concat(config.entry[name]);
    }
}else{
    config.module.loaders.filter(data => {
        if(/\.s?css/.test(data.test)){
            data.loaders.shift();
            data.loader = extractTextPlugin.extract(data.loaders.join('!'));
            delete data.loaders;
        }
    });
}

export default config;
