import {
  StyledTableCell,
  StyledTableRow,
} from "../../services/funcForMUITable";
import { ItemListFunc } from "../../types";

const TableItem: ItemListFunc = ({ data }) => {
  const { name, buyPrice, sellPrice } = data;
  return (
    <StyledTableRow className="rowItem">
      <StyledTableCell
        align="center"
        className="currency"
        sx={{ fontWeight: "medium" }}
      >
        <div className="rowName">{name}</div>
      </StyledTableCell>
      <StyledTableCell
        align="center"
        className="buy"
        sx={{ fontWeight: "medium" }}
      >
        <div className="rowBuy">{buyPrice}</div>
      </StyledTableCell>
      <StyledTableCell
        align="center"
        className="sell"
        sx={{ fontWeight: "medium" }}
      >
        <div className="rowSell">{sellPrice}</div>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default TableItem;
