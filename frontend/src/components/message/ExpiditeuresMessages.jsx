import React, { useState } from 'react'
import BookImage from'../../assets/images/bookimage.png'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineContacts } from "@react-icons/all-files/ai/AiOutlineContacts";
import { useEffect } from 'react';
import { helper } from '../../helpers';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { api } from '../../services/api';
import { Messages } from './Messages';

export const ExpiditeuresMessages = () => {
    
    const [session, setSession] = useLocalStorage("session", null);
    const [expediteursList, setExpediteursList] = useState([])
    const [syncMessages, setSyncMessages] = useState(0)
    const [lastMessage, setLastMessage] = useState(0)


    useEffect(()=>{
        api.getExpiditeurs(session.id).then(expediteurs=>{
            setExpediteursList(expediteurs)
        }).catch(err=>alert(err))
    }, [lastMessage])


    let timeout
    useEffect(()=>{
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            api.syncMessages(session.id).then(length=>{
                length > lastMessage && setLastMessage(length)
                setSyncMessages(syncMessages+1)
                // console.log(length)
            }).catch(err=>{})
        },4000);
        
        return () => clearTimeout(timeout)
    },[syncMessages])


    return (
            <div className="container messages-list mt-4 mb-4">
                <div className="row mt-4 mb-4">
                    <div className="col d-flex justify-content-center flex-column">
                        <p className="mb-0 ps-2 h4"><strong><AiOutlineMail /> Message</strong></p>
                        <div className="ms-5 me-5">
                            <div className="accordion accordion-flush mt-5 mb-5" >
                                {
                                    expediteursList?.length==0 && <div className="col w-100"><h5 className='text-center text-dark'> empty results!</h5></div>
                                }
                                    {
                                        expediteursList.map((msg, i) =>{
                                            return (
                                                <div className="accordion-item" key={i} >
                                                    <h2 className="accordion-header" id="flush-headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${i}`} aria-expanded="false" aria-controls={`flush-collapseOne${i}`}>
                                                        <div className="d-flex justify-content-between w-100">
                                                            <div className="p-2 bd-highlight" > <AiOutlineContacts /> </div>
                                                            <div className="p-2 bd-highlight" >{`${msg.expediteur.nom} ${msg.expediteur.prenom}`}</div>
                                                            <div className="p-2 bd-highlight" >{new Date(msg.date).toISOString().split('T')[0]}</div>
                                                        </div>
                                                    </button>
                                                    </h2>
                                                    <div id={`flush-collapseOne${i}`} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            
                                                            <Messages expediteur={session.id} receveur={msg.expediteur.id} lastMessage={lastMessage} />

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                            
                                        )
                                    }
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    )
}
