import express from 'express';
import React from 'react';
import Router from 'react-router';

import routes from './routes';
import fetchData from './utils/fetchData';

const app = express();


app.use(express.static(__dirname + '/../dist'));
app.get('/favicon.ico', (req, res) => { res.send('') });

app.use((req, res) => {
  Router.run(routes, req.url, (Handler, state) => {
    fetchData(state).then((data) => {
      res.send(React.renderToString(<Handler {...state} data={data} />));
    });
  });
});

const port = process.env.PORT || 5000;
console.log("listening..." + port);
app.listen(port);
