import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext';

const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
    return(
      isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes