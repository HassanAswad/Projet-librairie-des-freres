
import React, { useRef } from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { ListeAnnonces } from '../components/annonce/ListeAnnonces';
import { useSession } from '../hooks/useSession';
import { useSearchParams } from 'react-router-dom';

// _______________________________  components   _______________________________

const PagePrincipale = ({route}) => {

    const [session, setSession] = useSession({connected: {admin: route, membre: route}, disconnected: '/'})
    
    
    return(
        <>
            <FixedHeader session={session} />
            <Body content={ <ListeAnnonces session={session} /> } />
            <FixedFooter />
        </>
    )
}

export default PagePrincipale;