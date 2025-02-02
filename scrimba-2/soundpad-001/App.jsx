import pads from "./pads"
import React from "react"

export default function App() {
    const [arrayState, setarrayState] = React.useState(pads)
    console.log(arrayState)
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    return (
        <main>
            <div className="pad-container">
                {pads.map((pad) => (
                    <button key={pad.id}></button>
                ))}
            </div>
        </main>
    )
}



