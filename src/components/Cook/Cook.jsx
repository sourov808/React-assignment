import PropTypes from 'prop-types';
const Cook = ({cook,handlePrepare,totaltime}) => {
    const {recipe_name,preparing_time,calories} = cook;
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th className='pr-2'>Time</th>
                    <th>Calories</th>
                </tr>

                <tr className='bg-gray-100 border-2  text-center'>
                <td className='w-1 p-1'>{recipe_name}</td>
                    <td className='w-1'>{preparing_time}</td>
                    <td className='w-1'>{calories}</td>
                   
                    <button onClick={() => handlePrepare(recipe_name,preparing_time,calories)}
                     className='bg-green-400 font-bold p-2 mt-2 text-sm rounded-full'>Preparing</button>
               
                </tr>
               
              
             
              
            
           

               
               
            </table>



            <table>
                <tr>
                    <th>Name</th>
                    <th className='pr-2'>Time</th>
                    <th>Calories</th>
                </tr>
                <tr className='bg-gray-100 border-2 text-center'>
                <td className='w-1 p-1'>{totaltime}</td>
                    
                </tr>
               
            </table>
            
        </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.object,
    handlePrepare: PropTypes.func,
    totaltime: PropTypes.array
};

export default Cook;