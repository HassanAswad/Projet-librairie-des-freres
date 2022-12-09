import React from 'react'
import BookImage from'../../assets/images/bookimage.png'
import './VosLivres.css'

export const VosLivres = () => {
    return (
        <div className="container vos-livres mt-4 mb-4" >
            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>Books</strong></span>
                </div>
            </div>
            <table className="table mt-3 mb-5">
                {/* <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Catégorie</th>
                        <th scope="col">Date</th>
                        <th scope="col">Opération</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        [...Array(8)].map((e, i) =>
                            <tr key={i} className="border border-5 border-light" >
                                <th scope="row">{i+1}</th>
                                <td><img src={BookImage} className="card-img-top rounded mx-auto d-block img-fluid" alt={"The Pragmatic"} /></td>
                                <td>The Pragmatic</td>
                                <td>24.25$</td>
                                <td>Informatique</td>
                                <td>Publiee le {new Date().toISOString().split('T')[0]}</td>
                                <td>
                                    <button className="btn btn-success m-1">Modifie</button>
                                    <button className="btn btn-danger m-1">Desactive</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
