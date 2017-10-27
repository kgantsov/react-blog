import React from 'react';
import {Link} from 'react-router';

import api from '../utils/api';

class Posts extends React.Component {
  static fetchData(params, query) {
    let page = query.page || 1;
    let res = api.get(`/post/?per_page=3&page=${page}`);
    return res;
  }

  render() {
    let posts = '';
    let pagination = '';

    if (this.props.data !== undefined) {
      posts = this.props.data.posts.posts.map((post, index) => {
        return (
          <div className="bs-docs-section" key={post.id}>
            <h2 id="grid" className="page-header">
              <Link to="post" params={{id: post.id}}>
                {post.title}
              </Link>
            </h2>
            <p key={post.id} className="lead" dangerouslySetInnerHTML={{__html: post.description}}>
            </p>
          </div>
        );
      });


      let meta = this.props.data.posts.meta;
      let prevPage = parseInt(meta.page) - 1;
      let nextPage = parseInt(meta.page) + 1;

      if (parseInt(meta.page) <= 1) {
        prevPage = 1;
      }
      if (nextPage > parseInt(meta.total_pages)) {
        nextPage = parseInt(meta.total_pages);
      }

      let pages = Array.apply(null, Array(meta.total_pages)).map(function(v, i) {return i + 1;});

      pagination = (
        <nav>
          <ul className="pagination">
            <li>
              <Link to="posts" query={{page: prevPage}} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            {pages.map((page) => {
              let pageClassName = page == meta.page ? 'active' : '';
              return (
                <li className={pageClassName} key={page}>
                  <Link to="posts" query={{page: page}}>
                    {page}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="posts" query={{page: nextPage}} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      );
    }

    return (
      <div>
        <h1>All posts</h1>
        <article className="main-content">
          {posts}
          {pagination}
        </article>
      </div>
    );
  }
}

export default Posts;
