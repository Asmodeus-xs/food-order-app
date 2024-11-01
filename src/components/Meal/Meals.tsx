import { useState, useEffect } from "react"
import data from '../../available-meals.json'
import Meal, { MealType } from "./Meal"




export default function Meals() {

    const [meals, setMeals] = useState<MealType[]>([])

    useEffect(() => {
        //mocking async request
        async function getMeals(url: string) {

            console.log(url)

            if (!data) {
                throw new Error("Couldn't fetch meals")
            }

            setMeals(data)

        }

        try {
            getMeals("some url")
        } catch (err) {
            const knownError = err as Error
            console.log(knownError?.message)
        }
    }, [])




    return (
        <section>
            <div className=" w-[90%] max-w-[70rem] list-none mx-auto my-8 p-4 grid grid-cols-custom gap-4">
                {meals.map(meal => <Meal key={meal.id} {...meal} />)}
            </div>
        </section>
    )
}