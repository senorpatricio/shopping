var gulp = require('gulp'),
   
    sass = require('gulp-sass'),
    cp = require('child_process'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer');
    
    gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('sass', function () {
   gulp.src('app/assets/main.scss')
       .pipe(sass({
         includePaths: ['css'],
         onError: browserSync.notify
       }))
       .pipe(prefix({
           browsers: ['last 2 versions']
       }))
       .pipe(gulp.dest('app/assets/css'))
       .pipe(browserSync.reload({stream:true}))
       .pipe(gulp.dest('app/assets/css'));
});
gulp.task('watch', function() {
   // Watch .scss and sass files
  gulp.watch('assets/css/**',  ['sass']);
 });

// Default tasks
gulp.task('default', ['browser-sync', 'watch']);

