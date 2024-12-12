import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooks from "../Cooks/Cooks";





const Recipes = () => {
  const [recipes,setRecipe] = useState([]);
  useEffect(() => {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipe(data))
  },[])


  const [cooks,setCooks] = useState([]);
  const [totaltime,setPrepare] = useState([0]);



  const handleToCooks = (recipe) => {
    
    const newRecipe = [...cooks,recipe];
    setCooks(newRecipe);

    
    
  } 

  const handlePrepare = (preparing_time) => {
    const newTotal = totaltime + preparing_time;
    setPrepare(newTotal)

    //  const cookingDish = cooks.filter(cook => cook.recipe_id !== recipe_id)
    // setCooks(cookingDish)
  }

    return (
        <div className="mt-16">
            <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold">
                    Our Recipes
                </h2>
                <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. 
                </p>
            </div>
            
         <div className="flex justify-between ">
         <div className=" grid md:grid-cols-2  gap-3">
               {
                  recipes.map(recipe => <Recipe 
                    key={recipe.recipe_id}
                  
                    handleToCooks={handleToCooks}
                    
                    recipe={recipe}></Recipe>)
                    
                }
                
            </div>
            <div className="border-2 mt-4 ml-2 rounded-lg ">
            <Cooks 
            handlePrepare={handlePrepare}
            totaltime={totaltime}
            cooks={cooks}></Cooks>
            </div>
            <div>
                
            </div>
         </div>
        
        </div>
    );
};

export default Recipes;