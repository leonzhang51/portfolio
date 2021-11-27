import React from "react";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center" }}>
      <hr />
      <aside>
        <a href="https://www.linkedin.com/in/leon-zhang-design/">
          <i
            className="fa fa-linkedin-square"
            style={{ fontSize: "1.5em", color: "gray" }}
          ></i>
        </a>

        <a
          href="https://www.pinterest.ca/leonzhang14224/"
          style={{ marginLeft: "1em" }}
        >
          <i
            className="fa fa-pinterest-square"
            style={{ fontSize: "1.5em", color: "gray" }}
          ></i>
        </a>

        <a href="https://github.com/leonzhang51" style={{ marginLeft: "1em" }}>
          <i
            className="fa fa-github"
            style={{ fontSize: "1.5em", color: "gray" }}
          ></i>
        </a>
      </aside>
      <p style={{ color: "red", marginRight: "1em" }}>
        Site built with
        <FaReact />
        {/*< SiAngular />*/}
      </p>
      <p>Leonzhang51@gmail.com 2021</p>
    </footer>
  );
}
