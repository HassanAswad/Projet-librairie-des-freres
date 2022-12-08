import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './FixedHeader.css';


import { BsBookHalf } from "@react-icons/all-files/bs/BsBookHalf";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { IoMdMail } from "@react-icons/all-files/io/IoMdMail";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";



export const FixedHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light_ navbar-light bg-warning_">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
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

                    <form className=" d-grid gap-2 mx-auto w-100" role="search">
                        <div className="input-group mb-0">
                            <input type="text" className="form-control" placeholder="search product" aria-label="search product" aria-describedby="search-button" />
                            <button className="btn btn-light" type="button" id="search-button"><BsSearch /></button>
                        </div>
                    </form>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
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