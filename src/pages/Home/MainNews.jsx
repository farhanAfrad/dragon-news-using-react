

import NewsThumbnail from './NewsThumbnail';
import { useEffect, useState } from 'react';



const MainNews = () => {
    const [allNews, setAllnews] = useState([]);
    

    useEffect(()=>{
        fetch('/public/news.json')
        .then(res => res.json())
        .then(data => setAllnews(data));
    },[])

   
    return (
        <div>
            {
                allNews.map(news => <NewsThumbnail key={news._id} news ={news}></NewsThumbnail>)
            }        
        </div>
    );
};

export default MainNews;