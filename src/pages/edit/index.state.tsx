import { createContext, useContext, useMemo, useState } from "react";

type ContextApiParams = typeof initialState & { actions: actions };

type actions = {
  setIsPlaying: (args: Pick<typeof initialState, "isPlaying">) => void;
};

const initialState = { isPlaying: false };

const EditPageContext = createContext<ContextApiParams>({} as any);

const EditPageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);

  const actions: actions = {
    setIsPlaying: (payload) => setState((state) => ({ ...state, ...payload })),
  };

  const value = useMemo<ContextApiParams>(() => ({ ...state, actions }), [state]);

  return <EditPageContext.Provider value={value}>{children}</EditPageContext.Provider>;
};

export const useEditPageContext = () => {
  const value = useContext(EditPageContext);
  return value;
};

export default EditPageProvider;
