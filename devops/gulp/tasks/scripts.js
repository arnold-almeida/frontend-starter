var gulp         = require('gulp');
var gutil        = require('gulp-util');
var debug        = require('gulp-debug');
var config       = require('../config');
var browserify   = require('browserify');
var watchify     = require('watchify');
var reactify     = require('reactify');
var brfs         = require('brfs');
var source       = require('vinyl-source-stream');
var handleErrors = require('../util/handleErrors');

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildBundle(file, watch) {

  var opts        = watch ? watchify.args : {};
  opts.debug      = true;
  opts.hasExports = true;
  // opts.basedir    = config.scripts.src;
  
  src = './src/js';
  dest = './build/js';
  name = 'app.js';
  
  var bundle = browserify(opts)
    .add([src, file].join('/'))
    .transform(reactify)
    .transform(brfs);

  function rebundle() {
    var stream = bundle.bundle();
    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest(dest + '/'));
  }

  bundle
    .on('update', function() {
      rebundle();
      gutil.log('Rebundle...');
    });

  return rebundle();
}

gulp.task('scripts', function(callback) {

  return buildBundle('app.js', true);
  
});
