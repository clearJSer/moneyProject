//引入gulp包
var gulp = require('gulp')
//引入gulp-webserver包
var webserver = require('gulp-webserver')
var proxy = require('http-proxy-middleware')

// 引入 gulp-webpack包
var webpack = require('gulp-webpack')

// 引入文件名提取包
var named = require('vinyl-named')

// 版本号控制相关 包
var rev = require('gulp-rev')
var revCollector = require('gulp-rev-collector')
var del = require('del')
var gulpSequence = require('gulp-sequence')
var minimist = require('minimist')
var gulpif = require('gulp-if')
var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production'}
}
var options = minimist(process.argv.slice(2), knownOptions)
// gulp load 包
var $ = require('gulp-load-plugins')()

// 引入gulp-sass包
var sass = require('gulp-sass')

//定义默认任务
gulp.task('default',['pack','webserver','watch'],function(){
	
})
//检测文件变化
gulp.task('watch', function() {
	gulp.watch('./src/*.html', ['copyhtml'])
	gulp.watch('./src/script/**/*.js', ['packjs'])
	gulp.watch('./src/style/**/*.scss', ['packcss'])
	gulp.watch('./src/script/**/*.string', ['packjs'])
	gulp.watch('./src/images/**/*', ['copyimage'])
	gulp.watch('./src/libs/**/*', ['copylibs'])
})
//删除build下的文件
gulp.task('clean',del.bind(null,['./build/**/*'],{
	force:true
}))

//总打包  串行并行任务 [a,b,c]并行   外面串行  返回结果
gulp.task('pack',function(callback){
  if(options.env === 'production') {
    gulpSequence('clean', ['packjs', 'packcss', 'copyhtml', 'copylibs', 'copyimage'], 'packhtml')(callback)
  } else {
    gulpSequence(['packjs', 'packcss', 'copyhtml', 'copylibs', 'copyimage'])(callback)
  }
})

//把src的HTML文件拷贝到build
gulp.task('copyhtml', function() {
	return	gulp.src('./src/*.html')
	.pipe(gulpif(options.env === 'production', gulp.dest('./build/')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/')))
})
//HTML增加版本号
gulp.task('packhtml', function () {
  return gulp.src(['./build/rev/**/*.json', './build/*.html'])
    .pipe(revCollector())
    .pipe($.minifyHtml())
    .pipe(gulp.dest('./build'))
})
//启动一个webserver服务
gulp.task('webserver', function() {
	gulp.src('./build/')
		.pipe(
			webserver({
				host: 'localhost',
				port: 8000,
				directoryListing: { //
					enable: true, //是否生效
					path: './build'
				},
				livereload: true,
		        middleware: [
		          // 反向代理
		          proxy('/mock', {
		            target:'http://localhost:3000/',
		            changeOrigin: true,
		            pathRewrite: {
		              '^/mock': ''
		            }
		          }),
		          proxy('/api', {
		            target: 'http://www.dfhfax.com/',
		            changeOrigin: true,
		            pathRewrite: {
		              '^/api': ''
		            }
		          }),
		          proxy('/cloud', {
		            target: 'http://redlemon.applinzi.com/',
		            changeOrigin: true,
		            pathRewrite: {
		              '^/cloud': ''
		            }
		          })
		        ]
			})
		)
})

//打包js
gulp.task('packjs',function(){
	return gulp.src([
			'./src/script/app-login.js',
			'./src/script/app.js',
			'./src/script/app-invest.js',
			'./src/script/app-more.js',
			'./src/script/app-register.js',
			'./src/script/app-account.js'
		])
		.pipe(named())
		.pipe(webpack({
			output: {
				filename: '[name].js'
			},
			module: {
				loaders: [{
						test: /\.js$/,
						loader: 'imports-loader',
						exclude: './node_moudules'
					},
					{
						test: /\.string$/,
						loader: 'string-loader'
					}
				]
			}
		}))
		.pipe(gulpif(options.env === 'production', $.uglify()))
	    .pipe(gulpif(options.env === 'production', rev()))
	    .pipe(gulpif(options.env === 'production', gulp.dest('./build/script')))
	    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/script')))
	    .pipe(gulpif(options.env === 'production', rev.manifest()))
	    .pipe(gulpif(options.env === 'production', gulp.dest('./build/rev/script')))
})

//打包css
gulp.task('packcss', function() {
return	gulp.src([
			'./src/style/usage/app-login.scss',
			'./src/style/usage/app-more.scss',
			'./src/style/usage/app-account.scss',
			'./src/style/usage/app-register.scss',
			'./src/style/usage/app.scss',
			'./src/style/lib/*.css',
			'./src/style/usage/app-invest.scss'
		])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulpif(options.env === 'production', $.minifyCss()))
	    .pipe(gulpif(options.env === 'production', rev()))
	    .pipe(gulpif(options.env === 'production', gulp.dest('./build/style')))
	    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/style')))
	    .pipe(gulpif(options.env === 'production', rev.manifest()))
	    .pipe(gulpif(options.env === 'production', gulp.dest('./build/rev/style')))
})
// copy images
gulp.task('copyimage', function() {
	gulp.src('./src/images/**/*')
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/images')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/images')))
})
// copy libs
gulp.task('copylibs', function() {
	gulp.src('./src/script/libs/*.*')
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/libs')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/libs')))
})
