
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { ListeLivres } from '../components/livre/ListeLivres';


// _______________________________  components   _______________________________

const PagePrincipale = () => {
    return(
        <>
            <FixedHeader />
            <Body content={ <ListeLivres /> } />
            <FixedFooter />
        </>
    )
}

export default PagePrincipale;