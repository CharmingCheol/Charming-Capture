import { useEditPageContext } from "@/pages/edit/index.state";

import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import StopButton from "./StopButton";

import * as S from "./index.style";

const PlayingButtons = () => {
  const { isPlaying } = useEditPageContext();

  return (
    <S.Wrapper>
      {isPlaying ? <PauseButton /> : <PlayButton />}
      <StopButton />
    </S.Wrapper>
  );
};

export default PlayingButtons;
