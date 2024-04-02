import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/HomeCarousel.css';
import img1 from '../assets/HomeCarousel/a001.jpeg';
import img2 from '../assets/HomeCarousel/a002.png';
import img3 from '../assets/HomeCarousel/a003.jpeg';

const HomeCarousel = () => {
    return (<center>
        <Carousel>
            <Carousel.Item>
                <img src={img1} className='CImage d-block' text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} className='CImage d-block' text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} className='CImage d-block' text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    </center>)
}

export default HomeCarousel