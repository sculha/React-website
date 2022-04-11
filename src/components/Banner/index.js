import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.scss"

function BannerSlider() {
    const banner = [
        {
            id: 1,
            title: 'Ichte %100 Best Practice',
            subTitle: 'Lorem Ipsum has been dummy text ever since the 1500s',
            text: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            img: './assets/img/banner_1.png'
        }, {
            id: 2,
            title: 'Ichte %100 Best Practice',
            subTitle: 'Lorem Ipsum has been the industry\'s',
            text: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            img: './assets/img/banner_2.png'
        }

    ];

    const slideItem = banner.map((item) =>
        <div className="item" key={item.id}>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <article>
                        <h1 className="title">{item.title}</h1>
                        <h2 className="sub-title">{item.subTitle}</h2>
                        <p> {item.text} </p>
                    </article>
                </div>
                <div className="col-lg-6">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                </div>
            </div>
        </div>
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='banner'>
            <div className='container-fluid'>
                <Slider {...settings}>
                    {slideItem}
                </Slider>
            </div>
        </div>
    )
}

export default BannerSlider
