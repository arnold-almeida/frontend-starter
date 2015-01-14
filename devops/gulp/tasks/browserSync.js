var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config').browserSync;


gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Start the static server
gulp.task('bs-start', function() {
  browserSync(config);
});
