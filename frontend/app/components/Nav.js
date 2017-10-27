import React from 'react';
import {Link} from 'react-router';
import classSet from 'classnames';

class Nav extends React.Component {
  static get propTypes() {
    return {
      current: React.PropTypes.string
    }
  }
  render() {
    const aboutClassName = classSet({
      active: this.props.current === "about"
    });
    const postsClassName = classSet({
      active: this.props.current === "posts"
    });
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="top">Project name</Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className={aboutClassName}><Link to="posts">Posts</Link></li>
              <li className={postsClassName}><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
