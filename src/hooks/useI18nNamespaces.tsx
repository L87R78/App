// hooks/useI18nNamespaces.ts
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { loadNamespace } from '../i18n/loadNamespace';

export const useI18nNamespaces = (namespaces: string[]) => {
  const { i18n, t } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      for (const ns of namespaces) {
        if (!i18n.hasResourceBundle(i18n.language, ns)) {
          const data = await loadNamespace(i18n.language, ns);
          i18n.addResourceBundle(i18n.language, ns, data, true, true);
        }
      }

      if (mounted) {
        setReady(true);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [i18n.language, namespaces]);

  return { t, i18n, ready };
};
