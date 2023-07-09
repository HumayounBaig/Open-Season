import { styled } from "styled-components"
import { FlexWrapper } from "../../styles/CommonStyles"

export const TemperatureContainer = styled.div`
  padding: 32px;
`

export const WeatherStatus = styled.div`
  font-weight: 300;
  color: cyan;
  font-size: 20px;
  padding-block: 24px;
`

export const TemperatureHeading = styled.div`
  font-size: 48px;
  color: white;
`

export const TemperatureInfo = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin: 4px;
  .temp-icon {
    margin-right: 6px;
  }
  span {
    margin-left: 4px;
  }
`

export const SunDetailsRow = styled(FlexWrapper)``
