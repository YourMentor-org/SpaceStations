var gulp = require('gulp');
var concatCss = require('gulp-concat-css'); 
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	return gulp.src('/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(concatCss("styles/main.css"))
		.pipe(cssnano())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('out'));
});

gulp.task('default', ['clean'], function() {  
    gulp.run('scripts');
    gulp.run('styles');
});

gulp.task('scripts', function () {
	gulp.src('*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('out'));	
});

gulp.task('watch', function() {
	gulp.watch(['*.js', '*.css', '*.html'])
});

gulp.task('clean', function() {
  return gulp.src('out', {read: false})
   .pipe(clean());
});
