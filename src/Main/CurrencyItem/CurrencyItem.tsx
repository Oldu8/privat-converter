import { ICurrencyItemProps } from "../../App";

function CurrencyItem({
  options,
  defaultCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}: ICurrencyItemProps) {
  return (
    <div className="item">
      <select
        className="select"
        value={defaultCurrency}
        onChange={onChangeCurrency}
      >
        {options.map((i: string) => {
          return (
            <option key={i} value={i} className="option">
              {i}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  );
}

export default CurrencyItem;
