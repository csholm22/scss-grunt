module.exports = function(grunt) {

  grunt.initConfig({
      sass: {
        options: {
          outputStyle: 'expanded',
          sourceMap: true
        },
        dist: {
          files: [{
            expand: true,
            cwd: 'sass',
            src: '**/*.scss',
            dest: '../authweb/static/tds_theme_internal/',
            ext: '.css'
          }]
        }
      },
      watch: {
        files: 'sass/*.scss',
        tasks: 'sass'
      }
    });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);

};
