import React, { useCallback } from 'react'
import { View, Text } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'

import { createStyles } from './styles'
import { useRouter } from 'expo-router'
import { CustomIcon, IconNames } from '../CustomIcon'

export default function PageHeader({ title }: { title: string }) {
  const styles = useThemedStyles(createStyles)

  const router = useRouter()

  const goBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <View style={styles.container}>
      <CustomIcon name={IconNames.ArrowBack} onPress={goBack} />
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}
