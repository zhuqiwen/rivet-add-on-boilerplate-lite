const { src, dest, watch } = require("gulp");
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

  watch("src/sass/**/*.scss", { ignoreInitial: false }, compileSass);
  watch("src/js/**/*.js", { ignoreInitial: false }, compileJS);
  watch("src/index.html", { ignoreInitial: false }, compileHTML);
  
  callback();
}

/**
 * Compiles Sass files to /docs/css for use by the local development server.
 */

function compileSass() {
  return src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(dest("docs/css/"))
    .pipe(browserSync.stream());
}

/**
 * Compiles JavaScript files to /docs/js for use by the local 
 * development server.
 */

function compileJS() {
  return src("src/js/**/*.js")
    .pipe(dest("docs/js/"))
    .pipe(browserSync.stream());
}

/**
 * Compiles documentation HTML files to /docs for use by the local 
 * development server.
 */

function compileHTML() {
  return src("src/index.html")
    .pipe(dest("docs/"))
    .pipe(browserSync.stream());
}

/**
 * Builds the distributable add-on CSS and JavaScript to /dist. This process
 * does not include any HTML or CSS used to render the add-on's documentation;
 * it only builds out the source files necessary for someone to use the add-on
 * in their own application.
 *
 * Running `gulp build` builds the CSS and JavaScript.
 */

function build(callback) {
  buildSass();
  buildJs();
  callback();
}

/**
 * Builds Sass files to /dist/css for distribution.
 */

function buildSass() {
  src(["src/sass/**/*.scss", "!src/sass/code-snippet-styling.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(dest("dist/css/"));
}

/**
 * Builds JavaScript files to /dist/js for distribution.
 */

function buildJs() {
  src("src/js/**/*.js")
    .pipe(dest("dist/js/"));
}

exports.default = startDevServer;
exports.build = build;
