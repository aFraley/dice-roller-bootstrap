var gulp = require('gulp');
var clean = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

var paths = {
  base: ['js/**.*', 'css/**.*'],
  css: 'css/**.css',
  scripts: ['js/jquery-3.1.1.js', 'js/main.js']
}

gulp.task('cleanCSS', function() {
  return gulp.src(paths.css)
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('build.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('browser-sync', ['cleanCSS', 'scripts'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.css, ['cleanCSS']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.base).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
