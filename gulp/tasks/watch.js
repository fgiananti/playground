const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task("watch", () => {
  gulp.start("nodemon");

  watch('./**/*.js', () => {
    gulp.start('lint');
  });

});
