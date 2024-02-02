import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useTheme } from './Hook/useTheme'


export default function Sliding() {

  const{theme,changeTheme}=useTheme()
    return (
        <>
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"rgb(243, 190, 93)"}}>
  <div class="container-fluid"  style={{backgroundColor:"rgb(243, 190, 93)"}}>
    <Link to={"/home"} class="navbar-brand" ><img src="https://cdn1.vectorstock.com/i/1000x1000/36/50/animal-and-pet-logo-designs-vector-36043650.jpg" alt=""  style={{height:"60px",width:"60px",backgroundColor:"rgb(243, 190, 93)",borderRadius:"50%"}}/>&nbsp;<b>The Animal Kingdom</b></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto" >
        <li class="nav-item">
          <NavLink to={"/home"} class="nav-link " aria-current="page" >Home </NavLink> &nbsp; &nbsp;
        </li>
        <li class="nav-item">
          <NavLink to={"/AboutUs"} class="nav-link" >About Us </NavLink>&nbsp;&nbsp;
        </li>
        &nbsp;
        {
            theme==true? <Link to={"/login"} type="button" class="btn btn-outline-primary" onClick={()=>changeTheme(false)}>LogIn</Link>:<button onClick={()=>changeTheme(true)} class="btn btn-outline-primary">LogOut</button>

          }
        &nbsp;
        </ul>
{/* 
                <button type="button" class="btn btn-outline-primary position-relative">
               <b> <i class="bi bi-cart3"></i></b>  &nbsp;
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button> */}
        
     
    
    </div>
  </div>
</nav>
      </div>
        {/* carousal div strat here */}
        

            <Outlet/> 
        </>
        
    )
}
