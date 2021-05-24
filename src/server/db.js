const MongoClient = require('mongodb').MongoClient;
//const dbName = process.env.DB_NAME;

const _conn_str = 'mongodb://localhost:27017/website';
//const _conn_str = process.env.DB_HOST;

// Used to connect to the main database. We could also connect to other third-party APIs in a similar manner.
// Note: Explaining `{useUnifiedTopology: true}` option, see: https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated
function connect(url) {
	return MongoClient.connect(_conn_str, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => client.db());
};

module.exports = async function() {
	// To connect to more databases in the future, add another call to connect() to this array
	let databases = await Promise.all([ connect(_conn_str) ]);
	return { siteData: databases[0] };
}