import React from "react"
import {
  ForecastCardWrapper,
  ForecastContainer,
  Header,
} from "./Forecast.styles"
import { AppImage } from "../AppImage/AppImage"
import { FlexWrapper } from "../../styles/CommonStyles"

export const Forecast: React.FC<{ title: string }> = ({ title }) => {
  const ForcastCard = () => (
    <ForecastCardWrapper>
      <p>04:30pm</p>
      <AppImage
        src="http://openweathermap.org/img/wn/01d@2x.png"
        alt="weather-symbol"
      />
      <p>22°</p>
    </ForecastCardWrapper>
  )
  return (
    <ForecastContainer>
      <Header>{title}</Header>
      <hr />
      <FlexWrapper>
        {[1, 2, 3, 4, 5].map((item) => (
          <ForcastCard />
        ))}
      </FlexWrapper>
    </ForecastContainer>
  )
}
