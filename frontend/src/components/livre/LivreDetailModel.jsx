import React from 'react'
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"
import { BsFillExclamationCircleFill } from "@react-icons/all-files/bs/BsFillExclamationCircleFill"
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";

import BookImage from'../../assets/images/bookimage.png'


export const LivreDetailModel = ({id, titre, auteur, prix, date, etat, adresse, description}) => {
    return (
        <div className="modal fade" id="LivreDetailModel" tabIndex="-1" aria-labelledby="modelLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        {/* <h5 className="modal-title" id="modelLabel">{titre}</h5> */}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
{/* style={{maxWidth: '540px'}} */}
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={BookImage} className="img-fluid rounded-start" alt="..." />
                                    <p className="card-text d-flex justify-content-around">
                                        <span className="text-warning_" style={{color: 'darkorange'}}><AiFillStar /> <br/> Evaluate</span>
                                        <span className="text-warning"><AiFillHeart /> <br/> Add to wishlist</span>
                                    </p>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{titre} <span className="card-text text-primary">{prix}$</span></h5>
                                        
                                        <small className="card-text text-muted">{auteur}</small><br/> 
                                        <small className="card-text text-muted">{date}</small><br/> 
                                        <small className="card-text text-muted">{etat}</small>
                                        <p className="card-text"><MdLocationOn /> {adresse}</p>
                                        <span className="card-text text-start">Description : <br/> 
                                            {}
                                        </span>
                                        <div className="mb-3">
                                            <label htmlFor="input-message" className="form-label d-flex justify-content-start">Message</label>
                                            <textarea className="form-control" id="input-message" rows="3"></textarea>
                                        </div>
                                        <div className="d-grid gap-2 col-12 mx-auto">
                                            <button className="btn btn-primary" type="button">Send Message</button>
                                        </div>
                                        <p className="card-text d-flex justify-content-around">
                                            <span className="text-danger"><BsFillExclamationCircleFill /> Report ad</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-warning">Save</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
