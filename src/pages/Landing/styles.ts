import styled from "styled-components";
import { Column, Row } from "styles/components";

import Fundo from "assets/imgs/Fundo.png";
import { Colors, Breakpoints } from "styles/variables";

import Nuka from "nuka-carousel";

export const Container = styled(Column)`
  width: 100%;
  max-width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media screen and (min-width: ${Breakpoints.lg}) {
    scroll-snap-type: y mandatory;
  }

  ::-webkit-scrollbar {
    width: 5px;

    @media screen and (max-width: ${Breakpoints.md}) {
      display: none;
    }
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(22, 151, 193, 0.6);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .section {
    min-height: 100vh;
    height: 100vh;
    scroll-snap-align: start;
    position: relative;

    .faq-pixel-blur {
      position: absolute;
      bottom: 40px;
      right: 20px;
      max-height: 250px;
      max-width: 250px;
    }
  }

  .section#faq {
    min-height: unset;
    height: unset;
  }

  .section#aboutPhrase {
    padding: 0 30px;
  }

  .our-services {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(22, 151, 253);
    background: linear-gradient(
      180deg,
      rgba(22, 151, 253, 1) 50%,
      rgba(113, 199, 244, 1) 50%
    );

    .title {
      display: flex;
      align-items: center;
      width: 85%;
      margin: 0 auto;

      > img {
        max-width: 100px;
        max-height: 100px;
      }

      > span {
        font-size: 1.5em;
        font-weight: 800;
        color: ${Colors.white};
        margin-left: 30px;

        @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
          font-size: 2.4em;
        }
      }
    }

    .services-pixel-blur {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;

export const Intro = styled(Column)`
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  @media screen and (min-width: ${Breakpoints.lg}) {
    background: url("${Fundo}");
    background-size: contain;
  }

  @media screen and (max-width: ${Breakpoints.lg}) {
    background: ${Colors.primaryBlue};
    background-size: cover;
    background-repeat: no-repeat;
  }

  .pixel-blur {
    @media screen and (min-width: ${Breakpoints.lg}) {
      display: none;
    }

    @media screen and (max-width: ${Breakpoints.lg}) {
      position: absolute;
      right: 0;
      bottom: 100px;
      max-width: 70%;
      z-index: 1;
    }
  }

  .text {
    color: ${Colors.white};
    margin: auto 0 auto 24px;
    font-size: 3em;
    font-weight: 700;
    z-index: 20;

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 2.5em;
      margin: auto;
      width: 90%;
    }

    @media screen and (max-width: ${Breakpoints.xs}) {
      font-size: 1.7em;
    }
  }

  .know-more-btn {
    position: relative;
    bottom: 30px;
    margin: 0 auto;
    color: ${Colors.white};
    font-size: 0.875em;
    animation-name: Bounce;
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
    z-index: 20;

    .icon {
      transform: scale(1.5);
      vertical-align: middle;
    }
  }
`;

export const About = styled(Column)`
  height: 100vh;
  position: relative;
  justify-content: center;

  .pixel-blur {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 300px;
    max-height: 300px;
    filter: blur(5px);

    @media screen and (max-width: ${Breakpoints.sm}) {
      max-width: 150px;
      max-height: 150px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    font-weight: 800;
    color: ${Colors.primaryBlue};
    margin-bottom: 30px;

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 2em;
    }
  }

  .text {
    color: #7c7c7c;
    font-size: 1.25em;
    font-weight: 500;
    width: 60%;
    margin: auto;

    @media screen and (max-width: ${Breakpoints.sm}) {
      margin: 0 auto;
      width: 85%;
      font-size: 1em;
    }
  }
`;

export const AboutPhrase = styled(Column)`
  height: 100vh;
  position: relative;
  justify-content: center;
  margin: auto;

  @media screen and (max-width: ${Breakpoints.sm}) {
    margin: auto;
  }

  .content {
    margin: auto;

    .octus {
      max-height: 60px;
      max-width: 60px;
      margin-bottom: 37px;

      @media screen and (max-width: ${Breakpoints.sm}) {
        max-width: 50px;
        max-height: 50px;
      }
    }

    .text {
      font-size: 2em;
      line-height: 130%;
      color: ${Colors.primaryBlue};
      font-weight: 800;

      @media screen and (max-width: ${Breakpoints.sm}) {
        font-size: 1.8em;
      }
    }
  }

  .pixel-blur-left,
  .pixel-blur-right {
    position: absolute;
    max-width: 300px;
    max-height: 300px;
  }

  .pixel-blur-left {
    bottom: 100px;
    left: 0;
  }

  .pixel-blur-right {
    right: 0;
    bottom: 0;
  }
`;

export const ArrowBtn = styled.a`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: ${Colors.primaryBlue};
  animation-name: BouncingArrow;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;

  > .icon {
    transform: scale(1.9);
  }
`;

export const MyWrapper = styled(Nuka)`
  height: 80% !important;
  width: 90% !important;
  margin: 0 auto;

  @media screen and (max-width: ${Breakpoints.sm}) {
    height: 500px !important;
  }

  .slider-control-centerleft {
    @media screen and (max-width: ${Breakpoints.sm}) {
      display: none;
    }
  }

  .slider-control-centerright {
    @media screen and (max-width: ${Breakpoints.sm}) {
      display: none;
    }
  }

  .slider-control-bottomcenter {
    bottom: -30px !important;

    @media screen and (max-width: ${Breakpoints.sm}) {
      bottom: -50px !important;
    }

    .paging-item {
      > button {
        opacity: 1 !important;
      }

      .paging-dot {
        width: 20px;
        height: 20px;

        > circle {
          r: 6px;
          cx: 10px;
          cy: 10px;
        }
      }
    }

    .paging-item:not(.active) {
      .paging-dot {
        fill: ${Colors.white};
      }
    }
  }

  .slider-frame {
    width: 90%;
    margin: 0 auto !important;
    display: flex !important;
    align-items: center;
    padding: 20px 0 !important;
    overflow: visible !important;

    @media screen and (max-width: ${Breakpoints.sm}) {
      display: block !important;
    }
  }

  .slider-list {
    height: 100% !important;
  }

  .slider-slide {
    height: 100% !important;
  }
`;

export const NukaSlide = styled.div`
  background: #ffffff;
  height: 100%;
  padding: 25px 20px 0;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  width: 97%;
  cursor: grab;

  :active {
    cursor: grabbing;
  }

  @media screen and (max-width: ${Breakpoints.sm}) {
    height: fit-content;
    min-height: 100%;
    padding: 25px 20px;
  }

  .slider-title {
    font-size: 1.25em;
    font-weight: 800;
    margin-bottom: 20px;
    color: ${Colors.primaryGray};

    @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
      font-size: 2em;
    }
  }

  .slider-description {
    font-size: 1em;
    font-weight: 400;
    color: ${Colors.primaryGray};

    @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
      font-size: 1.4em;
    }

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 0.8em;
    }
  }

  .slider-know-more-btn {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: ${Colors.primaryBlue};
    font-weight: 800;

    .icon {
      vertical-align: middle;
    }
  }
`;

export const FaqContainer = styled(Column)`
  position: relative;
  min-height: 100%;

  #faq-arrow {
    position: relative;
    left: 50%;
    transform: translateX(0);
    margin: 10px 0;
  }

  .content {
    width: 70%;
    margin: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
      width: 80%;
    }

    @media screen and (max-width: ${Breakpoints.sm}) {
      width: 90%;
    }
  }

  .title {
    font-size: 1.5em;
    font-weight: 800;
    color: ${Colors.primaryBlue};

    @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
      font-size: 2.4em;
    }

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 2.25em;
    }

    > img {
      max-width: 150px;
      max-height: 150px;
    }
  }

  .faq-row-wrapper {
    @media screen and (max-width: ${Breakpoints.sm}) {
      margin: 30px auto;
      width: 90%;
    }

    .faq-title {
    }

    .faq-body {
      .faq-row {
        border-bottom: none;

        .row-title {
          color: #186ee8;

          .row-title-text {
            padding-right: 0;
            padding-left: 2em;

            @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
              font-size: 1.4em;
              padding-left: 1.3em;
            }
          }

          .icon-wrapper {
            left: 0;

            @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
              max-height: 30px;
              max-width: 30px;
            }
          }
        }

        .row-content {
          .row-content-text {
            color: #7c7c7c;
            font-weight: 500;
            font-size: 1em;
            margin-left: 38px;

            @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
              font-size: 1.1em;
            }
          }
        }
      }
    }
  }
`;

export const EndingPhrase = styled(AboutPhrase)`
  height: 100vh;
  width: 100%;
  position: relative;
  justify-content: space-between;
  padding-top: 100px;

  @media screen and (max-width: ${Breakpoints.sm}) {
    padding-top: 30px;
  }

  .content {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: ${Breakpoints.sm}) {
      width: 90%;
    }

    .text {
      font-size: 2em;

      @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
        font-size: 2.2em;
      }

      @media screen and (max-width: ${Breakpoints.sm}) {
        font-size: 1.5em;
      }
    }

    .blog-btn {
      color: ${Colors.white};
      background: #a4d54c;
      padding: 10px 15px;
      border-radius: 6px;
      margin: 15px 0 0 0;
      font-weight: 600;
      width: fit-content;
      font-size: 0.75em;
      z-index: 99;

      @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
        font-size: 1.2em;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${Colors.primaryBlue};
  position: relative;
  bottom: 0;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  .footerBox {
    width: 100%;
    border-bottom: 3px solid #71c7f4;
    padding: 10px 0;
    flex: 70%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${Breakpoints.sm}) {
      display: flex;
      flex-direction: column;
      padding-bottom: 0;
    }

    .left-content {
      display: flex;
      flex-direction: column;
      color: ${Colors.white};

      @media screen and (max-width: ${Breakpoints.sm}) {
        margin: 10px 0 0;
      }

      .footer-title {
        font-weight: 800;
        font-size: 1em;
        margin-bottom: 10px;

        @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
          font-size: 1.4em;
        }

        @media screen and (max-width: ${Breakpoints.sm}) {
          margin-bottom: 5px;
          font-weight: 600;
        }
      }

      .footer-email {
        font-weight: 500;
        color: ${Colors.white};

        @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
          font-size: 1.4em;
        }

        @media screen and (max-width: ${Breakpoints.sm}) {
          font-size: 1em;
          text-decoration: underline;
        }
      }
    }

    .right-content {
      float: right;
      display: flex;
      align-items: center;
      justify-content: right;
      width: 15%;
      height: 100%;

      @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
        width: unset;
      }

      @media screen and (max-width: ${Breakpoints.sm}) {
        width: 100%;
        margin: 10px 0;
        justify-content: left;
      }

      .icon-circle {
        border-radius: 50%;
        height: 42px;
        width: 42px;
        background: ${Colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.625em;

        .icon {
          height: 70%;
          width: 70%;
          color: ${Colors.primaryBlue};
        }
      }
    }
  }

  .copyright {
    color: ${Colors.white};
    font-weight: 500;
    font-size: 0.75em;
    flex: 30%;
    margin: auto 0;
    display: flex;
    align-items: center;

    margin: 10px 0;

    @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
      font-size: 1em;
    }
  }
`;

export const Sponsors = styled(Column)`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  background: #f2f2f2;
  padding: 45px 0;
  /* scroll-snap-align: end; */

  @media screen and (max-width: ${Breakpoints.md}) {
    width: 100%;
    padding: 20px 0 0 0;
    flex-wrap: nowrap;
    align-items: flex-start;
  }

  .title {
    color: ${Colors.primaryGray};
    font-weight: 600;
    margin-bottom: 50px;
    font-size: 1em;

    @media screen and (max-width: ${Breakpoints.md}) {
      width: 100%;
      text-align: center;
    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: ${Breakpoints.md}) {
      width: 90%;
      margin: 0 auto;
      justify-content: space-between;
    }

    a {
      @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
        flex-basis: 30%;
      }

      @media screen and (min-width: ${Breakpoints.md}) {
        margin-left: 20px;
      }

      @media screen and (max-width: ${Breakpoints.md}) {
        max-height: unset;
        max-width: 45%;
        margin-left: 0;
        object-fit: cover;
        margin: 0 auto 20px;
      }

      > img {
        max-height: 29px;
        object-fit: contain;

        @media screen and (min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg}) {
          max-width: 100%;
        }

        @media screen and (min-width: ${Breakpoints.md}) {
          :first-child {
            margin-left: 0;
          }
        }

        @media screen and (max-width: ${Breakpoints.md}) {
          max-height: unset;
          max-width: 100%;
          margin-left: 0;
          object-fit: cover;
        }
      }
    }
  }
`;
