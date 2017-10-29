import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link
            rel="stylesheet"
            href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css"
          />
          <link rel="stylesheet" href="/static/styles.css" />
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <div id="app" className="container">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
