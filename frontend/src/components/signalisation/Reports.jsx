import React, { useEffect, useState } from 'react'
import { api } from '../../services/fetch';


export const Reports = ({session}) => {

    const [signalisationsList, setSignalisationsList] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    
    const fetchSignalisationsList = ()=>{
        api.getSignalisations(session.id).then(signalisations=>{
            signalisations!=null && setSignalisationsList(signalisations)
        })
    }

    const handleKeep = (signalisation)=>{
        if (window.confirm("Are you sure you want to reactivate?")) {
            const annonce = signalisation.annonce
            const membre = signalisation.membre
            deleteSignalisation(signalisation.id)
            activatePublisher(annonce.membre.id)
            activateAnnonce(annonce.id)
            setShowDetails(false)
            fetchSignalisationsList()
            alert("reactivated successfully!")
        }
    }


    const handleDesactivatePublisher = (id)=>{
        if (window.confirm("Are you sure you want to disactivate?")) {
            api.desactivatePublisher(id).then(m=>{
                m?.id && fetchSignalisationsList()
                alert("publisher disactivated successfully!")
                // setShowDetails(false)
            }).catch((err) => console.log(err)); 
        }
    }

    const handleDesactivateAnnonce = (id) => {
        if (window.confirm("Are you sure you want to disactivate?")) {
            api.desactivateAnnonce(id).then((res)=>{
                fetchSignalisationsList()
                alert("annonce disactivated successfully!")
                // setShowDetails(false)
            }).catch(err=> console.log(err))
        }
    }


    const deleteSignalisation = (id)=>{
        api.deleteSignalisation(id).then(m=>{
            // m?.id && fetchSignalisationsList()
            // alert("Signalisation deleted successfully!")
        }).catch((err) => console.log(err)); 
    }


    const activatePublisher = (id)=>{
        // if (window.confirm("Are you sure you want to reactivate?")) {
            api.activatePublisher(id).then(m=>{
                // m?.id && fetchSignalisationsList()
                // alert("publisher reactivated successfully!")
            }).catch((err) => console.log(err)); 
        // }
    }
    
    const activateAnnonce = (id) => {
        // if (window.confirm("Are you sure you want to reactivate?")) {
            api.activateAnnonce(id).then((res)=>{
                // fetchSignalisationsList()
                // alert("annonce reactivated successfully!")
            }).catch(err=> console.log(err))
        // }
    }


    useEffect(()=>{
        fetchSignalisationsList()
    }, [])

    return (
        <div className="container category-list mt-4 mb-4 pb-4" style={{background: '#fff'}}>
            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>View Report</strong></span>
                </div>
            </div>
            {
                signalisationsList?.length==0 && <div className="col w-100"><h5 className='text-center text-dark'> empty results!</h5></div>
            }
            <table className="table mt-3 mb-5">
                <tbody>
                    {
                        signalisationsList?.map((signalisation, i) =>{
                            const annonce = signalisation.annonce
                            const membre = signalisation.membre
                            return (
                                <tr key={i} className="border border-5 border-light" >
                                    <th valign="middle"  scope="row">{i+1}</th>
                                    <td valign="middle"  ><img src={`uploads/${annonce?.urlPhotoLivre}`} className="card-img-top rounded mx-auto d-block img-fluid" alt={annonce.titre} /></td>
                                    <td valign={showDetails?"top":"middle"}align='left' >
                                        <strong>{`${membre.nom} ${membre.prenom}`}</strong>
                                        {showDetails && (
                                            <div className='row mt-3 text-start'>
                                                <strong>Message</strong>
                                                <p>
                                                    <small className="text-muted">{signalisation.commentaire}</small>
                                                </p>
                                            </div>
                                        )}
                                    </td>
                                    <td valign={showDetails?"top":"middle"} align='left' ><strong>{new Date(signalisation.dateSignaler).toISOString().split('T')[0]}</strong></td>
                                    {
                                    !showDetails &&
                                    <td valign="middle" >
                                        <strong>Message</strong>
                                    </td>
                                    }
                                    <td valign="middle" >
                                        {
                                            !showDetails?(
                                                <button className="btn btn-warning m-1" onClick={(e)=>setShowDetails(true) } >view details</button>
                                            ):(
                                                <div className='row' >
                                                    <button className="btn btn-success m-1" onClick={(e)=>handleKeep(signalisation) } >Keep</button>
                                                    <button className="btn btn-danger m-1" onClick={(e)=>handleDesactivateAnnonce(annonce.id)} >Disactivate ad</button>
                                                    <button className="btn btn-danger m-1" onClick={(e)=>handleDesactivatePublisher(annonce.membre.id)} >Disactivate publisher</button>
                                                </div>
                                            )
                                        }
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
