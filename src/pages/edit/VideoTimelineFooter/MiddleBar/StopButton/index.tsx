import { useEditPageContext } from "@/pages/edit/index.state";
import { videoEditEngine } from "@/services";

import * as S from "./index.style";

const StopButton = () => {
  const { actions } = useEditPageContext();

  const handleClick = () => {
    videoEditEngine.modulePackage.animator.stop();
    actions.setIsPlaying({ isPlaying: false });
  };

  return <S.StopButton onClick={handleClick} />;
};

export default StopButton;
