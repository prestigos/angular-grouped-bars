/* jslint node: true */
'use strict';

module.exports = function ( grunt ) {
  // Project configuration.
  grunt.initConfig({
    jshint  : {
      all     : [
        'Gruntfile.js',
        'angular-grouped-bars.js'
      ]
    },
    less: {
      production: {
        options: {
          cleancss: true
        },
        files: {
          'build/css/angular-grouped-bars.min.css': ['src/less/angular-grouped-bars.less']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/angular-grouped-bars.min.js': ['src/angular-grouped-bars.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
  grunt.registerTask('default', [
      'jshint',
      'less',
      'uglify'
    ]
  );
};
