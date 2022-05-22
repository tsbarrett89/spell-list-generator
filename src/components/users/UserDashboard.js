import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCharacters } from '../../actions/characterActions'

import CharacterList from '../characters/CharacterList'

const UserDashboard = () => {
    const user = useSelector((state) => state.authReducer.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCharacters(user.user_id))
    }, [])

    return (
        <div>
            <CharacterList />
        </div>
    )
}

export default UserDashboard