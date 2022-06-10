import React, { useEffect, useState } from 'react';
import Counter from './container/Counter/Counter';
import Detail from './container/Detail/Detail';
import Loader from './container/Loader/Loader';
import Time from './container/Time/Time';
import Timefun from './container/Timefun/Timefun';


const HomeWithLoading = Loader(Detail)
function App() {
  
  // const [loading,setLoading]=useState(false);
  // const [data,setdata]=useState([]);

  // let orgdata=[
  //   {id:101, name :"Herry", age:18},
  //   {id:102,name:"Lorem", age:16},
  //   {id:103,name:"Ipsum", age:17}
  // ]

  // useEffect(
  //   ()=>{
  //     setLoading(true);
  //     setTimeout(() => {setLoading(false);setdata(orgdata)}, 2000);
  //   },
  //   [])
  // console.log(loading,data);
  return (
    <>
    {/* <HomeWithLoading  
      isLoading={Loader}
      data={data}
      /> */}

      {/* <Counter></Counter> */}
      {/* <Time></Time> */}
      <Timefun></Timefun>
      {/* <Detail></Detail> */}
    </>
  );
}

export default App;