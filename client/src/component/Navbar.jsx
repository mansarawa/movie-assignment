import React, { useState ,} from 'react'
import Nav from '../component css/Nav.module.css'
import { Link } from 'react-router-dom';
import Home from './Home';

export default function Navbar() {
  const [resp, setResp] = useState(false)
  const [hindi,setHindi]=useState(false)
  const [action,setAction]=useState(false)
  const [drama,setDrama]=useState(false)
  const handleburger=()=>{
    setResp(!resp)
  }
  const handledrana=()=>{
    setDrama(!drama)
  }
 
  const handleaction=()=>{
    setAction(!action)
  }
 
  const handlehindi = () => {
    setHindi(!hindi);
  };


  return (
   
    <div className={Nav.container}>
        <nav className={Nav.def}>
            <h2>ABCmovies</h2>
            
            <ul className={Nav.ulli}>
                <li><Link to='/' className={Nav.link}>Home</Link></li>
                <li><Link to='/' className={Nav.link} onClick={handlehindi}>Hindi</Link></li>
                <li><Link to='/' className={Nav.link} onClick={handleaction}>Action</Link></li>
                <li><Link to='/' className={Nav.link} onClick={handledrana}>Drama</Link></li>
              <div className={Nav.burger} onClick={handleburger}>
                <div className={Nav.line}></div>
                <div className={Nav.line}></div>
                <div className={Nav.line}></div>
              </div>
            </ul>
        </nav>
      {resp&&
        <nav className={Nav.res}>
        <h2>ABCmovies</h2>
        <ul style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <li><Link to='/' className={Nav.link}>Home</Link></li>
            <li><Link to='/' className={Nav.link}>Hindi</Link></li>
            <li><Link to='/' className={Nav.link}>Action</Link></li>
            <li><Link to='/' className={Nav.link}>Drama</Link></li>
          <div className={Nav.burger}>
            <div className={Nav.line}></div>
            <div className={Nav.line}></div>
            <div className={Nav.line}></div>
          </div>
        </ul>
    </nav>
        } 
    </div>
  
  )
}

