
import React, { useEffect, useState } from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { AjouterLivreForm } from '../components/livre/AjouterLivreForm';
import { VosLivres } from '../components/livre/VosLivres';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { api } from '../services/api'
import { EditLivreForm } from '../components/livre/EditLivreForm';

// _______________________________  components   _______________________________

const PageVendeur = () => {

    const [session, setSession] = useLocalStorage("session", null);

    const [isAnnonceEdit, setIsCAnnonceEdit] = useState(false);
    const [annonceEdit, setCAnnonceEdit] = useState({});

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

    const handleEdit = (annonce)=>{
        setCAnnonceEdit(annonce)
        setIsCAnnonceEdit(true)
    }

    return(
        <>
            <FixedHeader />
            <Body content={
                <>
                    {
                        isAnnonceEdit? (
                            <EditLivreForm fetchAnnoncesList={fetchAnnoncesList} setIsCAnnonceEdit={setIsCAnnonceEdit} annonce={annonceEdit} />
                        ):(
                            <>
                                <AjouterLivreForm fetchAnnoncesList={fetchAnnoncesList} setCAnnonceEdit={setCAnnonceEdit} />
                                <VosLivres annoncesList={annoncesList} fetchAnnoncesList={fetchAnnoncesList} handleEdit={handleEdit} />
                            </>
                        )
                    }
                </>
            } />
            <FixedFooter />
        </>
    )
}

export default PageVendeur;