import * as React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import StickyFooter from "./StickyFooter";

import { Routes, Route, Link } from "react-router-dom";


import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export function DividerText() {
  const content = (
    <div>
      {` `}
    </div>
  );

  return (
    <Root>
      <Divider>
        <Chip label="Cryptoduckk" />
      </Divider>
      {content}
    </Root>
  );
}


export function MiddleDividers() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Toothbrush
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Extra Soft" />
          <Chip color="primary" label="Soft" />
          <Chip label="Medium" />
          <Chip label="Hard" />
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Add to cart</Button>
      </Box>
    </Box>
  );
}


export function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}


export const Main=() => (
    <>
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
                        <h1>Find your Crypto</h1>
                        <Link to="/Question_01" style={{textDecoration:"none"}}><Button variant="contained" sx={{
                        ml: 4
                        }}>Start Now</Button></Link>
                    </Paper>
                </Grid>
        </span>

        <span>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{
                height: 100,
                mt: 0,
                padding: 5
            }}>
              <DividerText></DividerText>
                </Grid>
        </span>

        <span>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{
                height: 100,
                mt: 0,
                padding: 5
            }}>
                    <Paper sx={{
                        height: 100,
                        padding: 3
                        }}>

                    </Paper>
                </Grid>
        </span>
        <span>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{
                height: 100,
                mt: 0,
                padding: 5
            }}>
                </Grid>
        </span>

        <span>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{
                height: 300,
                mt: 5,
                padding: 5
            }}>
                    <Paper sx={{
                        height: 650,
                        padding: 3
                        }}>
                        <h3>What is Cryptoduckk?</h3>
                        <p>
                        Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.</p>
                        
                        <BasicRating></BasicRating>
                    </Paper>
                </Grid>
        </span>

        
    </>
)

export default Main; 