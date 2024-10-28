import React from "react";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItens = ({ photo }) => {
    return (
        <li className={styles.photo}>
            <img src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItens;
