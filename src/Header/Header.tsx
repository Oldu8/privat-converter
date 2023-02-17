function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <h2 className="title">Currency Converter</h2>
        <div className="currencyHeader">
          <h4 className="titleCurrency">Current currency rate</h4>
          <ul className="list">
            <li className="item">
              <span className="currency">1 USD</span>
              <i className="fa-sharp fa-solid fa-equals"></i>
              <span className="currencyEqual">
                {/* {usdToUah} */}
                UAH
              </span>
            </li>
            <li className="item">
              <span className="currency">1 EUR</span>
              <i className="fa-sharp fa-solid fa-equals"></i>
              <span className="currencyEqual">
                {/* {eurToUah} */}
                UAH
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
