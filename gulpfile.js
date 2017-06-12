var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var cssnano = require('gulp-cssnano');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src('./src/scss/*.scss') // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('scss')) // Выгружаем результата в папку css
  });

gulp.task('styles', function() {
	return gulp.src('src/styles/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(concatCss("*./src/styles/.css"))
		.pipe(cssnano())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('out'));
});

gulp.task('clean', function() {
  return gulp.src('out', {read: false})
   .pipe(clean());
});


gulp.task('watch', function() {
	gulp.watch(['src/js/*.js', 'src/styles/*.css', '*.html'])
});