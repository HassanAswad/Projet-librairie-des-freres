import React from 'react'
import { ImUpload3 } from "@react-icons/all-files/im/ImUpload3";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


export const RegisterMemberForm = () => {

    const [form, setForm]= useState({
        "idUtilisateur": 4,
        "email": "testemail04@mail.com",
        "motDePasse": "password 04",
        "prenom": "prenom 04",
        "nom": "nom 04",
        "pays": "algeria",
        "ville": "ville 04",
        "adresse": "addr 04",
        "numeroTelephone": "0403030303",
        "province": "province 04",
        "codePostal": "03334",
        "urlPhotoProfile": "img/04.jpg",
        "etat": "ACTIVE",
        "admin": {
            "admin_id": 1
        }
    })



    const handleClick = ()=>{
        // 
        fetch(`/membre/add`,{
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json() )
            .then(data => {
                console.log(data)
            })
            .catch((err) => {
                throw new Error("catch throw " + err);
            });

            // console.log(form)
    }

    return (
        <div className="container text-center mt-4 mb-4" >
            <div>
                <div className="row mt-4 mb-5">
                    <div className="col">
                        <span className="mb-0 ps-2 h4"><strong>Register now as a <span className="text-primary" >Member</span></strong></span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" id="input-firstname" placeholder="first name" />
                            <label htmlFor="input-firstname">first name</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="input-lastname" placeholder="last name" />
                            <label htmlFor="input-lastname">last name</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="input-email" placeholder="email" />
                            <label htmlFor="input-email">email</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="input-password" placeholder="password" />
                                    <label htmlFor="input-password">password</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="input-password-confirm" placeholder="confirm password" />
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
                            <input type="text" className="form-control form-control-sm" id="input-address" placeholder="Address" />
                            <label htmlFor="input-address">Address</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="input-city" placeholder="City" />
                            <label htmlFor="input-city">City</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" id="input-province" placeholder="Province" />
                            <label htmlFor="input-province">Province</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" id="input-zipcode" placeholder="zip code" />
                            <label htmlFor="input-zipcode">zip code</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" id="input-country" placeholder="Country" />
                            <label htmlFor="input-country">Country</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" id="input-phone-number" placeholder="Phone Number" />
                            <label htmlFor="input-phone-number">Phone Number</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="input-image" ><ImUpload3 /> Upload image</label>
                        <input type="file" className="form-control" id="input-image" placeholder="Upload image" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-12 mx-auto">
                        <button className="btn btn-primary" onClick={handleClick} >Register now</button>
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
            </div>
        </div>
    )
}
