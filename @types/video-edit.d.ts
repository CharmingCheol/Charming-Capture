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

interface VideoEditModules {
  animator: Animator;

  downloader: Downloader;

  timeController: TimeController;
}

abstract class VideoEditModule implements OnInit, OnDestroy {
  constructor(protected modules: VideoEditModules) {}

  abstract init(): void;

  abstract destroy(): void;
}

interface Engine extends OnInit, OnDestroy {
  modules: VideoEditModules;
}
