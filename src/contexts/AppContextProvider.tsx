import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';


type Context_Type = {
  isLoggedIn: unknown;
  setIsLoggedIn: (isLoggedIn: unknown) => void;
  userData?: any;
  setUserData: (userData: any) => void;
  socketRef?: any;
};

const AppContext = createContext<Context_Type>({
  isLoggedIn: null,
  setIsLoggedIn: () => { },
  userData: null,
  setUserData: () => { },
  socketRef: null,
});

type AppContextProviderProps = {
  children?: ReactNode;
};

export default ({ children }: AppContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<unknown>(null);
  const [userData, setUserData] = React.useState<any>(null);
  //socket connection
  const socketRef = useRef<any>();

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        socketRef,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
