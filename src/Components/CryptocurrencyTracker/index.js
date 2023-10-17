import React, { useEffect, useState } from "react";
// import Loader from "react-loader-spinner";
import CryptocurrenciesList from "../CryptocurrenciesList";
import { Bars } from "react-loader-spinner";
import "./index.css";

const apiUrl = "https://apis.ccbp.in/crypto-currency-converter";

function CryptocurrencyTracker() {
  const [cryptoCurrenciesData, setCryptoCurrenciesData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCryptoCurrencies();
  }, []);

  const setCryptoCurrencies = (fetchedData, loadingStatus) => {
    setCryptoCurrenciesData(
      fetchedData.map((eachCryptoCurrency) => ({
        id: eachCryptoCurrency.id,
        currencyLogoUrl: eachCryptoCurrency.currency_logo,
        currencyName: eachCryptoCurrency.currency_name,
        usdValue: eachCryptoCurrency.usd_value,
        euroValue: eachCryptoCurrency.euro_value,
      }))
    );
    setIsLoading(loadingStatus);
  };

  const getCryptoCurrencies = async () => {
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    setCryptoCurrencies(fetchedData, false);
  };

  const renderCryptocurrenciesList = () => {
    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />;
  };

  const renderLoader = () => (
    <div data-testid="loader">
      <Bars type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  );

  return (
    <div className="app-container">
      {IsLoading ? renderLoader() : renderCryptocurrenciesList()}
    </div>
  );
}

export default CryptocurrencyTracker;