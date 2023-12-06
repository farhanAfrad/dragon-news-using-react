import React from 'react';
// importing momnet using es6 syntext
import moment from 'moment';
// importing sliding news which is call marqee from react marquee
import Marquee from "react-fast-marquee";
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className='py-10 flex flex-col justify-center items-center'>
                <img className='' src={logo} alt="" />
                <p className='text-lg text-dark02 mt-2'>Journalism Without Fear or Favour</p>
                <p className='text-xl mt-1 font-medium'>
                    <span className='text-dark01'>{moment().format("dddd, ")}</span>
                    <span className='text-dark02'>{moment().format("MMMM D, YYYY")}</span>
                </p>
            </div>
            
        </div>
    );
};

export default Header;