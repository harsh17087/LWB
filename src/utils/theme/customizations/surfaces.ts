import { alpha, Theme, Components } from "@mui/material/styles";
import { gray } from "../themePrimitives";

/**
 * Customizations for Material-UI components related to surfaces.
 * 
 * @type {Components<Theme>}
 */
export const surfacesCustomizations: Components<Theme> = {
  /**
   * Customizations for the MuiAccordion component.
   */
  MuiAccordion: {
    defaultProps: {
      /**
       * Default elevation for the accordion.
       * @default 0
       */
      elevation: 0,
      /**
       * Disable gutters for the accordion.
       * @default true
       */
      disableGutters: true,
    },
    styleOverrides: {
      /**
       * Style overrides for the root element of the accordion.
       * 
       * @param {object} theme - The theme object.
       * @returns {object} The style object.
       */
      root: ({ theme }) => ({
        padding: 4,
        overflow: "clip",
        backgroundColor: theme.palette.background.default,
        border: "1px solid",
        borderColor: theme.palette.divider,
        ":before": {
          backgroundColor: "transparent",
        },
        "&:not(:last-of-type)": {
          borderBottom: "none",
        },
        "&:first-of-type": {
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
        },
        "&:last-of-type": {
          borderBottomLeftRadius: theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.borderRadius,
        },
      }),
    },
  },
  /**
   * Customizations for the MuiAccordionSummary component.
   */
  MuiAccordionSummary: {
    styleOverrides: {
      /**
       * Style overrides for the root element of the accordion summary.
       * 
       * @param {object} theme - The theme object.
       * @returns {object} The style object.
       */
      root: ({ theme }) => ({
        border: "none",
        borderRadius: 8,
        "&:hover": { backgroundColor: gray[50] },
        "&:focus-visible": { backgroundColor: "transparent" },
        ...theme.applyStyles("dark", {
          "&:hover": { backgroundColor: gray[800] },
        }),
      }),
    },
  },
  /**
   * Customizations for the MuiAccordionDetails component.
   */
  MuiAccordionDetails: {
    styleOverrides: {
      /**
       * Style overrides for the root element of the accordion details.
       */
      root: { mb: 20, border: "none" },
    },
  },
  /**
   * Customizations for the MuiPaper component.
   */
  MuiPaper: {
    defaultProps: {
      /**
       * Default elevation for the paper.
       * @default 0
       */
      elevation: 0,
    },
  },
  /**
   * Customizations for the MuiCard component.
   */
  MuiCard: {
    styleOverrides: {
      /**
       * Style overrides for the root element of the card.
       * 
       * @param {object} theme - The theme object.
       * @returns {object} The style object.
       */
      root: ({ theme }) => {
        return {
          padding: 16,
          gap: 16,
          transition: "all 100ms ease",
          backgroundColor: gray[50],
          borderRadius: theme.shape.borderRadius,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "none",
          ...theme.applyStyles("dark", {
            backgroundColor: gray[800],
          }),
          variants: [
            {
              props: {
                variant: "outlined",
              },
              style: {
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: "none",
                background: "hsl(0, 0%, 100%)",
                ...theme.applyStyles("dark", {
                  background: alpha(gray[900], 0.4),
                }),
              },
            },
          ],
        };
      },
    },
  },
  /**
   * Customizations for the MuiCardContent component.
   */
  MuiCardContent: {
    styleOverrides: {
      /**
       * Style overrides for the root element of the card content.
       */
      root: {
        padding: 0,
        "&:last-child": { paddingBottom: 0 },
      },
    },
  },
  /**
   * Customizations for the MuiCardHeader component.
   */
  MuiCardHeader: {
    styleOverrides: {
      /**
       * Style overrides for the root element of the card header.
       */
      root: {
        padding: 0,
      },
    },
  },
  /**
   * Customizations for the MuiCardActions component.
   */
  MuiCardActions: {
    styleOverrides: {
      /**
       * Style overrides for the root element of the card actions.
       */
      root: {
        padding: 0,
      },
    },
  },
};
