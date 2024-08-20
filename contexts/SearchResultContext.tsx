import React, { createContext, useState, ReactNode, FC, useMemo } from 'react'
import { RepoListItemType } from '@/models/githubRepos'

export interface SearchResultsContextType {
  searchResults: RepoListItemType[]
  setSearchResults: React.Dispatch<React.SetStateAction<RepoListItemType[]>>
}

const defaultContextValue: SearchResultsContextType = {
  searchResults: [],
  setSearchResults: () => {},
}

export const SearchResultsContext =
  createContext<SearchResultsContextType>(defaultContextValue)

export const SearchResultsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<RepoListItemType[]>([])

  const contextValue = useMemo(
    () => ({ searchResults, setSearchResults }),
    [searchResults, setSearchResults]
  )
  return (
    <SearchResultsContext.Provider value={contextValue}>
      {children}
    </SearchResultsContext.Provider>
  )
}
