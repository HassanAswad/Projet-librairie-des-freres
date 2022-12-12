import React from 'react'
import { LivreDetailModel } from './LivreDetailModel'
import BookImage from'../../assets/images/bookimage.png'

export const Livre = ({annonce}) => {
    return (
        <>
        <div className="card" >
            {/* <img src={BookImage} className="card-img-top" alt={annonce.titre} /> */}
            <img src={`uploads/${annonce?.urlPhotoLivre}`} className="card-img-top" alt={annonce.titre} />
            <div className="card-body">
                <span className="card-title mb-0 ps-2 h4">{annonce.titre}</span>
                <p className="card-text mb-0 ps-2 h6"><small className="text-muted">{annonce.auteur}</small></p>
                <p className="card-text text-primary"><strong>{annonce.prix}$</strong></p>
                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#LivreDetailModel${annonce.id}`}>View details</a>
            </div>
        </div>
        <LivreDetailModel annonce={annonce} /> 
        </>
    )
}
