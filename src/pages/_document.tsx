import Document, { Head, Html, Main, NextScript } from "next/document";

/**
 * Provide a Document module under `src/pages` for compatibility with Next.js
 * build steps that resolve `/_document` even in App Router projects.
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

