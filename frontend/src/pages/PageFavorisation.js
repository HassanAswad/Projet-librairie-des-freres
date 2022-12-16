
import React, { useEffect, useState } from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { AjouterLivreForm } from '../components/livre/AjouterLivreForm';
import { VosLivres } from '../components/livre/VosLivres';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { api } from '../services/api'
import { EditLivreForm } from '../components/livre/EditLivreForm';
import { FavorisationList } from '../components/favorisation/FavorisationList';

// _______________________________  components   _______________________________

const PageVendeur = () => {

    const [session, setSession] = useLocalStorage("session", null);

    return(
        <>
            <FixedHeader />
            <Body content={
                <FavorisationList session={session} />
            } />
            <FixedFooter />
        </>
    )
}

export default PageVendeur;