var gulp=require('gulp');

var server=require('gulp-server-livereload');
var jade=require('gulp-jade');
var stylus=require('gulp-stylus');
var coffee=require('gulp-coffee');
var gutil=require('gulp-util');
var gulpconcat=require('gulp-concat');
var gulpcssmin=require('gulp-minify-css');

//compile
gulp.task('jade-compile',function(){
	gulp.src('source/templates/*.jade')
		.pipe(jade({}))
		.pipe(gulp.dest('dist/w3'))
});

gulp.task('stylus-compile',function(){
	gulp.src('source/styl/*.styl')
		.pipe(stylus({
			compress:true
		}))
		.pipe(gulp.dest('source/tmp'));
});

gulp.task('coffee-compile',function(){
	gulp.src('source/coffee/*.coffee')
		.pipe(coffee({bare:true}).on('error',gutil.log))
		.pipe(gulp.dest('dist/js/'))
});
//concat
gulp.task('css-concat',function(){
	gulp.src(['source/vendor/css/*.css','source/tmp/main.css'])
		.pipe(gulpconcat('main.min.css'))
		.pipe(gulp.dest('source/tmp/'))
});
//minify
gulp.task('css-min',function(){
	gulp.src('source/tmp/main.min.css')
		.pipe(gulpcssmin({debug:true}))
		.pipe(gulp.dest('dist/css/'))
})
//watcher
gulp.task('watcher',function(){
	console.log('Watcher is running');
	gulp.watch('source/templates/*.jade',['jade-compile']);
	gulp.watch('source/styl/*.styl',['stylus-compile','css-concat','css-min']);
	gulp.watch('source/coffee/*.coffee',['coffee-compile']);
});
//webserver
gulp.task('webserver',function(){
	gulp.src('dist')
		.pipe(server({
			livereload:true,
			directoryListening:true,
			open:true,
			port:3000
		}));
});

gulp.task('default',['webserver','watcher']);