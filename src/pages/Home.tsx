import Styles from "../Styles";
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    document.title = "YellowBasket: Dashboard";
    return (
        <div className="flex flex-row">
            <div className="grid grid-cols-3 gap-1 w-full h-200">
                <div className="h-20 row-span-6 col-span-3">
                    <div className="flex h-full">
                        <Header/>
                    </div>
                </div>
                <div className="flex flex-col row-span-200 col-span-3 bg-white-500 px-[4%] pt-[10%]">
                    <div className={Styles.heroSectionDivStyle}>
                        <img src="yellow-basket.png" className={Styles.heroSectionImageStyle}/>
                        <h1 className={Styles.heroSectionh1Style}>Shop at</h1>
                        <h2 className={Styles.heroSectionh2Style}>your convenience.</h2>
                        <p className={Styles.heroSectionpStyle}>Shop smarter with AI-powered recommendations, personalized collections, and seamless checkout—all in one place.</p>
                    </div>
                </div>
                <div className="h-34 row-span-14 col-span-3">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Home;