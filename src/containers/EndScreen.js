import React from 'react'

function EndScreen({onReset}) {
    return (
        <div>
            <h2>End game</h2>
            <button
                onClick={onReset}
            >
                play again
            </button>
        </div>
    )
}

export default EndScreen
