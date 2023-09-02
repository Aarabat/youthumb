import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const handleGetThumbnail = async () => {
    // Extract the hostname (e.g., twitter.com, tiktok.com, snapchat.com) from the URL.
    const hostname = new URL(videoURL).hostname;

    // Define supported platforms and their corresponding thumbnail retrieval functions.
    const platforms = {
      "www.youtube.com": getYouTubeThumbnail,
      "www.facebook.com": getFacebookThumbnail,
      "www.instagram.com": getInstagramThumbnail,
      "www.pinterest.com": getPinterestThumbnail,
      "www.reddit.com": getRedditThumbnail,
      "twitter.com": getTwitterThumbnail,
      "www.tiktok.com": getTikTokThumbnail,
      "www.snapchat.com": getSnapchatThumbnail,
      // Add more platforms as needed
    };

    // Check if the entered URL matches a supported platform.
    if (platforms.hasOwnProperty(hostname)) {
      const thumbnailOptions = await platforms[hostname](videoURL);
      setThumbnailOptions(thumbnailOptions);
    } else {
      // Unsupported platform
      setThumbnailOptions([]);
    }
  };

  const getYouTubeThumbnail = async (url) => {
    // Implement YouTube thumbnail retrieval logic here.
    // ...
  };

  const getFacebookThumbnail = async (url) => {
    // Implement Facebook thumbnail retrieval logic here.
    // ...
  };

  const getInstagramThumbnail = async (url) => {
    // Implement Instagram thumbnail retrieval logic here.
    // ...
  };

  const getPinterestThumbnail = async (url) => {
    // Implement Pinterest thumbnail retrieval logic here.
    // ...
  };

  const getRedditThumbnail = async (url) => {
    // Implement Reddit thumbnail retrieval logic here.
    // ...
  };

  const getTwitterThumbnail = async (url) => {
    // Implement Twitter thumbnail retrieval logic here.
    // ...
  };

  const getTikTokThumbnail = async (url) => {
    // Implement TikTok thumbnail retrieval logic here.
    // ...
  };

  const getSnapchatThumbnail = async (url) => {
    // Implement Snapchat thumbnail retrieval logic here.
    // ...
  };

  const handleCopyToClipboard = (url) => {
    copy(url);
    // You can add a notification or other UI feedback here.
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter URL (YouTube, Facebook, Instagram, Pinterest, Reddit, Twitter, TikTok, Snapchat)"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={handleGetThumbnail}
        >
          Download Thumbnail
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => handleCopyToClipboard(option.downloadUrl)}
                >
                  Copy URL to Clipboard
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
