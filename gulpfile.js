const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function () {
    del.sync(["./build/**/*.*"]);

    gulp.src("./src/**/*.yml").pipe(gulp.dest("build/"));

    return gulp.src("./src/**/*.ts")
        .pipe(tsProject())
        .pipe(gulp.dest("build"));
});