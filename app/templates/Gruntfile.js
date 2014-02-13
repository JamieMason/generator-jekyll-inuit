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
      options: {
        livereload: true
      },
      precompilers: {
        files: [
          '<%= watch.inuit.files %>',
          '<%= watch.jekyll.files %>'
        ],
        tasks: [
          'shell:inuit',
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
      },
      jekyll: {
        files: [
          'index.{md,html}',
          '{_includes,_layouts,_posts}/**/*.{md,html}'
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
