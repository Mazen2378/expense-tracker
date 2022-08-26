import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgProfile, CgNotifications,} from 'react-icons/cg'
import {BiWallet} from 'react-icons/bi'
import {RiHistoryLine} from 'react-icons/ri'
import {motion} from 'framer-motion'
import RecentTransactions from './RecentTransactions'
import Calander from './Calander'

const animation = {
  initial: { y: '-100vh',x:'0px', width:'calc(100vh + 25vh)', height:'calc(100vh + 25vh)',},
  animate: {width: 0, height:0, y:0},
  exit: { y: '-100vh',x:'0px', width:'calc(100vh + 25vh)', height:'calc(100vh + 25vh)',},
}
interface SideBarPropTypes {
    add:boolean;
    setAdd: (add:boolean) => void
}
interface C {
  [h:string]: JSX.Element
}
const Panel:React.FC<SideBarPropTypes> = () => {

  const cmpnts:C = {
    '/dashboard': (<RecentTransactions />),
    '/history': (<Calander />),
  }
    const location = useLocation()
    return (
        <>
            <div className='panel'>
                <div className="mcontent">
                  {
                    cmpnts[location.pathname]
                  }
                </div>
                <nav>
                    <Link to="/dashboard">
                        <div className={`link ${location.pathname === '/dashboard' ? 'active':''}`}>
                            <BiWallet/>
                            <p>Dashboard</p>

                        </div>
                    </Link>
                    <Link to="/history">
                        <div className={`link ${location.pathname === '/history' ? 'active':''}`}>
                            <RiHistoryLine/>
                            <p>History</p>
                        </div>
                    </Link>

                    <Link to="/add">
                    <div className='link center'>
                      <motion.div className="circle absolute"
                        transition={{
                          duration:0.5
                        }}
                        variants={animation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <motion.p
                          transition={
                          {
                            duration:0.5
                          }
                          }
                          variants={
                        {
                          initial: {opacity: 0},
                          animate: {opacity: 1},
                          exit:{opacity:0}
                        }}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          +
                        </motion.p>
                      </motion.div>
                    </div>
                    </Link>

                    <Link to="/notifications">
                    <div className={`link ${location.pathname === '/notifications' ? 'active':''}`}>
                        <CgNotifications/>
                        <p>Notifications</p>
                    </div>
                    </Link>
                    <Link to="/profile">
                    <div className={`link ${location.pathname === '/profile' ? 'active':''}`}>
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
