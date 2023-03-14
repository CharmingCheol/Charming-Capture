import VideoEditModule from "./index";

class VideoEditTimeController extends VideoEditModule implements TimeController {
  protected video!: HTMLVideoElement;
  private _currentTime: number = 0;
  private _loopRange: LoopRange = { start: 0, end: 0 };

  constructor() {
    super();
  }

  public init(video: HTMLVideoElement): void {
    this.video = video;
    this._loopRange = { start: 0, end: video.duration };
  }

  public destroy(): void {
    this._currentTime = 0;
    this._loopRange = { start: 0, end: 0 };
  }

  public rescale(range: Partial<LoopRange>): LoopRange {
    this._loopRange = { ...this._loopRange, ...range };
    if (this._loopRange.start < 0) {
      this._loopRange.start = 0;
    }
    if (this.video.duration < this._loopRange.end) {
      this._loopRange.end = this.video.duration;
    }
    this.moveTo(this._currentTime);
    return this._loopRange;
  }

  public moveTo(currentTime: number): number {
    this._currentTime = currentTime;
    if (this._currentTime < this._loopRange.start) {
      this._currentTime = this._loopRange.start;
    }
    if (this._loopRange.end < this._currentTime) {
      this._currentTime = this._loopRange.end;
    }
    this.video.currentTime = this._currentTime;
    return this._currentTime;
  }

  public isPlayEnded(time: number): boolean {
    return this._loopRange.end <= time;
  }
}

export default VideoEditTimeController;
