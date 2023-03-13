import { useState } from 'react'
import SearchWeather from './components/SearchWeather'
import WeatherCard from './components/WeatherCard'
import './assets/css/app.css';

function App() {

  return (
    <div className="App">
      <section>
        <SearchWeather/>
      </section>
      <main>
        <WeatherCard/>
      </main>
    </div>
  )
}

export default App
