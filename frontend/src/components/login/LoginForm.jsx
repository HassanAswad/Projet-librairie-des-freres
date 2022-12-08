import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = () => {

    const [form, setForm] = useState({"email": "", "motDePasse": ""}) 

    const handleClick = ()=>{
        fetch(`/utilisateur/login`,{
            method: 'POST',
            body: JSON.stringify({"email": "testemail_01@mail.com", "motDePasse": "testpassword_01"}),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json() )
            .then(data => {
                console.log(data)
            })
            .catch((err) => {
                throw new Error("catch throw " + err);
            });
    }

    return (
        <div className="container text-center mt-4 mb-4" >
            <div className="row mt-4">
                <div className="col">
                    <span className="mb-0 ps-2 h4"><strong>Login</strong></span>
                </div>
            </div>
            <form>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="email" value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} className="form-control" id="input-email" placeholder="Enter email" />
                            <label htmlFor="input-email">Enter email</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="password" value={form.motDePasse} onChange={(e)=> setForm({...form, motDePasse: e.target.value})} className="form-control" id="input-password" placeholder="Enter password" />
                            <label htmlFor="input-password">Enter password</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <input type="button" className="btn btn-primary" value="Login" onClick={handleClick} />
                    </div>
                </div>
                <div className="row mt-4">
                    <p>
                        don't have an account?
                        <Link className="link-dark text-decoration-none text-primary ps-3" to="/register">
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
