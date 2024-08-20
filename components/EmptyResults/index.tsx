import React from 'react'
import { Image, Text, View, ViewStyle } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'
import { createStyles } from './styles'
import { CommonStrings } from '@/assets/strings/en'

type Props = {
  style?: ViewStyle
  additionalText?: string
}

export function EmptyResults({ style, additionalText }: Readonly<Props>) {
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>
        {CommonStrings.EmptyResults}
        {additionalText ? ` '${additionalText}'` : ''}
      </Text>
      <Image
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('../../assets/images/errorImage.png')}
        style={styles.image}
        resizeMode={'contain'}
      />
    </View>
  )
}
