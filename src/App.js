//{ npx create-react-app name-of-your-app } It will create the blank React App.
// { npm install axios } This will install the axios module in the react project. 
//-----    { WITH THE HELP OF THE AXIOS WE CAN CALL THE API }    -----//
//-- In this project i call the localhost:3000/api  --// 
//-- {This Backend Api is in (backend-node-js-express) Repository.} --//

//Import axios to the project.
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  //{ useState } This function is used to set the state of the  function.
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData();

  },[]);
  const fetchData = async() =>{
    //In this try and catch block we are try to get the data from the localhost server.

    try{
      const res = await axios.get('http://localhost:3000/api/data');
      setData(res.data);
    }
    //If there is an issue to connect with the localhost server it will pass the "Error" with the exact error message. 
    catch(err){
      console.log("Error",err)
    }
  }
  
// In this return block destructure the the array with whole data present in the array.

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
