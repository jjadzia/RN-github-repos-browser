import React, { useCallback, useMemo, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'
import { createStyles } from './styles'
import { EmptyResults } from '@/components/EmptyResults'
import { TextField } from '@/components/TextField/TextField'
import { ReposList } from '@/components/GithubRepos/RepoList'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useSearchResults from '@/network/gitbubAPI/searchRepos'
import debounce from 'lodash/debounce'

export function HomePage() {
  const styles = useThemedStyles(createStyles)
  const insets = useSafeAreaInsets()

  const [inputText, setInputText] = useState('')
  const { items, fetchSearchResults, clearResults, isLoading } =
    useSearchResults()

  const onTextChange = debounce((text: string) => {
    setInputText(text)
    fetchSearchResults(text)
  }, 500)

  const PageContent = useMemo(() => {
    if (isLoading)
      return <ActivityIndicator style={styles.container} size={'large'} />
    if (items.length) return <ReposList data={items} />
    if (inputText) return <EmptyResults />
  }, [items, isLoading, inputText])

  const onClear = useCallback(() => {
    setInputText('')
    clearResults()
  }, [])

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <TextField
        onChangeText={onTextChange}
        onClear={onClear}
        showXIcon={!!items.length}
      />
      {PageContent}
    </View>
  )
}
