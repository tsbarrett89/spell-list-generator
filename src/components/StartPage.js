import React from 'react';

import UserLogin from './users/UserLogin'

const StartPage = () => {
    return (
        <div>
            <div>
                <p>Log in to create spell lists for your Dungeons and Dragons character. Or search spells and set a quick spell list.</p>
            </div>
            <div>
                <div>
                    <button>
                        Spells
                    </button>
                </div>
                <UserLogin />
            </div>
        </div>
    )
}

export default StartPage