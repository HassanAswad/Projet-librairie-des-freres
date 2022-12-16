
import React, { useEffect, useState } from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { CategoryForm } from '../components/category/CategoryForm';
import { ListeMessages } from '../components/message/ExpiditeuresMessages';
import { CategoryList } from '../components/category/CategoryList';
import { Reports } from '../components/signalisation/Reports';
import { useLocalStorage } from '../hooks/useLocalStorage';



// _______________________________  components   _______________________________

const PageAdmin = () => {

    const [session, setSession] = useLocalStorage("session", null);
    const [categoryList, setCategoryList] = useState([]);

    const fetchCategoryList = ()=>{
        
        fetch(`/categorieAnnonce/all`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            // console.log(response)
            try {
                let data = await response.json()
                // console.log(data)
                if(data!=null){
                    setCategoryList(data)
                }
            } catch (error) {
                alert(error)
            }
        })
        .catch((err) => {
            // throw new Error("catch throw " + err);
            console.log(err)
        });
    }

    useEffect(()=>{
        fetchCategoryList()
    }, [])

    return(
        <>
            <FixedHeader />
            <Body content={
                <>
                <div className="row mt-5">
                    <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-category-tab" data-bs-toggle="pill" data-bs-target="#pills-category" type="button" role="tab" aria-controls="pills-category" aria-selected="true">Category</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-report-tab" data-bs-toggle="pill" data-bs-target="#pills-report" type="button" role="tab" aria-controls="pills-report" aria-selected="false">Report</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-category" role="tabpanel" aria-labelledby="pills-category-tab">
                            <CategoryForm session={session} categoryList={categoryList} fetchCategoryList={fetchCategoryList} />
                            <CategoryList categoryList={categoryList} />
                        </div>
                        <div className="tab-pane fade" id="pills-report" role="tabpanel" aria-labelledby="pills-report-tab">
                            <Reports session={session} />
                        </div>
                    </div>
                </div>                    
                </>
            } />
            <FixedFooter />
        </>
    )
}

export default PageAdmin;