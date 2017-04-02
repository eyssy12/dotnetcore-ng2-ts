var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-cssmin');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var libs = './wwwroot/libs/';
var assets = './wwwroot/assets/';

gulp.task('styles:del-min-css', function () {
    return del([assets + '/styles/*.min.css']);
});

gulp.task('styles:min-css', function () {

    gulp.src([assets + '/styles/styles.css', assets + '/styles/bootstrap.css'])
        .pipe(concat('styles.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(assets));
});

gulp.task('restore:core-js', function () {
    gulp.src(['node_modules/core-js/client/*.js'])
        .pipe(gulp.dest(libs + 'core-js'));
});

gulp.task('restore:zone.js', function () {
    gulp.src([
        'node_modules/zone.js/dist/*.js'
    ]).pipe(gulp.dest(libs + 'zone.js'));
});

gulp.task('restore:reflect-metadata', function () {
    gulp.src([
        'node_modules/reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(libs + 'reflect-metadata'));
});

gulp.task('restore:systemjs', function () {
    gulp.src([
        'node_modules/systemjs/dist/*.js'
    ]).pipe(gulp.dest(libs + 'systemjs'));
});

gulp.task('restore:rxjs', function () {
    gulp.src([
        'node_modules/rxjs/**/*.js'
    ]).pipe(gulp.dest(libs + 'rxjs'));
});

gulp.task('restore:angular-in-memory-web-api', function () {
    gulp.src([
        'node_modules/angular-in-memory-web-api/**/*.js'
    ]).pipe(gulp.dest(libs + 'angular-in-memory-web-api'));
});

gulp.task('restore:angular', function () {
    gulp.src([
        'node_modules/@angular/**/*.js',
    ]).pipe(gulp.dest(libs + '@angular'));

    gulp.src([
        'node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.css'
    ]).pipe(gulp.dest(libs + '@angular/material'));
});

gulp.task('restore:bootstrap', function () {
    gulp.src([
        'node_modules/bootstrap/dist/**/*.*'
    ]).pipe(gulp.dest(libs + 'bootstrap'));
});

gulp.task('styles', ['styles:del-min-css', 'styles:min-css']);

gulp.task('restore', [
    'restore:core-js',
    'restore:zone.js',
    'restore:reflect-metadata',
    'restore:systemjs',
    'restore:rxjs',
    'restore:angular-in-memory-web-api',
    'restore:angular',
    'restore:bootstrap',
    'styles:min-css'
]);