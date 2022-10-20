import React from "react";
import Header from "../components/header/Header";
import Detail from "../components/detail/Detail";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import AppChat from "../components/AppChat/AppChat";
import { useSelector } from "react-redux";
import{aboutProduct}from'../components/detail/AboutProduct';

function DetailPage(props) {
  const { userInfo } = useSelector((state) => state.userSignin);
  return (
    <div>
      <Header></Header>
      <Detail></Detail>
      <aboutProduct></aboutProduct>
      {userInfo ? <AppChat></AppChat> : ""}
      <ScrollToTop></ScrollToTop>
      
    
    </div>
  );
}

export default DetailPage;
