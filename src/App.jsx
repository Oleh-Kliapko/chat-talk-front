import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { Loader } from './utils';
import { refreshUser } from './redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
// import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
// import RecoverPasswordPage from './pages/RecoverPasswordPage/RecoverPasswordPage';
// import CreateChannel from './pages/CreateChannel/CreateChannel';
// import  MyChannelsPage  from './pages/MyChannelsPage/MyChannelsPage';
// import  MyProfilePage  from './pages/MyProfilePage/MyProfilePage';
// import AboutChannelPage from './pages/AboutChannelPage/AboutChannelPage';
// import  EditProfilePage  from './pages/EditProfilePage/EditProfilePage';
// import  SecurityPage  from './pages/SecurityPage/SecurityPage';
// import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage';
// import  EditChannelPage  from './pages/EditChannelPage/EditChannelPage';
// import VeriFyEmailPage from './pages/VeriFyEmailPage/VeriFyEmailPage';

const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage/ResetPasswordPage'));
const RecoverPasswordPage = lazy(() => import('./pages/RecoverPasswordPage/RecoverPasswordPage'));
const CreateChannel = lazy(() => import('./pages/CreateChannel/CreateChannel'));
const MyChannelsPage = lazy(() => import('./pages/MyChannelsPage/MyChannelsPage'));
const MyProfilePage = lazy(() => import('./pages/MyProfilePage/MyProfilePage'));
const AboutChannelPage = lazy(() => import('./pages/AboutChannelPage/AboutChannelPage'));
const EditProfilePage = lazy(() => import('./pages/EditProfilePage/EditProfilePage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage/SecurityPage'));
const ChangePasswordPage = lazy(() => import('./pages/ChangePasswordPage/ChangePasswordPage'));
const EditChannelPage = lazy(() => import('./pages/EditChannelPage/EditChannelPage'));
const VeriFyEmailPage = lazy(() => import('./pages/VeriFyEmailPage/VeriFyEmailPage'));
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
          <Route path="/edit-channel/:channelId" element={<PrivateRoute redirectTo="/" component={<EditChannelPage />} />} />
                         
          <Route path="*" element={<NotFoundPagePage />} />
        </Routes>
        <ToastContainer autoClose={3000} />
      </Suspense>
  );
};


