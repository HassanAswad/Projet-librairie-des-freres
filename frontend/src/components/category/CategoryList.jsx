import React from 'react'
import { Category } from './Category'

export const CategoryList = ({categoryList}) => {
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
                    categoryList?.length==0 && (
                        <tr className="border border-5 border-light">
                            <td><h1>no category found!</h1></td>
                        </tr>
                    )
                }
                {
                    categoryList.map((c, i) =>
                        <Category key={i} id={c.id} name={c.libelle} />
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
