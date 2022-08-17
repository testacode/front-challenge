import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD";

const Main = ({ isLoading, data }) => {

  return (
    <div className="Main">
      <div>
        <label>Filter By</label>
        <select>
          <option>Name</option>
          <option>Price</option>
          <option>Market Cap</option>
          <option>Circulating supply</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Circulating supply</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {data.map((data) => {
            console.log({ data })
            return (
              <tr key={data.key}>
                <td>Name: {data.name}</td>
                <td>Price: {data.price}</td>
                <td>Market Cap: {data.market_cap}</td>
                <td>Circulating supply: {data.circulatingSupply}</td>
                <td><Link to={`/detail/${data.key}`}>ver</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

};

export default Main;
