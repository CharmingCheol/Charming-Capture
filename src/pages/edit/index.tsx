import React from "react";

import ToolBarHeader from "./ToolBarHeader";
import VideoPlayPanel from "./VideoPlayPanel";
import VideoTimelineFooter from "./VideoTimelineFooter";

import * as S from "./index.style";

const EditPage = () => {
  return (
    <S.Page>
      <ToolBarHeader />
      <VideoPlayPanel />
      <VideoTimelineFooter />
    </S.Page>
  );
};

export default EditPage;
