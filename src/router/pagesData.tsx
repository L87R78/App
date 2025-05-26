import { lazy, type JSX } from 'react';

const Home = lazy(() => import('../pages/home/Home'));

const route = {
  base: '/',
  home: '/home',
  client: '/client',
  clientAccounts: '/client-accounts',
  clientData: '/client-data',
  notFound: '*',
} as const;

type Page = {
  path: string;
  Component: () => JSX.Element;
  title: string;
  scopes: string[];
  isPrivate?: boolean;
};

const pagesData: Page[] = [
  {
    path: route.base,
    Component: () => <Home />,
    title: 'home',
    scopes: [],
    isPrivate: true,
  },
  {
    path: route.home,
    Component: () => <Home />,
    title: 'home',
    scopes: [],
    isPrivate: true,
  },
] as const;

export { route, pagesData };
