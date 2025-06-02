import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// EN Translations
import enClientAccounts from './locales/en/pages/client/client_data/client_accounts.json';
import enContactData from './locales/en/pages/client/client_data/contact_data.json';
import enGdpr from './locales/en/pages/client/client_data/gdpr.json';
import enIdDocument from './locales/en/pages/client/client_data/id_document.json';
import enClientInfoAside from './locales/en/pages/client/client_info_aside.json';
import enHome from './locales/en/pages/home.json';
import enPOcommon from './locales/en/pages/payment_operations/common.json';
import enTransfers from './locales/en/pages/payment_operations/transfers.json';
import enFavourites from './locales/en/pages/user/favorites.json';
import enSettings from './locales/en/pages/user/settings.json';
import enButton from './locales/en/shared/button.json';
import enCommon from './locales/en/shared/common.json';
import enFooter from './locales/en/shared/footer.json';
import enLabel from './locales/en/shared/label.json';
import enNavigation from './locales/en/shared/navigation.json';

// BG Translations
import bgClientAccounts from './locales/bg/pages/client/client_data/client_accounts.json';
import bgContactData from './locales/bg/pages/client/client_data/contact_data.json';
import bgGdpr from './locales/bg/pages/client/client_data/gdpr.json';
import bgIdDocument from './locales/bg/pages/client/client_data/id_document.json';
import bgClientInfoAside from './locales/bg/pages/client/client_info_aside.json';
import bgHome from './locales/bg/pages/home.json';
import bgPOcommon from './locales/bg/pages/payment_operations/common.json';
import bgTransfers from './locales/bg/pages/payment_operations/transfers.json';
import bgFavourites from './locales/bg/pages/user/favorites.json';
import bgSettings from './locales/bg/pages/user/settings.json';
import bgButton from './locales/bg/shared/button.json';
import bgCommon from './locales/bg/shared/common.json';
import bgFooter from './locales/bg/shared/footer.json';
import bgLabel from './locales/bg/shared/label.json';
import bgNavigation from './locales/bg/shared/navigation.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['en', 'bg'],
  ns: [
    'shared/common',
    'shared/button',
    'shared/footer',
    'shared/label',
    'shared/navigation',
    'pages/home',
    'pages/client/client_info_aside',
    'pages/client/client_data/client_accounts',
    'pages/client/client_data/contact_data',
    'pages/client/client_data/gdpr',
    'pages/client/client_data/id_document',
    'pages/payment_operations/transfers',
    'pages/payment_operations/common',
    'pages/user/favourites',
    'pages/user/settings',
  ],
  defaultNS: 'shared/common',
  resources: {
    en: {
      'shared/common': enCommon,
      'shared/button': enButton,
      'shared/footer': enFooter,
      'shared/label': enLabel,
      'shared/navigation': enNavigation,
      'pages/home': enHome,
      'pages/client/client_info_aside': enClientInfoAside,
      'pages/client/client_data/client_accounts': enClientAccounts,
      'pages/client/client_data/contact_data': enContactData,
      'pages/client/client_data/gdpr': enGdpr,
      'pages/client/client_data/id_document': enIdDocument,
      'pages/payment_operations/transfers': enTransfers,
      'pages/payment_operations/common': enPOcommon,
      'pages/user/favourites': enFavourites,
      'pages/user/settings': enSettings,
    },
    bg: {
      'shared/common': bgCommon,
      'shared/button': bgButton,
      'shared/footer': bgFooter,
      'shared/label': bgLabel,
      'shared/navigation': bgNavigation,
      'pages/home': bgHome,
      'pages/client/client_info_aside': bgClientInfoAside,
      'pages/client/client_data/client_accounts': bgClientAccounts,
      'pages/client/client_data/contact_data': bgContactData,
      'pages/client/client_data/gdpr': bgGdpr,
      'pages/client/client_data/id_document': bgIdDocument,
      'pages/payment_operations/transfers': bgTransfers,
      'pages/payment_operations/common': bgPOcommon,
      'pages/user/favourites': bgFavourites,
      'pages/user/settings': bgSettings,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

export default i18n;
