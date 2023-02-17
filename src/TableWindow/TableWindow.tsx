import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import { StyledTableCell } from "../services/funcForMUITable";
import { TableFunc } from "../types";
import TableItem from "./TableItem/TableItem";
// import { favoriteCurrency } from "../enums";

const cellNamesForTop = ["Currency/Current Date", "Buy", "Sell"];

const mockData = [
  { name: "USD/UAH", buyPrice: 100, sellPrice: 111 },
  { name: "EUR/UAH", buyPrice: 200, sellPrice: 222 },
  { name: "BTC/UAH", buyPrice: 300, sellPrice: 333 },
];

const TableWindow: TableFunc = ({ data }) => {
  return (
    <div className="tableWrapper">
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className="headerRow">
              {cellNamesForTop.map((i) => (
                <StyledTableCell key={i}>{i}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableItem data={item} key={item.name} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableWindow;
