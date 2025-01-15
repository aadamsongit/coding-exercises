import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke 
            key={joke.id}  // Assuming your jokesData has a unique `id` field for each joke.
            setup={joke.setup} 
            punchline={joke.punchline} 
            isPun={joke.isPun} 
        />
    });
    
    return (
        <div>
            {jokeElements}
        </div>
    );
}
