const {
  src, series, dest, parallel,
} = require('gulp');
const clean = require('gulp-clean');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');

const cleanFolder = () => src(['dist'], { read: false })
  .pipe(clean());

const copyFile = () => src(['./build/web-mobile/**/*'])
  .pipe(dest('./dist'));

const htmlminify = () => src('./dist/*.html')
  .pipe(htmlmin({
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeEmptyAttributes: true,
    minifyJS: true,
    minifyCSS: true,
  }))
  .pipe(dest('./dist'));

const cssMinify = () => src('./dist/*.css')
  .pipe(cleanCSS())
  .pipe(dest('./dist'));

const imageMinify = () => src('./dist/**/*')
  .pipe(imagemin())
  .pipe(dest('./dist'));

const terserJs = () => src(['./build/wechatgame/**/*.js'])
  .pipe(terser())
  .pipe(dest('./build/wechatgame'));

const imageMinify2 = () => src('./build/wechatgame/**/*')
  .pipe(imagemin())
  .pipe(dest('./build/wechatgame'));


exports.web = series(
  cleanFolder,
  copyFile,
  parallel([htmlminify, cssMinify]),
  imageMinify,
);

exports.wechat = series(
  imageMinify2,
);
