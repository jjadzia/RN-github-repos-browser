import { StyleSheet } from 'react-native'
import { ColorsType } from '@/constants/Colors'
import { BorderWidths, Spacing } from '@/constants/Styling'

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    headerText: {
      color: colors.text,
      fontWeight: 'bold',
    },
    detailsText: {
      color: colors.text,
    },
    aboutContainer: {
      gap: Spacing.small,
    },
    scrollView: {
      width: '100%',
    },
    image: {
      alignSelf: 'center',
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: BorderWidths.default,
      borderColor: colors.itemBorder,
    },
    counterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
