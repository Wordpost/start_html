module.exports = function() {
	$.gulp.task('js-file', function() {
		return $.gulp.src($.path.src.jsFile, {since: $.gulp.lastRun('js-file')})
		.pipe($.loadPlugin.uglify())
		.pipe($.gulp.dest($.path.build.js))
		.pipe($.browserSync.reload({
			stream: true
		}))
	});
};