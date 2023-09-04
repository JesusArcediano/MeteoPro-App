import { Spinner } from './Spinner';

export const Card = ({showData, loadingData, weather, forecast}) => {
  
    // const today = new Date();
    // const day = today.getDate();
    // const month = today.getMonth() + 1;
    // const year = today.getFullYear();
    // const date = `${day}/${month}/${year}`;

    let url;
    let iconUrl, iconUrl3, iconUrl6, iconUrl9;
    let forecastDate3, forecastDate6, forecastDate9;

    if (loadingData) return <Spinner />;

    if (showData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + '.png';

        iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
        iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
        iconUrl9 = url + forecast.list[3].weather[0].icon + '.png';

        forecastDate3 = `${forecast.list[1].dt_txt.substring(8,10)}/${forecast.list[1].dt_txt.substring(5,7)}/${forecast.list[1].dt_txt.substring(0,4)} ${forecast.list[1].dt_txt.substring(11,13)}h`
        forecastDate6 = `${forecast.list[2].dt_txt.substring(8,10)}/${forecast.list[1].dt_txt.substring(5,7)}/${forecast.list[1].dt_txt.substring(0,4)} ${forecast.list[2].dt_txt.substring(11,13)}h`
        forecastDate9 = `${forecast.list[3].dt_txt.substring(8,10)}/${forecast.list[1].dt_txt.substring(5,7)}/${forecast.list[1].dt_txt.substring(0,4)} ${forecast.list[3].dt_txt.substring(11,13)}h`
    }
  
    return (
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4 bg-black">
                                        <h3 className='card-title'>{weather.name}</h3>
                                    <p className='card-date'>Hoy</p>
                                    <h1 className='card-actual-temp'>
                                    <span className='card-degrees'>
                                        {(weather.main.temp - 273.15).toFixed(1)}
                                    </span>
                                        ºC
                                    </h1>
                                    <img className='card-desc-icon' src={iconUrl} alt="icon"/>
                                    <p className="card-desc">{weather.weather[0].description}</p>
                                    <img className="img-fluid rounded-start" src='/images/cielo.jpg' alt="imagenFondo"></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <div className="ms-2">

                                            <div className="card-text pb-1">
                                                <img src="/icons/calor.png" alt="iconoCalor" width={32} height={32} />
                                                <p>Temperatura máxima: 
                                                    <span className='temperature-number'>
                                                        {(weather.main.temp_max - 273.15).toFixed(1)} ºC
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="card-text pb-4">
                                                <img src="/icons/frio.png" alt="iconoFrio" width={32} height={32} />
                                                <p>Temperatura mínima: 
                                                    <span className='temperature-number'>
                                                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="card-text pb-2">
                                                <img src="/icons/sensacion2.png" alt="iconoSensacionTermica" width={32} height={32} />
                                                <p>Sensación térmica: 
                                                    <span className='temperature-number'>
                                                    {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="card-text pb-1">
                                                <img src="/icons/humedad.png" alt="iconoHumedad" width={32} height={32} />
                                                <p>Humedad: 
                                                    <span className='temperature-number'>
                                                        {(weather.main.humidity).toFixed(1)}%
                                                    </span>
                                                </p>
                                            </div>
                                           
                                            <div className="card-text pb-3">
                                                <img src="/icons/viento.png" alt="iconoVelocidadViento" width={32} height={32} />
                                                <p>Velocidad del viento: 
                                                    <span className='temperature-number'>
                                                        {(weather.wind.speed).toFixed(1)}m/s
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <hr />
                                        
                                        <div className="row mt-2 text-center">
                                            <div className="col">
                                                <p className='date'>{forecastDate3}</p>
                                                <p className="description"><img src={iconUrl3} alt="iconoTiempoEn3h"/>{forecast.list[1].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[1].main.temp-273.15).toFixed(1)}ºC</p>
                                            </div>
                                            <div className="col">
                                                <p className='date'>{forecastDate6}</p>
                                                <p className="description"><img src={iconUrl6} alt="iconoTiempoEn3h"/>{forecast.list[2].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[2].main.temp-273.15).toFixed(1)}ºC</p>
                                            </div>
                                            <div className="col">
                                                <p className='date'>{forecastDate9}</p>
                                                <p className="description"><img src={iconUrl9} alt="iconoTiempoEn3h"/>{forecast.list[3].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[3].main.temp-273.15).toFixed(1)}ºC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className="text-light">Sin datos</h2>
                )
            }
        </div>
    )
}
