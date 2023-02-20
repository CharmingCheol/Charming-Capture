abstract class VideoEditModule implements OnInit, OnDestroy {
  protected abstract video: HTMLVideoElement;
  protected abstract modulePackage: VideoEditModulePackage;

  abstract init(video: HTMLVideoElement, modulePackage: VideoEditModulePackage): void;

  abstract destroy(): void;
}

export default VideoEditModule;
