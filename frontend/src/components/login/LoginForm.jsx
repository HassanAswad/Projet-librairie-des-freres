import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const LoginForm = () => {

    const [form, setForm] = useState({"email": "admin@mail.com", "motDePasse": "admin"}) 

    const [session, setSession] = useLocalStorage("session", null);

    const navigate = useNavigate()

    useEffect(()=>{
        session!=null && setForm({"email": session.email, "motDePasse": session.motDePasse})
    },[])

    const handleSubmit = (event)=>{
        
        event.preventDefault()
        
        fetch(`/utilisateur/login`,{
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            // console.log(response)
            if(!response.ok){
                alert("username or password incorrect !")
                return
            }
            try {
                let utilisateur = await response.json()
                // console.log(utilisateur)
                if(utilisateur!=null){
                    setSession(utilisateur)
                    utilisateur?.idAdmin? navigate('/admin') : navigate('/vendeur')
                }
            } catch (error) {
                alert("username or password incorrect !")
            }
        })
        .catch((err) => {
            // throw new Error("catch throw " + err);
            console.log(err)
        });
    }

    return (
        <div className="container text-center mt-4 mb-4" >
            <div className="row mt-4">
                <div className="col">
                    <span className="mb-0 ps-2 h4"><strong>Login</strong></span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
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
                        <input type="submit" className="btn btn-primary" value="Login" />
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
