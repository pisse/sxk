var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var fs = require('fs')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

//根据命令行参数获取当前编译目录
exports.getEntries = function(postfix) {
    var curShopDir = path.join(__dirname, '../src/');
    var self = this;
    var entries = fs.readdirSync(curShopDir).filter(function(file) {
        return self.filterFiles(file, postfix);
    })
    return entries
}
//获取指定后缀文件
exports.filterFiles = function(str, postfix) {
    var postfix = postfix || 'js';
    var fileRe = new RegExp('\.(' + postfix + ')');
    return fileRe.test(str);
}

//动态产生页面
exports.gerHtmlWebpackPlugin = function() {
    var htmlPlugins = []
    var entries = this.getEntries()

    var pages = this.getEntries('html');
    var curDir = path.join(__dirname, '../src/');

    entries.map(function(file){
        var name = file.split('.')[0]
        var pl = new HtmlWebpackPlugin({
            filename: name + '.html',
            template: pages.indexOf(name+'.html')>-1 ? curDir + '/' + name + '.html': (pages.indexOf(name + '.htm')>-1 ? name + '/' + '.htm' : 'index.html'),
            chunks: [name, 'vendor', 'manifest'],
            inject: true
        })
        htmlPlugins.push(pl)
    });

    return htmlPlugins
}

