import VideoEditModule from "./modules";
import VideoEditAnimator from "./modules/VideoEditAnimator";
import VideoEditDownloader from "./modules/VideoEditDownloader";
import VideoEditTimeController from "./modules/VideoEditTimeController";

class VideoEditEngine implements OnInit, OnDestroy {
  public animator!: Animator;
  public downloader!: Downloader;
  public timeController!: TimeController;

  private modules: VideoEditModule[] = [];

  constructor() {
    this.registerModules();
  }

  private registerModules() {
    this.modules.push((this.timeController = new VideoEditTimeController()));
    this.modules.push((this.downloader = new VideoEditDownloader()));
    this.modules.push((this.animator = new VideoEditAnimator(this.timeController)));
  }

  public init(video: HTMLVideoElement): void {
    for (const _module of this.modules) {
      _module.init(video);
    }
  }

  public destroy(): void {
    for (const _module of this.modules) {
      _module.destroy();
    }
  }
}

export default VideoEditEngine;
