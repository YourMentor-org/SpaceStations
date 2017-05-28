var gulp = require(`gulp`),
    uglify = require(`gulp-uglify`),
    concat = require(`gulp-concat`),
    imagemin = require(`gulp-imagemin`),
    svg2png = require(`gulp-svg2png`),
    svgmin = require(`gulp-svgmin`),
    clean = require(`gulp-clean`),
    cssnano = require(`gulp-cssnano`),
    autoprefixer = require(`gulp-autoprefixer`);
    browserSync = require(`browser-sync`).create();


gulp.task(`styles`, function() {
  gulp.src(`./css/*.css`)
    .pipe(autoprefixer({
      browsers: [`last 2 versions`]
    }))
    .pipe(concat(`styles.css`))
    .pipe(cssnano())
    .pipe(gulp.dest(`build/`));
});

gulp.task(`html`, function() {
  gulp.src(`./index.html`)
    .pipe(gulp.dest(`build/`));
});

gulp.task(`clean`, function() {
  return gulp.src(`build/`, {read: false})
    .pipe(clean());
});

gulp.task(`browser-sync`, function() {
  return browserSync.init({
      server: {
        baseDir: `./build/`
      },
      port: 3001,
      host: `localhost`,
      logPrefix: `frontend`,
      open: false
  });
});

gulp.task(`default`, [`clean`], function() {
  gulp.run(`styles`);
  gulp.run(`html`);
  gulp.run(`browser-sync`);
});

gulp.task(`watch`, function() {
  gulp.watch(`./css/*.css`, [`styles`]);
  gulp.watch(`./*.html`, [`html`]);
});
