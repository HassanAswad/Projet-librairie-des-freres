
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { ExpiditeuresMessages } from '../components/message/ExpiditeuresMessages';

// _______________________________  components   _______________________________

const PageMessages = () => {
    return(
        <>
            <FixedHeader />
            <Body content={ <ExpiditeuresMessages /> } />
            <FixedFooter />
        </>
    )
}

export default PageMessages;