import React, { useEffect, useState } from 'react'
import img1 from '../../assets/img1.jpg'
import img4 from '../../assets/img4.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button1 from '../globalcomponent/Button1'
import Slider from 'react-slick'
import { birhday } from '../../utils/api/margeapi/MargeApi';


function CardImage({ ViewProfileLoginDashboardNavigate }) {

    const jsonData = [
        { ImagePath: 'http://new.istcosa.com/Images/9402.jpg', FullName: 'Sachin', RollNumberId: '6548', DateOfBirth: '23-December' },
        { ImagePath: 'http://new.istcosa.com/Images/9614.jpg', FullName: 'Ashish', RollNumberId: '56845', DateOfBirth: '01-Jaunpur' },
        { ImagePath: 'http://new.istcosa.com/Images/8113.jpg', FullName: 'Shandhu', RollNumberId: '8954', DateOfBirth: '28-December' },
        { ImagePath: 'http://new.istcosa.com/Images/8123.jpg', FullName: 'Sanjay', RollNumberId: '2222', DateOfBirth: '07-March' },
        { ImagePath: 'http://new.istcosa.com/Images/7717.jpg', FullName: 'Santosh', RollNumberId: '6542', DateOfBirth: '01-April' },
        { ImagePath: 'http://new.istcosa.com/Images/7743.jpg', FullName: 'Arvind', RollNumberId: '6325', DateOfBirth: '28-December' },
        { ImagePath: 'http://new.istcosa.com/Images/200456.jpg', FullName: 'Ajay', RollNumberId: '65241', DateOfBirth: '17-September' },
        { ImagePath: 'http://new.istcosa.com/Images/9470.jpg', FullName: 'Kamaldeep', RollNumberId: '8745', DateOfBirth: '23-December' },
        { ImagePath: 'http://new.istcosa.com/Images/9470.jpg', FullName: 'Kamaldeep', RollNumberId: '9999', DateOfBirth: '31-November' },
        { ImagePath: 'http://new.istcosa.com/Images/9470.jpg', FullName: 'Kamaldeep', RollNumberId: '5458', DateOfBirth: '05-December' },
    ]
    const [image, setImage] = useState(img1)
    const [birthdayData, setBirthdayData] = useState()

    const hoverFunction = () => {
        setImage(img4)
        // console.log('hii')
    }

    const closeHoverFunction = () => {
        setImage(img1)
        // console.log('bye')

    }

    useEffect(() => {
        birhday().then(response => {
            const data = response
            console.log(data, 'data')
            setBirthdayData(data)
        }).catch(error => {
            console.log('error in birhday')
        })
    }, [])


    var settings = {

        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <div className='grid grid-cols-1 '>
                    <Slider {...settings}>
                        {
                            birthdayData?.map((item => {
                                return (
                                    <div className='pt-5 pb-4 px-5 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2'>
                                        <div className='border-2'>
                                            <div className='flex justify-center'>
                                                <img src={item.ImagePath} alt="img" className='snap-center w-full' />
                                                {/* <img src={`http://new.istcosa.com/Images/Old_Images/${item.RollNumberID}.jpg`} alt="img" className='w-36 lg:h-40' /> */}
                                            </div>
                                            <div className='text-center '>
                                                <p className='font-bold text-md'>{item.FullName}</p>
                                                <p>({item.RollNumberId})</p>
                                                <p className='mt-2'>{item.DateOfBirth}</p>
                                                <button onClick={() => ViewProfileLoginDashboardNavigate(item.RollNumberId)} className='bg-red-900 rounded w-full py-3 mt-1 text-white'>Vew Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }))
                        }
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default CardImage
