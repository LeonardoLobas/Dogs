import React from "react";
import styles from "./Footer.module.css";
import FooterImg from "../Assets/dogs-footer.svg";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={FooterImg} alt="Img Footer" />
            <p>Dogs.Alguns direitos reservados.</p>
        </div>
    );
};

export default Footer;
