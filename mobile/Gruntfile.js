module.exports = function(grunt) {
  var target = grunt.option('target') || '**/';
  var port = grunt.option('port') || 8000;
  var srcPath = 'src/' + target;
  var destPath = 'web/' + target;


  var env = grunt.option('env') || 'pro';

  console.log(env);

  var path = require('path');
  var cp = require('child_process');
  //console.log(target, srcPath, destPath);
  // Load all grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long grunt task take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks("grunt-rsync")

  //Configure grunt
  grunt.initConfig({
    // The actual grunt server settings
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: '__ENV__',
              replacement: env
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['./_config.js'], dest: ('src/mobile/js/')}
        ]
      }
    },
    connect: {
      options: {
        port: port,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '*',
        livereload: true // This does not perform live reloading. this port is used by watch task to trigger a live reloading action.
      },
      all: {
        options: {
          //                    open: true,
          // middleware: function(connect, options, middlewares) {
          //   var modRewrite = require('connect-modrewrite');

          //   // enable Angular's HTML5 mode '^/(.*)/(.*)/(.*)/\\w*/?$ /$1/$2/index.html'
          //   middlewares.unshift(modRewrite(['^/(.*)/(.*)/(?!.*(\\.html|\\.jpg|\\.js|\\.css|\\.png))\\w*$ /$1/$2/index.html']));

          //   return middlewares;
          // },
          base: [
            'web'
          ]
        }
      }
    },

    clean: [destPath + '/{,*/}*.{js,css}'],

    rev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
      },
      assets: {
        files: [{
          src: [destPath + '/{,*/}*.{js,css}']
        }]
      }
    },

    usemin: {
      html: destPath + '/index.html',
      css: destPath + '/css/*.css',
      js: destPath + '/js/*.js'
    },

    sass: {
      dist: {
        options: {
          outputStyle: 'compressed' //nested, compact, compressed, expanded
        },
        files: [{
          expand: true,
          cwd: srcPath + "/scss",
          src: ['*.scss'],
          dest: destPath + "/css",
          ext: '.css'
        }]
      }
    },

    ngmin: {
      directives: {
        expand: true,
        cwd: destPath + '/js',
        src: '*.js',
        dest: destPath + '/js'
      }
    },

    uglify: {
      options: {
        banner: '/* <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */'
      },

      dist: {
        files: [{
          expand: true,
          cwd: destPath + "/js",
          src: '*.js',
          dest: destPath + '/js'
        }]
      }
    },

    concat: {
      generated: {
        files: [{
          dest: destPath + '/js/app.js',
          src: [
            'src/lib/common/js/*.js',
            srcPath + '/**/_config.js',
            srcPath + '/**/controllers/*.js',
            srcPath + '/**/app.js',
            srcPath + '/**/services.js',
          ]
        }]
      }
    },

    cachebreaker: {
      dev: {
        options: {
          match: [{
            'app.js': destPath + '/js/app.js',
            'style.css': destPath + '/css/style.css'
          }],
          replacement: 'md5'
        },
        files: {
          src: [destPath + '/index.html']
        }
      }
    },

    //Watch files for changes, and run tasks base on the changed files.
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      css: {
        files: [srcPath + '/**/*.scss', 'src/lib/**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: [srcPath + '/js/*.js', srcPath + '/js/controllers/*.js', 'src/lib/common/*.js'],
        tasks: ['replace', 'concat', 'ngmin']
      },
      livereload: {
        options: {
          livereload: true // this port must be same with the connect livereload port
        },
        // Watch whatever files you needed.
        files: [
          destPath + '/**/*.html',
          destPath + '/**/*.css',
          destPath + '/js/*.js',
          destPath + '/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    jshint: {
      options: {
        asi: true,
        eqnull: true,
        shadow: true,
        multistr: true,
        '-W041': true
      },
      uses_defaults: [srcPath + '/**/*.js', 'src/lib/common/js/*.js']
    },

    rsync: {
      options: {
        args: ["--verbose","--progress"]
      },
      multiple: {
        options: {
          src: './'+destPath+'/',
          dest: '../../' + (env=='dev'? 'sxk_php':'php_release') + 'frontend/web/mobile', //"../../php_release/frontend/web/test" + destPath,
          recursive: true
        }
      }
     }
    
  });

  // Creates the 'serve' task
  grunt.registerTask('serve', function() {
    if (grunt.option('target') !== undefined) {
      grunt.config(['watch', 'options'], {
        spawn: true
      });
    }
    grunt.task.run([
      'replace',
      'connect:all',
      'watch'
    ]);

  });

  grunt.registerTask('breaker', ['cachebreaker']);
  //grunt.registerTask('compile', ['sass', 'concat', 'ngmin', 'uglify', 'cachebreaker']);
  //grunt.registerTask('clear', ['clean']);
  //grunt.registerTask('re', ['rev']);
  //grunt.registerTask('rename', ['usemin']);
  //grunt.registerTask('revert', ['clean', 'concat', 'sass']);
  //grunt release --target=(project name)
  //grunt.registerTask('release', ['clean', 'sass', 'concat', 'ngmin', 'uglify', 'rev', 'usemin']);
  grunt.registerTask('rs', ['rsync'])
  grunt.registerTask('release', ['sass', 'replace', 'concat', 'ngmin', 'uglify', 'cachebreaker','rs']);

  grunt.event.on('watch', function(action, filepath, target) {
    //grunt target is not default and return
    if (srcPath !== 'src/**/') {
      return;
    }
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);

    //common change to mobile
    if(/^src\/lib/.test(filepath)){
      filepath= target === 'js' ? 'src/mobile/js/app.js' : 'src/mobile/scss/style.scss';
    }

    if (target === 'css') {
      grunt.config(['sass', 'dist', 'files'], [{
        expand: true,
        cwd: path.dirname(filepath),
        src: ['*.scss'],
        dest: path.normalize(path.dirname(filepath) + '/..').replace('src', 'web') + '/css',
        ext: '.css'
      }]);
      //console.log(grunt.config(['sass', 'dist', 'files']));
    }


    if (target === 'js') {
      var dest = path.dirname(filepath).replace('src', 'web').replace(path.sep + 'controllers', '');
      var src = path.dirname(filepath).replace( path.sep + 'controllers', '');;

      if (path.basename(filepath, '.js') == 'index') {
        cp.execSync('webpack ' + filepath + ' ' + src + '/app.js');
      }

      console.log('src: ' + src)
      console.log('dest: ' + dest)
      //console.log(filepath, dest, src);
      if(src == 'src\\lib\\common\\js' || src == 'src/lib/common/js') {
        console.log('nice')
        src = 'src/mobile'
        dest = 'web/mobile/js'
      }

      grunt.config(['concat', 'generated', 'files'], [{
        dest: dest + '/app.js',
        src: [
          'src/lib/common/js/*.js',
          src + '/**/_config.js',
          src + '/**/app.js',
          src + '/**/services.js',
          src + '/**/controllers/*.js'
        ]
      }]);

      //console.log(grunt.config(['concat', 'generated', 'files']));
      grunt.config(['ngmin', 'directives'], {
        expand: true,
        cwd: dest,
        src: '*.js',
        dest: dest
      });
      //console.log(grunt.config(['ngmin', 'directives']));
      grunt.config(['uglify', 'dist', 'files'], [{
        expand: true,
        cwd: dest,
        src: '*.js',
        dest: dest
      }]);
      //console.log(grunt.config(['uglify', 'dist', 'files']));
    }

  });
};
