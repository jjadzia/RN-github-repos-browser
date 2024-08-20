import { StyleSheet } from 'react-native'
import { Spacing } from '@/constants/Styling'

export const createStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: Spacing.small,
      paddingHorizontal: Spacing.small,
    },
    separator: {
      height: Spacing.small,
    },
  })
