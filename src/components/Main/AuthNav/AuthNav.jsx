import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header, NavBarItem } from './AuthNav.styled';
import { Loader } from '@/utils/Loader';

export const AuthNav = () => {
  return (
    <>
      <Header>
        <NavBarItem to="/">LoginPage</NavBarItem>
        <NavBarItem to="/channels">MainPage</NavBarItem>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
