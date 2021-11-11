
import './App.css';
import React, { useState } from "react";

function App() {
  
  const [count, setCount] = useState(0);
  const [cacheData, setCacheData] = React.useState();

  const addDataIntoCache = async (cacheName,  response) => {

    // List of all caches present in browser
    var names = await caches.keys()
  
    if(names.length == 1)
    {
      console.log('flag')
      // setCount(4)  
    }   

    var url = 'https://localhost:300'
    
    // console.log('flag')
    
    // Iterating over the list of caches
    names.forEach(async(name) => {
      
      // Opening that particular cache
      const cacheStorage = await caches.open(name);
      
      // Fetching that particular cache data
      const cachedResponse = await cacheStorage.match(url);
      var data = await cachedResponse.json()
      
      console.log(data, count, cacheData)
      // Pushing fetched data into our cacheDataArray
      
      setCacheData(data)

    })
    
    // console.log(data, count, cacheData)
    setCount(count+1)
  
    // Converting our respons into Actual Response form
    const data = new Response(JSON.stringify(response));
  
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      });
    }
  }
  
  return (
     <div style={{ height: 500, width: '80%' }}>
      <h4>How to store data into cache in ReactJS?</h4>
      <button onClick={()=>addDataIntoCache('MyCache' ,count)} >
        Add Data Into Cache</button>

      <h6>All Cache Data is: {cacheData}</h6>
      <h6>All count Data is: {count}</h6>
    </div>
  
  );
}

export default App;
