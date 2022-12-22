import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../services/fetch';
import { useLocalStorage } from './useLocalStorage';

export const useSession = (routes) => {

    const [session, setSession] = useLocalStorage("session", null);
    const navigate = useNavigate()

    const isConnected = ()=> session!=null && session?.id
    const isAdmin = ()=> isConnected() && session?.idAdmin
    const isMembre = ()=> isConnected() && !session?.idAdmin
    
    const handleRedirect = ()=> {
        (!isConnected() && navigate(routes.disconnected)) ||
        (isAdmin() && navigate(routes.connected.admin)) ||
        (isMembre() && navigate(routes.connected.membre));
        // (!isConnected() && navigate(`/`));
    }

    const fetchSessionData = ()=>{
        (isAdmin() || isMembre()) && api.getUtilisateur(session.id).then(utilisateur=> {
            // console.log(utilisateur)
            setSession(utilisateur);
            handleRedirect()
        }).then(err=> {})
    }

    useEffect(()=>{
        fetchSessionData()
    },[])

    return [session, setSession]
}
