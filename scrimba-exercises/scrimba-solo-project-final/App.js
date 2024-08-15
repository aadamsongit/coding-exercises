import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="centered-container">
            <Info />
            <About />
            <Footer />
        </div>
    )
}