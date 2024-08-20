import React, { type ComponentProps } from 'react'
import { Image, Text, View } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'
import { createStyles } from './styles'
import { CommonStrings } from '@/assets/strings/en'

type Props = ComponentProps<typeof Text>

export function EmptyResults({ style }: Props) {
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{CommonStrings.EmptyResults}</Text>
      <Image
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('../../assets/images/errorImage.png')}
        style={styles.image}
        resizeMode={'contain'}
      />
    </View>
  )
}
