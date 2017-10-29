import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import Nav from '../components/nav';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    let { page } = query;
    let perPage = query.per_page;

    perPage = perPage || 3;
    page = page || 1;

    const res = await fetch(`http://0.0.0.0:8000/api/v1/post/?per_page=${perPage}&page=${page}`);
    const json = await res.json();
    return { meta: json.meta, posts: json.posts };
  }

  render() {
    if (!this.props.posts) {
      return <div />;
    }
    const meta = this.props.meta;
    let prevPage = parseInt(meta.page, 10) - 1;
    let nextPage = parseInt(meta.page, 10) + 1;

    if (parseInt(meta.page, 10) <= 1) {
      prevPage = 1;
    }
    if (nextPage > parseInt(meta.total_pages, 10)) {
      nextPage = parseInt(meta.total_pages, 10);
    }
    const pages = Array.from(Array(meta.total_pages).keys()).map((v, i) => i + 1);

    return (
      <div>
        <Nav current={this.props.url.pathname} />
        <div>Posts!</div>
        <div>
          {this.props.posts.map(post => (
            <div className="bs-docs-section" key={post.id}>
              <h2 id="grid" className="page-header">
                <Link href={`/post?id=${post.id}`} as={`/post/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <p key={post.id} className="lead">
                {post.description}
              </p>
            </div>
          ))}
        </div>
        <div>
          <ul className="pagination">
            <li>
              <Link href={{ pathname: '/posts', query: { page: prevPage } }}>
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            {pages.map(page => (
              <li key={page}><Link href={{ pathname: '/posts', query: { page } }}>
                <a>{page}</a></Link>
              </li>
            ))}
            <li>
              <Link href={{ pathname: '/posts', query: { page: nextPage } }}>
                <span aria-hidden="true" aria-label="Next">&raquo;</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
