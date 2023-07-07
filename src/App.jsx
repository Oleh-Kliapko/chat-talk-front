import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import { Loader } from './utils/Loader';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const ChannelPage = lazy(() => import('./pages/ChannelPage/ChannelPage'));
const NotFoundPagePage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute component={<LoginPage />} redirectTo="/channels" />
          }
        />
        <Route
          path="channels"
          element={<PrivateRoute redirectTo="/" component={<MainPage />} />}
        >
          <Route path="channels/:channelId" element={<ChannelPage />} />
        </Route>
        <Route path="*" element={<NotFoundPagePage />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </Suspense>
  );
};
