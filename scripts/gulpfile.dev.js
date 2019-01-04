const url = require("url")
var gulp = require('gulp');
var webserver = require('gulp-webserver'); //web服务热启动
var browserify = require('gulp-browserify'); //模块化的打包
var sequence = require('gulp-sequence'); //gulp启动任务的命令
var chokidar = require('chokidar'); //文件监听

const babel = require('gulp-babel');
const rename = require("gulp-rename");
let { exec } = require("child_process")
    //js模块化打包
gulp.task("jsModule", () => {
       
    gulp.src("./src/index.js")
    .pipe(browserify())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(rename("heigo.js"))
    .pipe(gulp.dest("./dist"))
       
})

// })
    //html拷贝
gulp.task("htmlCopyServer", () => {
        gulp.src("./examples/index.html")
            .pipe(gulp.dest("./dist"))
            .on('end', () => {
                // 只有监听到html复制完毕，才会启动服务
                sequence(['server'], () => {
                    console.log("服务启动")
                })
            });
    })

    //启动热服务
gulp.task('server', function() {
    gulp.src("./dist")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: "index.html",
            host: "localhost",
            port: "8888"
           
        }));
});

    //html拷贝
    gulp.task("htmlCopy", () => {
        gulp.src("./examples/index.html")
            .pipe(gulp.dest("./dist"))
    })
gulp.task("taskListen", () => {
    //html文件的监听
    chokidar.watch("./examples/index.html").on("all", () => {
            sequence(['htmlCopy'], () => {
                console.log("html更新成功")
            })
        })

        //js文件的监听
    chokidar.watch("./src").on("all", () => {
            sequence(['jsModule'], () => {
                console.log("js更新成功")
            })

        })
       
})


gulp.task("taskListenNode", () => {
 
       //nodeJs文件的监听
    chokidar.watch("./examples/index.js").on("all", () => {
        // exec("node examples/index.js", (err, stdout, stderr) => {
        exec("babel-node examples/index.js", (err, stdout, stderr) => {
            if(err){
                console.log(err)
                return 
            }
            console.log(stdout)
            console.log('运行js结束');
        })
    
    })
    chokidar.watch("./src").on("all", () => {
        exec("babel-node examples/index.js", (err, stdout, stderr) => {
            if(err){
                console.log(err)
                return 
            }
            console.log(stdout)
            console.log('运行js结束');
        })

    })
})

//浏览器端测试
gulp.task("dev:browser", () => {

        sequence(['jsModule'], () => {
            sequence(["htmlCopyServer"], () => {})
        })
    

    sequence(['taskListen'], (data) => {
       
        console.log("监听成功")
    })

})

//node环境测试

gulp.task("dev:node", () => {

    exec("babel-node examples/index.js", (err, stdout, stderr) => {
        if(err){
            console.log(err)
            return 
        }
        console.log(stdout)
        console.log('运行js结束');
    })


    sequence(['taskListenNode'], () => {
        console.log("监听成功")
    })

})


process.on('SIGINT', function() {
        
    exec("rd/s/q dist", () => {
        console.log('删除完毕');
        process.exit()
    })

});
process.on('uncaughtException', function (err) {
    　　console.log('Caught exception: ' + err);
    });