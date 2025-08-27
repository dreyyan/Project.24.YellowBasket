import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerMenu = () => {
        if (isOpen == false) setIsOpen(true)
        if (isOpen == true) setIsOpen(false)
    }

    return (
        <div className="">
            {/* Burger Menu Icon */}
            <button onClick={handleBurgerMenu}>
                <img src="/burger-menu-icon.png" className="w-20 z-1"/>
            </button>

            {/* Burger Menu Navigation Links */}
            {isOpen && 
                <div className="flex flex-col w-60 h-70 bg-background absolute top-14.5 right-[1.35%] pt-[1%] pr-[2%] border-b-[2px] border-r-[3px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
                    <div className="flex justify-end items-center bg-background h-10 border-b-2"><Link to="/MyAccount">My Account</Link></div>
                    <div className="flex justify-end items-center bg-background h-10 border-b-2"><Link to="/Orders">Orders</Link></div>
                    <div className="flex justify-end items-center bg-background h-10 border-b-2"><Link to="/Wishlist">Wishlist</Link></div>
                    <div className="flex justify-end items-center bg-background h-10 border-b-2"><Link to="/Settings">Settings</Link></div>
                    <div className="flex justify-end items-center bg-background h-10 border-b-2"><Link to="/Help">Help</Link></div>
                    <div className="flex justify-end items-center bg-background h-10"><Link to="/">Log Out</Link></div>
                </div>
            }
        </div>
    );
}

export default BurgerMenu;