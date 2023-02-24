import VideoRecord from "./VideoRecord";
import VideoEditEngine from "./VideoEditEngine";
import VideoUrlLoader from "./VideoUrlLoader";

import VideoEditAnimator from "./modules/VideoEditAnimator";
import VideoEditDownloader from "./modules/VideoEditDownloader";
import VideoEditTimeController from "./modules/VideoEditTimeController";

const videoEditModulePackage: VideoEditModulePackage = {
  animator: new VideoEditAnimator(),
  downloader: new VideoEditDownloader(),
  timeController: new VideoEditTimeController(),
};

export const videoRecord = new VideoRecord();
export const videoEditEngine = new VideoEditEngine(videoEditModulePackage);
export const videoUrlLoader = new VideoUrlLoader();
