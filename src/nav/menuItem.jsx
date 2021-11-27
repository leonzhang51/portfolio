import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import { connect } from "react-redux";
function MenuItem(props) {
  let menuItemUnderline = styles.AddMenuBorder;
  let url = useLocation();

  if (props.isMobile) menuItemUnderline = "null";
  return (
    <ul className={props.menu}>
      <li onClick={() => props.MainContentChange("Home")}>
        <Link
          to="/"
          className={url.pathname === "/" ? menuItemUnderline : null}
        >
          Home
        </Link>
      </li>
      <li onClick={() => props.MainContentChange("About")}>
        <Link
          to="/about"
          className={url.pathname === "/about" ? menuItemUnderline : null}
        >
          About
        </Link>
      </li>

      <li onClick={() => props.MainContentChange("MyWorks")}>
        <Link
          to="/myworks"
          className={url.pathname === "/myworks" ? menuItemUnderline : null}
        >
          My Works
        </Link>
        <div></div>
      </li>
      <li onClick={() => props.MainContentChange("MyCV")}>
        <Link
          to="/myCV"
          className={url.pathname === "/myCV" ? menuItemUnderline : null}
        >
          My CV
        </Link>
      </li>
    </ul>
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

export default connect(mapStatetoProps, mapDispatchToProps)(MenuItem);
