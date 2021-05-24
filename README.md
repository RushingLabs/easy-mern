# easy-mern

The idea for this project is to be able to start front-end, back-end, and database all from a single script.

## Getting Started

- Install MongoDB
  - Keep track of your `install dir` and `data dir`
  - Adjust `package.json` according to your `install dir` and `data dir`
- Run `npm install`
- Run `npm run dev`

## Front-end

CRA (create-react-app) is used as a starting point for getting React stood up.

## Back-end

Express is used in the server script, located at: `src/server/server.js`

## Database

MongoDB is expected to be installed on the host machine, at `localhost`. Connection to the database is made in
`src/server/db.js`.