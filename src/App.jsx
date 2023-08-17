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
import { useDispatch, useSelector } from 'react-redux';
import { MyChannelsPage } from './pages/MyChannelsPage/MyChannelsPage';
import { MyProfilePage } from './pages/MyProfilePage/MyProfilePage';
import AboutChannelPage from './pages/AboutChannelPage/AboutChannelPage';
import { EditProfilePage } from './pages/EditProfilePage/EditProfilePage';
import { SecurityPage } from './pages/PasswordPage/SecurityPage';
import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage';

const HomePage = lazy(() => import('./pages/GeneralPages/HomePage'));
const LoginPage = lazy(() => import('./pages/GeneralPages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/GeneralPages/RegisterPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const ChannelPage = lazy(() => import('./pages/ChannelPage/ChannelPage'));
const NotFoundPagePage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const { isRefreshing } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(refreshUser()) }, [dispatch]);

  return (
    isRefreshing ? <Loader /> :
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute component={<HomePage />} redirectTo="/channels" />} />
          <Route path="/login" element={<PublicRoute component={<LoginPage />} redirectTo="/channels" />} />
          <Route path="/register" element={<PublicRoute component={<RegisterPage />} redirectTo="/channels" />} />
          <Route path="/recover-password" element={<PublicRoute component={<RecoverPasswordPage />} redirectTo="/channels" />} />
          <Route path="/reset-password" element={<PublicRoute component={<ResetPasswordPage />} redirectTo="/channels" />} />
          <Route path="/verify-email" element={<PublicRoute component={<VeriFyEmailPage />} redirectTo="/channels" />} />
        
          <Route path="/channels/:channelId" element={<PrivateRoute redirectTo="/" component={<ChannelPage />} />} />
          <Route path="/create-channel" element={<PrivateRoute redirectTo="/" component={<CreateChannel />} />} />
          <Route path="/channels" element={<PrivateRoute redirectTo="/" component={<MainPage />} />} />
          <Route path="/my-channels" element={<PrivateRoute redirectTo="/" component={<MyChannelsPage />} />} />
          <Route path="/my-profile" element={<PrivateRoute redirectTo="/" component={<MyProfilePage />} />} />
          <Route path="/profile" element={<PrivateRoute redirectTo="/" component={<EditProfilePage />} />} />
          <Route path="/security" element={<PrivateRoute redirectTo="/" component={<SecurityPage />} />} />
           <Route path="/change-password" element={<PrivateRoute redirectTo="/" component={<ChangePasswordPage />} />} />
          <Route path="/about-channel/:channelId" element={<PrivateRoute redirectTo="/" component={<AboutChannelPage />} />} />
                         
          <Route path="*" element={<NotFoundPagePage />} />
        </Routes>
        <ToastContainer autoClose={3000} />
      </Suspense>
  );
};
