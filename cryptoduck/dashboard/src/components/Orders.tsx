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
    "Click Here",
    "Tupelo, MS",
    "VISA ⠀•••• 3719"
  ),
  createData(
    1,
    "Coinbase",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574"
  ),
  createData(
    2,
    "Crypto.com",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253"
  ),
  createData(
    3,
    "Bitpanda",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000"
  ),
  createData(
    4,
    "KuCoin",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919"
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
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
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
