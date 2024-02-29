import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async() =>{
    try{
      const res = await axios.get('http://localhost:3000/api/data');
      setData(res.data);
    }catch(err){
      console.log("Error",err)
    }
  }
  

  return (
    <div className='app'>
      <h1 style={{marginLeft: 20}}>Data</h1>
      {data.map(item=>(
        <div key={item.id}>
          <p style={{marginLeft: 20}}>ID: {item.id}</p>
          <p style={{marginLeft: 20}}>First Name: {item.first_name}</p>
          <p style={{marginLeft: 20}}>Last Name: {item.last_name}</p>
          <p style={{marginLeft: 20}}>Email: {item.email}</p>
          <p style={{marginLeft: 20}}>Gender: {item.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
