import React from "react";
import ToolBarHeader from "./ToolBarHeader";
import VideoPlayPanel from "./VideoPlayPanel";
import TimelinePanel from "./TimelinePanel";
import * as S from "./index.style";

const EditPage = () => {
  return (
    <S.Page>
      <ToolBarHeader />
      <VideoPlayPanel />
      <TimelinePanel />
    </S.Page>
  );
};

export default EditPage;
