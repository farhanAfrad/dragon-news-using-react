
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
             {/* as there is nothing common component or style all the routes thats why there is no other component or element */}
            <Outlet></Outlet> 
        </div>
    );
};

export default Layout;