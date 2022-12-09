
import React, { useEffect, useLayoutEffect, useState } from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { getMultiple } from '../services/api';
import { Body } from '../components/body/Body';

// _______________________________  components   _______________________________

const Page4 = () => {

    const [dbableData, setData] = useState([])

    useEffect(()=>{
        getMultiple("utilisateur", 1).then(results=>{
            setData(results.data)
            console.log(results.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    return(
        <>
            <FixedHeader />
            <Body content={
                <div className="container p-5 mt-5 mb-5">
                    <h1 className="display-6">Sell ... not yet implimented !</h1>
                    {
                        // dbableData?.length>0 && (<Tabler tableData={dbableData} />)
                    }
                    
                </div>
            } />

            <FixedFooter />
        </>
    )
}

export default Page4;

























    // console.log(await getOne("lang", 18) )

    // getOne("lang", 1).then(results=>{
    //     console.log(results)
    // }).catch(err=>{
    //     console.log(err)
    // })

    // getMultiple("lang", 2).then(results=>{
    //     console.log(results)
    // }).catch(err=>{
    //     console.log(err)
    // })

    // add("lang", {
    //     "name":"dart",
    //     "released_year": 2011,
    //     "githut_rank": 13,
    //     "pypl_rank": 20,
    //     "tiobe_rank": 25
    // }).then(results=>{
    //     console.log(results)
    // }).catch(err=>{
    //     console.log(err)
    // })

    // update("lang", 18, {
    //     "name":"dart",
    //     "released_year": 2011,
    //     "githut_rank": 130,
    //     "pypl_rank": 200,
    //     "tiobe_rank": 250
    // }).then(results=>{
    //     console.log(results)
    // }).catch(err=>{
    //     console.log(err)
    // })


    // remove("lang", 18).then(results=>{
    //     console.log(results)
    // }).catch(err=>{
    //     console.log(err)
    // })