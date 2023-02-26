import { createContext, useContext, useMemo, useState } from "react";

type ContextApiParams = typeof initialState & {
  setState: React.Dispatch<React.SetStateAction<typeof initialState>>;
};

const initialState = { isPlaying: false };

const EditPageContext = createContext<ContextApiParams>({ ...initialState, setState: () => {} });

const EditPageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);
  const value = useMemo(() => ({ ...state, setState }), [state]);
  return <EditPageContext.Provider value={value}>{children}</EditPageContext.Provider>;
};

export const useEditPageContext = () => {
  const value = useContext(EditPageContext);
  return value;
};

export default EditPageProvider;
