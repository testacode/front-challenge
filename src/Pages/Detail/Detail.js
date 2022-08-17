import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

const URL = "https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=";

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState({});

  // getting the url param
  let { coin } = useParams();

  useEffect(() => {
    fetch(URL + coin)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        let data;

        data = json.RAW;

        setDetail(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>loading...</div>;

  let formattedData = [];

  Object.keys(detail).map((crypto) => {
    formattedData.push({
      price: detail[crypto]["USD"]["PRICE"],
      name: detail[crypto]["USD"]["FROMSYMBOL"],
    });
  });

  return (
    <div className="Detail">
      <Link to="/">back</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price in USD</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Name: {formattedData[0].name}</td>
            <td>Price: {formattedData[0].price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

};

export default Detail;
