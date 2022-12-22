import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

function LastName() {
    const lastName = useSelector((state) => state.user.lastName)
    return (
        <>
            {lastName}
        </>
    )
}

export default LastName 