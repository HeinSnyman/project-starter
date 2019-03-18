const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer')

function style(){
    return gulp.src('./scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());
}

function prefixer(){
    return gulp.src('./css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
}


function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./scss/*.sass', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.watch = watch;
exports.style = style;
exports.prefixer = prefixer;