import { defineRecipe, defineSlotRecipe } from "@chakra-ui/react";

const textRecipe = defineRecipe({
  base: {
    color: "primary"
  }
})

const headingRecipe = defineRecipe({
  base: {
    color: "primary",
    fontWeight: "bold"
  }
})

const buttonRecipe = defineRecipe({
  base: {
    color: "white",
    borderRadius: "md",
    _hover: {
      transition: "all 0.2s ease-in-out",
      cursor: "pointer"
    }
  },
  variants: {
    variant: {
      primary: {
        bg: "primary",
        _hover: {
          bg: "primary.600"
        }
      },
      secondary: {
        bg: "secondary",
        _hover: {
          bg: "secondary.600"
        }
      }
    },
    size: {
      md: {
        px: "1.5rem",
        py: "0.5rem",
        fontSize: "1rem"
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

const inputLabelRecipe = defineRecipe({
  base: {
    color: "gray.500"
  }
})

const inputRecipe = defineRecipe({
  base: {
    w: "full",
    bg: "inherit",
    border: "2px solid",
    borderRadius: "sm",
    px: ".5rem",
    py: ".25rem",
    borderColor: "gray.400",
    color: "gray.500",
    _hover: {
      borderColor: "gray.500"
    }
  }
})

const checkboxSlotRecipe = defineSlotRecipe({
  className: "checkbox",
  slots: ["root", "control", "indicator", "label"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    control: {
      borderWidth: "2px",
      borderColor: "gray.400",
      borderRadius: "sm"
    },
    indicator: {
      color: "white",
    },
    label: {
      color: "primary",
      fontWeight: "medium",
    },
  },
  variants: {
    size: {
      md: {
        control: { width: "5", height: "5" },
        label: { fontSize: "md" },
      }
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const recipes = {
  button: buttonRecipe,
  input: inputRecipe,
  inputLabel: inputLabelRecipe,
  heading: headingRecipe,
  text: textRecipe
}

export const slotRecipes = {
  checkbox: checkboxSlotRecipe,
}
