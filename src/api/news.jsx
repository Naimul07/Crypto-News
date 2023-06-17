import axios from "axios";

export default {
  getData: () => axios({
    method: 'GET',
    url: 'https://crypto-news16.p.rapidapi.com/news/all',
    headers: {
      'X-RapidAPI-Key': '8fc94293b2msh58c32e02b1f401dp176237jsn62fe80497b10',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    }
  })
}



useEffect(() => {
        axios.get('https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin', {
          params: {
            max_articles: '10',
            last_n_hours: '48',
            top_n_keywords: '10'
          },
          headers: {
            'X-RapidAPI-Key': '8fc94293b2msh58c32e02b1f401dp176237jsn62fe80497b10',
            'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
          }
        }).then((res) => {
            setNews(res.data);
            console.log(res.data.coindesk);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://crypto-news16.p.rapidapi.com/news/all',
  headers: {
    'X-RapidAPI-Key': '8fc94293b2msh58c32e02b1f401dp176237jsn62fe80497b10',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
} */