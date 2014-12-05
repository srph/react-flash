var gulp = require('gulp')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , plumber = require('gulp-plumber')
  , reactify = require('reactify')
  , express = require('express')
  , app = express();

gulp.task('server', function() {
  app.use(express.static(__dirname));

  var server = app.listen(6969, function() {
    console.log('Listening to port %d', server.address().port);
  });
})

gulp.task('build', function() {
  var b = browserify();
  b.transform(reactify);
  b.add('./src/index.js');

  return b.bundle()
    .pipe(plumber())
    .pipe(source('react-flash.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('example', function() {
  var b = browserify();
  b.transform(reactify);
  b.add('./example/script.js');

  return b.bundle()
    .pipe(plumber())
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./example/'));
});

gulp.task('default', function() {
  gulp.run('build');
  gulp.run('example');
  gulp.run('server');
  gulp.watch('./src/**/*.*', ['build', 'example']);
  gulp.watch('./example/**/*.*', ['example', 'build']);
});