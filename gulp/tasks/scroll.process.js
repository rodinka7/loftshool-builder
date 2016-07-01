'use strict';

module.exports = function() {
  $.gulp.task('scroll.process', function() {
    return $.gulp.src('./source/js/scroll.js')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('scroll.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};