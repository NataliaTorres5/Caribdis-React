import React from 'react'
import CaribdisLogo from "../media/img/CaribdisLogo.png";

import '../styles/Header.css'

export default function HeaderPage() {


  return (
    <div><header class="header" data-header>
    <div class="container">

      <div class="overlay" data-overlay></div>

      <a href=".com" class="logo">
        <img src={CaribdisLogo } width="200" height="200" alt="Caribdislogo"/>
      </a>

      <button class="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
       
      </button>

      <nav class="navbar" data-navbar>

        <button class="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
        
        </button>

        <a href=".com" class="logo">
          <img src="./assets/img/CaribdisLogo.png" width="190" height="190" alt="Footcap logo"/>
        </a>

        <ul class="navbar-list">

          <li class="navbar-item">
            <a href=".com" class="navbar-link">Inicio</a>
          </li>

          <li class="navbar-item">
            <a href=".com" class="navbar-link">Blog</a>
          </li>

          <li class="navbar-item">
            <a href=".com" class="navbar-link">Contacto</a>
          </li>

        </ul>

        <ul class="nav-action-list">

         
          <li>
            <a href="./signup-in.html" class="nav-action-btn">
              
              <a href="./signup-in.html" class="nav-action-text">Ingreso / Registro</a>
            </a>
          </li>

         

        </ul>

      </nav>

    </div>
    <div class="lowerHeader">
        <div>
          <ol class="lowerContainer">
            <li class="navbar-item header2">
                <a href=".com" class="navbar-link">Acuario</a>
              </li>
    
              <li class="navbar-item header2">
                <a href=".com" class="navbar-link">Animales</a>
              </li>
    
              <li class="navbar-item header2">
                <a href=".com" class="navbar-link">Tienda</a>
              </li>
            </ol>

        </div>

    </div>
  </header></div>
  )
}

