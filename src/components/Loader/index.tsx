import React, { useState, useEffect, useCallback } from 'react'

import { Container } from './style'

const Loader = () => {
    return (
        <Container>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </Container>
    )
}

export default Loader
