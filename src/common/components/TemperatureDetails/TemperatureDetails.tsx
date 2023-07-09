import React from "react"
import { FlexWrapper } from "../../styles/CommonStyles"
import {
  SunDetailsRow,
  TemperatureContainer,
  TemperatureHeading,
  TemperatureInfo,
  WeatherStatus,
} from "./TemperatureDetails.styles"
import { AppImage } from "../AppImage/AppImage"
import { FaTemperatureEmpty, FaDroplet, FaWind, FaSun } from "react-icons/fa6"
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsSunrise,
  BsSunset,
} from "react-icons/bs"
import { Separator } from "../Search/Search.styles"
import { createIconUrl, formatToLocalTime } from "../../../helpers"

export const TemperatureDetails: React.FC<{
  weather: {
    details: string
    icon: string
    temp: number
    temp_min: number
    temp_max: number
    sunrise: number
    sunset: number
    speed: number
    humidity: number
    feels_like: number
    timezone: string
  }
}> = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <TemperatureContainer>
      <WeatherStatus>{details}</WeatherStatus>
      <FlexWrapper justifyContent="space-between">
        <AppImage src={createIconUrl(icon)} alt="weather-symbol" />
        <TemperatureHeading>{temp.toFixed()}</TemperatureHeading>
        <FlexWrapper flexDirection="column" alignItems="space-between">
          <TemperatureInfo>
            <FaTemperatureEmpty className="temp-icon" /> Real Feel:{" "}
            <span>{feels_like.toFixed()}</span>
          </TemperatureInfo>
          <TemperatureInfo>
            <FaDroplet className="temp-icon" />
            Humidity: <span>{humidity.toFixed()}</span>
          </TemperatureInfo>
          <TemperatureInfo>
            <FaWind className="temp-icon" />
            Wind: <span>{speed.toFixed()}</span>
          </TemperatureInfo>
        </FlexWrapper>
      </FlexWrapper>

      <SunDetailsRow>
        <TemperatureInfo>
          <BsSunrise className="temp-icon" />
          Rise: <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </TemperatureInfo>
        <Separator>|</Separator>
        <TemperatureInfo>
          <BsSunset className="temp-icon" />
          Set: <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </TemperatureInfo>
        <Separator>|</Separator>

        <TemperatureInfo>
          <BsArrowUpCircle className="temp-icon" />
          High: <span>{temp_max.toFixed()}°</span>
        </TemperatureInfo>
        <Separator>|</Separator>

        <TemperatureInfo>
          <BsArrowDownCircle className="temp-icon" />
          Low: <span>{temp_min.toFixed()}°</span>
        </TemperatureInfo>
      </SunDetailsRow>
    </TemperatureContainer>
  )
}
