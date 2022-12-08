import React from 'react'
import BookImage from'../../assets/images/bookimage.png'
import { LivreDetailModel } from './LivreDetailModel'

export const ListeLivres = () => {
    return (
        <div className="container text-center mt-4 mb-4" >
            <div className="row mt-0">
                <div className="col">
                    <span className="mb-0 ps-2 h4"><strong>Shop by Category</strong></span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <a href="#" className="link-dark text-decoration-none">Computer science</a> <span className="p-3" >|</span>
                    <a href="#" className="link-dark text-decoration-none">Littérature</a> <span className="p-3" >|</span>
                    <a href="#" className="link-dark text-decoration-none">Geography</a>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">

                {
                    [...Array(8)].map((e, i) =>
                        <div className="col" key={i} >
                            <div className="card" >
                                <img src={BookImage} className="card-img-top" alt={"The Pragmatic"} />
                                <div className="card-body">
                                    <span className="card-title mb-0 ps-2 h4">The Pragmatic</span>
                                    <p className="card-text mb-0 ps-2 h6"><small className="text-muted">Andraw hont,</small></p>
                                    <p className="card-text text-primary"><strong>24.25$</strong></p>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LivreDetailModel">View details</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <LivreDetailModel   titre={"The Pragmatic"} 
                                auteur={"Andraw hont"}
                                prix={24.25}
                                date={`2022/05/05`}
                                etat={`comme neuf`}
                                adresse={"120 Rang Saint  Antoine,  Saint-Elphege,  Quebec J0G 1J0"}
                                description={`Read this book, and you’ll learn how to: 
                                Fight software rot Learn continuously 
                                Avoid the trap of duplicating knowledge 
                                Write fexible, dynamic, 
                                and adaptable code Harness the power 
                                of basic tools Avoid programming by 
                                coincidence Learn ...`}
            />
        </div>
    )
}
