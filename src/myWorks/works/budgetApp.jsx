import React from "react";
import { Fragment } from "react";

export default function budgetApp() {
  return (
    <Fragment>
      <header className="headerBg">
        <section className="container">
          <h1 className="text-white text-center pt-5">
            Personal budgeting Mobile APP
          </h1>
          <p className="text-white text-center">
            Help millennials understand personal financial statement, take
            control their money, and optimize the spending
          </p>
          <article className="row my-5">
            <div className="col-md-6">
              <h4 className="text-white text-center">
                Why Are Projects Initiated?
              </h4>
              <p className="text-white">
                Contactless cards and online shopping sites make payment more
                easy than before, We spend money on what we want and what we
                need, but studies show that the use of contactless can increase
                spending 8 to 10% by making it harder to monitor our spending.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="../img/budgeting/appCover.jpg"
                className="img-fluid"
                style="width: 100%"
                alt="cover page"
              />
            </div>
          </article>
        </section>
      </header>
      <main className="container">
        <section>
          <article className="mt-4">
            <h4 className="text-center">
              A debit-driven society (user research)
            </h4>
            <p>Too many millennials who carry debt don't know how spend it.</p>
            <p>
              A survey ran by Northwestern Mutual comprised 503 Gen Zers, 672
              millennials, 595 Gen Xers, and 441 baby boomers. On average,
              millennials who carry debt report owing to a total of $27,900
              (excluding mortgages), slightly less than baby boomers and about
              $8,000 less than the average amount Gen Xers owe. 34% of Americans
              don’t know how much of their monthly income goes toward paying
              down their personal debt.
            </p>
            <p>Debit is a struggle even for wealthy millennials</p>
            <p>
              Making reference to a random twitter survey and google forms. The
              survey had more than 1000 participant. From this survey, about
              60%people don’t create budgets for their spending, 50% belong to
              impulsively-purchasing.
            </p>
            <h6>Some insights from the survey:</h6>
            <ul>
              <li>
                It is safe to continue with the designing the solution to this
                issue.
              </li>
              <li>
                Users budgeting are very flexible. Some create budgets for their
                weekly spending. Some others create budgets for their monthly
                spending
              </li>
              <li>
                Those who budget do so for financial discipline and to
                understand how they spend their money.
              </li>
              <li>
                Some users save a portion of their income and divert the other
                portion to cater for their expenses.
              </li>
            </ul>
            <h6>Here is a list of the problems after prioritization:</h6>
            <ul>
              <li>Inability to keep track of spending.</li>
              <li>Excessive spending on a particular expense.</li>
              <li>Lack of proper financial knowledge.</li>
              <li>Lack of access to previous financial records.</li>
              <li>Overly manual or stressful means of budgeting.</li>
            </ul>
            <p>
              Based on data and feedback we collected we decided to state an
              hypothesis that there might be decrease irrational purchase if
              there were a better and easier way of preventing impulsive buying
            </p>
          </article>
          <article className="row my-5">
            <div className="col-md-6">
              <img
                src="../img/budgeting/remoteTeam.jpg"
                className="img-fluid"
                style="width: 100%"
                alt="Remote Team"
              />
            </div>
            <div className="col-md-6">
              <h6>Team</h6>
              <p>Duration: One Month</p>
              <p>3 Designers & Researchers</p>
              <h6>My role</h6>
              <p>
                Lead ux designer and frontend developer in this project, led the
                design and discovery phase of this project, conducted all of the
                user interviews and user tests. I led efforts to evolve the
                service and address customer pain-points related to spending and
                planning experiences.
              </p>
            </div>
          </article>
          <article>
            <h4>Competitive Analysis</h4>
            <img
              src="../img/budgeting/marketCompetitor.jpg"
              className="img-fluid"
              style="width: 100%"
              alt="Market competitor"
            />
            <p>
              I researched apps related to finances, budget and habit-building
              and I end up with 7 apps. Then I filtered the ones related to
              financial management as they could be the main competitors. At
              this point and I was looking for their current features, and the
              overall experience using some of them. Here are some features I
              found related to the opportunities of the research:
            </p>
            <ul>
              <li>2 of the 7 apps sync bank accounts automatically;</li>
              <li>
                1 of the 7 reads SMS from the bank and add as a transaction —
                the person has to copy the message and add in the app;
              </li>
              <li>4 of the 7 send notifications;</li>
              <li>
                7 of the 7 apps use charts to illustrate some expenses and
                transactions.
              </li>
            </ul>
            <h6>Some insights from competitor analysis:</h6>
            <ul>
              <li>
                A good number of the apps favor app interaction in portrait
                mode.
              </li>
              <li>The apps have easily digestible financial reports.</li>
              <li>The apps all had simple and clean design.</li>
            </ul>
            <h6>Market Positioning</h6>
            <p>
              After the initial interviews and personas that I created, I set
              off to figure out the market position for the product. The goal
              after talking with everybody from users to stakeholders is the app
              to be easy to use and convenient.
            </p>
            <h6>Survey Questions</h6>
            <p>
              The purpose of these questions is to gain insight into key data
              and see if there is available information that would answer the
              questions. There was no relevant information around the topics of
              interest so I went about creating a survey to gather some
              real-world data.
            </p>
            <img
              src="../img/budgeting/surveyQuestion.jpg"
              className="img-fluid"
              style="width: 100%"
              alt="survey question"
            />
            <h6>Survey results</h6>
            <p>
              I created a google form and send it out to people in our contact
              list. The survey was filled by 197 people.
            </p>
            <img
              src="../img/budgeting/surveyResult.jpg"
              className="img-fluid"
              style="width: 100%"
              alt="survey result"
            />
          </article>
          <article>
            <h4 className="my-5">Empathy</h4>
            <p>
              I set off to learn about how do people actually spend— especially
              why do we have so many tools at our disposal and still people are
              terrible at spendings. 100% of the users are real people, focused
              on the mindset they shared with me I created two separate user
              personas based on my assumptions after the interviews.
            </p>
            <div className="row">
              <div className="col-md-6">
                <img
                  src="../img/budgeting/sofiajpg.jpg"
                  className="img-fluid"
                  style="width: 100%"
                  alt="sofia persona"
                />
              </div>
              <div className="col-md-6">
                <img
                  src="../img/budgeting/ivan.jpg"
                  className="img-fluid"
                  style="width: 100%"
                  alt="ivan persona"
                />
              </div>
            </div>
          </article>
          <article>
            <h4 className="my-5">Accountable as a solution</h4>
            <p>
              After identifying the needs, problems and frustration of the
              possible users, I tried to solve them and introduce the necessary
              features to meet the users’ needs.
            </p>
            <ul>
              <li>Features of Accountable</li>
              <li>Cash inflow and cash outflow access</li>
              <li>Financial reports</li>
              <li>Flexible budget creation</li>
              <li>Bank accounts management</li>
              <li>Subscription management</li>
              <li>Funds categorization</li>
              <li>Expected characteristics of accountable</li>
              <li>Easily digestible reports</li>
              <li>Easy to use</li>
              <li>Simple design</li>
              <li>Conventional and less formal tone</li>
              <li>Possibility of access to previous financial reports</li>
            </ul>
          </article>
          <article>
            <h6 className="my-5">Site Map</h6>
            <img
              src="../img/budgeting/sitemap.png"
              className="img-fluid"
              style="width: 100%"
              alt="site map"
            />
          </article>
          <article>
            <h6 className="my-5">Early Sketches</h6>
            <p>
              We usually start the design process with low fidelity sketches. In
              this time, we started to test the demo site searching for pain
              points. After we analysed what users got confused from, we took
              these insights and made some sketches on paper. Later, we propose
              UI by Look & Feel pages. When our client chose the preferred one,
              we started to built up the high fidelity prototype using Sketch.
              We iterated after every user test and that is how we got our final
              desktop screens. The last part was to interpret bigger screens
              into smaller phone screens.
            </p>
            <img
              src="../img/budgeting/sketch.jpg"
              className="img-fluid"
              style="width: 100%"
              alt="sketch"
            />
          </article>
          <article>
            <h4 className="my-5">Usability Testing</h4>
            <div className="row">
              <div className="col-md-6">
                <img
                  src="../img/budgeting/usablityTest.jpg"
                  className="img-fluid"
                  style="width: 80%"
                  alt="sketch"
                />
              </div>
              <div className="col-md-6">
                <p>
                  Being the creep I am, I gave few people phone with the
                  prototype on it and whispered into their ear while looking
                  over their shoulders 3 questions
                </p>
                <p>This below is the script I had prepared for the session.</p>
                <p>
                  Hey [name]. thanks for taking the time. I was telling you
                  about the app I am working on, and now would need to test a
                  prototype with you, it shouldn't take more than 15–30 minutes
                  of your time. I’ll ask you to complete just three tasks and
                  that’s all
                </p>
                <ul>
                  <li>
                    You have received $890 in cash instead of in your bank
                    account. You need to add it into your money to be budgeted,
                    how would you do that?
                  </li>
                  <li>
                    Let’s say we need that money to be added to category RENT.
                    Let’s add $500 and $90 to electricity. The rest $300 you add
                    to Groceries. How would you do that?
                  </li>
                  <li>
                    The last one is very simple. You have overspent on a
                    category called Eating out. How would you move $57 from Rent
                    to Earing out?
                  </li>
                </ul>
                <p>
                  Thank you very much! You really helped me a lot! It is
                  important for me to receive feedback early on and to try to
                  validate my assumptions.
                </p>
              </div>
            </div>
            <h6 className="mt-5">Summary</h6>
            <p>
              My goal was to validate if Millenials really understood how to
              operate with their money and plan accordingly. I was excited about
              this idea so a reality check was much needed.
            </p>
            <div className="row mt-5">
              <div className="col-md-6">
                <h4>Outcome:</h4>
                <ul>
                  <li>
                    All participants managed to add the money to be budgeted.
                  </li>
                  <li>All of the participants managed to pass the 3 tasks.</li>
                  <li>
                    Around half of the users got a little bit stuck about
                    converting money from one category to another.
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <img
                  src="../img/budgeting/outcome.jpg"
                  className="img-fluid"
                  style="width: 80%"
                  alt="outcome"
                />
              </div>
            </div>
          </article>
          <article>
            <h4 className="my-5">Final UI which I did</h4>
            <p>
              I tried to focus on features related to solving some of the major
              desired outcomes found in the initial research. The app should be
              simple and easy to understand. Also, encouraging them to build
              financial habits. Here are the highlighted features:
            </p>
            <ul>
              <li>Link Accounts</li>
              <li>
                Ease of adding accounts to give you a clear overview right away
              </li>
              <li>
                The ease of adding a bank account and credit card is vital for
                the success of this product. If somehow your bank doesn’t allow
                to login and gets statements you can always add your finances
                manually on a later stage.
              </li>
            </ul>
            <img
              src="../img/budgeting/AppUIHomepng.png"
              className="img-fluid my-5"
              style="width: 80%"
              alt="home"
            />
            <h6>Main function page</h6>
            <img
              src="../img/budgeting/budgetUI.jpg"
              className="img-fluid mb-5"
              style="width: 80%"
              alt="budget"
            />
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../img/budgeting/saveplanjpg.jpg"
                  className="img-fluid"
                  style="width: 80%"
                  alt="budget"
                />
              </div>
              <div className="col-md-8">
                <h6>Set Goals</h6>
                <p>Monthly Contribution</p>
                <p>Target Balance</p>
                <p>
                  The purpose of this is to achieve goals easier. By setting
                  goals with a monthly contribution you will have an automatic
                  payment to that “bucket” every single month. When you set the
                  payment to Target Balance it’s free, however, you can set
                  deadlines by which date you want to achieve that.
                </p>
              </div>
            </div>
            <h6 className="mt-5">Payment method</h6>
            <p>
              If the payment over the limit which set in security setting,
              system will send approval request to your accountguard, the app
              will continue payment process if you have approval code, why we
              add barrier in the process, because we hope user can stop and
              thinking, then to avoid impulsively-purchasing.
            </p>
            <img
              src="../img/budgeting/payment.jpg"
              className="img-fluid"
              style="width: 80%"
              alt="budget"
            />
            <h6 className="my-5">
              Provide Age of money information to help user understand personal
              financial health
            </h6>
            <img
              src="../img/budgeting/wallet_education.png"
              className="img-fluid"
              style="height: 100%"
              alt="budget"
            />
            <h4 className="my-5">Main learnings</h4>
            <p>
              Know your audience – Paying and giving credit card details makes
              users suspicious. Even under safe conditions, sometimes a bunch of
              lock icons (🔒) really helps make them truly believe you. :) Also,
              copy factors very highly here, which takes us to the next point.
            </p>
            <p>
              …and how to talk to them (Improve your writing skills) – As
              mentioned, copywriting makes up an important element of UX. We
              need to improve not just the visual but the written communication
              skills too.
            </p>
          </article>
        </section>
      </main>
    </Fragment>
  );
}
