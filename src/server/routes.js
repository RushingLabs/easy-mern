/**
 * NOTES: Copy/paste from 'thekove-cra' project, but removed the sitemap
 * and the code for re-routing to production domain.
 */

module.exports = function(app, dbs, express, path, fs) {

	app.get('/api/getAllPosts', (req, res) => {
		dbs.siteData.collection('blog_posts').find({})
			.toArray( (err, docs) => {
				if (err) {
					console.log(err);
					res.error(err);
				} else {
					res.json(docs);
				}
			});
	});

	return app;
};