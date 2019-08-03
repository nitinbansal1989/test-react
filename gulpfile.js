var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ts = require("gulp-typescript");
var rt = require('gulp-react-templates');
var rename = require("gulp-rename");

// Copy vendor libraries from /node_modules into /libs
gulp.task('copy', function () {
	return gulp.src(['node_modules/react/umd/react.development.js',
		'node_modules/react-dom/umd/react-dom.development.js',
		'node_modules/lodash/lodash.min.js'])
		.pipe(gulp.dest('public/libs'));

});

gulp.task('rt', function () {
	return gulp.src('src/**/*.html')
		.pipe(rt({ modules: 'es6', defines: {} }))
		.pipe(rename(function (path) {
			path.basename = path.basename.replace('.html', '');
		}))
		.pipe(gulp.dest('public'));
});

gulp.task('appTsc', function () {
	var tsProject = ts.createProject("src/app/tsconfig.json");
	tsProject.src()
		.pipe(tsProject())
		.js.pipe(gulp.dest("public/app/"));
});

// gulp.task('rt', function () {
// 	gulp.src('public/**/*.rt')
// 		.pipe(rt({
// 			modules: 'es6'
// 		}))
// 		.pipe(gulp.dest('public'));
// });

// Configure the browserSync task
gulp.task('browserSync', function () {

	exec('node ./index.js', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});

	browserSync.init({
		proxy: "http://localhost:2000",
		browser: "google chrome",
		port: 2001,
		files: [
			'public/**/*'
		]
	});
});
