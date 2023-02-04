interface Animator {
  play(): void;

  pause(): void;

  stop(): void;
}

interface Downloader {
  download(): void;
}

interface TimeController {
  currentTime: number;

  loopRange: LoopRange;

  clamp(loopRange: Partial<LoopRange>): LoopRange;

  moveTo(currentTime: number): number;
}

interface VideoEditModulePackage {
  animator: Animator;

  downloader: Downloader;

  timeController: TimeController;
}
