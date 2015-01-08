var gulp         = require('gulp');
var gutil        = require('gulp-util');
var debug        = require('gulp-debug');
var streamify    = require('gulp-streamify')
var config       = require('../config');
var browserify   = require('browserify');
var reactify     = require('reactify');
var brfs         = require('brfs');
var source       = require('vinyl-source-stream');
var handleErrors = require('../util/handleErrors');
var watchify     = require('watchify');
var merge        = require('merge-stream');
var chalk        = require('chalk');
var uglify       = require('gulp-uglify');
var streamify    = require('gulp-streamify');

function doBundle(target, name, dest) {
  return target.bundle()
  .on('error', function(e) {
    gutil.log('Browserify Error', e);
  })
  .pipe(source(name))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest(dest));

}

function watchBundle(target, name, dest) {
  return watchify(target)
  .on('update', function (scriptIds) {
    gutil.log(scriptIds);
    scriptIds = scriptIds
    .filter(function(i) { return i.substr(0,2) !== './' })
    .map(function(i) { return chalk.blue(i.replace(__dirname, '')) });
    if (scriptIds.length > 1) {
      gutil.log(scriptIds.length + ' Scripts updated:\n* ' + scriptIds.join('\n* ') + '\nrebuilding...');
    } else {
      gutil.log(scriptIds[0] + ' updated, rebuilding...');
    }
    doBundle(target, name, dest);
  })
  .on('time', function (time) {
    gutil.log(chalk.green(name + ' built in ' + (Math.round(time / 10) / 100) + 's'));
  });
}

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildBundle(file, watch) {

  var opts        = watch ? watchify.args : {};
  opts.debug      = true;
  opts.hasExports = true;
  
  src = config.scripts.src;
  dest = config.scripts.dest;
  
  var bundle = browserify(opts)
    .add([src, file].join('/'))
    .transform(reactify)
    .transform(brfs);

  if (watch) {
    watchBundle(bundle, file, dest);
  }
  
  return doBundle(bundle, file, dest);

  
}

gulp.task('scripts', function(callback) {

  return buildBundle('app.js', true);
  
});
