import { Skeleton, Stack } from "@mui/material";
import React from "react";

const SideContentLoader: React.FC = () => {
  return (
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
  );
};

export default SideContentLoader;
