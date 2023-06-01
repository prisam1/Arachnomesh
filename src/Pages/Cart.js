import React from "react";
import Larq from "../Images/LARQ_Pitcher_PW_1 1.png"
import Vari from "../Images/Property 1=Variant2.png"
import Varia from "../Images/Property 1=Variant4 (1).png"
import Bottle from "../Images/Property 1=Variant4.png"
import Bottl from "../Images/fococlipping.png"
import Bott from "../Images/fococlipping-.png"
import Bbott from "../Images/fococlipping-2.png"

import cart from "../Images/cas.png"

import heart from "../Images/1077035.png"


import "../style/cart.css"

const Cart = () => {
  
  return (
    <div className="mai">
      <div className="tolr">
      <div className="toleft">
      <img src={Bbott} className="bbott"/>
      </div>
      <div className="toright">
       <div className="car">
        <div><button className="inb"><img src={cart} className="caimg" alt="img"/><div className="bu">Add to cart</div></button></div>
        <div><button className="inbf"><img src={heart} className="himg" alt="img"/><div className="but">Favourite</div></button></div>
      </div>

      <div className="del">Delivery</div>
      <div>Free standard shipping on others over $35 before tax plus free returns.</div>
     <div className="info">
      <div className="fdelinf">
      <div className="thead">TYPE</div>
      <hr className="lnn"/>
      <div>Standard</div>
      <hr className="lnn"/>
      <div>Express Delivery</div>
      <hr className="lnn"/>
      <div>Pick up in store</div>
      <hr className="lnn"/>
      </div>
      
      <div className="delinf">
      <div className="thead">HOW LONG</div>
      <hr className="ln"/>
      <div>1-4 business days</div>
      <hr className="ln"/>
      <div>1 business day</div>
      <hr className="ln"/>
      <div>1-3 business days</div>
      <hr className="ln"/>
      </div>
      <hr/>
      <div className="delinf">
      <div className="thead">HOW MUCH</div>
      <hr className="ln"/>
      <div>$4.50</div>
      <hr className="ln"/>
      <div>$10.00</div>
      <hr className="ln"/>
      <div>Free</div>
      <hr className="ln"/>
      </div>

       </div>
      <div className="return">Return</div>
      <div>You have 15 days to return the item(s) using any of the following methods.</div>
      <div>
        <ul className="list">
          <li>Free store return</li>
          <li>Free returns via USPS Dropoff Service.</li>
          
        </ul>
        </div>
      
      </div>
      </div>
      <div className="cbott"> 
         <div>
         <img src={Bottl} alt="bottles" className="bottle1"/>
         <div className="fbtt">Monaco Green</div>
         <div className="fstt">PureV</div>
         </div>
         
         <div>
          <img src={Bott} alt="bottles" className="bottle2"/>
          <div className="fbtt">Obsidian Pearl</div>
          <div className="fstt">FilterV</div>
         </div>
         <div>
          <img src={Larq} alt="bottles" className="bottle3"/>
          <div className="fbtt">Pure Snow</div>
          <div className="fstt">JugV</div>
         </div>
         </div> 
     
     <hr className="line"/>
    </div>
  );
};

export default Cart
