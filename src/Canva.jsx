import "./App.css";
import logoReact from "./assets/react-logo.svg";
import logoGit from "./assets/git-logo.svg";
import logoJs from "./assets/javascript-logo.svg";
import logoTs from "./assets/typescript-logo.svg";
import logoHtml from "./assets/html-logo.svg";
import logoCss from "./assets/css-logo.svg";

function Canva() {
  return (
    <div id="canva">
      <picture id="icon1" className="icon-picture">
        <img src={logoReact} className="icons-banner" alt="React logo" />
      </picture>
      <picture id="icon2" className="icon-picture">
        <img src={logoGit} className="icons-banner" alt="Git logo" />
      </picture>
      <picture id="icon3" className="icon-picture">
        <img src={logoJs} className="icons-banner" alt="Js logo" />
      </picture>
      <picture id="icon4" className="icon-picture">
        <img src={logoTs} className="icons-banner" alt="Ts logo" />
      </picture>
      <picture id="icon5" className="icon-picture">
        <img src={logoHtml} className="icons-banner" alt="Html logo" />
      </picture>
      <picture id="icon6" className="icon-picture">
        <img src={logoCss} className="icons-banner" alt="Css logo" />
      </picture>
    </div>
  );
}

export default Canva;

