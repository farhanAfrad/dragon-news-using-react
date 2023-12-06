import React from 'react';
//icon from react icons
import { FaGoogle, FaGithub,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';




const RightNavigation = () => {
    return (
        //  three section
        // 1.login with
        // 2.find us
        // 3.Q-zone

        <div>
            <div>
                {/*1. login with section */}
                <div className='py-4'>
                    <h3 className='text-xl font-semibold mb-6'>Login With</h3>
                    <div className='space-y-3'>
                        <button className='w-64 flex justify-center items-center px-11 py-2 border rounded text-blue-400 gap-2 transition-transform active:scale-95'>
                            <FaGoogle />
                            <span>Login with Google</span>
                        </button>

                        <button className='w-64 flex justify-center items-center px-11 py-2 border rounded gap-2 transition-transform active:scale-95'>
                            <FaGithub />
                            <span>Login with Github</span>
                        </button>
                    </div>
                </div>

                {/*2.find us section */}
                <div className='mt-8'>
                    <h3 className='text-xl font-medium mb-6'>Find Us On</h3>
                    <div>
                        <div className='flex border-2 border-dark04 p-4 items-center gap-2 rounded-t-md'>
                            <FaFacebookF className='w-[30px] h-[30px] rounded-full bg-dark04 p-2 text-blue-600' />
                            <Link>Facebook</Link>
                        </div>
                        <div className='flex border-l-2 border-dark04 border-r-2 p-4 items-center gap-2'>
                            <FaTwitter className='w-[30px] h-[30px] rounded-full bg-dark04 p-2 text-blue-400' />
                            <Link>Twitter</Link>
                        </div>
                        <div className='flex border-2 border-dark04 p-4 items-center gap-2 rounded-b-md'>
                            <FaInstagram className='w-[30px] h-[30px] rounded-full bg-dark04 p-2 text-red-400' />
                            <Link>Instagram</Link>
                        </div>
                    </div>
                </div>

                {/* 3. Q-zone */}
                <div className='mt-5 bg-dark04 px-1 py-3 space-y-5'>
                    <h3 className='text-xl font-semibold mb-6 ml-2'>Q-Zone</h3>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>




        </div>
    );
};

export default RightNavigation;