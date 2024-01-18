import React from 'react';
import PagesRoutes from './pages';
import { GlobalContext } from './context';

function App() {
  return (
    <GlobalContext>
      <PagesRoutes />
    </GlobalContext>
  );
}

export default App;
