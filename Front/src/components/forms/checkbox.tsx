import { Checkbox as ChakraCheckbox } from "@chakra-ui/react"
import * as React from "react"

/** Tamanhos disponíveis para o checkbox */
type CheckboxSize = "sm" | "md" | "lg"

/**
 * Props do componente Checkbox
 * @extends Omit<ChakraCheckbox.RootProps, "size"> - Herda todas as props do Chakra Checkbox, exceto size que é redefinido
 */
export interface CheckboxProps extends Omit<ChakraCheckbox.RootProps, "size"> {
  /** Ícone customizado para exibir quando o checkbox está marcado */
  icon?: React.ReactNode
  /** Props adicionais para o elemento input nativo */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  /** Ref para acessar o elemento label raiz */
  rootRef?: React.Ref<HTMLLabelElement>
  /** Tamanho do checkbox: "sm", "md" ou "lg" */
  size?: CheckboxSize
}

/**
 * Componente de checkbox customizado baseado no Chakra UI.
 * Suporta ícone personalizado, tamanhos variados e todas as funcionalidades do Checkbox nativo.
 * 
 * @example
 * ```tsx
 * // Básico
 * <Checkbox>Aceito os termos</Checkbox>
 * 
 * // Com tamanho
 * <Checkbox size="lg">Checkbox grande</Checkbox>
 * 
 * // Controlado
 * <Checkbox checked={isChecked} onCheckedChange={(e) => setIsChecked(!!e.checked)}>
 *   Controlado
 * </Checkbox>
 * 
 * // Com ícone customizado
 * import { Check } from "lucide-react"
 * <Checkbox icon={<Check size={12} />}>Com ícone</Checkbox>
 * ```
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const { children, icon, inputProps, rootRef, size = "md", ...rest } = props
    return (
      <ChakraCheckbox.Root ref={rootRef} size={size} {...rest}>
        <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} />
        <ChakraCheckbox.Control
          _checked={{ bg: "#674BB4", borderColor: "#674BB4" }}
          _hover={{ borderColor: "#674BB4" }}
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

/**
 * Props do componente CheckboxGroup
 * @extends ChakraCheckbox.GroupProps - Herda todas as props do grupo de checkbox do Chakra UI
 */
export interface CheckboxGroupProps extends ChakraCheckbox.GroupProps { }

/**
 * Componente para agrupar múltiplos checkboxes.
 * Permite gerenciar o estado de vários checkboxes como um grupo.
 * 
 * @example
 * ```tsx
 * <CheckboxGroup defaultValue={["opcao1"]}>
 *   <Checkbox value="opcao1">Opção 1</Checkbox>
 *   <Checkbox value="opcao2">Opção 2</Checkbox>
 *   <Checkbox value="opcao3">Opção 3</Checkbox>
 * </CheckboxGroup>
 * ```
 */
export const CheckboxGroup = ChakraCheckbox.Group
