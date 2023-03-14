import React,{useState} from 'react'
import Toolbar from './Toolbar'
export default function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onClickLogin = () =>{
        setIsLoggedIn(true);
    }
    const onClickLogout = () =>{
        setIsLoggedIn(false);
    }
  return (
    <div>
      <Toolbar isLoggedIn={isLoggedIn}
      onClickLogin={onClickLogin} onClickLogout={onClickLogout}
      ></Toolbar>
    </div>
  )
}