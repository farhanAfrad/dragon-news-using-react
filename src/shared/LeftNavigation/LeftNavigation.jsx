import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Category from './Category';
import SportsNews from './SportsNews';


const LeftNavigation = () => {
    // fetching categories data from categories.json
    // 4 (four) steps to fetch data and set them in state
    // 1.state declaration
    // 2.setting side effect with no dependencies using useEffect()
    // 3.fetch().then().then()
    // 4.set the data

    // step 01
    const [categories, setCategories] = useState([]);
    const [news,setNews] = useState([]);


    


    // step 02
    useEffect(() => {
        // step 03
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data)); //step 04

        //for news data
        fetch('/public/news.json')
        .then(res=>res.json())
        .then(data=>setNews(data));
    }, []);

    const sportsNews = news.filter(n=>n.category_id==4);
    console.log(sportsNews);
    return (
        <div className='py-3'>
            <h3 className='text-xl font-semibold mb-6'>All Caterogy</h3>

            <div>

                {/* showing categories and created dynamic in the category.jsx*/}
                {
                    categories.map(cat => <Category key={cat.id} cat={cat}></Category>)
                }

            </div>
            <div className='space-y-5'>
                {
                 sportsNews.map(sport=><SportsNews key={sport._id} sport={sport}></SportsNews>)
                } 
        
            </div>
           

        </div>
    );
};

export default LeftNavigation;