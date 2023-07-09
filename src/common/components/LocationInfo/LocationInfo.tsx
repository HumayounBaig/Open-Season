import React from "react"
import {
  DateTimePreHeading,
  LocationContainer,
  LocationHeading,
} from "./LocationInfo.styles"

export const LocationInfo = () => {
  return (
    <LocationContainer>
      <DateTimePreHeading>
        Tuesday, 31 may 2023 | local time: 7:20pm{" "}
      </DateTimePreHeading>
      <LocationHeading>Karachi, PK</LocationHeading>
    </LocationContainer>
  )
}
