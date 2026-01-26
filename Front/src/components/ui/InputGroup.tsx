import { chakra } from "@chakra-ui/react";
import type { HTMLChakraProps } from "@chakra-ui/react";
import * as React from "react";
import { recipes } from "../../styles/recipes";

const Input = chakra("input", recipes.inputRecipe)
const Label = chakra("label", recipes.inputLabelRecipe)

export interface InputGroupProps extends HTMLChakraProps<"input"> {
    label?: string
    inputRef?: React.Ref<HTMLInputElement>
}

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