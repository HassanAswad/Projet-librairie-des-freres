
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PagePrincipale from './pages/PagePrincipale';
import PageLogin from './pages/PageLogin';
import PageInscription from './pages/PageInscription';

// _______________________________  components   _______________________________

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagePrincipale />} />
          <Route path="login" element={<PageLogin />} />
          <Route path="register" element={<PageInscription />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;