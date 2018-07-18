const gulp = require('gulp');
const jshint = require('gulp-jshint');

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
})
