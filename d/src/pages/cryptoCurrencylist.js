import React, { useState, useEffect } from "react";
import axios from "axios";
import "./crypto.css";
const crypto_api = "https://api.coincap.io/v2/assets";

const CryptoCurrencylist = () => {
  const [cryptoList, setCryptoList] = useState();
  const [activeCrypto, setActiveCrypto] = useState();

  useEffect(() => {
    if (!cryptoList) {
      // if crypto list  not available then do a api call and update it
      axios.get(crypto_api).then((response) => {
        //console.log(response.data.data)
        setCryptoList(response.data.data);
      });
    }
  });

  const handleActiveCrypto = (coin) => {
    console.log("handleActiveCrypto" , coin )
    setActiveCrypto(coin);
    //const detailsApiUrl = `https://api.coincap.io/v2/assets/xrp/history?interval=d1` // daynamik url basically symbol part e.g = xrl
    const detailsApiUrl = `https://api.coincap.io/v2/assets/${coin.name.toLowerCase()}/history?interval=d1`
    //console.log('detailsApiUrl==',detailsApiUrl)
    axios.get(detailsApiUrl).then((response)=>{
        console.log(response.data.data)
        //const tempData = {...activeCrypto, table: response.data.data}
        const tempData = {...coin };
        tempData.table = response.data.data;
        setActiveCrypto(tempData)
    })
  };

  return (
    <div>
      <h2>Crypto Currency List</h2>
      <div className="crypto-container">
        {cryptoList && cryptoList.length > 0 && (
          <ol>
            {
              //cryptoList.map((coin, index) => (<li>{index}</li>) )
              cryptoList.map((coin, index) => (
                <li key ={coin.symbol} onClick={() => handleActiveCrypto(coin)}>
                  {coin.name} [price-{coin.priceUsd}] ||{" "}
                  <a href={coin.explorer}>Details</a>
                </li>
              ))
            }
          </ol>
        )}
        {activeCrypto && (
          <div className="crypto-table">
            <h2>{activeCrypto.name}</h2>
            <p>
              Rank - {activeCrypto.rank} | Price - {activeCrypto.priceUsd}
            </p>
            <p>
              Symbol - <strong>{activeCrypto.symbol}</strong>
            </p>
            <ul>
                {
                   activeCrypto.table && activeCrypto.table.length > 0 && activeCrypto.table.map(({priceUsd,date,table})=>
                    <li key={date}>
                        {date} {`-->`} {priceUsd}
                    </li>) 
                }
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default CryptoCurrencylist;
