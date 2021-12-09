import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
    return (
        <div style={{backgroundColor:"gainsboro",height:"100vh"}}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress
                    size={68}
                    sx={{
                        position: 'absolute',
                        top: "50%",
                        left: "50%",
                        zIndex: 1,
                    }}
                />
            </Box>
        </div>
    );
}

export default Loader;