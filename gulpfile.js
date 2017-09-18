var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    minifyCSS  = require('gulp-minify-css'),
    uglify     = require('gulp-uglify'),
    rename     = require("gulp-rename");

gulp.task('concat', function() {
    return gulp.src('./vendor/*/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('minify-css',['concat'], function() {
  return gulp.src('./build/css/all.css')
    .pipe(minifyCSS({
       keepBreaks: true,
    }))
    .pipe(rename(function(path) {
      path.basename += ".min";
      path.extname = ".css";
    }))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('fonts-move',function(){
    return gulp.src('./vendor/*/fonts/*.*')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./build/fonts'));
})

gulp.task('uglify', function() {
    return gulp.src(['./vendor/jquery/js/*.js','./vendor/bootstrap/js/*.js','./vendor/select/js/*.js','./vendor/theme/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('webp-move',function(){
    return gulp.src('./img/*.webp')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./build/img'));
})


gulp.task('default',['minify-css','fonts-move','uglify','webp-move']);