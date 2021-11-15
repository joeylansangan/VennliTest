import React from 'react'

function MenuScreen({onStart}) {
    return (
        <div>
            <h2>MenuScreen</h2>
            <button
                onClick={onStart}
            >
                Begin
            </button>
        </div>
    )
}

export default MenuScreen
