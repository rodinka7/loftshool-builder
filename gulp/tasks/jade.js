'use strict';

module.exports = function() {
    $.gulp.task('jade', function() {
      var fs = require('fs'), 
          YOUR_LOCALS = './source/template/data/content.json';
      
      return $.gulp.src($.path.template)
        .pipe($.gp.jade({ 
          locals: JSON.parse(fs.readFileSync(YOUR_LOCALS, 'utf-8')),
          pretty: true }))
        .on('error', $.gp.notify.onError(function(error) {
          console.log(123);
          return {
            title: 'Jade',
            message:  error.message
          }
         }))
        .pipe($.gulp.dest($.config.root));
    });
};
