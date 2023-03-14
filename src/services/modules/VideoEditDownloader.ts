import VideoEditModule from "./index";

class VideoEditDownloader extends VideoEditModule implements Downloader {
  protected video!: HTMLVideoElement;

  public init(video: HTMLVideoElement): void {
    this.video = video;
  }

  public destroy(): void {}

  public download() {
    throw new Error("Method not implemented.");
  }
}

export default VideoEditDownloader;
