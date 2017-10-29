const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const pathMatch = require('path-match');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const route = pathMatch();
const postRoute = route('/post/:id');

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true);
    const params = postRoute(pathname);
    if (params !== false) {
      app.render(req, res, '/post', Object.assign(params, query));
    } else {
      handle(req, res);
    }
    // // assigning `query` into the params means that we still
    // // get the query string passed to our application
    // // i.e. /blog/foo?show-comments=true
    // app.render(req, res, '/index', Object.assign(params, query))
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
