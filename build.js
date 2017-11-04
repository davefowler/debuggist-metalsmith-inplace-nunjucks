var Metalsmith  = require('metalsmith');
var layouts     = require('metalsmith-layouts');
var inplace     = require('metalsmith-in-place');
var collections = require('metalsmith-collections');
var nunjucks    = require('nunjucks');


// Note: Need to add configuration to nunjucks that metalsmith cannot
nunjucks
    .configure( 'layouts', {watch: false, noCache: true}); 

metalsmith = Metalsmith(__dirname)
	.use(collections({
		    posts: {
			pattern: 'posts/**/*.html',
			sortBy: 'date',
			reverse: true
		    }}))
	.use(inplace({
		    engine: 'nunjucks',
		    pattern: '**/*.html'
		}))
	.use(layouts({
		    engine: 'nunjucks',
		    pattern: '**/*.html',
		    directory: 'layouts'
		}))
    .build(function (err) {
	    if (err) {
		console.log(err);
	    } else {
		console.log('ThingsILearned built!')
	    }
	})
