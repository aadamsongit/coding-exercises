import React from "react"

export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
  
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  const addFavoriteThing = (newString) => {
    /**
     * Challenge: you do it!
     * Every time "Add item" is clicked, it should add another string
     * "Test" to the list on the page
     */
    setMyFavoriteThings(prevArray => [...prevArray, newString]);
    console.log(thingsElements)
  }
  
  return (
    <main>
      <button onClick={() => addFavoriteThing("Test")}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}