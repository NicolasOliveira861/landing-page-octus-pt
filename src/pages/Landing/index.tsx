import React, { useEffect } from "react";
import Navbar from "components/navbar";
import { Icon } from "@iconify/react";
import Separator from "assets/svgs/separator.svg";
import PixelBlur from "assets/imgs/pixel-blur.png";
import PixelBlur2 from "assets/imgs/pixel-blur2.png";

import BetChamps from "assets/imgs/betchamps.png";
import BetMais from "assets/imgs/betmais.png";
import Live2Play from "assets/imgs/live-2-play.png";
import Novateq from "assets/imgs/novateq.png";
import MarjoSports from "assets/imgs/marjo-sports.png";
import Esporte11 from "assets/imgs/esporte11.png";

import Octus from "assets/imgs/octus.png";
import Faq from "react-faq-component";
import { Breakpoints, Colors } from "styles/variables";
import { i18n } from "translate/i18n";

import {
  Container,
  Intro,
  About,
  AboutPhrase,
  ArrowBtn,
  MyWrapper,
  FaqContainer,
  EndingPhrase,
  Footer,
  Sponsors,
  NukaSlide,
} from "./styles";

const slidesRendered = () => {
  let number;

  if (window.outerWidth < 1024) {
    number = 1;
    return number;
  }

  if (window.outerWidth > 1024) {
    number = 2;
    return number;
  }

  return number;
};

const Landing: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll(".faq-row").forEach((el) => {
      el.addEventListener("click", () => {
        if (!el.classList.contains("active")) {
          if (el.parentNode!.querySelector(".faq-row.active")) {
            const element: HTMLElement = document.querySelector(
              ".faq-row.active .row-title"
            ) as HTMLElement;

            element.click();

            el.parentNode!.querySelector(".faq-row.active")?.classList.remove(
              "active"
            );
          }

          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    });
  }, []);

  const ques = `
  ${i18n.t("douts.content6")}
  
  <li>${i18n.t("douts.content6_li1")}</li>
  <br />
  <li>${i18n.t("douts.content6_li2")}</li>
  <br />
  <li>${i18n.t("douts.content6_li3")}</li>
  <br />
  <li>${i18n.t("douts.content6_li4")}</li>
  
  `;

  const data = {
    rows: [
      {
        title: i18n.t("douts.subtitle1"),
        content: i18n.t("douts.content1"),
      },
      {
        title: i18n.t("douts.subtitle2"),
        content: i18n.t("douts.content2"),
      },
      {
        title: i18n.t("douts.subtitle3"),
        content: i18n.t("douts.content3"),
      },
      {
        title: i18n.t("douts.subtitle4"),
        content: i18n.t("douts.content4"),
      },
      {
        title: i18n.t("douts.subtitle5"),
        content: i18n.t("douts.content5"),
      },
      {
        title: i18n.t("douts.subtitle6"),
        content: ques,
      },
    ],
  };

  const styles = {
    arrowColor: `${Colors.thirdBlue}`,
  };

  const config = {
    tabFocus: true,
  };

  const arrowsConfig = {};

  return (
    <Container>
      <div className="section">
        <Intro>
          <Navbar />
          <div className="text">
            {window.outerWidth > 560 ? (
              <>
                <p>{i18n.t("first.via")}</p>
                <p>{i18n.t("first.gam")}</p>
                <p>{i18n.t("first.seg")}</p>
              </>
            ) : (
              <p>{i18n.t("first.all")}</p>
            )}
          </div>
          <a href="#about" className="know-more-btn">
            {i18n.t("buttons.more")}{" "}
            <Icon icon="eva:arrow-ios-downward-fill" className="icon" />
          </a>

          <img className="pixel-blur" src={PixelBlur2} alt="Pixel Blur" />
        </Intro>
      </div>

      <div className="section" id="about">
        <About>
          <div className="text">
            <p className="title">{i18n.t("about.title")}</p>
            {i18n.t("about.p1")}
            <br />
            <br />
            {i18n.t("about.p2")}
            <br />
            <br />
            {i18n.t("about.p3")}
          </div>

          <img className="pixel-blur" src={PixelBlur} alt="Pixel Blur" />

          <ArrowBtn href="#aboutPhrase">
            <Icon icon="eva:arrow-ios-downward-fill" className="icon" />
          </ArrowBtn>
        </About>
      </div>

      <div className="section" id="aboutPhrase">
        <AboutPhrase>
          <div className="content">
            <img className="octus" src={Octus} alt="Octus" />
            <div className="text">
              {window.outerWidth > parseFloat(Breakpoints.md) ? (
                <>
                  <p>{i18n.t("about.phrase1")}</p>
                  <p>{i18n.t("about.phrase2")}</p>
                  <p>{i18n.t("about.phrase3")}</p>
                  <p>{i18n.t("about.phrase4")}</p>
                </>
              ) : (
                <p>{i18n.t("about.phrases")}</p>
              )}
            </div>
          </div>

          <ArrowBtn href="#our-services">
            <Icon icon="eva:arrow-ios-downward-fill" className="icon" />
          </ArrowBtn>
        </AboutPhrase>
      </div>

      <div className="section our-services" id="our-services">
        <p className="title">
          <span>{i18n.t("service.title")}</span>
        </p>

        <MyWrapper
          className="myWrapper"
          slidesToShow={slidesRendered()}
          slidesToScroll={1}
          // autoplay
          autoplayInterval={5000}
          enableKeyboardControls
          pauseOnHover
          speed={500}
          dragging
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "#4196F4",
            },
          }}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              style={{ display: "none" }}
              type="button"
              onClick={previousSlide}
            >
              <Icon
                icon="eva:arrow-ios-back-fill"
                style={{ color: "#4196f4" }}
                height="56"
                width="56"
              />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              style={{ display: "none" }}
              type="button"
              onClick={nextSlide}
            >
              <Icon
                icon="eva:arrow-ios-forward-fill"
                style={{ color: "#4196f4" }}
                height="56"
                width="56"
              />
            </button>
          )}
        >
          <NukaSlide>
            <span className="slider-title">{i18n.t("service.subtitle1")}</span>
            <p className="slider-description">{i18n.t("service.p1")}</p>
            {/* <a href="/" className="slider-know-more-btn">
              Saiba mais{" "}
              <Icon className="icon" icon="eva:arrow-ios-forward-fill" />
            </a> */}
          </NukaSlide>

          <NukaSlide>
            <span className="slider-title">{i18n.t("service.subtitle2")}</span>
            <div className="slider-description">
              <p>{i18n.t("service.p2")}</p>
              <br />
              <p>{i18n.t("service.p20")}</p>
            </div>
            {/* <a href="/" className="slider-know-more-btn">
              Saiba mais{" "}
              <Icon className="icon" icon="eva:arrow-ios-forward-fill" />
            </a> */}
          </NukaSlide>

          <NukaSlide>
            <span className="slider-title">{i18n.t("service.subtitle3")}</span>
            <p className="slider-description">{i18n.t("service.p3")}</p>
          </NukaSlide>

          <NukaSlide>
            <span className="slider-title">{i18n.t("service.subtitle4")}</span>
            <p className="slider-description">
              {i18n.t("service.p4")}
              <br /> {i18n.t("service.p40")}
              <br /> <br />
              {i18n.t("service.p41")}
            </p>
          </NukaSlide>

          <NukaSlide>
            <span className="slider-title">{i18n.t("service.subtitle5")}</span>
            <p className="slider-description">
              {i18n.t("service.p5")}
              <br /> <br />
              {i18n.t("service.p50")}
            </p>
          </NukaSlide>

          <NukaSlide>
            <span className="slider-title">{i18n.t("service.subtitle6")}</span>
            <p className="slider-description">
              {i18n.t("service.p6")}
              <br />
              <br />
              {i18n.t("service.p60")}
            </p>
          </NukaSlide>
        </MyWrapper>

        <ArrowBtn href="#faq">
          <Icon
            icon="eva:arrow-ios-downward-fill"
            className="icon"
            style={{
              color: "#ffffff",
            }}
          />
        </ArrowBtn>
      </div>

      <div className="section" id="faq">
        <FaqContainer>
          <div className="content">
            <span className="title">{i18n.t("douts.title")}</span>
            <Faq data={data} styles={styles} config={config} />
          </div>
          <img className="faq-pixel-blur" src={PixelBlur} alt="Pixel Blur" />

          <ArrowBtn id="faq-arrow" href="#endingPhrase">
            <Icon icon="eva:arrow-ios-downward-fill" className="icon" />
          </ArrowBtn>
        </FaqContainer>
      </div>

      <div className="section" id="endingPhrase">
        <EndingPhrase>
          <div className="content">
            <img className="octus" src={Octus} alt="Octus" />
            <p className="text">{i18n.t("ending.phrase")}</p>
            <a className="blog-btn" href="/" target="_blank" rel="noreferrer">
              {i18n.t("ending.button")}
            </a>
          </div>

          <Sponsors>
            <span className="title">{i18n.t("ending.clients")}</span>
            <div className="image-container">
              <a href="https://bit.ly/3FWL7a2">
                <img src={BetMais} alt="Bet Mais" />
              </a>
              <a href="https://bit.ly/3FZgnp1">
                <img src={MarjoSports} alt="Marjo Sports" />
              </a>
              <a href="https://bit.ly/3G3B1Ew">
                <img src={Esporte11} alt="Esporte11" />
              </a>
              <a href="https://bit.ly/3roAucf">
                <img src={BetChamps} alt="Bet Champs" />
              </a>
              <a href="https://bit.ly/3EdjtVJ">
                <img src={Live2Play} alt="Live 2 Play" />
              </a>
              <a href="https://bit.ly/3piD3cY">
                <img src={Novateq} alt="Novateq" />
              </a>
            </div>
          </Sponsors>

          <Footer>
            <div className="footerBox">
              <div className="left-content">
                <span className="footer-title">{i18n.t("contact.title")}</span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:mc@octusbet.com"
                  className="footer-email"
                >
                  info@octusbet.com
                </a>
              </div>

              <div className="right-content">
                <a
                  target="_blank"
                  href="https://bit.ly/30bdz8G"
                  rel="noreferrer"
                  className="icon-circle"
                >
                  <Icon className="icon" icon="dashicons:whatsapp" />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://bit.ly/3Brts8M"
                  className="icon-circle"
                >
                  <Icon className="icon" icon="ci:linkedin" />
                </a>

                <a
                  href="mailto:mc@octusbet.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-circle"
                >
                  <Icon className="icon" icon="clarity:email-solid" />
                </a>
              </div>
            </div>
            <div className="copyright">
              <p>{i18n.t("ending.dev")} &copy; 2021</p>
            </div>
          </Footer>
        </EndingPhrase>
      </div>
    </Container>
  );
};

export default Landing;
