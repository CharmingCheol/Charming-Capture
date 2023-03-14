abstract class VideoEditModule implements OnInit, OnDestroy {
  protected abstract video: HTMLVideoElement;

  abstract init(video: HTMLVideoElement): void;

  abstract destroy(): void;
}

export default VideoEditModule;
