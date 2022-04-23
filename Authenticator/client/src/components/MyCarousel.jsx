import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function MyCarousel(props) {
    return (
        <Carousel interval={2000}>
            {(props.options).map((item, i)=>(
                <Carousel.Item key={i}>
                    <img src={item.imageUrl} className="d-block w-100" alt='bg-img'/>
                    <Carousel.Caption>
                        <h3>{item.caption}</h3>
                        <p className="mb-0">{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
  )
}

export default MyCarousel