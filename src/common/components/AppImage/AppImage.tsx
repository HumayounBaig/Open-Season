import React from "react"
import { ImageContainer } from "./AppImage.styles"

export const AppImage: React.FC<{ width?: number; src: string }> = ({
  width,
  src,
}) => {
  return (
    <div>
      <ImageContainer width={width} src={src} />
    </div>
  )
}
