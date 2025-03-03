import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../Styles/Components/Navbar.css";
import { useCharStates } from "../Context/Context";
import Button from "./Button";
import hamburger from "../assets/hamburguerMenu.svg";

const Navbar = ({ isFooter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useCharStates();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={`navbarContainer ${isFooter ? "navbarFooter" : "navbar"}`}>
      <Button className="hamburgerButton" onClick={toggleMenu}>
        <img src={hamburger} alt="hamburgerIcon" className="hamburgerIcon" />
      </Button>

      <div className={`navbarMenu ${isMenuOpen ? "open" : ""}`}>
        {isHomePage ? (
          <>
            <ScrollLink to="experience" className="navbarLink" smooth={true} duration={2500}offset={-50} onClick={closeMenu}> {t("experience")} </ScrollLink>
            <ScrollLink to="education" className="navbarLink" smooth={true} duration={2500}offset={-50} onClick={closeMenu}> {t("education")} </ScrollLink>
            <ScrollLink to="skills" className="navbarLink" smooth={true} duration={2500} offset={-50} onClick={closeMenu}> {t("skills")} </ScrollLink>
            <ScrollLink to="projects" className="navbarLink" smooth={true} duration={2500} offset={-50}onClick={closeMenu}> {t("projects")} </ScrollLink>
            <ScrollLink to="contact" className="navbarLink" smooth={true} duration={2500} offset={-50} onClick={closeMenu}> {t("contact")} </ScrollLink>
          </>
        ) : (
          <>
            <Link to="/#experience" className="navbarLink" onClick={closeMenu}> {t("experience")} </Link>
            <Link to="/#education" className="navbarLink" onClick={closeMenu}> {t("education")} </Link>
            <Link to="/#skills" className="navbarLink" onClick={closeMenu}> {t("skills")} </Link>
            <Link to="/#projects" className="navbarLink" onClick={closeMenu}> {t("projects")} </Link>
            <Link to="/#contact" className="navbarLink" onClick={closeMenu}> {t("contact")} </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
