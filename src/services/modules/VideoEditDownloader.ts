import VideoEditModule from "./index";

class VideoEditDownloader extends VideoEditModule implements Downloader {
  protected video!: HTMLVideoElement;
  protected modulePackage!: VideoEditModulePackage;

  public init(video: HTMLVideoElement, modulePackage: VideoEditModulePackage): void {
    this.video = video;
    this.modulePackage = modulePackage;
  }

  public destroy(): void {}

  public download() {
    throw new Error("Method not implemented.");
  }
}

export default VideoEditDownloader;
