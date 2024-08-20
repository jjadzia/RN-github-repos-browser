/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react'
import { Image, Pressable, ViewStyle } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'
import { createStyles } from './styles'
import { IconSize } from '@/constants/Styling'

export enum IconNames {
  StarFilled,
  Search,
  ArrowBack,
  Eye,
  CrossCircled,
}

const IconImages = {
  [IconNames.ArrowBack]: require('../../assets/icons/arrow_back.png'),
  [IconNames.CrossCircled]: require('../../assets/icons/cross_circled.png'),
  [IconNames.Eye]: require('../../assets/icons/eye.png'),
  [IconNames.Search]: require('../../assets/icons/search.png'),
  [IconNames.StarFilled]: require('../../assets/icons/star_filled.png'),
}

interface Props {
  name: IconNames
  style?: ViewStyle
  width?: number
  height?: number
  onPress?: () => void
}

export function CustomIcon({
  style,
  name,
  width = IconSize.medium,
  height = IconSize.medium,
  onPress,
}: Readonly<Props>) {
  const styles = useThemedStyles(createStyles)

  return (
    <Pressable style={[styles.wrapper, style]} onPress={onPress} hitSlop={15}>
      <Image
        source={IconImages[name]}
        style={{ width, height }}
        resizeMode={'contain'}
        tintColor={styles.iconColor.color}
      />
    </Pressable>
  )
}
