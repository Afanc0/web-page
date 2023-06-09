import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import HostPage from './HostPageCont/HostPage';
import ReadingOne from './HostPageCont/ReadingOne';
import GospelReading from './HostPageCont/GospelReading';
import About from './HostPageCont/About';

export default function PageMangement() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<HostPage />} />
            <Route path='/ReadingOne' element={<ReadingOne />} />
            <Route path='/GospelReading' element={<GospelReading />} />
            <Route path='/About' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageMangement />
);
reportWebVitals();
