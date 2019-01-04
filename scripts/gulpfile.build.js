const gulp = require('gulp');
const browserify = require('gulp-browserify'); //模块化的打包
const uglify = require('gulp-uglify'); //js的压缩
const babel = require('gulp-babel');
const rename = require("gulp-rename");

//js模块化打包
gulp.task("build", () => {
        return  gulp.src("./src/index.js")
                .pipe(browserify())
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename("heigo.js"))
                .pipe(gulp.dest("./dist"))
                .pipe(uglify())
                .pipe(rename("heigo.min.js"))
                .pipe(gulp.dest("./dist"))

    })
