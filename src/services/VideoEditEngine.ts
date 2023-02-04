import VideoEditModule from "./modules";
import VideoEditAnimator from "./modules/VideoEditAnimator";
import VideoEditDownloader from "./modules/VideoEditDownloader";
import VideoEditTimeController from "./modules/VideoEditTimeController";

class VideoEditEngine implements OnInit, OnDestroy {
  public modulePackage!: VideoEditModulePackage;
  private _video!: HTMLVideoElement;

  public init(video: HTMLVideoElement): void {
    this._video = video;
    const modules = this.initModulePackage();
    for (const _module of modules) {
      _module.init();
    }
  }

  private initModulePackage(): VideoEditModule[] {
    this.modulePackage = {
      animator: new VideoEditAnimator(this._video, this.modulePackage),
      downloader: new VideoEditDownloader(this._video, this.modulePackage),
      timeController: new VideoEditTimeController(this._video, this.modulePackage),
    };
    return Object.values(this.modulePackage);
  }

  public destroy(): void {
    const modules: VideoEditModule[] = Object.values(this.modulePackage);
    for (const _module of modules) {
      _module.destroy();
    }
  }
}

export default VideoEditEngine;
