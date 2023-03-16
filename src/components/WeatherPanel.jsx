import { useState } from "react";
import { weatherFetch } from "../services/weatherFetch";
import SearchWeather from "./SearchWeather";
import WeatherCardItem from "./WeatherCardItem";

const WeatherPanel = () => {

    const [data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(false);

    const handleFetch = (url) => {

        setIsLoading(true)
        weatherFetch(url)
            .then( (response) => {
                setData(response)
                setIsLoading(false);
            });
    };

    const renderCardList = data ? <div className="card-section" style={ data && {display: "flex"}}
                            > <WeatherCardItem data={data}/> </div> : null;

    return (  
        <div className="container">

            <SearchWeather handleFetch={handleFetch}/>

            { 
                isLoading ? <div >Loading or spinner</div>
                :  
                renderCardList    
            }
        </div>
    );
};

export default WeatherPanel;