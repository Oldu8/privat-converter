import { InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { ICurrencyItemProps } from "../../interfaces/index";

function CurrencyItem({
  options,
  defaultCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}: ICurrencyItemProps) {
  return (
    <div className="item">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={defaultCurrency}
        onChange={onChangeCurrency}
        className="swapSelect"
      >
        {options.map((i: string) => {
          return (
            <MenuItem key={i} value={i} className="option">
              {i}
            </MenuItem>
          );
        })}
      </Select>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        type="number"
        value={amount}
        onChange={onChangeAmount}
        // startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="Amount"
      />
    </div>
  );
}

export default CurrencyItem;
