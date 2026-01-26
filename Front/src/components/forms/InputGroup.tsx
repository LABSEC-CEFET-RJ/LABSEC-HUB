import { chakra } from "@chakra-ui/react";
import type { HTMLChakraProps } from "@chakra-ui/react";
import * as React from "react";
import { recipes } from "../../styles/recipes";

/** Componente de input estilizado com as receitas do tema */
const Input = chakra("input", recipes.input)

/** Componente de label estilizado com as receitas do tema */
const Label = chakra("label", recipes.inputLabel)

/**
 * Props do componente InputGroup
 * @extends HTMLChakraProps<"input"> - Herda todas as props de um input HTML com suporte a estilos Chakra UI
 */
export interface InputGroupProps extends HTMLChakraProps<"input"> {
    /** Texto do label exibido acima do input */
    label?: string
    /** Ref para acessar diretamente o elemento input interno */
    inputRef?: React.Ref<HTMLInputElement>
}

/**
 * Componente de grupo de input com label opcional.
 * Combina um label e um input estilizado em um único componente.
 * 
 * @example
 * ```tsx
 * // Com label
 * <InputGroup label="Email" id="email" placeholder="Digite seu email" />
 * 
 * // Sem label
 * <InputGroup placeholder="Digite aqui..." />
 * 
 * // Com ref para o input
 * const inputRef = useRef<HTMLInputElement>(null)
 * <InputGroup inputRef={inputRef} label="Nome" />
 * ```
 */
export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
    function InputGroup(props, ref) {
        const { label, inputRef, ...inputProps } = props
        return (
            <div ref={ref}>
                {label && <Label htmlFor={inputProps.id}>{label}</Label>}
                <Input ref={inputRef} {...inputProps} />
            </div>
        )
    }
)