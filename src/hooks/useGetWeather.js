import React, { useEffect, useState } from "react"
import * as Location from 'expo-location';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState(null)
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f3f0860a2fc42617a13d37e77f0240ff&units=metric`)
      const data = await response.json()

      console.log(data, 'data')

      setWeather(data)
    } catch (error) {
      setError('could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync({})

      if (status != 'granted') {
        setError('permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeather()
    })()
  }, [lat, lon])

  return [loading, error, weather]
}