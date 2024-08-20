import { StyleSheet } from 'react-native'
import { ColorsType } from '@/constants/Colors'
import { Spacing } from '@/constants/Styling'

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      flex: 1,
      paddingHorizontal: Spacing.small,
      textAlign: 'center',
      color: colors.text,
    },
  })
