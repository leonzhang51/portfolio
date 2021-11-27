import React from "react";
import style from "./myWorks.module.css";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import BudgetApp from "./works/budgetApp";
import AIPrice from "./works/aiPrice";
export default function MyWorks() {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <>
      <Link to={`${url}/budgetApp`}>Work1</Link>
      <Link to={`${url}/aiPrice`}>Work2</Link>
      <Switch>
        <Route exact path={path} component={DefaultContent}></Route>
        <Route path={`${path}/budgetApp`} component={BudgetApp} />
        <Route path={`${path}/aiPrice`} component={AIPrice} />
      </Switch>
    </>
  );
}
function DefaultContent() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Recent Project</h1>
      {/*project card*/}
      <section className={style.cardGrid}>
        <article className={style.projectCard}>
          <div>
            <img
              className={style.cardImage}
              src={process.env.PUBLIC_URL + "/img/budgeting/appCover.jpg"}
              alt="projectx"
            />
          </div>
          <div>
            <p className={style.cardHeader}>Personal budgeting Mobile APP</p>
            <p className={style.cardBody}>
              Help millennials understand personal financial statement, take
              control their money, and optimize the spending
            </p>
            <div className={style.cardFooter}>
              <button className={style.btn}>Details</button>
            </div>
          </div>
        </article>
        <article className={style.projectCard}>
          <div>
            <img
              className={style.cardImage}
              src={process.env.PUBLIC_URL + "/img/budgeting/appCover.jpg"}
              alt="projectx"
            />
          </div>
          <div>
            <p className={style.cardHeader}>Personal budgeting Mobile APP</p>
            <p className={style.cardBody}>
              Help millennials understand personal financial statement, take
              control their money, and optimize the spending
            </p>
            <div className={style.cardFooter}>
              <button className={style.btn}>Details</button>
            </div>
          </div>
        </article>
        <article className={style.projectCard}>
          <div>
            <img
              className={style.cardImage}
              src={process.env.PUBLIC_URL + "/img/budgeting/appCover.jpg"}
              alt="projectx"
            />
          </div>
          <div>
            <p className={style.cardHeader}>Personal budgeting Mobile APP</p>
            <p className={style.cardBody}>
              Help millennials understand personal financial statement, take
              control their money, and optimize the spending
            </p>
            <div className={style.cardFooter}>
              <button className={style.btn}>Details</button>
            </div>
          </div>
        </article>
        <article className={style.projectCard}>
          <div>
            <img
              className={style.cardImage}
              src={process.env.PUBLIC_URL + "/img/budgeting/appCover.jpg"}
              alt="projectx"
            />
          </div>
          <div>
            <p className={style.cardHeader}>Personal budgeting Mobile APP</p>
            <p className={style.cardBody}>
              Help millennials understand personal financial statement, take
              control their money, and optimize the spending
            </p>
            <div className={style.cardFooter}>
              <button className={style.btn}>Details</button>
            </div>
          </div>
        </article>
        <article className={style.projectCard}>
          <div>
            <img
              className={style.cardImage}
              src={process.env.PUBLIC_URL + "/img/budgeting/appCover.jpg"}
              alt="projectx"
            />
          </div>
          <div>
            <p className={style.cardHeader}>Personal budgeting Mobile APP</p>
            <p className={style.cardBody}>
              Help millennials understand personal financial statement, take
              control their money, and optimize the spending
            </p>
            <div className={style.cardFooter}>
              <button className={style.btn}>Details</button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
