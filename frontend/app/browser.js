import React from 'react';
import Router from 'react-router';

import routes from './routes';
import fetchData from './utils/fetchData';

let renderState = {
  element: document,
  Handler: null,
  routerState: null
};


let render = () => {
  let { element, Handler, routerState } = renderState;
  fetchData(routerState).then((data) => {
    React.render(<Handler data={data} path={window.location.pathname} />, element);
  });
};

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  renderState.Handler = Handler;
  renderState.routerState = state;
  render();
});
