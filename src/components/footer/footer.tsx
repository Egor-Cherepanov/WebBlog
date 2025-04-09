import { useEffect, useState } from "react"
import { FooterProps, WeatherData } from "../../../public/types"
import styled from "styled-components"

const FooterContainer: React.FC<FooterProps> = ({ className }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=1350c0235e15dd40fea4c2a5a2e961c5"
    )
      .then((response) => response.json() as Promise<WeatherData>)
      .then((data) => {
        setWeatherData(data)
      })
  }, [])

  if (!weatherData) {
    return <div>Загрузка данных...</div>
  }

  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>
          {weatherData.name}{" "}
          {new Date().toLocaleDateString("ru", {
            day: "numeric",
            month: "long",
          })}
        </div>
        <div>
          {Math.round(weatherData.main.temp)}℃,{" "}
          {weatherData.weather[0].description}
        </div>
      </div>
    </div>
  )
}

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  font-weight: bold;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0px 2px 12px #000;
`
