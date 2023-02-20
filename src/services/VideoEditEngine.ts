import VideoEditModule from "./modules";

class VideoEditEngine implements OnInit, OnDestroy {
  constructor(public modulePackage: VideoEditModulePackage) {}

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
