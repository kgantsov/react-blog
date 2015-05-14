import all from 'when/keys';

export default (routerState) => {
  let {params, query} = routerState;

  return all.all(routerState.routes.filter((route) => {
    return route.handler.fetchData;
  }).reduce((promises, route) => {
    promises[route.name] = route.handler.fetchData(params, query);
    return promises;
  }, {}));
};
