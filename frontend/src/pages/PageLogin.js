
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { LoginForm } from '../components/login/LoginForm';

// _______________________________  components   _______________________________

const PageLogin = () => {
    return(
        <>
            <FixedHeader />
            <Body content={ <LoginForm /> } />
            <FixedFooter />
        </>
    )
}

export default PageLogin;