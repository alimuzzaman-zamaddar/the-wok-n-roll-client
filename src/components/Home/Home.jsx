import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import VisitUs from "../VisitUs/VisitUs";
import NewFoods from "../NewFoods/NewFoods";

const Home = () => {
  return (
    <Container className="bg-dark">
      <div className="title bg-dark ">
        <h1 className="mb-0 text-white  text-center p-3 border-bottom-1">Welcome to Chines Cuisine</h1>
      </div>
      <Header></Header>
      <Banner></Banner>

      <Outlet></Outlet>
      <VisitUs></VisitUs>
      <NewFoods></NewFoods>

      <Footer></Footer>
    </Container>
  );
};

export default Home;
