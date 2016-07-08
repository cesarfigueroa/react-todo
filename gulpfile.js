'use strict';

const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('assets:clean', () => del.sync(['dist']));

gulp.task('assets:stylesheets', () => {
  return gulp.src('assets/stylesheets/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets:stylesheets:watch', () => {
  gulp.watch('assets/stylesheets/**/*.scss', ['assets:stylesheets']);
});

gulp.task('assets:javascripts', ['assets:clean'], callback => {
  webpack(require('./webpack.config.js'), callback);
});

gulp.task('assets:javascripts:watch', () => {
  let compiler = webpack(require('./webpack.config.js'));

  new WebpackDevServer(compiler, {
    publicPath: '/dist',
    historyApiFallback: true,
    stats: {
      chunks: false
    }
  }).listen(8080, 'localhost');
});

gulp.task('assets:watch', [
  'assets:clean',
  'assets:stylesheets',
  'assets:stylesheets:watch',
  'assets:javascripts:watch'
]);

gulp.task('assets', [
  'assets:clean',
  'assets:stylesheets',
  'assets:javascripts'
]);
