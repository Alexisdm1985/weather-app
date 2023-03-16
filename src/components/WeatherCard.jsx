
const WeatherCard = ({data}) => {

    return (
        <div className="weatherPanel">
            
            {/* {isLoading && <div>Loading... or spinner</div>} */}
            {/* {error && <div>Ha ocurrido un error</div>} */}
            {data && <WeatherCardItem
                key={data.sys.id}
                className="weatherCard"
                data={data}
            />}

        </div>
    )
};

export default WeatherCard;

