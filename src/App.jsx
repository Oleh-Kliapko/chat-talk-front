import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import { Loader } from './utils';
import CreateChannel from './pages/CreateChannel/CreateChannel';
import RecoverPasswordPage from './pages/RecoverPasswordPage/RecoverPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import VeriFyEmailPage from './pages/VeriFyEmailPage/VeriFyEmailPage';
import { refreshUser } from './redux/auth/operations';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('./pages/GeneralPages/HomePage'));
const LoginPage = lazy(() => import('./pages/GeneralPages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/GeneralPages/RegisterPage'));

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const ChannelPage = lazy(() => import('./pages/ChannelPage/ChannelPage'));
const NotFoundPagePage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage')
);

export const App = () => {
  // const dispatch = useDispatch()
  // useEffect(() => { dispatch(refreshUser()) }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<PublicRoute component={<HomePage />} redirectTo="/channels" />} />
        <Route path="/login" element={<PublicRoute component={<LoginPage />} redirectTo="/channels" />} />
        <Route path="/register" element={<PublicRoute component={<RegisterPage />} redirectTo="/channels" />} />
        <Route path="/recover-password" element={<PublicRoute component={<RecoverPasswordPage />} redirectTo="/channels" />} />
        <Route path="/reset-password" element={<PublicRoute component={<ResetPasswordPage />} redirectTo="/channels" />} />
        <Route path="/verify-email" element={<PublicRoute component={<VeriFyEmailPage />} redirectTo="/channels" />} />
        
        <Route path="/channels/:channelId" element={<PrivateRoute redirectTo="/" component={<ChannelPage />} />} />
        <Route path="create-channel" element={<PrivateRoute redirectTo="/" component={<CreateChannel />} />} />
        <Route path="channels" element={<PrivateRoute redirectTo="/" component={<MainPage />} />} />
                         
        <Route path="*" element={<NotFoundPagePage />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </Suspense>
  );
};
