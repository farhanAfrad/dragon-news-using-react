import React from 'react';
// importing momnet using es6 syntext
import moment from 'moment';
// importing sliding news which is call marqee from react marquee
import Marquee from "react-fast-marquee";
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/navbar/Navbar';
import RightNavigation from '../../shared/RightNavigation/RightNavigation';
import bgImage from '../../assets/bg1.png'
import LeftNavigation from '../../shared/LeftNavigation/LeftNavigation';
import MainNews from './MainNews';


const Home = () => {
    return (
        <div className='font-poppins max-w-6xl mx-auto'>
            {/* header part of hte home section */}
            <Header></Header>

            {/* latest news section */}
            <div className='p-4 bg-dark04 flex items-center gap-4'>
                <button className='bg-btn-primary px-6 py-2 text-lg text-neutral-50'>Latest</button>
                <span className='cursor-pointer'>
                    <Marquee pauseOnHover={true}>
                        I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </span>
            </div>

            {/*top navigation bar in the home section  */}
            <Navbar></Navbar>

            {/* this is main section of this page where various kind of news or other things will be shown, this section has three column
            1.left navigation (1st column) where differnts types of category is shown
            2. main column (2nd column) where main news is shown
            3. right navigation (3rd column) where social icon and log in related navigtion is shown
            */}
            <div className='grid grid-cols-4 gap-6 mt-16'>
                <div className=''>
                    <LeftNavigation></LeftNavigation>
                </div>
                <div className='col-span-2'>
                    <MainNews></MainNews>
                </div>

                {/* 3.right navigation 3rd column */}
                <div >
                    <RightNavigation></RightNavigation>

                    {/* create amazing newspaper section */}
                    <div className='mt-5'>
                        <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md text-neutral-50 py-12">
                                    <h1 className="mb-5 text-3xl font-bold ">Create an Amazing Newspaper</h1>
                                    <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more..</p>
                                    <button className='bg-btn-primary px-6 py-2 text-lg text-neutral-50'>Latest</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;