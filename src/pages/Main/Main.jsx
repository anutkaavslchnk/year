import React from "react";
import s from './Main.module.css';
import { useNavigate } from "react-router-dom";
const Main = () => {

    const navigate=useNavigate()

    const handleClick=()=>{
        navigate('/memories');
    }
  return <div className={s.container}>


<h1 className={s.title}>Hello, honey!</h1>
<p className={s.par}>I have something for you</p>
<button className={s.btn} onClick={handleClick}>Click here</button>
  </div>;
};

export default Main;
