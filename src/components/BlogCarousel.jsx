import React from 'react'

import Carousel from './Carousel'

function BlogCarousel(props) {


    const items = [
        {
            url: "s",
            title:"Animales",
            link:"",

        },
        {
            url: "",
            title:"Productos",
            link:"",
               
        },
        {
            url: "",
            title:"Visitanos",
            link:"",
               
        }
    ]
  return (

    <Carousel data={items} />
  )
}

export default BlogCarousel