const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const browserify = require('browserify');
const source  = require('vinyl-source-stream');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('toJS', function () {
    del.sync(["./build/**/*.*"]);

    gulp.src("./src/**/*.yml").pipe(gulp.dest("./build"));

    return gulp.src("./src/**/*.ts")
        .pipe(tsProject())
        .pipe(gulp.dest("./build"));
});

gulp.task('bundle', async function() {
    del.sync(["./lib/**/*.*"]);

    gulp.src("./src/**/*.yml").pipe(gulp.dest("./lib"));

    browserify({
        entries: './build/main.js',
        debug: true
    })
    .bundle()
    .pipe(source('bundel.js'))
    .pipe(gulp.dest("./lib"));
        
});

gulp.task('default', gulp.series('toJS', 'bundle'));