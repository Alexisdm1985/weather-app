const WeatherCardItem = ({data}) => {
    const {name, sys, main, weather, wind} = data;
    
    const description = weather[0].description === "nubes" ? 
        "Nublado" :  
        weather[0].description;

    return (
        <>
            <div className="cardHeader">
                <h2>{name} / <span>{sys.country}</span></h2>
                <img src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="City-image" />
            </div>

            <div className="cardContent">
                <p>Temperatura actual: {main.temp} °C</p>
                <p>Humedad: {main.humidity}%</p>
                <p>Cielo actual: {description}</p>
                <p>Velocidad del viento: {wind.speed} m/s</p>
            </div>
        </>
        
    );
};

export default WeatherCardItem;