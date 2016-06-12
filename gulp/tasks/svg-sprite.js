'use strict';

module.exports = function() {
	$.gulp.task('svg-sprite', function() {
		return $.gulp.src('./source/icons/*.svg')
		.pipe($.gp.svgSprite({
			mode: {
				css: true
			}
		}))
		.pipe($.gulp.dest($.config.root + '/assets/icons'));
	});
};