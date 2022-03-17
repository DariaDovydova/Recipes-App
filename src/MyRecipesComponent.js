function MyRecipesComponent({label, image, calories, ingredients}) {
    return (
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <img src={image} alt="recipe" className="tasty" />
            </div>

            <ul className="list">
                    {ingredients.map((item, index) => (
                        <li key={index}> <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt="check" className="icon"/>
                        {item}</li>
                    ))}
            </ul>
            
            <div className="container">
                <p className="par">{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}

export default MyRecipesComponent;