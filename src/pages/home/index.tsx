import React from "react";
import styles from "./Home.module.css";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
const Home = () => {
  return (
    <Box className={styles.navHeader}>
      <Navbar />
      <div className={styles.homeBox}>
        <p>Hey Everyone This is a</p>
      </div>
    </Box>
  );
};

export default Home;
