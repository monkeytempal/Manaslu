module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'js/min/main.min.js': ['js/main.js']
				} //files
			} //my_targets
		}, //uglify

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //Options
			} //Dev
		}, //Compass

		watch: {
			options: {
			    livereload: true
			},

			scripts: {
				files: ['js/*.js'],
				tasks: ['uglify']
			}, //Scripts tasks

			sass: {
				files: ['sass/*.scss'],
				tasks: ['compass:dev']
			}, // Compass tasks

			HTML: {
				files: [
				'*.php',
                '**/*.php'
                ]
			} //HTML tasks
		} //watch
	}); //initConfig

	grunt.registerTask('default', 'watch');
} //exports