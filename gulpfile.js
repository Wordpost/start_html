'use strict';

global.$ = {
	gulp: require('gulp'),
	loadPlugin: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	path: {
		tasks: require('./gulp/config/tasks.js'),
		build: {
			html:  'build/',
			css:   'build/css/',
			js:    'build/js/',
			img:   'build/img/',
			fonts: 'build/fonts/'
		},
		src: {
			html:     'src/*.html',
			sass:     'src/sass/main.scss',
			jsLibs:   'src/js/libs.js',
			jsCustom: 'src/js/main.js',
			img:      'src/img/**/*.*',
			sprites:  'src/img/sprites/*.*',
			fonts:    'src/fonts/**/*.*'
		},
		watch: {
			html:     'src/**/*.html',
			sass:     'src/sass/**/*.*',
			jslibs:   'src/js/libs.js',
			jsCustom: 'src/js/main.js',
			img:      'src/img/**/*.*',
			sprites:  'src/img/sprites/*.*',
			fonts:    'src/fonts/**/*.*'
		}
	}
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('html', 'sass', 'js-custom', 'js-libs', 'img', 'fonts', 'sprites'),
	$.gulp.parallel('watch', 'server')
	)
);