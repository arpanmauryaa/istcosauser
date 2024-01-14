// import React from 'react'
// import Slider from 'react-slick'
// import slide1 from '../assets/slide1.jpg'
// import slide2 from '../assets/slide2.jpg'
// import slide3 from '../assets/slide3.jpg'
// import slide4 from '../assets/slide4.jpg'
// import ad from '../assets/ad.jpg'




function DashboardHome() {
    // const settings = {
    //     autoplay: true,
    //     infinite: true,
    //     dots: true,
    //     infinite: true,
    //     speed: 600,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 0,

    // };

    var settings = {

        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }

    return (
        <>
            <div>

                {/* <div className='grid md:grid-cols-4 grid-cols-1   '>
                    <div className='col-span-3'>
                        <Slider {...settings} >
                            <div>
                                <img src={slide1} alt="slide1" />
                            </div>
                            <div>
                                <img src={slide2} alt="slide1" />
                            </div>
                            <div>
                                <img src={slide3} alt="slide1" />
                            </div>
                            <div>
                                <img src={slide4} alt="slide1" />
                            </div>
                        </Slider>
                    </div>

                    <div>
                        <img src={ad} alt="ad" className='w-full h-full' />
                    </div>

                </div> */}

            </div>
        </>
    )
}

export default DashboardHome











