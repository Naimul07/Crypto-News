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
    url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
    headers: {
      'X-RapidAPI-Key': '8fc94293b2msh58c32e02b1f401dp176237jsn62fe80497b10',
      'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    }
  };

export default function Cryptonews() {
     const [news, setNews] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.request(options);
            // setNews(response.data.articles);
            setNews(response.data.data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div className="container">
         <div className="row">
        {news.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p>{article.description}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
        
    </div>
    )
}

