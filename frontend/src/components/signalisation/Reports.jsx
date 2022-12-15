import React, { useEffect, useState } from 'react'
import { api } from '../../services/api';


export const Reports = ({session}) => {

    const [signalisationsList, setSignalisationsList] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    
    const fetchSignalisationsList = ()=>{
        api.getSignalisations(session.id).then(signalisations=>{
            if(signalisations!=null){
                console.log(signalisations)
                setSignalisationsList(signalisations)
            }
        })
    }


    const activatePublisher = (membre)=>{
        // console.log(membre)
        fetch(`/membre/activate/${membre.id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let m = await response.json()
                m?.id && fetchSignalisationsList()
                alert("publisher reactivated successfully!")
            } catch (error) {}
        })
        .catch((err) => {});
    }

    const disactivatePublisher = (membre)=>{
        // console.log(membre)
        fetch(`/membre/desactivate/${membre.id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let m = await response.json()
                m?.id && fetchSignalisationsList()
                alert("publisher disactivated successfully!")
            } catch (error) {}
        })
        .catch((err) => {});
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
                                                    <button className="btn btn-success m-1" onClick={(e)=>{setShowDetails(false); activatePublisher(annonce.membre)} } >Keep</button>
                                                    <button className="btn btn-danger m-1" onClick={(e)=>{}} >Disactivate ad</button>
                                                    <button className="btn btn-danger m-1" onClick={(e)=>disactivatePublisher(annonce.membre)} >Disactivate publisher</button>
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
