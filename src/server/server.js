const express = require('express'); // backend server
const envVar = require('dotenv').config(); // environment variables
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5500;
const initializeDatabases = require('./db');
const routes = require('./routes');

initializeDatabases().then(dbs => {
	// Initialize the application once database connections are ready.

	routes(app, dbs)
        .listen(port, () => console.log(`Listening on port ${port}`) )
});