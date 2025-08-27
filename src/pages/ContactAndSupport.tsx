import Styles from "../Styles";
import { Link } from "react-router-dom";

const ContactAndSupport = () => {
    document.title = "YellowBasket: Dashboard";
    return (
        <div className="flex flex-row">
            <div className="grid grid-cols-3 gap-1 w-full h-500">
                <div className="border-2 h-20 row-span-6 col-span-3">
                    <div className="border flex h-full">
                        <div className="border flex justify-center items-center w-[20%]">
                            <h1 className={`${Styles.h1Style} color-primary`}>Yellow</h1>
                            <h1 className={`${Styles.h1Style} text-gray-800`}>Basket</h1>
                            </div>
                        <div className="flex flex-row justify-center items-center gap-x-[6%] border w-[80%] bg-yellow-500">
                            <Link to="/Home"><h3 className={Styles.linkTextStyle}>Home</h3></Link>
                            <Link to="/ShopAndProducts"><h3 className={Styles.linkTextStyle}>Shop/Products</h3></Link>
                            <Link to="/Collections"><h3 className={Styles.linkTextStyle}>Collections</h3></Link>
                            <Link to="/AboutUs"><h3 className={Styles.linkTextStyle}>About Us</h3></Link>
                            <Link to="/ContactAndSupport"><h3 className={Styles.linkTextStyle}>Contact/Support</h3></Link>
                        </div>
                        <div className="border w-[10%] bg-blue-500">Burger Menu</div>
                    </div>
                </div>
                <div className="border border-black row-span-200 col-span-3">HERO SECTION</div>
                <div className="border border-black h-34 row-span-14 col-span-3">BOTTOM NAVIGATION</div>
            </div>
        </div>
    );
}

export default ContactAndSupport;