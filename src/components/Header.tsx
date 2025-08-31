
import Styles from "../Styles";
import { Link } from "react-router-dom";

// Components
import BurgerMenu from "./BurgerMenu";

const Header = () => {
    return (
        <>
            {/* LEFT - Banner */}
            <div className="flex justify-center items-center w-[14%] bg-white-500">
                <Link to="/Home">
                    <img src="/yellow-basket-logo.png" className="w-30"/>
                </Link>
            </div>
            {/* CENTER - Header Links */}
            <div className="flex flex-row justify-center items-center gap-x-[6%] w-[80%]">
                <Link to="/Home"><h3 className={Styles.headerLinkStyle}>Home</h3></Link>
                <Link to="/ShopAndProducts"><h3 className={Styles.headerLinkStyle}>Shop/Products</h3></Link>
                <Link to="/Collections"><h3 className={Styles.headerLinkStyle}>Collections</h3></Link>
                <input type="text" placeholder="Enter to search..." className={Styles.searchBarStyle}/>
            </div>
            {/* RIGHT - Burger Menu */}
            <BurgerMenu/>
        </>
    );
}

export default Header;