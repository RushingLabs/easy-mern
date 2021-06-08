module.exports = function(app, dbs) {

	app.get('/api/getData', (req, res) => {
		dbs.siteData.collection('sample-store').find({})
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