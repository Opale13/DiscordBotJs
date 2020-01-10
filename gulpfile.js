const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('toJS', function () {
    del.sync(["./build/**/*.*"]);

    gulp.src("./src/**/*.yml").pipe(gulp.dest("build/"));

    return gulp.src("./src/**/*.ts")
        .pipe(tsProject())
        .pipe(gulp.dest("build"));
});

gulp.task('default', gulp.series('toJS'));