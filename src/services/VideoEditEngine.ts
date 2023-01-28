import VideoEditAnimator from "./modules/VideoEditAnimator";
import VideoEditDownloader from "./modules/VideoEditDownloader";
import VideoEditTimeController from "./modules/VideoEditTimeController";

class VideoEditEngine implements OnInit, OnDestroy {
  public modules!: VideoEditModules;
  private _video!: HTMLVideoElement;

  public init(video: HTMLVideoElement): void {
    this._video = video;
    const modules = this.initModules();
    for (const _module of modules) {
      _module.init();
    }
  }

  private initModules(): VideoEditModule[] {
    this.modules = {
      animator: new VideoEditAnimator(this._video, this.modules),
      downloader: new VideoEditDownloader(this._video, this.modules),
      timeController: new VideoEditTimeController(this._video, this.modules),
    };
    return Object.values(this.modules);
  }

  public destroy(): void {
    const modules: VideoEditModule[] = Object.values(this.modules);
    for (const _module of modules) {
      _module.destroy();
    }
  }
}

export default VideoEditEngine;
