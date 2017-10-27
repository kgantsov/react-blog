import React          from 'react';
import {RouteHandler} from 'react-router';
import Nav            from './Nav';
import Footer         from './Footer';

class App extends React.Component {
  render() {
    const title = `Artist Top Tracks`;
    return (
      <html>
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta charSet="utf8" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Nav />
        <div id="app" className="container">
          <RouteHandler {...this.props} />
        </div>
        <Footer />
      </body>
      <script src="/bundle.js?v=20150130"></script>
      </html>
    );
  }
}

export default App;
