import { useState } from 'react'

import CityCard from '../CityCard/CityCard'
import CitySelector from '../CitySelector/CitySelector'
import cities from '../../components/CityCelector'
import MathQuiz from '../MathQuiz/MathQuiz'
import Answer from '../MathQuiz/Answer'

import './App.css'


const citiesData = [...cities];
function App() {

  const [selectedCity, setSelectedCity] = useState(citiesData[0]);

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