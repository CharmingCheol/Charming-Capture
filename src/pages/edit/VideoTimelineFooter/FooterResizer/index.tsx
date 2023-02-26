import { height } from "@/styles/variables";

import * as S from "./index.style";

interface Props {
  footerRef: React.RefObject<HTMLElement>;
}

const FooterResizer = ({ footerRef }: Props) => {
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUup);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const footerMaxHeight = height.middleBar + height.timelinePanel;
    const footerHeight = window.innerHeight - event.clientY + 4;
    if (height.middleBar <= footerHeight && footerHeight <= footerMaxHeight && footerRef.current) {
      footerRef.current.style.height = `${footerHeight}px`;
      (document.querySelector("body") as HTMLBodyElement).style.cursor = "row-resize";
    }
  };

  const handleMouseUup = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUup);
    (document.querySelector("body") as HTMLBodyElement).style.cursor = "default";
  };

  return <S.DragArea onMouseDown={handleMouseDown} />;
};

export default FooterResizer;
