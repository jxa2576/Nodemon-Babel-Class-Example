console.dir('html');

const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/DONT_EDIT_bundle.js`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getBundle = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/javascript' });
  response.write(bundle);
  response.end(); 
}

module.exports = {
  getIndex,
  getBundle,
};
