import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import Loader from '../components/loader/Loader';
import { pagesData } from './pagesData';

import Layout from './Layout';

const renderPublicPages = () =>
  pagesData.map(el => <Route path={el.path} key={el.title} element={<el.Component />} />);

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>{renderPublicPages()}</Route>
        <Route path="*" element={<h1>404 Not Found.</h1>} />
      </Routes>
    </Suspense>
  );
};

export default Router;
