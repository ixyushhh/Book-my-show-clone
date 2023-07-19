import React from 'react';
import Slider from "react-slick";

//components
import Poster from '../Poster/poster.component';

//configs
import PosterCarouselSettings from '../../config/PosterCarousel.config'; 

const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : PosterCarouselSettings;
    return (
        <div>
            <div className="flex flex-col items-start">
                <h3 className={`text-2xl font-bold ${props.isDark?"text-white":"text-gray-800"}`}>
                    {props.title}
                </h3>
                <p className={`text-sm ${props.isDark?"text-white":"text-gray-800"}`}>{props.subtitle}</p>
            </div>

            <Slider {...sliderConfig}>
                {props.images.map((imageobj) => (
                    <Poster {...imageobj} isDark={props.isDark} />
                ))}
            </Slider>
        </div>
    );
};

export default PosterSlider;
