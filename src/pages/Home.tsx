import Styles from "../Styles";
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header";

const Home = () => {
    document.title = "YellowBasket: Dashboard";
    return (
        <div className="flex flex-row">
            <div className="grid grid-cols-3 gap-1 w-full h-500">
                <div className="border-2 h-20 row-span-6 col-span-3">
                    <div className="border flex h-full">
                        <Header/>
                    </div>
                </div>
                <div className="border border-black row-span-200 col-span-3">HERO SECTION</div>
                <div className="border border-black h-34 row-span-14 col-span-3">BOTTOM NAVIGATION</div>
            </div>
        </div>
    );
}

export default Home;