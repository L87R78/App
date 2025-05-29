// What does this file do?
// This file is used to setup the dayjs locale for the application.
// This means that for example if the user is in the UK, the date will be displayed in the UK format, as well as the time and other specific things used in Datepicker, etc.

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';

import 'dayjs/locale/bg';
import 'dayjs/locale/en';

export const setupDayjsLocale = () => {
  dayjs.extend(weekday);
  dayjs.extend(localeData);
  dayjs.extend(updateLocale);

  const browserLang = navigator.language || navigator.languages[0] || 'bg';
  const locale = browserLang.slice(0, 2);

  const supportedLocales = ['bg', 'en'];
  const resolvedLocale = supportedLocales.includes(locale) ? locale : 'bg';

  //TODO: Set from navigator - resolvedLocale, currently is bg for test
  dayjs.locale(resolvedLocale);
  dayjs.updateLocale(resolvedLocale, {
    weekStart: 1,
  });
};
