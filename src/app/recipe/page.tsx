"use client"
import styles from "./page.module.css";
import { useState } from "react";

const Recipes = () => {

    type Meal = {
        [key: string]: string | null;
    };

    type MealResponse = {
        meals: Meal[];
    };

    const [meal, setMeal] = useState<MealResponse | null>(null);

    const fetchMeal = async () => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        setMeal(data);
    }


    const getIngredientsWithMeasures = (meal: Meal): string[] => {
        const ingredients: string[] = [];

        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;

            const ingredient = meal[ingredientKey];
            const measure = meal[measureKey];

            if (ingredient && ingredient.trim() !== "") {
                const formatted = `${measure?.trim() || ""} - ${ingredient.trim()}`.trim();
                ingredients.push(formatted);
            }
        }
        return ingredients;
    };

    const mealData = meal?.meals?.[0];
    const ingredients = mealData ? getIngredientsWithMeasures(mealData) : [];



    return (
        <div>
            <h1>What's for dinner?</h1>
            <button onClick={fetchMeal}>Get a meal</button>
            <div>{mealData && (
                <>
                    <h3>{mealData.strCategory}</h3>
                    <h2>{mealData.strArea}</h2>
                    {mealData.strYoutube && (
                        <a href={mealData.strYoutube}>To Youtube</a>
                    )}
                </>
            )}</div>

            {mealData && (
                <div style={{ marginTop: '20px' }}>
                    <div className={styles.imgWrap}>
                        <div>
                            <h2>{mealData.strMeal}</h2>
                            <img src={mealData.strMealThumb ?? ""} alt={mealData.strMeal ?? "Meal"} width="300" />
                        </div>

                        <div>
                            {mealData.strInstructions}
                        </div>
                    </div>
                    <ul>
                        {ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Recipes;