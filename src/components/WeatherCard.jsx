
const WeatherCard = ({data}) => {

    return (
        <div className="weatherPanel">
            
            {data && <WeatherCardItem
                key={data.sys.id}
                className="weatherCard"
                data={data}
            />}

        </div>
    )
};

export default WeatherCard;

