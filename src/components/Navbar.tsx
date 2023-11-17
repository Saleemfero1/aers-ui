import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./NavbarAnimation.module.css";
import { Box, Container, Hidden } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import "../styles/global.css";
const buttonStyle = {
  color: "black",
  fontWeight: "bold",
  borderRadius: 16,
};

const Navbar = () => {
  const [toggleState, toggleSetState] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const toggleDrawer = () => {
    toggleSetState(!toggleState);
  };

  useEffect(() => {
    // Start rotating the logo when the component mounts
    setIsRotating(true);

    // Stop rotating after 2 seconds
    setTimeout(() => {
      setIsRotating(false);
    }, 2000);
  }, []);

  return (
    <Box className={styles.navHeader}>
      <Container maxWidth="lg" className={styles.navbar}>
        {/* AERS Logo and Headings */}
        <Box>
          <Typography className={styles.aersStyle}>
            Aers Premium Coolers{" "}
          </Typography>
        </Box>
        {/* Hide the navbar for small size screen  */}
        <Hidden mdDown>
          <Box className={styles.navbarBtnGrp}>
            <Link to="/">
              <Button style={buttonStyle}>Home</Button>
            </Link>

            <Link to="product" smooth={true} duration={500}>
              <Button style={buttonStyle}>Product</Button>
            </Link>
            <Link to="about" className={styles.btn} duration={500}>
              <Button style={buttonStyle}>ABOUT</Button>
            </Link>
            <Link to="contact">
              <Button style={buttonStyle}>CONTACT</Button>
            </Link>
          </Box>
        </Hidden>

        {/* Hide the HumBurgger icon for larger screen */}
        <Hidden mdUp>
          {toggleState ? (
            <MenuIcon onClick={toggleDrawer} fontSize="large" />
          ) : (
            <CloseIcon onClick={toggleDrawer} fontSize="large" />
          )}
        </Hidden>
      </Container>
      <Hidden mdUp>
        {!toggleState && (
          <div>
            <Box className={styles.navbarBtnGrpMobile}>
              <Link to="home">
                <Button style={buttonStyle} onClick={toggleDrawer}>
                  Home
                </Button>
              </Link>
              <Link to="product" smooth={true} duration={500}>
                <Button style={buttonStyle} onClick={toggleDrawer}>
                  Product
                </Button>
              </Link>
              <Link to="about" className={styles.btn} duration={500}>
                <Button style={buttonStyle} onClick={toggleDrawer}>
                  ABOUT
                </Button>
              </Link>
              <Link to="contact" duration={500}>
                <Button style={buttonStyle} onClick={toggleDrawer}>
                  CONTACT
                </Button>
              </Link>
            </Box>
          </div>
        )}
      </Hidden>
    </Box>
  );
};

export default Navbar;
