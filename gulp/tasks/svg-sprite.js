'use strict';

module.exports = function() {
	$.gulp.task('svg-sprite', function() {
		return $.gulp.src('./source/icons/*.svg')
		.pipe($.gp.svgmin({
				js2svg: {
					pretty: true
				}
			}))
		.pipe($.gp.svgSprite({
			shape: {
				dimension: {
					maxWidth: 32,
					maxHeight: 32
				},
				spacing: {
					padding: 5
				}
			},	
			mode: {
				view: {
					bust: false,
					render: {
						css: true
					} 
				},
				symbol: true
			}
		}))
		.pipe($.gulp.dest($.config.root+'/assets'));
	});
};