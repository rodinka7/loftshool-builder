'use strict';

module.exports = function() {
  $.gulp.task('svg.process', function() {
    return $.gulp.src('./source/js/svg.js')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('svg.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};