import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer
} from 'react';

const SidebarContext = createContext<any[]>([]);

const useSidebarContext = () => useContext(SidebarContext);

const initialState = () => ({
  isOpenSidebar: true
});

const TOGGLE_SIDEBAR = 'sidebar/TOGGLE_SIDEBAR';

const reducer = (
  state: any,
  { type, payload }: { type: string; payload: { isOpenSidebar: boolean } }
) => {
  const { isOpenSidebar } = payload;
  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpenSidebar
      };
    default: {
      throw new Error(`Unknown action type ${type}`);
    }
  }
};

export function SidebarProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  const update = useCallback((payload: any) => {
    dispatch({
      type: TOGGLE_SIDEBAR,
      payload
    });
  }, []);

  return (
    <SidebarContext.Provider
      value={useMemo(() => [state, { update }], [state, update])}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const [state, { update }] = useSidebarContext();

  const toggleSidebar = (isOpenSidebar: boolean) => {
    update({ isOpenSidebar });
  };
  return [state, toggleSidebar];
};
