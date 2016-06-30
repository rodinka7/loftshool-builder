'use strict';

module.exports = function() {
  $.gulp.task('aside.process', function() {
    return $.gulp.src('./source/js/aside.js')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('aside.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
