var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');


function scss(){
    return gulp.src('./styles/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
  }
function styles(){
    return gulp.src('./styles/css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
};

function watch (){
    gulp.watch('./styles/sass/*.scss', gulp.series (scss,styles ))
}

var build = gulp.series(scss, styles, watch);

exports.scss = scss;
exports.css = styles;
exports.watch = watch;
exports.default = build;
