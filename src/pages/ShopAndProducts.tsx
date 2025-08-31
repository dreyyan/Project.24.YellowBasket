import Styles from "../Styles";
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header";
import Product from "../components/Product"

const ShopAndProducts = () => {
    document.title = "YellowBasket: Dashboard";
    return (
        <div className="flex flex-row">
            <div className="grid grid-cols-3 gap-1 w-full h-500">
                <div className="h-20 row-span-6 col-span-3">
                    <div className="flex h-full">
                        <Header/>
                    </div>
                </div>
                <div className={Styles.productsDivStyle}>
                    <Product/>
                </div>
            </div>
        </div>
    );
}

export default ShopAndProducts;