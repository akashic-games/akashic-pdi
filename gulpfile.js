var gulp = require("gulp");
var del = require("del");
var tslint = require("gulp-tslint");
var shell = require("gulp-shell");
var typedoc = require("gulp-typedoc");
var path = require("path");
var pkg = require("./package.json");

gulp.task("clean", function(cb) {
	del(["lib"], cb);
});

gulp.task("tsc", shell.task("tsc", {cwd: path.join(__dirname, "src")}));

gulp.task("compile", ["tsc"]);

gulp.task("typedoc", function () {
	var srcFiles = [
		"./src/Looper.ts",
		"./src/Platform.ts"
	];
	return gulp.src(srcFiles)
		.pipe(typedoc({
			module: "commonjs",
			target: "es5",
			out: "doc/",
			name: "akashic-pdi",
			includeDeclarations: false
		}));
});

gulp.task("test", shell.task("tsc", {cwd: path.join(__dirname, "test")}));

gulp.task("textlint", shell.task("textlint -f pretty-error ./README.md", {cwd: __dirname}));

gulp.task("default", ["compile"]);
