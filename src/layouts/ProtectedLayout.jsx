import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '@/context';
const ProtectedLayout = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' state={{ next: location.pathname }} />;
  //   if (isAuthenticated) return <Outlet />;
  //   return <Navigate to='/login' />;
};

export default ProtectedLayout;
