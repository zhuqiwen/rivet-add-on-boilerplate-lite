const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

/**
 * Starts the local development server, using /docs as the base directory.
 *
 * Running `npm run start` starts the local development server.
 */

function startDevServer(callback) {
  browserSync.init(["docs/css/**/*.css", "docs/js/**/*.js", "docs/**/*.html"], {
    server: {
      baseDir: "./docs"
    }
  });

  gulp.watch("src/sass/**/*.scss", { ignoreInitial: false }, compileSass);
  gulp.watch("src/js/**/*.js", { ignoreInitial: false }, compileJS);
  gulp.watch("src/index.html", { ignoreInitial: false }, compileHTML);
  
  callback();
}

/**
 * Compiles Sass files to /docs/css for use by the local development server.
 */

function compileSass() {
  return gulp.src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("docs/css/"))
    .pipe(browserSync.stream());
}

/**
 * Compiles JavaScript files to /docs/js for use by the local 
 * development server.
 */

function compileJS() {
  return gulp.src("src/js/**/*.js")
    .pipe(gulp.dest("docs/js/"))
    .pipe(browserSync.stream());
}

/**
 * Compiles documentation HTML files to /docs for use by the local 
 * development server.
 */

function compileHTML() {
  return gulp.src("src/index.html")
    .pipe(gulp.dest("docs/"))
    .pipe(browserSync.stream());
}

// Build add-on source to dist
function build(callback) {
  buildSass();
  buildJs();
  callback();
}

function buildSass() {
  gulp.src(["src/sass/**/*.scss", "!src/sass/code-snippet-styling.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css/"));
}

function buildJs() {
  gulp.src("src/js/**/*.js")
    .pipe(gulp.dest("dist/js/"));
}

exports.default = startDevServer;
exports.build = build;
