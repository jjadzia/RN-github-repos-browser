import React, { useEffect, useState } from 'react'
import { Image, ImageStyle } from 'react-native'
import { createStyles } from './styles'
import { useThemedStyles } from '@/hooks/useThemedStyles'

interface Props {
  width?: number
  height?: number
  uri: string
  style?: ImageStyle
}

export function AutoSizeImage({ width, height, uri, style }: Props) {
  const styles = useThemedStyles(createStyles)

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (width && height) setImageSize({ width, height })
    Image.getSize(uri, (imgWidth, imgHeight) => {
      const aspectRatio = imgWidth / imgHeight
      if (width) setImageSize({ width, height: width / aspectRatio })
      else if (height) setImageSize({ width: height * aspectRatio, height })
    })
  }, [uri])

  return <Image source={{ uri }} style={[styles.image, style, imageSize]} />
}
