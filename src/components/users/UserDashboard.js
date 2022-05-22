import React from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
    const user = useSelector((state) => state.authReducer.user)

    return (
        <div></div>
    )
}

export default UserDashboard