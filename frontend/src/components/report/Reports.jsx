import React from 'react'
import BookImage from'../../assets/images/bookimage.png'


export const Reports = () => {
    return (
        <div className="container category-list mt-4 mb-4 pb-4" style={{background: '#fff'}}>
            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="mb-0 ps-2 h4"><strong>View Report</strong></span>
                </div>
            </div>
            <table className="table mt-3 mb-5">
                <tbody>
                    {
                        [...Array(8)].map((e, i) =>
                            <tr key={i} className="border border-5 border-light" >
                                <th scope="row">{i+1}</th>
                                <td><img src={BookImage} className="card-img-top rounded mx-auto d-block img-fluid" alt={"The Pragmatic"} /></td>
                                <td>Publisher</td>
                                <td>{new Date().toISOString().split('T')[0]}</td>
                                <td>Message</td>
                                <td>
                                    <button className="btn btn-warning m-1">view details</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
