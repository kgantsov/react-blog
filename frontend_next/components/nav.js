import React from 'react';
import Link from 'next/link';
import classSet from 'classnames';

export default (props) => {
  const indexClassName = classSet({
    active: props.current === '/index',
  });
  const aboutClassName = classSet({
    active: props.current === '/about',
  });
  const postsClassName = classSet({
    active: props.current === '/posts',
  });
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link href="/index"><a className="navbar-brand">Project name</a></Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={indexClassName}><Link href="/index"><a>Home</a></Link></li>
            <li className={aboutClassName}><Link href="/about"><a>About</a></Link></li>
            <li className={postsClassName}><Link href="/posts"><a>Posts</a></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
