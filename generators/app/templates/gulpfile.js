var gulp = require('gulp');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var processInline = require('gulp-process-inline');
var inlineSource = require('gulp-inline-source');
var htmlmin = require('gulp-htmlmin');
var eslint = require('gulp-eslint');
var autoprefixer = require('autoprefixer');
var minify = require('gulp-htmlmin');

gulp.task('build', function() {
  var styles = processInline();
  var scripts = processInline();

  return gulp.src(['src/*.html'])
    .pipe(inlineSource({
      compress: false,
      swallowErrors: true
    }))

    // JS
    .pipe(scripts.extract('script'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(scripts.restore())

    // CSS
    .pipe(styles.extract('style'))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]))
    .pipe(styles.restore())

    // HTML
    .pipe(minify({
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      caseSensitive: true,
      keepClosingSlash: true,
      customAttrAssign: [/\$=/],
      minifyCSS: true,
      minifyJS: true
    }))

    .pipe(gulp.dest('.'));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './',
      index: 'index.html',
      routes: {
        '/': './bower_components'
      }
    },
    open: false,
    notify: false,
    ghostMode: false
  });
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*', 'demo/**/*', 'test/**/*'], ['build', browserSync.reload]);
});

gulp.task('default', ['build', 'browserSync', 'watch']);

