const CityCard = ({ city }) => {
    // if (!city) return 
  
    return (
      <div >
        <h2>{city.name}</h2>
        <img src={city.imageUrl} alt={city.name} width="550" />
        <p>{city.description}</p>
        <ul>
          {city.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CityCard;