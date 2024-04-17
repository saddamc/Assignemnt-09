import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';



const HomesSlider = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <Swiper
                className='relative group'
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextE1: ".button-next-slide",
                    prevE1: ".button-prev-slide",
                }}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className="image relative w-full mx-auto">
                        <img src="https://i.ibb.co/44kLwg0/1.jpg" alt="" />
                    </div>
                    <div className='title-content absolute top-[85%] left-[3rem] '>
                        <button className='btn px-[2rem] bg-[#333] border-none font-fira text-white text-lg font-bold'>View Details</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image relative">
                        <img src="https://i.ibb.co/930cwL7/5.jpg" alt="" />
                    </div>
                    <div className='title-content absolute top-[85%] left-[3rem] '>
                        <button className='btn px-[2rem] bg-[#333] border-none font-fira text-white text-lg font-bold'>View Details</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image relative">
                        <img src="https://i.ibb.co/0QJ7S9m/6.jpg" alt="" />
                    </div>
                    <div className='title-content absolute top-[85%] left-[3rem] '>
                        <button className='btn px-[2rem] bg-[#333] border-none font-fira text-white text-lg font-bold'>View Details</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image relative">
                        <img src="https://i.ibb.co/72PJBHH/7.jpg" alt="" />
                    </div>
                    <div className='title-content absolute top-[85%] left-[3rem] '>
                        <button className='btn px-[2rem] bg-[#333] border-none font-fira text-white text-lg font-bold'>View Details</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image relative">
                        <img src="https://i.ibb.co/khyF8sQ/8.jpg" alt="" />
                    </div>
                    <div className='title-content absolute top-[85%] left-[3rem] '>
                        <button className='btn px-[2rem] bg-[#333] border-none font-fira text-white text-lg font-bold'>View Details</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image relative">
                        <img src="https://i.ibb.co/Khk64pg/9.jpg" alt="" />
                    </div>
                    <div className='title-content absolute top-[85%] left-[3rem] '>
                        <NavLink to="/house">
                            <button className='btn px-[2rem] bg-[#333] border-none font-fira text-white text-lg font-bold'>View Details</button>
                        </NavLink>
                    </div>
                </SwiperSlide>



                {/* <div className="top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 text-white w-[40px] bg-[black] p-2 grid place-items-center ">
                    <HiOutlineArrowLeft></HiOutlineArrowLeft>

                </div>
                <div className="top-[50%] absolute z-10 button-prev-slide group-hover:right-0 -right-[23rem] duration-500 text-white w-[40px] bg-[black] p-2 grid place-items-center ">
                    {""}
                    <HiOutlineArrowRight></HiOutlineArrowRight>
                </div> */}

            </Swiper>
        </div >
    );
};

export default HomesSlider;