import VideoEditModule from "./index";

class VideoEditDownloader extends VideoEditModule implements Downloader {
  public init(): void {}

  public destroy(): void {}

  public download() {
    throw new Error("Method not implemented.");
  }
}

export default VideoEditDownloader;
