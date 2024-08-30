import React from 'react';
import '../styles/WelcomePage.css';
import Card from 'react-bootstrap/Card';

function WelcomePage() {
 

return (
    

<>
<Card>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
</Card.Body>
</Card>
<br />
<Card>
<Card.Body>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
</Card.Body>
<Card.Img variant="bottom" src="holder.js/100px180" />
</Card>

<div className="hero-container">
<div className="Hero-Background">
    <div className="Hero-CallToAction">
        <h1 className="H1 Hero-Title">Bienvenido <strong>El Oceano te llama</strong></h1>
        <h2 className="Hero-Text">Siente la brisa del mar y aprecia la maravilla debajo de la superficie </h2>
        <br />
        <button></button>
    </div>
</div>
</div>

</>
    

)


}

export default WelcomePage