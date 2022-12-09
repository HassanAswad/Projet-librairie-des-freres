
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { CategoryForm } from '../components/category/CategoryForm';
import { ListeVendeur } from '../components/vendeur/ListeVendeur';
import { ListeMessages } from '../components/message/ListeMessages';
import { CategoryList } from '../components/category/CategoryList';
import { Reports } from '../components/report/Reports';



// _______________________________  components   _______________________________

const PageAdmin = () => {
    return(
        <>
            <FixedHeader />
            <Body content={
                <>
                <div classNameName="row">
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
                            <CategoryForm />
                            <CategoryList />
                        </div>
                        <div className="tab-pane fade" id="pills-report" role="tabpanel" aria-labelledby="pills-report-tab">
                            <Reports />
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