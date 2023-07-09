import React from "react"
import {
  ForecastCardWrapper,
  ForecastContainer,
  Header,
} from "./Forecast.styles"
import { AppImage } from "../AppImage/AppImage"
import { FlexWrapper } from "../../styles/CommonStyles"
import { createIconUrl } from "../../../helpers"

const ForcastCard = ({
  item: { title, icon, temp },
}: {
  item: {
    title: string
    icon: string
    temp: number
  }
}) => (
  <ForecastCardWrapper>
    <p>{title}</p>
    <AppImage src={createIconUrl(icon)} alt="weather-symbol" />
    <p>{temp.toFixed()}°</p>
  </ForecastCardWrapper>
)

export const Forecast: React.FC<{ title: string; items: any[] }> = ({
  title,
  items,
}) => {
  return (
    <ForecastContainer>
      <Header>{title}</Header>
      <hr />
      <FlexWrapper>
        {items.map((today) => (
          <ForcastCard item={today} />
        ))}
      </FlexWrapper>
    </ForecastContainer>
  )
}
