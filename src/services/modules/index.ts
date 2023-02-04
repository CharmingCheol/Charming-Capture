abstract class VideoEditModule implements OnInit, OnDestroy {
  constructor(protected video: HTMLVideoElement, protected modulePackage: VideoEditModulePackage) {}

  abstract init(): void;

  abstract destroy(): void;
}

export default VideoEditModule;
