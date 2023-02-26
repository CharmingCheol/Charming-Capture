import VideoEditModule from "./modules";
import VideoEditAnimator from "./modules/VideoEditAnimator";
import VideoEditDownloader from "./modules/VideoEditDownloader";
import VideoEditTimeController from "./modules/VideoEditTimeController";

class VideoEditEngine implements OnInit, OnDestroy {
  public modulePackage!: VideoEditModulePackage;

  constructor() {
    this.modulePackage = {
      animator: new VideoEditAnimator(),
      downloader: new VideoEditDownloader(),
      timeController: new VideoEditTimeController(),
    };
  }

  public init(video: HTMLVideoElement): void {
    const modules: VideoEditModule[] = Object.values(this.modulePackage);
    for (const _module of modules) {
      _module.init(video, this.modulePackage);
    }
  }

  public destroy(): void {
    const modules: VideoEditModule[] = Object.values(this.modulePackage);
    for (const _module of modules) {
      _module.destroy();
    }
  }
}

export default VideoEditEngine;
