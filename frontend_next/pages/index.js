import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Index = props => (
  <div>
    <Head>
      <title>This is index page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav current={props.url.pathname} />
    <p>Welcome to next.js!</p>
  </div>
);

Index.propTypes = {
  url: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Index;
