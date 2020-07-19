import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const CityInfo = () => {
  const city = useSelector((state) => state.city);
  return (
    <React.Fragment>
      <div className="card border-primary col-md-4 offset-md-4 mt-4">
        <div className="card-body ">
          <div className="row">
            <div className="mx-auto mb-3">
              <img
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                alt={city}
                style={{ width: "150px" }}
              />
            </div>

            <div>
              <ul>
                <li>
                  <strong>Description</strong>: {city.weather[0].description}.
                </li>
                <li>
                  <strong>Temperature</strong>: {Math.floor(city.main.temp)} &deg;С.
                </li>
                <li>
                  <strong>Feels like</strong>: {Math.floor(city.main.feels_like)} &deg;С.
                </li>
                <li>
                  <strong>Temperature max</strong>: {Math.floor(city.main.temp_max)} &deg;С.
                </li>
                <li>
                  <strong>Temperature min</strong>: {Math.floor(city.main.temp_min)} &deg;С.
                </li>
                <li>
                  <strong>Wind speed</strong>: {city.wind.speed} m/s.
                </li>
                <li>
                  <strong>Pressure</strong>: {city.main.pressure} hPa.
                </li>
                <li>
                  <strong>Humidity</strong>: {city.main.humidity}%.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="/" className="btn btn-primary mb-3">
          On the main page
        </Link>
      </div>
    </React.Fragment>
  );
};
