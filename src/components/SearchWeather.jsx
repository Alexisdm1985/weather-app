import { useState } from "react";

const weatherUrl = import.meta.env.VITE_WEATHER_API_URL;
const api_key = import.meta.env.VITE_API_KEY;

const SearchWeather = ({handleFetch}) => {

    const[location, setLocation] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const url = `${weatherUrl}q=${location}&appid=${api_key}&lang=es&units=metric&limit=5`
        
        handleFetch(url);
        setLocation("");
    };

    return (
        <>
            <form className="input-section"
                onSubmit={handleOnSubmit}>

                <input type="text"
                    placeholder="Buscar Ciudad"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />

                <button className="btn">Buscar</button>
            </form>
        </>
    )
};


export default SearchWeather;