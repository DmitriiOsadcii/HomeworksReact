import { useState } from 'react'

import CityCard from '../CityCard/CityCard'
import CitySelector from '../CityCard/CitySelector'
import cities from '../../components/CityCard/CityCelector'
import MathQuiz from '../MathQuiz/MathQuiz'
import Answer from '../MathQuiz/Answer'

import './App.css'


const citiesData = [...cities];
function App() {

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = citiesData.find((city) => city.name === cityName);
    setSelectedCity(city);
  };
  

  return (
    <>
      <div className='city'>
        <CitySelector cities={citiesData} onCitySelect={handleCitySelect} />
        <CityCard city={selectedCity} />
      </div>
      <div>
        <MathQuiz />
      </div>
    </>
  );
};

export default App;