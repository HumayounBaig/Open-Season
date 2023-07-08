import { useState, useEffect } from "react"

interface GeoLocation {
  latitude: number
  longitude: number
}

interface GeoLocationState {
  location: GeoLocation | null
  error: string | null
}

// Define the type for the returned object
type UseGeoLocationReturn = {
  latitude: number | null
  longitude: number | null
  error: string | null
}

const useGeoLocation = (): UseGeoLocationReturn => {
  const [locationState, setLocationState] = useState<GeoLocationState>({
    location: null,
    error: null,
  })

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationState({
        location: null,
        error: "Geolocation is not supported by your browser",
      })
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationState({
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            error: null,
          })
        },
        (error) => {
          setLocationState({
            location: null,
            error: error.message,
          })
        },
      )
    }
  }, [])

  // Extract latitude and longitude from locationState
  const { latitude, longitude } = locationState.location || {
    latitude: null,
    longitude: null,
  }

  return { latitude, longitude, error: locationState.error }
}

export default useGeoLocation
