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

  exceed(time: number): void;
}

interface VideoEditModulePackage {
  animator: Animator;

  downloader: Downloader;

  timeController: TimeController;
}
