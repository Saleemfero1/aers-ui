import React from "react";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import styles from "../styles/common.module.css";
import "../styles/global.css";
export default () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Home />
      <Products />
      <AboutUs />
      <Contact />
    </div>
  );
};
