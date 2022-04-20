import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from './Navbar';
import Header from './Header';

function Dashboard() {
  return (
    <>
      <Navbar/>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/anime/image-1.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Tokyo Ghoul</h3>
            <p>“It's better to be hurt than to hurt others. Nice people can be happy with just that”</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/anime/image-2.jpg?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Demon Slayer</h3>
            <p>"Head-on battles are simple. Whoever’s stronger and faster wins"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/anime/image-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>My Hero Academia</h3>
            <p>"Whether you win or lose, looking back and learning from your experience is a part of life."</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Header title="Welcome OTAKU" description="Feels good to have a member!"/>
    </>
  );
}

export default Dashboard;