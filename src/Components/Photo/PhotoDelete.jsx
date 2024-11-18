import React from "react";
import styles from "./PhotoDelete.module.css";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    async function handleClick(event) {
        event.preventDefault();
        const { url, options } = PHOTO_DELETE(id);
        const { response } = request(url, options);
        if (response.ok) window.location.reload();
    }

    return (
        <div>
            <button onClick={handleClick} className={styles.delete}>
                Deletar
            </button>
        </div>
    );
};

export default PhotoDelete;
