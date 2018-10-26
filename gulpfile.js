var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var babel = require("gulp-babel");

gulp.task("babel", function () {
    return gulp.src("js/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
})


gulp.task('babel:watch', function () {
    gulp.watch('js/*.js', ['babel'])
})

 gulp.task('default', function() {
     gulp.start('babel:watch')
 })