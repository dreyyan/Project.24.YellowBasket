import Styles from "../Styles";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-row justify-center items-center bg-gray color-background border gap-[4%] h-full">
                <Link to="/AboutUs"><h3 className={Styles.linkTextStyle}>About Us</h3></Link>
                <Link to="/ContactAndSupport"><h3 className={Styles.linkTextStyle}>Contact/Support</h3></Link>
                <Link to="/FAQ"><h3 className={Styles.linkTextStyle}>FAQ</h3></Link>
                <Link to="/PrivacyPolicyTerms"><h3 className={Styles.linkTextStyle}>Privacy Policy & Terms</h3></Link>
        </div>
    );
}

export default Footer;