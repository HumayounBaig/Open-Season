import { useState, useEffect } from "react"
import { showNotification } from "../helpers"

const useInternetConnection = () => {
  const [, setIsOnline] = useState(navigator.onLine)

  const updateOnlineStatus = () => {
    const onlineStatus = navigator.onLine
    setIsOnline(onlineStatus)

    if (onlineStatus === false) {
      showNotification(
        "You appear to be offline, Please try again with a working internet connection",
      )
    }
  }

  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])
}

export default useInternetConnection
