import React from "react";
import FeedPhotosItens from "./FeedPhotosItens";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";

const FeedPhotos = () => {
    const { data, error, loagind, request } = useFetch();
    React.useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET();
            request(url, options);
        }
    });
    return (
        <div>
            <FeedPhotosItens />
        </div>
    );
};

export default FeedPhotos;
