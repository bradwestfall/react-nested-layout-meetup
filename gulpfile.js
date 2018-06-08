const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/static/css/'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/scss/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'sass:watch'])
