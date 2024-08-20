import React, { useCallback, type ComponentProps } from 'react'
import { FlatList, View } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'
import RepoItem from '../RepoItem'
import { createStyles } from './styles'
import { RepoListItemType } from '@/models/githubRepos'

type Props = Omit<
  ComponentProps<typeof FlatList<RepoListItemType>>,
  'renderItem'
>

export function ReposList({ data, style, ...props }: Readonly<Props>) {
  const styles = useThemedStyles(createStyles)

  const Separator = useCallback(
    () => <View style={styles.separator} />,
    [styles]
  )

  return (
    <FlatList
      data={data}
      style={[styles.container, style]}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      {...props}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => <RepoItem item={item} />}
    />
  )
}
