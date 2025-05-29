// i18n/loadNamespace.ts
export const loadNamespace = async (lng: string, ns: string) => {
  const path = `./${lng}/${ns}.json`;

  try {
    const module = await import(/* @vite-ignore */ path);
    return module.default;
  } catch (e) {
    console.warn(`Missing translation file: ${path}`);
    return {};
  }
};
