import ava from 'gulp-ava';
import babel from 'gulp-babel';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import cleanCSS from 'gulp-clean-css';
import del from 'del';
import gulp from 'gulp';
import gutil from 'gulp-util';
import reactify from 'reactify';
import rename from 'gulp-rename';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

const paths = {
  build: 'build',
  public: 'public',
  server: 'server/*.js',
  styles: 'styles/*.css',
  views: 'views/*.html'
};

gulp.task('browser', () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: './browser/app.js',
    transform: [babelify, reactify]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.public));
});

gulp.task('clean', (cb) => {
  del([paths.build, paths.public], () => cb());
});

gulp.task('test', () => {
  gulp.src('test/*.spec.js')
      .pipe(ava());
});

gulp.task('styles', () => {
  gulp.src(paths.styles)
      .pipe(cleanCSS())
      .pipe(gulp.dest(paths.public));
});

gulp.task('scripts', () => {
  gulp.src(paths.server)
      .pipe(babel())
      .pipe(rename((path) => {
        path.basename = path.basename.split('.')[0];
      }))
      .pipe(gulp.dest(paths.build));
});

gulp.task('views', () => {
  gulp.src(paths.views)
      .pipe(gulp.dest(paths.public));
});

gulp.task('build', ['scripts', 'styles', 'views', 'browser']);
