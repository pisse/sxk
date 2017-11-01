/**
 * Created by Jay on 2016/11/11.
 */
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "");
var RES_PATH = path.resolve(APP_PATH, "");
var CSS_PATH = path.resolve(RES_PATH, "css");
var JS_PATH = path.resolve(RES_PATH, "js");
var IMG_PATH = path.resolve(RES_PATH, "img");
var TEMPLATE_PATH = path.resolve(APP_PATH, "");
var BUILD_PATH = path.resolve(APP_PATH, "build");
var BUILD_RES_PATH = path.resolve(BUILD_PATH, "");

var gulp = require('gulp');
var seq = require('run-sequence');
/*
 var concat = require('gulp-concat');                            //- 多个文件合并为一个；
 var minifyCss = require('gulp-minify-css');                     //- 压缩CSS为一行；
 */
var clean = require('gulp-clean');
var rev = require('gulp-rev');                                  //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');               //- 路径替换
var minify = require('gulp-minifier');
var merge = require('magicfish_web/gulp_plugins/merge');          //- 路径替换

var minifyOpt = {
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true
}

gulp.rev = function(taskName, folder) {
    gulp.task(taskName, function(){
        return gulp.src([ '**/*' ], { cwd:path.resolve(RES_PATH, folder) })
            .pipe(rev())
            .pipe(gulp.dest(path.resolve(BUILD_RES_PATH, folder)))
            .pipe(rev.manifest())
            .pipe(gulp.dest(path.resolve(ROOT_PATH, 'rev/' + folder)));
    });
}

gulp.copy = function(taskName, targets, opt) {
    gulp.task(taskName, function(){
        return gulp.src(targets, opt || { cwd:RES_PATH })
            .pipe(gulp.dest(BUILD_RES_PATH));
    });
}

gulp.task('clean', function() {
    return gulp.src(BUILD_PATH, { read:false })
        .pipe(clean());
});

gulp.copy('css', [ 'css/**/*' ], { base:'.' });
gulp.copy('js', [ 'js/**/*' ], { base:'.' });
gulp.copy('html', [ '*.html' ], { base:'.' });

gulp.task('merge', function() {
    return gulp.src(['*.html'], { base:"." })
        .pipe(merge({ rootPath:APP_PATH, buildPath:BUILD_PATH }))
        .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('mini_res', function() {
    return gulp.src(['*.json', '**/*.js', '**/*.css', 'img/*', 'fonts/*', '!modules/temp/*', '!./build/**/*'], { base:"." })
        .pipe(minify(minifyOpt))
        .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('mini_html', function() {
    return gulp.src([path.resolve(BUILD_PATH, '**/*.html'), '!' + path.resolve(BUILD_PATH, '**/*.html')], { base:BUILD_PATH })
        .pipe(minify(minifyOpt))
        .pipe(gulp.dest(path.resolve(BUILD_PATH, "")));
});

gulp.task('end', function() {
    return gulp.src([ path.resolve(ROOT_PATH, 'rev'), path.resolve(BUILD_PATH, 'temp'), path.resolve(BUILD_PATH, 'gulpfile.js') ], { read:false })
        .pipe(clean());
});

gulp.task('build', function(done) {
    seq('clean', 'mini_res', 'merge', 'end', done);
});

gulp.task('default', function(done) {
    seq('build', done);
});