import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
function Page() {
    return (
    <div>
    <ol><li>React helps me write better JavaScript</li>
    <li>React is composable</li>
    <li>There are many jobs associated with React</li></ol>
    </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))