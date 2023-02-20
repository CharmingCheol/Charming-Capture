import VideoEditModule from "./index";

class VideoEditTimeController extends VideoEditModule implements TimeController {
  protected video!: HTMLVideoElement;
  protected modulePackage!: VideoEditModulePackage;

  private _currentTime!: number;
  private _loopRange!: LoopRange;

  public init(video: HTMLVideoElement, modulePackage: VideoEditModulePackage): void {
    this.video = video;
    this.modulePackage = modulePackage;
    this._currentTime = 0;
    this._loopRange = { start: 0, end: this.video.duration };
  }

  public destroy(): void {
    this._currentTime = 0;
    this._loopRange = { start: 0, end: 0 };
  }

  public clamp(loopRange: Partial<LoopRange>): LoopRange {
    this._loopRange = { ...this._loopRange, ...loopRange };
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
}

export default VideoEditTimeController;
