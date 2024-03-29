


import banner from './flame-grilled-meat-cooking-flames-generative-ai.jpg';
import FoodComponets from './FoodComponets';

import './Home.css'
const Home = () => {
  return (
    <div className='h-auto'>
      <div className='w-full h-96 bg-gradient-to-t from-black relative'>
        <img src={banner} className='w-full h-96 object-cover ' alt='banner'/>
        <div className='absolute bottom-0 left-0 w-full h-52 gradient-overlay'></div>
      </div>
      <br />
      <br />
      <div className='flex justify-center'>
        <FoodComponets/>
      </div>
    </div>
  );
}

export default Home;
