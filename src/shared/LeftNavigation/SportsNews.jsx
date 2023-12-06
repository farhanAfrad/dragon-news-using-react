import React from 'react';
import { CiCalendar } from "react-icons/ci";
import moment from 'moment/moment';

const SportsNews = ({ sport }) => {
    console.log(sport);
    const { image_url, title, author } = sport;
    return (
        <div>
            <div className="card bg-base-100 rounded-none">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="text-xl font-semibold text-dark01 my-5">{title}</h2>
                    <div className="flex justify-between">
                        <p>Sports</p>
                        <div className='flex items-center gap-1'>
                            <CiCalendar />
                            <span className='text-dark02'>{moment().format("MMMM D, YYYY")}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SportsNews;