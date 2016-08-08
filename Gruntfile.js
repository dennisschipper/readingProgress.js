module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      uses_defaults: {}
    },

    sass: {
      dev: {
        options: {
          sourceMap: true
        },

        files: {
          'build/css/styles.css' : 'src/css/styles.scss'
        }
      }
    },

    uglify: {
      target: {
        files: {
          './build/js/readingProgress.min.js': ['./src/js/readingProgress.js']
        }
      }
    },

    watch: {
      css: {
        files: 'src/css/**/*.scss',
        tasks: [ 'sass:dev' ],
      },

      html: {
        files: 'build/**/*.html',
      },

      js: {
        files: 'src/js/**/*.js',
        tasks: [ 'uglify' ],
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'build/css/*.css',
            'build/js/*.js',
            'build/*.html'
          ]
        },

        options: {
          watchTask: true,
          server: './build'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');


  grunt.registerTask('default', [
    'browserSync',
    'watch'
  ])

}
