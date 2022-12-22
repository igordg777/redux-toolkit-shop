import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

function FirstName() {
    const name = useSelector((state) => state.user.firstName)
    return (
        <>
            {name}
        </>
    )
}

export default FirstName