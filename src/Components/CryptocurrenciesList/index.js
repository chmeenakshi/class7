import React from 'react';
import CryptocurrencyItem from '../Cryptocurrencyitem';
import './index.css';

function CryptocurrenciesList({ cryptoCurrenciesData }) {
  const renderCryptoCurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  );

  const renderCryptoCurrenciesView = () => {
    return (
      <div className="crypto-currencies-list">
        {renderCryptoCurrenciesHeader()}
        <ul className="list-body">
          {cryptoCurrenciesData.map((eachCryptoCurrencyData) => (
            <CryptocurrencyItem
              key={eachCryptoCurrencyData.id}
              cryptoCurrencyData={eachCryptoCurrencyData}
            />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="crypto-currencies-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        className="crypto-currency-img"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="Cryptocurrency Tracker"
      />
      {renderCryptoCurrenciesView()}
    </div>
  );
}

export default CryptocurrenciesList;
