import React from "react";
import bt from "../Images/Rectangle 136.png"
import sea from "../Images/ElanaLoo57.png"
import fall from "../Images/ElanaLoo15-1 1.png"
import "../style/third.css" 
const Third = () => {
  
  return (
    <div className="thhome">
      <div className="wks">
      <div className="work">
      <div className="wk">OUR WORK</div><div className="blink">_</div>
      </div>

      <div className="se">
        <div className="bign">01</div>
        <div className="btxt">Get Inspired</div>
        <div className="txt1">Satisfy all your inspiration needs in one place..</div>
        <div className="bign">02</div>
        <div className="btxt">Nano Zero Filtration</div>
        <div className="txt2">Nano Zero Filtration is a completely reimagined plant-based filter.</div>
        </div>
        </div>
      <div className="th">
        <div className="bign2">03</div>
        <div className="btxt2">PureV Technology</div>
        <div className="txt3">Proprietary PureV<sup>TM</sup> technology improves the quality of your water by preventing water.</div>
        <div className="bign3">04</div>
        <div className="btxt3">Self-Cleaning Worry-Free</div>
        <div className="txt4">Neutralizes up to 99% of bacteria such as E.coli using PureV technology.</div>  
        </div>

        <div className="imgbot">

          <div className="ft">     
          <div className="balpha">A</div>
          <div className="btxt">One million single use plastic bottles are thrown out every minute!</div>
          <div><img src={bt} className='bimg' alt="img"></img></div>
          <div className="balpha">C</div>
          <div className="btxt">How to live sustainably during a pandemic <a hreaf="">Read More</a></div>
          </div>

          <div className="st">  
          <div><img src={sea} className='bimg' alt="img"></img></div>
          <div className="balpha">B</div>
          <div className="btxt">The Plastic free year Challenges is Here. REGISTER NOW!</div>
          <div><img src={fall} className='bimg' alt="img"></img></div>
          </div>
        </div>
        </div>

    
  );
};

export default Third