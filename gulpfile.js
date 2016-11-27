var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  typescript = require('gulp-typescript'),
  sourcemaps = require('gulp-sourcemaps'),
  tscConfig = require('./tsconfig.json');

var appSrc = 'build/',
  tsSrc = 'app/';

gulp.task('html', function () {
  gulp.src(appSrc + '**/*.html');
});

gulp.task('css', function () {
  gulp.src(appSrc + 'css/*.css');
});

gulp.task('typescript', function () {
  return gulp
    .src(tsSrc + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function () {
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
  gulp.watch(appSrc + 'css/*.css', ['css']);
  gulp.watch(appSrc + '**/*.html', ['html']);
});

gulp.task('webserver', function () {
  gulp.src("./")
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['typescript', 'watch', 'webserver']);
