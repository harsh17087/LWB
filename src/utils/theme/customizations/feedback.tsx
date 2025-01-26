import { Theme, alpha, Components } from '@mui/material/styles';
import { gray, orange } from '../themePrimitives';

// Define customizations for MUI components
export const feedbackCustomizations: Components<Theme> = {
  // Customizations for the MuiAlert component
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        // Set border radius for the alert
        borderRadius: 10,
        // Set background color using the orange palette
        backgroundColor: orange[100],
        // Set text color to the primary text color from the theme
        color: theme.palette.text.primary,
        // Set border with a semi-transparent orange color
        border: `1px solid ${alpha(orange[300], 0.5)}`,
        // Customize the color of the alert icon
        '& .MuiAlert-icon': {
          color: orange[500],
        },
        // Apply additional styles when the theme is in dark mode
        ...theme.applyStyles('dark', {
          backgroundColor: `${alpha(orange[900], 0.5)}`,
          border: `1px solid ${alpha(orange[800], 0.5)}`,
        }),
      }),
    },
  },
  // Customizations for the MuiDialog component
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        // Customize the dialog paper element
        '& .MuiDialog-paper': {
          // Set border radius for the dialog
          borderRadius: '10px',
          // Set border with color from the theme divider
          border: '1px solid',
          borderColor: theme.palette.divider,
        },
      }),
    },
  },
  // Customizations for the MuiLinearProgress component
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        // Set height and border radius for the linear progress bar
        height: 8,
        borderRadius: 8,
        // Set background color using the gray palette
        backgroundColor: gray[200],
        // Apply additional styles when the theme is in dark mode
        ...theme.applyStyles('dark', {
          backgroundColor: gray[800],
        }),
      }),
    },
  },
};
