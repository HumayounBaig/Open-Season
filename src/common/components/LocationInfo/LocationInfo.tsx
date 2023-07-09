import React from "react"
import {
  DateTimePreHeading,
  LocationContainer,
  LocationHeading,
} from "./LocationInfo.styles"
import { formatToLocalTime } from "../../../helpers"

export const LocationInfo: React.FC<{
  weather: {
    dt: number
    timezone: string
    name: string
    country: string
  }
}> = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <LocationContainer>
      <DateTimePreHeading>{formatToLocalTime(dt, timezone)}</DateTimePreHeading>
      <LocationHeading>
        {name}, {country}
      </LocationHeading>
    </LocationContainer>
  )
}
