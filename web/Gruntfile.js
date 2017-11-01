module.exports = function(grunt) {
  var dir = grunt.option('target');
  // Load all grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long grunt task take. Can help when optimizing build times
  require('time-grunt')(grunt);

  //Configure grunt
  grunt.initConfig({
    // The actual grunt server settings
    connect: {
      options: {
        port: 7000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '*',
        livereload: true // This does not perform live reloading. this port is used by watch task to trigger a live reloading action.
      },
      all: {
        options: {
          open: false,
          base: [
            dir
          ]
        }
      }
    },

    usebanner: {
      taskName: {
        options: {
          position: 'top',
          banner: '/* <%= grunt.template.today("yyyy-mm-dd h") %> */',
          linebreak: true
        },
        files: {
          src: [dir+'/css/*.css']
        }
      }
    },

    sass: {
      dist: {
        options: {
          outputStyle: 'compact', //nested, compact, compressed, expanded.
          banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: [{
          expand: true,
          cwd: dir + "/scss",
          src: ['*.scss'],
          dest: dir + "/css",
          ext: '.css'
        }]
      }
    },

    uglify: {
      options: {
        banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */'
      },

      dist: {
        files: [{
          expand: true,
          cwd: dir + "/js",
          src: '*.js',
          dest: dir + '/js/dest'
        }]
      }
    },
    //Watch files for changes, and run tasks base on the changed files.
    watch: {
      css: {
        files: dir + '/{,*/}*.scss',
        tasks: ['sass']
      },
      js: {
        files: dir + '/{,*/}*.js',
        tasks: ['uglify']
      },
      livereload: {
        options: {
          livereload: true // this port must be same with the connect livereload port
        },
        // Watch whatever files you needed.
        files: [
          dir + '/**/*.html',
          dir + '/**/*.css',
          dir + '/**/*.js',
          dir + '/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    }
  });

  
  // Creates the 'serve' task
  grunt.registerTask('serve', [
    'connect:all',
    'watch'
  ]);
  grunt.registerTask('banner', ['usebanner']);
  grunt.registerTask('default', ['sass', 'uglify']);
};
