import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between p-4 max-w-6xl mx-auto'>
            <div className="flex items-center md:w-5/6  ">
            <h2 className="text-2xl md:text-4xl font-bold">Recipe Calories</h2>
            <div className="mx-auto">
                <ul className="flex  md:flex-row gap-2 md:gap-6 mt-1  ">
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Search</a></li>
                </ul>
            </div>
            </div>
            <div className="flex  gap-3">
                
             <input  className="border-2 rounded-full pl-1  "  type="text" placeholder= "Search"  />
                
             <button className="bg-green-400 text-5xl mr-2  rounded-full ">
             <CgProfile />

                </button>   
            </div>
        </div>
    );
};

export default Header;