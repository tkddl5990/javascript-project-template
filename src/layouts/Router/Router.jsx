import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('@pages/Home'));
const Detail = React.lazy(() => import('@pages/Detail'));

function Router() {
  return (
    <main>
      <React.Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </React.Suspense>
    </main>
  );
}

export default Router;
