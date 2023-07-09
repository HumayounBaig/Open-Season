import React from "react"
import { ImageContainer } from "./AppImage.styles"

export const AppImage: React.FC<{
  width?: number
  src: string
  alt: string
}> = (props) => {
  return (
    <div>
      <ImageContainer {...props} />
    </div>
  )
}
