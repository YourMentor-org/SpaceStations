var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    svg2png = require('gulp-svg2png'),
    svgmin = require('gulp-svgmin'),
    spritesheet = require(`gulp-svg-spritesheet`);
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');



gulp.task('clean', function () {
    return gulp.src('build/', {read: false})
        .pipe(clean());
});

gulp.task('styles', function () {
    gulp.src('./styles/*.css')
        .pipe(autoprefixer({ //Добавление autoprefixer.
            browsers: ['last 2 versions']
        }))
        .pipe(concat('styles.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('build'));

});


gulp.task('html', function() {
    gulp.src('./index.html')
        .pipe(gulp.dest('build/'))
});

gulp.task('watch', function() {
    gulp.watch('./styles/*.css', ['styles']); // будем наблюдать за всеми css-файлами; в случае их изменения вызовем таск styles
    gulp.watch('./*.html', ['html']);  // будем наблюдать за всеми html-файлами; в случае их изменения вызовем таск html
});




gulp.task('browser-sync', function() {
    return browserSync.init({
        server: {
            baseDir: './build/'
        },
        port: 8080,
        host: 'localhost',
        logPrefix: 'frontend',
        open: false
    });
});

gulp.task('images', function(){
  gulp.src('./images/')
  .pipe(imagemin())
  .pipe(svg2png())
  .pipe(svgmin())
  .pipe(spritesheet())
  .pipe(gulp.dest(`build/img/`));
});

gulp.task('default', ['clean'], function() {
    gulp.run('styles');
    gulp.run('html');
    gulp.run('browser-sync');
    gulp.run('images');
});
