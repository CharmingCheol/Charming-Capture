class VideoUrlLoader implements OnInit, OnDestroy {
  private _url!: string;
  get url(): string {
    return this._url;
  }

  public init(chunks: Blob[]): void {
    const blob = new Blob(chunks);
    const url = window.URL.createObjectURL(blob);
    this._url = url;
  }

  public destroy(): void {
    window.URL.revokeObjectURL(this._url);
  }
}

export default VideoUrlLoader;
