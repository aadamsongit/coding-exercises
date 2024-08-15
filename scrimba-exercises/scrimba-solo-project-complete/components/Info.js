import React from "react"

export default function Info() {
    return (
    <header className="info-header"><div className="img-header-container"><img src="https://i.imgur.com/yv2AZj1.png" height="317px" width="317px" alt="Picture of Amber" className="header-image"></img></div>
    <h1 class="my-name">Amber Adamson</h1>
    <p class="subtitle">Fullstack Developer</p>
    <p class="website"><a href="https://techtrackerchronicles.com/">Tech Tracker Chronicles</a></p>
    <div className="btn-container"><a href="mailto:amber.renee.adamson@gmail.com" target="_blank"><button type="button" class="email-btn"><i class="fa-solid fa-envelope"></i> Email</button></a><a href="https://www.linkedin.com/in/amber-adamson-a33a3860/"><button type="button" class="linkedin-btn"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</button></a></div></header>
    )
}