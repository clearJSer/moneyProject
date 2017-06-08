//引入gulp包
var gulp = require('gulp')
//引入gulp-webserver包
var webserver = require('gulp-webserver')
var proxy = require('http-proxy-middleware')

// 引入 gulp-webpack包
var webpack = require('gulp-webpack')

// 引入文件名提取包
var named = require('vinyl-named')

// 引入gulp-sass包
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
				livereload: true,
		        middleware: [
		          // 反向代理
		          proxy('/mock', {
		            target: 'http://localhost:3000/',
		            changeOrigin: true,
		            pathRewrite: {
		              '^/mock': ''
		            }
		          }),
		          proxy('/api', {
		            target: 'https://m.lagou.com/',
		            changeOrigin: true,
		            pathRewrite: {
		              '^/api': ''
		            }
		          })
		        ]
			})
		)
})

//打包js
gulp.task('packjs',function(){
	gulp.src(['./src/script/app-login.js','./src/script/app.js','./src/script/app-invest.js'])
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


//打包css
gulp.task('packcss',function(){
	gulp.src(['./src/style/usage/app-invest.scss','./src/style/usage/app-login.scss','./src/style/usage/app.scss','./src/style/lib/*.css'])
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./build/style'))
})
// copy images
gulp.task('copyimage', function () {
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./build/images'))
})
// copy libs
gulp.task('copylibs', function () {
  gulp.src('./src/script/libs/*.*')
    .pipe(gulp.dest('./build/libs'))
})

