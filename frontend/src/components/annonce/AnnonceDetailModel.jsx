import React from 'react'
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"
import { BsFillExclamationCircleFill } from "@react-icons/all-files/bs/BsFillExclamationCircleFill"
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart"
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"


import BookImage from'../../assets/images/bookimage.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { api } from '../../services/fetch';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './detailModel.css'

import { helper } from '../../helpers'


export const AnnonceDetailModel = ({session, annonce, setOpenedModels}) => {

    const {id, urlPhotoLivre, titre, auteur, prix, date, conditionAnnonce, descriptionAnnonce, membre} = annonce

    const [formMessage, setFormMessage] = useState({ "contenu": "", "date": new Date().toISOString().split('T')[0] })
    const handleSendMessage = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        if(formMessage.contenu==="") {
            alert("please fill the message field !")
            return
        }
        api.sendMessage(session.id, membre.id, formMessage).then(msg=>{
            setFormMessage({ "contenu": "", "date": "" })
            handleClose()
            alert("message was sent successfully !")
        }).catch(err=>{})
    }


    const handleClose=()=>{
        setOpenedModels({detail: false, evaluation: false, report: false})
    }

    const openEvaluationModel = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        setOpenedModels({detail: false, evaluation: true, report: false})
    }

    const openSignalisationModel = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        setOpenedModels({detail: false, evaluation: false, report: true})
    }

    const handleAddToWishList = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        const formFavorisation = {dateFavorisation : new Date().toISOString().split('T')[0]}
        api.addWishList(session.id, annonce.id, formFavorisation).then(favorisation=>{
            // alert("annonce added to wishlist successfully !")
            getFavorisationState()
        }).catch(err=>{})
    }

    const [favorationState, setFavorationState] = useState({})
    const getFavorisationState = ()=>{
        if(!helper.isAllowed(session)) return
        api.getFavorisation(session.id, annonce.id).then(favorisation=>{
            // console.log(favorisation)
            setFavorationState(favorisation)
        }).catch(err=>{})
    }

    useEffect(()=>{
        session?.id && getFavorisationState()
    }, [])


    return (

        <Modal
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
            {/* <Modal.Title>Modal title</Modal.Title> */}
            </Modal.Header>

            <Modal.Body>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            {/* <img src={BookImage} className="img-fluid rounded-start" alt="..." /> */}
                            <img src={`uploads/${urlPhotoLivre}`} className="img-fluid rounded-start" alt={titre} />
                            <div className="card-text">
                                <div className='row actions d-flex justify-content-around' >
                                    <div className='col-6'>
                                        <p className="text-warning_ text-center" onClick={openEvaluationModel} style={{color: 'darkorange'}}>
                                            <AiFillStar /> <br/> Evaluate
                                        </p>
                                    </div>
                                    <div className='col-6'>
                                        {
                                            favorationState?.membre ?(
                                                <p className="text-success text-center" >
                                                    <AiOutlineCheck /> added
                                                </p>
                                            ):(
                                                <p className="text-warning text-center" onClick={handleAddToWishList}>
                                                    <AiFillHeart /> <br/> Add to wishlist
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{titre} <span className="card-text text-primary">{prix}$</span></h5>
                                
                                <small className="card-text text-muted">{auteur}</small><br/> 
                                <small className="card-text text-muted">{date}</small><br/> 
                                <small className="card-text text-muted">{conditionAnnonce}</small>
                                <p className="card-text"><MdLocationOn /> {`${membre?.adresse}, ${membre?.ville}, ${membre?.pays}`}</p>
                                <span className="card-text text-start">Description : <br/> 
                                    {descriptionAnnonce}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row' >
                                <div className="mb-3">
                                    <label htmlFor="input-message" className="form-label d-flex justify-content-start">Message</label>
                                    <textarea className="form-control" value={formMessage.contenu} onChange={e=>setFormMessage({...formMessage, contenu: e.target.value})} rows="3"></textarea>
                                </div>
                                <div className="d-grid gap-2 col-12 mx-auto">
                                    <button className="btn btn-primary" type="button" onClick={handleSendMessage}>Send Message</button>
                                </div>
                                <div className="card-text actions mt-2">
                                    <p className="text-danger text-center" onClick={openSignalisationModel} ><BsFillExclamationCircleFill /> Report ad</p>
                                </div>
                </div>
            </Modal.Body>
        </Modal>

    )
}
