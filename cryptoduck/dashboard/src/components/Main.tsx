import * as React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import { Routes, Route, Link } from "react-router-dom";


export const Main=() => (
    <>

        <Typography
            component="h1"
            variant="h3"
            color="inherit"
            noWrap
            sx={{
            alignItems: "center",
            mt: 20,
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
            <Link to="/Question_01" style={{color:"white",textDecoration:"none"}}><Button variant="contained">Start Now</Button></Link>
        </Typography>
    </>
)

export default Main; 