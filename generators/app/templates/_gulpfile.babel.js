import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';
import del from 'del';
import rename from 'gulp-rename';

const paths = {
  build: 'build',
  public: 'public',
  server: 'server/*.js',
  styles: 'styles/*.css',
  views: 'views/*.html'
}

gulp.task('clean', (cb) => {
  del([ paths.build, paths.public ], () => cb());
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
        path.basename = path.basename.split('.')[0]
      }))
      .pipe(gulp.dest(paths.build))
});

gulp.task('views', () => {
  gulp.src(paths.views)
      .pipe(gulp.dest(paths.public))
});

gulp.task('build', ['scripts', 'styles', 'views']);
