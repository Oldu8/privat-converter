import { SelectChangeEvent } from "@mui/material";

export interface IMainProps {
  options: string[];
  fromCurrency: string;
  toCurrency: string;
  setFromCurrency: React.Dispatch<React.SetStateAction<string>>;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  toAmount: number;
  fromAmount: number;
  onChangeFromAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeToAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ICurrencyItemProps {
  options: string[];
  defaultCurrency: string;
  onChangeCurrency: (e: SelectChangeEvent<string>) => void;
  amount: number;
  onChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// export interface ITableItem {
//   name: string;
//   buyPrice: number;
//   sellPrice: number;
// }

// export interface IRawCurrency {
//   ccy: string;
//   base_ccy: string;
//   buy: string;
//   sale: string;
// }

export interface ICurrency {
  name: string;
  buyPrice: number;
  sellPrice: number;
}
