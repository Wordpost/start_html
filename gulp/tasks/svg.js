module.exports = function() {
	$.gulp.task('svg', function () {
		return $.gulp.src($.path.src.svg)
		.pipe($.loadPlugin.cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlsMode: true }
		}))
			.pipe($.loadPlugin.replace('&gt;', '>'))
		.pipe($.svgSprite({
			mode: "symbols",
			preview: false,
			selector: "icon-%f",
			svg: {
				symbols: "img/symbols.svg",
			},
			
		}))
		.pipe($.gulp.dest('src/'));
	});
};