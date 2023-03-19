import React, { useState, useEffect, useRef } from "react";
import ShopeeAds from "/Users/User/mp3 components/chatbot2/component/components/src/img/shopee_ads.jpeg";
import ShopeeAds2 from "/Users/User/mp3 components/chatbot2/component/components/src/img/shopee_ads2.png";
import ShopeeAds3 from "/Users/User/mp3 components/chatbot2/component/components/src/img/shopee_ads3.png";

function Popup() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const popup1Ref = useRef(null);
  const popup2Ref = useRef(null);
  const popup3Ref = useRef(null);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowPopup1(true);
    }, 3000);
    const timer2 = setTimeout(() => {
      setShowPopup2(true);
    }, 5000);
    const timer3 = setTimeout(() => {
      setShowPopup3(true);
    }, 8000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  function handleDismiss1() {
    setShowPopup1(false);
  }

  function handleDismiss2() {
    setShowPopup2(false);
  }

  function handleDismiss3() {
    setShowPopup3(false);
  }

  const popup1 = (
    <div className="m-0 p-0 box-border">
      <div className="flex justify-end items-center">
        <div
          className="w-80 h-64 bg-white rounded-xl"
          ref={popup1Ref}
          style={{ visibility: showPopup1 ? "visible" : "hidden" }}
        >
          <h1 className="cursor-pointer" onClick={handleDismiss1}>
            X
          </h1>
          <img src={ShopeeAds} />
        </div>
      </div>
    </div>
  );

  const popup2 = (
    <div className="m-0 p-0 box-border">
      <div className="flex justify-center items-center">
        <div
          className="w-80 h-64 bg-white rounded-xl"
          ref={popup2Ref}
          style={{ visibility: showPopup2 ? "visible" : "hidden" }}
        >
          <h1 className="cursor-pointer" onClick={handleDismiss1}>
            X
          </h1>
          <img src={ShopeeAds2} />
        </div>
      </div>
    </div>
  );

  const popup3 = (
    <div className="m-0 p-0 box-border">
      <div className="flex justify-start items-center">
        <div
          className="w-80 h-64 bg-white rounded-xl"
          ref={popup3Ref}
          style={{ visibility: showPopup3 ? "visible" : "hidden" }}
        >
          <h1 className="cursor-pointer" onClick={handleDismiss1}>
            X
          </h1>
          <img src={ShopeeAds3} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {popup1}
      {popup2}
      {popup3}
    </div>
  );
}

export default Popup;
