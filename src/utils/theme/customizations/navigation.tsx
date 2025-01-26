import * as React from "react";
import { Theme, alpha, Components } from "@mui/material/styles";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { buttonBaseClasses } from "@mui/material/ButtonBase";
import { dividerClasses } from "@mui/material/Divider";
import { menuItemClasses } from "@mui/material/MenuItem";
import { selectClasses } from "@mui/material/Select";
import { tabClasses } from "@mui/material/Tab";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { gray, brand } from "../themePrimitives";

/**
 * Customizations for various Material-UI components to align with the theme.
 * 
 * @type {Components<Theme>}
 */
export const navigationCustomizations: Components<Theme> = {
  /**
   * Custom styles for the MuiMenuItem component.
   */
  MuiMenuItem: {
    styleOverrides: {
      /**
       * Overrides for the root element of MuiMenuItem.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        padding: "6px 8px",
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: "transparent",
        },
        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
      }),
    },
  },
  /**
   * Custom styles for the MuiMenu component.
   */
  MuiMenu: {
    styleOverrides: {
      /**
       * Overrides for the list element of MuiMenu.
       */
      list: {
        gap: "0px",
        [`&.${dividerClasses.root}`]: {
          margin: "0 -8px",
        },
      },
      /**
       * Overrides for the paper element of MuiMenu.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      paper: ({ theme }) => ({
        marginTop: "4px",
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: "none",
        background: "hsl(0, 0%, 100%)",
        boxShadow:
          "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px",
        [`& .${buttonBaseClasses.root}`]: {
          "&.Mui-selected": {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
        ...theme.applyStyles("dark", {
          background: gray[900],
          boxShadow:
            "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px",
        }),
      }),
    },
  },
  /**
   * Custom styles and default props for the MuiSelect component.
   */
  MuiSelect: {
    defaultProps: {
      /**
       * Custom icon component for the MuiSelect.
       * @param {object} props - The props for the icon component.
       * @param {React.Ref<SVGSVGElement>} ref - The ref for the icon component.
       * @returns {JSX.Element} - The custom icon component.
       */
      IconComponent: React.forwardRef<SVGSVGElement, SvgIconProps>(
        function IconComponent(props, ref) {
          return (
            <UnfoldMoreRoundedIcon fontSize="small" {...props} ref={ref} />
          );
        }
      ),
    },
    styleOverrides: {
      /**
       * Overrides for the root element of MuiSelect.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: "1px solid",
        borderColor: gray[200],
        backgroundColor: theme.palette.background.paper,
        boxShadow: `inset 0 1px 0 1px hsla(220, 0%, 100%, 0.6), inset 0 -1px 0 1px hsla(220, 35%, 90%, 0.5)`,
        "&:hover": {
          borderColor: gray[300],
          backgroundColor: theme.palette.background.paper,
          boxShadow: "none",
        },
        [`&.${selectClasses.focused}`]: {
          outlineOffset: 0,
          borderColor: gray[400],
        },
        "&:before, &:after": {
          display: "none",
        },
        ...theme.applyStyles("dark", {
          borderRadius: theme.shape.borderRadius,
          borderColor: gray[700],
          backgroundColor: theme.palette.background.paper,
          boxShadow: `inset 0 1px 0 1px ${alpha(
            gray[700],
            0.15
          )}, inset 0 -1px 0 1px hsla(220, 0%, 0%, 0.7)`,
          "&:hover": {
            borderColor: alpha(gray[700], 0.7),
            backgroundColor: theme.palette.background.paper,
            boxShadow: "none",
          },
          [`&.${selectClasses.focused}`]: {
            outlineOffset: 0,
            borderColor: gray[900],
          },
          "&:before, &:after": {
            display: "none",
          },
        }),
      }),
      /**
       * Overrides for the select element of MuiSelect.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      select: ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        ...theme.applyStyles("dark", {
          display: "flex",
          alignItems: "center",
          "&:focus-visible": {
            backgroundColor: gray[900],
          },
        }),
      }),
    },
  },
  /**
   * Custom styles and default props for the MuiLink component.
   */
  MuiLink: {
    defaultProps: {
      underline: "none",
    },
    styleOverrides: {
      /**
       * Overrides for the root element of MuiLink.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        fontWeight: 500,
        position: "relative",
        textDecoration: "none",
        width: "fit-content",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "1px",
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette.text.secondary,
          opacity: 0.3,
          transition: "width 0.3s ease, opacity 0.3s ease",
        },
        "&:hover::before": {
          width: 0,
        },
        "&:focus-visible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "4px",
          borderRadius: "2px",
        },
      }),
    },
  },
  /**
   * Custom styles for the MuiDrawer component.
   */
  MuiDrawer: {
    styleOverrides: {
      /**
       * Overrides for the paper element of MuiDrawer.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),
    },
  },
  /**
   * Custom styles for the MuiPaginationItem component.
   */
  MuiPaginationItem: {
    styleOverrides: {
      /**
       * Overrides for the root element of MuiPaginationItem.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      root: ({ theme }) => ({
        "&.Mui-selected": {
          color: "white",
          backgroundColor: theme.palette.grey[900],
        },
        ...theme.applyStyles("dark", {
          "&.Mui-selected": {
            color: "black",
            backgroundColor: theme.palette.grey[50],
          },
        }),
      }),
    },
  },
  /**
   * Custom styles for the MuiTabs component.
   */
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: "fit-content" },
      /**
       * Overrides for the indicator element of MuiTabs.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      indicator: ({ theme }) => ({
        backgroundColor: theme.palette.grey[800],
        ...theme.applyStyles("dark", {
          backgroundColor: theme.palette.grey[200],
        }),
      }),
    },
  },
  /**
   * Custom styles for the MuiTab component.
   */
  MuiTab: {
    styleOverrides: {
      /**
       * Overrides for the root element of MuiTab.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      root: ({ theme }) => ({
        padding: "6px 8px",
        marginBottom: "8px",
        textTransform: "none",
        minWidth: "fit-content",
        minHeight: "fit-content",
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        border: "1px solid",
        borderColor: "transparent",
        ":hover": {
          color: theme.palette.text.primary,
          backgroundColor: gray[100],
          borderColor: gray[200],
        },
        [`&.${tabClasses.selected}`]: {
          color: gray[900],
        },
        ...theme.applyStyles("dark", {
          ":hover": {
            color: theme.palette.text.primary,
            backgroundColor: gray[800],
            borderColor: gray[700],
          },
          [`&.${tabClasses.selected}`]: {
            color: "#fff",
          },
        }),
      }),
    },
  },
  /**
   * Custom styles for the MuiStepConnector component.
   */
  MuiStepConnector: {
    styleOverrides: {
      /**
       * Overrides for the line element of MuiStepConnector.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      line: ({ theme }) => ({
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
        flex: 1,
        borderRadius: "99px",
      }),
    },
  },
  /**
   * Custom styles for the MuiStepIcon component.
   */
  MuiStepIcon: {
    styleOverrides: {
      /**
       * Overrides for the root element of MuiStepIcon.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      root: ({ theme }) => ({
        color: "transparent",
        border: `1px solid ${gray[400]}`,
        width: 12,
        height: 12,
        borderRadius: "50%",
        "& text": {
          display: "none",
        },
        "&.Mui-active": {
          border: "none",
          color: theme.palette.primary.main,
        },
        "&.Mui-completed": {
          border: "none",
          color: theme.palette.success.main,
        },
        ...theme.applyStyles("dark", {
          border: `1px solid ${gray[700]}`,
          "&.Mui-active": {
            border: "none",
            color: theme.palette.primary.light,
          },
          "&.Mui-completed": {
            border: "none",
            color: theme.palette.success.light,
          },
        }),
        variants: [
          {
            props: { completed: true },
            style: {
              width: 12,
              height: 12,
            },
          },
        ],
      }),
    },
  },
  /**
   * Custom styles for the MuiStepLabel component.
   */
  MuiStepLabel: {
    styleOverrides: {
      /**
       * Overrides for the label element of MuiStepLabel.
       * @param {object} theme - The theme object.
       * @returns {object} - The style object.
       */
      label: ({ theme }) => ({
        "&.Mui-completed": {
          opacity: 0.6,
          ...theme.applyStyles("dark", { opacity: 0.5 }),
        },
      }),
    },
  },
};
