import React from 'react'
import './FixedFooter.css'

export const FixedFooter = () => {
    return (
        <nav className="navbar footer fixed-bottom_ pt-5">
            <div className="container-fluid">
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <p className="h6"><strong>Quick Links</strong></p>
                            <ul className="list-group_">
                                <li className="list-group-item"><small>Computer Science</small></li>
                                <li className="list-group-item"><small>Littérature</small></li>
                                <li className="list-group-item"><small>Geography</small></li>
                            </ul>
                        </div>
                        <div className="col">
                            <p className="h6"><strong>Follow Us</strong></p>
                            <ul className="list-group_">
                                <li className="list-group-item"><small>Facebook</small></li>
                                <li className="list-group-item"><small>Twitter</small></li>
                                <li className="list-group-item"><small>Instagram</small></li>
                            </ul>
                        </div>
                        <div className="col">
                            <p className="h6"><strong>NewsLetter</strong></p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Subscribe For Latest Updates</label>
                                    <input type="email" className="form-control  form-control-sm" id="exampleFormControlInput1" placeholder="" />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-light btn-sm mb-3">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
