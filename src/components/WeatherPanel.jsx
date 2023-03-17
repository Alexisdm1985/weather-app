import { useState } from "react";
import { weatherFetch } from "../services/weatherFetch";
import SearchWeather from "./SearchWeather";
import WeatherCardItem from "./WeatherCardItem";

const Spinner = () => {
    return <div className="lds-ripple"><div></div><div></div></div>
};

const WeatherPanel = () => {

    const [data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(false);

    const handleFetch = (url) => {

        setIsLoading(true)
        weatherFetch(url)
            .then( (response) => {
                setData(response)
                console.log(response);
                setIsLoading(false);
            });
    };

    const renderCardList = data ? <div className="card-section" style={ data && {display: "flex"}}
                            > <WeatherCardItem data={data}/> </div> : null;


    return (  
        <div className="container">

            <SearchWeather handleFetch={handleFetch}/>
            { 
                isLoading ? <Spinner/>
                :  
                renderCardList    
            }
        </div>
    );
};

export default WeatherPanel;