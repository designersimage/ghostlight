// Load Gulp
import pkg from 'gulp';
const { src, dest, task, watch, series, parallel } = pkg;

// CSS related plugins
import dartSass              from 'sass';
import gulpSass              from 'gulp-sass';
const sass = gulpSass(dartSass)
import autoprefixer          from 'gulp-autoprefixer';

// JS related plugins
import uglify                from 'gulp-uglify';
import babelify              from 'babelify';
import browserify            from 'browserify';
import source                from 'vinyl-source-stream';
import buffer                from 'vinyl-buffer';
import stripDebug            from 'gulp-strip-debug';

// Utility plugins
import rename                from 'gulp-rename';
import sourcemaps            from 'gulp-sourcemaps';
import notify                from 'gulp-notify';
import plumber               from 'gulp-plumber';
import options               from 'gulp-options';
import gulpif                from 'gulp-if';

// Browers related plugins
import browserSync           from 'browser-sync';
browserSync.create();

// Project related variables
const projectURL                = 'http://ghostlight.designersimage.local/';

const styleMainSRC    = './src/scss/main.scss';
const styleMainURL    = './assets/';
const mapMainURL      = './';

const jsMainSRC               = './src/js/';
const jsMain                  = 'main.js';
const jsMainFiles             = [ jsMain ];
const jsMainURL               = './assets/';

// const imgSRC       = './src/images/**/*';
// const imgURL       = './dist/images/';

// const fontsSRC     = './src/fonts/**/*';
// const fontsURL     = './dist/fonts/';

const styleMainWatch   = './src/**/**/*.scss';
const jsMainWatch      = './src/**/**/*.js';

// const imgWatch     = './src/images/**/*.*';
// const fontsWatch   = './src/fonts/**/*.*';

const htmlWatch    = './**/*.html';

// Tasks
function browser_sync() {
	browserSync.init({
		proxy: projectURL,
	});
}

function reload(done) {
	browserSync.reload();
	done();
}

function css(done) {
	/* Main CSS Style */
    src( [ styleMainSRC ] )
		.pipe( sourcemaps.init() )
		.pipe( sass({
			errLogToConsole: true,
			outputStyle: 'compressed'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( autoprefixer({ overrideBrowserslist: [ 'last 2 versions', '> 5%', 'Firefox ESR' ] }) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write( mapMainURL ) )
		.pipe( dest( styleMainURL ) )
		.pipe( browserSync.stream() );
	
    done();
};

function js(done) {
	jsMainFiles.map( function( entry ) {
		return browserify({
			entries: [jsMainSRC + entry]
		})
		.transform( babelify, { presets: [ '@babel/preset-env' ] } )
		.bundle()
		.pipe( source( entry ) )
		.pipe( rename( {
			extname: '.min.js'
        } ) )
		.pipe( buffer() )
		.pipe( gulpif( options.has( 'production' ), stripDebug() ) )
		.pipe( sourcemaps.init({ loadMaps: true }) )
		.pipe( uglify() )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( dest( jsMainURL ) )
		.pipe( browserSync.stream() );
	});

	done();
};

function triggerPlumber( src_file, dest_file ) {
	return src( src_file )
		.pipe( plumber() )
		.pipe( dest( dest_file ) );
}

// function images() {
// 	return triggerPlumber( imgSRC, imgURL );
// };

// function fonts() {
// 	return triggerPlumber( fontsSRC, fontsURL );
// };

function watch_files() {
	watch(styleMainWatch, series(css, reload));
	watch(jsMainWatch, series(js, reload));
	// watch(imgWatch, series(images, reload));
	// watch(fontsWatch, series(fonts, reload));
	watch(htmlWatch, reload);
	src(jsMainURL + 'main.min.js');
}

function watch_html() {
    watch(htmlWatch, reload);
}

task("css", css);
task("js", js);
// task("images", images);
// task("fonts", fonts);
task("live", parallel(browser_sync, watch_html));
task("default", parallel(css, js/*, images, fonts*/));
task("watch", parallel(browser_sync, watch_files));