/* jshint node: true */
module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-ngdocs');

  // Project configuration.
  grunt.util.linefeed = '\n'; // eslint-disable-line

  grunt.initConfig({
    ngdocs: {
      options: {
        dest: './docs/',
        scripts: [
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.10/angular.js',
          'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.10/angular-animate.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.10/angular-cookies.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js',

          'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.3.2/ui-bootstrap-tpls.min.js',
          './dist/main.bundle.js'
        ],
        styles: []
      },
      all: ['src/**/*.js']
    }
  });

  grunt.registerTask('docs', ['ngdocs']);

  return grunt;
};
