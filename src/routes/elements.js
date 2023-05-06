import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));

export const DashboardPage = Loadable(lazy(() => import('../pages/DashboardPage')));
export const FeaturePage = Loadable(lazy(() => import('../pages/FeaturePage')));

export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
