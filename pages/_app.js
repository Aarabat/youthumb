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

      {/* Render the main component */}
      <Component {...pageProps} />

      {/* Your consistent footer or other elements */}
    </Fragment>
  );
}

export default MyApp;
