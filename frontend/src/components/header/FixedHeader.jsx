import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import './FixedHeader.css';


import { BsBookHalf } from "@react-icons/all-files/bs/BsBookHalf";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { IoMdMail } from "@react-icons/all-files/io/IoMdMail";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";


export const FixedHeader = ({session}) => {

    const navigate = useNavigate()

    const [word, setWord] = useState("")

    const handleSearch = (event)=> {
        // console.log(event)
        event?.preventDefault()
        if(event?.which == 13 || event?.keyCode == 13 || event.type==="click"){
            navigate("/", { state: { word: word }, replace: false });
        }
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light_ navbar-light bg-warning_">
            <div className="container-fluid">
                <Link className="navbar-brand" to={session?.idAdmin?'/admin':'/'}>
                    <span className="btn btn-light btn-sm" >
                        <BsBookHalf />
                    </span>
                    <span className="mb-0 ps-2 h4">Librairie des frères</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu />
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-start" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-3 pe-3 d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        |
                        <li className="nav-item">
                            <Link className="nav-link active" to="/vendeur">Sell</Link>
                        </li>
                    </ul>

                    <div className=" d-grid gap-2 mx-auto w-100" role="search">
                        <div className="input-group mb-0">
                            <input type="text" value={word} onKeyUp={(e)=>handleSearch(e)} onChange={(e)=>setWord(e.target.value)} className="form-control" placeholder="search product" aria-label="search product" aria-describedby="search-button" />
                            <button className="btn btn-light" type="button" onClick={e=> handleSearch(e)} id="search-button"><BsSearch /></button>
                        </div>
                    </div>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/favorisation">
                                <button type="button" className="btn btn-light"><AiFillHeart /> WishList</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/messages">
                                <button type="button" className="btn btn-light"><IoMdMail /> Messages</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/login">
                                <button type="button" className="btn btn-light"><FaUserAlt /> Login/Register</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
// <Outlet />