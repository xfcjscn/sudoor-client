// Generated on 2013-11-29 using generator-webapp 0.4.4
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

var mainCfg = {
	angular: {
		comp: {
			js: 'angular_comp/**/*.js',
			html: 'angular_comp/**/*.html',
			json: 'angular_comp/**/*.json',
			all: 'angular_comp/**'
		}
	},
	infra: 'bower_components/infra-client/app',
	index: 'index.html',
	localServer: 'c:/apps/Apache24/htdocs',
	remoteServer: 'c:/apps/Apache24/htdocs'
};

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					/*
					 For require-css
					 CSS internal URL rebase:
					 oldBase = src css path
					 newBase:
					 By default it's optimized css path, but if siteRoot available than siteRoot path (related to optimized css path)
					 */
					//buildCSS: false,
					separateCSS: true,
					//siteRoot: '../angular_comp/GPlatform',

					optimize: 'none',
					baseUrl: "<%= yeoman.app %>/bower_components",
					out: '<%= yeoman.app %>/scripts/requirejs.optimized.js',
					name: 'infra-client/app/scripts/requirejs.config.cache',

					//TODO: In sub-project this should changed to : '<%= yeoman.app %>/bower_components/infra-client/app/scripts/requirejs.config.js'.
					mainConfigFile: '<%= yeoman.app %>/scripts/requirejs.config.js',

					//TODO: WARNING: This is project specific config, need to be replaced with sub-project config
					paths: {
						'infra-client': '..',
						datajs: 'scripts/vendor/datajs/datajs-1.1.1',
						OData: 'scripts/vendor/datajs/datajs-1.1.1'
					}
				}
			}
		},

		// configurable paths
		yeoman: {
			app: 'app',
			dist: 'dist'
		},
		watch: {
			compass: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
				tasks: ['compass:server', 'autoprefixer']
			},
			styles: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
				tasks: ['copy:styles', 'autoprefixer']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= yeoman.app %>/' + mainCfg.angular.comp.all,
					'<%= yeoman.app %>/*.html',
					'.tmp/styles/{,*/}*.css',
					'{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
					'<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
				]
			}
		},
		connect: {
			options: {
				port: 80,
				livereload: 35729,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: 'http://localhost:80',
					base: [
						'.tmp',
						'<%= yeoman.app %>'
					]
				}
			},
			test: {
				options: {
					base: [
						'.tmp',
						'test',
						'<%= yeoman.app %>'
					]
				}
			},
			dist: {
				options: {
					open: 'http://localhost:80',
					base: '<%= yeoman.dist %>',
					livereload: false
				}
			}
		},
		clean: {
			dist: {
				files: [
					{
						dot: true,
						src: [
							'.tmp',
							'<%= yeoman.dist %>/*',
							'!<%= yeoman.dist %>/.git*'
						]
					}
				]
			},
			server: '.tmp'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js',
				'!<%= yeoman.app %>/scripts/vendor/*',
				'test/spec/{,*/}*.js'
			]
		},
		mocha: {
			all: {
				options: {
					run: true,
					urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
				}
			}
		},
		compass: {
			options: {
				sassDir: '<%= yeoman.app %>/styles',
				cssDir: '.tmp/styles',
				generatedImagesDir: '.tmp/images/generated',
				imagesDir: '<%= yeoman.app %>/images',
				javascriptsDir: '<%= yeoman.app %>/scripts',
				fontsDir: '<%= yeoman.app %>/styles/fonts',
				importPath: '<%= yeoman.app %>/bower_components',
				httpImagesPath: '/images',
				httpGeneratedImagesPath: '/images/generated',
				httpFontsPath: '/styles/fonts',
				relativeAssets: false,
				assetCacheBuster: false
			},
			dist: {
				options: {
					generatedImagesDir: '<%= yeoman.dist %>/images/generated'
				}
			},
			server: {
				options: {
					debugInfo: true
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 1 version']
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: '.tmp/styles/',
						src: '{,*/}*.css',
						dest: '.tmp/styles/'
					}
				]
			}
		},
		// not used since Uglify task does concat,
		// but still available if needed
		/*concat: {
		 dist: {}
		 },*/
		// not enabled since usemin task does concat and uglify
		// check index.html to edit your build targets
		// enable this task if you prefer defining your build targets here
		uglify: {
			dist: {
				files: [
					{
						expand: true,
						cwd: '<%= yeoman.app %>',
						src: mainCfg.infra + '/**/*.js',
						dest: '<%= yeoman.dist %>'
					}
				]
			}
		},
		'bower-install': {
			app: {
				html: '<%= yeoman.app %>/index.html',
				ignorePath: '<%= yeoman.app %>/'
			}
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
						'<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
					]
				}
			}
		},
		useminPrepare: {
			options: {
				dest: '<%= yeoman.dist %>'
			},
			html: '<%= yeoman.app %>/' + mainCfg.index
		},
		usemin: {
			options: {
				assetsDirs: ['<%= yeoman.dist %>']
			},
			html: ['<%= yeoman.dist %>/' + mainCfg.index],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
		},
		imagemin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: '<%= yeoman.app %>/images',
						src: '{,*/}*.{gif,jpeg,jpg,png}',
						dest: '<%= yeoman.dist %>/images'
					}
				]
			}
		},
		svgmin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: '<%= yeoman.app %>/images',
						src: '{,*/}*.svg',
						dest: '<%= yeoman.dist %>/images'
					}
				]
			}
		},
		cssmin: {
			// This task is pre-configured if you do not wish to use Usemin
			// blocks for your CSS. By default, the Usemin block from your
			// `index.html` will take care of minification, e.g.
			//
			//     <!-- build:css({.tmp,app}) styles/main.css -->
			//
			// dist: {
			//     files: {
			//         '<%= yeoman.dist %>/styles/main.css': [
			//             '.tmp/styles/{,*/}*.css',
			//             '<%= yeoman.app %>/styles/{,*/}*.css'
			//         ]
			//     }
			// }
		},
		htmlmin: {
			dist: {
				options: {
					/*removeCommentsFromCDATA: true,
					 // https://github.com/yeoman/grunt-usemin/issues/44
					 //collapseWhitespace: true,
					 collapseBooleanAttributes: true,
					 removeAttributeQuotes: true,
					 removeRedundantAttributes: true,
					 useShortDoctype: true,
					 removeEmptyAttributes: true,
					 removeOptionalTags: true*/
				},
				files: [
					{
						expand: true,
						cwd: '<%= yeoman.app %>',
						src: ['*.html', mainCfg.angular.comp.html],
						dest: '<%= yeoman.dist %>'
					}
				]
			}
		},
		// Put files not handled in other tasks here
		copy: {
			dist: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: '<%= yeoman.app %>',
						dest: '<%= yeoman.dist %>',
						src: [
							mainCfg.angular.comp.json,
							'*.{ico,png,txt}',
							'.htaccess',
							'images/{,*/}*.{webp,gif}',
							'styles/fonts/{,*/}*.*',
							'bower_components/sass-bootstrap/fonts/*.*',
							'bower_components/font-awesome/fonts/*.*'
						]
					}
				]
			},
			styles: {
				expand: true,
				dot: true,
				cwd: '<%= yeoman.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			},
			fonts: {
				expand: true,
				dot: true,
				cwd: '<%= yeoman.app %>/bower_components/font-awesome',
				dest: '<%= yeoman.dist %>/styles',
				src: 'fonts/*.*'
			},
			localDeploy: {
				expand: true,
				cwd: '<%= yeoman.dist %>',
				dest: mainCfg.localServer,
				src: '**'
			},
			remoteDeploy: {
				expand: true,
				cwd: '<%= yeoman.dist %>',
				dest: mainCfg.remoteServer,
				src: '**'
			}
		},
		modernizr: {
			devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
			outputFile: '<%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
			files: [
				'<%= yeoman.dist %>/scripts/{,*/}*.js',
				'<%= yeoman.dist %>/styles/{,*/}*.css',
				'!<%= yeoman.dist %>/scripts/vendor/*'
			],
			uglify: true
		},
		concurrent: {
			server: [
				'compass',
				'copy:styles'
			],
			test: [
				'copy:styles'
			],
			dist: [
				'compass',
				'copy:styles',
				'imagemin',
				'svgmin',
				'htmlmin'
			]
		}
	});

	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});

	grunt.registerTask('test', [
		'clean:server',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'mocha'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		//Generate optimized file as the source which will be used by tasks(concat, uglify) generated by useminPrepare
		'requirejs',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'cssmin',
		'uglify',
		//'modernizr',
		'copy:dist',
		'copy:fonts',
		'rev',
		'usemin'
	]);

	grunt.registerTask('default', [
		'jshint',
		'test',
		'build'
	]);
};
