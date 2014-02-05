/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
      options: {
        stdout: true
      },
      jekyll: {
        command: 'jekyll build'
      },
      inuit: {
        command: 'compass compile .'
      }
    },
    watch: {
      jekyll: {
        files: [
          '_posts/**/*.md',
          '_layouts/**/*.html'
        ],
        tasks: [
          'shell:jekyll'
        ]
      },
      inuit: {
        files: [
          'css/**/*.scss'
        ],
        tasks: [
          'shell:inuit'
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
