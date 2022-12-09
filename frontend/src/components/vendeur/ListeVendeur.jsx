import React from 'react'
import BookImage from'../../assets/images/bookimage.png'


export const ListeVendeur = () => {
    return (
        <div className="container vendeur-list mt-4 mb-4">
            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>Vendeur</strong></span>
                </div>
            </div>
            <table className="table mt-3 mb-5">
                {/* <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Opération</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        [...Array(5)].map((e, i) =>
                            <tr key={i} className="border border-5 border-light">
                                <th scope="row">{i+1}</th>
                                <td><img src={BookImage} className="card-img-top rounded" alt={"The Pragmatic"} /></td>
                                <td>Name</td>
                                <td>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-danger btn-sm">Desactive</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
