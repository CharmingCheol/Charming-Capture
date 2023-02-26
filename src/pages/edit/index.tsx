import React from "react";

import ToolBarHeader from "./ToolBarHeader";
import VideoPlayPanel from "./VideoPlayPanel";
import VideoTimelineFooter from "./VideoTimelineFooter";

import EditPageProvider from "./index.state";
import * as S from "./index.style";

const EditPage = () => {
  return (
    <EditPageProvider>
      <S.Page>
        <ToolBarHeader />
        <VideoPlayPanel />
        <VideoTimelineFooter />
      </S.Page>
    </EditPageProvider>
  );
};

export default EditPage;
