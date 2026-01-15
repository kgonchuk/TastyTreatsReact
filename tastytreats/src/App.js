import React, { lazy, Suspense } from 'react';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>

          <Route path="/" element={<SharedLayout />}>

            <Route index element={<HomePage />} />
            <Route path="favorites" element={<FavoritePage/>} />
          </Route>
          
          <Route path="*" element={<div>Сторінку не знайдено</div>} />
        </Routes>
      </Suspense>

  );
}

export default App;
