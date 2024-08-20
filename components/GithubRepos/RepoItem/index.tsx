import React, { useCallback } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

import { useThemedStyles } from '@/hooks/useThemedStyles'
import { createStyles, REPO_ITEM_HEIGHT } from './styles'
import { AutoSizeImage } from '@/components/AutoSizeImage/AutoSizeImage'
import { RepoListItemType } from '@/models/githubRepos'

export default function RepoItem({
  item,
}: Readonly<{ item: RepoListItemType }>) {
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
      <AutoSizeImage uri={item.avatar_url} height={REPO_ITEM_HEIGHT} />
    </Pressable>
  )
}
