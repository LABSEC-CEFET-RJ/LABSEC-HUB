import { Checkbox as ChakraCheckbox } from "@chakra-ui/react"
import * as React from "react"

type CheckboxSize = "sm" | "md" | "lg"

export interface CheckboxProps extends Omit<ChakraCheckbox.RootProps, "size"> {
  icon?: React.ReactNode
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.Ref<HTMLLabelElement>
  size?: CheckboxSize
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const { children, icon, inputProps, rootRef, size = "md", ...rest } = props
    return (
      <ChakraCheckbox.Root ref={rootRef} size={size} {...rest}>
        <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} />
        <ChakraCheckbox.Control 
          _checked={{bg: "#674BB4", borderColor: "#674BB4"}} 
          _hover={{ borderColor: "#674BB4"}}
        >
          <ChakraCheckbox.Indicator>
            {icon}
          </ChakraCheckbox.Indicator>
        </ChakraCheckbox.Control>
        {children != null && (
          <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    )
  }
)

export interface CheckboxGroupProps extends ChakraCheckbox.GroupProps { }

export const CheckboxGroup = ChakraCheckbox.Group
