import React from 'react'
//para blogs 

function Carousel(props) {

   const items= props.data

 const range =4;  



   

    const itemView = (items) => ( //lo vuelvo funcion para que sea dinamico   no estaitco

        <div className="item">
            <img src={items.url} alt={items.title} />
            <p>{items.title} </p>
            <a href={items.link}>Saber más</a>
        </div>
    )

  return (
    <div>

        <div className="slide">

            {
                items.slice(0, range).map(itemView)
            }

        </div>
    </div>
  )
}
export default  Carousel