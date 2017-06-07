//引入gulp包
var gulp = require('gulp')
<<<<<<< HEAD
//引入 gulp-webserver 包
var webserver = require('gulp-webserver')
//引入gulp-webpack包
var webpack = require('gulp-webpack')
//引入文件名提取包
var named = require('vinyl-named')
// 引入 gulp-sass 包
=======
//引入gulp-webserver包
var webserver = require('gulp-webserver')

// 引入 gulp-webpack包
var webpack = require('gulp-webpack')

// 引入文件名提取包
var named = require('vinyl-named')

// 引入gulp-sass包
>>>>>>> master
var sass = require('gulp-sass')

//定义默认任务
gulp.task('default',['copyhtml','webserver','watch','copyimage'],function(){
	
})
//检测文件变化
gulp.task('watch',function(){
	gulp.watch('./src/*.html',['copyhtml'])
	gulp.watch('./src/script/**/*.js', ['packjs'])
	gulp.watch('./src/style/**/*.scss',['packcss'])
	gulp.watch('./src/script/**/*.string', ['packjs'])
  gulp.watch('./src/images/**/*', ['copyimage'])
  gulp.watch('./src/libs/**/*', ['copylibs'])
})


//把src的HTML文件拷贝到build
gulp.task('copyhtml',function(){
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./build/'))
})
<<<<<<< HEAD
=======

>>>>>>> master
//启动一个webserver服务
gulp.task('webserver',function(){
	gulp.src('./build/')
		.pipe(
			webserver({
<<<<<<< HEAD
				host:'10.9.166.9',
				port:8000,
				directoryListing:{
					enable:true,
=======
				host:'localhost',
				port:8000,
				directoryListing:{//
					enable:true,//是否生效
>>>>>>> master
					path:'./build'
				},
				livereload: true
			})
		)
})
<<<<<<< HEAD
//打包js
gulp.task('packjs',function(){
	gulp.src(['./src/script/app-login.js'])
=======

//打包js
gulp.task('packjs',function(){
	gulp.src(['./src/script/app-login.js','./src/script/app.js'])
>>>>>>> master
		.pipe(named())
		.pipe(webpack({
			output:{
				filename:'[name].js'
			},
			module:{
				loaders:[
					{
						test:/\.js$/,
						loader:'imports-loader',
						exclude:'./node_moudules'
					},
					{
			            test: /\.string$/,
			            loader: 'string-loader'
			        }
				]
			}
		}))
		.pipe(gulp.dest('./build/script'))
})
<<<<<<< HEAD
=======

>>>>>>> master
//打包css
gulp.task('packcss',function(){
	gulp.src(['./src/style/useage/app-login.scss','./src/style/usage/app.scss'])
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./build/style'))
})
// copy images
gulp.task('copyimage', function () {
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./build/images'))
<<<<<<< HEAD
})
=======
})


>>>>>>> master
