import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "http://apis.data.go.kr/1360000/WthrWrnInfoService/getWthrWrnList"; 

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 1,
          pageNo: 10,
          dataType: 'json'
        }
      });
      console.log(response)
      setData(response.data);
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error...</div>;
  if(!data)   return null;

  return (
    <div className="App">
      {data.response.body.items.item.map((item, index) => (
        <div key={index}>
          <p>제목: {item.title}</p>
          <p>관측소 ID: {item.stnId}</p>
          <p>발표 시간: {item.tmFc}</p>
          <p>순번: {item.tmSeq}</p>
        </div>
      ))}
    </div>
  );
}

export default App;