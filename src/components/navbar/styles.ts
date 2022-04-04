import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import { Breakpoints, Colors, Sizes } from "styles/variables";
import { Column, Row } from "styles/components";
import { MenuContentProps } from "lib/navbarProps";

export const Nav = styled.div`
  min-width: 100%;
  max-width: 100%;
  display: flex;
  height: fit-content;
  background: transparent;
  position: absolute;
  top: 0;
`;

export const MobileNavigation = styled(Column)`
  width: 100%;
`;

export const MenuContainer = styled(Row)`
  width: 100%;
  justify-content: space-between;
  padding: 16px 25px;
`;

export const MenuBars = styled(Icon)`
  position: relative;
  color: ${Colors.white};
  height: 40px;
  width: 40px;
`;

export const NavLogo = styled.img`
  max-width: 50%;
  object-fit: contain;

  @media screen and (min-width: ${Breakpoints.lg}) {
    max-width: unset;
    max-height: 50px;
  }
`;

export const MenuOverlay = styled.div<MenuContentProps>`
  background: rgba(124, 124, 124, 0.26);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  z-index: 9999;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const OnClickDrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;

  @media screen and (min-width: ${Breakpoints.lg}) {
    display: none;
  }
`;

export const MenuContent = styled(Column)<MenuContentProps>`
  height: 100%;
  width: 75%;
  position: absolute;
  top: 0;
  left: -100%;
  background: ${Colors.white};
  z-index: 20;
  visibility: hidden;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  overflow: hidden;
  padding: 25px;

  ${(props) =>
    props.isOpen &&
    css`
      left: 0;
      visibility: visible;
    `}
`;

export const MenuHeader = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 28px;

  > span {
    font-weight: bold;
    font-size: ${Sizes.lg};
    color: ${Colors.primaryGray};
  }

  > button .menu-header-icon {
    color: ${Colors.primaryGray};
    font-size: 42px;
  }
`;

export const MenuItems = styled(Column)`
  width: 100%;
  position: relative;

  .open {
    max-height: 100%;
    visibility: visible;
    transition: 1s;
    -webkit-transition: 1s;
    -moz-transition: 1s;
    -o-transition: 1s;
  }

  @media screen and (min-width: ${Breakpoints.lg}) {
    flex-direction: row;
    border-bottom: none;
  }
`;

export const Item = styled.a`
  font-size: 1.3em;
  color: ${Colors.primaryBlue};
  margin-bottom: 0.9em;
  width: 100%;
  /* border-bottom: 2px solid #f5f5f5; */

  @media screen and (min-width: ${Breakpoints.lg}) {
    border-bottom: none;
    width: fit-content;
    color: ${Colors.white};
    font-size: 16px;
    display: inline-block;
    position: relative;
    height: fit-content;
    margin: 15px 4px 15px 40px;

    :after {
      content: "";
      height: 4px;
      bottom: -8px;
      left: 0;
      background-color: ${Colors.thirdBlue};
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.25s ease-out;
    }

    :hover {
      :after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

export const DealBtn = styled.a`
  color: ${Colors.white};
  position: absolute;
  right: 30px;
  background: #a4d54c;
  padding: 10px 15px;
  border-radius: 6px;
  margin: 8px 0;
  font-weight: 600;
  font-size: 1em;

  @media screen and (max-width: ${Breakpoints.sm}) {
    position: relative;
    right: unset;
    width: fit-content;
  }
`;

export const DesktopNavigation = styled(Row)`
  width: 100%;
  padding: 25px 30px;
`;

export const DesktopHeader = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 7px 0;

  > div {
    display: flex;
    width: 47%;
  }
`;

export const DesktopItems = styled(Row)`
  width: 100%;
  justify-content: center;
  margin-left: 50px;
  position: relative;
`;
