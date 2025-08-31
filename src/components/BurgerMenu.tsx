import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        if (isOpen == false) setIsOpen(true)
        if (isOpen == true) setIsOpen(false)
    }

    return (
        <div className="">
            {/* Burger Menu Icon */}
            <button onClick={toggleSidebar}>
                <img src="/burger-menu-icon.png" className="w-20 z-1"/>
            </button>

            {/* Burger Menu Navigation Links */}
            {isOpen &&
                <div className="flex flex-col items-end w-80 h-full bg-white z-1 fixed top-0 right-0 border-l-[2px] shadow-lg">
                    <button onClick={toggleSidebar} className="pr-[11%]">
                        <img src="/exit-icon.png" className="w-20 z-1"/>
                    </button>
                    <div className={Styles.sidebarLinkDivStyle}><Link to="/MyAccount" className={Styles.sidebarLinkStyle}>My Account</Link></div>
                    <div className={Styles.sidebarLinkDivStyle}><Link to="/Orders" className={Styles.sidebarLinkStyle}>Orders</Link></div>
                    <div className={Styles.sidebarLinkDivStyle}><Link to="/Wishlist" className={Styles.sidebarLinkStyle}>Wishlist</Link></div>
                    <div className={Styles.sidebarLinkDivStyle}><Link to="/Settings" className={Styles.sidebarLinkStyle}>Settings</Link></div>
                    <div className={Styles.sidebarLinkDivStyle}><Link to="/Help" className={Styles.sidebarLinkStyle}>Help</Link></div>
                    <div className="flex items-center justify-end items-center w-full h-20 pr-[8%] text-2xl font-semibold"><Link to="/" className={Styles.sidebarLinkStyle}>Log Out</Link></div>
                </div>
            }
        </div>
    );
}

export default BurgerMenu;