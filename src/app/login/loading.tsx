import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Loading() {
  return (
    <Box p={2}>
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
            {/* Content Skeleton */}
            <Stack
              sx={{
                flexDirection: "column",
                alignSelf: "center",
                gap: 4,
                maxWidth: 450,
              }}
            >
              {[...Array(4)].map((_, index) => (
                <Stack key={index} direction="row" sx={{ gap: 2 }}>
                  <Skeleton variant="circular" width={40} height={40} />
                  <div>
                    <Skeleton variant="text" width={200} height={30} />
                    <Skeleton variant="text" width={250} height={20} />
                  </div>
                </Stack>
              ))}
            </Stack>

            {/* SignInCard Skeleton */}
            <Box p={2} width="100%" maxWidth={450}></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 3,
              }}
            >
              <Skeleton variant="text" height={20} width={200} />
              <Skeleton variant="rectangular" width={400} height={25} />
              <Skeleton variant="text" width={200} height={20} />
              <Skeleton variant="rectangular" width={400} height={25} />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={25}
                sx={{ mt: 2 }}
              />
              <Skeleton variant="text" width={200} height={20} />
              <Skeleton variant="rectangular" width={400} height={25} />
              <Skeleton variant="rectangular" width={400} height={25} />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
