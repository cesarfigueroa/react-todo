'use strict';

const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
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
  webpack(webpackConfig, callback);
});

gulp.task('assets:javascripts:compress', ['assets:javascripts'], () => {
  return gulp.src('dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('assets:javascripts:watch', () => {
  new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer)
    .listen(8080, 'localhost');
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
  'assets:javascripts',
  'assets:javascripts:compress'
]);
