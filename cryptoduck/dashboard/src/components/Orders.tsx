import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string
) {
  return { id, date, name, shipTo, paymentMethod };
}

const rows = [
  createData(
    0,
    "Binance",
    "Register on Binance",
    "200 Mio. Members",
    "9,5/10"
  ),
  createData(
    1,
    "Coinbase",
    "Register on Coinbase",
    "150 Mio. Members",
    "9/10"
  ),
  createData(
    2,
    "Crypto.com",
    "Register on Crypto.com",
    "110 Mio. Members",
    "9/10"
  ),
  createData(
    3,
    "Bitpanda",
    "Register on Bitpanda",
    "20 Mio. Members",
    "8,9/10"
  ),
  createData(
    4,
    "KuCoin",
    "Register on KuCoin",
    "18 Mio. Members",
    "7,5/10"
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Marketplaces</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Companies</TableCell>
            <TableCell>Click to register</TableCell>
            <TableCell>Members Total</TableCell>
            <TableCell>Cryptoduckk Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more marketplaces
      </Link>
    </React.Fragment>
  );
}
