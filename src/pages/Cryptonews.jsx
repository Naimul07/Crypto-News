import axios from "axios"
import { useEffect, useState } from "react";

/* const options = {
    method: 'GET',
    url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
    params: {
      q: 'covid',
      lang: 'en',
      media: 'True'
    },
    headers: {
      'X-RapidAPI-Key': '8fc94293b2msh58c32e02b1f401dp176237jsn62fe80497b10',
      'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
    }
  }; */

  const options = {
    method: 'GET',
    url: 'https://crypto-news16.p.rapidapi.com/news/coinjournal',
    headers: {
      'X-RapidAPI-Key': 'aa5bf9ea55msheb6bdcdf43fb10ap127d84jsn859cf2c0a334',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    }
  };
  


export default function Cryptonews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        // setNews(response.data.articles);
        setNews(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-dark text-white">
      <nav className="navbar navbar-dark sticky-top bg-dark">
        <div className="container-fluid">
          <h1 className="mx-auto">Crypto News</h1>
        </div>
      </nav>
      <div className="container">
        {/* <h1 className="text-center ">Crypto News</h1> */}
        <div className="row">
          {news.map((article, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card mb-4 bg-dark text-white shadow p-3 mb-5 rounded" style={{ height:500 }}>
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <p className="card-text "><small className="text-white">{article.date}</small></p>
                  <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to news</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

