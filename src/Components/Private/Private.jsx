import React, { useState, useContext } from 'react';
import { AuthContext } from '../../App';


const Private = () => {
    const {isAuth} = useContext(AuthContext)

    if (isAuth === false) {
        return (
            <div className='testDiv'>NOT AUTAH</div>
        )
    }
    return (
        <div className='testDiv'>AUTHORISED</div>
    )
}


export default Private;