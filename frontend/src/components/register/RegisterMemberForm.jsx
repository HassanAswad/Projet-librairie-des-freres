import React from 'react'
import { ImUpload3 } from "@react-icons/all-files/im/ImUpload3";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

export const RegisterMemberForm = () => {

    const [session, setSession] = useLocalStorage("session", null);
    const retypePasswordRef = useRef();
    const navigate = useNavigate()

    const [form, setForm]= useState({
        "email": "test01@mail.com",
        "motDePasse": "1111",
        "prenom": "prenom 01",
        "nom": "nom 01",
        "pays": "Canada",
        "ville": "ville 01",
        "adresse": "addr 01",
        "numeroTelephone": "010101010",
        "province": "province 01",
        "codePostal": "01111",
        "urlPhotoProfile": "",
        "etat": "ACTIVE"
    })



    const handleSubmit = (event)=>{
        event.preventDefault()
        if(retypePasswordRef.current.value!==form.motDePasse){
            alert("two passwords are not the same!")
            return
        }
        console.log(form)
        fetch(`/membre/add/1`,{
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            console.log(response)
            try {
                let utilisateur = await response.json()
                console.log(utilisateur)
                if(utilisateur!=null){
                    setSession(utilisateur)
                    alert("signup successfully !")
                    navigate('/')
                }
            } catch (error) {
                alert(error)
            }
            })
            .catch((err) => {
                throw new Error("catch throw " + err);
            });
    }

    return (
        <div className="container text-center mt-4 mb-4" >
            <form onSubmit={handleSubmit}>
                <div className="row mt-4 mb-5">
                    <div className="col">
                        <span className="mb-0 ps-2 h4"><strong>Register now as a <span className="text-primary" >Member</span></strong></span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text"  value={form.nom} onChange={(e)=> setForm({...form, nom: e.target.value})} className="form-control form-control-sm" id="input-firstname" placeholder="first name" />
                            <label htmlFor="input-firstname">first name</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.prenom} onChange={(e)=> setForm({...form, prenom: e.target.value})} className="form-control" id="input-lastname" placeholder="last name" />
                            <label htmlFor="input-lastname">last name</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="email" value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} className="form-control" id="input-email" placeholder="email" />
                            <label htmlFor="input-email">email</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="password" value={form.motDePasse} onChange={(e)=> setForm({...form, motDePasse: e.target.value})} className="form-control" id="input-password" placeholder="password" />
                                    <label htmlFor="input-password">password</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="password" ref={retypePasswordRef} className="form-control" id="input-password-confirm" placeholder="confirm password" />
                                    <label htmlFor="input-password-confirm">confirm password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-2"><p className="text-primary text-start fw-bold" >Address</p></div>

                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.adresse} onChange={(e)=> setForm({...form, adresse: e.target.value})} className="form-control form-control-sm" id="input-address" placeholder="Address" />
                            <label htmlFor="input-address">Address</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.ville} onChange={(e)=> setForm({...form, ville: e.target.value})} className="form-control" id="input-city" placeholder="City" />
                            <label htmlFor="input-city">City</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.province} onChange={(e)=> setForm({...form, province: e.target.value})} className="form-control form-control-sm" id="input-province" placeholder="Province" />
                            <label htmlFor="input-province">Province</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.codePostal} onChange={(e)=> setForm({...form, codePostal: e.target.value})} className="form-control form-control-sm" id="input-zipcode" placeholder="zip code" />
                            <label htmlFor="input-zipcode">zip code</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.pays} onChange={(e)=> setForm({...form, pays: e.target.value})} className="form-control form-control-sm" id="input-country" placeholder="Country" />
                            <label htmlFor="input-country">Country</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.numeroTelephone} onChange={(e)=> setForm({...form, numeroTelephone: e.target.value})} className="form-control form-control-sm" id="input-phone-number" placeholder="Phone Number" />
                            <label htmlFor="input-phone-number">Phone Number</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="input-image" ><ImUpload3 /> Upload image</label>
                        <input type="file" value={form.urlPhotoProfile} onChange={(e)=> setForm({...form, urlPhotoProfile: e.target.value})} className="form-control" id="input-image" placeholder="Upload image" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-12 mx-auto">
                        <input type="submit" className="btn btn-primary" value="Register now" />
                    </div>
                </div>
                <div className="row mt-4">
                    <p>
                        you have an account?
                        <Link className="link-dark text-decoration-none text-primary ps-3" to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
