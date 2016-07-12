'use strict';

module.exports = function() {
  $.gulp.task('admin.process', function() {
    return $.gulp.src('./source/js/admin/*.js')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('admin.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};