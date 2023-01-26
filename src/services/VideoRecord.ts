type EventListenerKey = keyof MediaRecorderEventMap;
type EventListener = Pick<MediaRecorder, "addEventListener" | "removeEventListener">;

class VideoRecord implements AsyncOnInit, OnDestroy, Animator, EventListener {
  private stream: MediaStream | null = null;
  private recorder: MediaRecorder | null = null;

  public async init(): Promise<void> {
    try {
      const stream = await window.navigator.mediaDevices.getDisplayMedia({ audio: false });
      this.stream = stream;
      this.recorder = new MediaRecorder(stream);
    } catch {
      throw Error();
    }
  }

  public destroy(): void {
    this.stream = null;
    this.recorder = null;
  }

  public play(): void {
    this.recorder?.start();
  }

  public pause(): void {
    this.recorder?.pause();
  }

  public stop(): void {
    this.stream?.getTracks().forEach((track) => track.stop());
    this.recorder?.stop();
  }

  public addEventListener<K extends EventListenerKey>(type: K, listener: (ev: MediaRecorderEventMap[K]) => void) {
    this.recorder?.addEventListener(type, listener);
  }

  public removeEventListener<K extends EventListenerKey>(type: K, listener: (ev: MediaRecorderEventMap[K]) => void) {
    this.recorder?.removeEventListener(type, listener);
  }
}

export default VideoRecord;
