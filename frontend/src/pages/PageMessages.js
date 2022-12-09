
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { Messages } from '../components/message/Messages';

// _______________________________  components   _______________________________

const PageMessages = () => {
    return(
        <>
            <FixedHeader />
            <Body content={ <Messages /> } />
            <FixedFooter />
        </>
    )
}

export default PageMessages;