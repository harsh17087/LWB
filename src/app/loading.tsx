import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Loading: React.FC = () => {
  return (
    <Box p={2}>
      <Box display="flex" mb={4}>
        <Box flex="1" display="flex" flexDirection="column" gap={4}>
          <Skeleton variant="text" height={50}/>
          <Skeleton variant="text" height={50}/>
          <Skeleton variant="text" height={50}/>
        </Box>
        <Box flex="1" display="flex" justifyContent="flex-end">
          <Skeleton variant="rectangular" width={410} height={250} />
        </Box>
      </Box>
    <Box mb={2} display="flex" flexDirection={'column'} gap={2} justifyContent={'center'} alignItems="center">
      <Skeleton variant="text" width="50%" height={50}/>
      <Skeleton variant="text" width="50%" height={50}/>
    </Box>
      <Box display="flex" justifyContent="space-between">
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton variant="rectangular" width={250} height={118} />
      </Box>
    </Box>
  );
};

export default Loading;