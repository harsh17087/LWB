import { Skeleton, Box } from "@mui/material";
import React from "react";

const FormLoader: React.FC = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default FormLoader;
