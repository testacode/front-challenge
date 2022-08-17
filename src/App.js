import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import "./App.css";

import { Detail, Main } from './Pages';

const URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cryptos, setCryptos] = useState({});

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        let data;

        data = json.RAW;

        setCryptos(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  let formattedData = Object.keys(cryptos).map((crypto) => {
    return ({
      key: crypto,
      price: cryptos[crypto]["USD"]["PRICE"],
      market_cap: cryptos[crypto]["USD"].MKTCAP,
      circulatingSupply: cryptos[crypto]["USD"].SUPPLY,
      name: cryptos[crypto]["USD"]["FROMSYMBOL"],
    });
  });

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main isLoading={isLoading} data={formattedData} />} />
          <Route path="/detail/:coin" element={<Detail />} />
          <Route path="*" element={<Navigate to="/" replace />}
          />
        </Routes>
    </div>
  );
};

export default App;
