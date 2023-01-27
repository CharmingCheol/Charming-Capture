import VideoEditAnimator from "./modules/VideoEditAnimator";
import VideoEditDownloader from "./modules/VideoEditDownloader";
import VideoEditTimeController from "./modules/VideoEditTimeController";

class VideoEditEngine implements OnInit, OnDestroy, VideoEditEngineVariables {
  public modules = {} as VideoEditModules;

  public init(): void {
    const modules = this.initVideoEditModules();
    for (const _module of modules) {
      _module.init();
    }
  }

  private initVideoEditModules(): VideoEditModule[] {
    this.modules = {
      animator: new VideoEditAnimator(this.modules),
      downloader: new VideoEditDownloader(this.modules),
      timeController: new VideoEditTimeController(this.modules),
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
