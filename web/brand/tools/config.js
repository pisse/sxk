import path from 'path';
import glob from 'glob';
import webpack from 'webpack';
import PurifyPlugin from 'purifycss-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import {paths} from './utils';

export const {
    NODE_ENV: ENV  = `development`,
    HOST = `192.168.40.210`,
    // HOST = `0.0.0.0`,
    PORT = 3000,
    BASENAME,
    npm_package_name,
    npm_package_version
} = process.env;

export const DEBUG = ENV === `development`;

const HASHTYPE = DEBUG ? 'hash:8' : 'chunkhash:8';
const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify(ENV)
    },
    'NODE_ENV': ENV,
    '__DEV__'      : ENV === `development`,
    '__PROD__'      : ENV === `production`,
    '__TEST__'     : ENV === `test`,
    '__BASENAME__' : JSON.stringify(BASENAME || ``),
    '__VERSION__' : JSON.stringify(npm_package_version),
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

const AUTOPREFIXER = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 8',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
];
const config = {
    target: `web`,
    watch: DEBUG,
    cache: DEBUG,
    devtool: DEBUG ? '#eval-source-map' : false,
    context: paths.src(),
    entry: {
        app: paths.src(`app`)
    },
    output: {
        path: paths.dist(),
        publicPath: DEBUG ? `http://${HOST}:${PORT}/` : '',
        filename: `js/[name].js`, //`js/[name].[${HASHTYPE}].js`,
        chunkFilename: `js/[name].[id].[${HASHTYPE}].js`,
        // library: npm_package_name,
        // libraryTarget: `umd`
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                cacheDirectory: DEBUG
            }
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
            loader: `pug`
        },{
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
            loader: 'file',
            query: {
                name: DEBUG ? '[path][name].[ext]?[hash:8]' : '[path][name].[ext]',
                limit: 8192
            }
        },{
            test: /\.(eot|ttf|mp3|ogg)$/,
            loader: 'file',
            query: {
                name: DEBUG ? '[path][name].[ext]' : '[path][name].[ext]',
            }
        },{
            test: /\.wma$/,
            loader: 'file',
            query: {
                mimetype: 'audio/x-ms-wma',
                name: DEBUG ? '[path][name].[ext]' : '[path][name].[ext]',
            }
        }]
    },
    plugins: [
        // 环境变量
        new webpack.DefinePlugin(GLOBALS),
        // 编译进度
        // new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.src(`assets`, `index.pug`),
            filename: `index.html`,
            inject: true,
            // favicon: paths.src('assets', 'favicon.png'),
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
            // 打开默认浏览器
            // new OpenBrowserPlugin({url: `http://${HOST}:${PORT}`}),
        ] : [
            // 模块排序
            new webpack.optimize.OccurenceOrderPlugin(),
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
            // new ExtractTextPlugin(`assets/css/[name].[${HASHTYPE}].css`),
            new ExtractTextPlugin(`assets/css/[name].css`)
            // 移除未引用的样式
            // new PurifyPlugin({}),
        ]
    ],
    resolve: {
        root: paths.src(),
        alias: {
            'common': 'common',
            'components': 'components',
            'containers': 'containers',
            'assets': 'assets',
            'sass': 'assets/sass'
        },
        extensions: ['', '.web.js', '.js', '.jsx', '.json', '.scss'],
        modules: [paths.src(), `node_modules`],
        modulesDirectories: ['node_modules']
    },
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
    },
    stats: true
};
// multi page
// {
//     let files = glob.sync(paths.src(`views/{,**/}*.{htm,html,pug}`), {
//         ignore: paths.src(`views/common/*.*`)
//     });
//         files.map(file => {
//             let data = path.parse(file);
//             let options = {
//                 template: `${file}`,
//                 filename: file.replace(`${paths.src()}\/views\/`,'').replace(data.ext,'.html'),
//                 inject: false
//             };
//             config.plugins.push(new HtmlWebpackPlugin(options));
//         });
// }

if(DEBUG){
    config.entry.app = [`webpack-hot-middleware/client?reload=true`].concat(config.entry.app);
}else{
    config.module.loaders.filter(data => {
        if(/\.s?css/.test(data.test)){
            data.loaders.shift();
            data.loader = ExtractTextPlugin.extract(data.loaders.join('!'));
            delete data.loaders;
        }
    });
}

export default config;