import React, { Component } from "react";
import web from "../myWork/assest/images/web.gif";
import automation from "../myWork/assest/images/automation.gif";
import "../myWork/css/masterStyles.css";

class Services extends Component {
  render() {
    return (
      //<!---Design & Develop https://cdn.pixabay.com/photo/2017/06/30/20/05/electronics-2459502_640.png-->

      <section className="container services h-80">
        <div className="row align-items-start">
          <div className="col">
            <h3>SERVICES</h3>
          </div>
          <br />
        </div>
        <div className="row align-items-start">
          <div className="col col-2 ">
            <img id="design" className="img-responsive" src={web} alt="" />
          </div>
          <div className="col text-hide">hidden</div>
          <div className="col text-hide">hidden</div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <div className="col-2">
              <h3 className="">Design & Development</h3>
            </div>
            <br />
            <div className="col">
              <p>
                I’m a software developer with a specialty in JavaScript and
                Python. My software development career grew from a curiosity of
                wanting to learn about penetration testing. I quickly found
                myself staying up late, reading everything I could find to get a
                better understanding of the subject. I soon realized that any
                legit penetration tester was writing their own code to achieve
                the goals they were seeking. Fast forward to today and that
                curiosity has turned into a passion for software development!
                Here I can talk about my web design abilities using the lastest
                tools in web dev such as react and node, but also legacy tools
                like Java and Spring. I'll keep this topic limited to web
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col text-hide">hidden</div>
          <div className="col text-hide">hidden</div>
          <div className="col col-12">
            <img
              id="automation"
              className="img-responsive float-right"
              src={automation}
              alt=""
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-12 ">
            <h3 className="float-right">Automation</h3>
            <br />
            <div className="col col-12">
              <p id="about" className="float-right">
                I’m a software developer with a specialty in JavaScript and
                Python. My software development career grew from a curiosity of
                wanting to learn about penetration testing. I quickly found
                myself staying up late, reading everything I could find to get a
                better understanding of the subject. I soon realized that any
                legit penetration tester was writing their own code to achieve
                the goals they were seeking. Fast forward to today and that
                curiosity has turned into a passion for software development!
                Here I can talk about my web design abilities using the lastest
                tools in web dev such as react and node, but also legacy tools
                like Java and Spring. I'll keep this topic limited to web
                development.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default Services;
