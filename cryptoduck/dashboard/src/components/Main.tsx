import * as React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";


export const Main=() => (
    <>
        <Typography
            component="h1"
            variant="h3"
            color="inherit"
            noWrap
            sx={{
            alignItems: "center",
            mt: 10,
            ml: 50
            }}
        >
            Find your Crypto
        </Typography>

        <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            sx={{
            alignItems: "center",
            mt: 4,
            ml: 65
            }}
            >
            <Button variant="contained">Start Now</Button>
        </Typography>
    </>
)

export default Main; 