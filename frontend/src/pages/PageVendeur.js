
import React, { useEffect, useState } from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { AjouterLivreForm } from '../components/livre/AjouterLivreForm';
import { VosLivres } from '../components/livre/VosLivres';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { api } from '../services/api'

// _______________________________  components   _______________________________

const PageVendeur = () => {

    const [session, setSession] = useLocalStorage("session", null);

    const [annoncesList, setCAnnoncesList] = useState([]);
    const fetchAnnoncesList = ()=>{
        api.fetchAnnonces(`/findByMembre/${session.id}`).then(data=>{
            if(data!=null){
                setCAnnoncesList(data)
            }
        }).catch(err=> alert(err))
    }

    useEffect(()=>{
        fetchAnnoncesList()
    }, [])

    return(
        <>
            <FixedHeader />
            <Body content={
                <>
                    <AjouterLivreForm fetchAnnoncesList={fetchAnnoncesList} />
                    <VosLivres annoncesList={annoncesList} fetchAnnoncesList={fetchAnnoncesList} />
                </>
            } />
            <FixedFooter />
        </>
    )
}

export default PageVendeur;