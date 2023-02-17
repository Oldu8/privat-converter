import Icon from "../assets/currencyconvertminor-svgrepo-com.svg";

function Header() {
  return (
    <header className="header">
      <div className="headerWrapper">
        <h2 className="headerTitle">Currency Converter</h2>
        <img src={Icon} alt="Logo for converter" className="headerLogo" />
      </div>
    </header>
  );
}

export default Header;
