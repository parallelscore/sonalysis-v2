import './index.scss';

import Sidebar from './Sidebar';
import TopNav from './Top';

export interface CardProps {
    number?: number;
    desc?: string;
    image?: string;
    charts?: any;
}

const NavBar = (props) => {
    return (
        <div className='layout'>
            <div>
                <Sidebar />
            </div>

            <div className='left-menu'>
                <TopNav />
                {props.children}
            </div>
        </div>
    );
};

export default NavBar;
