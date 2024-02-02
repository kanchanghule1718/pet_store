import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

export default function Foooter() {
    return (

        <>
           <div class="card bg-dark text-white mt-5">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20210708/pngtree-bright-transparent-sense-of-speed-abstract-dynamic-curve-fluid-light-yellow-image_736940.jpg" class="card-img" alt="..." style={{height:"450px"}}/>
            <div class="card-img-overlay"> <h1 style={{color:"black",textAlign:"center"}}>The Animal Kingdom</h1>
            

            <div className="container text-center  justify-content-evenly  mt-5" >
                <div className="row justify-content-evenly mb-2">
                   
                    <div className="col justify-content-evenly">
                            <h3 style={{color:"green"}}>Contact Us</h3>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/179/613/small/contact-icon-in-flat-design-style-adress-book-or-phone-book-signs-illustration-png.png" className="img-fluid rounded-start" alt="..." style={{height:"50px",width:"50px"}}/>

                            <p style={{color:"green"}}>7775888376423</p>
                    </div>
                    <div className="col justify-content-evenly">
                            <h3 style={{color:"green"}}>Mail Us</h3>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/509/301/small/3d-mail-email-message-icon-illustration-png.png" className="img-fluid rounded-start" alt="..." style={{height:"50px",width:"50px"}}/>

                            <p style={{color:"green"}}>Kanchan@mail.com</p>
                    </div>
                    <div className="col justify-content-evenly">
                            <h3 style={{color:"green"}}><b>Visit Us</b></h3>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/370/618/small/golden-map-pin-sign-png.png" className="img-fluid rounded-start" alt="..." style={{height:"50px",width:"50px"}}/>

                            <p style={{color:"green"}}>www.Kingdom.com</p>
                    </div>
                </div>
            </div>

            <div className="container text-center  justify-content-evenly  mt-3" >
                <div className="row justify-content-evenly mb-2">
                   
                    <div className="col justify-content-evenly">
                    <h3>For More</h3>
                    <Link to={"/home"} state={{color:"red"}}><b>Home</b></Link><br></br>
                    <Link to={"/AboutUs"}><b>About us</b></Link><br></br>
                    <Link to={"/login"}><b>Login</b></Link><br></br>
                    <Link to={"/acces"}><b>Accesories</b></Link>
                    </div>

                    <div className="col justify-content-evenly">
                           <p></p>
                    </div>


                    <div className="col justify-content-evenly mt-3">
                        <p></p><p></p><p></p>
                            <a href='https://www.facebook.com'  ><img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' style={{height:"50px", width:"50px"}}/></a> &nbsp;&nbsp;
                            <a href='https://www.instagram.com'><img src='https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg' style={{height:"50px", width:"50px"}}/></a>&nbsp;&nbsp;
                            <a href='https://twitter.com'><img src='https://cdn-icons-png.flaticon.com/512/3938/3938028.png' style={{height:"50px", width:"50px"}}/></a>&nbsp;&nbsp;
                            <a href='https://in.linkedin.com'><img src='https://cdn-icons-png.flaticon.com/256/174/174857.png' style={{height:"50px", width:"50px"}}/></a>&nbsp;

                    </div>
                    
                </div>
            </div>

        <h5 style={{marginTop:"25px", textAlign:"right" ,color:"black"}}> CopyRight to Animal Kingdom       .</h5>
            </div>
            </div>
            





            
                
           
        </>
    )
}
