const express = require('express'); // backend server
const envVar = require('dotenv').config(); // environment variables
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Normally, you would incorporate something like below to provide a 
 * default port (i.e. 5500) or automatically switch to the 
 * environment value if one is provided. However, this port number is
 * hardcoded in the "proxy" config in `src\client\package.json`, too.
 * 
 * So, it would need to be changed in both places.
 * process.env.PORT || 5500
 */
const port = 5500;

const initializeDatabases = require('./db');
const routes = require('./routes');

initializeDatabases().then(dbs => {
	// Initialize the application once database connections are ready.

	routes(app, dbs)
        .listen(port, () => console.log(`Listening on port ${port}`) )
});