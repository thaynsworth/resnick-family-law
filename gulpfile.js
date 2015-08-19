var gulp = require('gulp');
var concaty = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var babel = require('gulp-babel');

var arrayJS = [
	"assets/js/lib/modernizr.custom.js", 
	"assets/js/lib/jquery.js", 
	"assets/js/lib/underscore.js", 
	"assets/js/lib/backbone.js", 
	"assets/js/lib/bootstrap.js", 
	"assets/js/lib/lightbox.js", 
	"assets/js/lib/classie.js", 
	"assets/js/lib/pathLoader.js", 
	"assets/js/RESNICK.js", 
	"assets/js/views/wrapper.js", 
	"assets/js/views/index.js", 
	"assets/js/router.js", 
	"assets/js/main.js"
	];

gulp.task('default', ['js', 'js:watch']);

  gulp.task('js:watch', function() {
    gulp.watch(arrayJS, ['js']);
  });

gulp.task('js', function() {
  return gulp.src(arrayJS)
    .pipe(concaty("scripts.js"))
    .pipe(babel())
    .pipe(gulp.dest("dist"))
    .pipe(uglify()).on('error', gutil.log)
    .pipe(rename("scripts.min.js"))
    .pipe(gulp.dest("dist")).on('error', gutil.log);
});