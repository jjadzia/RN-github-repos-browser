import { StyleSheet } from 'react-native'
import { ColorsType } from '@/constants/Colors'
import { BorderWidths, Spacing, Radius } from '@/constants/Styling'

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      gap: Spacing.small,
      borderRadius: Radius.small,
      borderWidth: BorderWidths.default,
      borderColor: colors.text,
      margin: Spacing.default,
    },
    focusedBorder: {
      borderColor: colors.fieldBorder,
    },
    textInput: {
      flex: 1,
      color: colors.text,
    },
  })
