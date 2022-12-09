
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PagePrincipale from './pages/PagePrincipale';
import PageLogin from './pages/PageLogin';
import PageInscription from './pages/PageInscription';
import PageVendeur from './pages/PageVendeur';
import PageAdmin from './pages/PageAdmin';
import PageMessages from './pages/PageMessages';

// _______________________________  components   _______________________________

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagePrincipale />} />
          <Route path="login" element={<PageLogin />} />
          <Route path="register" element={<PageInscription />} />
          <Route path="vendeur" element={<PageVendeur />} />
          <Route path="admin" element={<PageAdmin />} />
          <Route path="messages" element={<PageMessages />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;