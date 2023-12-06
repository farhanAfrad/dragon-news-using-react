import React from 'react';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const NewsThumbnail = ({ news }) => {
    const { _id, author, title, image_url, details, rating, total_view } = news;
    return (
        <div className='mb-8'>
            <div className='border rounded-md border-dark02'>
                {/* header of the thumnail */}
                <div className='flex justify-between items-center py-4 px-5 bg-dark04'>
                    {/* user */}
                    <div className='flex items-center gap-4'>
                        <img className="w-10 h-10 rounded-full" src={author?.img} alt="" />
                        <div>
                            <p className='font-semibold text-dark01'>{author.name}</p>
                            <p className='text-sm text-dark02'>{author.published_date}</p>
                        </div>

                    </div>
                    {/* icon */}
                    <div className='flex text-2xl gap-2 text-dark01'>
                        <CiBookmark />
                        <CiShare2 />
                    </div>
                </div>

                {/* thumnail body */}
                <div className='p-5'>
                    <h2 className='text-xl font-bold text-dark01 mb-5 leading-9'>{title}</h2>
                    <img src={image_url} alt="" />
                    <p className='text-dark02 leading-7 mt-8'>
                        {details.length > 250 ? details.substring(0, 250) + "..." : details}
                    </p>
                    <button className='font-semibold text-rating'>Read More</button>

                </div>

                {/* thumbnail footer */}
                <div className='p-5'>
                    <div className='flex justify-between items-center border-dark03 border-t-[1px] pt-6'>
                        <div className='flex justify-between gap-3'>
                            <div className="flex items-center text-2xl text-rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className='text-dark02 font-medium'>{rating.number}</p>
                        </div>

                        <div className='flex text-dark02 gap-3'>
                            <IoMdEye className='text-2xl' />
                            <p className='font-medium'>{total_view}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsThumbnail;