import React, { useEffect, useState } from 'react'
import { ImUpload3 } from "@react-icons/all-files/im/ImUpload3";
import './AjouterLivreForm.css'
import { useRef } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { helper } from '../../helpers/index'
import { api } from '../../services/api'

export const AjouterLivreForm = ({fetchAnnoncesList}) => {

    const [session, setSession] = useLocalStorage("session", null);
    const navigate = useNavigate()
    
    const [addForm, setAddForm] = useState({
        "titre": "The Pragmatic",
        "auteur": "Andraw hont",
        "prix": 24.25,
        "descriptionAnnonce": "Read this book, and you’ll learn how to: Fight software rot Learn continuously Avoid the trap of duplicating knowledge Write fexible, dynamic, and adaptable code Harness the power of basic tools Avoid programming by coincidence Learn ...",
        "conditionAnnonce": "COMME_NEUF",
        "date": new Date().toISOString().split('T')[0],
        "urlPhotoLivre": "",
        "etat": "ACTIVE",
        "ajouterFavorie": 0
    });
    const [categorie, setCategorie] = useState("");

    const handleSubmitAdd = (event)=>{
        event.preventDefault()
        // console.log(addForm)
        fetch(`/annonce/add/${categorie}/${session.id}/${1}`,{
            method: 'POST',
            body: JSON.stringify(addForm),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let data = await response.json()
                // setAddForm()
                const file = inputFile.current.files[0]
                api.uploadImage(file).then((res)=>{
                    fetchAnnoncesList()
                    alert("annonce published successfully !")
                }) 
                
            } catch (error) {
                alert(error)
            }
        })
        .catch((err) => {
            console.log(err)
        });
    }

    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        api.fetchCategories().then(data=>{
            if(data!=null){
                data?.length && setCategorie(data[0].id)
                setCategoryList(data)
            }
        }).catch(err=> alert(err))
    }, [])

    const inputFile = useRef()
    const [fileImage, setFileImage] = useState('')

    const handlefileChange = (event)=>{
        event.preventDefault()
        const file = inputFile.current.files[0]
        setAddForm({...addForm, urlPhotoLivre: file.name })
        helper.fileToBase64(file).then((base64)=>{
            setFileImage(base64)
        })
    }


    return (
        <div className="container ajouter-livre-form mt-4 mb-4" >
            <div className="row mt-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>Publish a book</strong></span>
                </div>
            </div>
            <form className="p-2 mt-4 mb-5" onSubmit={handleSubmitAdd} >
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-3 mx-auto vendeur-image d-flex justify-content-end" >
                        <div className="row mt-2 mb-2 ">
                            <div className="input-group mb-3 " >
                                <label className="input-group-text" htmlFor="input-vendeur-image" style={{backgroundImage:`url(${fileImage})`}} ><ImUpload3 /> <span>Upload image</span></label>
                                <input type="file" ref={inputFile} onChange={(e)=> handlefileChange(e) } className="form-control" id="input-vendeur-image" placeholder="Upload image" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" />
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-9 mx-auto">
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="text" value={addForm.titre} onChange={(e)=> setAddForm({...addForm, titre: e.target.value })} className="form-control" id="input-titre" placeholder="Title" />
                                    <label htmlFor="input-titre">Title</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="text" value={addForm.auteur} onChange={(e)=> setAddForm({...addForm, auteur: e.target.value })}  className="form-control" id="input-auteur" placeholder="Author" />
                                    <label htmlFor="input-auteur">Author</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating">
                                    <select className="form-select" value={categorie} onChange={(e)=> setCategorie(e.target.value)} id="input-categorie" aria-label="category">
                                        {
                                            categoryList.map((c, i) =>
                                                <option key={c.id} value={c.id}>{c.libelle}</option>
                                            )
                                        }
                                    </select>
                                    <label htmlFor="input-categorie">Category</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="text" value={addForm.prix} onChange={(e)=> setAddForm({...addForm, prix: e.target.value })}  min="0" className="form-control" id="input-prix" placeholder="Price" />
                                    <label htmlFor="input-prix">Price</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating">
                                    <textarea className="form-control" value={addForm.descriptionAnnonce} onChange={(e)=> setAddForm({...addForm, descriptionAnnonce: e.target.value })} placeholder="Description" id="input-description" style={{height: '100px'}}></textarea>
                                    <label htmlFor="input-description">Description</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="row mt-0">
                                    <div className="d-grid gap-2 col-12 mx-auto">
                                        {/* <div className="form-floating mb-3">
                                            <input type="text" value={addForm.conditionAnnonce} onChange={(e)=> setAddForm({...addForm, conditionAnnonce: e.target.value })} className="form-control" id="input-condition" placeholder="Condition" />
                                            <label htmlFor="input-condition">Condition</label>
                                        </div> */}
                                        <div className="form-floating">
                                            <select className="form-select" value={addForm.conditionAnnonce} onChange={(e)=> setAddForm({...addForm, conditionAnnonce: e.target.value })} id="input-categorie" aria-label="category">
                                                <option value="NEUF">neuf</option>
                                                <option value="COMME_NEUF">comme neuf</option>
                                                <option value="BONNE_ETAT">bonne état</option>
                                                <option value="USAGEE">usagée</option>
                                            </select>
                                            <label htmlFor="input-categorie">Condition</label>
                                        </div>
                                    </div>
                                {/* </div>
                                <div className="row mt-0"> */}
                                    <div className="d-grid gap-2 col-12 mx-auto d-flex justify-content-end">
                                        <input type="submit" className="btn btn-success" value="Publish" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
