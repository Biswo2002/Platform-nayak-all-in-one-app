import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type Context_Type = {
  isLoggedIn: unknown;
  setIsLoggedIn: (isLoggedIn: unknown) => void;
  userData?: any;
  setUserData: (userData: any) => void;
  socketRef?: any;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const AppContext = createContext<Context_Type>({
  isLoggedIn: null,
  setIsLoggedIn: () => {},
  userData: null,
  setUserData: () => {},
  socketRef: null,
  isDarkMode: false,
  setIsDarkMode: () => {},
});

type AppContextProviderProps = {
  children?: ReactNode;
};

export default ({children}: AppContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<unknown>(null);
  const [userData, setUserData] = React.useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
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
        setIsDarkMode,
        isDarkMode,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
