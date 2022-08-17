import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import {CgProfile,CgNotifications} from 'react-icons/cg'
import {BiWallet} from 'react-icons/bi'
import {RiHistoryLine} from 'react-icons/ri'

interface SideBarPropTypes {

}

const Panel:React.FC<SideBarPropTypes> = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation().pathname
    useEffect(() => {
        console.log(location);
    },[]);

    return (
        <>
            <div className='panel'>
                <div className="mcontent">
                    hi
                </div>
                <nav>
                    {/* <Link to="/home">home</Link>
                        <Link to="/history">history</Link> */}
                    <Link to="/dashboard">
                        <div className={`link ${location === '/dashboard' ? 'active':''}`}>
                            <BiWallet/>
                            <p>Dashboard</p>

                        </div>
                    </Link>
                    <Link to="/history">
                        <div className={`link ${location === '/history' ? 'active':''}`}>
                            <RiHistoryLine/>
                            <p>History</p>
                        </div>
                    </Link>

                    <div className='link center'>
                        <div className='circle'>+</div>
                    </div>
                    <Link to="/notifications">
                    <div className={`link ${location === '/notifications' ? 'active':''}`}>
                        <CgNotifications/>
                        <p>Notifications</p>
                    </div>
                    </Link>
                    <Link to="/profile">
                    <div className={`link ${location === '/profile' ? 'active':''}`}>
                        <CgProfile />
                        <p>Profile</p>
                    </div>
                    </Link>
                </nav>

            </div>
        </>
    )
};

export default Panel;
