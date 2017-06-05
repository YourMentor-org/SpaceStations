var gulp = require('gulp');
var concatCss = require('gulp-concat-css'); 
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var svg2png = require('gulp-svg2png');
var svgmin = require('gulp-svgmin');

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


gulp.task('svgmin', function () {
    return gulp.src('logo.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./out'));
});

gulp.task('imagemin', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('out/images'))
);

gulp.task('svg2png', function () {
    gulp.src('./img/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./out'));
});

gulp.task('default', ['clean'], function() {  
    gulp.run('scripts');
    gulp.run('styles');
    gulp.run('scripts');
    gulp.run('imagemin');
    gulp.run('watch');
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

gulp.task('build', ['clean', 'styles','scripts', 'imagemin']);
