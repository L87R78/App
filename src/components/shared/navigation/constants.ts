import { route } from '../../../router/pagesData';

const client = 'Client';
const reports = 'Reports';
const dailyBanking = 'Daily Banking';
const plans = 'Plans';
const accounts = 'Accounts';
const paymentOperations = 'Payment Operations';
const creditProducts = 'Credit Products';
const savingInvestments = 'Saving and Investments';
const user = 'User';

const clientData = [
  {
    title: 'Search',
    path: '',
  },
  {
    title: 'E-dossier',
    path: '',
  },
  {
    title: 'Client Accounts',
    path: route.clientAccounts,
  },
  {
    title: 'Client Data',
    path: route.clientData,
  },
] as const;
const reportsData = [
  {
    title: 'Reports',
    path: '',
  },
  {
    title: 'Currency Rates',
    path: '',
  },
  {
    title: 'Account Reports',
    path: '',
  },
  {
    title: 'Credit Reports',
    path: '',
  },
] as const;

const dailyBankingData = [
  {
    title: 'Cards',
    path: '',
  },
  {
    title: 'Digital Channels',
    path: '',
  },
] as const;
const dailyBankingPlansData = [
  {
    title: 'Opening',
    path: '',
  },
  {
    title: 'Change',
    path: '',
  },
  {
    title: 'Closure',
    path: '',
  },
] as const;
const dailyBankingAccountsData = [
  {
    title: 'Account Opening',
    path: '',
  },
  {
    title: 'Account Closure',
    path: '',
  },
] as const;

const paymentOperationsData = [
  {
    title: 'Cash Operations',
    path: '',
  },
  {
    title: 'Transfers',
    path: route.paymentOperationsTranfers,
  },
] as const;

const creditProductsData = [
  {
    title: 'Consumer Loans',
    path: '',
  },
  {
    title: 'Housing and Mortgage Loans',
    path: '',
  },
  {
    title: 'Credit Cards',
    path: '',
  },
  {
    title: 'Overdraft',
    path: '',
  },
] as const;

const savingInvestmentsData = [
  {
    title: 'Feature flags',
    path: '',
  },
  {
    title: 'Deposits',
    path: '',
  },
  {
    title: 'Mutual Funds',
    path: '',
  },
] as const;

const savingInvestmentsUserData = [
  {
    title: 'Settings',
    path: '',
  },
  {
    title: 'Favorites',
    path: '',
  },
] as const;

export {
  accounts,
  client,
  clientData,
  creditProducts,
  creditProductsData,
  dailyBanking,
  dailyBankingAccountsData,
  dailyBankingData,
  dailyBankingPlansData,
  paymentOperations,
  paymentOperationsData,
  plans,
  reports,
  reportsData,
  savingInvestments,
  savingInvestmentsData,
  savingInvestmentsUserData,
  user,
};
