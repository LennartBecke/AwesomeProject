import * as React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import StickyFooter from "./StickyFooter";

import { Routes, Route, Link } from "react-router-dom";


export const Main=() => (
    <>
        <Grid item xs={12} md={8} lg={9}>
            <Paper
                sx={{
                p: 5,
                display: "flex",
                flexDirection: "column",
                height: 500,
                mt: 3

                }}
            >
                <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    sx={{
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
                    sx={{
                    alignItems: "center",
                    mt: 4,
                    ml: 65
                    }}
                    >
                    <Link to="/Question_01" style={{color:"white",textDecoration:"none"}}><Button variant="contained">Start Now</Button></Link>
                </Typography>
            </Paper>
        </Grid>

    </>
)

export default Main; 