import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* Add your CSS styles here */}
          <link rel="stylesheet" href="/styles/index.css" />
        </Head>
        <body>
          {/* Add your layout structure here */}
          <div className="container mx-auto px-4 py-8">
            <header>
              <h1>Welcome to Thumbnail Downloader</h1>
            </header>
            <main>
              {/* Your website content here */}
              <p>This is where you can download thumbnails from various social media platforms.</p>
              <Main />
            </main>
            <footer>
              {/* Footer content here */}
              <p>&copy; {new Date().getFullYear()} Your Website Name</p>
            </footer>
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
