import Styles from "../Styles";

const Dashboard = () => {
    document.title = "YellowBasket: Dashboard";
    return (
        <div className="flex flex-row">
            <h1 className={Styles.h1Style}>YellowBasket</h1>
        </div>
    );
}

export default Dashboard;