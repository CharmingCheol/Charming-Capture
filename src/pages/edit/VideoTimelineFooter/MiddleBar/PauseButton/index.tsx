import { useEditPageContext } from "@/pages/edit/index.state";
import { videoEditEngine } from "@/services";

import * as S from "./index.style";

const PauseButton = () => {
  const { actions } = useEditPageContext();

  const click = () => {
    videoEditEngine.modulePackage.animator.pause();
    actions.setIsPlaying({ isPlaying: false });
  };

  return <S.PauseButton onClick={click} />;
};

export default PauseButton;
