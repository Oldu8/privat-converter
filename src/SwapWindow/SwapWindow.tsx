import CurrencyItem from "./CurrencyItem/CurrencyItem";
import { IMainProps } from "../interfaces/index";
import SwapIcon from "../assets/swapIcon.svg";

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
    <section className="swapWrapper">
      <div className="container">
        <h2 className="swapTitle">Convertor</h2>
        <div className="swapWindow">
          <div className="swapBlock">
            <p className="swapSubtitle">Change</p>
            <CurrencyItem
              options={options}
              defaultCurrency={fromCurrency}
              onChangeCurrency={(e) => setFromCurrency(e.target.value)}
              amount={fromAmount}
              onChangeAmount={onChangeFromAmount}
            />
          </div>
          <img
            src={SwapIcon}
            alt="icon for swap currency"
            className="swapIcon"
          />
          <div className="swapBlock">
            <p className="swapSubtitle">Get</p>
            <CurrencyItem
              options={options}
              defaultCurrency={toCurrency}
              onChangeCurrency={(e) => setToCurrency(e.target.value)}
              amount={toAmount}
              onChangeAmount={onChangeToAmount}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SwapWindow;
