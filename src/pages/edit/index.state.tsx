import { createContext, useMemo, useState } from "react";

type ContextApiParams = [typeof initialState, React.Dispatch<React.SetStateAction<typeof initialState>>];

const initialState = { isPlaying: false };

const EditPageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);
  const value: ContextApiParams = useMemo(() => [state, setState], [state]);

  return <EditPageContext.Provider value={value}>{children}</EditPageContext.Provider>;
};

export const EditPageContext = createContext<ContextApiParams>([initialState, () => {}]);

export default EditPageProvider;
