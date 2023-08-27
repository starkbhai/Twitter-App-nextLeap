import React, { useEffect, useState } from 'react';
import './App.css';
import LeftComp from './components/LeftComp';
import { PageResponse } from './types/Alltypes';
import MidComp from './components/MidComp';
import RightComp from './components/RightComp';

function App() {
  const [apiData , setApiData]=useState<PageResponse | undefined>();
   useEffect(()=>{
    fetchInfo();
   },[]);

   const fetchInfo = async() => { 
    return await fetch("https://sandbox.nextleap.app/page/fetch") 
            .then((res) =>  res.json()) 
            .then((data) => setApiData(data)) 
    };

    console.log("ap9iData - " , apiData);

  return (
     <div className='parent'>
      <div className='first-parent'>
      <LeftComp sideNavigationData = {apiData?.sideNavigationButtons || []} />
      </div>
     
      <div className='second-parent'> 
      <MidComp headerData={apiData?.headerData} tweetButton={apiData?.tweetButton} tweetThreads={apiData?.tweetThreads} />
       </div>

      <div className='third-parent' style={{ marginLeft:'60px'}}> 
      <RightComp />
      </div>
     </div>
  );
}

export default App;
