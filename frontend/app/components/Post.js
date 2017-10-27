import React from 'react';
import {Link} from 'react-router';

import api from '../utils/api';

class Post extends React.Component {
  static fetchData(params, query) {
    let res = api.get(`/post/${params.id}/`);
    return res;
  }

  render() {
    let post = '';

    if (this.props.data !== undefined) {
      post = (
        <div className="bs-docs-section">
          <h2 id="grid" className="page-header">
              {this.props.data.post.post.title}
          </h2>

          <p className="lead">
            {this.props.data.post.post.description}
          </p>
        </div>
      );
    }

    return (
      <div>
        <h1>All posts</h1>
        <article className="main-content">
          {post}
        </article>
      </div>
    );
  }
}

export default Post;
