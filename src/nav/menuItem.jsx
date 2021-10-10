import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { connect } from "react-redux";
function MenuItem(props) {
  let menuItemUnderline = styles.AddMenuBorder;
  if (props.isMobile) menuItemUnderline = "null";
  return (
    <ul className={props.menu}>
      <li onClick={() => props.MainContentChange("Home")}>
        <Link
          to="/"
          className={props.mainContent === "Home" ? menuItemUnderline : null}
        >
          Home
        </Link>
      </li>
      <li onClick={() => props.MainContentChange("About")}>
        <Link
          to="/about"
          className={props.mainContent === "About" ? menuItemUnderline : null}
        >
          About
        </Link>
      </li>

      <li onClick={() => props.MainContentChange("MyWorks")}>
        <Link
          to="/myWorks"
          className={props.mainContent === "MyWorks" ? menuItemUnderline : null}
        >
          My Works
        </Link>
      </li>
      <li onClick={() => props.MainContentChange("MyCV")}>
        <Link
          to="/myCV"
          className={props.mainContent === "MyCV" ? menuItemUnderline : null}
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
