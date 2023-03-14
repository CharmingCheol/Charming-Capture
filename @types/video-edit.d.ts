interface Animator {
  play(): void;

  pause(): void;

  stop(): void;
}

interface Downloader {
  download(): void;
}

interface TimeController {
  rescale(loopRange: Partial<LoopRange>): LoopRange;

  moveTo(time: number): number;

  isPlayEnded(time: number): boolean;
}

interface VideoEditModulePackage {
  animator: Animator;

  downloader: Downloader;

  timeController: TimeController;
}
