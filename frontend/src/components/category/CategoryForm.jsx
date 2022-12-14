import React from 'react'
import './CategoryForm.css'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/fetch';

export const CategoryForm = ({session, categoryList, fetchCategoryList}) => {


    const [addForm, setAddForm] = useState({"libelle": ""});
    const handleSubmitAdd = (event)=>{
        event.preventDefault()
        api.addCategorie(addForm).then(res=>{
            setAddForm({libelle: ""})
            fetchCategoryList()
            alert("category added successfully !")
        }).catch(err=> console.log(err))
    }


    const [updateForm, setUpdateForm] = useState({"id": categoryList?.length>0? categoryList[0].id: -1, "libelle": ""});
    const handleSubmitUpdate = (event)=>{
        event.preventDefault()
        api.editCategorie(updateForm).then(res=>{
            setUpdateForm({...updateForm, "libelle": ""})
            fetchCategoryList()
            alert("category updated successfully !")
        }).catch(err=>console.log(err))
    }


    const [deleteForm, setDeleteForm] = useState({"id": categoryList?.length>0? categoryList[0].id: -1});
    const handleSubmitDelete = (event)=>{
        event.preventDefault()
        api.deleteCategorie(deleteForm).then(res=>{
            fetchCategoryList()
            alert("category deleted successfully !")
        }).catch(err=> console.log(err))
    }

    useEffect(()=>{
        setUpdateForm({...updateForm, id: categoryList?.length>0? categoryList[0].id: -1})
        setDeleteForm({...deleteForm, id: categoryList?.length>0? categoryList[0].id: -1})
    }, [categoryList])

    return (
        <div className="container category-form mt-4 mb-4 pb-4" style={{background: '#fff'}} >

            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>Manage category</strong></span>
                </div>
            </div>
            <div className="row m-2 manage-category">
            <div className="d-grid gap-2 col-12 mx-auto ">
                <form className="ps-2 pe-2 mt-4 mb-0"  onSubmit={handleSubmitAdd} >
                    <div className="mb-3">
                        <label htmlFor="input-add-category" className="form-label d-flex justify-content-start">Add Category</label>
                        <div className="row">
                            <div className="col-9 mx-auto" >
                                <input type="text" value={addForm.libelle} onChange={(e)=> setAddForm({...addForm, libelle: e.target.value})} className="form-control" id="input-add-category" />
                            </div>
                            <div className="col-3 mx-auto" >
                                <div className="d-grid gap-2">
                                    <input type="submit" className="btn btn-success" value="Add" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </form>
                <form className="ps-2 pe-2 mt-4 mb-1" onSubmit={handleSubmitUpdate} >
                    <div className="mb-3">
                        <label htmlFor="input-modify-category" className="form-label d-flex justify-content-start">Modify Category</label>
                        <div className="row">
                            <div className="col-9 mx-auto" >
                                {/* <input type="text" className="form-control" id="input-modify-category" /> */}
                                <div className="form-floating mb-3">
                                    <input type="text" value={updateForm.libelle} onChange={(e)=> setUpdateForm({...updateForm, libelle: e.target.value})} className="form-control" id="input-titre" placeholder="Titre" />
                                    <label htmlFor="input-titre">Category name</label>
                                </div>
                                <div className="mt-4">
                                    <select className="form-select" value={updateForm.id} onChange={(e)=> setUpdateForm({...updateForm, id: e.target.value})}>
                                        {
                                            categoryList.map((c, i) =>
                                                <option key={c.id} value={c.id}>{c.libelle}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-3 mx-auto" >
                                <div className="d-grid gap-2">
                                    <input type="submit" className="btn btn-warning mt-5" value="Modify" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form className="ps-2 pe-2 mt-0 mb-1" onSubmit={handleSubmitDelete} >
                    <div className="mb-3">
                        <label htmlFor="input-delete-category" className="form-label d-flex justify-content-start">Delete Category</label>
                        <div className="row">
                            <div className="col-9 mx-auto" >
                            <select className="form-select" value={deleteForm.id} onChange={(e)=> setDeleteForm({...deleteForm, id: e.target.value})}>
                                {
                                    categoryList.map((c, i) =>
                                        <option key={c.id} value={c.id}>{c.libelle}</option>
                                    )
                                }
                            </select>
                            </div>
                            <div className="col-3 mx-auto" >
                                <div className="d-grid gap-2">
                                    <input type="submit" className="btn btn-danger" value="Desactivate" />
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
