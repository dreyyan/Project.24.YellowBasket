
import Styles from "../Styles";
import { Link } from "react-router-dom";

// Components
import BurgerMenu from "./BurgerMenu";

const Header = () => {
    return (
        <>
            <div className="flex justify-center items-center w-[14%] bg-white-500">
                <Link to="/Home">
                    <img src="/yellow-basket-logo.png" className="w-30"/>
                </Link>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-[6%] w-[80%]">
                <Link to="/Home"><h3 className={Styles.linkTextStyle}>Home</h3></Link>
                <Link to="/ShopAndProducts"><h3 className={Styles.linkTextStyle}>Shop/Products</h3></Link>
                <Link to="/Collections"><h3 className={Styles.linkTextStyle}>Collections</h3></Link>
                <input type="text" placeholder="Enter to search..." className={Styles.searchBarStyle}/>
            </div>
            <BurgerMenu/>
        </>
    );
}

export default Header;