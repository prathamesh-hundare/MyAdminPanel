import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widgets = ({type}) => {

  let data;

  const amount=100;
  const diff=20;

  switch(type){
    case "users":
      data={
        title:"USERS",
        isMOney:false,
        link:"See All Users",
        icon:<PersonOutlinedIcon className='icon'  style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}/>
      };
      break;
    case "orders":
      data={
        title:"ORDERS",
        isMOney:false,
        link:"View All Orders",
        icon:<ShoppingCartOutlinedIcon className='icon'  style={{
          backgroundColor: "rgba(218, 165, 32, 0.2)",
          color: "goldenrod",
        }}/>
      };
      break;
    case "earnings":
      data={
        title:"EARNINGS",
        isMOney:true,
        link:"View net earnings",
       icon:<MonetizationOnOutlinedIcon className='icon' style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>
      };
      break;

    case "balance":
    data={
      title:"BALANCE",
      isMOney:true,
      link:"See details",
      icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{
        backgroundColor: "rgba(128, 0, 128, 0.2)",
        color: "purple",
      }}/>
    };
    break;

    default:
      break;
    
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMOney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets