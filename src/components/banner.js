import React from "react";
import banner from '../img/banner.png'

export default function Banner() {
  return (
    <>
      <div className="banner-main">
        <img className="banner-img" src={banner} alt="" />
      </div>
    </>
  );
}
