import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {TablePage} from './pages/TablePage';
import {Theme} from './styles/theme';

function App() {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<TablePage />} />
      </Routes>
    </Theme>
  );
}
export default App;
