import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App from './components/App';
import Top from './components/Top';
import About from './components/About';
import Posts from './components/Posts';
import Post from './components/Post';


export default (
    <Route name="top" handler={App} path="/">
      <Route name="about" handler={About} />
      <Route name="posts" handler={Posts} />
      <Route name="post" path="post/:id" handler={Post} />
      <DefaultRoute handler={Top} />
    </Route>
)
