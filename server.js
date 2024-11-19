// import htpp from 'http';

import "dotenv/config";
import app from './src/app.js';

const port = process.env.PORT || 3000;

// // Define the routes
// const routes = {
//   "/": "Homepage",
// };

// // Create a new HTTP server.
// const server = htpp.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(routes[req.url]);
// })

// Start the server on port 3000 and log a message when it's ready.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
