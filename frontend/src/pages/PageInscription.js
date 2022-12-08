
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { RegisterMemberForm } from '../components/register/RegisterMemberForm';

// _______________________________  components   _______________________________

const PageInscription = () => {
    return(
        <>
            <FixedHeader />
            <Body content={
                <RegisterMemberForm />
            }/>
            <FixedFooter />
        </>
    )
}

export default PageInscription;