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
  showReturnIcon?: boolean
  onTextChange?: (text: string) => void
}

export function TextField({ containerStyle, ...props }: Props) {
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
        {...props}
        ref={textInputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={CommonStrings.SearchPlaceholder}
      />
    </Pressable>
  )
}
