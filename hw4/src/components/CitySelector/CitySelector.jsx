const CitySelector = ({ cities, onCitySelect }) => {

    return (
        <div>
            <h2>Выберите город</h2>
            <select onChange={(e) => {
                console.log(e.target.value);
                onCitySelect(e.target.value)
            }}>
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div >
    );
};

export default CitySelector;
