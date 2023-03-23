import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/ahsan.webp';

import config from '../../config';
const IndexPage = () => (
  <Layout fullMenu>

    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>
            30+ years of experience in the field of Electronic Design Automation
            <br />
          </h2>
          <p>
          Ahsan joined LSI Logic, Milpitas, CA, after completing his Ph.D. <br />
          He subsequently joined Synopsys Inc, Mountain View, CA, in the early 1990’s. 
          <br />
          He served as a Vice President of Engineering at Synopsys Inc. for over 19 years, 
          <br />
          leading development of several market leading products.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style4">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-laptop major style5">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style6">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          {/* <p>
          Ahsan Bootehsaz received a B.Sc. degree in Electrical and Electronic Engineering from Nottingham University, the UK. 
          <br/>
          <br/>
           He subsequently earned a Ph.D. in Microelectronics and Design Automation from the University of Manchester Institute of Science and Technology, the UK.
          </p> */}
          <b>
          <p>
          Ahsan Bootehsaz received a B.Sc. degree in Electrical and Electronic Engineering from Nottingham University, the UK. 
          <br/>
          <br/>
           He subsequently earned a Ph.D. in Microelectronics and Design Automation from the University of Manchester Institute of Science and Technology, the UK.
          </p>
          </b>
        </div>
      </section>



    <section className="wrapper style5">
        <div className="inner">
          <h2>About Dr. Ahsan Bootehsaz</h2>
          <p>
           He moved to Silicon Valley in the late 1980’s to start his career in the 
          Semiconductor / Electronic Design Automation industry. 
          </p>

          <hr />

          <p>
          He joined Synopsys Inc. (Mountain View) in 1992 as an R&D Manager leading the development of next 
          generation EDA products. He became a member of the company’s executive team in 1998 as the Vice 
          President of Engineering for the design analysis product line. Over the course of the next two 
          decades, he built and led an engineering organization of several hundred software developers delivering 
          several market leading products in the EDA space.
          </p>

          <p>
          Ahsan assumed responsibility for the Software Engineering, managing the software Development Operation (Dev Ops), 
          product release and life cycle management, corporate quality and software entitlement and security for the EDA 
          divisions of the company, with a combined annual review of over $1.6 billion, supporting the development activities 
          of several thousand software engineers globally. During his tenure at Synopsys, while based in Mountain View, CA, 
          he built and managed global engineering teams based in China, Taiwan, India, Ireland, France and several cities in the US.
          </p>

          <hr />

          <p>
          In 2017, Dr. Bootehsaz moved to Los Angeles. He is currently a technology consultant / advisor for startup companies.
          </p>
        </div>
      </section>


    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contact Ahsan Bootehsaz</h2>
          {/* <p>
            <b>Dr. Ahsan Bootehsaz is available to connect and message via LinkedIn.</b>
          </p> */}
        </header>
        <ul className="actions stacked">
          <li>
            <a href="https://www.linkedin.com/in/ahsanbootehsaz/" className="button fit primary">
            <li className="icon fa-linkedin"> LinkedIn</li>
            </a>
          </li>
          {/* <li>
            <a href="/#" className="button fit">
            <li className="icon fa-paper-plane"> Mail</li>
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
