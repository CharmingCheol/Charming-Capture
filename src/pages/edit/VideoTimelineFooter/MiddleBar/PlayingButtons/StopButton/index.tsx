import { useEditPageContext } from "@/pages/edit/index.state";
import { videoEditEngine } from "@/services";

import * as S from "./index.style";

const StopButton = () => {
  const { actions } = useEditPageContext();

  const click = () => {
    videoEditEngine.modulePackage.animator.stop();
    actions.stopVideo();
  };

  return <S.StopButton onClick={click} />;
};

export default StopButton;
