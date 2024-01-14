import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {TablePage} from './pages/TablePage';
import {Theme} from './styles/theme';
import {LayoutPage} from './layout/LayoutPage';

function App() {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/layout" element={<LayoutPage />} />
      </Routes>
    </Theme>
  );
}
export default App;
