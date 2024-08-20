import React, {
  useCallback,
  useRef,
  useState,
  type ComponentProps,
} from 'react'
import { Pressable, TextInput, ViewStyle } from 'react-native'

import { useThemedStyles } from '@/hooks/useThemedStyles'
import { createStyles } from './styles'
import { CustomIcon, IconNames } from '../CustomIcon'
import { CommonStrings } from '@/assets/strings/en'

type Props = ComponentProps<typeof TextInput> & {
  containerStyle?: ViewStyle
  showXIcon?: boolean
  onClear?: () => void
}

export function TextField({
  containerStyle,
  showXIcon,
  onClear,
  ...props
}: Props) {
  const styles = useThemedStyles(createStyles)

  const textInputRef = useRef<TextInput>(null)

  const [isInputFocused, setIsInputFocused] = useState(false)

  const focusInput = useCallback(() => {
    if (!textInputRef?.current?.isFocused()) textInputRef?.current?.focus()
  }, [textInputRef])

  const onFocus = useCallback(() => {
    setIsInputFocused(true)
  }, [])
  const onBlur = useCallback(() => {
    setIsInputFocused(false)
  }, [])
  const onXPress = useCallback(() => {
    textInputRef?.current?.clear()
    onClear?.()
  }, [])

  return (
    <Pressable
      style={[
        styles.wrapper,
        containerStyle,
        isInputFocused && styles.focusedBorder,
      ]}
      onPress={focusInput}
    >
      <CustomIcon name={IconNames.Search} onPress={focusInput} />
      <TextInput
        style={styles.textInput}
        ref={textInputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={CommonStrings.SearchPlaceholder}
        {...props}
      />
      {showXIcon && (
        <CustomIcon name={IconNames.CrossCircled} onPress={onXPress} />
      )}
    </Pressable>
  )
}
