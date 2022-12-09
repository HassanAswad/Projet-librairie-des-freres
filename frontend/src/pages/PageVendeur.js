
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { AjouterLivreForm } from '../components/livre/AjouterLivreForm';
import { VosLivres } from '../components/livre/VosLivres';


// _______________________________  components   _______________________________

const PageVendeur = () => {
    return(
        <>
            <FixedHeader />
            <Body content={
                <>
                    <AjouterLivreForm />
                    <VosLivres />
                </>
            } />
            <FixedFooter />
        </>
    )
}

export default PageVendeur;