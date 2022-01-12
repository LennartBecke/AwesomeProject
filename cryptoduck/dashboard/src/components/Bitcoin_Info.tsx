import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Bitcoin_Info() {
  return (
    <React.Fragment>
      <Title>Bitcoin Info</Title>
      <Typography component="p">
      <p>
      Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.</p>
      <p>
      Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.[9] The currency began use in 2009[10] when its implementation was released as open-source software.</p>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Learn more 
        </Link>
      </div>
    </React.Fragment>
  );
}
