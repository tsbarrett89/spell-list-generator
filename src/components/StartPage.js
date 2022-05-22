import React from 'react';
import { NavLink } from 'react-router-dom';

import UserLogin from './users/UserLogin'

const StartPage = () => {
    return (
        <div>
            <div>
                <p>Log in to create spell lists for your Dungeons and Dragons character. Or search spells and set a quick spell list.</p>
            </div>
            <div>
                <div>
                    <NavLink to='/spells'>Spells</NavLink>
                </div>
                <UserLogin />
            </div>
        </div>
    )
}

export default StartPage