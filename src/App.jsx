

import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from'./components/Recipes/Recipes'



function App() {


  return (
    <>
      <div>

      <Header></Header>  
      
     <div className='p-4 mx-auto max-w-6xl'>
       <Banner></Banner>
   
  
     <Recipes 

></Recipes>

</div>
</div>
     
    </>
  )
}

export default App
