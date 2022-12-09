import React from 'react'



import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineContacts } from "@react-icons/all-files/ai/AiOutlineContacts";


export const Messages = () => {
    return (
            <div className="container messages-list mt-4 mb-4">
                <div className="row mt-4 mb-4">
                    <div className="col d-flex justify-content-center flex-column">
                        <p className="mb-0 ps-2 h4"><strong><AiOutlineMail /> Message</strong></p>
                        <div className="ms-5 me-5">
                            <table className="table table-light mt-3 mb-5" >
                                <tbody>
                                    {
                                        [...Array(8)].map((e, i) =>
                                            <tr key={i} >
                                                <td><AiOutlineContacts /></td>
                                                <td>Djamil</td>
                                                <td>2022/04/04</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
    )
}
