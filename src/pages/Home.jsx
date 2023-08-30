import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroImgCenter from "../assets/images/hero-img-center.jpg";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImages from "../components/image-gallery/MasonryImages";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";

export const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                Traveling leaves you <span className="highlight">speechless</span>
                </h1>
                <p>
                Tourism is a remarkable avenue that offers a plethora of advantages to individuals and societies alike. It is a gateway to cultural enrichment, personal growth, and economic prosperity. By traversing new horizons and immersing ourselves in diverse cultures, we broaden our perspectives and gain a deeper understanding of the world. This exposure fosters open-mindedness, empathy, and a genuine appreciation for the beauty of human diversity.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src={heroImgCenter} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* =============hero section start============ */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ==================  Featured tour section  ================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* =============== experience section =============== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="expericence__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, conserthe adipieise elsi.
                  <br />
                  qeie alesqa, hic temeore djeht suinve siente unde.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>{" "}
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91ciUyMGFuZCUyMHRyYXZlbCUyMGxpZ2h0JTIwYmclMjBpbWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============= gallary section =============== */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallary
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImages />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============ testimonial section ========== */}

        <section>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'} />
                    <h2 className="testimonial__title">What our fans say about us</h2>
                </Col>
                <Col lg='12'>
                    <Testimonial />
                </Col>
            </Row>
        </section>

        <Newsletter/>
    </>
  );
};

export default Home;
