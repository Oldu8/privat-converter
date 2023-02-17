import "./App.scss";
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import { financialRound } from "./services/functions";
import { favoriteCurrency } from "./enums";
import SwapWindow from "./SwapWindow/SwapWindow";
import TableWindow from "./TableWindow/TableWindow";
import { ICurrency } from "./interfaces";

const base_url = "https://api.exchangerate.host/convert";

function App() {
  const [fromCurrency, setFromCurrency] = useState<string>("UAH");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [rates, setRates] = useState<number>(1);
  const [currencyData, setCurrencyData] = useState<ICurrency[] | []>([]);
  const [amountPrimary, setAmountPrimary] = useState<number>(100);
  const [amountSecondary, setAmountSecondary] = useState<boolean>(true);

  async function getBitcoinPrice() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    const bitcoinData = await response.json();
    const usdPrice = bitcoinData.market_data.current_price.usd;
    return usdPrice;
  }

  async function setData(data: any) {
    const newArr = data.map((item: any) => {
      const name = `${item.ccy}/${item.base_ccy}`;
      const buyPrice = parseFloat(item.buy);
      const sellPrice = parseFloat(item.sale);
      return { name, buyPrice, sellPrice };
    });

    const bitcoinUsdPrice = await getBitcoinPrice();
    const btc = {
      name: "BTC/USD",
      buyPrice: bitcoinUsdPrice,
      sellPrice: bitcoinUsdPrice,
    };
    newArr.push(btc);

    setCurrencyData(newArr);
    console.log(data);
  }

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

  const apiUrl = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";

  useEffect(() => {
    fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="wrapper">
        <TableWindow data={currencyData} />
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
