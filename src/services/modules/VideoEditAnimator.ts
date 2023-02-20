import VideoEditModule from "./index";

class VideoEditAnimator extends VideoEditModule implements Animator {
  protected video!: HTMLVideoElement;
  protected modulePackage!: VideoEditModulePackage;

  public init(video: HTMLVideoElement, modulePackage: VideoEditModulePackage): void {
    this.video = video;
    this.modulePackage = modulePackage;
  }

  public destroy(): void {}

  public play(): void {
    this.video.play();
    this.video.addEventListener("timeupdate", this.handleTimeUpdateEvent as any);
  }

  private handleTimeUpdateEvent(event: any): void {
    if (this.modulePackage.timeController.loopRange.end <= event.target.currentTime) {
      this.modulePackage.timeController.moveTo(0);
      this.video.play();
    }
  }

  public pause(): void {
    this.video.pause();
    this.video.removeEventListener("timeupdate", this.handleTimeUpdateEvent as any);
  }

  public stop(): void {
    this.pause();
    this.modulePackage.timeController.moveTo(0);
  }
}

export default VideoEditAnimator;
