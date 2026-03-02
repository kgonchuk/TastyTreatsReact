import React, { lazy, Suspense, useEffect } from 'react';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { HomePage } from './pages/HomePage/HomePage';
import { useSelector } from 'react-redux';

function App() {
const theme= useSelector(state=>state.theme.mode)
 useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

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
