import ReactDOM from 'react-dom/client';

function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }
  
  /**
   * Challenge: Log something to the console when the mouse
   * hovers over the image
   */
  function handleMouseEnter() {
    console.log('Mouse entered the element')
  }

  function handleMouseLeave() {
    console.log('Mouse left the element')
  }
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);