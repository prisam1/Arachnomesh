import React, { useState } from "react";
import lin from "../Images/Frame 5.png"
import fb from "../Images/Frame 6.png"
import tt from "../Images/Frame 7.png"
import wt from "../Images/Frame 8.png"
import fimg from "../Images/Group 1540.png"
import "../style/footer.css"
const Footer = () => {
  const [email, setEmail] = useState("");

  const mailsign = async (e) => {
    e.preventDefault()
  }
  return (
    <div className="footer">
    <div className="bleft">
     <div className="btf">
     <div className="bhead">Help</div>
     <div className="implink">FAQ</div>
     <div className="implink">Review</div>
     <div className="implink">My Account</div>
     <div className="implink">Corporate</div>
     <div className="implink">Contact Us</div>
     
     </div>
     <div className="bt">
     <div className="bhead">Shop</div>
     <div className="implink">PureV</div>
     <div className="implink">Gifts</div>
     <div className="implink">Travel set</div>
     <div className="implink">Accesories</div>
     </div>

     <div className="bt">
     <div className="bhead">About</div>
     <div className="implink">Magazine</div>
     <div className="implink">Press</div>
     <div className="implink">Our Story</div>
     <div className="implink">Tech</div>
     
     </div>

    </div>

    <div className="bright">  
    {/* <div className="fimg">
      <img src={fimg}></img>
    </div>    */}
     <div className="sign">Sign up for the newsletter</div>
     <div className="mail">
     <div className="mailbox">
            <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mailcontrol"
              id="exampleInput"
              placeholder="Enter Your Mail"
              
            />
          </div>
      <button type="submit" onClick={mailsign} className="btn">
            Sign Up
      </button>   
      </div>  
    </div>
     <div className="fob">

     
     <div className="cpr">Copyright Arachnomesh 2022</div>
     <div className="soimg">
     <img src={lin} className="socl"></img> 
     <img src={fb} className="socl"></img> 
     <img src={tt} className="socl"></img> 
     <img src={wt} className="socl"></img> 
     </div>

     <div className="tc">
     <div>T&C</div> 
     <div className="pp">Privacy Policy</div>
     </div>
    </div>
    
    </div>
  );
};


export default Footer;