import React from "react";

import MiddleBar from "./MiddleBar";
import TimelinePanel from "./TimelinePanel";

import * as S from "./index.style";

const VideoTimelineFooter = () => {
  return (
    <S.Footer>
      <div className="drag-area" />
      <MiddleBar />
      <TimelinePanel />
    </S.Footer>
  );
};

export default VideoTimelineFooter;
