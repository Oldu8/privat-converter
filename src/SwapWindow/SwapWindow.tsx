import React from "react";
import CurrencyItem from "./CurrencyItem/CurrencyItem";
import { IMainProps } from "../interfaces/index";

function SwapWindow({
  options,
  toCurrency,
  fromCurrency,
  setFromCurrency,
  setToCurrency,
  toAmount,
  fromAmount,
  onChangeFromAmount,
  onChangeToAmount,
}: IMainProps) {
  return (
    <section className="main">
      <section className="swapWrapper">
        <div className="container">
          <h2 className="swapTitle">Convertor</h2>
          <div className="swapWindow">
            <CurrencyItem
              options={options}
              defaultCurrency={fromCurrency}
              onChangeCurrency={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFromCurrency(e.target.value)
              }
              amount={fromAmount}
              onChangeAmount={onChangeFromAmount}
            />
            <span className="equal">=</span>
            <CurrencyItem
              options={options}
              defaultCurrency={toCurrency}
              onChangeCurrency={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setToCurrency(e.target.value)
              }
              amount={toAmount}
              onChangeAmount={onChangeToAmount}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default SwapWindow;
