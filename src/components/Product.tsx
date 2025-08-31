import Styles from "../Styles";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className={Styles.modalStyle}>
            <h3 className={Styles.h3Style}>Product Name</h3>
            <h4 className={Styles.h4Style}>Product Description</h4>
        </div>
    );
}

export default Product;