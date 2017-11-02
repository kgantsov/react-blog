import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const About = props => (
  <div>
    <Head>
      <title>This is about page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav current={props.url.pathname} />
    <p>Hello world!</p>
  </div>
);

About.propTypes = {
  url: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
