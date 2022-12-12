import React from 'react'
import BookImage from'../../assets/images/bookimage.png'
import './VosLivres.css'

export const VosLivres = ({annoncesList, fetchAnnoncesList}) => {

    const handleDelete = (e, id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            fetch(`/annonce/delete/${id}`,{
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let data = await response.json()
                    fetchAnnoncesList()
                    alert("annonce deleted successfully !")
                } catch (error) {
                    alert(error)
                }
            })
            .catch((err) => {
                console.log(err)
            });
        }
    }


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
                        annoncesList.map((annonce, i) =>
                            <tr key={i} className="border border-5 border-light" >
                                <th scope="row">{i+1}</th>
                                {/* <td><img src={BookImage} className="card-img-top rounded mx-auto d-block img-fluid" alt={annonce.titre} /></td> */}
                                <td><img src={`uploads/${annonce?.urlPhotoLivre}`} className="card-img-top rounded mx-auto d-block img-fluid" alt={annonce.titre} /></td>
                                <td>{annonce.titre}</td>
                                <td>{annonce.prix}$</td>
                                <td>{annonce.categorie?.libelle}</td>
                                <td>Publiee le {new Date(annonce.date).toISOString().split('T')[0]}</td>
                                <td>
                                    <button className="btn btn-success m-1">Modifie</button>
                                    <button className="btn btn-danger m-1" onClick={(e)=>handleDelete(e, annonce.id)} >Desactive</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
