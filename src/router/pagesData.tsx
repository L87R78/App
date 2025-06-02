import { lazy, type JSX } from 'react';

const Home = lazy(() => import('../pages/home/Home'));
const ClientAccounts = lazy(() => import('../pages/client/clientAccounts/ClientAccounts.page'));
const ClientData = lazy(() => import('../pages/client/clientData/ClientData.page'));
const Transfers = lazy(() => import('../pages/paymentOperations/Transfers.page'));
const Error = lazy(() => import('../pages/error/Error'));

const route = {
  base: '/',
  home: '/home',
  client: '/client',
  clientAccounts: '/client/client-accounts',
  clientData: '/client/client-data',
  dailyBanking: '/daily-banking',
  paymentOperations: '/payment-operations',
  paymentOperationsTranfers: '/payment-operations/transfers',
  creditProducts: '/credit-products',
  savingInvestments: '/saving-investments',
  notFound: '*',
} as const;

type Page = {
  path: string;
  Component: () => JSX.Element;
  title: string;
  scopes: string[];
};

const pagesData: Page[] = [
  {
    path: route.base,
    Component: () => <Home />,
    title: 'home',
    scopes: [], // TODO: Add scopes - Roles
  },
  {
    path: route.home,
    Component: () => <Home />,
    title: 'home',
    scopes: [],
  },
  {
    path: route.clientAccounts,
    Component: () => <ClientAccounts />,
    title: 'clientAccounts',
    scopes: [],
  },
  {
    path: route.clientData,
    Component: () => <ClientData />,
    title: 'clientData',
    scopes: [],
  },
  {
    path: route.paymentOperationsTranfers,
    Component: () => <Transfers />,
    title: 'transfers',
    scopes: [],
  },
  {
    path: route.notFound,
    Component: () => <Error />,
    title: 'error',
    scopes: [],
  },
] as const;

export { pagesData, route };
