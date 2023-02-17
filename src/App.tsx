import "./App.scss";
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import { financialRound } from "./services/functions";
import { favoriteCurrency } from "./enums";
import SwapWindow from "./SwapWindow/SwapWindow";
import TableWindow from "./TableWindow/TableWindow";

const base_url = "https://api.exchangerate.host/convert";

function App() {
  const [fromCurrency, setFromCurrency] = useState<string>("UAH");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [rates, setRates] = useState<number>(1);
  const [amountPrimary, setAmountPrimary] = useState<number>(1);
  const [amountSecondary, setAmountSecondary] = useState<boolean>(true);

  let toAmount, fromAmount;
  if (amountSecondary) {
    fromAmount = amountPrimary;
    toAmount = financialRound(amountPrimary * rates);
  } else {
    toAmount = amountPrimary;
    fromAmount = financialRound(amountPrimary / rates);
  }

  function onChangeFromAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setAmountPrimary(+e.target.value);
    setAmountSecondary(true);
  }

  function onChangeToAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setAmountPrimary(+e.target.value);
    setAmountSecondary(false);
  }

  useEffect(() => {
    fetch(`${base_url}?from=${fromCurrency}&to=${toCurrency}`)
      .then((res) => res.json())
      .then((data) => setRates(data.info.rate));
  }, [fromCurrency, toCurrency]);

  return (
    <div className="App">
      <Header />
      <section className="wrapper">
        <TableWindow />
        <SwapWindow
          options={Object.values(favoriteCurrency)}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
          toAmount={toAmount}
          fromAmount={fromAmount}
          onChangeFromAmount={onChangeFromAmount}
          onChangeToAmount={onChangeToAmount}
        />
      </section>
    </div>
  );
}

export default App;
