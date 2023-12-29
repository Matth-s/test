import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { checkUserStatusService } from '../services/auth-service';

const PrivateRoutes = () => {
  const dispatch = useAppDispatch();
  const { isLoading, user } = useAppSelector(
    (state) => state.userSlice
  );

  const checkUser = async () => {
    await dispatch(checkUserStatusService()).unwrap().then().catch();
  };

  useEffect(() => {
    if (isLoading) {
      checkUser();
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <>
        <p>cahrgement</p>
      </>
    );
  }

  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoutes;
