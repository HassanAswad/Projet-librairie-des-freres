import React from 'react'
import './CategoryForm.css'


export const CategoryForm = () => {
    return (
        <div className="container category-form mt-4 mb-4 pb-4" style={{background: '#fff'}} >

            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>Manage category</strong></span>
                </div>
            </div>
            <div className="row m-2 manage-category">
            <div className="d-grid gap-2 col-12 mx-auto ">
                <form className="ps-2 pe-2 mt-4 mb-0">
                    <div className="mb-3">
                        <label htmlFor="input-add-category" className="form-label d-flex justify-content-start">Add Category</label>
                        <div className="row">
                            <div className="col-9 mx-auto" >
                                <input type="text" className="form-control" id="input-add-category" />
                            </div>
                            <div className="col-3 mx-auto" >
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success">Add</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </form>
                <form className="ps-2 pe-2 mt-4 mb-1">
                    <div className="mb-3">
                        <label htmlFor="input-modify-category" className="form-label d-flex justify-content-start">Modify Category</label>
                        <div className="row">
                            <div className="col-9 mx-auto" >
                                {/* <input type="text" className="form-control" id="input-modify-category" /> */}
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="input-titre" placeholder="Titre" />
                                    <label htmlFor="input-titre">Category name</label>
                                </div>
                                <div className="mt-4">
                                    <select className="form-select">
                                        <option defaultValue >select a category ...</option>
                                        <option value="1">Computer science</option>
                                        <option value="2">Littérature</option>
                                        <option value="3">Geography</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3 mx-auto" >
                                <div className="d-grid gap-2">
                                    <button className="btn btn-warning mt-5">Modify</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form className="ps-2 pe-2 mt-0 mb-1">
                    <div className="mb-3">
                        <label htmlFor="input-delete-category" className="form-label d-flex justify-content-start">Delete Category</label>
                        <div className="row">
                            <div className="col-9 mx-auto" >
                            <select className="form-select">
                                <option defaultValue >select a category ...</option>
                                <option value="1">Computer science</option>
                                <option value="2">Littérature</option>
                                <option value="3">Geography</option>
                            </select>
                            </div>
                            <div className="col-3 mx-auto" >
                                <div className="d-grid gap-2">
                                    <button className="btn btn-danger">Desactivate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>

        </div>
    )
}
