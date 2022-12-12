import React, { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Livre } from './Livre';
import { api } from '../../services/api'


export const ListeLivres = () => {

    const [session, setSession] = useLocalStorage("session", null);

    const [categoryList, setCategoryList] = useState([]);
    const [annoncesList, setCAnnoncesList] = useState([]);

    useEffect(()=>{
        api.fetchCategories().then(data=>{
            if(data!=null){
                setCategoryList(data)
            }
        }).catch(err=> alert(err))

        fetchAnnoncesList(`/findByEtat/${1}`)

    }, [])

    const fetchAnnoncesList = (url)=> {
        api.fetchAnnonces(url).then(data=>{
            if(data!=null){
                setCAnnoncesList(data)
            }
        }).catch(err=> alert(err))
    }

    return (
        <div className="container text-center mt-4 mb-4" >
            <div className="row mt-0">
                <div className="col">
                    <span className="mb-0 ps-2 h4"><strong>Shop by Category</strong></span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    {
                        categoryList.map((c, i) =>
                            <span key={c.id} >
                                <a href="#" onClick={(e)=> fetchAnnoncesList(`findByCategorie/${c.id}`)} className="link-dark text-decoration-none">{c.libelle}</a>
                                {i+1 < categoryList.length && <span className="p-3" >|</span>}
                            </span>
                        )
                    }
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
                {
                    annoncesList?.length==0 && <div className="col w-100"><h5 className='text-center text-dark'> empty results!</h5></div>
                }
                {
                    annoncesList?.map((annonce, i) =>
                        <div className="col" key={i} >
                            <Livre annonce={annonce} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
