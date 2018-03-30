module.exports = function() {
	$.gulp.task('svg-sass', function () {
		return $.gulp.src($.path.src.svg)
    .pipe($.svgSprite({
      preview: false,
      selector: "icon-%f",
      svg: {
        sprite: 'symbols.svg'
      },
      cssFile: "sass/plug/_sprites.scss",
      templates: {
        css: require("fs").readFileSync("src/sass/plug/_template.scss", "utf-8")
      }
    }))
		.pipe($.gulp.dest('src/'));
	});
};