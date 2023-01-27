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

interface ModuleRegistry {
  animator: Animator;

  downloader: Downloader;

  timeController: TimeController;
}

abstract class VideoEditModule implements OnInit, OnDestroy {
  constructor(protected moduleRegistry: ModuleRegistry) {}

  abstract init(): void;

  abstract destroy(): void;
}

interface Engine extends OnInit, OnDestroy {
  moduleRegistry: ModuleRegistry;
}
