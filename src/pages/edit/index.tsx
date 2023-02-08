import React from "react";

import ToolBarHeader from "./ToolBarHeader";
import VideoPlayPanel from "./VideoPlayPanel";
import MiddleBar from "./MiddleBar";
import TimelinePanel from "./TimelinePanel";

import * as S from "./index.style";

const EditPage = () => {
  return (
    <S.Page>
      <ToolBarHeader />
      <VideoPlayPanel />
      <S.Footer>
        <MiddleBar />
        <TimelinePanel />
      </S.Footer>
    </S.Page>
  );
};

export default EditPage;
