import React from 'react'
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

const mock = {
  id: 1,
  stargazers_count: 2,
  watchers_count: 3,
  forks_count: 4,
  name: 'ddddd',
  description: 'ddsaf ffsdfdfd fsfsfdf',
  avatar_url:
    'data:image/jpeg;base64,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',
}
export default function RepoDetails() {
  const styles = useThemedStyles(createStyles)
  const repoId = useLocalSearchParams()

  const insets = useSafeAreaInsets()

  const imageWidth = Dimensions.get('window').width - 2 * Spacing.default

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <PageHeader title={mock.name} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
          paddingHorizontal: Spacing.default,
          gap: Spacing.small,
        }}
      >
        <AutoSizeImage
          uri={mock.avatar_url}
          width={imageWidth}
          style={styles.image}
        />
        <View style={styles.aboutContainer}>
          <Text style={styles.headerText}>{CommonStrings.About}</Text>
          <Text style={styles.detailsText}>{mock.description}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>{CommonStrings.Fork}</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.detailsText}>{mock.forks_count}</Text>
            <CustomIcon name={IconNames.Search} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>{CommonStrings.Stars}</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.detailsText}>{mock.stargazers_count}</Text>
            <CustomIcon name={IconNames.StarFilled} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>{CommonStrings.Watchers}</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.detailsText}>{mock.watchers_count}</Text>
            <CustomIcon name={IconNames.Eye} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
