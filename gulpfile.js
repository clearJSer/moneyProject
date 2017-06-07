//引入gulp包
var gulp = require('gulp')

//引入gulp-webserver包
var webserver = require('gulp-webserver')

// 引入 gulp-webpack包
var webpack = require('gulp-webpack')

// 引入文件名提取包
var named = require('vinyl-named')

// 引入gulp-sass包
var sass = require('gulp-sass')


//拷贝src下的html到build下
gulp.task('copy-html',function(){
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./build/'))
})

//启动一个webserver服务
gulp.task('webserver',function(){
	gulp.src('./build/')
		.pipe(
			webserver({
				host:'localhost',
				port:8000,
				directoryListing:{//
					enable:true,//是否生效
					path:'./build'
				},
				livereload: true
			})
		)
})

//打包js
gulp.task('packjs',function(){
	gulp.src('./src/script/app.js')
		.pipe(named())
		.pipe(webpack({
			output:{
				filename: '[name].js'
			},
			module: {
				loaders: [
					{
						test: /\.js$/,
						loader: 'imports-loader',
						exclude: './node_modules'
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

// 打包 scss
gulp.task('packcss',function(){
	gulp.src('./src/style/usage/app.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./build/style'))
})

// copyimages
gulp.task('copyimage', function () {
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./build/images'))
})

//监测文件变化
gulp.task('watch',function(){
	gulp.watch('./src/*.html',['copy-html'])
	gulp.watch('./src/script/*.js',['packjs'])
	gulp.watch('./src/script/**/*.string', ['packjs'])
	gulp.watch('./src/style/usage/**/*.scss',['packcss'])
	gulp.watch('./src/images/**/*', ['copyimage'])
})

//定义默认任务
gulp.task('default',['copy-html','watch','webserver'],function(){
	console.log('done')
})
