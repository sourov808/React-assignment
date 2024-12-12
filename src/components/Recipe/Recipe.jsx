import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";





const Recipe = ({recipe,handleToCooks}) => {
    
    const {recipe_image,short_description,recipe_name,
        preparing_time,calories,ingredients} = recipe;
    return (
        <div className='  p-2 md:w-[310px] mt-4  rounded-lg border-2'>
            
       <div>

       <img className=' h-48 rounded-xl' src={recipe_image} alt="" />
          <div>
          <h1 className='font-bold'>{recipe_name}</h1>
          <small className='text-gray-400 '>
            {short_description}
          </small>
          
          
          
          
          <p className='border-t-2 mt-2'>
           <h3 className='text-sm font-bold'>
            Ingredients: 6
           </h3>
        <small className='text-gray-400'>
        {
           
           ingredients.map((ingredient,recipe_id) =>  <span key={recipe_id}> <li>{ingredient}</li></span>)
          
          }
        </small>
          </p>
          
          
          
          
          <div className='flex text-gray-400 border-t-2 mt-2 space-x-2'>
          <small className=''>
            <span className='flex items-center gap-1'> 
            <CiClock2></CiClock2> {preparing_time}
            </span>
          </small>
          <small>
           <span className='flex items-center gap-1'>
           <AiOutlineFire></AiOutlineFire> {calories}
           </span>
          </small>
          </div>
          <button  
          onClick={() =>handleToCooks(recipe)}
          className='bg-green-400 font-bold mt-2 p-2 text-sm rounded-full'>
            Want to cook
          </button>
          </div>

       </div>
       
        </div>
    );
};

Recipe.propTypes = {
    Recipe: PropTypes.object.isRequired,
    recipe: PropTypes.func,
    handleToCooks: PropTypes.func,
    
};

export default Recipe;