import React from 'react'
import BookImage from'../../assets/images/bookimage.png'

export const Annonce = ({annonce, setOpenedModels, setSelectedAnnonce}) => {

    const openDetailModel = ()=>{
        setSelectedAnnonce(annonce)
        setOpenedModels({detail: true, evaluation: false, report: false})
    }
    return (
        <div className="card" style={{height: '100%'}} >
            {/* <img src={BookImage} className="card-img-top" alt={annonce.titre} /> */}
            <img src={`uploads/${annonce?.urlPhotoLivre}`} className="card-img-top" alt={annonce.titre} />
            <div className="card-body d-flex justify-content-end align-center flex-column" style={{height: '100%'}}>
                <span className="card-title mb-0 ps-2 h4">{annonce.titre}</span>
                <p className="card-text mb-0 ps-2 h6"><small className="text-muted">{annonce.auteur}</small></p>
                <p className="card-text text-primary"><strong>{annonce.prix}$</strong></p>
                <a href="#" className="btn btn-primary" onClick={openDetailModel} >View details</a>
            </div>
        </div>
    )
}
