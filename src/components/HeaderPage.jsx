import React from "react";
import CaribdisLogo from "../media/img/CaribdisLogo.png";
import HeaderDropDown from "./HeaderDropDown";

/*import person from "../media/icons/person-bounding-box.svg";*/
import "../styles/Header.css";

function HeaderPage() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <a href=".com" className="logo">
            <img
              src={CaribdisLogo}
              width="150"
              height="150"
              alt="Caribdislogo"
            />
          </a>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href=".com" className="navbar-link">
                  Inicio
                </a>
              </li>

              <li className="navbar-item">
                <a href=".com" className="navbar-link">
                  Blog
                </a>
              </li>

              <li className="navbar-item">
                <a href=".com" className="navbar-link">
                  Contacto
                </a>
              </li>
            </ul>
            <HeaderDropDown />
          </nav>
        </div>
        <div className="lowerHeader">
          <div>
            <ol className="lowerContainer">
              <li className="navbar-item header2">
                <a href=".com" className="navbar-link">
                  Acuario
                </a>
              </li>

              <li className="navbar-item header2">
                <a href=".com" className="navbar-link">
                  Animales
                </a>
              </li>

              <li className="navbar-item header2">
                <a href=".com" className="navbar-link">
                  Tienda
                </a>
              </li>
            </ol>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderPage;
