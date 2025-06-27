import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '@/context';
const AdminLayout = () => {
  const location = useLocation();
  // get the user's role
  const { isAuthenticated, user } = useAuth();
  //   console.log(isAuthenticated, user);

  // if unauthenticated, redirect to login
  if (!isAuthenticated) return <Navigate to='/login' state={{ next: location.pathname }} />;
  // is authenticated, but not admin, redirect to create page
  return user && user.role === 'admin' ? <Outlet /> : <Navigate to='/create' state={{ next: location.pathname }} />;
};

export default AdminLayout;
