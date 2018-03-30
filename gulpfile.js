'use strict';

global.$ = {
	gulp: require('gulp'),
	loadPlugin: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	svgSprite: require('gulp-svg-sprites'),
	smartgrid: require('smart-grid'),
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
			jsFile:   'src/js/libs/*.js',
			img:      'src/img/**/*.*',
			sprites:  'src/img/sprites/*.*',
			svg:      'src/img/svg-icon/*.svg',
			fonts:    'src/fonts/**/*.*'
		},
		watch: {
			html:     'src/**/*.html',
			sass:     'src/sass/**/*.*',
			jslibs:   'src/js/libs.js',
			jsCustom: 'src/js/main.js',
			jsFile:   'src/js/libs/*.js',
			img:      'src/img/**/*.*',
			sprites:  'src/img/sprites/*.*',
			svg:      'src/img/svg-icon/*.svg',
			fonts:    'src/fonts/**/*.*'
		},
		gridSettings: {
			// https://www.npmjs.com/package/smart-grid#why-how-does-it-work
			outputStyle: 'scss', /* less || scss || sass || styl */
			columns: 12, /* number of grid columns */
			offset: '30px', /* gutter width px || % */
			mobileFirst: true, /* mobileFirst ? 'min-width' : 'max-width' */
			container: {
				maxWidth: '1200px', /* max-width оn very large screen */
				fields: '15px' /* side fields */
			},
			breakPoints: {
				xl: {
					width: '1230px',
				},
				lg: {
					width: '992px'
				},
				md: {
					width: '768px',
				},
				sm: {
					width: '576px'
				}
			}
		},
	}
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

$.smartgrid('./src/sass/plug/grid/', $.path.gridSettings);

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('html', 'js-custom', 'js-libs', 'js-file', 'fonts', 'sprites', 'svg', 'svg-sass', 'sass', 'img'),
	$.gulp.parallel('watch', 'server')
	)
);
