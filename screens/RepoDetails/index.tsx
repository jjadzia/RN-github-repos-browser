import React, { useContext } from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'
import { createStyles } from './styles'
import { CustomIcon, IconNames } from '@/components/CustomIcon'
import PageHeader from '@/components/PageHeader'
import { useLocalSearchParams } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AutoSizeImage } from '@/components/AutoSizeImage/AutoSizeImage'
import { Spacing } from '@/constants/Styling'
import { CommonStrings } from '@/assets/strings/en'
import { SearchResultsContext } from '@/contexts/SearchResultContext'
import { EmptyResults } from '@/components/EmptyResults'

export default function RepoDetails() {
  const styles = useThemedStyles(createStyles)
  const { searchResults } = useContext(SearchResultsContext)

  const { repoId } = useLocalSearchParams<{ repoId: string }>()
  const item = searchResults.find((i) => i.id === repoId)

  const insets = useSafeAreaInsets()

  const imageWidth = Dimensions.get('window').width - 2 * Spacing.default

  if (!item) return <EmptyResults />

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <PageHeader title={item?.name} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
          paddingHorizontal: Spacing.default,
          gap: Spacing.small,
        }}
      >
        <AutoSizeImage
          uri={item.avatar_url}
          width={imageWidth}
          style={styles.image}
        />
        <View style={styles.aboutContainer}>
          <Text style={styles.headerText}>{CommonStrings.About}</Text>
          <Text style={styles.detailsText}>{item.description}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>{CommonStrings.Fork}</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.detailsText}>{item.forks_count}</Text>
            <CustomIcon name={IconNames.Search} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>{CommonStrings.Stars}</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.detailsText}>{item.stargazers_count}</Text>
            <CustomIcon name={IconNames.StarFilled} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>{CommonStrings.Watchers}</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.detailsText}>{item.watchers_count}</Text>
            <CustomIcon name={IconNames.Eye} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
