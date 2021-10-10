import React from "react";
export default function Footer() {
  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <aside>
        <p>
          <a href="https://www.linkedin.com/in/leon-zhang-design/">
            <i
              className="fa fa-linkedin-square"
              style={{ fontSize: "1.5em" }}
            ></i>
          </a>
        </p>
        <p>
          <a href="https://www.pinterest.ca/leonzhang14224/">
            <i
              className="fa fa-pinterest-square"
              style={{ fontSize: "1.5em" }}
            ></i>
          </a>
        </p>
        <p>
          <a href="https://github.com/leonzhang51">
            <i className="fa fa-github" style={{ fontSize: "1.5em" }}></i>
          </a>
        </p>
      </aside>
      <p>code by react angular</p>
      <p>Leonzhang51@gmail.com 2021</p>
    </div>
  );
}
