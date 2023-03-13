const WeatherCard = () => {

    return (
        <div className="weatherPanel">

            <div className="weatherCard">

                <div className="cardHeader">
                    <h2>City Name</h2>
                    <img src="https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="City-image" />
                </div>

                <div className="cardContent">
                    <p>Testin testing testing</p>
                    <p>Testin testing testing</p>
                    <p>Testin testing testing</p>
                    <p>Testin testing testing</p>
                </div>

                <div className="cardFooter">
                    <button>Eliminar</button>
                </div>
            </div>

        </div>
    )
};

export default WeatherCard;

