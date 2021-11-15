import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";

function MenuScreen({onStart}) {
    return (
        <div className="flex flex-col text-center justify-center">
            <div className="my-6 flex flex-col items-center justify-center">
                <img 
                    className="h-24 w-24"
                    src="./vennli-logo.png" 
                    alt="vennli"
                    />
                <h2 className="text-2xl font-semibold">Welcome to the Trivia Challenge!</h2>
            </div>

            <h4>You will be presented 10 True or False questions.</h4>
            <span className="text-dark-highlight text-green-400">Can you score 100%?</span>
            <div className="w-full flex justify-center">
                <button
                    className="menu-btn flex items-center mt-20 mb-10"
                    onClick={onStart}
                >
                    begin
                    <BsArrowRightCircle className="ml-4"/>
                </button>
            </div>
        </div>
    )
}

export default MenuScreen
