import React, { useState, useRef, useEffect } from "react";

import styles from "./Nav.module.css";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuItem from "./menuItem";
import { connect } from "react-redux";
function Nav(props) {
  const [mobileMenuItem, showMobileMenu] = useState(false);
  let isMobile = useMediaQuery("(max-width: 700px)");
  const hamburgerClick = useRef(null);
  // detect click outside for hamburger menu,if yse hide mobile menu, using hook useRef
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      hamburgerClick.current &&
      !hamburgerClick.current.contains(event.target)
    ) {
      showMobileMenu(false);
    }
  };
  return (
    <nav className={styles.nav}>
      <img
        className={styles.logo}
        src={process.env.PUBLIC_URL + "/img/logo_name.png"}
        alt="logo"
      />
      {isMobile ? (
        <img
          src={process.env.PUBLIC_URL + "/img/menu.png"}
          className={styles.hamburgerMenu}
          alt="logo"
          ref={hamburgerClick}
          onClick={() => showMobileMenu(!mobileMenuItem)}
        />
      ) : (
        <MenuItem menu={styles.menu} />
      )}
      {mobileMenuItem ? (
        <MenuItem menu={styles.mobileMenu} isMobile={isMobile} />
      ) : null}
    </nav>
  );
}
const mapStatetoProps = (state) => {
  return {
    mainContent: state.mainContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    MainContentChange: (content) =>
      dispatch({ type: content, payload: content }),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Nav);
