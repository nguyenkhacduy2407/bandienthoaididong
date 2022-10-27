import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
                      <div >
                        <img   src="//cdn.tgdd.vn/2022/08/banner/1200-44-1200x44-11.png">

                        </img>
                        <img src="//cdn.tgdd.vn/2022/10/banner/iP14-da-co-hang-800-200-800x200.png"></img>
                      </div>
             
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div>
                TRỢ GIÁ SINH VIÊN KHÓA MỚI <br></br> ƯU ĐÃI HẤP DẪN
              </div>
              <div>
                IPHONE 14  <br></br>  Hotsale GIẢM GIÁ SÓC
              </div>
              <div>
             14 CHÍNH HÃNG  <br></br>  Giá mới cực tốt
              </div>
              <div>
              APPLE WATCH SR  <br></br>NHANH TAY MUA NÀO
              </div>

            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
          <img src="//cdn.tgdd.vn/2021/05/banner/sticky-gop-390-97-390x97.png"></img>
          </div>
          <div className="carousel-right-item">
          <img src="//cdn.tgdd.vn/2022/09/banner/390-x-97-390x97-1.png"></img>
          </div>
          <div className="carousel-right-item">
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
