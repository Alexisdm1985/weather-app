const WeatherCardItem = ({data}) => {

    
    return (
        <>
            <div className="cardHeader">
                <h2>{data.name} / <span>{data.sys.country}</span></h2>
                <img src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="City-image" />
            </div>

            <div className="cardContent">
                <p>Temperatura actual: {data.main.temp}</p>
                <p>Humedad: {data.main.humidity}%</p>
                <p>Min/Max: {data.main.temp_min}c /{data.main.temp_max}c</p>
                <p>Velocidad del viento: {data.wind.speed}</p>
            </div>

            <div className="cardFooter">
                <button>Eliminar</button>
            </div>
        </>
        
    );
};

export default WeatherCardItem;