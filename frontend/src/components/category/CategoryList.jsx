import React from 'react'
import { Category } from './Category'

export const CategoryList = () => {
    return (
        <div className="container category-list mt-4 mb-4 pb-4" style={{background: '#fff'}}>
            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>Category</strong></span>
                </div>
            </div>
            <table className="table mt-3 mb-5">
                <tbody>
                {
                    [...Array(5)].map((e, i) =>
                        <Category id={i} name={`Name category ${i}`} />
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
