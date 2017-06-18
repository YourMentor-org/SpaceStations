var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var cssnano = require('gulp-cssnano');
var cleanCSS = require('gulp-clean-css');
var svgmin = require('gulp-svgmin');
var imagemin = require('gulp-imagemin');
var svg2png = require('gulp-svg2png');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');

gulp.task('templates', function buildHTML() {  
    return gulp.src('*.pug') // возьми все файлы по этому адресу  
        .pipe(pug({
            pretty: true // в объекте указываются дополнительные настройки для pug; в данном случае говорим "сделай html-файл красивым, с отступами"
        }).on('error', function(error) {
            console.log(error); // если нашел ошибку при компиляции, покажи ее
        }))
        .pipe(gulp.dest('build')); // положи результат в эту папку
});


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
		.pipe(concatCss('styles/bundle.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('out/'));
});

gulp.task('clean', function() {
  return gulp.src('out', {read: false})
   .pipe(clean());
});


gulp.task('watch', function() {
	gulp.watch(['src/js/*.js', 'src/styles/*.css', '*.html', 'src/scss/*.scss'])
});

gulp.task('svgmin', function () {
    return gulp.src('./src/img/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./out'));
});

gulp.task('imagemin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('out/images'))
);

gulp.task('svg2png', function () {
    gulp.src('./src/img/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./out'));
});

gulp.task('default', ['clean'], function() {  
    gulp.run('scripts');
    gulp.run('styles');
    gulp.run('scripts');
    gulp.run('watch');
});

gulp.task('scripts', function () {
	gulp.src('src/js/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('out'));	
});

gulp.task('build', ['clean', 'styles','scripts', 'imagemin','svgmin','svg2png']);