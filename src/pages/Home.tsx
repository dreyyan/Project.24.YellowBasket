import Styles from "../Styles";
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    document.title = "YellowBasket: Home";
    return (
        <div className="flex flex-row">
            <div className="grid grid-cols-3 gap-1 w-full h-200">
                {/* Header */}
                <div className="h-20 row-span-6 col-span-3">
                    <div className="flex h-full">
                        <Header/>
                    </div>
                </div>
                {/* Hero Section */}
                <div className="flex flex-col row-span-200 col-span-3 h-[2000px] bg-white-500 px-[4%] pt-[10%]">
                    {/* First Row */}
                    <div className={Styles.heroSectionLeftDivStyle}>
                        <img src="yellow-basket.png" className="absolute right-[2%] top-[14%] w-160 z-0"/>
                        <h1 className={Styles.heroSectionh1Style}>Shop at</h1>
                        <h2 className={Styles.heroSectionh2Style}>your convenience.</h2>
                        <p className={Styles.heroSectionpStyle}>Shop smarter with AI-powered recommendations, personalized collections, and seamless checkout—all in one place.</p>
                    </div>
                    {/* Second Row */}
                    <div className={Styles.heroSectionRightDivStyle}>
                        <h1 className={Styles.heroSectionh1Style}>Fast.</h1>
                        <h2 className={Styles.heroSectionh2Style}>Simple.</h2>
                        <p className={Styles.heroSectionpStyle}>Complete your shopping in seconds with intuitive navigation, quick search, and one-click checkout.</p>
                        <img src="ai-icon.png" className="absolute left-[4%] top-[70%] w-120 z-0"/>
                    </div>
                    {/* Third Row */}
                    <div className={Styles.heroSectionLeftDivStyle}>
                        {/* <img src="yellow-basket.png" className={Styles.heroSectionImageRightStyle}/> */}
                        <h1 className={Styles.heroSectionh1Style}>Curated</h1>
                        <h2 className={Styles.heroSectionh2Style}>Just for you.</h2>
                        <p className={Styles.heroSectionpStyle}>Explore collections handpicked by AI based on your tastes, preferences, and shopping history.</p>
                    </div>
                </div>
                {/* Footer */}
                <div className="h-34 row-span-14 col-span-3">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Home;