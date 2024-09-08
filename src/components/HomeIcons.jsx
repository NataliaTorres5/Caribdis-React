import React from "react";
import "../styles/HomeIcons.css";
import service1 from'../media/img/service1.png'
import service2 from '../media/img/service-2.png'
import service3 from '../media/img/service-3.png'
import  service4 from '../media/img/service-4.png'

function HomeIcons() {

  /*
  const icons = [
    {
      svg: 'service1.png',
      title: "ENVIO GRATIS",
      texto: "Para ordenes por encima de $150",
    },
    {
      svg: 'http://www.w3.org/2000/svg',
      title: "PAGO RÁPIDO",
      texto: "100 seguro",
    },
    {
      svg: "https://drive.google.com/file/d/1MpqZrB7rXFe57IUADF56UVq9ia0nbJI2",
      title: "DEVOLUCIÓN GRATUITA",
      texto: "Dentro de 30 días",
    },
    {
      svg: "https://drive.google.com/file/d/1MpqZrB7rXFe57IUADF56UVq9ia0nbJI2",
      title: "24/7 ASISTENCIA",
      texto: "Necesitas ayuda?",
    },
  ];

  console.log(HomeIcons);

  const iconView = (icon) => {
    return (
      <>
        <div>
          <img className="hicon-img" src={icon.svg} alt={icon.texto} />
        </div>
        <div>
          <h3 className="hicon-title">{icon.title} </h3>
          <p className="hicon-text"> {icon.texto} </p>
        </div>
      </>
    );
  };*/

  return (
    <>
      { /*<div className="IconSegment">
        
          <div className="icon-home"> {icons.map(iconView)} </div>
        
      </div> */}

<div class="container">

<ul class="service-list">

  <li class="service-item">
    <div class="service-card">

      <div class="card-icon">
        <img src={service1} width="53" height="28" loading="lazy" alt="Service icon"/>
      </div>

      <div>
        <h3 class="h4 card-title">Envio gratis</h3>

        <p class="card-text">
          Para ordenes por encima de <span>$150</span>
        </p>
      </div>

    </div>
  </li>

  <li class="service-item">
    <div class="service-card">

      <div class="card-icon">
        <img src={service2} width="43" height="35" loading="lazy" alt="Service icon"/>
      </div>

      <div>
        <h3 class="h4 card-title">Pago rápido</h3>

        <p class="card-text">
          100% seguro
        </p>
      </div>

    </div>
  </li>

  <li class="service-item">
    <div class="service-card">

      <div class="card-icon">
        <img src={service3} width="40" height="40" loading="lazy" alt="Service icon"/>
      </div>

      <div>
        <h3 class="h4 card-title">Devolución gratuita</h3>

        <p class="card-text">
          dentro de 30 días
        </p>
      </div>

    </div>
  </li>

  <li class="service-item">
    <div class="service-card">

      <div class="card-icon">
        <img src={service4} width="40" height="40" loading="lazy" alt="Service icon"/>
      </div>

      <div>
        <h3 class="h4 card-title">24/7 asistencia</h3>

        <p class="card-text">
          Necesitas ayuda?
        </p>
      </div>

    </div>
  </li>

</ul>

</div>
    </>
  );
}

export default HomeIcons;
