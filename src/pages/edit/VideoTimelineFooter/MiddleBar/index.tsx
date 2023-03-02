import { useEditPageContext } from "@/pages/edit/index.state";

import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import StopButton from "./StopButton";

import * as S from "./index.style";

const MiddleBar = () => {
  const { isPlaying } = useEditPageContext();

  return (
    <S.Section>
      <div></div>
      <div>
        {isPlaying ? <PauseButton /> : <PlayButton />}
        <StopButton />
      </div>
      <div></div>
    </S.Section>
  );
};

export default MiddleBar;
