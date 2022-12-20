import React from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

export default function Navbar() {
  const [linksVisible, setLinksVisible] = React.useState(false);
  const linksContainerRef = React.useRef(null);
  const linksRef = React.useRef(null);

  React.useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (linksVisible) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else linksContainerRef.current.style.height = "0px";
  }, [linksVisible]);

  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button
          className="nav-toggle"
          onClick={() => setLinksVisible(!linksVisible)}
        >
          <FaBars />
        </button>
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map(({ id, url, text }) => (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
