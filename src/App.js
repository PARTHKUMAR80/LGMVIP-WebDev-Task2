import React,{useState,useEffect} from 'react';
import Cards from './Cards';
import Navbar  from './Navbar';
import Logo1 from './Logo1.jpg';
import OtherComponent from './OtherComponent';
import LoadingComponent from './LoadingComponent';
import HiddenComponet from './HiddenComponet';
import './App.css';

function App() {

  const [cardData,setCardData]=useState([]);
  const [loadingComponent,setLoadingComponent]=useState(false);
  const [btnClick,setBtnClick]=useState(false);
  const [hideData,setHideData]=useState(true);
  const [value,setValue]=useState(0);

  const URl='https://reqres.in/api/users?page=1';

  useEffect(() => {
    setValue(prev=>prev+1);
  },hideData)

  const decide=()=>{
    if (hideData){
      if (value===1){
        fetch_func();
      }
      setHideData(false);
      return;
    }
    setHideData(true);
  }

  const fetch_func = async()=>{
    try {
      setBtnClick(true);

      fetch(URl)
        .then((res)=>res.json())
        .then((json)=>{
          setCardData(json.data);
        })

        setInterval(()=>{
          setLoadingComponent(true);
        },2800);

    }
    catch (error){
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar Logo1={Logo1} fetch_func={fetch_func} hideData={hideData} decide={decide}/>
      <div>
        {btnClick ? (hideData ? <HiddenComponet/> : (loadingComponent ? (<Cards cardData={cardData}/>) : <LoadingComponent/>)) : <OtherComponent/>}
      </div>
    </div>
  );
}

export default App;
