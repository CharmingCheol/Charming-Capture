import React, { useRef } from "react";

import FooterResizer from "./FooterResizer";
import MiddleBar from "./MiddleBar";
import TimelinePanel from "./TimelinePanel";

import * as S from "./index.style";

const VideoTimelineFooter = () => {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <S.Footer ref={footerRef}>
      <FooterResizer footerRef={footerRef} />
      <MiddleBar />
      <TimelinePanel />
    </S.Footer>
  );
};

export default VideoTimelineFooter;
