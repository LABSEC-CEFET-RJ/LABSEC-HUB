import { defineRecipe, defineSlotRecipe } from "@chakra-ui/react";

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
      sm: {
        px: "1rem",
        py: "0.5rem",
        fontSize: "0.875rem"
      },
      md: {
        px: "1.5rem",
        py: "0.5rem",
        fontSize: "1rem"
      },
      lg: {
        px: "2rem",
        py: "0.5rem",
        fontSize: "1.25rem"
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
      sm: {
        control: { width: "4", height: "4" },
        label: { fontSize: "sm" },
      },
      md: {
        control: { width: "5", height: "5" },
        label: { fontSize: "md" },
      },
      lg: {
        control: { width: "6", height: "6" },
        label: { fontSize: "lg" },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const recipes = {
  buttonRecipe,
  inputRecipe,
  inputLabelRecipe
}

export const slotRecipes = {
  checkbox: checkboxSlotRecipe,
}
