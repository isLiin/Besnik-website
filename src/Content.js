/*  Container Content
 *   @Author KhanhHN9
 *   @Date 31.10.2022
 */

import {
  HiArrowLongRight,
  HiOutlineBanknotes,
  HiOutlineHome,
  HiOutlineBuildingLibrary,
} from "react-icons/hi2";
import { GoBookmark, GoVerified, GoFlame, GoGift } from "react-icons/go";
import { FaReact, FaRegWindowMinimize } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { SiAmazon, SiNasa } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { BiBeenHere } from "react-icons/bi";

import "./css/Commont.css";
import "./css/Content.css";
import React from "react";
// import myVideo from './images/abcVideo.mp4'
import imgLink from "./images/house-2.png";
import { DATA_00001 } from "./js/CommontData.js";

function contentWelcome() {
  const containerWelcome = (
    <div className="disFlex container-welcome">
      <div className="container-welcome__info">
        <p className="container-welcome_item1">Welcome to Besnik Agency</p>
        <h1 className="container-welcome_item2">
          Discover a place you'll love to live
        </h1>
        <p className="container-welcome_item1">
          Get the best real astate deals first, before they hit the mass market!
          hot foreclosure deals with one simple search
        </p>
        <button className="btn btn-active btn-more-about-us">
          More about us
        </button>
      </div>
      <div className="container-welcome__img">
        <img src={imgLink} title="Welcome !" alt="Welcome !"></img>
      </div>
    </div>
  );

  return containerWelcome;
}

function contentReview() {
  const containerReview = React.createElement(
    "div",
    { className: "disFlex contentReview" },
    <div className="disFlex-center review-top">
      <a className="review-title" href="#Besnik.">
        Besnik.
      </a>
      <div className="review-vote">
        {<AiFillStar></AiFillStar>}
        {<AiFillStar></AiFillStar>}
        {<AiFillStar></AiFillStar>}
        {<AiFillStar></AiFillStar>}
        {<AiFillStar></AiFillStar>}
      </div>
    </div>,
    <div className="disFlex-center review-bottom">
      <nav className="review-nav">More than 45.000+ companies trust Besnik</nav>
      <nav className="review-nav">5 Start ratings (20k Reviews)</nav>
    </div>
  );

  return containerReview;
}

function containerContact() {
  const containerContact = (
    <div className="disFlex-center containerContact">
      <a
        className="disFlex-center contact-amazon"
        href="https://www.amazon.com/"
      >
        {<SiAmazon></SiAmazon>} <nav>Amazon</nav>{" "}
      </a>
      <a className="disFlex-center contact-react" href="https://reactjs.org/">
        {<FaReact></FaReact>} <nav>REACT JS</nav>{" "}
      </a>
      <a
        className="disFlex-center contact-school"
        href="https://ce.vku.udn.vn/"
      >
        {<MdSchool></MdSchool>} <nav>school</nav>{" "}
      </a>
      <a className="disFlex-center contact-nasa" href="https://www.nasa.gov/">
        {<SiNasa></SiNasa>}{" "}
      </a>
    </div>
  );

  return containerContact;
}

function containerHowItWorks() {
  const btnHeader = (
    <button className="disFlex-center HowItWorks__btn">
      {<FaRegWindowMinimize></FaRegWindowMinimize>}
    </button>
  );

  const titleHeader = <h1 className="HowItWorks__title">How it's works !</h1>;

  const navHeader = (
    <nav className="HowItWorks__nav">
      Everything you need to know when you're looking to buy, rent or sell - All
      in one place.
    </nav>
  );

  const groupWorks = (
    <div className="disFlex-center groupWorks">
      <div className="disFlex-center works__item">
        {<HiOutlineBanknotes></HiOutlineBanknotes>}
        <h2>Buyer Guildes</h2>
        <a href="./">
          How to buy <HiArrowLongRight></HiArrowLongRight>
        </a>
      </div>
      <div className="disFlex-center works__item">
        {<HiOutlineHome></HiOutlineHome>}
        <h2>Renter Guildes</h2>
        <a href="./">
          How to ren <HiArrowLongRight></HiArrowLongRight>
        </a>
      </div>
      <div className="disFlex-center works__item">
        {<HiOutlineBuildingLibrary></HiOutlineBuildingLibrary>}
        <h2>Seller Guildes</h2>
        <a href="./">
          How to sell <HiArrowLongRight></HiArrowLongRight>
        </a>
      </div>
    </div>
  );

  const btnFooter = (
    <button className="btn btn-active">Sell full guidelines</button>
  );

  const containerhowItWorks = React.createElement(
    "div",
    {
      className: `disFlex-center containerhowItWorks`,
    },
    btnHeader,
    titleHeader,
    navHeader,
    groupWorks,
    btnFooter
  );
  return containerhowItWorks;
}

function groupStoreView() {
  const datas = DATA_00001;

  // Create compoment
  const CardView = (item, index) => {

    return (
      <div key={index} className="viewItem" onClick={() => {}}>
        <div className="header">
          <img src={item.src} alt={item.address}></img>
        </div>
        <div className="disFlex footer">
          <div className="disFlex bill">
            <h3 className="disFlex-center">
              <RiMoneyDollarCircleFill></RiMoneyDollarCircleFill> {item.price}{" "}
            </h3>
            <div className="disFlex-center">
              <BiBeenHere></BiBeenHere>
              <a href="./">{item.address}</a>
            </div>
            <span className="bookMark">
              <GoBookmark></GoBookmark>
            </span>
            <ul className="disFlex-center group-info">
              <li className="disFlex-center item-info">
                <GoFlame></GoFlame> {item.view}
              </li>
              <li className="disFlex-center item-info">
                <GoGift></GoGift> {item.gift}
              </li>
              <li className="disFlex-center item-info">
                <GoVerified></GoVerified>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  function showCardView(data) {
    if (data != null) {
      return (
        <div className="disFlex-center viewStore">
          <div className="slide-show">
            <img src={data.src} alt={data.title}></img>
          </div>
          <div className="disFlex contact-info">
            <h1>{data.title}</h1>
            <h3 className="disFlex-center">
              <span>Price:</span> {data.price}
              <RiMoneyDollarCircleFill></RiMoneyDollarCircleFill>
            </h3>
            <div className="address">
              <span>Address: </span>
              <a href={data.address}>{data.address}</a>
            </div>
            <p className="info">{data.info}</p>
            <div className="disFlex bill">
              <ul className="disFlex-center group-info">
                <li className="disFlex-center item-info">
                  <GoFlame></GoFlame> {data.view}
                </li>
                <li className="disFlex-center item-info">
                  <GoGift></GoGift> {data.gift}
                </li>
                <li className="disFlex-center item-info">
                  <GoVerified></GoVerified>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }

  const setListView = (
    <div className="disFlex groupViews">
      <h1 id="Frature" className="titleHeader">
        feature properties
      </h1>
      <div className="disFlex infoheader">
        <nav>Evething you need to know when you're looking</nav>
        <a className="disFlex-center" href="./">
          View all properties {<HiArrowLongRight></HiArrowLongRight>}
        </a>
      </div>
      <div className="disFlex-center renderViews">
        {datas.map((item, index) => CardView(item, index))}
      </div>
    </div>
  );

  // Render list component
  const groupViews = (
    <div id="containerView" className="disFlex groupViews">
      {setListView}
      <div id="showCardView">{showCardView(datas[0])}</div>
    </div>
  );

  return groupViews;
}

// function containerVideo(videoLink) {
//     return (
//       <video autoPlay loop>
//         <source src={videoLink} type="video/mp4"></source>
//       </video>
//     );
// }

export default function ThisContent() {
  const ThisContent = (
    <div id="Content" className="content-container">
      <div id="popup" className="display-hide"></div>
      {contentWelcome()}
      {contentReview()}
      {containerContact()}
      {containerHowItWorks()}
      {groupStoreView()}
      {/* {containerVideo(myVideo)} */}
    </div>
  );

  return ThisContent;
}
