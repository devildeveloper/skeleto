var gulp=require('gulp');

var server=require('gulp-server-livereload');
var jade=require('gulp-jade');
var stylus=require('gulp-stylus');

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
		.pipe(gulp.dest('dist/css'));
});

gulp.task('watcher',function(){
	console.log('Watcher is running');
	gulp.watch('source/templates/*.jade',['jade-compile']);
	gulp.watch('source/styl/*.styl',['stylus-compile']);
});

gulp.task('webserver',function(){
	gulp.src('dist/w3')
		.pipe(server({
			livereload:true,
			directoryListening:true,
			open:true,
			port:3000
		}));
});

gulp.task('default',['webserver','watcher']);