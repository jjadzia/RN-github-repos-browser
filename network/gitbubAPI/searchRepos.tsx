import { useCallback, useContext, useState } from 'react'
import axios from 'axios'
import { GITHUB_PATHS, GITHUB_URL } from './urls'
import { SearchResultsContext } from '@/contexts/SearchResultContext'

export default function useSearchResults() {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { searchResults, setSearchResults } = useContext(SearchResultsContext)

  const fetchSearchResults = useCallback((searchText: string) => {
    setIsLoading(true)

    axios({
      method: 'get',
      url: GITHUB_PATHS.SEARCH_REPOS,
      baseURL: GITHUB_URL,
      params: {
        q: searchText,
      },
    })
      .then((response) => {
        setSearchResults(
          response.data?.items.map((item) => ({
            id: String(item.id),
            stargazers_count: item.stargazers_count,
            watchers_count: item.watchers_count,
            forks_count: item.forks_count,
            name: item.name,
            description: item.description,
            avatar_url: item.owner.avatar_url,
          }))
        )
        setIsError(false)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const clearResults = useCallback(() => {
    setSearchResults([])
    setIsError(false)
  }, [])

  // console.log('ressssss ', Object.keys(data ?? {}), data?.[0])

  return {
    items: searchResults,
    isError,
    fetchSearchResults,
    clearResults,
    isLoading,
  }
}
