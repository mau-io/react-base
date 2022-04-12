import React, { Component } from 'react'
import {Context} from '../context/userContext'

const view = (data) => (
  <div class="row mb-2">
    <div class="app text-center">

      <div class="col p-4 d-flex flex-column position-static">
        <h3 class="mb-0">
          <strong class="d-inline-block mb-2  text-center">
            <span id="cityName">{data?.name + ', ' + data?.sys?.country}</span>
          </strong>
        </h3>

        <b>Pressure: <span id="pressure">{data?.main?.pressure}</span> | Humidity: <span id="humidity">{data?.main?.humidity}</span>%</b>
        <p> <span id="temp">{data?.main?.temp}</span><sup style={{ marginRight: '3.5rem' }}>°C</sup></p>

        <p> <img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt="" id="icon" /></p>
        <p> <span id="main">{data?.weather[0]?.main}</span>, <span id="description">{data?.weather[0]?.description}</span></p>

        <p>Feels like: <span id="feels_like">{data?.main?.feels_like}</span><sup>°C</sup></p>
        <p>Temp min: <span id="temp_min">{data?.main?.temp_min}</span><sup>°C</sup></p>
        <p>Temp max: <span id="temp_max">{data?.main?.temp_max}</span><sup>°C</sup></p>
      </div>

    </div>
  </div>
)

export default class ComponentC extends Component {
  render() {
    return (
      <Context.Consumer>
        {
         (data) =>  data ? view(data) : 'Loading...'
        }
      </Context.Consumer>
    )
  }
}
