import { useEditPageContext } from "@/pages/edit/index.state";
import { videoEditEngine } from "@/services";

import * as S from "./index.style";

const PlayButton = () => {
  const { actions } = useEditPageContext();

  const handleClick = () => {
    videoEditEngine.modulePackage.animator.play();
    actions.setIsPlaying({ isPlaying: true });
  };

  return <S.PlayButton onClick={handleClick} />;
};

export default PlayButton;
