import VideoEditAnimator from "./modules/VideoEditAnimator";
import VideoEditDownloader from "./modules/VideoEditDownloader";
import VideoEditTimeController from "./modules/VideoEditTimeController";

class VideoEditEngine implements Engine {
  public moduleRegistry = {} as ModuleRegistry;

  public init(): void {
    const moduleRegistry = this.initModuleRegistry();
    for (const registry of moduleRegistry) {
      registry.init();
    }
  }

  private initModuleRegistry(): Module[] {
    this.moduleRegistry = {
      animator: new VideoEditAnimator(this.moduleRegistry),
      downloader: new VideoEditDownloader(this.moduleRegistry),
      timeController: new VideoEditTimeController(this.moduleRegistry),
    };
    return Object.values(this.moduleRegistry);
  }

  public destroy(): void {
    const moduleRegistry: Module[] = Object.values(this.moduleRegistry);
    for (const registry of moduleRegistry) {
      registry.destroy();
    }
  }
}

export default VideoEditEngine;
