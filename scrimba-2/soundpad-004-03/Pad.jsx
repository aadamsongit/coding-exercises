import React from "react"

export default function Pad({ toggle, id, color, on }) {
    return (
        <button
            className={on ? "on" : ""}
            style={{ backgroundColor: color }}
            onClick={() => toggle(id)}
        >
            {/* No need to render anything inside the button if you just want the class */}
        </button>
    );
}

