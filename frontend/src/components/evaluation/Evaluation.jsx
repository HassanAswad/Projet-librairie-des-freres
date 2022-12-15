import React from 'react'
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"
import { MdStars } from "@react-icons/all-files/md/MdStars";

import BookImage from'../../assets/images/bookimage.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { api } from '../../services/api';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './evaluation.css'

const notes = {/*"ZERO":0,*/ "ONE":1, "TWO":2, "THREE":3, "FOUR":4, "FIVE":5};
const notesParse = ()=>{
    let keys = [], values = []
    for(var k in notes) { keys.push(k); values.push(notes[k]); }
    return {keys, values}
} 

export const Evaluation = ({annonce, setOpenedModels}) => {

    const [session, setSession] = useLocalStorage("session", null);

    const [formEvaluation, setFormEvaluation] = useState({
        "dateEvaluation": new Date().toISOString().split('T')[0],
        "commentaire": "", 
        "note": -1, //notesParse().keys[0]
    })

    useEffect(()=>{
        api.findEvaluation(session.id, annonce.id).then(evaluation=>{
            console.log(evaluation)
            evaluation?.note && setFormEvaluation({
                ...formEvaluation,
                // dateEvaluation: evaluation.dateEvaluation,
                commentaire: evaluation.commentaire,
                note: notes[evaluation.note]-1,
            })
        }).catch(err=>{})
    }, [])

    const handleEvaluate = ()=>{
        if(formEvaluation.commentaire==="") {
            alert("please fill the message field !")
            return
        }
        api.evaluateAnnonce(session.id, annonce.id, formEvaluation).then(evaluation=>{
            console.log(evaluation)
            setFormEvaluation({ ...formEvaluation, "commentaire": "", "note": -1 })
            handleClose()
            alert("Eavaluation was sent successfully !")
        }).catch(err=>{})
    }

    const handleClose = ()=>{
        setOpenedModels({detail: false, evaluation: false, report: false})
    }

    const triggerChange = (star)=>{
        // let newNote = ""
        // for(var k in notes) if(notes[k]==star) {newNote = k; break}
        setFormEvaluation({...formEvaluation, note: star })
    }


    return (

        <Modal
            show={true}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <span className="text-warning_" style={{color: 'darkorange'}}><AiFillStar /> Evaluate</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card mb-3" >
                    <div className="card-body">
                        <div className='starts' >
                            {
                                notesParse().values.map((star,i)=>
                                    <div key={i} className={i<=formEvaluation.note? "star selected":"star"} onClick={(e)=> triggerChange(i)}>
                                        <MdStars />
                                    </div>
                                )
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="input-message" className="form-label d-flex justify-content-start">Message</label>
                            <textarea className="form-control" value={formEvaluation.commentaire} onChange={e=>setFormEvaluation({...formEvaluation, commentaire: e.target.value})} rows="3"></textarea>
                        </div>
                        <div className="d-grid gap-2 col-12 mx-auto">
                            <button className="btn btn-primary" type="button" onClick={handleEvaluate}>Evaluate</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    )
}