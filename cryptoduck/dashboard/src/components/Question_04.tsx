import * as React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";


import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { Routes, Route, Link } from "react-router-dom";

const steps = [
    'Step 01',
    'Step 02',
    'Step 03',
    'Step 04'
];

export const Question_04=() => (
    <>
    <Stepper activeStep={3} alternativeLabel sx={{
    mt: 10
    }}>
    {steps.map((label) => (<Step key={label}><StepLabel>{label}</StepLabel></Step>))}
    </Stepper>

    <span>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{
            height: 300,
            mt: 4,
            padding: 5
          }}>
                <Paper sx={{
                    height: 250,
                    padding: 3
                    }}>
                    <h1>Question 04:</h1>
                    How long do you want to invest?
                </Paper>
            </Grid>
        </span>
        <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            sx={{
            mt: 0,
            ml: 5
            }}
            >
            <Link to="/CroToken" style={{textDecoration:"none"}}><Button variant="contained" sx={{
            ml: 0
            }}>Short term</Button></Link>

            <Link to="/Ethereum" style={{textDecoration:"none"}}><Button variant="contained" sx={{
            ml: 1
            }}>Mid term</Button></Link>

            <Link to="/Bitcoin" style={{textDecoration:"none"}}><Button variant="contained" sx={{
            ml: 1
            }}>Long term</Button></Link>

            <Link to="/SatoshiMadness" style={{textDecoration:"none"}}><Button variant="contained" sx={{
            ml: 1
            }}>Get rich fast button</Button></Link>
        </Typography>
    </>
)

export default Question_04; 


