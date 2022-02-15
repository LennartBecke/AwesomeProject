import * as React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Orders from "./Orders";
import Bitcoin_Info from "./Bitcoin_Info";


export const Ethereum=() => (
    <>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              {/* Chart */}

              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 80,
                  }}
                >
                  <Typography
                      component="h1"
                      variant="h4"
                      color="inherit"
                      noWrap
                      sx={{
                      alignItems: "center",
                      mt: 0,
                      ml: 0
                      }}
                  >
                      Your Crypto Coin is
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 500,
                  }}
                >
                  <div dangerouslySetInnerHTML={{__html: `<div style="height:460px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 0px solid #56667F; border-radius: 0px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=145&pref_coin_id=1506" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>`}} />
                </Paper>
              </Grid>

              {/* Ethereum Info */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 440,
                  }}
                >
                  <Bitcoin_Info />
                </Paper>
              </Grid>

              {/* Recent Orders (Marketplaces) */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
    </>
)

export default Ethereum; 



