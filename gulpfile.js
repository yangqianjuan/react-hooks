const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript'); //可以把文件转成对应的mode，也可以是es5
const del = require('del');

// 1. 如果上次有对应的产物，此时要进行删除 umd cjs esm
gulp.task('clean', async function () {
  await del('cjs/**');
  await del('es/**');
  await del('lib/**');
});

// 2.针对不同类型的产物，进行构建

gulp.task('cjs', function () {
  return gulp
    .src(['./es/**/*.js'])
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('es', function () {
  //使用tsc 根据 tsconfig.pro.json配置将index.ts输出到es目录下
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  // console.log('tsProject:' tsProject)
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

gulp.task('declaration', function () {
  //类型文件
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('es/'))
    .pipe(gulp.dest('lib/'));
});

gulp.task('copyReadme', async function () {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

exports.default = gulp.series(
  'clean',
  'es',
  'cjs',
  'declaration',
  'copyReadme',
);
