
import { NavLink } from 'react-router-dom';

const Category = ({cat}) => {
    
    return (
        <div>
            <li className='list-none text-xl font-medium text-dark03 px-12 py-4'>
                {/* here created dynamic route for each category */}
                <NavLink to={`/categories/${cat.id}`}>{cat.name}</NavLink>
            </li>
        </div>
    );
};

export default Category;