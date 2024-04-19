import { Fragment } from "react";
import Landing from "../components/landing";
import Features from "../components/Features";
import StayProdctive from "../components/StayProdctive";
import Testiominlas from "../components/Testiominlas";
import GetStarted from "../components/GetStarted";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProdctive />
      <Testiominlas />
      <GetStarted />
    </Fragment>
  );
};

export default Home;
