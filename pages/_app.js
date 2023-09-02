import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />

      {/* Your consistent header or other elements */}
      <header>
        <h1>Welcome to Thumbnail Downloader</h1>
      </header>

      {/* Render the main component */}
      <Component {...pageProps} />

      {/* Your consistent footer or other elements */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Website Name</p>
      </footer>
    </Fragment>
  );
}

export default MyApp;
