import React, { useCallback } from 'react'
import { View, Text, Pressable } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'

import { createStyles } from './styles'
import { RepoListItem } from '../RepoList'
import { AutoSizeImage } from '@/components/AutoSizeImage/AutoSizeImage'
import { useRouter } from 'expo-router'

export default function RepoItem({ item }: { item: RepoListItem }) {
  const styles = useThemedStyles(createStyles)

  const router = useRouter()

  const goToDetails = useCallback(() => {
    router.navigate(`/${item.id}`)
  }, [router])

  return (
    <Pressable style={styles.container} onPress={goToDetails}>
      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.descriptionText}>
          {item.description}
        </Text>
      </View>
      <AutoSizeImage uri={item.avatar_url} height={80} />
    </Pressable>
  )
}
