import { StyleSheet } from 'react-native'
import { ColorsType } from '@/constants/Colors'
import { Spacing } from '@/constants/Styling'

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: Spacing.large,
      alignItems: 'center',
    },
    text: {
      color: colors.text,
      padding: Spacing.small,
    },
    image: {
      width: 300,
      height: 300,
    },
  })
