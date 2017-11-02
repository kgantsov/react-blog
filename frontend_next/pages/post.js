import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import Nav from '../components/nav';

class Post extends React.Component {
  static async getInitialProps({ query: { id } }) {
    const res = await fetch(`http://0.0.0.0:8000/api/v1/post/${id}/`);
    const json = await res.json();
    return { post: json.post };
  }

  render() {
    const post = this.props.post;
    if (!post) {
      return <div />;
    }
    return (
      <div>
        <Nav current={this.props.url.pathname} />
        <div>Post:</div>
        <div>
          <div className="bs-docs-section" key={post.id}>
            <h2 id="grid" className="page-header">
              <Link href={`/post?id=${post.id}`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
            </h2>
            <p key={post.id} className="lead">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  }).isRequired,
  url: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
