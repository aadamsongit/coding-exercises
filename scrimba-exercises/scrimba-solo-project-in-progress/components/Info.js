import React from "react"

export default function Info() {
    return (
    <header className="info-header"><div className="img-header-container"><img src="https://i.imgur.com/yv2AZj1.png" height="317px" width="317px" alt="Picture of Amber" className="header-image"></img></div>
    <h1 class="my-name">Amber Adamson</h1>
    <p class="subtitle">Fullstack Developer</p>
    <p class="website">Tech Tracker Chronicles</p>
    <div className="btn-container"><button type="button" class="email-btn"><i class="fa-solid fa-envelope"></i> Email</button><button type="button" class="linkedin-btn"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</button></div></header>
    )
}