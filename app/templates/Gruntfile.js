/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
      options: {
        stdout: true
      },
      inuit: {
        command: 'compass compile .'
      },
      jekyll: {
        command: 'jekyll build'
      }
    },
    watch: {
      inuit: {
        files: [
          'css/**/*.scss'
        ],
        tasks: [
          'shell:inuit'
        ]
      },
      jekyll: {
        files: [
          '_posts/**/*.md',
          '_layouts/**/*.html'
        ],
        tasks: [
          'shell:jekyll'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'watch'
  ]);

};
