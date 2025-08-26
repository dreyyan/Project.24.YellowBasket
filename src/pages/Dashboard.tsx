import Styles from "../Styles";

const Dashboard = () => {
    document.title = "YellowBasket: Dashboard";
    return (
        <div className="flex flex-row">
                {/* <h1 className={`${Styles.h1Style} col-span-3`}>YellowBasket</h1> */}
            <div className="grid grid-cols-3 gap-2 w-full h-500">
                <div className="border-2 h-20 row-span-6 col-span-3">
                    <div className="border grid grid-cols-3 h-[100%]">
                        <div className="border w-80"></div>
                        <div className="border w-200"></div>
                        <div className="border w-60"></div>
                    </div>
                </div>
                <div className="border border-black row-span-200 col-span-3">HERO SECTION</div>
                <div className="border border-black h-34 row-span-14 col-span-3">BOTTOM NAVIGATION</div>
            </div>
        </div>
    );
}

export default Dashboard;