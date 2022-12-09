import React from 'react'
import { ImUpload3 } from "@react-icons/all-files/im/ImUpload3";
import './AjouterLivreForm.css'

export const AjouterLivreForm = () => {
    return (
        <div className="container ajouter-livre-form mt-4 mb-4" >
            <div className="row mt-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>Publish a book</strong></span>
                </div>
            </div>
            <form className="p-2 mt-4 mb-5">
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-3 mx-auto vendeur-image d-flex justify-content-end" >
                        <div className="row mt-2 mb-2 ">
                            <div className="input-group mb-3 ">
                                <label className="input-group-text" htmlFor="input-vendeur-image" ><ImUpload3 /> <span>Upload image</span></label>
                                <input type="file" className="form-control" id="input-vendeur-image" placeholder="Upload image" />
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-9 mx-auto">
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="input-titre" placeholder="Title" />
                                    <label htmlFor="input-titre">Title</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="input-auteur" placeholder="Author" />
                                    <label htmlFor="input-auteur">Author</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating">
                                    <select className="form-select" id="input-categorie" aria-label="category">
                                        <option defaultValue>select category ...</option>
                                        <option value="1">Computer science</option>
                                        <option value="2">Littérature</option>
                                        <option value="3">Geography</option>
                                    </select>
                                    <label htmlFor="input-categorie">Category</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="number" min="0" className="form-control" id="input-prix" placeholder="Price" />
                                    <label htmlFor="input-prix">Price</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Description" id="input-description" style={{height: '100px'}}></textarea>
                                    <label htmlFor="input-description">Description</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="row mt-0">
                                    <div className="d-grid gap-2 col-12 mx-auto">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="input-condition" placeholder="Condition" />
                                            <label htmlFor="input-condition">Condition</label>
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
