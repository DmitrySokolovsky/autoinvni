import React from 'react';
import Slider from 'react-slick';

import './slider.style.scss';

export class MainSlider extends React.Component {
    render() {
        const config = {
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="ai-slider">
                <div className="ai-slider__slogan">
                    <a href="#" className="ai-slider__btn">НАШИ УСЛУГИ</a>
                </div>
                <Slider {...config}>
                    <div className="ai-slider__item ai-slider__item--1"></div>
                    <div className="ai-slider__item ai-slider__item--2"></div>
                    <div className="ai-slider__item ai-slider__item--3"></div>
                </Slider>
            </div>
        );
    }
}