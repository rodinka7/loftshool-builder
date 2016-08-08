'use strict';

module.exports = function() {
  $.gulp.task('webgl.process', function() {
    return $.gulp.src('./source/js/webgl/*.*')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js/webgl'))
  })
};