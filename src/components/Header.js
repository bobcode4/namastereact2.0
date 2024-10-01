import {headerLogo} from "../utils/commons";
import React from "react";

import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 
const Header = () => {
    const [btnName, setBtnName] = React.useState("LogIn")
    const onlineStatus = useOnlineStatus();
    return (
        <div className='flex justify-between bg-pink-100 shadow-xl m-2'>
            <div className='logo-container'>
                <img className='w-20 h-full' src={headerLogo}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-8">{onlineStatus?"🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <l1 className="px-4"><Link to="/grocery">Safari Mart</Link></l1>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    
                    <button className="align self-start"
                    onClick={()=> {
                        btnName === "LogIn" ?
                        setBtnName("LogOut") :
                        setBtnName("LogIn"); 
                    }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header