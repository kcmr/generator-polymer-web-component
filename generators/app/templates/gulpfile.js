'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const processInline = require('gulp-process-inline');
const inlineSource = require('gulp-inline-source');
const htmlmin = require('gulp-htmlmin');
const eslint = require('gulp-eslint');
const autoprefixer = require('autoprefixer');
const minify = require('gulp-htmlmin');

gulp.task('build', () => {
  let styles = processInline();
  let scripts = processInline();

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

gulp.task('browserSync', () => {
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

gulp.task('watch', () => {
  gulp.watch(['src/**/*', 'demo/**/*', 'test/**/*'], ['build', browserSync.reload]);
});

gulp.task('default', ['build', 'browserSync', 'watch']);

