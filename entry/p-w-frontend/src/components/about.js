import React, { Component } from "react";
import snoopy from "../myWork/assest/images/snoopy.gif";
import chris from "../myWork/assest/images/chris3.png";

class About extends Component {
  render() {
    return (
      <section className="masthead">
        <div className="container h-80">
          <div className="bg-3 text-center">
            <div className="row align-items-start about">
              <div className="col col-2 ">
                <img
                  id="sonic"
                  src={snoopy}
                  className="img-responsive"
                  alt="My Image"
                />
              </div>
              <div className="col text-hide">hidden</div>
              <div className="col text-hide">hidden</div>
            </div>
            <div className="row align-items-center about">
              <div className="col text-hide ">hidden /></div>
              <div className="col col-8 me">
                <p>
                  I’m a software developer with a specialty in JavaScript and
                  Python. My software development career grew from a curiosity
                  of wanting to learn about penetration testing. I quickly found
                  myself staying up late, reading everything I could find to get
                  a better understanding of the subject. I soon realized that
                  any legit penetration tester was writing their own code to
                  achieve the goals they were seeking. Fast forward to today and
                  that curiosity has turned into a passion for software
                  development! Here I can talk about my web design abilities
                  using the lastest tools in web dev such as react and node, but
                  also legacy tools like Java and Spring. I'll keep this topic
                  limited to web development.
                </p>
                <img className="rounded-circle" src={chris} alt="" />
              </div>
              <div className="col text-hide">hidden</div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default About;
