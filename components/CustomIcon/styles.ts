import { StyleSheet } from 'react-native'
import { Spacing } from '@/constants/Styling'
import { ColorsType } from '@/constants/Colors'

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    wrapper: {
      padding: Spacing.small,
    },
    iconColor: {
      color: colors.text,
    },
  })
