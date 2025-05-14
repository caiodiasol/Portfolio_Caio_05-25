import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Todos os direitos reservados © 2025")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Desenvolvido por{" "}
          <a
            href="https://github.com/caiodiasol"
            target="_blank"
            rel="noreferrer"
          >
            Caio Dias
          </a>
        </p>
      </div>
    </Fade>
  );
}
