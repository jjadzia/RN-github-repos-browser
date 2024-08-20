import { StyleSheet } from 'react-native'
import { ColorsType } from '@/constants/Colors'
import { BorderWidths, IconSize, Radius, Spacing } from '@/constants/Styling'

export const REPO_ITEM_HEIGHT = 80
export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.background,
      flexDirection: 'row',
      borderRadius: Radius.medium,
      borderWidth: BorderWidths.default,
      borderColor: colors.itemBorder,
      overflow: 'hidden',
      height: REPO_ITEM_HEIGHT,
    },
    textWrapper: {
      flex: 1,
      paddingHorizontal: Spacing.default,
      justifyContent: 'space-around',
    },
    titleText: {
      color: colors.text,
      fontWeight: 'bold',
    },
    descriptionText: {
      color: colors.text,
    },
    image: {
      width: IconSize.large,
      height: IconSize.large,
    },
  })
