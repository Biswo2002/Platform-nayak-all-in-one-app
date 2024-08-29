import React from 'react';
import {useAppContext} from './contexts';
import PublicRoutes from './routes/public';
import DrawerNavigator from './routes/layout/DrawerNavigator';

const Route = () => {
  const {isLoggedIn} = useAppContext();

  return <>{isLoggedIn ? <DrawerNavigator /> : <PublicRoutes />}</>;
};

export default Route;
