import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Copyright (c) 2015 Konstantin Gantsov</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
