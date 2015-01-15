var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest + '/'
    }
  },
  sass: {
    src: src + "/assets/scss/*.{sass,scss}",
    dest: dest + '/css',
    settings: {
      // Required if you want to use SASS syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map',
      imagePath: '/images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/assets/img/**",
    dest: dest + "/images"
  },
  scripts: {
    src: src + '/js',
    dest: dest + '/js',
  },
  markup: {
    src: src + '/*.html',
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
