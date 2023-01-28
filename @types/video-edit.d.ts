abstract class VideoEditModule implements OnInit, OnDestroy {
  constructor(protected video: HTMLVideoElement, protected modulePackage: VideoEditModulePackage) {}

  abstract init(): void;

  abstract destroy(): void;
}

interface Animator {
  play(): void;

  pause(): void;

  stop(): void;
}

interface Downloader {
  download(): void;
}

interface TimeController {
  toSec(): void;

  range(): void;
}

interface VideoEditModulePackage {
  animator: Animator;

  downloader: Downloader;

  timeController: TimeController;
}
