import React, { useState } from "react";
import Logo from "assets/imgs/octusbet_logo.png";
import { Icon } from "@iconify/react";
import { i18n } from "translate/i18n";
import {
  Nav,
  MenuBars,
  NavLogo,
  MobileNavigation,
  MenuContainer,
  MenuContent,
  MenuOverlay,
  OnClickDrop,
  MenuItems,
  Item,
  MenuHeader,
  DesktopNavigation,
  DesktopItems,
  DealBtn,
} from "./styles";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        {window.outerWidth < 900 ? (
          <>
            <MobileNavigation>
              <MenuContainer>
                <button type="button" onClick={() => setIsOpen(true)}>
                  <MenuBars icon="entypo:menu" />
                </button>
                <NavLogo src={Logo} />
              </MenuContainer>
            </MobileNavigation>

            <MenuOverlay isOpen={isOpen}>
              <OnClickDrop
                onTouchMove={() => setIsOpen(false)}
                onClick={() => setIsOpen(false)}
              />
              <MenuContent isOpen={isOpen} id="menuContent">
                <MenuHeader>
                  <span>{i18n.t("nav.menu")}</span>
                  <button type="button" onClick={() => setIsOpen(false)}>
                    <Icon icon="eva:close-fill" className="menu-header-icon" />
                  </button>
                </MenuHeader>

                <MenuItems>
                  <Item href="#" onClick={() => setIsOpen(false)}>
                    {i18n.t("nav.home")}
                  </Item>
                  <Item href="#about" onClick={() => setIsOpen(false)}>
                    {i18n.t("nav.about")}
                  </Item>
                  <Item href="#our-services" onClick={() => setIsOpen(false)}>
                    {i18n.t("nav.services")}
                  </Item>
                  <Item href="#faq" onClick={() => setIsOpen(false)}>
                    {i18n.t("nav.douts")}
                  </Item>
                  <DealBtn
                    target="_blank"
                    rel="noreferrer"
                    href="https://bit.ly/30bdz8G"
                    onClick={() => setIsOpen(false)}
                  >
                    {i18n.t("nav.sale")}
                  </DealBtn>
                </MenuItems>
              </MenuContent>
            </MenuOverlay>
          </>
        ) : (
          <DesktopNavigation>
            <NavLogo src={Logo} />
            <DesktopItems>
              <MenuItems>
                <Item href="/"> {i18n.t("nav.home")}</Item>
                <Item href="#about">{i18n.t("nav.about")}</Item>
                <Item href="#our-services">{i18n.t("nav.services")}</Item>
                <Item href="#faq">{i18n.t("nav.douts")}</Item>
                <DealBtn
                  target="_blank"
                  rel="noreferrer"
                  href="https://bit.ly/30bdz8G"
                >
                  {i18n.t("nav.sale")}
                </DealBtn>
              </MenuItems>
            </DesktopItems>
          </DesktopNavigation>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
