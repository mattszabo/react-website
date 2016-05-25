'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';

// We don't want to rebundle while developing.
// We only want to include them in app deployment
var dependencies = [
  'react',
  'react-dom'
];

gulp.task('default', () => {
  return browserify("app/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
});
