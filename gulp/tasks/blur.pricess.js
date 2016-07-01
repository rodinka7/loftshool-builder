'use strict';

module.exports = function() {
  $.gulp.task('blur.process', function() {
    return $.gulp.src('./source/js/blur.js')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('blur.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
