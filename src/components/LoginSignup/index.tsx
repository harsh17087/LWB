"use client";
import React, { Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import AppTheme from "../../utils/theme/AppTheme";
import SideContentLoader from "../LoadingSkeleton/LoginSignup/SideContentLoader";
import FormLoader from "../LoadingSkeleton/LoginSignup/FormLoader";

const Content = React.lazy(() => import("./Content"));
const SignInCard = React.lazy(() => import("./SignInCard"));

/**
 * LoginSignup component renders the login and signup interface.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} [props.disableCustomTheme] - Optional flag to disable custom theme.
 *
 * @returns {JSX.Element} The rendered LoginSignup component.
 *
 * The component uses the following structure:
 * - AppTheme: A wrapper component that applies the theme.
 * - CssBaseline: A component to apply CSS baseline.
 * - Stack: A layout component from MUI used to arrange child components in a column direction.
 *   - The main Stack component has styles to center its content and apply a background gradient.
 *   - Nested Stack components are used to arrange the Content and SignInCard components.
 *
 * The component also applies responsive styles to adjust the layout for different screen sizes.
 */
export default function LoginSignup(props: {
  disableCustomTheme?: boolean;
}): React.JSX.Element {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Stack
        direction="column"
        component="main"
        sx={[
          {
            justifyContent: "center",
            height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
            marginTop: "max(20px - var(--template-frame-height, 0px), 0px)",
            minHeight: "100%",
          },
          (theme) => ({
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              zIndex: -1,
              inset: 0,
              backgroundImage:
                "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
              backgroundRepeat: "no-repeat",
              ...theme.applyStyles("dark", {
                backgroundImage:
                  "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
              }),
            },
          }),
        ]}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "center",
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: "auto",
          }}
        >
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{
              justifyContent: "center",
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: "auto",
            }}
          >
            <Suspense fallback={<SideContentLoader/>}>
              <Content />
            </Suspense>
            <Suspense fallback={<FormLoader/>}>
              <SignInCard />
            </Suspense>
          </Stack>
        </Stack>
      </Stack>
    </AppTheme>
  );
}
