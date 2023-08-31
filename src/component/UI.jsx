import React from 'react'
import './ui.css'

const UI = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
            <h2>HootSuite</h2>
            <ul>
            <li>Platform</li>
            <li>Plans</li>
            <li>Enterprise</li>
            <li>Resource</li>
            <li>Education</li>
            </ul>
            
        </div>
        <div className="right">
           <ul> 
            <li>Contact</li>
            <li>Login</li>
            </ul>
            <button>Logout</button>
        </div>
      </div>
      <div className="main">
        <div style={{margin:"50px 0px"}}>
            <div style={{margin:'20px auto'}} className="content">
            <h1 style={{textAlign:"center",color:"white",fontSize:"50px"}}>See Value From Social Sooner</h1>
            <p style={{textAlign:"center",color:"white",fontSize:"20px"}}>Our training and strategic services have helped thousands of organizations succeed on social</p>
            <button style={{width:"150px",padding:"15px",backgroundColor:"rgb(26, 103, 26)",margin:"10px 700px",color:'white',fontSize:"15px",fontWeight:"400",border:"none"}}>Request a Demo</button>
            </div>
        </div>
      </div>
      <div className="footer">
        <div className="same first">
             <div className='font'/>
             <h3>2500</h3>
             <p>enterprise organizations successfully launched</p>
        </div>
        <div className="same second">
        < div className='font'/>
             <h3>45,000</h3>
             <p>enterprise users onboarded seamlessly</p>
        </div>
        <div className="same third">
        < div className='font'/>
             <h3>200,000</h3>
             <p>professionals trained on product and strategy</p>
        </div>
      </div>
    </>
  )
}

export default UI