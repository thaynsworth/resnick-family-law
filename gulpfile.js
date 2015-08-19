var gulp = require('gulp');
var concaty = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');

var arrayJSLib = [
	"assets/js/lib/modernizr.custom.js", 
	"assets/js/lib/jquery.js", 
	"assets/js/lib/underscore.js", 
	"assets/js/lib/backbone.js", 
	"assets/js/lib/bootstrap.js", 
	"assets/js/lib/lightbox.js", 
	"assets/js/lib/classie.js", 
	"assets/js/lib/pathLoader.js"
	];

var arrayJS = [
	"assets/js/RESNICK.js", 
	"assets/js/views/wrapper.js", 
	"assets/js/views/index.js", 
	"assets/js/router.js", 
	"assets/js/main.js"
]

var arrayCSSLib = [
	"assets/css/lib/bootstrap.css",
	"assets/css/lib/bootstrap-theme.css",
	"assets/css/lib/animate.css",
	"assets/css/lib/font-awesome.css",
	"assets/css/lib/fonts.css",
	"assets/css/lib/lightbox.css",
	"assets/css/lib/normalize.css"
]

gulp.task('default', ['css:lib', 'js:lib', 'js', 'less', 'watch']);

gulp.task('watch', function() {
  gulp.watch(arrayJS, ['js']);
  gulp.watch("assets/less/**/*.less", ['less']);
});

gulp.task('js:lib', function() {
	return gulp.src(arrayJSLib)
    .pipe(concaty("lib.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(uglify()).on('error', gutil.log)
    .pipe(rename("lib.min.js"))
    .pipe(gulp.dest("dist/js")).on('error', gutil.log);		
})

gulp.task('js', function() {
  return gulp.src(arrayJS)
    .pipe(concaty("scripts.js"))
    .pipe(babel())
    .pipe(gulp.dest("dist/js"))
    .pipe(uglify()).on('error', gutil.log)
    .pipe(rename("scripts.min.js"))
    .pipe(gulp.dest("dist/js")).on('error', gutil.log);
});

gulp.task('less', function(){
	return gulp.src("assets/less/style.less")
		.pipe(less())
		.pipe(rename("styles.css"))
    .pipe(gulp.dest("dist/css")).on('error', gutil.log)
    .pipe(cssmin())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("dist/css")).on('error', gutil.log);
});

gulp.task('css:lib', function(){
	return gulp.src(arrayCSSLib)
		.pipe(concaty("lib.css"))
		.pipe(gulp.dest("dist/css"))
		.pipe(cssmin())
		.pipe(rename("lib.min.css"))
		.pipe(gulp.dest("dist/css")).on('error', gutil.log);
})














