import { Colors, ColorsType } from '@/constants/Colors'
import { useMemo } from 'react'
import { useColorScheme } from 'react-native'

function getColorsForTheme(isDarkMode: boolean) {
  if (isDarkMode) return Colors.dark

  return Colors.light
}

export function useThemedStyles<T>(createStyles: (colors: ColorsType) => T): T {
  const theme = useColorScheme() ?? 'light'

  return useMemo(() => {
    return createStyles(getColorsForTheme(theme === 'dark'))
  }, [theme, createStyles])
}
