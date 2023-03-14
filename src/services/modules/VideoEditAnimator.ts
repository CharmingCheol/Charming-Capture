import VideoEditModule from "./index";

class VideoEditAnimator extends VideoEditModule implements Animator {
  protected video!: HTMLVideoElement;

  constructor(private timeController: TimeController) {
    super();
  }

  public init(video: HTMLVideoElement): void {
    this.video = video;
  }

  public destroy(): void {}

  public play(): void {
    this.video.play();
    this.video.addEventListener("timeupdate", this.handleTimeUpdateEvent);
  }

  private handleTimeUpdateEvent = (event: any): void => {
    if (this.timeController.isPlayEnded(event.target.currentTime)) {
      this.stop();
    }
  };

  public pause(): void {
    this.video.pause();
    this.video.removeEventListener("timeupdate", this.handleTimeUpdateEvent);
  }

  public stop(): void {
    this.pause();
    this.timeController.moveTo(0);
  }
}

export default VideoEditAnimator;
