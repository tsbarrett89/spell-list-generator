import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCharacters } from '../../actions/characterActions'

const UserDashboard = () => {
    const user = useSelector((state) => state.authReducer.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCharacters(user.user_id))
    }, [])
    
    return (
        <div></div>
    )
}

export default UserDashboard