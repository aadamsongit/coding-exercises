import React from "react";
import Pad from "./Pad";
import padsData from "./pads";

export default function App() {
    return (
        <main>
            <div className="pad-container">
                {padsData.map((pad) => (
                    <Pad key={pad.id} color={pad.color} />
                ))}
            </div>
        </main>
    );
}
