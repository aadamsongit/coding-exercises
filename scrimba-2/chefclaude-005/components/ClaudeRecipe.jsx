import React from "react";

export default function ClaudeRecipe({ getRecipeFromChefClaude, ingredients }) {
    const [recipe, setRecipe] = React.useState(""); // State to hold the recipe
    const [loading, setLoading] = React.useState(false); // State to manage loading

    // Function to fetch the recipe
    async function fetchRecipe() {
        setLoading(true); // Start loading
        try {
            const recipeText = await getRecipeFromChefClaude(ingredients); // Call the function
            setRecipe(recipeText); // Store the result
        } catch (error) {
            console.error("Error fetching recipe:", error.message);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    // Trigger the fetch when the component mounts
    React.useEffect(() => {
        fetchRecipe();
    }, [ingredients]); // Only re-fetch if ingredients change

    // Render the recipe or a loading indicator
    return (
        <section>
            {loading ? <p>Loading recipe...</p> : <p>{recipe || "No recipe yet!"}</p>}
        </section>
    );
}
